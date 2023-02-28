import React from "react";
import Container from './components/Container';
import Header from './components/Header';
import Game from './components/Game';

const App = () => {
    return (
        <Container>
            <Header/>
            <Game/>
        </Container>
    );
};

export default App;