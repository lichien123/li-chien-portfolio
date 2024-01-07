import React from 'react';

import './Menu.css'

const navigateTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth' });
}

const Menu = ({ menuClassName }) => {
    return (
        <div className={menuClassName}>
          <div href='#home' className={`${menuClassName}-item`} onClick={() => navigateTo('home')}>Home</div>
          <div href='#skills' className={`${menuClassName}-item`} onClick={() => navigateTo('skills')}>Skills</div>
          <div href='#projects' className={`${menuClassName}-item`} onClick={() => navigateTo('projects')}>Projects</div>
          <div href='#contact' className={`${menuClassName}-item`} onClick={() => navigateTo('contact')}>Contact</div>
        </div>
    )
};

export default Menu;