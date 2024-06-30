import { NavLink } from "react-router-dom"
import { HeaderStyles } from "./HeaderStyles"

export default function HeaderLink({ route }) {
  console.log(route)
  return (
    <li className={HeaderStyles.pathText} key={route.id}>
      <NavLink
        className={({ isActive }) => (isActive ? HeaderStyles.pathActive : "")}
        to={route.path}
      >
        {route.name}
      </NavLink>
    </li>
  )
}
