import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './AuthContext';

const SellerSign = () => {
    const navigate = useNavigate()
    const { handleSign, updatUs } = useContext(UserContext)
    const handleSellerSign = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        const userInfo = {
            name,
            email,
            photo,
            role: "seller"
        }
        handleSign(email, password)
            .then(data => {
                console.log(data)
                updatUs({
                    displayName: name
                }).then(Cuser => {
                    handleServerSign(userInfo)
                }).catch(error => {

                })
            }).catch(error => {
                console.log(error)
            })

    }
    const handleServerSign = userInfo => {
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)

        })
            .then(res => res.json())
            .then(data => {
                navigate('/')
                toast.success("sign up succesfull")
            })
    }
    return (
        <div>
            <form onSubmit={handleSellerSign} className='w-4/6 lg:w-2/6 mx-auto border border-secondary p-4 my-16'>
                <h2 className='font-bold text-xl tex-center'>Sign Up</h2>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">name </span>
                    </label>
                    <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Photo URL </span>
                    </label>
                    <input type="text" name='photo' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">email </span>
                    </label>
                    <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">password</span>
                    </label>
                    <input type="password" name='password' placeholder="Type here" className="input input-bordered w-full " />
                </div>

                <button type='submit' className='btn w-full text-primary mt-4 uppercase font-semibold text-lg'>Submit</button>
            </form >
        </div >
    );
};

export default SellerSign;