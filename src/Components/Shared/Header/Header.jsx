import React, { useState } from "react"
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
        <div className="lg:visible md:visible invisible">
          <h1 className="text-[#570987] text-3xl">JobHub</h1>
        </div>
        <div className="flex">
          {routes.map((route) => (
            <HeaderLink key={route.id} route={route} />
          ))}
        </div>
        <div className=" lg:visible md:visible invisible border-2 border-[#570987] text-black p-1 px-4 hover:bg-[#570987] rounded-lg hover:text-white">
          <button>Find Jobs</button>
        </div>
      </ul>
    </nav>
  )
}
