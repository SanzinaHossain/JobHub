import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import app from "../../../firebase/firebase.init"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

export default function LoginHooks() {
  const [loginUser, setLoginUser] = useState(null)
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  // Login function
  const loginOnSubmit = (data) => console.log(data)

  //   Registration Function
  const registerOnSubmit = (data) => console.log(data)

  //   login button navigation
  const handleGoToLogin = () => {
    navigate("/login")
  }
  const handleGoToRegister = () => {
    navigate("/register")
  }

  //   Google Login Function
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const data = result.user
        setLoginUser(data)
        navigate("/jobs")
      })
      .catch((error) => {
        console.log("error:", error.message)
      })
  }

  //   Google Logout Function
  const handleGoogleLogOut = () => {
    signOut(auth)
      .then((result) => {
        setLoginUser(null)
      })
      .catch((error) => {
        console.log("error:", error.message)
      })
  }

  return {
    handleGoogleLogin,
    handleGoogleLogOut,
    setLoginUser,
    loginUser,
    register,
    handleSubmit,
    errors,
    loginOnSubmit,
    registerOnSubmit,
    handleGoToLogin,
    handleGoToRegister,
  }
}
