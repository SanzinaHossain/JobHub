import React from "react"
import money from "../../../assets/icons/money.png"
import calender from "../../../assets/icons/calendar.png"
import TextWithIcon from "../../Molecules/TextWithIcon/TextWithIcon"
import { Styles } from "./Styles"

export default function PrimaryDescription({ data }) {
  return (
    <>
      <h1 className={Styles.title}>Job Details</h1>
      <div className={Styles.dividerStyle}></div>
      <TextWithIcon text={`Salary: ${data.salary}`} image={money} />
      <TextWithIcon text={`Job Title: ${data.job_title}`} image={calender} />
    </>
  )
}
