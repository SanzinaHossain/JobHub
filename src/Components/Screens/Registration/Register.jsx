import { FcGoogle } from "react-icons/fc"
import LoginHooks from "./hooks"
import DynamicBanner from "../../Molecules/DynamicBanner/DynamicBanner"
import Form from "./Form"
import register from "../../../assets/images/register.webp"
export default function Register() {
  const { handleGoToLogin } = LoginHooks()

  return (
    <div class=" w-full h-full bg-white ">
      <DynamicBanner
        title="Register"
        subTitle="Create an account & Start posting or hiring talents"
      />
      <div className="bg-white w-full h-full p-10 flex justify-center items-center">
        <div>
          <img src={register}></img>
        </div>
        <div class="mx-auto shadow-2xl  h-auto rounded-xl bg-white border-2 border-purple-100 p-10 w-[500px] ">
          <h1 class="text-black font-bold text-center text-3xl ">
            Register As New User
          </h1>
          <h1 class="text-black text-center text-xl mt-3 cormorant-garamond-semibold-italic mb-5 ">
            Already Have An Account?{" "}
            {
              <button
                onClick={handleGoToLogin}
                className="cormorant-garamond-semibold-italic text-purple-700"
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
