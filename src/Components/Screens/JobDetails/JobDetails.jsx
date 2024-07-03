import { useLocation } from "react-router-dom"
import DynamicBanner from "../../Molecules/DynamicBanner/DynamicBanner"
import JobDescription from "./JobDescription"
import ContactInformation from "./ContactInformation"
import { Styles } from "./Styles"
import PrimaryDescription from "./PrimaryDescription"

export default function JobDetails() {
  const location = useLocation()
  const data = location.state?.job
  return (
    <div>
      <DynamicBanner title="Job Details" />
      <div className={Styles.jobDescriptionContainer}>
        <JobDescription data={data} />
        <div className={Styles.sectionContainer}>
          <PrimaryDescription data={data} />
          <ContactInformation data={data} />
          <button className={Styles.buttonContainer}>Apply Now</button>
        </div>
      </div>
    </div>
  )
}
