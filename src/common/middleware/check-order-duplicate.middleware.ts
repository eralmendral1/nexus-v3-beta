import { Injectable } from '@nestjs/common'
import { NestMiddleware } from '@nestjs/common/interfaces'
import { Request, Response, NextFunction } from 'express'
import { PrismaService } from '@/modules/prisma/prisma.service'


// Update orders if found duplicates.
@Injectable()
export class CheckOrderDuplicate implements NestMiddleware {
    constructor(private readonly prisma: PrismaService) { }

    async use(req: Request, res: Response, next: NextFunction) {
        // / Get DATA & RDATA fields.
        const item_id = req.body.item_id
        const client_id = req.body.client_id

        let createOrderRequestData = {}

        // Get 'DATA' and 'RDATA' fields.
        Object.keys(req.body).forEach((key: string) => {
            if (key.includes('DATA')) {
                createOrderRequestData[key] = req.body[key]
            }
        })

        let fieldMapCheckDuplicates = {}

        await Promise.all(Object.keys(createOrderRequestData).map(async (order_field: string) => {
            let value = createOrderRequestData[order_field]
            let hasFieldMappingCheckDuplicate = await this.prisma.fieldMapping.findFirst({
                where: {
                    item_id,
                    order_field,
                    check_dup: true
                }
            })

            if (hasFieldMappingCheckDuplicate) {
                fieldMapCheckDuplicates[order_field] = value
            }
        }))


        if (Object.keys(fieldMapCheckDuplicates).length) {
            let queryString = {}
            Object.keys(fieldMapCheckDuplicates).forEach((key: string) => {
                queryString[key] = fieldMapCheckDuplicates[key]
            })

            let updatedOrders = await this.prisma.order.updateMany({
                where: {
                    OR: [
                        {
                            status: 'T',
                        },
                        {
                            status: 'S'
                        }
                    ],
                    AND: [
                        {
                            item_id,
                            client_id,

                        }
                    ]
                },
                data: { ...createOrderRequestData }
            })

            if (updatedOrders) {
                res.send({
                    message: "Order duplicates updated.",
                    ...updatedOrders
                })
            } else {
                next()
            }
        } else {
            next()
        }
    }
}