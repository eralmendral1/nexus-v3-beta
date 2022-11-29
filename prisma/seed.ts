import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { policiesData, policyCategoryData, clientsData, contactsData } from './data'


async function main() {
    seedClient()
    seedContacts()
    setTimeout(() => {
        seedPolicies()
    }, 3000)
}


function seedClient() {
    clientsData.forEach(async (data) => {
        await prisma.client.upsert({ where: { id: data.id }, update: {}, create: data })
    })
}

function seedPolicies() {
    // Seed policy categories.
    policyCategoryData.forEach(async (data) => {
        await prisma.policyCategory.upsert({ where: { id: data.id }, update: {}, create: data })
    })

    // Seed policies.
    setTimeout(() => {
        policiesData.forEach(async (data) => {
            await prisma.policy.upsert({ where: { id: data.id }, update: {}, create: data })
        })
    }, 3000)
}

function seedContacts() {
    contactsData.forEach(async (data) => {
        await prisma.contact.upsert({ where: { id: data.id }, update: {}, create: data })
    })
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })