import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
        console.log(data)
        reset()
    };
    return (
        <div>
            <Header></Header>

            <div className="container my-4 d-flex justify-content-center">
                <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center">Add Services</h3>
                                
                    <input className="my-2" type="text" placeholder="Name" {...register("name")} />
                    <br />
                    
                    <input className="my-2" type="number" placeholder="Price" {...register("price")} />
                    <br />

                    <input className="my-2" type="text" placeholder="Description" {...register("description")} />
                    <br />

                    <input className="my-2" type="text" placeholder="Image URL" {...register("img")} />
                    
                    <br />
                    <div className="d-grid">
                    <input className="btn btn-primary my-2" type="submit" />
                    </div>
                </form>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default AddService;