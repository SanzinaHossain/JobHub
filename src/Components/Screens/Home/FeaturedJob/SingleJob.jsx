import JobType from "../../../Molecules/JobType/JobType"
import { styles } from "./Styles"
import locationImage from "../../../../assets/icons/Location.png"
import moneyImage from "../../../../assets/icons/money1.png"
import TextWithIcon from "../../../Molecules/TextWithIcon/TextWithIcon"
import JobDetailsButton from "../../../Molecules/JobDetailsButton/JobDetailsButton"

export default function SingleJob({ job }) {
  return (
    <div className={styles.singleJobContainer}>
      <img className={styles.imageStyle} src={job.logo} />
      <h1 className={styles.jobNameStyle}>{job.job_title}</h1>
      <h1 className={styles.companyNameStyle}>{job.company_name}</h1>
      <JobType job={job} />
      <div className={styles.jobSalaryContainer}>
        <TextWithIcon image={locationImage} text={job.location} />
        <TextWithIcon image={moneyImage} text={`Salary: ${job.salary}`} />
      </div>
      <JobDetailsButton id={job.id} job={job} />
    </div>
  )
}
