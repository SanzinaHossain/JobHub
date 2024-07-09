import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth"
import app from "../../../firebase/firebase.init"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../../Context/AuthProvider"

export default function LoginHooks() {
  const [loginUser, setLoginUser] = useState(null)
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate()
  const { setUser } = useContext(AuthContext)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  // Login function
  const loginOnSubmit = (data) => {
    const email = data.email
    const password = data.password
    signInWithEmailAndPassword(auth, email, password)
      .then((results) => {
        const user = results.user
        navigate("/jobs")
      })
      .catch((error) => {
        const errorMessage = error.message
      })
  }

  // Login set user
  useEffect(() => {
    const hello = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      hello()
    }
  }, [])

  //   Registration Function
  const registerOnSubmit = (data) => {
    const displayName = data.name
    const email = data.email
    const password = data.password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        updateProfile(user, {
          displayName: displayName,
        })
        navigate("/login")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

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

  //    Logout Function
  const handleLogOut = () => {
    signOut(auth)
      .then((result) => {
        console.log("Logout Done")
        setUser(null)
        navigate("/login")
      })
      .catch((error) => {})
  }

  return {
    handleGoogleLogin,
    handleLogOut,
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
