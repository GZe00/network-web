import React from 'react'
import { Space, Typography } from 'antd'
import MainLayout from '../components/layout/main'
import SEO from '../components/seo'
import UserContext from '../context/UserContext'
import moment from 'moment'
import 'moment/locale/es'

const { Title } = Typography

const IndexProfile = () => {
    const { user } = React.useContext(UserContext)
    const [profile, setProfile] = React.useState()

    React.useEffect(() => {
        if (user && user.name && (user.name).charAt(0) !== "") {
            if (user.lastname && (user.lastname).charAt(0) !== "") {
                setProfile(`${(user.name).charAt(0).toUpperCase()}${(user.lastname).charAt(0).toUpperCase()}`)
            } else {
                setProfile(`${(user.name).charAt(0).toUpperCase()}${(user.name).charAt(1).toUpperCase()}`)
            }
        }
    }, [user])

    return <>
        <SEO title="Perfil" />
        <MainLayout>
            {
                user ?
                    <Space direction="vertical" siz={24} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Title level={3}>Mi perfil</Title>
                        {
                            user.profile ? <>image</>
                                : profile ? <div className={`w-18 text-center border-2 border-network-secondary bg-network-secondary-400 rounded-full p-10 text-2xl font-medium
                               
                            `}>
                                    {profile}
                                </div> : null
                        }
                        <div className="bg-white rounded shadow-xl px-6 py-2" style={{ minWidth: "320px" }}>
                            <div className="w-full flex">
                                <div>Nombre(s): </div>
                                <div className="ml-2">{user.name}</div>
                            </div>
                            <div className="w-full flex text-sm">
                                <div>Apellido(s): </div>
                                <div className="ml-2">{user.lastname ?? null}</div>
                            </div>
                            <div className="w-full flex text-sm">
                                <div>Usuario: </div>
                                <div className="ml-2">{user.username}</div>
                            </div>
                            <div className="w-full flex text-sm">
                                <div>Correo: </div>
                                <div className="ml-2">{user.email}</div>
                            </div>
                            <div className="w-full flex text-sm">
                                <div>Edad de la cuenta: </div>
                                <div className="ml-2">{
                                    moment(new Date()).diff(moment(user.createdAt), 'days')
                                } días</div>
                            </div>
                            <div className="w-full flex text-sm">
                                <div>Creado el </div>
                                <div className="ml-2">{moment(user.createdAt).locale("es").format('dddd D MMMM, YYYY')}</div>
                            </div>

                        </div>
                    </Space>
                    : <></>
            }
        </MainLayout>
    </>

}

export default IndexProfile