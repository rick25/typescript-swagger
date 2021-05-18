import {Handler} from "express"
import {nanoid} from "nanoid"
import {getConnection} from "../db"

export const getTasks: Handler = (req, res) => {
    const data = getConnection().get("tasks").value()
    return res.json(data)
}

export const countTasks: Handler = (req, res) => {
    try {
        const tasksLength = getConnection().get("tasks").value().length
        res.json(tasksLength)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const createTask: Handler = (req, res) => {
    const {name, description} = req.body
    const newTask = {
        id: nanoid(),
        name,
        description
    }
    try {
        getConnection().get('tasks').push(newTask).write()
    } catch (error) {
        res.status(500).send(error)
    }
    res.json(newTask)
}

export const getTask: Handler = (req, res) => {
    const id = req.params.id
    try {
        const taskFound = getConnection().get('tasks').find({ id }).value()
        if(!taskFound) {
            res.status(404).json({ message: "Task not found" })
        }
        res.json(taskFound)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deleteTask: Handler = (req, res) => {
    const id = req.params.id
    try {
        const taskFound = getConnection().get('tasks').find({ id }).value()
        if(!taskFound) res.status(404).json({ message: "Task not found" })
        const deletedTask = getConnection().get('tasks').remove({ id }).write()
        res.json(deletedTask)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const updateTask: Handler = (req, res) => {
    const id = req.params.id
    try {
        const taskFound = getConnection().get('tasks').find({ id }).value()
        if(!taskFound) res.status(404).json({ message: "Task not found" })
        const updatedTask = getConnection().get('tasks').find({ id }).assign(req.body).write()
        res.json(updatedTask)
    } catch (error) {
        res.status(500).send(error)
    }
}