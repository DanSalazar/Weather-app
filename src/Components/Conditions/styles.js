import styled from 'styled-components'
import { fade } from '../../GlobalStyle'

export const ConditionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
  padding: 1em 0;
  width: 100%;
  animation: 0.5s ${fade} ease;
`

export const ConditionCard = styled.div`
  height: 80px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`

export const WindText = styled.div`
  display: flex;

  p {
    font-size: 1.5em;
  }

  span {
    font-size: 0.75em;
  }

  @media screen and (max-width: 320px) {
    p {
      font-size: 0.875em;
    }
  }
`
