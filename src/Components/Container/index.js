import { useState, useEffect } from 'react'
import weatherApi from '../../services/api'
import Conditions from '../Conditions'
import Forecast from '../Forecast'
import InputField from '../Input'
import Weather from '../Weather'
import { AppContainer, AppContainerError } from './style'

const Container = () => {
  const [currentWeather, setcurrentWeather] = useState(null)
  const [city, setCity] = useState('London')
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    if (city)
      weatherApi(city)
        .then((res) => {
          setErrors(false)
          setcurrentWeather(res)
        })
        .catch((error) => {
          setErrors(true)
        })
  }, [city])

  return (
    <>
      {errors ? (
        <AppContainerError>
          <InputField setCity={setCity} />
          <p> City not found </p>
        </AppContainerError>
      ) : currentWeather === null ? (
        <></>
      ) : (
        <AppContainer>
          <InputField setCity={setCity} cityName={city} />
          <Weather weatherData={currentWeather.current} />
          <Conditions weatherData={currentWeather.current} />
          <Forecast forecastData={currentWeather.daily} />
        </AppContainer>
      )}
    </>
  )
}

export default Container
