import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Auth/AuthContext';
import { Bars } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(UserContext)
    if (loading) {
        return <div className="flex h-screen items-center justify-center">
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoute;