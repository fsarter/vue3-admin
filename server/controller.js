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

exports.tableData = {
  query: async (ctx) => {
    const { rowId } = ctx.request.body;
    const data = [
      {
        id: 'Row1',
        column1: 'Value1.1',
        column2: 'Value1.2',
        column3: 'Value1.3',
      },
      {
        id: 'Row2',
        column1: 'Value2.1',
        column2: 'Value2.2',
        column3: 'Value2.3',
      },
      {
        id: 'Row3',
        column1: 'Value3.1',
        column2: 'Value3.2',
        column3: 'Value3.3',
      },
    ];
    if (rowId) {
      ctx.body = {
        code: 0,
        data: data.filter((row) => row.id === rowId),
        msg: 'ok',
      };
    } else {
      ctx.body = { code: 0, data: data, msg: 'ok' };
    }
  },
  delete: async (ctx) => {
    const { rowId } = ctx.request.body;
    if (rowId) {
      ctx.body = { code: 0, msg: `row ${rowId} delete success.` };
    } else {
      ctx.body = { code: 4002, msg: 'missing rowId.' };
    }
  },
};
