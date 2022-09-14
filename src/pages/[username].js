import React from 'react';
import MainLayout from '../components/layout/main';
import SEO from '../components/seo';
import useUsers from '../services/hooks/users/useUser';
import NotAvailable from '../components/views/NotAvailable';
import useUser from '../components/hooks/useUser';
import { Skeleton } from 'antd';

const ProfileAccount = ({ location }) => {
    const { token } = useUser()
    const { loading, data, searchUser, error } = useUsers();

    React.useEffect(() => {
        if (location && token) {
            let pathname = (location.pathname).split("/")[1];
            searchUser(pathname);
        }
    }, [token])

    return <>
        <SEO title={loading ? "Cargando..." : !error && data ? `${data.name} ${data.lastname ?? ""}` : "Sin resultados"} />
        <MainLayout>
            {
                !loading ?
                    <>
                        {
                            !error && data ?
                                <div className="flex justify-center items-center" style={{ height: "80vh" }}>
                                    <p>El usuario</p>
                                </div> :
                                <>
                                    {
                                        error === "not-founded" ?
                                            <div className="flex justify-center items-center" style={{ height: "80vh" }}>
                                                <NotAvailable />
                                            </div> : null
                                    }
                                </>
                        }
                    </> : <Skeleton avatar active paragraph={{ rows: 8 }} />
            }

        </MainLayout>
    </>
}

export default ProfileAccount