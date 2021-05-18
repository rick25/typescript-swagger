import { Router } from "express"
import { getTasks } from "../controllers/tasks.controller"

const router = Router()

router.get("/tasks", getTasks)

router.get("/tasks/count", (req, res) => res.send('Hola Mundo'))

router.post("/tasks", (req, res) => res.send('Hola Mundo'))

router.get("/tasks/:id", (req, res) => res.send('Hola Mundo'))

router.delete("/tasks/:id", (req, res) => res.send('Hola Mundo'))

router.put("/tasks/:id", (req, res) => res.send('Hola Mundo'))

export default router
