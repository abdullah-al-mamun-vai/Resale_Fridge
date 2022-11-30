import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast'
const AllSeller = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/users/sellers')
            const data = await res.json();
            return data
        }
    })
    // handle user delete 
    const hanldeDelete = id => {
        fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/users/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                refetch()
                toast.success("Successfully Deleted")
            })
    }
    // make admin 
    const handleMakeAdmin = (id) => {

        fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/users/${id}`, {
            method: "PUT",
        }).then(res => res.json())
            .then(data => {
                refetch()
                toast.success("Successfully Added")
            })
    }
    const handleVerified = (id) => {

        fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/users/verified/${id}`, {
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
                                sellers.map(seller =>
                                    <tr key={seller?._id}>
                                        <th>
                                            <button onClick={() => hanldeDelete(seller?._id)}><FaTrash></FaTrash></button>
                                        </th>
                                        <td>{seller?.name}</td>
                                        <td>{seller?.email}</td>
                                        <th><button onClick={() => handleMakeAdmin(seller?._id)} className="btn btn-neutral text-primary">Make Admin</button></th>

                                        {
                                            !seller.verified && <th><button onClick={() => handleVerified(seller?._id)} className="btn btn-neutral text-primary">Verify</button></th>
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

export default AllSeller;