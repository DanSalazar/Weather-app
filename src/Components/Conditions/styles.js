import styled from 'styled-components';

export const ConditionsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: auto;
    padding: 1em 0;
    width: 100%;
`;

export const ConditionCard = styled.div`
    height: 80px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    p {
        font-size: 1.25em;
    }
`;
