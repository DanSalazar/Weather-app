import React, { useState } from 'react';
import SearchIcon from '../../assets/Search';
import { FieldContainer, Input } from './styles';

const InputField = () => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <form>
            <FieldContainer onSubmit={handleSubmit}>
                <SearchIcon width={18} height={18}></SearchIcon>
                <Input
                    onChange={handleChange}
                    type="text"
                    placeholder="Type some city"
                />
            </FieldContainer>
        </form>
    );
};

export default InputField;
