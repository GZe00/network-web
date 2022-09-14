import axios from "axios"
import { apiUrl } from "../../../config"


const users = (token) => {
    const api = axios.create({
        baseURL: apiUrl,
    })
    api.interceptors.request.use(config => {
        config.headers = {
            Authorization: `Bearer ${token}`,
        }
        return config
    })

    const getUser = (username) => {
        return api.get(`/network/api/users/profile/${username}`);
    }


    return {
        getUser
    }
}



export default users