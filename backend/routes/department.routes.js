const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require('../controllers/department.controller');
const validate = require('../middlewares/validate.middleware');
const { protect, authorize } = require('../middlewares/auth.middleware');
const { ROLES } = require('../config/constants');

const departmentValidator = [
  body('name').trim().notEmpty().withMessage('Department name is required'),
  body('code').trim().notEmpty().withMessage('Department code is required'),
];

router.use(protect);

router
  .route('/')
  .get(getDepartments)
  .post(authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN), departmentValidator, validate, createDepartment);

router
  .route('/:id')
  .get(getDepartmentById)
  .put(authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN), updateDepartment)
  .delete(authorize(ROLES.SUPER_ADMIN, ROLES.COLLEGE_ADMIN), deleteDepartment);

module.exports = router;
