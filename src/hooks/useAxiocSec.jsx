import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-one-alpha.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { UserSignOut } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('api response error status', error?.status);

            if (error?.status === 401 || error?.status === 403) {
                UserSignOut()
                navigate('/login')
            }
            return Promise.reject(error);
        })
    }, [])

    return axiosInstance;
};

export default useAxiosSecure;



/**
 * axios: get, post, put/patch, delete --> easier
 * interceptor: client ----------|---------------> server
 * client <------------------|------------------Server
 * in the interceptor for response == needs two function 
 * 
*/