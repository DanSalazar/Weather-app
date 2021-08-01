import React, { useState, useEffect } from 'react';
import weatherApi from '../../services/api';
import Conditions from '../Conditions';
import Forecast from '../Forecast';
import InputField from '../Input';
import Weather from '../Weather';
import { AppContainer } from './style';

const arr = [1, 2, 3, 4];

const Container = () => {
    const [currentWeather, setcurrentWeather] = useState(null);

    useEffect(() => {
        weatherApi('Maturin').then((res) => setcurrentWeather(res));
    }, []);

    return (
        <>
            {currentWeather === null ? (
                <b></b>
            ) : (
                <AppContainer>
                    <InputField />
                    <Weather weatherData={currentWeather.current} />
                    <Conditions weatherData={currentWeather.current} />
                    <Forecast forecastData={currentWeather.daily} />
                </AppContainer>
            )}
        </>
    );
};

export default Container;
