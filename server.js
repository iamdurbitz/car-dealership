import express from "express"
import { apiRouter } from "./route-handlers/route-handlers.js"
import { carsController, greetController } from "./controllers/controllers.js"

const PORT = 8000
const server = express()


apiRouter.get("/home", greetController)
apiRouter.get("/cars", carsController)
server.use("/api", apiRouter)

server.listen(PORT, () => {console.log(`server successfully connected on port ${PORT}`)})