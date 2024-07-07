import { FcGoogle } from "react-icons/fc"
import LoginHooks from "./hooks"
import Form from "./Form"
import DynamicBanner from "../../Molecules/DynamicBanner/DynamicBanner"
import login from "../../../assets/images/login.png"

export default function Login() {
  const { handleGoogleLogin, handleGoToRegister } = LoginHooks()

  return (
    <div class=" w-full h-full bg-white ">
      <DynamicBanner
        title="Login"
        subTitle="Create an account & Start posting or hiring talents"
      />
      <div className="bg-white w-full h-full p-10 flex justify-center items-center gap-x-5">
        <div>
          <img src={login}></img>
        </div>
        <div class=" shadow-2xl h-auto rounded-xl bg-white border-2 border-purple-100 p-10 w-[500px] ">
          <h1 class="text-black font-bold text-center text-3xl ">Login User</h1>
          <h1 class="text-black text-center text-xl mt-3 cormorant-garamond-semibold-italic mb-5 ">
            Don't Have Any Account?{" "}
            {
              <button
                onClick={handleGoToRegister}
                className="cormorant-garamond-semibold-italic text-purple-700"
              >
                Register
              </button>
            }
          </h1>
          <Form type="login" />
          <div className="divider text-black divide-gray-200">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="border-2 border-purple-700 py-1 w-full rounded-lg hover:bg-purple-700  mt-3 justify-center gap-x-3 items-center flex hover:text-white text-black"
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
