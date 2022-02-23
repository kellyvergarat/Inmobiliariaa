const { Router } = require("express"),
  router = Router()
router.use('/apartamento', require('../routes/apartamento.route'))
router.use('/asesor', require('../routes/asesor.route'));


module.exports = router;