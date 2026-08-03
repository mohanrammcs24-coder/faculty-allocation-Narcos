const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    employeeId: { type: String, required: true, unique: true, trim: true },
    designation: {
      type: String,
      enum: ['Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer', 'Adjunct Faculty'],
      required: true,
    },
    qualification: { type: String, trim: true },
    experienceYears: { type: Number, default: 0, min: 0 },
    expertise: [{ type: String, trim: true }],
    maxWeeklyHours: { type: Number, default: 18, min: 0, max: 40 },
    minWeeklyHours: { type: Number, default: 6, min: 0 },
    currentWeeklyHours: { type: Number, default: 0, min: 0 },
    subjectsHandled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
    joiningDate: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

facultySchema.index({ department: 1 });

facultySchema.virtual('workloadPercentage').get(function () {
  if (!this.maxWeeklyHours) return 0;
  return Math.round((this.currentWeeklyHours / this.maxWeeklyHours) * 100);
});
facultySchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Faculty', facultySchema);
