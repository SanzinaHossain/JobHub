import LoginHooks from "./hooks"
import DynamicBanner from "../../Molecules/DynamicBanner/DynamicBanner"
import Form from "./Form"
import register from "../../../assets/images/register.webp"
import { registerStyles } from "./RegisterStyles"
export default function Register() {
  const { handleGoToLogin } = LoginHooks()

  return (
    <div className={registerStyles.container}>
      <DynamicBanner
        title="Register"
        subTitle="Create an account & Start posting or hiring talents"
      />
      <div className={registerStyles.registerContainer}>
        <div className={registerStyles.imageContainer}>
          <img src={register} alt="Register" />
        </div>

        <div className={registerStyles.registerFormContainer}>
          <h1 className={registerStyles.title}>Register As New User</h1>
          <h1 className={registerStyles.subTitle}>
            Already Have An Account?{" "}
            {
              <button
                onClick={handleGoToLogin}
                className={registerStyles.subTitleLink}
              >
                Login
              </button>
            }
          </h1>
          <Form type="" />
        </div>
      </div>
    </div>
  )
}
