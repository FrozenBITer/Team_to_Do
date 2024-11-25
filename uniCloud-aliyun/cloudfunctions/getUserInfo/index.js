'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { uid } = event;

  if (!uid) {
    return {
      code: 400,
      message: '用户 ID 不能为空',
    };
  }

  try {
    // 查询用户数据
    const user = await db.collection('biter_users').doc(uid).get();

    if (user.data.length === 0) {
      return {
        code: 404,
        message: '用户不存在',
      };
    }

    const userData = user.data[0];

    return {
      code: 200,
      user: {
        username: userData.username || '', // 返回用户名
        avatarUrl: userData.avatarUrl || '', // 返回头像 URL
        backgroundImage: userData.backgroundImage || '', // 返回背景图片 URL
        name: userData.name || '', // 返回姓名
        gender: userData.gender || '', // 返回性别
        phone: userData.phone || '', // 返回手机号
        school: userData.school || '', // 返回学校
        college: userData.college || '', // 返回学院
        major: userData.major || '', // 返回专业
        signature: userData.signature || '', // 返回个性签名
      },
    };
  } catch (error) {
    console.error('获取用户信息失败：', error);
    return {
      code: 500,
      message: '服务器错误，请稍后重试',
    };
  }
};

