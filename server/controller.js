const jwt = require('jsonwebtoken');

exports.home = {
  welcome: async (ctx) => {
    ctx.body = 'Hello Controller';
  },
};

exports.user = {
  login: async (ctx) => {
    const { username, password } = ctx.request.body;
    if (username === 'administrator' && password === 'password') {
      const token = jwt.sign(
        {
          userId: '1',
          nickName: 'Administrator',
        },
        'secret_123',
        { expiresIn: '1h' }
      );
      ctx.body = { code: 0, token, msg: 'login success' };
    } else {
      ctx.body = { code: 4001, msg: 'username or password is incorrect' };
    }
  },
};
