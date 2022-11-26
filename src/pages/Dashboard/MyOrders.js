import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { UserContext } from '../Auth/AuthContext';

const MyOrders = () => {
    const { user } = useContext(UserContext)
    const { data: bookedItems = [], refetch } = useQuery({
        queryKey: ['bookedItems'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booked/${user?.email}`)
            const data = res.json()
            return data
        }
    })

    const hanldeDelete = id => {
        fetch(`http://localhost:5000/booked/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                toast.success("delete successfully")
            })
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Thumbnail</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookedItems.map(booked =>
                                <tr key={booked?._id}>
                                    <th>
                                        <button onClick={() => hanldeDelete(booked?._id)}><FaTrash></FaTrash></button>
                                    </th>
                                    <td>
                                        <div className=" ">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={booked?.product_photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{booked?.product_name}</td>
                                    <td>{booked?.price}</td>
                                    <th><button className="btn btn-ghost">pay</button></th>
                                </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;