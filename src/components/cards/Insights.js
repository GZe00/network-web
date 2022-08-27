import React from 'react'
import { Col, Row, Space, Typography } from 'antd'
import { defineTitle } from '../helpers'
import { InfoCircleOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const Insights = ({ type }) => {

    const [data, setData] = React.useState()

    React.useEffect(() => {

        let title = defineTitle(type)

        setData({
            title
        })
    }, [])

    return <>
        {
            data ?
                <div className="w-64 mx-2 my-4 bg-white rounded-xl border-slate-200 border-2 px-6 py-3 shadow">
                    <Row>
                        <Col span={24}>
                            <Space direction="vertical" size={12} style={{ width: '100%'}}>
                                <Row justify="space-between" align="top">
                                    <Col span={12}>
                                        <Title level={4} style={{lineHeight: "20px"}} type="secondary">{data.title}</Title>
                                    </Col>
                                    <Col span={12} align="end">
                                        <InfoCircleOutlined className="cursor-pointer" />
                                    </Col>
                                </Row>
                                <Row justify="space-between" align="middle">
                                    <Col span={12}>
                                        <Text style={{ fontSize: "32px" }}>2763</Text>
                                    </Col>
                                    <Col span={12} align="center">
                                        <p className="m-0">Grafica</p>
                                    </Col>
                                </Row>

                                <Row justify="space-between" align="top">
                                    <Col span={24}>
                                        <Text className="cursor-pointer" type="secondary" underline>Mostrar detalles</Text>
                                    </Col>
                                </Row>
                            </Space>
                        </Col>
                    </Row>
                </div>
                : <></>
        }
    </>
}

export default Insights