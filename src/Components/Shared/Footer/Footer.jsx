import { FooterData } from "./FooterData"
import FooterNav from "./FooterNav"
import FooterSocialMediaIcon from "./FooterSocialMediaIcon"
import { FooterStyle } from "./FooterStyle"

export default function Footer() {
  return (
    <footer className={FooterStyle.footerContainer}>
      <div className="footer">
        <aside>
          <p className={FooterStyle.footerTitle}>JobHub</p>
          <p>
            There are many variations of passages <br />
            of Lorem Ipsum , but the majority have
            <br /> suffered alteration in some form.
          </p>
          <FooterSocialMediaIcon />
        </aside>

        {FooterData.map((data) => (
          <FooterNav key={data.key} navData={data} />
        ))}
      </div>
      <div className={FooterStyle.footerDivider}></div>
      <div className={FooterStyle.footerReserved}>
        <p className="col-span-4">
          @2024 JobHub, All Rights Reserved by Sanzina
        </p>
        <p>Powered By JobHub</p>
      </div>
    </footer>
  )
}
