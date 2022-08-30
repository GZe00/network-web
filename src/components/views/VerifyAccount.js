import React from 'react'
import { Button, Divider, Typography } from 'antd'
import { navigate } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import discord from '../../images/dicord-ico.webp'

const { Title, Text } = Typography;

const VerifyAccount = () => {

    const handleLogin = () => navigate("/auth/login");

    return <div className="w-11/12 md:w-6/12 ">
        <div className='px-2 md:px-6 '><Title level={2}>Cuenta temporalmente suspendida</Title></div>
        <div className='flex flex-col'>
            <Text>Gracias por registrarte y bienvenido tester, tu siguiente paso será comunicarte con el desarrollador para poder habilitar tu cuenta y continues con tu navegación. </Text>
            <Text className='my-2'>Para agilizar tú verificación será necesario que especifiques cual es tu correo con el que te registraste y tu nombre de usuario.</Text>
            <Text>En las próximas horas tendrás acceso a la plataforma.</Text>
        </div>
        <Divider />

        <Title level={4}>Contacto</Title>
        <Text>farolerediaz@gmail.com</Text>
        <Divider />
        <Title level={4}>Únete a la comunidad en Discord</Title>
        <div >
            <div className='w-max hover:scale-105 ease-in duration-200 cursor-pointer 0 px-2 py-1 rounded-lg' ><a className='hover:text-blck text-black flex items-center' rel="noopener noreferrer" href='https://discord.gg/nMCYsZhbDm' target="__blank">
                <img
                    src={discord} alt='Discord'
                    className="w-9 h-9 rounded-lg" />
                <Text className='border-b-2 pb-1' style={{ color: "#000" }}>Network Social Testers</Text>
            </a></div>
        </div>
        <Divider />
        <div className="flex justify-center"><Button type="primary" onClick={handleLogin}>Regresar</Button></div>
    </div>
}

export default VerifyAccount