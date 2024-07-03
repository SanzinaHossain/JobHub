import DynamicBanner from "../../Molecules/DynamicBanner/DynamicBanner"
import { AllJobData } from "../Data"
import SingleJobList from "./SingleJobList"
import { Styles } from "./Styles"

export default function Jobs() {
  return (
    <div>
      <DynamicBanner title="Job List" />
      <div className={Styles.container}>
        {AllJobData.map((job) => (
          <SingleJobList job={job} />
        ))}
      </div>
    </div>
  )
}
