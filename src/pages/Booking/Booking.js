import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './Booking.css';
const Booking = () => {
    const {user} = useFirebase()
    const {serviceId} = useParams()
    const [service, setService] = useState({})
    const {img, name, description, price} = service;
    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setService(data)
        })
    }, [])
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user?.email
        data.img = img
        data.product_name = name
        data.description = description
        data.price = price
        data.status = 'Pending'
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
        
        reset()
    };

    return (
        <div>
            <Header></Header>
            <div className="container my-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="card mb-3">
                        <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                    <h5>Price: {price} TK</h5>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form className="p-0 m-0 px-5" onSubmit={handleSubmit(onSubmit)}>
                            
                        <input className="my-3 w-100 p-2" type="text" placeholder="Name" {...register("name")} />
                        <br />

                        <input className="my-3 w-100  p-2" type="number" placeholder="Phone" {...register("phone")} />
                        <br />

                        <input className="my-3 w-100  p-2" type="text" placeholder="Address" {...register("address")} />
                        <br />

                        <textarea className="my-3 w-100  p-2" placeholder="Message" {...register("message")} cols="30" rows="5"></textarea>
                        <br />

                        <div className="d-grid"><input className="btn btn-primary" type="submit" value="Booking Now" /></div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Booking;