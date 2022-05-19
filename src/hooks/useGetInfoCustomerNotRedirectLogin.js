import FormApi from '../api/formApi.js';
import { useState, useEffect } from 'react';
function useGetInfoCustomer() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const getInfoCustomer = () => {
        FormApi.getInfoCustomer().then((infoRes) => {
            setInfo(infoRes);
            setLoading(false)
        })
        .catch((error) => {
            setLoading('error');
            console.log(error);
        });
    };
    useEffect(() => {
        getInfoCustomer();
    }, []);
    return [loading, info];
}
export default useGetInfoCustomer;