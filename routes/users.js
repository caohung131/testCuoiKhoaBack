var express = require('express');
var userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', () => {
  console.log('aa')
})

module.exports = userRouter;
