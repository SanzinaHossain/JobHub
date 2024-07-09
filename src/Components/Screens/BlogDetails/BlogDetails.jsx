import React from "react"
import DynamicBanner from "../../Molecules/DynamicBanner/DynamicBanner"
import { useLocation } from "react-router-dom"
import blog3 from "../../../assets/images/blog3.jpg"
import { Styles } from "./Styles"

export default function BlogDetails() {
  const location = useLocation()
  const blogData = location.state.blog

  return (
    <div>
      <DynamicBanner title="Blog Information" />
      <div className={Styles.container}>
        <div className="lg:w-[800px] w-auto ">
          <h1 className={Styles.dateStyle}>
            <strong>Featured - </strong> {blogData.date}
          </h1>
          <h1 className={Styles.titleStyle}>{blogData.title} </h1>
          <img className="mt-5" src={blogData.image} />
          <h1 className={Styles.textStyle}>
            Tomfoolery crikey bits and bobs brilliant bamboozled down the pub
            amongst brolly hanky panky, cack bonnet arse over tit burke bugger
            all mate bodge. cillum dolore eu fugiat pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.Suspendisse interdum consectetur libero
            id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.
          </h1>
          <h1 className={Styles.textStyle}>
            Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.
            Sit amet ris nullam eget felis. Enim praesent elementum facilisis
            leo. Ultricies leo integer.
          </h1>
          <img className="mt-5" src={blog3} />
          <h1 className={Styles.secondTitleStyle}>
            Work Harder & Gain Success
          </h1>
          <h1 className={Styles.textStyle}>
            Tomfoolery crikey bits and bobs brilliant bamboozled down the pub
            amongst brolly hanky panky, cack bonnet arse over tit burke bugger
            all mate bodge. cillum dolore eu fugiat pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.Suspendisse interdum consectetur libero
            id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.
          </h1>
        </div>
      </div>
    </div>
  )
}
