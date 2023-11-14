var express = require('express');
const userRouter = require('./users.js');
var router = express.Router();

router.use('/users', userRouter)

module.exports = router;
