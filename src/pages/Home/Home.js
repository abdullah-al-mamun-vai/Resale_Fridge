import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Category from './Category';
import Service from './Service';

const Home = () => {
    const { data: addvertised = [] } = useQuery({
        queryKey: ['addvertised'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-products/addvertise')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            {
                addvertised > 0 && <Advertise addvertised={addvertised}></Advertise>
            }
            <Service></Service>
        </div>
    );
};

export default Home;