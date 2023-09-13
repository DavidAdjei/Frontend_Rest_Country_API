import React, { useContext, useState, createContext } from 'react';
const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('darkTheme');
    const appTheme = {
        lightTheme: {
            text: 'hsl(200, 15%, 8%)',
            input: 'hsl(0, 0%, 52%)',
            background: 'hsl(0, 0%, 98%)',
            elements: 'hsl(0, 0%, 100%)',
        },
        darkTheme: {
            text: 'hsl(0, 0%, 100%)',
            background: 'hsl(207, 26%, 17%)',
            elements: 'hsl(209, 23%, 22%)',
        }
    };

    const getTheme = () => theme === 'lightTheme' ? appTheme.lightTheme : appTheme.darkTheme;

    return (
        <div style={{ background: getTheme().background }}>
            <ThemeContext.Provider value={[theme, setTheme, getTheme]}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    );
}

export const useTheme = () => {
  return useContext(ThemeContext);
}
