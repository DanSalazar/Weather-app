import styled from 'styled-components';
import { palette } from '../../GlobalStyle';

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    height: 40px;
    align-items: center;

    p {
        font-size: 0.75em;
        font-weight: 400;
    }
`;

export const FieldContainer = styled.form`
    display: flex;
    align-items: center;
    padding: 0.25em 0.5em;

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

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
    color: ${palette.black};
    font-weight: 700;

    &::placeholder {
        color: #808080;
        font-weight: 400;
    }
`;
