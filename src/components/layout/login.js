import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import up from "../../images/pre.jpg"
import PropTypes from "prop-types"
import { Typography } from 'antd'
import BgLoad from "../../images/bg-load.jpg"
import UserContext from '../../context/UserContext'
import { navigate } from 'gatsby'

const { Title } = Typography

const Layout = ({ children, title }) => {

    const { user, token, setUser, setToken } = React.useContext(UserContext)

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            // localStorage.setItem('data', JSON.stringify(req.mongo));
            const isTokenLocal = localStorage.getItem('data')
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
                <div className={`
                w-full h-screen flex justify-center items-center
                ${title === "Registro" ? 'bg-gradient-to-r from-network-secondary-900 via-network-secondary-800 to-network-secondary-500 backdrop-blur-xl' : 'bg-gradient-to-r from-network-dark-900 via-network-dark-500 to-network-dark-700 backdrop-blur-xl'}                
                `}>
                    <div className="flex w-full h-full flex-col md:flex-row overflow-y-auto">
                        <div className={` hidden md:block w-5/12 h-full overflow-y-auto
                ${title === "Registro" ? 'bg-gradient-to-r from-network-secondary-900 via-network-secondary-800 to-network-secondary-500 backdrop-blur-xl' : 'bg-gradient-to-r from-network-dark-900 via-network-dark-500 to-network-dark-700 backdrop-blur-xl'}
            `}>
                            <div className="flex items-center justify-center w-full h-full">
                                <StaticImage
                                    objectFit="cover"
                                    className="rounded-xl shadow-xl w-48 h-120 md:w-7/12"
                                    src="../../images/bg-auth.jpg"
                                    alt="Login" />
                            </div>
                        </div>
                        <div className={`w-full md:w-7/12 h-full flex flex-col items-center justify-center md:bg-none backdrop-blur-xl py-6
    ${title === "Registro" ? " bg-gradient-to-r from-network-secondary-900 via-network-secondary-800 to-network-secondary-500" : " bg-gradient-to-r from-network-dark-900 via-network-dark-500 to-network-dark-700"}
            `}>
                            <div className="bg-slate-100 w-10/12 h-full px-6 py-8 rounded-lg shadow-lg overflow-y-auto">
                                <img className="w-20 h-20 shadow-md object-cover rounded-full mx-auto" src={up} alt="ilustrativo" />
                                <div className="text-center">
                                    <Title level={2} strong style={{ margin: '0px' }}>The Social Work</Title>
                                    <Title level={5} strong style={{ margin: '8px 0' }}>{title}</Title>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
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