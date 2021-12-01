import styled from 'styled-components'
import { palette } from '../../GlobalStyle'

export const HeaderContainer = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.75em;
    color: ${palette.gray};
    font-weight: 300;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 1em;
    }
  }
`

export const FieldContainer = styled.form`
  display: flex;
  width: 120px;
  align-items: center;

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  svg {
    transform: rotate(90deg);
  }

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

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
`
