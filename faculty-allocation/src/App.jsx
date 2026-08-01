import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import DashboardLayout from "./components/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Departments from "./components/Departments";
import Unauthorized from "./components/Unauthorized";
import NotFound from "./components/NotFound";
import Faculty from "./components/Faculty";
import Subjects from "./components/Subject";
import FacultyTimetable from "./components/TimeTable";
import TimetableApproval from "./components/HODApproval";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Public auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Protected app routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/timetable" element={<FacultyTimetable />} />
          <Route path="/approval" element={<TimetableApproval />} />
          {/* Additional modules (Faculty, Subjects, Timetable, Analytics, Settings)
              will be added here as each phase is built out. */}
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
