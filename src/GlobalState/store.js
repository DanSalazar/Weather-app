import React, { useState } from 'react';

const StoreContext = React.createContext({});

export default function StoreProvider({ children }) {
    const [state, setGlobalState] = useState({});

    return (
        <StoreContext.Provider value={(city, setCurrentCity)}>
            {children}
        </StoreContext.Provider>
    );
}
