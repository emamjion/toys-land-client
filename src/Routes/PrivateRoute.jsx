import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading) {
        return <div className='text-center my-24'>
            <progress className="progress progress-error w-56"></progress>
        </div>
    }
    
    if( user?.email ){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;