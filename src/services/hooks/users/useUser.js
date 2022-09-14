import * as React from 'react';
import users from "./index";
import useUser from '../../../components/hooks/useUser';

const useUsers = () => {
    const { token } = useUser();
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState(undefined);
    const [error, setError] = React.useState();

    const searchUser = async (username) => {

        setLoading(true);
        users(token).getUser(username).then(response => {
            if (response.status === 200) {
                setData(response.data);
            }
        }).catch(error => {
            if (error.response.status === 404) {
                if (error.response.data && error.response.data.code === "not-founded") {
                    setError("not-founded");
                }
            }
        }).finally(() => {
            setLoading(false);
        })
    }

    return {
        error,
        data,
        loading,
        searchUser,
    }
}

export default useUsers