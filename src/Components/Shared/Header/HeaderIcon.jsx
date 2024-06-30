import { ImCross, ImMenu } from "react-icons/im"

export default function HeaderIcon({ open, setOpen }) {
  return (
    <div onClick={() => setOpen(!open)} className="md:hidden lg:hidden">
      {!open ? (
        <ImMenu className="text-3xl text-[#570987]" />
      ) : (
        <ImCross className="text-3xl text-[#570987]" />
      )}
    </div>
  )
}
