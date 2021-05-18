import app from "./app"
import {createConnection} from "./db"

createConnection()

const port = app.get("port")

app.listen(port)

console.log(`Server run on port ${port}`)
