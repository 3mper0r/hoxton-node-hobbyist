import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";


const app = express()
app.use(cors())
app.use(express.json())

const prisma = new PrismaClient()

app.get('/users', async (req, res) => {
    const allUsers = await prisma.user.findMany()
    res.send(allUsers)
})

app.post('/users', async (req, res) => {
    const body = req.body
    const { full_name, photo_url, email } = body

    const createUser = await prisma.user.create({
        data: { full_name, photo_url, email }
    })
    res.send(createUser)

})

app.get('/users/:id', async (req, res) => {
    const id = Number(req.params.id)
    const oneUser = await prisma.user.findFirst({
        where: { id: id },
        include: { userHobbies: true }
    })
    res.send(oneUser)
})

app.get('/hobbies', async (req, res) => {
    const allHobbies = await prisma.hobby.findMany()
    res.send(allHobbies)
})

app.post('/hobbies', async (req, res) => {
    const body = req.body
    const createHobby = await prisma.hobby.create({
        data: {
            name: body.name,
            image_URL: body.image_URL,
            active: body.active
        }
    })
    res.send(createHobby)
})

app.get('/hobbies/:id', async (req, res) => {
    const id = Number(req.params.id)
    const oneHobby = await prisma.hobby.findFirst({
        where: { id: id },
        include: { userHobbies: true }
    })
    res.send(oneHobby)
})
app.listen(4000, () => console.log(`Server walking on https://localhost:${4000}`))
