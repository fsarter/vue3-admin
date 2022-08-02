const controller = require('./controller');
const Router = require('@koa/router');
const bodyParser = require('koa-body');

const router = new Router();

router.get('/', controller.home.welcome);
router.post('/login', bodyParser(), controller.user.login);
router.post('/table-data/query', bodyParser(), controller.tableData.query);
router.post('/table-data/delete', bodyParser(), controller.tableData.delete);

module.exports = router;
