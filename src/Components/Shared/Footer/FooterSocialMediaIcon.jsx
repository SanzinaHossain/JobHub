import { FooterStyle } from "./FooterStyle"
import socialImage from "../../../assets/icons/social.png"
export default function FooterSocialMediaIcon() {
  return (
    <div className={FooterStyle.footerIconContainer}>
      <img src={socialImage} />
    </div>
  )
}
