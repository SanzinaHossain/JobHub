import locationImage from "../../../assets/icons/Location.png"
import moneyImage from "../../../assets/icons/money1.png"
import JobDetailsButton from "../../Molecules/JobDetailsButton/JobDetailsButton"
import JobType from "../../Molecules/JobType/JobType"
import TextWithIcon from "../../Molecules/TextWithIcon/TextWithIcon"
import { Styles } from "./Styles"

export default function SingleJobList({ job }) {
  return (
    <div className={Styles.singleJobListContainer}>
      {/* .... image ... */}
      <div className={Styles.imageContainer}>
        <img src={job.logo} />
      </div>

      {/* job description  */}
      <div>
        <h1 className={Styles.titleStyle}>{job.job_title}</h1>
        <h1 className={Styles.companyNameStyle}>{job.company_name}</h1>
        <div className={Styles.locationContainer}>
          <TextWithIcon image={locationImage} text={job.location} />
          <TextWithIcon image={moneyImage} text={`Salary: ${job.salary}`} />
        </div>
        <JobType job={job} />
      </div>

      {/* details button  */}
      <div>
        <JobDetailsButton id={job.id} job={job} />
      </div>
    </div>
  )
}
