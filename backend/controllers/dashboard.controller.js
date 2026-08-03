const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const Faculty = require('../models/Faculty.model');
const Department = require('../models/Department.model');
const Subject = require('../models/Subject.model');
const WorkloadAllocation = require('../models/WorkloadAllocation.model');

const getStats = asyncHandler(async (req, res) => {
  const [totalFaculty, totalDepartments, totalSubjects, pendingAllocations, facultyList] =
    await Promise.all([
      Faculty.countDocuments({ isActive: true }),
      Department.countDocuments({ isActive: true }),
      Subject.countDocuments({ isActive: true }),
      WorkloadAllocation.countDocuments({ status: 'Pending' }),
      Faculty.find({ isActive: true }, 'maxWeeklyHours currentWeeklyHours'),
    ]);

  const totalMax = facultyList.reduce((sum, f) => sum + (f.maxWeeklyHours || 0), 0);
  const totalCurrent = facultyList.reduce((sum, f) => sum + (f.currentWeeklyHours || 0), 0);
  const facultyUtilization = totalMax ? Math.round((totalCurrent / totalMax) * 100) : 0;

  res.status(200).json(
    new ApiResponse(200, {
      totalFaculty,
      departments: totalDepartments,
      subjects: totalSubjects,
      facultyUtilization,
      pendingAllocation: pendingAllocations,
      workloadHours: totalCurrent,
    })
  );
});

const getTopFacultyWorkload = asyncHandler(async (req, res) => {
  const faculty = await Faculty.find({ isActive: true })
    .populate('user', 'name')
    .populate('department', 'code')
    .sort({ currentWeeklyHours: -1 })
    .limit(10);

  const rows = faculty.map((f) => ({
    name: f.user?.name || '—',
    department: f.department?.code || '—',
    hours: `${f.currentWeeklyHours} / ${f.maxWeeklyHours}`,
    status:
      f.currentWeeklyHours >= f.maxWeeklyHours
        ? 'Full'
        : f.currentWeeklyHours >= f.maxWeeklyHours * 0.85
          ? 'High'
          : 'Normal',
  }));

  res.status(200).json(new ApiResponse(200, rows));
});

module.exports = { getStats, getTopFacultyWorkload };
