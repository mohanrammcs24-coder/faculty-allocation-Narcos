const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');
const Faculty = require('../models/Faculty.model');
const User = require('../models/User.model');
const { ROLES } = require('../config/constants');

const getFaculty = asyncHandler(async (req, res) => {
  const { page = 1, limit = 50, department = '' } = req.query;
  const query = {};
  if (department) query.department = department;

  const faculty = await Faculty.find(query)
    .populate('user', 'name email')
    .populate('department', 'name code')
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const total = await Faculty.countDocuments(query);

  res.status(200).json(
    new ApiResponse(200, faculty, 'Faculty fetched successfully', {
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
    })
  );
});

const getFacultyById = asyncHandler(async (req, res) => {
  const faculty = await Faculty.findById(req.params.id)
    .populate('user', 'name email')
    .populate('department', 'name code')
    .populate('subjectsHandled', 'name code');
  if (!faculty) throw new ApiError(404, 'Faculty not found');
  res.status(200).json(new ApiResponse(200, faculty));
});

const createFaculty = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    department,
    employeeId,
    designation,
    qualification,
    experienceYears,
    maxWeeklyHours,
    minWeeklyHours,
  } = req.body;

  if (!name || !email) throw new ApiError(400, 'Name and email are required');

  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) throw new ApiError(409, 'A user with this email already exists');

  const tempPassword = Math.random().toString(36).slice(-10) + 'A1!';

  const user = await User.create({
    name,
    email,
    password: tempPassword,
    role: ROLES.FACULTY,
    department,
  });

  const faculty = await Faculty.create({
    user: user._id,
    department,
    employeeId,
    designation,
    qualification,
    experienceYears,
    maxWeeklyHours,
    minWeeklyHours,
  });

  const populated = await Faculty.findById(faculty._id)
    .populate('user', 'name email')
    .populate('department', 'name code');

  res.status(201).json(
    new ApiResponse(201, { ...populated.toObject(), tempPassword }, 'Faculty created successfully')
  );
});

const updateFaculty = asyncHandler(async (req, res) => {
  const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .populate('user', 'name email')
    .populate('department', 'name code');
  if (!faculty) throw new ApiError(404, 'Faculty not found');
  res.status(200).json(new ApiResponse(200, faculty, 'Faculty updated successfully'));
});

const deleteFaculty = asyncHandler(async (req, res) => {
  const faculty = await Faculty.findById(req.params.id);
  if (!faculty) throw new ApiError(404, 'Faculty not found');
  await Faculty.findByIdAndDelete(req.params.id);
  await User.findByIdAndUpdate(faculty.user, { isActive: false });
  res.status(200).json(new ApiResponse(200, null, 'Faculty removed successfully'));
});

module.exports = { getFaculty, getFacultyById, createFaculty, updateFaculty, deleteFaculty };
