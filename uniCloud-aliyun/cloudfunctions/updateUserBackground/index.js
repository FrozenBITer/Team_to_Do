'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {
  const { uid, backgroundImage } = event;

  if (!uid || !backgroundImage) {
    return {
      code: 400,
      message: '参数不完整，请提供用户 ID 和背景图片 URL',
    };
  }

  try {
    // 更新用户记录中的背景图片字段
    const collection = db.collection('biter_users');
    const res = await collection.doc(uid).update({
      backgroundImage,
    });

    if (res.updated === 1) {
      return {
        code: 200,
        message: '背景图片更新成功',
      };
    } else {
      return {
        code: 404,
        message: '未找到用户记录，更新失败',
      };
    }
  } catch (error) {
    console.error('更新背景图片失败：', error);
    return {
      code: 500,
      message: '服务器错误，背景图片更新失败',
    };
  }
};
