const controller = require('./controller');
const Router = require('@koa/router');
const bodyParser = require('koa-body');

const router = new Router();

router.get('/', controller.home.welcome);
router.post('/login', bodyParser(), controller.user.login);

module.exports = router;
