import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { UserContext } from '../Auth/AuthContext';

const MyProducts = () => {
    const { user } = useContext(UserContext)
    const { data: products = [], refetch } = useQuery({
        queryKey: ['bookedItems'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${user?.email}`)
            const data = res.json()
            return data
        }
    })

    const hanldeDelete = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                toast.success("delete successfully")
            })
    }
    const handleAdd = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT"
        }).then(res => res.json()).then(data => {
            refetch()
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <tr key={product?._id}>
                                    <th>
                                        <button onClick={() => hanldeDelete(product?._id)}><FaTrash></FaTrash></button>
                                    </th>
                                    <td>
                                        <div className=" ">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product?.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product?.product}</td>
                                    <td>{product?.discount_price}</td>

                                    {product?.sold_out === true ? <td> sold Out </td> : <td> available </td>}

                                    {
                                        !product.addvertise === true && <th><button onClick={() => handleAdd(product?._id)} className="btn btn-neutral text-primary">Addvertise</button></th>
                                    }

                                </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;