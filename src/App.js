import React, { useState, useMemo } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Game from './components/Game';
import { ThemeContext } from './contexts/contexts';

const App = () => {
  const storedTheme = localStorage.getItem('theme');
  const currentTheme = storedTheme || 'blue';

  const [theme, setTheme] = useState(currentTheme);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <Container>
        <Header />
        <Game />
      </Container>
    </ThemeContext.Provider>
  );
};

export default App;
