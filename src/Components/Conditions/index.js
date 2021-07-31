import React from 'react';
import CloudDrizzle from '../../assets/CloudDrizzle';
import DropletIcon from '../../assets/Droplet';
import WindIcon from '../../assets/Wind';
import { ConditionCard, ConditionsContainer } from './styles';

const Conditions = () => {
    return (
        <ConditionsContainer>
            <ConditionCard>
                <WindIcon width={24} height={24} />
                <p> 6km </p>
            </ConditionCard>
            <ConditionCard>
                <DropletIcon width={24} height={24} />
                <p> 6km </p>
            </ConditionCard>
            <ConditionCard>
                <CloudDrizzle width={24} height={24} />
                <p> 6km </p>
            </ConditionCard>
        </ConditionsContainer>
    );
};

export default Conditions;
