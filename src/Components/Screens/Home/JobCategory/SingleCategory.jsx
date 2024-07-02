import { JobCategoryStyle } from "./JobCategoryStyle"

export default function SingleCategory({ job }) {
  return (
    <div key={job.id} className={JobCategoryStyle.sectionStyle}>
      <div className={JobCategoryStyle.imageStyle}>
        <img src={job.image} />
      </div>
      <h1 className={JobCategoryStyle.titleStyle}>{job.title}</h1>
      <h1 className={JobCategoryStyle.availableJobStyle}>{job.availableJob}</h1>
    </div>
  )
}
