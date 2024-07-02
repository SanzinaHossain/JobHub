import SectionHeader from "../../../Shared/SectionHeader/SectionHeader"
import { JobCategoryData, JobCategoryHeaderData } from "./Data"
import { JobCategoryStyle } from "./JobCategoryStyle"
import SingleCategory from "./SingleCategory"

export default function JobCategory() {
  return (
    <div className={JobCategoryStyle.container}>
      {/* Section Header */}

      <SectionHeader
        title={JobCategoryHeaderData.title}
        description={JobCategoryHeaderData.description}
      />
      {/* Single Job Category */}

      <div className={JobCategoryStyle.singleJobCategoryContainer}>
        {JobCategoryData.map((job) => (
          <SingleCategory job={job} />
        ))}
      </div>
    </div>
  )
}
