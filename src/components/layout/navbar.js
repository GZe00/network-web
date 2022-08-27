import React from 'react'
import { Dropdown, Input, Menu, Typography } from 'antd'
import UserContext from '../../context/UserContext'
import { HomeOutlined, LoginOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { navigate } from 'gatsby'
import logo from "../../images/logo.png"
const { Text } = Typography

const NavBar = () => {
    const { user, setUser, setToken } = React.useContext(UserContext)
    const [shortName, setShortName] = React.useState()

    React.useEffect(() => {
        if (user.name && (user.name).charAt(0) !== "") {
            if (user.lastname && (user.lastname).charAt(0) !== "") {
                setShortName(`${(user.name).charAt(0).toUpperCase()}${(user.lastname).charAt(0).toUpperCase()}`)
            } else {
                setShortName(`${(user.name).charAt(0).toUpperCase()}${(user.name).charAt(1).toUpperCase()}`)
            }
        }
    }, [])

    const logout = () => {
        localStorage.clear()
        setUser()
        setToken()
        navigate('/auth/login')
    }

    return <div className={`w-full flex items-center justify-between h-14 px-8
    bg-gradient-to-r from-network-primary-300 via-network-primary-400 to-network-primary-400 rounded-b-md rounded-bl-md`}>
        <div className="border-2 border-white rounded-full bg-network-primary-300" style={{ padding: "2px" }}>
            <img className="w-10 cursor-pointer" src={logo} alt="Bienvenido a network social" onClick={() => navigate('/')} />
        </div>
        <div className="">
            <div className="w-max">
                <Input.Search placeholder="Buscar amigo.." disabled />
            </div>
        </div>
        <div className="">
            {
                shortName ?
                    <Dropdown trigger="click" overlay={
                        <Menu
                            items={[{
                                key: '1',
                                label: (
                                    <div className="w-full flex items-center" onClick={() => navigate('/')}>
                                        <HomeOutlined className="mr-2" />
                                        <Text>Inicio</Text>
                                    </div>
                                ),
                            }, {
                                key: '2',
                                label: (
                                    <div className="w-full flex items-center" onClick={() => navigate('/profile')}>
                                        <UserOutlined className="mr-2" />
                                        <Text>Mi perfil</Text>
                                    </div>
                                ),
                            }, {
                                key: '3',
                                label: (
                                    <div className="w-full flex items-center">
                                        <SettingOutlined className="mr-2" />
                                        <Text>Configuraciones</Text>
                                    </div>
                                ),
                                disabled: true
                            }, {
                                key: '4',
                                danger: true,
                                label: (
                                    <div className="w-full flex items-center" onClick={() => logout()}>
                                        <LoginOutlined className="mr-2" />
                                        <Text>Cerrar sesión</Text>
                                    </div>
                                )
                            },
                            ]}
                        />
                    }>
                        <div className={`cursor-pointer border-2 w-12 text-center border-network-secondary bg-network-secondary-400 rounded-full p-2 text-lg font-medium
                        ease-in duration-150 hover:scale-110 
                    `}>
                            {shortName}
                        </div>
                    </Dropdown>
                    : null
            }
        </div>
    </div>

}

export default NavBar