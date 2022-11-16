import React, { useState } from 'react';
import "./Header.css"
import { FaTimes } from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu , setMenu] = useState(false);
  return (
    <div className='nav_container'>
        <h2 className='hero-text'>Sifat Shop </h2>
        <nav>
            <ul className="hero_container">
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            
        </nav>
        <div className="menu_hamburger">
          <GiHamburgerMenu size={30}/>
        </div>
    </div>
  )
}

export default Header