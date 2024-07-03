import React from "react"
import DynamicBanner from "../../Molecules/DynamicBanner/DynamicBanner"
import { blogData } from "./Data"
import SingleBlog from "./SingleBlog"
import { Styles } from "./Styles"

export default function Blog() {
  return (
    <div>
      <DynamicBanner title="Blog Form Our Top Talents " />
      <div className={Styles.container}>
        {blogData.map((blog) => (
          <SingleBlog blog={blog} />
        ))}
      </div>
    </div>
  )
}
