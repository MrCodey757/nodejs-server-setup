import express from 'express'
import cors from 'cors'

// APP CONFIG
const app = express()
const PORT = 8001 || process.env.PORT

// MIDDLEWARES
app.use(cors())
app.use(express.json())

// {
//     "name": "MrCodey",
//     "age": 26,
// }

// API ENDPOINTS
app.get('/app', (req, res) => {
    res.status(200).send('<h1>Hello World !</h1>') // 200 -> OK
})

app.post('/app', (req, res) => {
    const jsonData = req.body
    console.log(jsonData)
    res.status(201).send("Post request successful !") // 201 -> Post request successful
})

// LISTENER
app.listen(PORT, () => { console.log("Listening at:", PORT) })