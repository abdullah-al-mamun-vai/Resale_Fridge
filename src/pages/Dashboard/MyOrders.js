import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../Auth/AuthContext';

const MyOrders = () => {
    const { user } = useContext(UserContext)
    const { data: bookedItems = [], refetch } = useQuery({
        queryKey: ['bookedItems'],
        queryFn: async () => {
            const res = await fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/booked/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    const hanldeDelete = id => {
        fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/booked/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
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
                                    {
                                        booked.paid ? <th><button disabled className="btn btn-neutral text-primary">paid</button></th>
                                            : <th><button className="btn btn-neutral text-primary"><Link to={`/dashboard/details/${booked?._id}`}>pay</Link></button></th>
                                    }

                                </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;