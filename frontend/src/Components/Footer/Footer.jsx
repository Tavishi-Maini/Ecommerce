import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.PNG';
import instagram_icon from '../Assets/insta.PNG';
import facebook_icon from '../Assets/fb.PNG';
import x_icon from '../Assets/threads.PNG';
import mail_icon from '../Assets/mail.PNG';
import pinterest_icon from '../Assets/pin.PNG';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt=" "/>
                <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>   
                <li>Contact</li> 
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <img src={instagram_icon} alt="" />
                </div>
                <div className='footer-icons-container'>
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className='footer-icons-container'>
                    <img src={mail_icon} alt="" />
                </div>
                <div className='footer-icons-container'>
                    <img src={x_icon} alt="" />
                </div> 
                <div className='footer-icons-container'>
                    <img src={facebook_icon} alt="" />
                </div>     

            </div> 
            <div className='footer-copyright'>
                <hr/>
                <p>© 2025 - All rights reserved.</p>  
            </div>        
        </div>

        
    );
};

export default Footer;