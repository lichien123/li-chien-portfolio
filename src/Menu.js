import React, { useState } from 'react';

import './Menu.css'

const navigateTo = (id) => {
  const el = document.getElementById(id);
  console.log(el)
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth' });
}

const Menu = () => {
    const [menuDisplay, toggleMenuDisplay] = useState(false);
    return (
      <div className='nav' id='home'>
        <div className='name'>
          <p className='burger transparent'>|||</p>
          Li Chien
          <p className='burger' onClick={() => toggleMenuDisplay(!menuDisplay)}>|||</p>
        </div>
        {
          menuDisplay && (
            <div className='menu'>
              <div className='menu-item' onClick={() => navigateTo('home')}>Home</div>
              <div className='menu-item' onClick={() => navigateTo('skills')}>Skills</div>
              <div className='menu-item' onClick={() => navigateTo('projects')}>Projects</div>
              <div className='menu-item' onClick={() => navigateTo('contact')}>Contact</div>
            </div>
          )
        }
        <div className='static-menu'>
          <div className='static-menu-item' onClick={() => navigateTo('home')}>Home</div>
          <div className='static-menu-item' onClick={() => navigateTo('skills')}>Skills</div>
          <div className='static-menu-item' onClick={() => navigateTo('projects')}>Projects</div>
          <div className='static-menu-item' onClick={() => navigateTo('contact')}>Contact</div>
        </div>
      </div>
    )
};

export default Menu;