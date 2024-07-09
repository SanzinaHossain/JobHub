import { FcGoogle } from "react-icons/fc"
import LoginHooks from "./hooks"
import Form from "./Form"
import DynamicBanner from "../../Molecules/DynamicBanner/DynamicBanner"
import login from "../../../assets/images/login.png"
import { LoginStyles } from "./LoginStyles"

export default function Login() {
  const { handleGoogleLogin, handleGoToRegister } = LoginHooks()

  return (
    <div className={LoginStyles.container}>
      <DynamicBanner
        title="Login"
        subTitle="Login To Explore The Job Category "
      />
      <div className={LoginStyles.loginContainer}>
        <div className={LoginStyles.imageContainer}>
          <img src={login}></img>
        </div>
        <div className={LoginStyles.loginFormContainer}>
          <h1 className={LoginStyles.title}>Login User</h1>
          <h1 className={LoginStyles.subTitle}>
            Don't Have Any Account?{" "}
            {
              <button
                onClick={handleGoToRegister}
                className={LoginStyles.subTitleLink}
              >
                Register
              </button>
            }
          </h1>
          <Form type="login" />
          <div className={LoginStyles.loginDivider}>OR</div>
          <button
            onClick={handleGoogleLogin}
            className={LoginStyles.googleLoginContainer}
          >
            <h1 className="text-3xl">
              <FcGoogle></FcGoogle>
            </h1>
            <h1 className=" text-2xl">Google Login</h1>
          </button>
        </div>
      </div>
    </div>
  )
}
