//set up router
const router = require("express").Router();//return Middleware

//routes
router.use( '/products',require('./productsRouter.js'));

//export router MW
module.exports = router;