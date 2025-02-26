import React from 'react';
import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from "../components/Home";
import About from "../components/About";
import Blog from "../components/Blog";
import Hiring from "../components/Hiring";
import Contact from "../components/Contact";
import NoPage from '../components/NotPage';
import TermsOfService from '../components/TermsOfService'
import { getBaseUrlPath } from "./url.util";


const AppRouter = () => {

    const basename = getBaseUrlPath();

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
 
return(

    <BrowserRouter basename={basename}>
        <div> 
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} exact={true} />
                <Route path="/about" element={ <About/> } />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/hiring" element={<Hiring/>} />
                <Route path="/terms" element={ <TermsOfService/> } />
                <Route path="/contact" element={ <Contact/> } />
                <Route path="*" element={ <NoPage/> } />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
)};

export default AppRouter;