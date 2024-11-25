'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { uid, userInfo } = event;

  if (!uid || !userInfo) {
    return {
      code: 400,
      message: '用户 ID 和用户信息不能为空',
    };
  }

  try {
    // 使用 .doc(uid) 查询用户
    const user = await db.collection('biter_users').doc(uid).get();

    if (user.data.length === 0) {
      return {
        code: 404,
        message: '用户不存在，更新失败',
      };
    }

    // 更新用户信息
    const res = await db.collection('biter_users').doc(uid).update(userInfo);

    if (res.updated === 1) {
      return {
        code: 200,
        message: '用户信息更新成功',
      };
    } else {
      return {
        code: 500,
        message: '用户信息更新失败',
      };
    }
  } catch (error) {
    console.error('更新用户信息失败：', error);
    return {
      code: 500,
      message: '服务器错误，请稍后重试',
    };
  }
};
