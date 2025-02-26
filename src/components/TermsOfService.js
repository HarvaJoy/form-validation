import React from 'react';
import  { Link } from 'react-router-dom';

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
 
const TermsOfService = () => (
    <div style={stylePages}>
        <p>Terms of Service Page</p>
        <Link to="/">Go home</Link>
    </div>
);

export default TermsOfService;