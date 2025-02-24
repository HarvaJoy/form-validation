import React from 'react';
import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from "../components/Home";
import About from "../components/about";
import Blog from "../components/blog";
import Hiring from "../components/Hiring";
import Contact from "../components/Contact";
import NoPage from '../components/NotPage';


const AppRouter = () => {

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

//Pages Our hubgets
const CurrentStatus = () => (

        <div style={stylePages}>
            <p>This is from my component Current Status Page</p>
            <Link to="/">Go home</Link>
        </div>        
 );    
 
 const Features = () => (
    <div style={stylePages}>
        <p>Features Page</p>
        <Link to="/">Go home</Link>
    </div>
);

const ProgramHubgets = () => (
    <div style={stylePages}>
        <p>Join The Program Page</p>
        <Link to="/">Go home</Link>
    </div>
);



return(

    <BrowserRouter>
        <div> 
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} exact={true} />
                <Route path="/about" element={ <About/> } />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/hiring" element={<Hiring/>} />
                <Route path="/terms" element={ <TermsOfService/> } />
                <Route path="/contact" element={ <Contact/> } />
                {/* <Route path="/program" element={ProgramHubgets} />
                <Route path="/features" element={Features} />
                <Route path="/status" element={CurrentStatus} /> */}
                <Route element={NoPage} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
)};

export default AppRouter;