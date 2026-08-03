const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    code: { type: String, required: true, unique: true, trim: true, uppercase: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    credits: { type: Number, required: true, min: 0 },
    theoryHours: { type: Number, default: 0, min: 0 },
    labHours: { type: Number, default: 0, min: 0 },
    type: { type: String, enum: ['Mandatory', 'Elective'], default: 'Mandatory' },
    semester: { type: Number, required: true, min: 1, max: 12 },
    assignedFaculty: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

subjectSchema.index({ department: 1, semester: 1 });

subjectSchema.virtual('totalHours').get(function () {
  return this.theoryHours + this.labHours;
});
subjectSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Subject', subjectSchema);
