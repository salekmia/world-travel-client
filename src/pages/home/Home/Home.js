import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;