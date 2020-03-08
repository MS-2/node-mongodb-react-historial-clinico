const router = require('express-promise-router')();
const ProductController = require('../controllers/products');



router.route('/paciente')
// return and insert products
  .get(ProductController.indexProduct)
  .post(ProductController.newProduct)
  .delete(ProductController.deletePaciente)
  .put(ProductController.updatePaciente)

router.route('/pacienteunique/:id')

  .get(ProductController.getPaciente)
  .patch(ProductController.updatePaciente)

router.route('/historico')
// return and insert products
  .get(ProductController.IndexHistorico)
router.route('/lab')
  // return and insert products
  // .get(ProductController.IndexLab)
  .post(ProductController.newLab)
  
    


  module.exports = router;