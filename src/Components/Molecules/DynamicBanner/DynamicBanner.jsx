import bg1 from "../../../assets/images/bg1.png"
import bg2 from "../../../assets/images/bg2.png"
import { styles } from "./DynamicBannerStyle"

export default function DynamicBanner({ title, subTitle }) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bg1}), url(${bg2})`,
        backgroundSize: "30%, 30%",
        backgroundPosition: "left bottom, right top",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundColor: "rgb(250 245 255)",
      }}
    >
      <h1 className={styles.textStyle}>{title}</h1>
      <h1 className={styles.subTitleStyle}>{subTitle}</h1>
    </div>
  )
}
