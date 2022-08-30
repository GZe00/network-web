import React from 'react'
import PropTypes from "prop-types"
import { navigate } from 'gatsby'
import BgLoad from "../../images/bg-load.jpg"
import useUser from '../hooks/useUser'
import NavBar from './navbar'
import InsightsLandingPage from '../insights/InsightsLandingPage'
import { validateTokenLocalStorage } from '../../services/auth'

const MainLayout = ({ children, page }) => {
    const { user, token, setUser, setToken } = useUser()

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            // localStorage.setItem('data', JSON.stringify(req.mongo));
            const existsTokenLocalStorage = localStorage.getItem('data')
            if (!existsTokenLocalStorage) {
                navigate('/auth/login')
            } else {
                const tokenLocalStorage = JSON.parse(existsTokenLocalStorage)
                let userData;

                // Continuar
                console.log(tokenLocalStorage)
                validateTokenLocalStorage(tokenLocalStorage.token).then(response => {
                    console.log(response)
                })

                if (!user)
                    setUser(tokenLocalStorage.user)

                if (!token)
                    setToken(tokenLocalStorage.token)

            }
        }
    }, [user, token])

    return <>
        {
            //Validar que apiToken y user sean correctos si es que existen en localStorage
            user && token ? (
                <main className="w-full overflow-y-auto bg-slate-100" style={{ height: '100vh' }}>
                    <NavBar />
                    {
                        page === "landingPage" /*&& user.setting.showInsights */ ?
                            <InsightsLandingPage /> : null
                    }
                    <div className="w-full px-4 md:px-0 md:w-10/12 lg:w-8/12 h-auto overflow-y-auto mx-auto">
                        {children}
                    </div>
                </main>)
                : <div className="w-full h-screen">
                    <img className="blur-esm object-cover ease-in duration-200 brightness-50 shadow-inherit w-full h-screen" src={BgLoad} alt="Imagen de carga" />
                </div>
        }
    </>
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout