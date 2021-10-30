import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import register from '../../../src/images/register.jpg';
import useAuth from '../../hooks/useAuth';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './Register.css';
const Register = () => {
    const {signInUsignGoogle, signUpUsingPassword, setUserName, setUser, user} = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const googleLoginHandle = () => {
        signInUsignGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
        .catch(error => {
            setError(error.message)
        })
    }


    const passwordSignUpHandle = () => {
        signUpUsingPassword(email, password)
        .then(result => {
            history.push(redirect_uri)
            setUserName(name)
            .then(()=> {
                setUser({...user, displayName:name})
            })
        })
        .catch(error =>{
            setError(error.message)
        }) 
    }

    const nameChange = (e) => {
        setName(e.target.value)
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <Header></Header>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                <div className="container d-flex justify-content-center align-items-center  py-4">
                            <div>
                                <h3 className="text-center">Signup here</h3>
                                <div className="border p-4">
                                    <input onBlur={nameChange} className="input-field" type="text" name="name" id="name" placeholder="Enter name" />
                                    <br />
                                    <input  onBlur={emailChange} className="input-field" type="email" name="email" id="email" placeholder="Enter email" />
                                    <br />
                                    <input onBlur={passwordChange} className="input-field" type="password" name="password" id="password" placeholder="Enter password" />
                                    <p><small>{error}</small></p>
                                    <br />

                                    <input onClick={passwordSignUpHandle} className="my-2 btn btn-primary rounded-pill px-4" type="submit" value="Sing up" />

                                    <div className="d-flex align-items-center my-4">
                                        <div className="or-line w-100"></div>
                                        <p className="m-0 px-2">or</p>
                                        <div className="or-line w-100"></div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button onClick={googleLoginHandle} className="btn btn-sm btn-primary"><i className="fab fa-google"></i> Sign up with google</button>

                                    </div>
                                    <p className="m-4">Already have an account? <Link to="/login">Login</Link></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={register} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;