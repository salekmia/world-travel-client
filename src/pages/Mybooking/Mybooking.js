import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './Mybooking.css';
const Mybooking = () => {
    const {user} = useAuth()
    const [allbookings, setAllbookings] = useState([])
    useEffect(() => {
        fetch('https://grisly-spirit-27656.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => {
            setAllbookings(data)
        })
    }, [allbookings])
    
    const filterBookings = allbookings.filter(booking => booking.email === user?.email)

    const myDetails = filterBookings[0]
    

    const handleDelet = (id) => {
        const procced = window.confirm('Are you sure? You want to delete.')
        if(procced) {
            const url = `https://grisly-spirit-27656.herokuapp.com/bookings/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount) {
                    const remaining = filterBookings.filter(booking => booking._id !== id)
                    console.log(remaining)
                }
            })
        }
        
    }
    

    return (
        <div>
            <Header></Header>
            <div className="container my-3">
                <div className="row">
                <div className="col-md-8">
                    <h3 className="text-center">My Booking</h3>
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                    {
                        filterBookings.map(booking => 
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
            <div className="col-md-4">
                <div className="mx-5 mt-5 shadow-lg bg-white" style={{position: 'fixed'}}>
                    <h3 className="text-center">My Details</h3>
                    <table className="table">
                    <tbody>
                        <tr>
                        <td>Name:</td>
                        <td>{myDetails?.name || user?.displayName}</td>
                        </tr>
                        <tr>
                        <td>Email:</td>
                        <td>{myDetails?.email || user?.email}</td>
                        </tr>
                        <tr>
                        <td>Phone:</td>
                        <td>{myDetails?.phone || 'No phone found'}</td>
                        </tr>
                        <tr>
                        <td>Address:</td>
                        <td>{myDetails?.address || 'No address found'}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mybooking;