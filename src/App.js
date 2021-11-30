import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import './App.css';
import Home from './components/landing';
import Navigation from './components/navbar';
import Container from "react-bootstrap/Container";
import { About, Work, Contact } from "./components/pages";
import Footer from './components/footer';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/ dark/light theme
function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTimeout(() => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }, 1000); // toggles after 1 second
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <button className="toggle-button" onClick={toggleTheme}><i className={theme === 'light' ? "fas fa-moon" : "fas fa-sun"}></i></button>
        <div className="positioning">
          <HashRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="work" element={<Work />} />
              <Route path="about" element={<About />} />
              {/* <Route path="contact" element={<Contact />} /> */}
            </Routes>
          </HashRouter>
        </div>
        <Footer />
      </div>
    </ThemeProvider >
  );
}

export default App;
