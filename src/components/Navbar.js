import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';




function Navbar() {

  
    return (
            <>

            <header className="header">
            <Link to='/' onClick=""> 
                <img src="/images/logo.png" alt="EthioFood Logo" className="logo"></img>
                </Link>
                <input class="menu-btn" type="checkbox" id="menu-btn"/>
                <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
                
                <ul className="menu"> 
                <li>
                     <Link to='/' exact  className="nav-links" onClick="">
                         Home
                     </Link>
                     </li>

                     <li>
                     <Link to='/Nutrition' exact  className="nav-links" onClick="">
                         Nutrition
                     </Link>
                     </li>

                     <li >
                     <Link to='/Articles' className="nav-links" onClick="">
                       Articles
                     </Link>
                     </li>

                     <li className='nav-item' >
                     <Link to='/contact' className="nav-links" onClick="">
                       Contact
                     </Link>
                     </li>






                     </ul>
            </header>



              



            </>
    
    );
}

export default Navbar;
