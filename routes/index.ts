import express from 'express';
const extendRoute = require('./extenderRoute');
const bookRoute = require('./bookerRoute');
const router: express.Router = express.Router();

router.use('/', extendRoute);
router.use('/book', bookRoute);

module.exports = router;
