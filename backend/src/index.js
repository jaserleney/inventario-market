import app from "./app.js";
import './database.js'


const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server on http://localhost:${PORT}`)
})
