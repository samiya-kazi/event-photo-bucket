import ReactFacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from "react-facebook-login";
import config from "../config";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { login } from "../Services/api.service";

function LoginPage() {

  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem('fb-id');
    console.log(id)
    if (id) navigate('/camera');
  }, [])

  function validateLoginInfo (data: any) : data is ReactFacebookLoginInfo {
    return  typeof data === 'object' && typeof data.name === 'string' && typeof data.id === 'string';
  }

  const responseFacebook = async (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
    if (validateLoginInfo(response)) {
      const successfulResponse = response as ReactFacebookLoginInfo;
      const { name, id } = successfulResponse;

      await login(id, name!);
      navigate('/camera');
    } else {
     console.log('Facebook login error:', response); 
    }
  }

  return (
    <ReactFacebookLogin
      appId={config.FB_APP_ID}
      autoLoad={false}
      callback={responseFacebook}
    >

    </ReactFacebookLogin>
  )
}

export default LoginPage