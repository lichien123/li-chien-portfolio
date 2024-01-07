import React, { useState } from 'react';
import Menu from './Menu.js';

import './Nav.css'

const Nav = () => {
    const [navDisplay, toggleNavDisplay] = useState(false);
    return (
      <div className='nav' id='home'>
        <div className='name'>
          <p className='burger transparent'>|||</p>
          Li Chien
          <p className='burger' onClick={() => toggleNavDisplay(!navDisplay)}>|||</p>
        </div>
        { navDisplay && <Menu menuClassName='mobile-menu'/> }
        <Menu menuClassName='desktop-menu'/>
      </div>
    )
};

export default Nav;