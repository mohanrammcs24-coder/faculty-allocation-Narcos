const mongoose = require('mongoose');

const workloadAllocationSchema = new mongoose.Schema(
  {
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty', required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    section: { type: String, default: 'A' },
    semester: { type: Number, required: true },
    academicYear: { type: String, required: true },
    hoursPerWeek: { type: Number, required: true, min: 0 },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    allocatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    approvedAt: { type: Date },
    notes: { type: String, trim: true },
  },
  { timestamps: true }
);

workloadAllocationSchema.index({ faculty: 1, academicYear: 1, semester: 1 });
workloadAllocationSchema.index({ subject: 1 });
workloadAllocationSchema.index({ status: 1 });

module.exports = mongoose.model('WorkloadAllocation', workloadAllocationSchema);
