import React from 'react'
import PropTypes from "prop-types"
import { navigate } from 'gatsby'
import BgLoad from "../../images/bg-load.jpg"
import useUser from '../hooks/useUser'

const MainLayout = ({ children }) => {
    const { user, token, setUser, setToken } = useUser()

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            // localStorage.setItem('data', JSON.stringify(req.mongo));
            const isTokenLocal = localStorage.getItem('data')
            if (!isTokenLocal) {
                navigate('/auth/login')
            } else {
                if (!user)
                    setUser(JSON.parse(isTokenLocal).user)

                if (!token)
                    setToken(JSON.parse(isTokenLocal).token)

            }
        }
    }, [user, token])

    return <>
        {
            //Validar que apiToken y user sean correctos
            user && token ? (
                <main className={`w-full h-screen overflow-y-auto`}>
                    {children}
                </main>)
                : <div className="w-full h-screen">
                    <img className="object-cover ease-in duration-200 brightness-50 shadow-inherit w-full h-screen" src={BgLoad} alt="Imagen de carga" />
                </div>
        }
    </>
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout