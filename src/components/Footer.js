import React from 'react';
import { NavLink} from 'react-router-dom';

// import logoFooter from '../assets/logo-footer.png';
import twitter from '../assets/icon-twitter.png';
import youtube from '../assets/icon-youtube.png';

const stylePages = {
    fontSize: '2em',
    textAlign:'center',
    fontWeight: 600,
    color: '#5892aa'

}  
const Footer = () => (
    <footer>
        <div className="content-container">
            <div className="footer__nav">
                <div className="logo-footer">
                <span style={stylePages}>DumyPag</span>
                    {/* <img src={logoFooter} alt="DumyPag" /> */}
                </div>
                
                <div className="footer__nav--links">
                    <h4>Our company</h4>
                    <NavLink to="/about" className="link">About Us</NavLink>
                    <NavLink to="/blog" className="link">Blog</NavLink>
                    <NavLink to="/hiring" className="link">We are hiring</NavLink>
                    <NavLink to="/terms"c className="link">Terms of Service</NavLink>
                    <NavLink to="/contact" className="link">Contact us</NavLink>
                </div>
                <div className="footer__nav--links">
                    <h4>Us</h4>
                    <NavLink to="/program" className="link">Join the program</NavLink>
                    <NavLink to="/features" className="link">Features</NavLink>
                    <NavLink to="/status" className="link">Current Status</NavLink>
                </div>
                <div className="footer__nav--links">
                    <h4>Social</h4>
                    <div className="social-link">
                        <img src={twitter}/>
                        <a  target="_blank">Twitter</a>
                        {/* <a href="" target="_blank">Twitter</a> */}
                    </div>
                    <div className="social-link">
                        <img src={youtube}/>
                        <a target="_blank">Youtube</a>
                        {/* <a href="" target="_blank">Youtube</a> */}
                    </div>                  
                </div>           
            </div>
            <div id="copy">
                &copy; Copyrights 2020 Joyce H, Inc
            </div> 
        </div>             

    </footer>
);
export default Footer;