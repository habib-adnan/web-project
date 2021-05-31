var express = require('express');
var router = express.Router();
const loginController = require("../controller/index");


/* GET home page. */
router.get('/', loginController.data);


router.post('/login',loginController.login);

module.exports = router;
