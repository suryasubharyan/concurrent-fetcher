const express = require('express');
const router = express.Router();

// Import both controller functions
const { aggregateData, aggregateDataPromise } = require('../controllers/aggregateController');

// Async/Await version (already working)
// Promise .then/.catch version (new endpoint)
router.get('/promise/:query', aggregateDataPromise);
router.get('/:query', aggregateData);



module.exports = router;
