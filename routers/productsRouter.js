//set up router
const router = require("express").Router();//return Middleware
const productsControllers = require('../controllers/productsControllers')

//routes
router.get('/',productsControllers.products);
router.post('/create',productsControllers.create);
router.delete('/:productId',productsControllers.deleteProduct);
router.post('/:productId/update_quantity',productsControllers.updateProduct);



module.exports = router;