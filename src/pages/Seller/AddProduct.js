import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <form className='w-2/6 mx-auto border border-secondary p-4 my-16'>
                <h2>Add A Product</h2>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Name </span>
                    </label>
                    <input type="text" name='product' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Regular Price </span>
                    </label>
                    <input type="text" name='reg_price' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Discount Price </span>
                    </label>
                    <input type="text" name='dis_price' placeholder="Type here" className="input input-bordered w-full " />
                </div>


                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Condition</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Phone Number </span>
                    </label>
                    <input type="number" name='phone' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Location </span>
                    </label>
                    <input type="text" name='location' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <button type='submit' className='btn w-full text-primary mt-4 uppercase font-semibold text-lg'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;