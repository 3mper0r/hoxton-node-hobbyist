import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const users = [
    {
        id: 1,
        full_name: "Elidon",
        photo_url: "elidon.jpg",
        email: 'elidon@live.com'
    },
    {
        id: 2,
        full_name: "Visardo",
        photo_url: "visardo.jpg",
        email: 'visardo@live.com'
    },
    {
        id: 3,
        full_name: "Endi",
        photo_url: "endi.jpg",
        email: "endi@live.com"
    }
]

const hobbies = [
    {
        id: 1,
        name: '69',
        image_URL: "69.jpg",
        active: true
    },
    {
        id: 2,
        name: 'tennis',
        image_URL: 'tennis.jpg',
        active: true
    },
    {
        id: 3,
        name: 'scuba-diving',
        image_URL: "scuba.jpg",
        active: true
    }
]

const userHobbies = [
    {

        userId: 1,
        hobbyId: 1
    },
    {

        userId: 2,
        hobbyId: 2
    },
    {

        userId: 3,
        hobbyId: 3
    }
]

async function populateDatabase() {
    for (const user of users) {
        await prisma.user.create({ data: user })
    }
    for (const hobby of hobbies) {
        await prisma.hobby.create({ data: hobby })
    }
    for (const userHobby of userHobbies) {
        await prisma.userHobby.create({ data: userHobby })
    }

}



populateDatabase() 