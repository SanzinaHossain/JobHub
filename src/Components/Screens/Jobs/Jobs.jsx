import DynamicBanner from "../../Molecules/DynamicBanner/DynamicBanner"
import JobDetailsButton from "../../Molecules/JobDetailsButton/JobDetailsButton"
import JobType from "../../Molecules/JobType/JobType"
import TextWithIcon from "../../Molecules/TextWithIcon/TextWithIcon"
import { AllJobData } from "../Data"
import locationImage from "../../../assets/icons/Location.png"
import moneyImage from "../../../assets/icons/money1.png"
export default function Jobs() {
  return (
    <div>
      <DynamicBanner title="Job List" />
      <div className="flex flex-col justify-center items-center w-full bg-white py-10 gap-y-10">
        {AllJobData.map((job) => (
          <div className="rounded-lg border-2 border-purple-100 lg:w-[850px] lg:h-[210px] shadow-md flex p-4 items-center justify-around flex-wrap">
            <div className="h-full w-52 bg-slate-100 flex justify-center items-center">
              <img src={job.logo} />
            </div>
            <div>
              <h1 className="text-xl text-black font-bold">{job.job_title}</h1>
              <h1 className="text-lg text-black ">{job.company_name}</h1>
              <div className="flex gap-x-5">
                <TextWithIcon image={locationImage} text={job.location} />
                <TextWithIcon
                  image={moneyImage}
                  text={`Salary: ${job.salary}`}
                />
              </div>
              <JobType job={job} />
            </div>
            <div>
              <JobDetailsButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
