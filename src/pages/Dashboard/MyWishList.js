import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../Auth/AuthContext';

const MyWishList = () => {
    const { user } = useContext(UserContext)
    const { data: wishItems = [], refetch } = useQuery({
        queryKey: ['wishItems'],
        queryFn: async () => {
            const res = await fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/user/all-wish/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    const hanldeDelete = id => {
        fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/user/remove/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success("delete successfully")
            })
    }
    console.log(wishItems)

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
                            wishItems.map(wish =>
                                <tr key={wish?._id}>
                                    <th>
                                        <button onClick={() => hanldeDelete(wish?._id)}><FaTrash></FaTrash></button>
                                    </th>
                                    <td>
                                        <div className=" ">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={wish?.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{wish?.title}</td>
                                    <td>{wish?.price}</td>
                                    <td><Link className="btn btn-neutral text-primary" to={'/dashboard/dashboard/my-order'}>Buy Now</Link></td>
                                </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyWishList;