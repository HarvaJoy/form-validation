import React from 'react';
import  { Link } from 'react-router-dom';

// import logo from '../assets/logo.png';
const stylePages = {
    fontSize: '2em',
    textAlign:'center',
    fontWeight: 600,
    color: '#2e5a6d',
    textDecoration: 'none'

}  
const Header = () => (
    <header>
        <div className="content-container">
            <div className="logo">
                <Link to="/" style={stylePages}>
                    <span >DumyPag</span>
                    {/* <img src={logo} alt="DumyPag" placeholder="DumyPag"/> */}
                </Link>  
            </div>
        </div>            
    </header>
);

export default Header;