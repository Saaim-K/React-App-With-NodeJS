import express from 'express'
import path from 'path'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 5555

// URL params: (Unsecure)
//             http://localhost:5001/weather/karachi/75290
//             => app.get('/weather/:city/:zip', (req, res)=>{
//                  req.params.city 
//                  req.params.zip 
// }

// Query Params: (Unsecure)
//             http://localhost:5001/weather?city=karachi&zip=75290
//             => app.get('/weather', (req, res)=>{
//                  req.query.city 
//                  req.query.zip 
//             }

// Body params: (Secure)
//             app.use(express.json()) {Parsing body is must on server}
//             http://localhost:5001/weather
//             {
//                city='karachi',
//                zip='75290'
//             }
//              => app.get('/weather', (req, res)=>{
//                  req.body.city 
//                  req.body.zip 
//             }

app.use(cors());

app.get('/weather/:city', (req, res) => {
    console.log('Request IP :', req.ip)
    console.log('Params :', req.params.city)
    res.send({
        city: req.params.city,
        temp: '30 °C',
        max: ' 35°C',
        min: '19 °C',
        humid: 45,
        time: new Date().toDateString()
    })
})

app.get('/abc', (req, res) => {
    console.log('Request IP :', req.ip)
    res.send('<h1>إِنَّ ٱلۡإِنسَٰنَ لَفِي خُسۡرٍ</h1>')
})

app.get('/cde', (req, res) => {
    console.log('Request IP :', req.ip)
    res.send(`<h1>Saaim</h1>`)
})


const __dirname = path.resolve()
console.log(" dirname :=> ", __dirname);
app.use('/', express.static(path.join(__dirname, './react-express/build')))
app.use('*', express.static(path.join(__dirname, './react-express/build')))


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
    console.log(`Development mode started on port ${port}`)
})