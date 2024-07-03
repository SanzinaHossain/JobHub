import { useNavigate } from "react-router-dom"
import { Styles } from "./Styles"

export default function SingleBlog({ blog }) {
  const navigate = useNavigate()
  const handleBlog = (id, blog) => {
    navigate(`/blogDetails/${id}`, { state: { blog } })
  }
  return (
    <div className={Styles.singleBlogContainer}>
      <img src={blog.image} />
      <h1 className={Styles.dateStyle}>
        <strong>Featured - </strong> {blog.date}
      </h1>
      <h1 className={Styles.titleStyle}>{blog.title} </h1>
      <button
        onClick={() => handleBlog(blog.id, blog)}
        className={Styles.buttonStyle}
      >
        Continue Reading ....
      </button>
    </div>
  )
}
