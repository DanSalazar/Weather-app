import styled from 'styled-components';

export const WeatherContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
    }
`;

export const IconContainer = styled.div`
    grid-column: 2/4;
`;

export const Time = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 4/5;

    p {
        font-size: 3em;
        font-weight: 300;
    }

    span {
        font-size: 1em;
        font-weight: 300;
        color: #34495e;
    }

    @media screen and (min-width: 1024px) {
        p {
            font-size: 5em;
            font-weight: 300;
        }

        span {
            font-size: 1.875em;
            font-weight: 300;
            color: #34495e;
        }
    }
`;
