const express = require('express');
const router = express.Router();
const { getStats, getTopFacultyWorkload } = require('../controllers/dashboard.controller');
const { protect } = require('../middlewares/auth.middleware');

router.use(protect);
router.get('/stats', getStats);
router.get('/top-workload', getTopFacultyWorkload);

module.exports = router;
