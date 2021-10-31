import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://grisly-spirit-27656.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    }, [])
    return (
        <div className="container">
            <Slide left>
                <div className="section-header">
                    <h3>Our Services</h3>
                    <p>See our best services for you</p>
                </div>
            </Slide>
            {services?.length === 0 ?
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            :
                <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    services.map(service => 
                    <div key={service._id} className="col">
                        <Fade bottom>
                        <div className="card h-100">
                            <img src={service?.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{service?.name}</h5>
                                <p className="card-text">{service?.description.slice(0, 100)}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>Price: {service?.price} TK</h5>
                                    <Link to={`/booking/${service?._id}`} ><button className="btn btn-outline-primary">Booking now</button></Link>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>)
                }
            </div>}
        </div>
    );
};

export default Services;