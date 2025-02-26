import React from 'react';
import  { Link } from 'react-router-dom';

const styleDiv = {
    maxWidth: '60rem',
    margin: '0 auto',
    padding: '3rem 0 0 0',
    padding: '0 $m-size',
    height: '50rem',
    fontSize: '2em',
    textAlign:'center',
    fontWeight: 500,
}  

const StyleLink = {
    fontSize: '1em',
    textAlign:'center',
    fontWeight: 600,
        color: '#2e5a6d',
}
 
const Blog = () => (
    <div style={styleDiv}>
    <p>Blog Page</p>
    <Link to="/" style={StyleLink}>Go home</Link>
</div>
);

export default Blog;