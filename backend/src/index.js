import express from 'express';

const PORT = 3000;

const app = express();
app.use(express.json())


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
