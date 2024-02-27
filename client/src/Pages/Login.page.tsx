
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { login } from "../Services/api.service";
import { UserCredential, signInWithPopup } from "firebase/auth";
import { auth, facebook } from "../Services/firebase.service";

function LoginPage() {

  const navigate = useNavigate();

  const handleLogin = async (provider: any) => {
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      const id = result.user.providerData[0].uid;
      const name = result.user.displayName ?? "Guest";
      await login(id, name);
      navigate('/camera');
    } catch (e) {
      //handle the error when login fails
      console.log(`login error ${e}`);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/camera');
  }, [])

  return (
    <button onClick={() => handleLogin(facebook)}>Login with Facebook</button>
  )
}

export default LoginPage