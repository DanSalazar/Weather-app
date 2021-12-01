import CloudDrizzle from '../../assets/CloudDrizzle'
import SunIcon from '../../assets/Sun'
import SnowIcon from '../../assets/Snow'
import { IconContainer, Time, WeatherContainer } from './style'
import CloudsIcon from '../../assets/Clouds'
import RainIcon from '../../assets/Rain'
import LightningIcon from '../../assets/Lightning'
import SmokeIcon from '../../assets/Smoke'
import LightningRainIcon from '../../assets/LightningRain'

const dictWeather = {
  Clouds: <CloudsIcon height={110} width={110} />,
  Snow: <SnowIcon height={110} width={110} />,
  Drizzle: <CloudDrizzle height={110} width={110} />,
  Rain: <RainIcon height={110} width={110} />,
  Lightning: <LightningIcon height={110} width={110} />,
  LightningRain: <LightningRainIcon height={110} width={110} />,
  Clear: <SunIcon height={110} width={110} />,
  Smoke: <SmokeIcon height={110} width={110} />
}

const Weather = ({ weatherData }) => {
  const { weather } = weatherData

  return (
    <WeatherContainer>
      <IconContainer>{dictWeather[weather[0].main]}</IconContainer>
      <Time>
        <p> {weatherData.temp.toFixed(0)}° </p>
        <span> {weather[0].main} </span>
      </Time>
    </WeatherContainer>
  )
}

export default Weather
