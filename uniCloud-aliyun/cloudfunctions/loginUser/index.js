'use strict';
const bcrypt = require('bcryptjs');
const db = uniCloud.database();

exports.main = async (event, context) => {
  const { username, password } = event;

  // 参数校验
  if (!username || !password) {
    return {
      code: 400,
      message: "用户名或密码不能为空",
    };
  }

  try {
    // 查询用户是否存在
    const userCheck = await db.collection('biter_users').where({ username }).get();
    if (userCheck.data.length === 0) {
      return {
        code: 404,
        message: "用户不存在",
      };
    }

    const user = userCheck.data[0];

    // 比较密码
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return {
        code: 401,
        message: "密码错误",
      };
    }

    // 登录成功，返回用户信息和 uid
    return {
      code: 200,
      message: "登录成功",
      user: {
        uid: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
      },
    };
  } catch (error) {
    console.error('登录失败：', error);
    return {
      code: 500,
      message: "服务器错误，请稍后重试",
    };
  }
};