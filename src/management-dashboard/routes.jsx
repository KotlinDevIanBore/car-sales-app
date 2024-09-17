
import { Outlet } from "react-router-dom"

const DashboardRouter = () =>{
    return <div>
      <Outlet/>
      <Dashboard/>
    </div>
  }

  export default DashboardRouter