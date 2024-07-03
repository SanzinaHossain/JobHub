import email from "../../../assets/icons/email.png"
import phone from "../../../assets/icons/phone.png"
import address from "../../../assets/icons/location2.png"
import TextWithIcon from "../../Molecules/TextWithIcon/TextWithIcon"
import { Styles } from "./Styles"

export default function ContactInformation({ data }) {
  return (
    <>
      <h1 className={Styles.title}>Contact Information</h1>
      <div className={Styles.dividerStyle}></div>
      <TextWithIcon
        text={`Email: ${data.contact_information.email}`}
        image={email}
      />
      <TextWithIcon
        text={`Phone No: ${data.contact_information.phone}`}
        image={phone}
      />
      <TextWithIcon
        text={`Address: ${data.contact_information.address}`}
        image={address}
      />
    </>
  )
}
