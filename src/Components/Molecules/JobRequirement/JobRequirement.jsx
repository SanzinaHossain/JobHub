import React from "react"
import { Styles } from "./Styles"

export default function JobRequirement({ title, text }) {
  return (
    <h1 className={Styles.container}>
      <span className={Styles.text}>{title}</span> {text}
    </h1>
  )
}
