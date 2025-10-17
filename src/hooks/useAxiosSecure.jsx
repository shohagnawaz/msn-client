import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: `https://msn-server.vercel.app`
});

const useAxiosSecure = () => {
    const { user } = useAuth();
    axiosSecure.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config
    }, error => {
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;