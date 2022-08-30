import React from 'react'
import PropTypes from "prop-types"
import BgLoad from "../../images/bg-load.jpg"
import UserContext from '../../context/UserContext'
import { navigate } from 'gatsby'
import Login from '../views/Login'
import Checkpoint from '../views/Checkpoint'

const Layout = ({ children, title }) => {

    const { user, token, setUser } = React.useContext(UserContext);
    //                          ,setToken

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            // localStorage.setItem('data', JSON.stringify(req.mongo));
            const isTokenLocal = localStorage.getItem('data')
            // verificar en server si el token es valido
            if (isTokenLocal) {
                if (!user)
                    setUser(JSON.parse(isTokenLocal).user)

                if (!token)
                    setUser(JSON.parse(isTokenLocal).token)

                navigate('/')
            }
        }
    }, [])

    return <>
        {
            !user && !token ?
                <>
                    {
                        title && title === "verify-account" ?
                            <Checkpoint >
                                {children}
                            </Checkpoint> : null
                    }
                    {
                        title && (title === "Iniciar sesión" || title === "Registro") ?
                            <Login title={title}>
                                {children}
                            </Login> : null
                    }
                </>
                : <div className="w-full h-screen">
                    <img className="blur-esm object-cover ease-in duration-200 brightness-50 shadow-inherit w-full h-screen" src={BgLoad} alt="Imagen de carga" />
                </div>
        }
    </>
}


Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout