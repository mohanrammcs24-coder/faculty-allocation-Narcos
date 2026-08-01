import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex bg-gray-50/50 min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col  ">
        <Navbar />

        <main className="flex-1 p-6 h-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
