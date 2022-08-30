import React from 'react';
import { navigate } from 'gatsby';
import Layout from '../../components/layout/login';
import VerifyAccount from '../../components/views/VerifyAccount';


const Checkpoint = ({ location }) => {

    const [reason, setReason] = React.useState()

    React.useEffect(() => {
        const params = new URLSearchParams(location.search);
        const parameter = params.get("account");
        if (parameter) {
            setReason(parameter)
        }else{
            navigate('/')
        }
    }, [])
    return <Layout title="verify-account">
        {
            reason && reason === "verify-account" ? <VerifyAccount /> : null
        }
        {
            reason && reason === "verify-number" ? <></> : null
        }
        {
            reason && reason === "otherProblem" ? <></> : null
        }
    </Layout>
}

export default Checkpoint