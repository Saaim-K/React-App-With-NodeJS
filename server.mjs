import express from 'express'
import path from 'path'
const app = express()
const port = 3000

const __dirname = path.resolve()

app.use('/', express.static(
    path.join(__dirname, './react-express/build')
))


app.get('/abc', (req, res) => {
    res.send('<h1>إِنَّ ٱلۡإِنسَٰنَ لَفِي خُسۡرٍ</h1>')
    console.log('Request IP :', req.ip)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})