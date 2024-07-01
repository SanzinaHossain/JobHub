import { ImCross, ImMenu } from "react-icons/im"
import { HeaderStyles } from "./HeaderStyles"

export default function HeaderIcon({ open, setOpen }) {
  return (
    <div onClick={() => setOpen(!open)} className={HeaderStyles.iconContainer}>
      {!open ? (
        <ImMenu className={HeaderStyles.iconStyle} />
      ) : (
        <ImCross className={HeaderStyles.iconStyle} />
      )}
    </div>
  )
}
