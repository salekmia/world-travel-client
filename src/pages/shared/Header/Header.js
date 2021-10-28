import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/header_logo.png';
import './Header.css';
const Header = () => {
    return (
        <div id="header" className="py-2">
            <div>
                <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <Link to="/"><img className="logo" src={logo} alt="" /></Link>
                    <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-white fs-3"><i class="fas fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-0 p-0 ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li class="nav-item">
                            <Link className="text-decoration-none mx-2 text-white" to="addservice">Add Service</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="text-decoration-none mx-2 text-white" to="allbooking">Manage All Booking</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="text-decoration-none mx-2 text-white" to="/mybooking">My Booking</Link>
                        </li>
                        <button className="btn btn-primary mx-2">Login</button>
                        <button className="btn btn-primary mx-2">Register</button>
                        <button className="btn btn-primary mx-2">Log out</button>
                        <span>Abu Salek</span>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;