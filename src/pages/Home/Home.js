import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddModal from './AddModal';
import Advertise from './Advertise';
import Banner from './Banner';
import Category from './Category';
import Service from './Service';

const Home = () => {
    const { data: addvertised = [] } = useQuery({
        queryKey: ['addvertised'],
        queryFn: async () => {
            const res = await fetch('https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/all-products/addvertise')
            const data = await res.json()
            return data
        }
    })
    const [singleaddvertise, setSingleaddvertise] = useState({})
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            {
                addvertised && <Advertise setSingleaddvertise={setSingleaddvertise} addvertised={addvertised}></Advertise>
            }
            <AddModal singleaddvertise={singleaddvertise}></AddModal>
            <Service></Service>
        </div>
    );
};

export default Home;