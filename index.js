const PORT = 8000
const express = require('express')
const {MongoClient } = require('mongodb')
const { v1: uuidv1 } = require('uuid')
const uri = 'mongodb+srv://tomermor:Te709709@cluster0.ju0wi.mongodb.net/Cluster0?retryWrites=true&w=majority'
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json('this is the backend. Hello to my app')

})



// what happens when: fill out the info in the sign up form to create an account(send the info to the backend)
// for that we would have to communicate with mongodb
app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri)
    console.log(req.body)
    const {email,password} = req.body

    const generateduserId = uuidv1()
    const hasedPassword = await bcrypt.hash(password, 10)

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        //check if already exists:
        const checkExistanceUser = await users.findOne( {email} )

        if(checkExistanceUser){
            return res.status(409).send('user already exists. Please log-in.')
        }

        const sanitizedEmail = email.toLowerCase()
        const data = {
            user_id: generateduserId,
            email: sanitizedEmail,
            hashed_password: hasedPassword
        }

        const insertedUser = await users.insertOne(data)
        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn: 60 * 24,

        })

        res.status(201).json({ token, user_id: generateduserId, email: sanitizedEmail})
    } catch (err){
        console.log(err)
    }
})

app.post('/login', async (req, res) => {
    const client = new MongoClient(uri)
    const { email, password } = req.body
    console.log(":D")

    try{
        await client.connect()
        console.log("111")
        const database = client.db('app-data')
        const users = database.collection('users')
        //return the users
        const user = await users.findOne({ email:req.body.email })
        console.log("111' EMAIL: "+ user)
        const correctPassword = await bcrypt.compare(password, user.hashed_password)

        console.log("111")
        if( user && correctPassword){
            const token = jwt.sign(user, email , {
                expiresIn: 60*24
            })
            res.status(201).json({ token, userId: user.user_id, email})
        }
        res.status(400).send('Invalid ')
    } catch(err) {
        console.log(err)
    }
})




app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)

    try {
        await client.connect()
        // res.send(client.db('cluster0').collections('app-data').find("users").toArray())
        const database = client.db('app-data')
        const users = database.collection('users')
        //return the users
        const returnedUsers = await users.find().toArray()
        
        res.send(returnedUsers)
    } finally {
        await client.close()
    }
})

app.listen(PORT, () => console.log('SERVER RUNNING ON port ' + PORT))