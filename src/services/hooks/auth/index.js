import { api } from "./api"

const login = async form => {
    return await api.post("/auth/network/api/login", form)
}

const createUser = async form => {
    return await api.post("/auth/network/api/register", form)
}

const isEmailUsed = async email => {
    return await api.get(`/auth/network/api/isEmailAvailable?term=${email}`)
}

const isUserNameUsed = async username => {
    return await api.get(`/auth/network/api/isUsernameAvailable?term=${username}`)
}

export {
    login,
    createUser,
    isEmailUsed,
    isUserNameUsed
}