'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { uid, avatarUrl } = event;

  if (!uid || !avatarUrl) {
    return {
      code: 400,
      message: '用户 ID 和头像 URL 不能为空',
    };
  }

  try {
    // 更新用户记录中的头像字段
    await db.collection('biter_users').doc(uid).update({
      avatarUrl,
    });

    return {
      code: 200,
      message: '头像更新成功',
    };
  } catch (error) {
    console.error('更新头像失败：', error);
    return {
      code: 500,
      message: '服务器错误，请稍后重试',
    };
  }
};


