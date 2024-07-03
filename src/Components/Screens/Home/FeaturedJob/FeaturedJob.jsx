import SectionHeader from "../../../Shared/SectionHeader/SectionHeader"
import { styles } from "./Styles"
import { sectionHeaderData } from "./Data"
import { AllJobData } from "../../Data"
import SingleJob from "./SingleJob"
import { useNavigate } from "react-router-dom"

export default function FeaturedJob() {
  const navigate = useNavigate()
  const handleAllJob = () => {
    navigate("/jobs")
  }
  return (
    <div className={styles.container}>
      <SectionHeader
        title={sectionHeaderData.title}
        description={sectionHeaderData.description}
      />
      <div className={styles.jobListContainer}>
        {AllJobData.map((job) =>
          job.id < 5 ? <SingleJob job={job} key={job.id} /> : null
        )}
      </div>
      <div className={styles.buttonStyle}>
        <button onClick={handleAllJob}>See All Jobs...</button>
      </div>
    </div>
  )
}
