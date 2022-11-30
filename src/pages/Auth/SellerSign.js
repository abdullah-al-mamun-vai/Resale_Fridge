import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './AuthContext';

const SellerSign = () => {
    const provier = new GoogleAuthProvider()
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const {
        handleSign,
        updatUs,
        handleGoogle } = useContext(UserContext)

    const handleSellerSign = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const image = form.photo.files[0]
        const fromData = new FormData()
        fromData.append('image', image)
        const url = "https://api.imgbb.com/1/upload?key=168403ecf414ec6376a8abab6aef03d7"
        fetch(url, {
            method: "POST",
            body: fromData
        }).then(res => res.json())
            .then(data => {
                const userInfo = {
                    name,
                    email,
                    photo: data.data.display_url,
                    role: "seller"
                }
                handleSign(email, password)
                    .then(data => {
                        updatUs({
                            displayName: name
                        }).then(Cuser => {
                            handleServerSign(userInfo)
                        }).catch(error => {

                        })
                    }).catch(error => {
                        setError(error)
                    })
            })

    }

    const handleSignGoogle = () => {
        handleGoogle(provier)
            .then(result => {
                const name = result.user?.displayName
                const email = result.user?.email
                const photo = result.user?.photoURL
                const userInfo = {
                    name,
                    email,
                    photo,
                    role: "buyers"
                }
                handleServerSign(userInfo);
                getUserToken(email)
            })
            .catch(eroor => {

            })
    }
    const handleServerSign = userInfo => {
        fetch('https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/users', {
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
    const getUserToken = email => {
        fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    navigate('/')
                    localStorage.setItem('accessToken', data.accessToken)
                }

            })
    }
    return (
        <div className='w-4/6 lg:w-2/6 mx-auto border border-secondary p-4 my-16'>
            <form onSubmit={handleSellerSign} >
                <h2 className='font-bold text-xl tex-center'>Sign Up</h2>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">name </span>
                    </label>
                    <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full " />
                </div>
                {/* photo */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold capitalize mt-4">Photo </span>
                    </label>
                    <input type="file" name='photo' accept='image/*' placeholder="Type here" className="input  w-full " />
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
            <button onClick={handleSignGoogle} className='btn w-full text-primary mt-4 uppercase font-semibold text-lg'>Sign in with <FaGoogle className='ml-2' /> </button>
            {
                error && <p className='text-red-600 capitalize my-2'>user already have an account</p>
            }
        </div >
    );
};

export default SellerSign;