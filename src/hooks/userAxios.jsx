import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://msn-server.vercel.app`
})

const userAxios = () => {
    return axiosInstance;
};

export default userAxios;