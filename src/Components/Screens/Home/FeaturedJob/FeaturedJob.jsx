import SectionHeader from "../../../Shared/SectionHeader/SectionHeader"
import { styles } from "./Styles"
import { sectionHeaderData } from "./Data"
import { AllJobData } from "../../Data"
import SingleJob from "./SingleJob"

export default function FeaturedJob() {
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
        <button>See All Jobs...</button>
      </div>
    </div>
  )
}
