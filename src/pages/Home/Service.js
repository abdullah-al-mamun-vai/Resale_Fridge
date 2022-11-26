import React from 'react';
import { FaYelp } from 'react-icons/fa'
const Service = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/9p8qX4F/latrach-med-jamil-Eb6h-MEh-Gl-KY-unsplash.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="">
                        <h1 className="mb-5 text-5xl text-primary font-bold mx-auto"><FaYelp></FaYelp></h1>
                        <p className="mb-5 text-3xl text-primary font-bold">WHY YOU SHOULD CHOOSE US</p>
                        <p className="mb-5 text-5xl text-primary font-bold">Reasons to choose refix</p>
                        <div>
                            <div  className="card w-full bg-base-100 shadow-xl shadow-gray-400 mt-3">
                                <figure><fa className="h-56 w-3/5 mx-auto" alt="Shoes" /></figure>
                                <div className="card-body text-center">
                                    <h2 className="text-secondary font-bold text-xl uppercase">{category?.title}</h2>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary btn-wide text-lg text-secondary mx-auto">See Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;