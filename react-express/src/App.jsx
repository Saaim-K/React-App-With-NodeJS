import React, { useState } from 'react'
import axios from 'axios'

let baseUrl = ''
if (window.location.href.split(':')[0] === 'http') { baseUrl = 'http://localhost:5555' }

const App = () => {
  const [city, setCity] = useState('')
  const [time, setTime] = useState('')
  const [temp, setTemp] = useState('')
  const [max, setMax] = useState('')
  const [min, setMin] = useState('')
  const [humidity, setHumid] = useState('')

  const getWeather = (e) => {
    e.preventDefault()
    axios.get(`${baseUrl}/weather/${city}`)
      .then(response => {
        console.log(response.data);
        setCity(response.data.city)
        setTime(response.data.time)
        setTemp(response.data.temp)
        setHumid(response.data.humid)
        setMax(response.data.max)
        setMin(response.data.min)

      })
      .catch(function (error) {
        console.log(error);
      })
  }


  return (
    <>
      <h1>This is a React App</h1>
      City Name:
      <input type="text" onChange={(e) => { setCity(e.target.value) }} />
      <button onClick={getWeather}>Get Weather</button>
      <h1>City :{city}</h1>
      <h1>Time :{time}</h1>
      <h1>Temperatue : {temp}</h1>
      <h1>Maximum Temperatue : {max}</h1>
      <h1>Minimum Temperatue : {min}</h1>
      <h1>Humidity : {humidity}</h1>
    </>
  )
}

export default App











