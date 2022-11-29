import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    // Seed Clients
    let clientData = [
        { id: 38, name: "JPO Appliance" },
        { id: 67, name: "JPO Corp" },
        { id: 9, name: "Flamngo Appliance" },
        { id: 95, name: "AT Appliance Sacramento" }
    ]

    clientData.forEach(async (data) => {
        await prisma.client.create({ data })
    })

    // End Seed Clients
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