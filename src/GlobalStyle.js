import { createGlobalStyle } from 'styled-components';

export const palette = {
    gray: '#57606f',
    black: '#2f3542',
    white: '#ffffff',
    blue: '#0fbcf9',
    yellow: '#ffd32a',
    bg: '#f1f2f6',
};

const GlobalStyles = createGlobalStyle`

    a {
        text-decoration:  none;
        color: #fff;
    }

    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
    
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 1em 0;
        background: ${palette.bg};
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        @media screen and (min-width: 768px){
            display: flex;
            padding: 0;
            height: 100vh;
            justify-content: center;
            align-items: center;
        }

    }
`;

export default GlobalStyles;
