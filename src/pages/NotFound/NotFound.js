import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './NotFound.css';
const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div id="notfound">
                <div className="text-center notfound-text">
                <Link to="/"><button className="btn btn-lg btn-primary px-5 rounded-pill">GO TO HOME</button></Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;