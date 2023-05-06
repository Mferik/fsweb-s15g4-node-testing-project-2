const express = require("express")
const gorevRouter = require("./görevler/gorev-router")
const taskRouter = require("./tasklar/task-router")

const server = express()

server.use(express.json())

server.use("/api/gorev", gorevRouter)
server.use("/api/task",taskRouter)

module.exports = server;