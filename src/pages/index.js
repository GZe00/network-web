import * as React from "react"
import { Typography } from "antd"
import MainLayout from "../components/layout/main"
import SEO from "../components/seo"
import '../styles/global.css'
import UserContext from "../context/UserContext"


const { Text } = Typography
// markup
const IndexPage = () => {
  const { user } = React.useContext(UserContext)

  return <>
    <SEO title="Home" />
    <MainLayout>
      {
        user ?
          <div className="px-12 py-4">
            <Text className="text-xl">
              Hola <span className=" font-semibold">{`${user.name} ${user.lastname}`}</span>
            </Text>
            <p>
              Bienvenido a esta primera demo de NetWork Social, hasta ahora no se tiene pensado algún objetivo de uso para esta aplicación pero cualquier sugerencia enviada al desarrollador será tomada en cuenta para el crecimiento y/o desarrollo de dicha plataforma
            </p>
            <p>
              Siéntete libre de navegar por la aplicación, interactuar y borrar tu cuenta
            </p>
            <p>
              No queremos ser una copia de cualquier red social existente, por eso no se tiene pensado un objetivo de uso
            </p>
            <p>
              Atte: GZE00
            </p>
          </div>
          : <></>
      }
    </MainLayout>
  </>

}

export default IndexPage
