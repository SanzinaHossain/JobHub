import BannerImage from "./BannerImage"
import { BannerStyles } from "./BannerStyles"
import BannerText from "./BannerText"

export default function Banner() {
  return (
    <div className={BannerStyles.bannerContainer}>
      <BannerText />
      <BannerImage />
    </div>
  )
}
