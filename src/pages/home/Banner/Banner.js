import React from 'react';
import Slide from 'react-reveal/Slide';
import './Banner.css';
const Banner = () => {
    return (
        <div id="banner">
            <div className="d-flex container">
                <div className="hero-text">
                    <Slide left>
                      <button className="btn rounded-pill px-4 btn-outline-light">See Our All Users</button>  
                    </Slide>
                    
                    <Slide left>
                        <h1 className="my-4">We are the best to travelers.</h1>
                    </Slide>

                    <Slide left>
                    <span className="me-4"><i className="fas fa-clock me-1"></i> Nov 01, 2021</span>
                    </Slide>
                    
                    <Slide left>
                    <span><i className="fas fa-user me-1"></i> Awesome Experience</span>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Banner;