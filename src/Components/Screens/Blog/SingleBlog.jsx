import { useNavigate } from "react-router-dom"

export default function SingleBlog({ blog }) {
  const navigate = useNavigate()
  const handleBlog = (id, blog) => {
    navigate(`/blogDetails/${id}`, { state: { blog } })
  }
  return (
    <div className="w-[600px]   rounded-lg">
      <img src={blog.image} />
      <h1 className="text-black text-xl mt-3">
        <strong>Featured - </strong> {blog.date}
      </h1>
      <h1 className="text-black text-3xl mt-3">{blog.title} </h1>
      <button
        onClick={() => handleBlog(blog.id, blog)}
        className="text-purple-900 mt-3 text-xl"
      >
        Continue Reading ....
      </button>
    </div>
  )
}
