import React from 'react';
import logo from '../../../../src/images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div id="footer" className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 my-3">
                        <h4>WT MARKET</h4>
                        <ul>
                            <li><a href="/">Terms</a></li>
                            <li><a href="/">Licence</a></li>
                            <li><a href="/">Market Api</a></li>
                            <li><a href="/">Conditions</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-md-3 my-3">
                        <h4>HELP</h4>
                        <ul>
                            <li><a href="/">Authors</a></li>
                            <li><a href="/">Moderators</a></li>
                            <li><a href="/">Help Center</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-md-3 my-3">
                        <h4>OUR COMMUNITY</h4>
                        <ul>
                            <li><a href="/">Community</a></li>
                            <li><a href="/">Blogs</a></li>
                            <li><a href="/">Forums</a></li>
                            <li><a href="/">Meetups</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-sm-6 col-md-3 my-3">
                        <ul>
                            <img src={logo} alt="" />
                            <li><i className="fas fa-phone me-3"></i><a href="/">01859650251</a></li>
                            <li><i className="fas fa-envelope me-3"></i><a href="/">bhairabbari330@gmail.com</a></li>
                            <li><i className="fas fa-map-marker-alt me-3"></i><a href="/">Bhairab, Dhaka, Bangladesh</a></li>
                        </ul>
                    </div>
                </div>
                    <hr />
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-sm-6 d-flex align-items-center justify-content-center justify-content-sm-start">
                        <p className="m-0">Copyright &copy; 2021 World Travel</p>
                    </div>
                    <div className="col-sm-6">
                        <ul className="d-flex align-items-center social-icon justify-content-center justify-content-sm-end">
                            <li><a target="_blank" href="https://www.facebook.com/salekalways" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a target="_blank" href="https://twitter.com/codersalek" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/salekalways/" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/salekalways/" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;