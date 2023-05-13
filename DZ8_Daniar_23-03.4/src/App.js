import { useEffect, useState } from "react";

import "./App.css";
import Router from './navigation';

// import { Route, Routes } from "react-router-dom";
// import MainPage from "./pages/MainPage";
// import AboutPage from "./pages/AboutPage";
// import PokemonPage from "./pages/PokemonPage";
// import sun from "./assets/img/sun.png";
// import moon from "./assets/img/moon.png";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  };
  return (
    <>
      <div className={`app ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Container maxWidth="lg" >
          <Router/>
        </Container>
      </div>
    </>
  );
}

export default App;