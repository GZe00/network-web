import { navigate } from 'gatsby';
import * as React from 'react';
import * as authApi from "./";

const useAuth = () => {
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState(undefined)
    const [error, setError] = React.useState()
    const createUser = async form => {
        setLoading(true)
        return await new Promise((resolve, reject) => {
            authApi.createUser(form).then(response => {
                if (response.status === 200) {
                    resolve(response.data.data)
                } else {
                    reject(false)
                    setError("Ha ocurrido un error")
                }
            }).catch(error => {
                // console.log(error)
                if (error.response.status === 400) {
                    setError("Ha ocurrido un error")
                }
                reject(false)
            }).finally(() => {
                setLoading(false)
            })
        })
    }

    const loginUser = form => {
        setLoading(true)
        authApi.login(form).then(response => {
            if (response.status === 200) {
                setData(response.data)
            }
        }).catch(error => {
            // console.log(error)
            if (error.response && error.response.status === 400) {
                setError(error.response.data.message)
            }
            if(error.response.status === 403) {
                if(error.response.data.code === "verify-account"){
                    navigate('/checkpoint?account=verify-account')
                }
            }
        }).finally(() => {
            setLoading(false)
        })
    }

    const isEmailUsed = async email => {
        return await new Promise((resolve, reject) => {
            authApi.isEmailUsed(email).then(response => {
                if (response.status === 200) {
                    resolve(response.data.available)
                }
            }).catch(error => {
                // console.log(error)
                reject(false)
            })
        })
    }

    const isUserNameUsed = async username => {
        return await new Promise((resolve, reject) => {
            authApi.isUserNameUsed(username).then(response => {
                if (response.status === 200) {
                    resolve(response.data.available)
                }
            }).catch(error => {
                // console.log(error)
                reject(false)
            })
        })
    }

    return {
        error,
        data,
        loading,
        isEmailUsed,
        isUserNameUsed,
        createUser,
        loginUser
    }
}

export default useAuth