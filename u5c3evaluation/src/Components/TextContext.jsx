import React, {  createContext, useState } from 'react'
export const MyContext = createContext();
export const TextContext = ( {children}) => {
    const [data, setData] = useState("saif");
 
    return (
        <MyContext.Provider value={{data, setData}}>
            {children}
        </MyContext.Provider>
    )
}
