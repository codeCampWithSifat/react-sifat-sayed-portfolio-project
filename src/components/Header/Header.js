import React, { useState } from 'react';
import "./Header.css"
import { FaTimes } from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";

const Header = () => {
  const [menu , setMenu] = useState(false);
  return (
    <div className='nav_container'>
        <h2 className='hero-text'>Sifat Shop </h2>
        <nav>
            <ul className="hero_container">
                <li><a href="#home">Home</a></li>
                <li><a href="#review">Order Review</a></li>
                <li><a href="#inventory">Manage Inventory</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
            
        </nav>
        <div className="menu_hamburger">
          <GiHamburgerMenu size={30}/>
        </div>
    </div>
  )
}

export default Header