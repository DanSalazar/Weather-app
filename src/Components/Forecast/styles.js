import styled from 'styled-components';

export const ForecastContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    height: 400px;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        height: 120px;
    }
`;

export const ForecastCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-top: 1px solid #f5f5f5;

    p {
        font-size: 0.875em;
        font-weight: 300;
    }
`;

export const ForecastBody = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;

    @media screen and (min-width: 1024px) {
        width: 100%;
    }
`;

export const TimeForecast = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 1.75em;
        font-weight: 300;
    }

    span {
        font-size: 1em;
        font-weight: 300;
        color: #34495e;
    }
`;
