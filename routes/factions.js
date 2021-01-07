const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const factionsController = require('../controllers/factions.js');
const requireRequestBody = require('../middlewares/requireRequestBody.js');

router.post(
    '/',
    requireRequestBody,
    asyncHandler(factionsController.handlePost)
  );
router.get('/', asyncHandler(factionsController.getCollection));
router.get('/:id', asyncHandler(factionsController.findOne));
router.put(
  '/:id',
  requireRequestBody,
  asyncHandler(factionsController.update)
);
router.delete('/:id', requireRequestBody, asyncHandler(factionsController.delete));

module.exports = router;
