import { Outlet } from "react-router-dom"
import Home from "./Components/Screens/Home/Home"
import Footer from "./Components/Shared/Footer/Footer"
import Header from "./Components/Shared/Header/Header"

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
