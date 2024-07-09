import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../../Context/AuthProvider"

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext)
  if (user) {
    return children
  }
  return <Navigate to="/login" />
}
