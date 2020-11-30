import React from 'react';
import './Booking.css'
import { Link } from 'react-router-dom';
import logo from '../../Logo.png'
import room1 from '../New-folder/Image/Rectangle 26.png'
import room2 from '../New-folder/Image/Rectangle 27.png'
import room3 from '../New-folder/Image/Rectangle 28.png'
import star from '../New-folder/Icon/star_1_.png'
import GoogleMap from '../map/GoogleMap';
import Contact from '../Contact/Contact';

const Booking = () => {
    return (
        <div>
           <nav className='navBar'>
                    <div className="top-logo3">
                        <Link to = "/">
                            <img src={logo} className='App-logo' alt=""/>
                        </Link>
                    
                    </div>
                    <div className="menu3">
                        <Link className = "topMenu1" to ="/news">
                            <li>News</li>
                        </Link> 
                         <Link className = "topMenu1" to ="/news">
                            <li>Discription</li>
                        </Link>
                        <Link className = "topMenu1" to ="/news">
                            <li>Blog</li>
                        </Link>
                    <li><Contact></Contact></li>
                    </div>
                </nav>
                <div className="hadding">
                    <p style  ={{color:'gray'}}>252 stay Apr 13-173 guests</p>
                    <h1 style={{color:'black'}}>stay in cox's bazer</h1>
                    </div>
                <div className="room-container">
                    <div className="room-category">
                        <div className="room-details">
                            <div className="img-container">
                                <img src={room1} alt=""/>
                            </div>
                           
                            <div className="img-discription">
                            <h3>Light  brigth airy stylish apt & safe peaceful stay</h3>
                            <p>4 guests 2 bedrooms 2  beds 2 baths </p>
                            <p>Wif Air condition Kitchen</p>
                            <p>Cancellation fexibility availiable</p>
                            

                          <div className="">
                              <span> <img style ={{width:'10px'}} src={star} alt=""/> 4.9(20)</span> <span style = {{color:'black'}}>$34/ <span style = {{color:'gray'}} >night $167 total</span></span>
                          </div>
                            </div>
                           
                        </div>
                        <div className="room-details">
                            <div className="img-container">
                                <img src={room2} alt=""/>
                            </div>
                           
                            <div className="img-discription">
                            <h3>Apartment in Lost Panorama</h3>
                            <p>4 guests 2 bedrooms 2  beds 2 baths </p>
                            <p>Wif Air condition Kitchen</p>
                            <p>Cancellation fexibility availiable</p>
                            
                            <div className="">
                              <span> <img style ={{width:'10px'}} src={star} alt=""/> 4.8(10)</span> <span style = {{color:'black'}}>$52/ <span style = {{color:'gray'}} >night $167 total</span></span>
                             </div>
                            </div>
                            
                        </div>
                        <div className="room-details">
                            <div className="img-container">
                                <img src={room3}alt=""/>
                            </div>
                           
                            <div className="img-discription">
                            <h3>AR Lounge & Pool (r&r + b&b)</h3>
                            <p>4 guests 2 bedrooms 2  beds 2 baths </p>
                            <p>Wif Air condition Kitchen</p>
                            <p>Cancellation fexibility availiable</p>
                           
                            <div className="">
                              <span> <img style ={{width:'10px'}} src={star} alt=""/> 4.9(25)</span> <span style = {{color:'black'}}>$44/ <span style = {{color:'gray'}} >night $167 total</span></span>
                          </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="map">
                        <GoogleMap></GoogleMap>
                    </div>
                </div>
        </div>
    );
};

export default Booking;