import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    const location = useLocation();
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(!user){
        return <Navigate to="/login" state={location.pathname} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;