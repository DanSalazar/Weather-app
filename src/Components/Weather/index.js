import React, { useState } from 'react';
import CloudDrizzle from '../../assets/CloudDrizzle';
import SunIcon from '../../assets/Sun';
import SnowIcon from '../../assets/Snow';
import { IconContainer, Time, WeatherContainer } from './style';
import CloudsIcon from '../../assets/Clouds';
import RainIcon from '../../assets/Rain';
import LightningIcon from '../../assets/Lightning';
import LightningRainIcon from '../../assets/LightningRain';

const dictWeather = {
    Clouds: <CloudsIcon height={100} width={100} />,
    Snow: <SnowIcon height={100} width={100} />,
    Drizzle: <CloudDrizzle height={100} width={100} />,
    Rain: <RainIcon height={100} width={100} />,
    Lightning: <LightningIcon height={100} width={100} />,
    LightningRain: <LightningRainIcon height={100} width={100} />,
    Clear: <SunIcon height={100} width={100} />,
};

const Weather = ({ weatherData }) => {
    const { weather } = weatherData;

    return (
        <WeatherContainer>
            <IconContainer>{dictWeather[weather[0].main]}</IconContainer>
            <Time>
                <p> {weatherData.temp.toFixed(0)}° </p>
                <span> {weather[0].main} </span>
            </Time>
        </WeatherContainer>
    );
};

export default Weather;
