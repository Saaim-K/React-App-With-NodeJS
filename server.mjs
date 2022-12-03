import express from 'express'
import path from 'path'
import cors from 'cors'
const app = express()
const port = 5000

app.use(cors());

app.get('/abc', (req, res) => {
    console.log('Request IP :', req.ip)
    res.send('<h1>إِنَّ ٱلۡإِنسَٰنَ لَفِي خُسۡرٍ</h1>')
})
app.get('/weather', (req, res) => {
    console.log('Request IP :', req.ip)
    res.send({
        city: 'Karachi',
        temp: '30 °C',
        min:'19 °C',
        max:' 35°C',
        humid: 45,
    })
})

const __dirname = path.resolve()
console.log("dirname :=>", __dirname);
app.use('/', express.static(path.join(__dirname, './react-express/build')))
app.use('*', express.static(path.join(__dirname, './react-express/build')))


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})