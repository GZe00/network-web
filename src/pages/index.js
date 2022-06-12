import * as React from "react"
import { Button } from "antd"
import MainLayout from "../components/layout/main"
import SEO from "../components/seo"
import '../styles/global.css'
import { navigate } from "gatsby"
import UserContext from "../context/UserContext"


// markup
const IndexPage = () => {
  const { user, setUser, setToken } = React.useContext(UserContext)

  const logout = () => {
    localStorage.clear()
    setUser()
    setToken()
    navigate('/auth/login')
  }

  return <>
    <SEO title="Home" />
    <MainLayout>
      {
        user ?
          <>
            <p className="text-8xl">
              Hola {`${user.name} ${user.lastname}`}
            </p>
            <Button type="primary" onClick={() => logout()}>
              Cerrar sesión
            </Button>
          </>
          : <></>
      }
    </MainLayout>
  </>

}

export default IndexPage
