import ReactFacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from "react-facebook-login";
import config from "../config";

function LoginPage() {

  const responseFacebook = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
    console.log(response);
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