import React from 'react';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div id="contact">
                <div className="about-text">
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="container my-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 p-3">
                        <div className="d-flex align-items-center my-3">
                            <div className="icon me-3">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h5>Address</h5>
                                <h6>Bhairab, Kishoregonj</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center my-3">
                            <div className="icon me-3">
                            <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <h5>Phone</h5>
                                <h6>01859650251</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center my-3">
                            <div className="icon me-3">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <h6>salekmia@gmail.com</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-4">
                        <div>
                            <h3>Send message</h3>
                            <input type="text" placeholder="Full name" className="form-control"/>
                            <br />
                            <input type="email" placeholder="Email" className="form-control"/>
                            <br />
                            <input type="number" placeholder="Phone" className="form-control"/>
                            <br />
                            <button className="btn btn-primary px-4 rounded-pill">Send</button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;