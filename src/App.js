import React from 'react';
import './App.css';
import About from './components/About/About';
import BigIntro from './components/Landing/BigIntro';
import Header from "./components/Landing/Header";
import HeadSociaLinks from "./components/Landing/HeadSocialLinks";
import TopButton from "./components/Landing/TopButton";
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="container mt-5 ml-5 pl-3 pr-3 App">
      <Header />
      <HeadSociaLinks/>
      <BigIntro/>
      <TopButton />
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
