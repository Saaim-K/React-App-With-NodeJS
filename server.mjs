import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>إِنَّ ٱلۡإِنسَٰنَ لَفِي خُسۡرٍ</h1>')
    console.log('Request IP :',req.ip);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})