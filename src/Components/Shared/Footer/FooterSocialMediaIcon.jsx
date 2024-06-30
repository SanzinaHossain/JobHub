import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { FooterStyle } from "./FooterStyle"

export default function FooterSocialMediaIcon() {
  return (
    <div className={FooterStyle.footerIconContainer}>
      <BsFacebook className={FooterStyle.footerIconStyle} />
      <BsTwitter className={FooterStyle.footerIconStyle} />
      <BsInstagram className={FooterStyle.footerIconStyle} />
    </div>
  )
}
