'use strict';

const db = uniCloud.database();
const bcrypt = require('bcryptjs'); // 引入 bcryptjs 进行密码加密

exports.main = async (event, context) => {
  const { username, email, password } = event;

  // 参数校验
  if (!username || !email || !password) {
    return {
      code: 400,
      message: "用户名、邮箱或密码不能为空",
    };
  }

  try {
    // 检查用户名是否已存在
    const userCheck = await db.collection("biter_users").where({ username }).get();
    if (userCheck.data.length > 0) {
      return {
        code: 409,
        message: "用户名已存在，请选择其他用户名",
      };
    }

    // 检查邮箱是否已存在
    const emailCheck = await db.collection("biter_users").where({ email }).get();
    if (emailCheck.data.length > 0) {
      return {
        code: 409,
        message: "该邮箱已被注册，请更换邮箱",
      };
    }

    // 加密密码
    const hashedPassword = bcrypt.hashSync(password, 10);

    // 插入用户数据
    const res = await db.collection("biter_users").add({
      username,
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString(), // 添加注册时间
    });

    if (res.id) {
      return {
        code: 201,
        message: "注册成功",
      };
    } else {
      return {
        code: 500,
        message: "注册失败，请稍后重试",
      };
    }
  } catch (error) {
    console.error("注册失败：", error);
    return {
      code: 500,
      message: "服务器发生错误，请稍后重试",
    };
  }
};