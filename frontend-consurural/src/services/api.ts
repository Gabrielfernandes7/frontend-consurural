import axios, { AxiosError } from "axios";

const api = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    },
});

api.interceptors.request.use(
    (request) => {
       // request.headers.set("Authorization", funcaodetoken);
       return request;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export default api;

