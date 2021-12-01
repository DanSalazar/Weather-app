import styled from 'styled-components'
import { fade, palette } from '../../GlobalStyle'

export const AppContainer = styled.div`
  border-radius: 8px;
  background: ${palette.white};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: auto;
  padding: 1.5em;
  width: 90vw;q
  animation: 0.4s ${fade} ease;

  @media screen and (min-width: 768px) {
    width: 650px;
    margin: 0;
  }
`

export const AppContainerError = styled(AppContainer)`
  height: 550px;
  justify-content: flex-start;

  p {
    font-size: 1.5em;
    text-align: center;
    margin: 4em 0;
  }
`
