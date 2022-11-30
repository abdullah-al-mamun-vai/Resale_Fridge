import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
const Category = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/category')
            const data = await res.json();
            return data
        }
    })
    return (
        <div className='py-16'>
            <h2 className='capitalize font-bold text-4xl mb-24 text-center '>Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories?.map(category =>
                        <Link key={category._id} to={`/category/${category._id}`}>
                            <div className="card w-full bg-base-100 shadow-xl shadow-gray-400 mt-3">
                                <figure><img src={category?.img} className="h-56 w-3/5 mx-auto" alt="Shoes" /></figure>
                                <div className="card-body text-center">
                                    <h2 className="text-secondary font-bold text-xl uppercase">{category?.title}</h2>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary btn-wide text-lg text-secondary mx-auto">See All</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Category;