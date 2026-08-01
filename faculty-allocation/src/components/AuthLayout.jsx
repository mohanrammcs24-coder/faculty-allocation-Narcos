import { Outlet } from "react-router-dom";
import bit from "../assets/bit.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      <div className="hidden flex flex-col gap-3 lg:flex  justify-center items-center bg-primary text-white p-12">
        <img src={bit} className="w-30 rounded-full"  />
        <h1 className="text-2xl font-semibold mb-4">
          Faculty Workload Planning &amp; Allocation System
        </h1>
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
