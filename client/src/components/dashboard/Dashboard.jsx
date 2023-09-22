import { Outlet } from "react-router-dom";

import { Sidebar } from "../../index.js";
const Dashboard = () => {
  return (
    <div>
      <div className="w-full md:w-[90%] mx-auto pb-5 bg-slate-100 shadow rounded relative mt-28 flex flex-col md:flex-row justify-start items-start gap-5">
      <Sidebar />
      <Outlet />
    </div>
    </div>
  );
};

export default Dashboard;
