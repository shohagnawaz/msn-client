import { Navigate } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useAuth()

    if(loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if(!user) {
        return <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoutes;