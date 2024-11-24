import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PROD_URL = import.meta.env.VITE_BACKEND_URL;
const betterAxios = axios.create({
    baseURL: PROD_URL,
    // withCredentials: true
});

betterAxios.interceptors.request.use(
    config => {
        // config.headers["ngrok-skip-browser-warning"] = "true"
        return config;
    }, (error) => Promise.reject(error)
);

betterAxios.interceptors.response.use(
    response => response,

    async (error) => {
        if (error?.response?.status === 500) {
            toast.error("Unable to process your request");
        }
        // 400, Bad Request to be done later
        // 404, Not Found
        return Promise.reject(error);
    }
)

export { betterAxios }