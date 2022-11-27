import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const AllSeller = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/sellers')
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
                                <th>make role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellers.map(seller =>
                                    <tr key={seller?._id}>
                                        <th>
                                            <button onClick={() => hanldeDelete(seller?._id)}><FaTrash></FaTrash></button>
                                        </th>
                                        <td>{seller?.name}</td>
                                        <td>{seller?.email}</td>
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

export default AllSeller;