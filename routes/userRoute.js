// importing express module
const express = require('express');
//importing routes
const { infoController } = require("../controllers/userController");
//router object
const router = express.Router();

//routers
//POST || INFO OF USER
router.post('/info', infoController);
// exporting router
module.exports = router;