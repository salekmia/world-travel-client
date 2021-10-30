import React from 'react';
import HeadShake from 'react-reveal/HeadShake';
import Jump from 'react-reveal/Jump';
import Slide from 'react-reveal/Slide';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div id="contact">
                <div className="about-text">
                    <HeadShake><h1>Contact Us</h1></HeadShake>
                </div>
            </div>
            <div className="container my-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 p-3">
                        <Slide left>
                        <div className="d-flex align-items-center my-3">
                            <div className="icon me-3">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h5>Address</h5>
                                <h6>Bhairab, Kishoregonj</h6>
                            </div>
                        </div>
                        </Slide>
                        <Slide left>
                        <div className="d-flex align-items-center my-3">
                            <div className="icon me-3">
                            <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <h5>Phone</h5>
                                <h6>01859650251</h6>
                            </div>
                        </div>
                        </Slide>
                        <Slide left>
                        <div className="d-flex align-items-center my-3">
                            <div className="icon me-3">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <h6>salekmia@gmail.com</h6>
                            </div>
                        </div>
                        </Slide>
                    </div>
                    
                    <div className="col-md-6 p-4">
                        <div>
                            <Jump><h3>Send message</h3></Jump>
                            <Slide right><input type="text" placeholder="Full name" className="form-control"/></Slide>
                            <br />
                            <Slide right><input type="number" placeholder="Phone" className="form-control"/></Slide>
                            <br />
                            <Slide right><textarea placeholder="Message" className="form-control" cols="30" rows="5"></textarea></Slide>
                            <br />
                            <Slide right><button className="btn btn-primary px-4 rounded-pill">Send</button></Slide>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;