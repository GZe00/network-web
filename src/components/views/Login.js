import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import up from "../../images/pre.jpg"
import { Typography } from 'antd';
const { Title } = Typography;

const Login = ({children, title}) => {
    return <div className={`
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
                        className="shadow-xl w-full h-full"
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
}

export default Login