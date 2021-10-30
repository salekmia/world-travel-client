import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './About.css';
const About = () => {
    return (
        <div>
            <Header></Header>
            <div id="about">
                <div className="about-text">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="container my-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 p-3">
                        <h1>An expert traveler team will guide you.</h1>
                        <p>We wish you a happy trip. We have a responsibility to enhance your travel experience. Read a travel guide about Bangkok to practise and improve your reading skills. Do the preparation task first. Then read the text and do the exercises.</p>
                        <Link to="/contact"><button className="btn btn-primary px-5 rounded-pill">Contact us</button></Link>
                    </div>
                    <div className="col-md-6 p-4">
                        <img src="https://i.ibb.co/ZdzGB5R/team-triangle-1.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;