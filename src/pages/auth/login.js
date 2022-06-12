import React from 'react'
import Layout from "../../components/layout/login"
import SEO from '../../components/seo'
import { Button, Checkbox, Col, Form, Input, Row, Space, Tooltip, Typography } from 'antd'
import { navigate } from 'gatsby'
import useAuth from "../../services/hooks/auth/useAuth"
import UserContext from '../../context/UserContext'

const { Text, Title } = Typography

const Login = () => {
    const [keepSession, setKeepSession] = React.useState(false)
    const { setUser, setToken } = React.useContext(UserContext)
    const [totalFail, setTotalFail] = React.useState(0)
    const { loginUser, loading, error, data } = useAuth()

    React.useEffect(() => {
        if (data !== undefined && data) {
            if (typeof window !== 'undefined') {
                localStorage.setItem('data', JSON.stringify(data))
                setUser(data.user)
                setToken(data.token)
                navigate('/')
            }
        }
    }, [data])

    const onFinish = values => {
        values.keepsession = keepSession
        setTotalFail(totalFail + 1)
        loginUser(values)
    }

    const onFinishFailed = err => {
        console.log(err)
    }

    return <Layout title="Iniciar sesión">
        <SEO title="Iniciar Sesión" />
        <Form
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            requiredMark
        >
            <Space direction="vertical" size={12} style={{ width: '100%' }}>
                <Row>
                    <Col span={24}>
                        <Form.Item
                            name="email"
                            label="Correo electrónico"
                            rules={[{
                                required: true,
                                message: 'Ingresa tu correo electrónico'
                            }, {
                                type: "email",
                                message: "Formato de correo no válido"
                            }
                            ]}
                            hasFeedback
                            required
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item
                            name="password"
                            label="Contraseña"
                            required
                            rules={[{
                                required: true,
                                message: "Ingresa tu contraseña"
                            }]}
                        >
                            <Input.Password />
                        </Form.Item>

                    </Col>
                </Row>
                <Row wrap>
                    <Col span={12} align="left">
                        <Checkbox value={keepSession} onChange={({ target }) => setKeepSession(target.checked)}>Mantener la sesión</Checkbox>
                    </Col>
                    <Col span={12} align="end">
                        <Text type="secondary" >Olvidé la contraseña</Text>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={24} align="center">
                        <Text type="danger" strong>{error ?? null}</Text>
                    </Col>
                </Row>
                {
                    totalFail <= 10 ?
                        <Row>
                            <Col span={24} align="center">
                                <Button loading={loading} size="large" type="primary" htmlType="submit">Iniciar</Button>
                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col span={24} align="center">
                                <Tooltip title="Demasiados intentos" >
                                    <Button disabled size="large" type="primary">Iniciar</Button>
                                </Tooltip>
                            </Col>
                        </Row>
                }
                <Row justify="center">
                    <Col span={24} align="center">
                        <Text type="danger" strong>
                            {
                                totalFail >= 5 ?
                                    <Title className="cursor-pointer underline hover:scale-110 ease-in duration-200"
                                        type="danger" level={4} onClick={() => navigate('/auth/register')}>
                                        ¿Ha olvidado su contraseña?
                                    </Title>
                                    : null
                            }
                        </Text>
                    </Col>
                </Row>
                <Row >
                    <Col span={24} align="center">
                        <Text strong>¿Eres nuevo? </Text>
                        <Text style={{ cursor: 'pointer', color: '#ff005da9' }} strong onClick={() => navigate('/auth/register')}>Crear una cuenta</Text>
                    </Col>
                </Row>
            </Space>
        </Form>
    </Layout>
}

export default Login