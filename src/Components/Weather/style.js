import styled from 'styled-components';
import { fade } from '../../GlobalStyle';

export const WeatherContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    animation: 0.5s ${fade} ease;
    justify-content: space-around;

    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
`;

export const IconContainer = styled.div`
    grid-column: 2/4;
`;

export const Time = styled.div`
    display: flex;
    align-items: center;
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

    @media screen and (max-width: 320px) {
        p {
            font-size: 2.25em;
        }
    }

    @media screen and (min-width: 768px) {
        p {
            font-size: 4.5em;
        }

        span {
            font-size: 1.875em;
        }
    }
`;
