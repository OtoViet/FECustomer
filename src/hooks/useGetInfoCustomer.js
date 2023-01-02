import FormApi from '../api/formApi.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentHost } from '../utils/path.js';

function useGetInfoCustomer() {
    const navigate = useNavigate();
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const getInfoCustomer = () => {
        FormApi.getInfoCustomer().then((infoRes) => {
            setInfo(infoRes);
            setLoading(false)
        })
        .catch((error) => {
            console.log(error);
            navigate(`${currentHost()}/login`);
        });
    };
    useEffect(() => {
        getInfoCustomer();
    }, []);
    return [loading, info];
}
export default useGetInfoCustomer;