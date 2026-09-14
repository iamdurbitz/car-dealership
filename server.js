import express from "express"
import { apiRouter } from "./route-handlers/route-handlers.js"


const PORT = 8000
const server = express()



server.use("/api", apiRouter)
server.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})

server.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})