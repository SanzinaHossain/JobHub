import user from "../../../../assets/images/user.png"
import { BannerStyles } from "./BannerStyles"

export default function BannerImage() {
  return (
    <div className={BannerStyles.bannerImageContainer}>
      <img src={user} className={BannerStyles.bannerImage} />
    </div>
  )
}
