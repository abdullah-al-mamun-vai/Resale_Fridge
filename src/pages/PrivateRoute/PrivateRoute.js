import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Auth/AuthContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(UserContext)
    if (loading) {
        return <h2>loading....</h2>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoute;