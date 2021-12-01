import React, { useState } from 'react'
import SearchIcon from '../../assets/Search'
import { FieldContainer, HeaderContainer, Input } from './styles'

const InputField = ({ cityName, setCity }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <HeaderContainer>
      <FieldContainer onSubmit={handleSubmit}>
        <button>
          <SearchIcon width={18} height={18} />
        </button>
        <Input onChange={handleChange} type='text' placeholder='City' />
      </FieldContainer>
      <p> {cityName} </p>
    </HeaderContainer>
  )
}

export default InputField
