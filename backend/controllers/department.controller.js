const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');
const Department = require('../models/Department.model');

const getDepartments = asyncHandler(async (req, res) => {
  const { page = 1, limit = 50, search = '' } = req.query;
  const query = search ? { name: { $regex: search, $options: 'i' } } : {};

  const departments = await Department.find(query)
    .populate('hod', 'name email')
    .sort({ name: 1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Department.countDocuments(query);

  res.status(200).json(
    new ApiResponse(200, departments, 'Departments fetched successfully', {
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
    })
  );
});

const getDepartmentById = asyncHandler(async (req, res) => {
  const department = await Department.findById(req.params.id).populate('hod', 'name email');
  if (!department) throw new ApiError(404, 'Department not found');
  res.status(200).json(new ApiResponse(200, department));
});

const createDepartment = asyncHandler(async (req, res) => {
  const department = await Department.create(req.body);
  const populated = await Department.findById(department._id).populate('hod', 'name email');
  res.status(201).json(new ApiResponse(201, populated, 'Department created successfully'));
});

const updateDepartment = asyncHandler(async (req, res) => {
  const department = await Department.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).populate('hod', 'name email');
  if (!department) throw new ApiError(404, 'Department not found');
  res.status(200).json(new ApiResponse(200, department, 'Department updated successfully'));
});

const deleteDepartment = asyncHandler(async (req, res) => {
  const department = await Department.findByIdAndDelete(req.params.id);
  if (!department) throw new ApiError(404, 'Department not found');
  res.status(200).json(new ApiResponse(200, null, 'Department deleted successfully'));
});

module.exports = {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
