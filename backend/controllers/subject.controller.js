const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');
const Subject = require('../models/Subject.model');

const getSubjects = asyncHandler(async (req, res) => {
  const { page = 1, limit = 100, department = '', semester = '' } = req.query;
  const query = {};
  if (department) query.department = department;
  if (semester) query.semester = semester;

  const subjects = await Subject.find(query)
    .populate('department', 'name code')
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ semester: 1, name: 1 });

  const total = await Subject.countDocuments(query);

  res.status(200).json(
    new ApiResponse(200, subjects, 'Subjects fetched successfully', {
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
    })
  );
});

const getSubjectById = asyncHandler(async (req, res) => {
  const subject = await Subject.findById(req.params.id).populate('department', 'name code');
  if (!subject) throw new ApiError(404, 'Subject not found');
  res.status(200).json(new ApiResponse(200, subject));
});

const createSubject = asyncHandler(async (req, res) => {
  const subject = await Subject.create(req.body);
  const populated = await Subject.findById(subject._id).populate('department', 'name code');
  res.status(201).json(new ApiResponse(201, populated, 'Subject created successfully'));
});

const updateSubject = asyncHandler(async (req, res) => {
  const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).populate('department', 'name code');
  if (!subject) throw new ApiError(404, 'Subject not found');
  res.status(200).json(new ApiResponse(200, subject, 'Subject updated successfully'));
});

const deleteSubject = asyncHandler(async (req, res) => {
  const subject = await Subject.findByIdAndDelete(req.params.id);
  if (!subject) throw new ApiError(404, 'Subject not found');
  res.status(200).json(new ApiResponse(200, null, 'Subject deleted successfully'));
});

module.exports = { getSubjects, getSubjectById, createSubject, updateSubject, deleteSubject };
