import React from 'react'
import UserContext from '../context/UserContext'

const NetWorkContextProvider = ({ children }) => {
    const [user, setUser] = React.useState()
    const [token, setToken] = React.useState()


    return <UserContext.Provider
        value={{
            user,
            token,
            setUser,
            setToken
        }}
    >
        {children}
    </UserContext.Provider>

}

export default NetWorkContextProvider