import React from 'react';
import {useState} from 'react'
import './header.css';


const Header = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
}

const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light')
}

const toggleTheme = e => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
}
  const [activeNav, setActiveNav] = useState('#');
  const [toggle, setToggle] = useState(false);
    return (
      <header class="header">
        <div id="#home">
          <a href="#title" class="logo">HOME</a>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
          <ul class="menu">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className = "dark_mode_li">    
              <div className="dark_mode">
                  <input type="checkbox" className="dark_mode_input" id= 'darkmode-toggle' onChange={toggleTheme}/>
                  <label class="label" for="darkmode-toggle">
                      <i class="fa-solid fa-moon"></i>
                      <i class="fa-solid fa-sun"></i>
                      <div class="ball"></div>
                  </label>
              </div>
            </li>
          </ul>
        </div>
      </header>
    )
  }

export default Header