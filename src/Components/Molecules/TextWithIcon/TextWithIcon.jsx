import React from "react"
import { Styles } from "./Styles"

export default function TextWithIcon({ image, text }) {
  return (
    <div className={Styles.container}>
      <img src={image} />
      <p className={Styles.textStyle}>{text}</p>
    </div>
  )
}
