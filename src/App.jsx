import React, { useState } from 'react';
import Header from './components/header/Header';
import Title from './components/Title/Title';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className = {`App ${theme}`}>
        <Header />
        <Title />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer></footer>
    </div>
  )
}

export default App