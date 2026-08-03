const mongoose = require('mongoose');
const { DAYS } = require('../config/constants');

const timetableSchema = new mongoose.Schema(
  {
    allocation: { type: mongoose.Schema.Types.ObjectId, ref: 'WorkloadAllocation', required: true },
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty', required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    dayOfWeek: { type: String, enum: DAYS, required: true },
    periodIndex: { type: Number, required: true, min: 1, max: 10 },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    room: { type: String, trim: true },
    semester: { type: Number, required: true },
    academicYear: { type: String, required: true },
  },
  { timestamps: true }
);

timetableSchema.index({ faculty: 1, dayOfWeek: 1, periodIndex: 1 });

module.exports = mongoose.model('Timetable', timetableSchema);
