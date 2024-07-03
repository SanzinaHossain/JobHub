import React from "react"
import JobRequirement from "../../Molecules/JobRequirement/JobRequirement"

export default function JobDescription({ data }) {
  return (
    <div className="w-[600px]">
      <JobRequirement title="Job Description :" text={data.job_description} />
      <JobRequirement
        title="Job Responsibility :"
        text={data.job_responsibility}
      />
      <JobRequirement
        title="Education Requirements :"
        text={data.educational_requirements}
      />
      <JobRequirement title="Experiences :" text={data.experiences} />
    </div>
  )
}
