import { useContext, useState } from "react"
import { HeaderStyles } from "./HeaderStyles"
import HeaderIcon from "./HeaderIcon"
import { routes } from "./HeaderData"
import HeaderLink from "./HeaderLink"
import { AuthContext } from "../../../Context/AuthProvider"
import LoginHooks from "../../Screens/Registration/hooks"
import { NavLink } from "react-router-dom"

export default function Header() {
  const { handleLogOut } = LoginHooks()
  const [open, setOpen] = useState(false)
  const { user } = useContext(AuthContext)

  return (
    <nav className={HeaderStyles.headerContainer}>
      <div className="flex justify-between">
        <HeaderIcon open={open} setOpen={setOpen} />
        <div className={HeaderStyles.titleTextContainer}>
          <h1 className={HeaderStyles.titleText}>JobHub</h1>
        </div>
        <ul
          className={`${HeaderStyles.container} ${
            open ? HeaderStyles.headerOpen : HeaderStyles.headerOff
          }`}
        >
          <div className="flex">
            {routes.map((route) => (
              <HeaderLink key={route.id} route={route} />
            ))}
          </div>
        </ul>
        <div className={HeaderStyles.buttonContainer}>
          {user ? (
            <button onClick={handleLogOut}>Logout</button>
          ) : (
            <NavLink to="/login" className={HeaderStyles.loginLink}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  )
}
