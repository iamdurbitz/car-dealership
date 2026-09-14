import express from "express"
import { carsController, greetController } from "../controllers/controllers.js"

export const apiRouter = express.Router()

apiRouter.get("/home", greetController)
apiRouter.get("/cars", carsController)