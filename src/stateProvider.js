import React, { createContext, useContext, useReducer} from "react";

//prepare the data layer
export const stateContext = createContext();

//wrap our app and provide the data layer
export const stateProvider = ({reducer, initialState, children} ) => (

    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
);
//Pull information from the data layer
export const useStateValue = () => useContext(stateContext);
