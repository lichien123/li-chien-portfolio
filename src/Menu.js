import React, { useState } from 'react';

import './Menu.css'

const Menu = () => {
    const [menuDisplay, toggleMenuDisplay] = useState(false);
    return (
      <div className='nav'>
        <div className='name'>
          <p className='burger transparent'>|||</p>
          Li Chien
          <p className='burger' onClick={() => toggleMenuDisplay(!menuDisplay)}>|||</p>
        </div>
        {
          menuDisplay && (
            <div className='menu'>
              <div className='menu-item'>Home</div>
              <div className='menu-item'>About</div>
              <div className='menu-item'>Projects</div>
              <div className='menu-item'>Contact</div>
            </div>
          )
        }
        <div className='static-menu'>
          <div className='static-menu-item'>Home</div>
          <div className='static-menu-item'>About</div>
          <div className='static-menu-item'>Projects</div>
          <div className='static-menu-item'>Contact</div>
        </div>
      </div>
    )
};

export default Menu;