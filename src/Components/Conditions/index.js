import React from 'react';
import CloudDrizzle from '../../assets/CloudDrizzle';
import DropletIcon from '../../assets/Droplet';
import CloudsIcon from '../../assets/Clouds';
import WindIcon from '../../assets/Wind';
import { ConditionCard, ConditionsContainer } from './styles';
import { palette } from '../../GlobalStyle';

const Conditions = ({ weatherData }) => {
    console.log(weatherData);

    return (
        <ConditionsContainer>
            <ConditionCard>
                <WindIcon width={24} height={24} />
                <p>
                    {weatherData.wind_speed.toFixed()} <span>k/h</span>
                </p>
            </ConditionCard>
            <ConditionCard>
                <DropletIcon width={24} height={24} />
                <p> {weatherData.humidity}% </p>
            </ConditionCard>
            <ConditionCard>
                <CloudsIcon width={24} height={24} color={palette.black} />
                <p> {weatherData.clouds}% </p>
            </ConditionCard>
        </ConditionsContainer>
    );
};

export default Conditions;
