import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import Logo from '../Logo/Logo';

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <Logo variant="dark" />
                    <p style={{wordSpacing:"2px"}}> <b>MunchMate</b> connects you with the best local restaurants for fast, fresh food delivery. Order your favorite meals with just a few taps and enjoy delicious food delivered to your door.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-800-MUNCH-MATE</li>
                        <li>support@munchmate.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 © MunchMate.com - All Right Reserved</p>
        </div>
    )
}

export default Footer