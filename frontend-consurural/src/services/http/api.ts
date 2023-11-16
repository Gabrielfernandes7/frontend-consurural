import axios, { AxiosError } from "axios";

const api = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (request) => {
        request.headers.set("Authorization");
        return request;
    },
    (error) => Promise.reject(error));
  
api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        return Promise.reject(error);});

export default api;
