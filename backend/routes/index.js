const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routes');
const departmentRoutes = require('./department.routes');
const facultyRoutes = require('./faculty.routes');
const subjectRoutes = require('./subject.routes');
const dashboardRoutes = require('./dashboard.routes');
const allocationRoutes = require('./allocation.routes');
const timetableRoutes = require('./timetable.routes');

router.use('/auth', authRoutes);
router.use('/departments', departmentRoutes);
router.use('/faculty', facultyRoutes);
router.use('/subjects', subjectRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/allocations', allocationRoutes);
router.use('/timetable', timetableRoutes);

module.exports = router;
