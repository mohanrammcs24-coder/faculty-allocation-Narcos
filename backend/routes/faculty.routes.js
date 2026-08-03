const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const {
  getFaculty,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} = require('../controllers/faculty.controller');
const validate = require('../middlewares/validate.middleware');
const { protect, authorize } = require('../middlewares/auth.middleware');
const { ROLES } = require('../config/constants');

const facultyValidator = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('department').notEmpty().withMessage('Department is required'),
  body('employeeId').trim().notEmpty().withMessage('Employee ID is required'),
  body('designation').notEmpty().withMessage('Designation is required'),
];

router.use(protect);

router
  .route('/')
  .get(getFaculty)
  .post(authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN, ROLES.HOD), facultyValidator, validate, createFaculty);

router
  .route('/:id')
  .get(getFacultyById)
  .put(authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN, ROLES.HOD), updateFaculty)
  .delete(authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN), deleteFaculty);

module.exports = router;
