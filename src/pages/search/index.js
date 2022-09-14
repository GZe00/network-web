import React from 'react'
import { Avatar, Empty, List, Space, Typography } from 'antd';
import { navigate } from 'gatsby';
import MainLayout from "../../components/layout/main";
import SEO from "../../components/seo";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons"

const { Text, Title } = Typography;

const mockdata = [{
    id: 1,
    first_name: "Tamera",
    last_name: "Minard",
    email: "tminard0@blogtalkradio.com",
    username: "jkernocke0",
    gender: "Female",
    ip_address: "5.91.148.173",
    profile_src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 2,
    first_name: "Curr",
    last_name: "Maric",
    email: "cmaric1@noaa.gov",
    username: "jdettmar2",
    gender: "Male",
    ip_address: "185.76.6.112",
    profile_src: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 3,
    first_name: "Cecilio",
    last_name: "Quiddinton",
    email: "cquiddinton2@slashdot.org",
    gender: "Male",
    username: "dhanstock6",
    ip_address: "50.50.174.31",
    profile_src: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 4,
    first_name: "Micheline",
    last_name: "Fieldhouse",
    email: "mfieldhouse3@spotify.com",
    gender: "Agender",
    username: "hdu-fourc",
    ip_address: "112.80.99.240",
    profile_src: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 5,
    first_name: "Napoleon",
    last_name: "Chantillon",
    email: "nchantillon4@domainmarket.com",
    gender: "Male",
    username: "ofi.shley1",
    ip_address: "63.185.175.8",
    profile_src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 6,
    first_name: "Mannie",
    last_name: "Scrammage",
    email: "mscrammage5@wired.com",
    gender: "Male",
    username: "leagersl",
    ip_address: "175.140.214.82",
    profile_src: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 7,
    first_name: "Junie",
    last_name: "Caruth",
    email: "jcaruth6@uiuc.edu",
    gender: "Female",
    username: "claurentu",
    ip_address: "196.163.106.91",
    profile_src: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 8,
    first_name: "Cal",
    last_name: "Dodell",
    email: "cdodell7@microsoft.com",
    gender: "Female",
    username: "hcheesley13",
    ip_address: "146.35.228.237",
    profile_src: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 9,
    first_name: "Thor",
    last_name: "Lemerie",
    email: "tlemerie8@jimdo.com",
    gender: "Male",
    username: "leager23.al",
    ip_address: "231.54.63.101",
    profile_src: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 10,
    first_name: "Remington",
    last_name: "Huby",
    email: "rhuby9@trellian.com",
    gender: "Male",
    username: "mrutherforth1j",
    ip_address: "250.72.39.121",
    profile_src: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 11,
    first_name: "Dominick",
    last_name: "Hofler",
    email: "dhoflera@theguardian.com",
    username: "jdettmar2",
    gender: "Male",
    ip_address: "29.192.236.218",
    profile_src: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 12,
    first_name: "Engelbert",
    last_name: "Blackboro",
    email: "eblackborob@i2i.jp",
    username: "bhaskell1y",
    gender: "Male",
    ip_address: "162.60.103.172",
    profile_src: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 13,
    first_name: "Malory",
    last_name: "Annear",
    email: "mannearc@nbcnews.com",
    gender: "Female",
    username: "ewelham2h",
    ip_address: "200.237.58.190",
    profile_src: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 14,
    first_name: "Ebeneser",
    last_name: "Bodle",
    email: "ebodled@reverbnation.com",
    gender: "Male",
    username: "sbricknell2o",
    ip_address: "180.88.197.8",
    profile_src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 15,
    first_name: "Staffard",
    last_name: "Kingsworth",
    email: "skingsworthe@sciencedirect.com",
    gender: "Male",
    username: "cwakelam8",
    ip_address: "164.209.218.211",
    profile_src: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 16,
    first_name: "Alasteir",
    last_name: "Cater",
    email: "acaterf@myspace.com",
    gender: "Male",
    username: "spolet5",
    ip_address: "99.130.214.241",
    profile_src: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}]

const SearchResult = ({ location }) => {

    React.useEffect(() => {
        if (!location) {
            navigate('/')
        } else {
            const params = new URLSearchParams(location.search);
            const parameter = params.get("s");
            if (!parameter) {
                navigate('/')
            } else {
                // console.log(parameter);
            }
        }

    }, []);

    const goUserProfile = (username) => navigate(`/${username}`)

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    return <>
        <SEO title="Resultados de la Busqueda" />
        <MainLayout>
            <div className="w-full mx-1 md:w-4/5 mt-4 px-4 py-2 md:mx-auto bg-white rounded-md shadow-lg overflow-x-auto" >
                <Title level={3}>Resultados de la Búsqueda</Title>
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={mockdata}
                    locale={{
                        emptyText: (
                            <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                imageStyle={{
                                    height: 45,
                                }}
                                description={
                                    <p>No se encontraron resultados de la búsqueda</p>
                                }
                            />
                        )
                    }}
                    renderItem={item => {
                        return <List.Item
                            className='hover:bg-slate-100 p-2 cursor-pointer ease-in duration-200 hover:scale-105'
                            onClick={() => goUserProfile(item.username)}
                            key={item.id}
                            actions={[
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.profile_src} />}
                                title={<Text /*href={item.href}*/>{item.first_name} {item.last_name ?? null}</Text>}
                                description={"Alguna description por cada uno de los usuarios de su perfil"}
                            />
                            {/*item.content*/}
                            {"Otra description mas larga por cada uno de los usuarios de su perfil"}
                        </List.Item>
                    }}
                />
            </div>
        </MainLayout>
    </>
}

export default SearchResult