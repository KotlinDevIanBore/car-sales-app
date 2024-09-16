import React, { useState,useContext } from "react";
import LineApp from "../admin/analytics/graph";
import { CarProvider } from "../admin/manage-car-context";
import RenderMostClickedCars from "../admin/analytics/most-clicked-cars";
import RenderMostSearchedCar from "../admin/analytics/most-searched-car";
import RenderSalesData from "../admin/analytics/sales-data";
import { getSalesData } from "../api";
import { CarContext } from "../admin/manage-car-context";






const Tabs = ({setCurrentTab}) => {
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-wrap justify-between">
      {[{label:"Clicks",total:40}, {label:"Searches",total:40}, {label:"Sales",total:40}, {label:"Conversion",total:40}].map((tab) => (
        <div key={tab.label} className="flex-1 text-center min-w-[120px]">
          <button onClick={()=>{setCurrentTab(tab.label) }} className="w-full lg:py-20 py-4 sm:py-4 px-2 sm:px-6 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 border border-solid border-gray-300 rounded-md text-xs sm:text-sm md:text-base">
            {tab.label}
            <div>
              Total: {tab.total}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

const SideBar = (isOpen) => {
  return (
    <div
      className={`bg-indigo-100 h-screen fixed left-0 top-0 p-4 sm:p-6 text-white transition-all duration-300 z-50 ${
        isOpen ? "w-64" : "w-0 -left-64"
      } lg:w-30 lg:left-0 shadow-lg`}
    >
      
      
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Dashboard</h2>
      <nav>
        <ul className="space-y-2 sm:space-y-4">
          {["Home", "Add Car", "Edit Car","Reports", "Settings"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className=" lg:w-30 block py-1 sm:py-2 px-2 sm:px-4 hover:bg-indigo-700 rounded-md transition-colors duration-200 text-sm sm:text-base"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab,setCurrentTab]=useState ("Clicks")

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <CarProvider>
       <button onClick={toggleSidebar} className="absolute right-2 top-2 text-2xl z-40">
        
       ☰
      </button>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">

        {sidebarOpen &&  <SideBar/> }
       

        <div className="flex-1 lg:ml-64">
          <header className="bg-white shadow-sm p-3 sm:p-4 md:p-6 flex justify-between items-center">
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-500 hover:text-gray-700 text-xl sm:text-2xl focus:outline-none"
            >
              ☰
            </button>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">Dashboard</h1>
          </header>
          <main className="p-3 sm:p-4 md:p-6 lg:p-8 overflow-x-hidden">
            <div className="bg-white shadow-md rounded-lg p-3 sm:p-4 md:p-6 lg:p-8">
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">Welcome to your dashboard</p>
              <Tabs setCurrentTab={setCurrentTab} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8 border border-solid border-gray-300">
                {[
                  { title: "Clicks", bg: "bg-indigo-50", component: <LineApp /> , display : <RenderMostClickedCars/> },
                  { title: "Searches", bg: "bg-blue-50", component: <LineApp />, display : <RenderMostSearchedCar/> },
                  { title: "Sales", bg: "bg-purple-50", component: <LineApp />, display : <RenderSalesData/> },
                  { title: "Other Metrics", bg: "bg-teal-50", component: <LineApp /> , display : <RenderMostClickedCars/>},
                ].map(({ title, bg, component,display }) => (


                  currentTab===title &&(<div key={title} className={`${bg} p-3 sm:p-4 md:p-6 rounded-lg shadow-sm w-screen`}>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 text-gray-800">{title}</h2>
                    <div>{display}</div>
                    <div className="overflow-x-auto">
                      {component}
                    </div>
                    {/* <div>{display}</div> */}
                  </div>) 
                 
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </CarProvider>
  );
};

export default Dashboard;


