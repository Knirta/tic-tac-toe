import { createContext, useContext, useState, useMemo } from 'react';

const ThemeContext = createContext('blue');

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const getCurrentTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'blue';
  };

  const [theme, setTheme] = useState(() => getCurrentTheme());

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
