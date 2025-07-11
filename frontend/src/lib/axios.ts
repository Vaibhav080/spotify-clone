import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "ttp://localhost:5000/api" //server port np
});