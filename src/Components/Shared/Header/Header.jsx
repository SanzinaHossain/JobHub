import { useState } from "react"
import { HeaderStyles } from "./HeaderStyles"
import HeaderIcon from "./HeaderIcon"
import { routes } from "./HeaderData"
import HeaderLink from "./HeaderLink"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={HeaderStyles.headerContainer}>
      <HeaderIcon open={open} setOpen={setOpen} />
      <ul
        className={`${HeaderStyles.container} ${
          open ? HeaderStyles.headerOpen : HeaderStyles.headerOff
        }`}
      >
        <div className={HeaderStyles.titleTextContainer}>
          <h1 className={HeaderStyles.titleText}>JobHub</h1>
        </div>
        <div className="flex">
          {routes.map((route) => (
            <HeaderLink key={route.id} route={route} />
          ))}
        </div>
        <div className={HeaderStyles.buttonContainer}>
          <button>Find Jobs</button>
        </div>
      </ul>
    </nav>
  )
}
