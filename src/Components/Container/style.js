import styled from 'styled-components';

export const AppContainer = styled.div`
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: auto;
    width: 80%;
    padding: 1.5em 1.25em;

    @media screen and (min-width: 1024px) {
        width: 600px;
        margin: 0;
    }
`;
