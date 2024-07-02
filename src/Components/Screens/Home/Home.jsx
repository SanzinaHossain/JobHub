import React from "react"
import Banner from "./Banner/Banner"
import JobCategory from "./JobCategory/JobCategory"
import FeaturedJob from "./FeaturedJob/FeaturedJob"

const Home = () => {
  return (
    <div className="bg-white w-full">
      <Banner />
      <JobCategory />
      <FeaturedJob />
    </div>
  )
}

export default Home
