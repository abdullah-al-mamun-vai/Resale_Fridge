import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from './AuthContext';

const Login = () => {
    const provier = new GoogleAuthProvider()

    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('')

    let Another = location.state?.from?.pathname || '/'

    const { handleLog, handleGoogle } = useContext(UserContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        handleLog(email, password)
            .then(cUser => {
                toast.success("log in Succesfully")
                navigate(Another, { replace: true })
            })
            .catch(error => setError(error))

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
                getUserToken(userInfo.email)
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
        <div>

            <form onSubmit={handleLogin} className='w-4/6 lg:w-2/6 mx-auto border border-secondary p-4 my-16'>
                <h2 className='font-bold text-xl tex-center'>Sign Up</h2>
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
                <button onClick={handleSignGoogle} className='btn w-full text-primary mt-4 uppercase font-semibold text-lg'>Sign in with <FaGoogle className='ml-2' /> </button>
                {
                    error && <p className='text-red-600 capitalize my-2'>user name or password incorrect</p>
                }
            </form>
        </div>
    );
};

export default Login;