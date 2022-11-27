import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { UserContext } from '../Auth/AuthContext';
const AddProduct = () => {
    const { user } = useContext(UserContext)
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/category')
            .then(data => setCategory(data.data))
    }, [])


    //  add product handle 
    const handleAddProduct = e => {
        e.preventDefault();
        const from = e.target
        const product = from.product.value
        const regular_price = from.reg_price.value
        const discount_price = from.dis_price.value
        const condition = from.condition.value
        const category = from.category.value
        const phone = from.phone.value
        const location = from.location.value
        const year = from.year.value
        const des = from.des.value
        const photo = from.photo.value
        // date start 
        const dt = new Date()
        const date = dt.getDate()
        const month = dt.getMonth()
        const yr = dt.getFullYear()
        const time = `${date}/${month}/${yr}`
        const email = user?.email
        const add_product = {
            photo,
            product,
            regular_price,
            discount_price,
            condition,
            category,
            phone,
            location,
            year,
            des,
            time,
            email
        }
        console.log(add_product)
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(add_product)
        }).then(res => res.json()).then(data => {
            console.log(data)
        })

    }
    return (
        <div>

            <form onSubmit={handleAddProduct} className='w-4/6 lg:w-2/6 mx-auto border border-secondary p-4 my-16'>
                <h2 className='font-bold text-xl tex-center'>Add A Product</h2>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Product Name </span>
                    </label>
                    <input type="text" required name='product' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Product Photo URL </span>
                    </label>
                    <input type="text" required name='photo' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Regular Price </span>
                    </label>
                    <input type="text" required name='reg_price' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Discount Price </span>
                    </label>
                    <input type="text" required name='dis_price' placeholder="Type here" className="input input-bordered w-full " />
                </div>


                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Product Condition</span>
                    </label>
                    <select name='condition' className="select select-bordered">
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Category</span>
                    </label>
                    <select name='category' className="select select-bordered">
                        {category?.map(cat => <option value={cat._id} key={cat._id}>{cat.title}</option>)}
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Phone Number </span>
                    </label>
                    <input type="numbe requiredr" name='phone' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Location </span>
                    </label>
                    <input type="text" required name='location' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Year of Purchase </span>
                    </label>
                    <input type="text" required name='year' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Description </span>
                    </label>
                    <textarea name="des" required className="textarea textarea-bordered" placeholder="type here"></textarea>
                </div>
                <button type='submit' className='btn w-full text-primary mt-4 uppercase font-semibold text-lg'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;