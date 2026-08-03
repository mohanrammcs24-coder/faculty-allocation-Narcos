const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const Timetable = require('../models/Timetable.model');

const flatten = (t) => ({
  id: t._id,
  day: t.dayOfWeek,
  time: `${t.startTime} - ${t.endTime}`,
  subject: t.subject?.name || '—',
  semester: t.semester,
  section: t.allocationSection || '',
  room: t.room,
  faculty: t.faculty?.user?.name || '—',
});

const getTimetable = asyncHandler(async (req, res) => {
  const { faculty = '', department = '' } = req.query;
  const query = {};
  if (faculty) query.faculty = faculty;
  if (department) query.department = department;

  const entries = await Timetable.find(query)
    .populate({ path: 'faculty', populate: { path: 'user', select: 'name' } })
    .populate('subject', 'name code')
    .sort({ dayOfWeek: 1, periodIndex: 1 });

  res.status(200).json(new ApiResponse(200, entries.map(flatten), 'Timetable fetched successfully'));
});

const createTimetableEntry = asyncHandler(async (req, res) => {
  const entry = await Timetable.create(req.body);
  res.status(201).json(new ApiResponse(201, entry, 'Timetable slot created'));
});

module.exports = { getTimetable, createTimetableEntry };
