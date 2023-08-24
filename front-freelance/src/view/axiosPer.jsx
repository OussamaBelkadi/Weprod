
import { config } from "@fullcalendar/core/internal";
import axios from "axios";
import { Navigate } from "react-router-dom";

const axiosPer = axios.create(
    {
        baseURL: "http://127.0.0.1:8000/api"
    }

)

axiosPer.interceptors.request.use((config)=>{
  
    config.headers.Authorization = `Bearer ${localStorage.getItem("Token")}`;
    return config;
})

axiosPer.interceptors.response.use(response =>{
    return response
}, error=>{
    if(error.response && error.response.status === 401){
        Navigate('/login')
        return error
    }throw error
})

export default axiosPer