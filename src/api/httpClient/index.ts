import axiosInstance from "./axiosInstance";
import HttpBodyType from '../../types/http/httpBodyType'

const httpClient = {
    get: async<T>(endpoint: string, options?: object): Promise<T> => {
        try {
            return (await axiosInstance.get(endpoint, options)).data;
        } catch (e) {
            console.log(e.response ? e.response.data : e);
            return e.response ? e.response.data : e;
        }
    },
    post: async<T>(endpoint: string, body?: HttpBodyType | FormData, options?: object): Promise<T> => {
        try {
            return (await axiosInstance.post(endpoint, body, options)).data;
        } catch (e) {
            console.log(e.response ? e.response.data : e);
            return e.response ? e.response.data : e;
        }
    },
    put: async<T>(endpoint: string, body?: HttpBodyType, options?: object): Promise<T> => {
        try {
            return (await axiosInstance.put(endpoint, body, options)).data;
        } catch (e) {
            console.log(e.response ? e.response.data : e);
            return e.response ? e.response.data : e;
        }
    },
    patch: async<T,V> (endpoint: string, body?: V, options?: object): Promise<T> => {
        try {
            return (await axiosInstance.patch(endpoint, body, options)).data;
        } catch (e) {
            console.log(e.response ? e.response.data : e);
            return e.response ? e.response.data : e;
        }
    },
    delete: async<T>(endpoint: string, options?: object): Promise<T>=> {
        try {
            return (await axiosInstance.delete(endpoint, options)).data;
        } catch (e) {
            console.log(e.response ? e.response.data : e);
            return e.response ? e.response.data : e;
        }
    },
};

export default httpClient;