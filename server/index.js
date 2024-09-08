import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js"
import userRouter from "./route/user.router.js"

// Load environment variables from .env file

dotenv.config(
    { path: './.env' }
)

const app = express()
const port = process.env.PORT || 8000

// Middleware to parse JSON request bodies

app.use(express.json())

//API Handling
app.use("/api",userRouter)


// Database Connection
connectDB();

app.get("/",(req,res) => {
    res.send("Hello, World!")
})

// starting server 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})