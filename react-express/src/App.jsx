import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [city, setCity] = useState('')
  const [temp, setTemp] = useState('')
  const [max, setMax] = useState('')
  const [min, setMin] = useState('')
  const [humidity, setHumidity] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/weather')
      .then(function (response) {
        console.log(response.data);
        setCity(response.data.city)
        setTemp(response.data.temp)
        setHumidity(response.data.humid)
        setMax(response.data.max)
        setMin(response.data.min)

      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <>
      <h1>This is a React App</h1>
      <input type="text" />
      <h1>City :{city}</h1>
      <h1>Temperatue : {temp}</h1>
      <h1>Maximum Temperatue : {max}</h1>
      <h1>Minimum Temperatue : {min}</h1>
      <h1>Humidity : {humidity}</h1>
    </>
  )
}

export default App











