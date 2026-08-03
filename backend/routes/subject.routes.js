const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const {
  getSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
} = require('../controllers/subject.controller');
const validate = require('../middlewares/validate.middleware');
const { protect, authorize } = require('../middlewares/auth.middleware');
const { ROLES } = require('../config/constants');

const subjectValidator = [
  body('name').trim().notEmpty().withMessage('Subject name is required'),
  body('code').trim().notEmpty().withMessage('Subject code is required'),
  body('department').notEmpty().withMessage('Department is required'),
  body('credits').isNumeric().withMessage('Credits must be a number'),
  body('semester').isInt({ min: 1, max: 12 }).withMessage('Semester must be between 1 and 12'),
];

router.use(protect);

router
  .route('/')
  .get(getSubjects)
  .post(authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN, ROLES.HOD), subjectValidator, validate, createSubject);

router
  .route('/:id')
  .get(getSubjectById)
  .put(authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN, ROLES.HOD), updateSubject)
  .delete(authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN), deleteSubject);

module.exports = router;
