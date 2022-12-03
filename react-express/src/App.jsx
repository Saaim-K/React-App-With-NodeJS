import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [city, setCity] = useState('')
  const [temp, setTemp] = useState('')
  const [humidity, setHumidity] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/weather')
      .then(function (response) {
        console.log(response.data);
        setCity(response.data.city)
        setTemp(response.data.temp)
        setHumidity(response.data.humid)

      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <>
      <h1> Gracias !!! </h1>
      {/* <button onClick={getWeather}></button> */}
      <h1>{city}</h1>
      <h1>{temp}</h1>
      <h1>{humidity}</h1>
    </>
  )
}

export default App











