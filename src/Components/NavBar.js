import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = () => {
  return (
    <nav className='navigation'>
      
      
        <NavLink className='nav-link' to='portfolio'>My Github</NavLink>
        <NavLink className='nav-link' to='contact'>Contact</NavLink>  
    </nav>
  )
}

export default NavigationLink;