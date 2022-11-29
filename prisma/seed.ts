import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    seedClient()

    setTimeout(() => {
        seedPolicies()
    }, 3000)
}

function seedClient() {
    let clientData = [
        { id: 38, name: "JPO Appliance" },
        { id: 67, name: "JPO Corp" },
        { id: 9, name: "Flamngo Appliance" },
        { id: 95, name: "AT Appliance Sacramento" }
    ]

    clientData.forEach(async (data) => {
        await prisma.client.upsert({ where: { id: data.id }, update: {}, create: data })
    })
}

function seedPolicies() {
    let policyCategoryData = [
        {
            "id": 162,
            "name": "Brands In Warranty123567",
            "client_id": 9
        },
        {
            "id": 163,
            "name": "Brands Out Of Warranty22",
            "client_id": 38
        },
        {
            "id": 164,
            "name": "Warranty/Recall Period",
            "client_id": 38
        },
        {
            "id": 165,
            "name": "Products Covered",
            "client_id": 38
        },
        {
            "id": 166,
            "name": "Policies & Procedures",
            "client_id": 38
        },
        {
            "id": 167,
            "name": "Contacts",
            "client_id": 38
        },
        {
            "id": 176,
            "name": "Office Information / Hours",
            "client_id": 9
        },
        {
            "id": 177,
            "name": "Rates / Payment",
            "client_id": 9
        },
        {
            "id": 178,
            "name": "Brands In Warranty",
            "client_id": 9
        },
        {
            "id": 179,
            "name": "Brands Out Of Warranty",
            "client_id": 9
        },
        {
            "id": 180,
            "name": "Warranty / Recall Period",
            "client_id": 9
        },
        {
            "id": 181,
            "name": "Products Serviced",
            "client_id": 9
        },
        {
            "id": 182,
            "name": "Policies & Procedures",
            "client_id": 9
        },
        {
            "id": 183,
            "name": "Contacts",
            "client_id": 9
        },
        {
            "id": 583,
            "name": "Quick Reference",
            "client_id": 67
        },
        {
            "id": 585,
            "name": "Brands In Warranty",
            "client_id": 67
        },
        {
            "id": 586,
            "name": "Brands Out of Warranty",
            "client_id": 67
        },
        {
            "id": 587,
            "name": "Office Information / Hours",
            "client_id": 67
        },
        {
            "id": 588,
            "name": "Parts Procedures",
            "client_id": 67
        },
        {
            "id": 589,
            "name": "Rates / Payment",
            "client_id": 67
        }
    ]

    policyCategoryData.forEach(async (data) => {
        await prisma.policyCategory.upsert({ where: { id: data.id }, update: {}, create: data })
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