import React from 'react'
import Layout from '../../components/layout/login'
import SEO from '../../components/seo'
import { Button, Col, ConfigProvider, DatePicker, Form, Input, Row, Space, Tooltip, Typography } from 'antd'
import { navigate } from 'gatsby'
import 'moment/locale/es-mx';
import locale from 'antd/lib/locale/es_ES';
import ReCAPTCHA from 'react-google-recaptcha'
import useAuth from "../../services/hooks/auth/useAuth"
import { isEmailValid, passwordStrong, isUsernameValid } from "../../components/helpers"
import { CheckCircleOutlined } from '@ant-design/icons'

const { Text, Title } = Typography

const Register = () => {

  const [isCaptcha, setIsCaptcha] = React.useState(false)
  const [user, setUser] = React.useState(undefined)
  const { loading, error, createUser, isUserNameUsed, isEmailUsed } = useAuth()

  const handleCaptcha = () => setIsCaptcha(true)

  const onFinish = async values => {
    if (values.birthday)
      values.birthday = values.birthday.format("YYYY-MM-DD");
    let result = await createUser(values);
    if (result)
      setUser(result);

  }

  const onFinishFailed = () => { }

  return <Layout title="Registro">
    <SEO title="Registro" />
    {
      user !== undefined && user ?
        <Row>
          <Col span={24}>
            <div className="w-full flex flex-col justify-center px-4 py-6 bg-slate-200 rounded-lg shadow-xl border-2 border-slate-100">
              <Row gutter={[8, 24]}>
                <Col span={24}>
                  <Space direction="vertical" size={14} style={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: "0 auto" }}>
                    <CheckCircleOutlined className="text-8xl" style={{ color: "rgb(21,128,61)" }} />
                    <Title level={4}>Registro completo</Title>
                    <div className="text-center md:text-left">
                      <Text>
                        <span className="text-xl">B</span>ienvenido a <span className="text-xl italic">
                          The Social Work
                        </span> {`${user.name} ${user.lastname}`}, ha terminado el proceso de registro ahora puede iniciar sesión con su correo <span className="font-semibold">
                          {user.email}
                        </span>.
                      </Text>
                    </div>
                  </Space>
                </Col>
                <Col span={24} md={20} style={{ margin: '0 auto', }}>
                  <Button style={{ width: "100%" }} size="large" type="primary" onClick={() => navigate('/auth/login')}>
                    Iniciar sesión
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        :
        <Form
          layout='vertical'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            // birthday: moment('', 'YYYY-MM-DD')
          }}
          requiredMark
        >
          <Space direction="vertical" size={10} style={{ width: '100%' }}>
            <Row gutter={[8, 12]}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Nombre(s)"
                  rules={[{
                    required: true,
                    message: 'Ingresa tu(s) nombre(s)'
                  }
                  ]}
                  hasFeedback
                  required
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="lastname"
                  label="Apellidos(s)"
                  required
                  hasFeedback
                  rules={[{
                    required: true,
                    message: "Ingresa tu(s) apellido(s)"
                  }]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Correo electrónico"
                  name="email"
                  hasFeedback
                  rules={[{
                    type: "email",
                    message: "Formato de correo electrónico no válido"
                  }, {
                    required: true,
                    message: "Ingresa tu correo electrónico"
                  }, {
                    //Verificar que el email no se haya utilizado
                    validator: async (_, value) => {
                      if (isEmailValid(value)) {
                        if (await isEmailUsed(value)) {
                          return Promise.resolve()
                        }
                        return Promise.reject(new Error("Este correo electrónico ya ha sido utilizado"))
                      }
                    }
                  }
                  ]}
                  required
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Contraseña"
                  name="password"
                  hasFeedback
                  required
                  rules={[{
                    validator: (_, value) => {
                      if (value) {
                        if (value.length > 7) {
                          if (passwordStrong(value)) {
                            return Promise.resolve()
                          }
                          return Promise.reject(new Error("Tú contraseña debe de contener un número y un caractér especial: !@#$%^&*"))
                        }
                        return Promise.reject(new Error("La contraseña debe ser mayor a 8 caractéres"))
                      }
                      return Promise.reject(new Error("Escriba su contraseña"))
                    }
                  }]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Confirma tu contraseña"
                  name="confirm"
                  hasFeedback
                  required
                  rules={[({ getFieldValue }) => ({
                    validator: (_, value) => {
                      if (getFieldValue('password')) {
                        if (value) {
                          if (String(getFieldValue('password')) !== String(value)) {
                            return Promise.reject(new Error('Contraseñas no coinciden'))
                          }
                          return Promise.resolve()
                        }
                        return Promise.reject(new Error('Confirme su contraseña'))
                      }
                      return Promise.reject(new Error('Escriba una contraseña'))
                    }
                  })]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[8, 12]}>
              <Col span={12}>
                <Form.Item
                  label="Nombre de usuario"
                  name="username"
                  hasFeedback
                  rules={[{
                    validator: async (_, value) => {
                      if (!value) {
                        return Promise.reject(new Error("Ingresa tu nombre de usuario"));
                      }
                      if (value.length <= 3) {
                        return Promise.reject(new Error("Nombre de usuario demasiado corto"));
                      }
                      if (!isUsernameValid(value)) {
                        return Promise.reject(new Error("Nombre de usuario no válido."));
                      }
                      if (!(await isUserNameUsed(value))) {
                        return Promise.reject(new Error("Nombre de usuario ya ha sido utilizado"));
                      }
                      return Promise.resolve()
                    }
                  }
                  ]}
                  required
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label="Número de celular"
                  rules={[
                    () => ({
                      validator(_, value) {
                        if (value && value.length > 10)
                          return Promise.reject("Número de celular no válido")
                        return Promise.resolve();
                      }
                    })
                  ]}
                >
                  <Input placeholder='xxx-xxxx-xxxx' type="number" min={0} max={9999999999} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <ConfigProvider locale={locale}>
                  <Form.Item
                    name="birthday"
                    label="Fecha de cumpleaños"
                  >
                    <DatePicker
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </ConfigProvider>
              </Col>
            </Row>
            <Row>
              <Col span={24} align="center">
                <ReCAPTCHA
                  sitekey={process.env.GATSBY_ENV_REACT_APP_KEYCAPTCHA_WEB}
                  onChange={handleCaptcha}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <p className="my-2 text-center text-lg text-red-600 ease-in duration-200">
                  {
                    error ?? null
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col span={24} align="center">
                {
                  isCaptcha ?
                    <Button loading={loading} size="large" type="primary" htmlType='submit'>Enviar</Button>
                    : <Tooltip title="Es necesario validar el captcha">
                      <Button size="large" disabled type="primary">Enviar</Button>
                    </Tooltip>
                }
              </Col>
            </Row>
            <Row >
              <Col span={24} align="center">
                <Text strong>¿Ya tienes cuenta? </Text>
                <Text className="hover:underline" style={{ cursor: 'pointer', color: '#ff005da9' }} strong onClick={() => navigate('/auth/login')}>Iniciar sesión</Text>
              </Col>
            </Row>
          </Space>
        </Form>
    }
  </Layout>
}

export default Register