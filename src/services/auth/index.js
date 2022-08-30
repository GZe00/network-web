import { api } from "../api"

export const validateTokenLocalStorage = async (token) => {
    return new Promise((resolve, reject) => {
        try {
            api.post("/auth/network/api/validate_token", token).then(response => {
                // console.log("Dentro de la funcion validateTokenLocalStorage")
                // console.log(response)
                resolve(true)
            })
        } catch (error) {
            // console.log(error);
            reject(false)
        }
    })
}