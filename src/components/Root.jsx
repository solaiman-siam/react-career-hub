import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

function Root() {
  return (
    <div>
        <Header></Header>
        <div>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Root

