const express = require('express');
const router = express.Router();

const { getTimetable, createTimetableEntry } = require('../controllers/timetable.controller');
const { protect, authorize } = require('../middlewares/auth.middleware');
const { ROLES } = require('../config/constants');

router.use(protect);

router
  .route('/')
  .get(getTimetable)
  .post(authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN, ROLES.TIMETABLE_COORDINATOR), createTimetableEntry);

module.exports = router;
