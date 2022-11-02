import axiosInstance from "./axiosInstance";

const restAPI = {
    get: (url: string) => axiosInstance.get(url)
}

export default restAPI;