const express = require("express")
// const morgan = require("morgan")
const logger = require("./middleware/logger")
// const deny = require("./middleware/deny")
// const user = require("./middleware/user")
const welcomeRouter = require("./welcome/welcome-router")
const usersRouter = require("./users/users-router")

const server = express()
const port = 4000

server.use(express.json())
// server.use(morgan("combined"))
// server.use(deny())
server.use(logger())
// server.use(user())


server.use(welcomeRouter)
server.use(usersRouter)

server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "something went wrong try again later",
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})