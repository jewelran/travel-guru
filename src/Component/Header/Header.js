import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Logo.png'
import './Header.css'
import Contact from '../Contact/Contact';
const Header = () => {
    return (
        <div  className ="header-container">
             <nav className='navBar'>
                    <div className="top-logo">
                        <Link to  = '/'>
                        <img src={logo} className='App-logo' alt=""/>
                        </Link>
                    </div>
               
                    <div className="menu3">
                        <Link className = "topMenu1" to ="/news">
                            <li>News</li>
                        </Link> 
                         <Link className = "topMenu1" to ="/discription">
                            <li>Discription</li>
                        </Link>
                        <Link className = "topMenu1" to ="/blog">
                            <li>Blog</li>
                        </Link>
                    <li><Contact></Contact></li>
                    </div>
                </nav>

        </div>
    );
};

export default Header;