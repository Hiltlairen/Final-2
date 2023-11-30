import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css'
const links=[
    {
    name:'Home',
    href:'/home',
    },
    {
    name:'About',
    href:'/about',
    },
    {
    name:'Dashboard',
    href:'/dashboard',
    },
]
const Header =()=> {
    return (
      <>
        <div className='nav-bar'>
            {links.map((x, index) => (
                <a  key={index} onClick={() => window.location.href = x.href}>
                {x.name}
            </a>
            ))}
        </div>
        
      </>
    )
  }
  
  export default Header;