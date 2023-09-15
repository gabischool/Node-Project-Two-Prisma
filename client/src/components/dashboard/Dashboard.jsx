import { Outlet } from "react-router-dom";

import { Sidebar } from "../../index.js";
const Dashboard = () => {
  return (
    <div className="w-[90%] relative mt-28 grid grid-cols-1 gap-5">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
