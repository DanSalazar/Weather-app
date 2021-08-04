import React from 'react';
import CloudDrizzle from '../../assets/CloudDrizzle';
import DropletIcon from '../../assets/Droplet';
import CloudsIcon from '../../assets/Clouds';
import WindIcon from '../../assets/Wind';
import { ConditionCard, ConditionsContainer, WindText } from './styles';
import { palette } from '../../GlobalStyle';

const Conditions = ({ weatherData }) => {
    return (
        <ConditionsContainer>
            <ConditionCard>
                <WindIcon width={24} height={24} />
                <WindText>
                    <p>{weatherData.wind_speed.toFixed()}</p>
                    <span>km/h</span>
                </WindText>
            </ConditionCard>
            <ConditionCard>
                <DropletIcon width={24} height={24} />
                <WindText>
                    <p> {weatherData.humidity}% </p>
                </WindText>
            </ConditionCard>
            <ConditionCard>
                <CloudsIcon width={24} height={24} color={palette.black} />
                <WindText>
                    <p> {weatherData.clouds}% </p>
                </WindText>
            </ConditionCard>
        </ConditionsContainer>
    );
};

export default Conditions;
