import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import './App.css';
import Home from './components/landing';
import Navigation from './components/navbar';
import Container from "react-bootstrap/Container";
import { About, Work, Contact } from "./components/pages"
import Footer from './components/footer'

function App() {
  return (
    <div>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>


    </div>
  );
}

export default App;
