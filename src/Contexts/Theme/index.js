
import React, { Children, createContext, useState } from 'react'

export const ThemeContext = React.createContext();
export function ThemeContextpro({ children }) {
    const { model, setModel } = useState({ mode: 'lightThemeContext' })
    return (
        <ThemeContext.Provider value={{
            model, setModel,
        }}>

        </ThemeContext.Provider>
    )
}
