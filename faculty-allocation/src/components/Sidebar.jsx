import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  BookOpen,
  CalendarClock,
} from "lucide-react";
import bit from "../assets/bit.png";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/departments", label: "Departments", icon: Building2 },
  { to: "/faculty", label: "Faculty", icon: Users },
  { to: "/subjects", label: "Subjects", icon: BookOpen },
  { to: "/timetable", label: "Timetable", icon: CalendarClock },
  { to: "/approval", label: "TimetableApproval", icon: CalendarClock },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen bg-white border-r border-gray-100 sticky top-0 px-4 py-6">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-semibold">
          <img src={bit} size={12} />
        </div>
        <span className="font-semibold text-gray-800">FWPS</span>
      </div>

      <nav className="flex-1 space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
