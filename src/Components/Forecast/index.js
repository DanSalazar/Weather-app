import { useState, useEffect } from 'react'
import CloudDrizzle from '../../assets/CloudDrizzle'
import SunIcon from '../../assets/Sun'
import SnowIcon from '../../assets/Snow'
import CloudsIcon from '../../assets/Clouds'
import RainIcon from '../../assets/Rain'
import LightningIcon from '../../assets/Lightning'
import SmokeIcon from '../../assets/Smoke'
import LightningRainIcon from '../../assets/LightningRain'
import { formatDate } from '../../utils'
import {
  ForecastBody,
  ForecastCard,
  ForecastContainer,
  TimeForecast
} from './styles'

const dictWeather = {
  Clouds: <CloudsIcon height={44} width={44} />,
  Snow: <SnowIcon height={44} width={44} />,
  Drizzle: <CloudDrizzle height={44} width={44} />,
  Rain: <RainIcon height={44} width={44} />,
  Lightning: <LightningIcon height={44} width={44} />,
  LightningRain: <LightningRainIcon height={44} width={44} />,
  Clear: <SunIcon height={44} width={44} />,
  Smoke: <SmokeIcon height={44} width={44} />
}

const Forecast = ({ forecastData }) => {
  const [forecast, setForecast] = useState([])
  
  useEffect(() => {
    setForecast(forecastData.slice(1, 4))
  }, [forecastData])

  return (
    <ForecastContainer>
      {forecast.map((item) => (
        <ForecastCard key={item.dt}>
          {formatDate(item.dt)}
          <ForecastBody>
            {dictWeather[item.weather[0].main]}
            <TimeForecast>
              <p> {item.temp.max.toFixed()}° </p>
              <span> {item.weather[0].main} </span>
            </TimeForecast>
          </ForecastBody>
        </ForecastCard>
      ))}
    </ForecastContainer>
  )
}

export default Forecast
