const express = require('express');
const router = express.Router();

const {
  getAllocations,
  createAllocation,
  approveAllocation,
  rejectAllocation,
} = require('../controllers/allocation.controller');
const { protect, authorize } = require('../middlewares/auth.middleware');
const { ROLES } = require('../config/constants');

router.use(protect);

router
  .route('/')
  .get(getAllocations)
  .post(authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN, ROLES.HOD, ROLES.TIMETABLE_COORDINATOR), createAllocation);

router.put('/:id/approve', authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN, ROLES.HOD), approveAllocation);
router.put('/:id/reject', authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN, ROLES.HOD), rejectAllocation);

module.exports = router;
