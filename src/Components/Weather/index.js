import React from 'react';
import SunIcon from '../../assets/Sun';
import { IconContainer, Time, WeatherWrapper } from './style';

const Weather = ({}) => {
    return (
        <WeatherWrapper>
            <IconContainer>
                <SunIcon width={100} height={100} />
            </IconContainer>
            <Time>
                <p> 29° </p>
                <span> Sunday </span>
            </Time>
        </WeatherWrapper>
    );
};

export default Weather;
