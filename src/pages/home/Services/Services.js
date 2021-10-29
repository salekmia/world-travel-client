import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    }, [])
    return (
        <div className="container">
            <div className="section-header">
                <h3>Our Services</h3>
                <p>See our best services for you</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    services.map(service => 
                    <div key={service._id} className="col">
                        <div className="card h-100">
                            <img src={service?.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{service?.name}</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button className="btn btn-outline-primary">Booking now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;