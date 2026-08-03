const ROLES = Object.freeze({
  SUPER_ADMIN: 'super_admin',
  COLLEGE_ADMIN: 'college_admin',
  HOD: 'hod',
  FACULTY: 'faculty',
  TIMETABLE_COORDINATOR: 'timetable_coordinator',
  VIEWER: 'viewer',
});

const ALL_ROLES = Object.values(ROLES);

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

module.exports = { ROLES, ALL_ROLES, DAYS };
