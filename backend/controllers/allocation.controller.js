const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');
const WorkloadAllocation = require('../models/WorkloadAllocation.model');
const Faculty = require('../models/Faculty.model');

const flatten = (a) => ({
  id: a._id,
  faculty: a.faculty?.user?.name || '—',
  department: a.department?.code || '—',
  semester: a.semester,
  section: a.section,
  subject: a.subject?.name || '—',
  hoursPerWeek: a.hoursPerWeek,
  status: a.status,
  submittedOn: a.createdAt,
});

const getAllocations = asyncHandler(async (req, res) => {
  const { status = '', department = '' } = req.query;
  const query = {};
  if (status && status !== 'All') query.status = status;
  if (department) query.department = department;

  const allocations = await WorkloadAllocation.find(query)
    .populate({ path: 'faculty', populate: { path: 'user', select: 'name' } })
    .populate('subject', 'name code')
    .populate('department', 'name code')
    .sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse(200, allocations.map(flatten), 'Allocations fetched successfully'));
});

const createAllocation = asyncHandler(async (req, res) => {
  const { faculty, subject, department, section, semester, academicYear, hoursPerWeek, notes } = req.body;

  const allocation = await WorkloadAllocation.create({
    faculty,
    subject,
    department,
    section,
    semester,
    academicYear,
    hoursPerWeek,
    notes,
    allocatedBy: req.user._id,
  });

  res.status(201).json(new ApiResponse(201, allocation, 'Allocation created — pending approval'));
});

const approveAllocation = asyncHandler(async (req, res) => {
  const allocation = await WorkloadAllocation.findById(req.params.id);
  if (!allocation) throw new ApiError(404, 'Allocation not found');

  allocation.status = 'Approved';
  allocation.approvedBy = req.user._id;
  allocation.approvedAt = new Date();
  await allocation.save();

  await Faculty.findByIdAndUpdate(allocation.faculty, {
    $inc: { currentWeeklyHours: allocation.hoursPerWeek },
  });

  res.status(200).json(new ApiResponse(200, allocation, 'Allocation approved'));
});

const rejectAllocation = asyncHandler(async (req, res) => {
  const allocation = await WorkloadAllocation.findById(req.params.id);
  if (!allocation) throw new ApiError(404, 'Allocation not found');

  allocation.status = 'Rejected';
  allocation.approvedBy = req.user._id;
  allocation.approvedAt = new Date();
  if (req.body.reason) allocation.notes = req.body.reason;
  await allocation.save();

  res.status(200).json(new ApiResponse(200, allocation, 'Allocation rejected'));
});

module.exports = { getAllocations, createAllocation, approveAllocation, rejectAllocation };
