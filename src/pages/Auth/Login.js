import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from './AuthContext';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let Another = location.state?.from?.pathname || '/'

    const { handleLog } = useContext(UserContext)
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
            .catch(error => console.log(error))

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
            </form>
        </div>
    );
};

export default Login;