import React, { useState, createContext } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Game from './components/Game';

export const ThemeContext = createContext(null);

const App = ({ currentTheme = 'blue' }) => {
  const [theme, setTheme] = useState(currentTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Container>
        <Header />
        <Game />
      </Container>
    </ThemeContext.Provider>
  );
};

export default App;
