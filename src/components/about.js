import React from 'react';
import  { Link } from 'react-router-dom';

import logo from '../assets/logo-hubgets.png';
const stylePages = {
    maxWidth: '60rem',

    margin: '0 auto',
    padding: '3rem 0 0 0',
    padding: '0 $m-size',
    height: '50rem',
    fontSize: '2em',
    textAlign:'center',
    fontWeight: 500,
}  
 
const About = () => (
    <div style={stylePages}>
        <p> This is from my component About Us Page</p>
        <Link to="/">Go home</Link>
    </div>
);

export default About;