import React from "react"
import { Styles } from "./Styles"

export default function JobType({ job }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.typeStyle}>{job.remote_or_onsite}</div>
      <div className={Styles.typeStyle}>{job.job_type}</div>
    </div>
  )
}
