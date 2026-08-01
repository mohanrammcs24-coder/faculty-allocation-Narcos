import { Bell, Search, LogOut } from "lucide-react";
import { ROLE_LABELS } from "../constant/roles";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // Hardcoded User
  const user = {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "ADMIN", // ROLE_LABELS la irukkura key use pannunga
  };

  // Dummy Logout
  const logout = () => {
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white border-b border-gray-100 px-6 py-3">
      <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2 w-72">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search faculty, subjects, departments..."
          className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-gray-500 hover:text-primary">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-400">{ROLE_LABELS[user.role]}</p>
          </div>

          <div className="w-9 h-9 rounded-full bg-secondary/20 text-primary flex items-center justify-center font-semibold">
            {user.name.charAt(0)}
          </div>

          <button
            onClick={logout}
            className="text-gray-400 hover:text-primary"
            title="Logout"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
