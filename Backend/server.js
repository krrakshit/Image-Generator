import express from "express";
import axios from "axios";
import cors from "cors";
import { config } from "dotenv";

config({ path: "./config/config.env" });


const app = express()

app.use(cors())

const invokeUrl = "https://ai.api.nvidia.com/v1/genai/stabilityai/stable-diffusion-xl"


const API_KEY = process.env.API_KEY

app.use(express.json())

app.post('/generate-our-image-brotha', async (req, res)=> {
    try {
        const response = await axios.post(invokeUrl, req.body, {
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Accept": "application/json",
            }
        })

        res.json(response.data)
    } catch (error) {
        res.status(500).send({error: "API Request not successful"})
    }
})



const PORT = 1312

app.listen(PORT, ()=> console.log("Server is running brotha..."))
console.log(process.env.API_KEY)