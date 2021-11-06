import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css';
import Home from './components/landing';
import Navigation from './components/navbar';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
