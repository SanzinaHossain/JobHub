import { useNavigate } from "react-router-dom"
import { Styles } from "./Styles"

export default function JobDetailsButton({ id, job }) {
  const navigate = useNavigate()
  const handleButton = (id, job) => {
    navigate(`/jobDetails/${id}`, { state: { job } })
  }
  return (
    <button onClick={() => handleButton(id, job)} className={Styles.container}>
      View Details
    </button>
  )
}
