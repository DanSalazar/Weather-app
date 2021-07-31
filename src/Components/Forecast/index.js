import React from 'react';
import SunIcon from '../../assets/Sun';
import {
    ForecastBody,
    ForecastCard,
    ForecastContainer,
    TimeForecast,
} from './styles';

const arr = [1, 2, 3];

const Forecast = ({ Forecast }) => {
    return (
        <ForecastContainer>
            {arr.map((item) => (
                <ForecastCard>
                    <p> Mon </p>
                    <ForecastBody>
                        <SunIcon height={48} width={48} />
                        <TimeForecast>
                            <p> 26° </p>
                            <span> Sunny </span>
                        </TimeForecast>
                    </ForecastBody>
                </ForecastCard>
            ))}
        </ForecastContainer>
    );
};

export default Forecast;
