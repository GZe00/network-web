import * as React from "react"
import { Space, Typography } from "antd"
import MainLayout from "../components/layout/main"
import SEO from "../components/seo"
import UserContext from "../context/UserContext"
import PostsPreview from "../components/cards/postsPreview"
// import { StaticImage } from 'gatsby-plugin-image'
import '../styles/global.css'
import { CommentOutlined, HeartOutlined } from "@ant-design/icons"
import Stories from "../components/cards/stories"

const { Title, Text } = Typography
// markup


const IndexPage = () => {

  const { user } = React.useContext(UserContext)

  const [posts, setPosts] = React.useState([])

  const [stories, setStories] = React.useState([])


  React.useEffect(() => {
    if (user) {

      // mock
      if (posts.length <= 0) {
        setPosts([...posts,
        {
          likes: 245,
          comments: 34,
          imageUrl: "https://images.pexels.com/photos/12345815/pexels-photo-12345815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1%201x,%20https://images.pexels.com/photos/12345815/pexels-photo-12345815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=22x",
          alt: "Decripcion de una imagen random"
        },
        {
          likes: 1345,
          comments: 192,
          imageUrl: "https://images.pexels.com/photos/13025002/pexels-photo-13025002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Decripcion imagen random de una imagen random"
        },
        {
          likes: 87,
          comments: 4,
          imageUrl: "https://images.pexels.com/photos/13299949/pexels-photo-13299949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Ipsum has been the industry's standard dummy"
        },
        {
          likes: 5747,
          comments: 764,
          imageUrl: "https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled itt"
        }
        ])
      }
      if (stories.length <= 0) {
        setStories([...stories,
        {
          imageUrl: "https://images.pexels.com/photos/13339565/pexels-photo-13339565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Decripcion de una imagen random"
        },
        {
          imageUrl: "https://images.pexels.com/photos/12233047/pexels-photo-12233047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Decripcion imagen random de una imagen random"
        },
        {
          imageUrl: "https://images.pexels.com/photos/13244387/pexels-photo-13244387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Ipsum has been the industry's standard dummy"
        },
        {
          imageUrl: "https://images.pexels.com/photos/12734337/pexels-photo-12734337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled itt"
        },
        {
          imageUrl: "https://images.pexels.com/photos/13087274/pexels-photo-13087274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled itt"
        },
        {
          imageUrl: "https://images.pexels.com/photos/11940940/pexels-photo-11940940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled itt"
        }
        ])
      }
    }
  }, [user])

  return <>
    <SEO title="Home" />
    <MainLayout page="landingPage" >
      {
        user ?
          <>
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
            <Space direction="vertical" size={56} style={{ width: '100%' }}>
              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                <Title level={2}>Posts recientes</Title>
                <Space direction="horizontal" size={14} style={{ width: '100%' }} className="px-4 overflow-y-auto py-4">
                  {
                    posts && posts.length > 0 ?
                      posts.map((post, index) => {
                        return <PostsPreview key={index}>
                          <div className="relative w-56 h-56">
                            <div className="relative w-56 h-56 rounded-3xl cursor-pointer hover:h-48 duration-150 ease-in z-20">
                              <img
                                className="shadow-md rounded-3xl w-full h-full"
                                src={post.imageUrl}
                                alt={post.alt} />
                            </div>
                            <div className="absolute bottom-0 z-0">
                              <div className="w-56 flex justify-end items-center">
                                <div className="flex items-center mx-1">
                                  <HeartOutlined className="text-xl" />
                                  <Text className="mx-1">{post.likes}</Text>
                                </div>
                                <div className="flex items-center mx-1">
                                  <CommentOutlined className="text-xl" />
                                  <Text className="mx-1">{post.comments}</Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </PostsPreview>
                      }) : <></>
                  }
                </Space>
              </Space>
              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                <Title level={2}>Historias recientes</Title>
                <Space direction="horizontal" size={14} style={{ width: '100%' }} className="px-4 overflow-y-auto py-4">
                  {
                    stories && stories.length > 0 ?
                      stories.map((post, index) => {
                        return <Stories key={index}>
                          <div className="relative w-56 h-80">
                            <div className="relative w-56 h-80 rounded-3xl cursor-pointer">
                              <img
                                className="shadow-md rounded-3xl w-full h-full object-fill grayscale-35 blur-essm hover:grayscale-0 hover:blur-none hover:scale-95 duration-150 ease-in z-20"
                                src={post.imageUrl}
                                alt={post.alt} />
                            </div>
                          </div>
                        </Stories>
                      }) : <></>
                  }
                </Space>
              </Space>
            </Space>
          </>
          : <></>
      }
    </MainLayout>
  </>

}

export default IndexPage