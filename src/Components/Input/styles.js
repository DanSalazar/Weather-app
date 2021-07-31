import styled from 'styled-components';

export const FieldContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.25em 0.5em;

    svg {
        transform: rotate(90deg);
    }
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background: none;
    font-size: 0.875em;
    padding: 4px 8px;
    color: #000;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;

    &::placeholder {
        color: #808080;
        font-weight: 400;
    }
`;
