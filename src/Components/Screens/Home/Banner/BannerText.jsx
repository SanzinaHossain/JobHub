import { BannerStyles } from "./BannerStyles"

export default function BannerText() {
  return (
    <div className={BannerStyles.bannerTextContainer}>
      <p className={BannerStyles.bannerFirstText}>One Step Closer To Your</p>
      <p className={BannerStyles.bannerSecondText}>Dream Job</p>
      <p className={BannerStyles.bannerThirdText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi
        sit explicabo obcaecati doloremque voluptate deleniti maiores soluta vel
        saepe, ad facere assumenda quae quis nemo hic. Eveniet, consectetur
        sapiente.
      </p>
      <button className={BannerStyles.bannerButton}>Search Job</button>
    </div>
  )
}
