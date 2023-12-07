import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  switchTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('black');

  const switchTheme = () => setTheme(theme === 'black' ? 'white' : 'black');
  const value = { theme, switchTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
