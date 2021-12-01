import { createGlobalStyle, keyframes } from 'styled-components'

export const palette = {
  gray: '#bdc3c7',
  black: '#2f3542',
  white: '#ffffff',
  blue: '#0fbcf9',
  yellow: '#ffd32a',
  bg: '#fbfbfb'
}

export const fade = keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration:  none;
    color: #fff;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  input {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  body {
    margin: 0;
    padding: 1em 0;
    font-size: 16px;
    width: 100%;
    background: ${palette.bg}; 
    color: ${palette.black};
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media screen and (min-width: 768px){
      display: flex;
      padding: 0;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }

    @media screen and (min-width: 1920px){
      font-size: 18px;
    }
  }
`

export default GlobalStyles
