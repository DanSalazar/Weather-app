import React, { useState, useEffect } from 'react';
import weatherApi from '../../services/api';
import Conditions from '../Conditions';
import Forecast from '../Forecast';
import InputField from '../Input';
import Weather from '../Weather';
import { AppContainer, ConditionsContainer } from './style';

const arr = [1, 2, 3, 4];

const Container = () => {
    const [currentCity, setCurrentCity] = useState([]);

    useEffect(() => {
        weatherApi('London').then((res) => setCurrentCity(res));
    }, []);

    console.log(currentCity);

    return (
        <AppContainer>
            <InputField />
            <Weather />
            <Conditions />
            <Forecast />
        </AppContainer>
    );
};

export default Container;
