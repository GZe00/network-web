import React from 'react'
import { Col, Row, Select, Typography } from 'antd'
import Insights from '../cards/Insights'

const { Title, Text } = Typography
const { Option } = Select


const InsightsLandingPage = () => {

    const [types] = React.useState(["news", "followers", "likes", "views"])

    return <div className="w-full my-4 flex flex-col items-center md:flex-row justify-center">
        <div className="w-10/12 sm:w-96 md:w-48 mx-4">
            <Row gutter={[8, 16]}>
                <Col span={24}>
                    <Title level={3} className="border-text" style={{ color: "rgb(65, 163, 255)" }} >Al momento</Title>
                </Col>
                <Col span={24}>
                    <Text>
                        Esta semana ha sido un poco solitario, recibiste 2 visitas a tu perfil y 1 me gusta del 15 de agosto al 20 de agosto.
                    </Text>
                </Col>
                <Col span={24}>
                    <Select defaultValue={`half-month`} style={{ width: "100%" }}>
                        <Option value="today">Hoy</Option>
                        <Option value="yesterday">Ayer</Option>
                        <Option value="week">Esta semana</Option>
                        <Option value="half-month">Últimos 14 días</Option>
                        <Option value="month">Mes</Option>
                        <Option value="year">Año</Option>
                        <Option value="custom">Personalizado</Option>
                    </Select>
                </Col>
            </Row>
        </div>
        <div className="w-full flex flex-wrap justify-around">
            {
                types.map((type, key) => {
                    return <Insights key={key} type={type} />
                })
            }
        </div>
    </div>
}

export default InsightsLandingPage