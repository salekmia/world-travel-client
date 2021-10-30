import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/header_logo.png';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div id="header" className="py-2">
            <div>
                <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/"><img className="logo" src={logo} alt="" /></Link>
                    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white fs-3"><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-0 p-0 ms-auto mb-2 mb-lg-0 d-flex align-items-center custom-nav">

                        <li className="nav-item">
                            <Link className="mx-2" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="mx-2" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="mx-2" to="/contact">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="mx-2" to="/gallary">Gallary</Link>
                        </li>

                        {user?.email && <li className="nav-item">
                            <Link className="mx-2" to="/addservice">Add Service</Link>
                        </li>}

                        {user?.email && <li className="nav-item">
                            <Link className="mx-2" to="/allbooking">Manage All Booking</Link>
                        </li>}

                        {user?.email && <li className="nav-item">
                            <Link className="mx-2" to="/mybooking">My Booking</Link>
                        </li>}

                        {!user?.email && <Link to="/login"><button className="btn btn-primary mx-2">Login</button></Link>}
                        
                        {!user?.email && <Link to="register"><button className="btn btn-primary mx-2">Register</button></Link>}
                        
                        {user?.email && <button  onClick={logOut} className="btn btn-primary mx-2">Log out</button>}

                        {user?.email && <span>{user?.displayName}</span>}
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;