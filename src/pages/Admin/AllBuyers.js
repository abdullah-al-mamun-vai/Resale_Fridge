import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const AllBuyers = () => {
    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyers')
            const data = await res.json();
            return data
        }
    })
    const hanldeDelete = id => {

    }
    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>name</th>
                                <th>email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers.map(buyer =>
                                    <tr key={buyer?._id}>
                                        <th>
                                            <button onClick={() => hanldeDelete(buyer?._id)}><FaTrash></FaTrash></button>
                                        </th>
                                        <td>{buyer?.name}</td>
                                        <td>{buyer?.email}</td>
                                        <th><button className="btn btn-ghost">Make Admin</button></th>
                                    </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBuyers;