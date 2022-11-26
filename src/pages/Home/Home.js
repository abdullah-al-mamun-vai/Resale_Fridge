import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Category from './Category';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            <Service></Service>
        </div>
    );
};

export default Home;