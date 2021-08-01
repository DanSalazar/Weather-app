import React, { useState } from 'react';
import CloudDrizzle from '../../assets/CloudDrizzle';
import SunIcon from '../../assets/Sun';
import SnowIcon from '../../assets/Snow';
import CloudsIcon from '../../assets/Clouds';
import { formatDate } from '../../utils';
import {
    ForecastBody,
    ForecastCard,
    ForecastContainer,
    TimeForecast,
} from './styles';
import RainIcon from '../../assets/Rain';

const dictWeather = {
    Clear: <SunIcon height={48} width={48} />,
    Clouds: <CloudsIcon height={48} width={48} />,
    Snow: <SnowIcon height={48} width={48} />,
    Drizzle: <CloudDrizzle height={48} width={48} />,
    Rain: <RainIcon height={48} width={48} />,
};

const Forecast = ({ forecastData }) => {
    const [forecast, setForecast] = useState(forecastData.slice(5));

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
    );
};

export default Forecast;
