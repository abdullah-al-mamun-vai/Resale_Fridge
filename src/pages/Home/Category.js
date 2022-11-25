import React from 'react';
import { useQuery } from '@tanstack/react-query'
const Category = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json();
            return data
        }
    })
    return (
        <div className='py-24'>
            <h2 className='capitalize font-bold text-4xl mb-24 text-center '>Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories?.map(category =>
                        <div key={category._id} className="card card-compact w-full bg-base-100 shadow-xl">
                            <figure><img src={category?.img} className="h-56 w-3/5 mx-auto" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{category?.title}</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Category;