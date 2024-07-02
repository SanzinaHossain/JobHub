import { SectionHeaderStyle } from "./SectionHeaderStyle"

export default function SectionHeader({ title, description }) {
  return (
    <>
      <h1 className={SectionHeaderStyle.titleStyle}>{title}</h1>
      <p className={SectionHeaderStyle.descriptionStyle}>{description}</p>
    </>
  )
}
