import React from "react"
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader"
import GoogleImage from "../../../../assets/logo/google.png"
import TextWithIcon from "../../../Molecules/TextWithIcon/TextWithIcon"
import locationImage from "../../../../assets/icons/Location.png"
import moneyImage from "../../../../assets/icons/money1.png"
import { styles } from "./Styles"
import { sectionHeaderData } from "./Data"
import { AllJobData } from "../../Data"
export default function FeaturedJob() {
  return (
    <div className={styles.container}>
      <SectionHeader
        title={sectionHeaderData.title}
        description={sectionHeaderData.description}
      />
      <div className="flex flex-wrap justify-center items-center py-10 gap-3">
        {AllJobData.map((job) => (
          <div className="border-2 border-fuchsia-100 rounded-lg  w-[500px] h-[320px] p-5">
            <img className="h-8" src={job.logo} />
            <h1 className="text-black font-bold text-xl mt-3">
              {job.job_title}
            </h1>
            <h1 className="text-xl text-gray-600 mt-3">{job.company_name}</h1>
            <div className="flex gap-x-5 mt-3">
              <div className="border-2 border-purple-400 py-2 px-4 justify-center items-center rounded-md text-gray-500">
                {job.remote_or_onsite}
              </div>
              <div className="border-2 border-purple-400 py-2  px-4 justify-center items-center rounded-md text-gray-500">
                {job.job_type}
              </div>
            </div>
            <div className="flex gap-x-5 mt-3">
              <TextWithIcon image={locationImage} text="Dhaka, Bangladesh" />
              <TextWithIcon image={moneyImage} text="Salary: 100K-150K" />
            </div>
            <button className="border-2 p-2 rounded-lg bg-purple-300 text-black mt-3">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
