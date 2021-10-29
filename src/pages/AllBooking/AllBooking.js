import React, { useEffect, useState } from 'react';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './AllBooking.css';
const AllBooking = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data => {
            setBookings(data)
        })
    }, [])

    const handleDelet = (id) => {
        const procced = window.confirm('Are you sure? You want to delete.')
        if(procced) {
            const url = `http://localhost:5000/bookings/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                setBookings(remaining)
                }
            })
        }
    }

    return (
        <div>
            <Header></Header>
            <div className="container my-3">
                <h2 className="text-center">See our all Booking</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4 my-3">
                    {
                        bookings.map(booking => 
                        <div key={booking._id} className="col">
                            <div className="card h-100">
                                <img src={booking?.img} className="card-img-top" alt="..."/>
                                <div className="card-body">

                                    <h5 className="card-title">{booking?.product_name}</h5>

                                    <p className="card-text">{booking.description.slice(0, 30)}</p>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6>Status: {booking?.status}</h6>
                                        <button onClick={() => handleDelet(booking?._id)} className="btn btn-outline-primary btn-sm">Delete</button>
                                    </div>

                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllBooking;