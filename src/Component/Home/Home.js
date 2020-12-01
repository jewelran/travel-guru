import React from 'react';
import logo from '../../Logo.png'
import logo1 from '../New-folder/Image/Rectangle 1.png'
import logo2 from '../New-folder/Image/Sreemongol.png'
import logo3 from '../New-folder/Image/sundorbon.png'
import './Home.css'
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Home = () => {
   
    return (
        <div className='home'>
            <div className="Home-container">
                <nav className='homeNavBar'>
                    <div className="top-logo">
                    <img src={logo} className='App-logo' alt=""/>
                        <input placeholder="Surch your destination" className="surchBar1" type="surch"/>
                    </div>
                    <div className="menu1">
                     <Link to = "/news" className ="topMenu">
                    <li>News</li>
                    </Link>
                    <Link to = "/discription" className ="topMenu">
                    <li>Discription</li>
                    </Link>
                    <Link className ="topMenu" to= "/blog">
                    <li>Blog</li>
                    </Link>
                    <li><Contact></Contact></li>
                    <Link  to = "/login">
                    <button className = "btn">Login</button>
                    </Link>
                    
                    </div>
                </nav>

                <div className="travel-img-container">
                 
                <div className="home-img-discription">
                    <h1 className ="demo">COX'S BAZER</h1>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum harum doloribus ad, fuga cum voluptas obcaecati aliquid debitis quibusdam sint? Repudiandae laudantium impedit illum sint libero beatae nobis explicabo.</p>
                    <Link to ="/booking">
                    <button className ="btn0">Booking <span className='bookingIcon'><ArrowForwardIcon/></span> </button>
                    </Link>
                </div>
                
                <div className="img-wrap">

                        <div className="travel-img">
                            <img src={logo1} alt=""/>
                        </div>

                        <div className="travel-img">
                        <img src={logo2} alt=""/>
                        </div>

                        <div className="travel-img">
                        <img src={logo3} alt=""/>
                        </div>
                        
                 </div>
                       
            </div>
            <div className="iconWrapper">
            <button className ="arrowicon"> <ArrowBackIcon /></button > <button className ="arrowicon"><ArrowForwardIcon/></button> 
            </div>
            
            </div>

            <div className="overLay"></div>
           
        </div>
    );
};

export default Home;