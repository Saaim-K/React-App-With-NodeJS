import express from 'express'
import path from 'path'
const app = express()
const port = 5000

const __dirname = path.resolve()
console.log("dirname :=>", __dirname);
console.log("Path dirname :=>", path.join(__dirname, './react-express/build'));

app.use('/', express.static(path.join(__dirname, './react-express/build')))

app.get('/abc', (req, res) => {
    res.send('<h1>إِنَّ ٱلۡإِنسَٰنَ لَفِي خُسۡرٍ</h1>')
    console.log('Request IP :', req.ip)
})

app.use('*', express.static(path.join(__dirname, './react-express/build')))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})