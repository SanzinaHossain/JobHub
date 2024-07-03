import React from "react"
import DynamicBanner from "../../Molecules/DynamicBanner/DynamicBanner"
import { blogData } from "./Data"
import SingleBlog from "./SingleBlog"

export default function Blog() {
  return (
    <div>
      <DynamicBanner title=" Blog Form Our Top Talents " />
      <div className="w-full bg-white flex flex-wrap justify-center items-center gap-10 p-10">
        {blogData.map((blog) => (
          <SingleBlog blog={blog} />
        ))}
      </div>
    </div>
  )
}
