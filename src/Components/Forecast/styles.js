import styled from 'styled-components'
import { fade } from '../../GlobalStyle'

export const ForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  height: 300px;
  animation: 0.5s ${fade} ease;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    height: 150px;
  }
`

export const ForecastCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  p {
    font-size: 0.875em;
    font-weight: 300;
  }
`

export const ForecastBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;

  @media screen and (min-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 320px) {
    width: 70%;
  }
`

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

  @media screen and (max-width: 320px) {
    p {
      font-size: 1.25em;
    }

    span {
      font-size: 0.875em;
    }
  }
`
