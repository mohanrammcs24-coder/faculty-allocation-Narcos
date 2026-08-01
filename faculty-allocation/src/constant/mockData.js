// Hardcoded demo data — lets the frontend run completely standalone,
// with no backend/database required. Swap authService.js and the
// page-level fetches back to real API calls (see services/api.js)
// once the backend is connected.

export const MOCK_USERS = [
  {
    _id: "u1",
    name: "Dr. Arvind Menon",
    email: "admin@fwps.edu",
    password: "Admin@123",
    role: "super_admin",
    avatar: { url: "" },
  },
  {
    _id: "u2",
    name: "Dr. Priya Sharma",
    email: "hod@fwps.edu",
    password: "Hod@1234",
    role: "hod",
    department: "d1",
    avatar: { url: "" },
  },
  {
    _id: "u3",
    name: "Rahul Verma",
    email: "faculty@fwps.edu",
    password: "Faculty@123",
    role: "faculty",
    department: "d1",
    avatar: { url: "" },
  },
];

export const MOCK_DEPARTMENTS = [
  {
    _id: "d1",
    name: "Computer Science & Engineering",
    code: "CSE",
    hod: { name: "Dr. Priya Sharma" },
    isActive: true,
  },
  {
    _id: "d2",
    name: "Electronics & Communication",
    code: "ECE",
    hod: { name: "Dr. Kavita Rao" },
    isActive: true,
  },
  {
    _id: "d3",
    name: "Mechanical Engineering",
    code: "MECH",
    hod: { name: "Dr. Sanjay Iyer" },
    isActive: true,
  },
  {
    _id: "d4",
    name: "Civil Engineering",
    code: "CIVIL",
    hod: { name: "Dr. Neha Kulkarni" },
    isActive: true,
  },
  {
    _id: "d5",
    name: "Information Technology",
    code: "IT",
    hod: null,
    isActive: false,
  },
];

export const MOCK_STATS = {
  totalFaculty: 128,
  departments: 12,
  pendingAllocations: 9,
  activeSubjects: 86,
};

export const MOCK_FACULTY = [
  {
    _id: "f1",
    name: "Rahul Verma",
    designation: "Assistant Professor",
    department: "CSE",
    maxWeeklyHours: 18,
    currentWeeklyHours: 14,
  },
  {
    _id: "f2",
    name: "Dr. Priya Sharma",
    designation: "Professor",
    department: "CSE",
    maxWeeklyHours: 16,
    currentWeeklyHours: 16,
  },
  {
    _id: "f3",
    name: "Kavita Rao",
    designation: "Associate Professor",
    department: "ECE",
    maxWeeklyHours: 18,
    currentWeeklyHours: 10,
  },
  {
    _id: "f4",
    name: "Sanjay Iyer",
    designation: "Professor",
    department: "MECH",
    maxWeeklyHours: 16,
    currentWeeklyHours: 12,
  },
];
