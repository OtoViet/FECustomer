import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import FormApi from '../../api/formApi';
function Google(){
    let navigate = useNavigate();
    const handleLogin = (response) => {
        console.log(response);
        FormApi.loginGoogle({data:response.profileObj});
        localStorage.setItem('token', response.tokenId);
        navigate('/');
    }
    const handleFailure = (err) => {
        console.log(err);
    }
    return <GoogleLogin 
    clientId= {process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Đăng nhập với google"
    onSuccess={handleLogin}
    onFailure={handleFailure}
    cookiePolicy={'single_host_origin'}
    ></GoogleLogin>;
}
export default Google;