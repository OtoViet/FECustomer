import axiosClient from './axiosClient';
const formApi={
    signUp:function(body){
        const url ='/auth/signUp';
        return axiosClient.post(url,body);
    },
    existAccount:function(body){
        const url ='/auth/checkExistAccount';
        return axiosClient.post(url,body);
    },
    login:function(body){
        const url ='/auth/login';
        return axiosClient.post(url,body);
    },
    api:function(params){
        const url ='/api';
        return axiosClient.get(url,{
            body:params,
            baseURL: 'http://localhost:4000'
        });
    },
    token: function(body){
        const url ='/token';
        return axiosClient.post(url,body);
    },
    logout: function(){
        const url ='/logout';
        return axiosClient.delete(url);
    }
}
export default formApi;