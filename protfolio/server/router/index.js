const express = require('express');
const router =express.Router();
const clientController = require('../controller/clientController');
router.use('/',clientController.client);
module.exports = router;