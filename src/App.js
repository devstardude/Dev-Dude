import React from 'react';
import './App.css';
import About from './components/About/About';

import Landing from './components/Landing/page/Landing';
import Project from "./components/Projects/page/Project";
import Skills from "./components/Skills/page/Skills";

function App() {
  return (
    <div className="container App">
      <Landing/>
      <About/>
      <Skills/>
      <Project/>
    </div>
  );
}

export default App;
