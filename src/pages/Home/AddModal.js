import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Auth/AuthContext';

const AddModal = ({ singleaddvertise }) => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const handleBook = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const product_name = form.product_name.value
        const price = form.price.value
        const phone = form.phone.value
        const meeting = form.meeting.value
        const email = form.email.value
        const product_photo = form.product_photo.value

        const bookedInfo = {
            name,
            product_name,
            price,
            phone,
            meeting,
            email, product_photo,
            category: singleaddvertise._id,
        }
        fetch("http://localhost:5000/booked", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookedInfo)
        }).then(res => res.json())
            .then(data => {
                toast.success("booked successfully")
                navigate('/dashboard/dashboard/my-order')
            }).catch(error => console.log(error))
    }
    return (
        <div>
            {/* The button to open modal */}
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="add_product" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="add_product" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Book Now</h3>
                    <div>

                        <form onSubmit={handleBook} className=' mx-auto border border-secondary p-4 my-4'>
                            {/* form start  */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold capitalize mt-4">Name </span>
                                </label>
                                <input type="text" disabled name='name' defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold capitalize mt-4">Email </span>
                                </label>
                                <input type="text" disabled name='email' defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold capitalize mt-4">Product Name </span>
                                </label>
                                <input type="text" disabled name='product_name' defaultValue={singleaddvertise?.product} placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold capitalize mt-4">Product Photo </span>
                                </label>
                                <input type="text" disabled name='product_photo' defaultValue={singleaddvertise?.photo} placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold capitalize mt-4">Product  price </span>
                                </label>
                                <input type="text" disabled name='price' defaultValue={singleaddvertise?.discount_price} placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold capitalize mt-4">Phone Number</span>
                                </label>
                                <input type="number" name='phone' placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold capitalize mt-4">Meeting Location</span>
                                </label>
                                <input type="text" name='meeting' placeholder="Type here" className="input input-bordered w-full " />
                            </div>

                            <button type='submit' className='btn w-full text-primary mt-4 uppercase font-semibold text-lg'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddModal;