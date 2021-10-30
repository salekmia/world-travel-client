import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Popular from '../Popular/Popular';
import Services from '../Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Popular></Popular>
            <Blogs></Blogs>
            <WhyChoose></WhyChoose>
            <Footer></Footer>
        </div>
    );
};

export default Home;