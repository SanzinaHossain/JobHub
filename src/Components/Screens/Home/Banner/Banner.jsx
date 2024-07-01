import BannerImage from "./BannerImage"
import BannerText from "./BannerText"

export default function Banner() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full lg:px-24 px-5 justify-evenly ">
      <BannerText />
      <BannerImage />
    </div>
  )
}
