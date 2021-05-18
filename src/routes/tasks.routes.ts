import { Router } from "express"
import { getTasks, createTask, getTask, deleteTask, updateTask, countTasks } from "../controllers/tasks.controller"

const router = Router()
/**
 * @swagger
 * components:
 *  schemas:
 *      Task:
 *          type: Object
 *          properties:
 *              id:
 *                  type: string
 *                  description: the auto-generated id of task
 *              name:
 *                  type: string
 *                  description: the name of the task 
 *              description:
 *                  type: string
 *                  description: the description of the task
 *          required:
 *              - name
 *              - description
 *          example:
 *              id: OXOgBhqO7jdOJSPtGzylj
 *              name: My first task
 *              description: I have to do something
 */

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Return a Task list
 *      tags: [Tasks]
 *      responses:
 *          200:
 *              description: the list of Tasks
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Task'
 *
 */
router.get("/tasks", getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get toal task count    
 *      tags: [Tasks]
 *      responses:
 *          200:
 *              description: the total number of tasks
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: integer
 *                          example: 15
 *
 */
router.get("/tasks/count", countTasks)

router.post("/tasks", createTask)

router.get("/tasks/:id", getTask)

router.delete("/tasks/:id", deleteTask)

router.put("/tasks/:id", updateTask)

export default router
