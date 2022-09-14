import React from 'react';
import { GrDocumentLocked } from '@react-icons/all-files/gr/GrDocumentLocked';
import { Button, Space, Typography } from 'antd';
import { Link, navigate } from 'gatsby';


const { Text, Title } = Typography;

const NotAvailable = () => {

    const handleGoHome = () => navigate('/')

    return <div className="w-full md:w-10/12 lg:w-8/12 mx-4 md:mx-auto flex flex-col justify-center items-center text-center">
        <GrDocumentLocked className='text-7xl' />
        <Title level={3}>Este contenido no está disponible en este momento</Title>
        <Space direction='vertical' size={14} style={{ width: '100%' }}>
            <Text type='secondary'>Por lo general, esto sucede porque el propietario solo compartió el contenido con un grupo reducido de personas, cambió quién puede verlo o este se eliminó.</Text>
            <Button onClick={handleGoHome} type='primary' >Volver</Button>
            <Link to='/'>Ir al servicio de ayuda</Link>
        </Space>
    </div>
}

export default NotAvailable