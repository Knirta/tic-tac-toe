import { createContext, useContext } from 'react';

export const ThemeContext = createContext('blue');

export const useThemeContext = () => useContext(ThemeContext);
