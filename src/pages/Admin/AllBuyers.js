import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast'

const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyers')
            const data = await res.json();
            return data
        }
    })
    const hanldeDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                refetch()
                toast.success("Successfully Deleted")

            })
    }
    const handleMakeAdmin = (id) => {

        fetch(`http://localhost:5000/users/${id}`, {
            method: "PUT",
        }).then(res => res.json())
            .then(data => {
                refetch()
                toast.success("Successfully Added")
            })
    }
    const handleVerified = (id) => {

        fetch(`http://localhost:5000/users/verified/${id}`, {
            method: "PUT",
        }).then(res => res.json())
            .then(data => {
                refetch()
                toast.success("Successfully verified")
            })
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
                                        <th><button onClick={() => handleMakeAdmin(buyer?._id)} className="btn btn-neutral text-primary">Make Admin</button></th>

                                        {
                                            !buyer.verified && <th><button onClick={() => handleVerified(buyer?._id)} className="btn btn-neutral text-primary">Verify</button></th>
                                        }
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