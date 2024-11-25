'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { uid, action, createdAt } = event;

  if (!uid) {
    return {
      code: 400,
      message: '用户 ID 不能为空',
    };
  }

  try {
    const user = await db.collection('biter_users').doc(uid).get();

    if (user.data.length === 0) {
      return {
        code: 404,
        message: '用户不存在',
      };
    }

    const userData = user.data[0];

    if (action === 'getTasks') {
      const tasks = userData.task || [];
      return {
        code: 200,
        user: {
          username: userData.username || '',
          avatarUrl: userData.avatarUrl || '',
          backgroundImage: userData.backgroundImage || '',
          tasks: tasks,
        },
      };
    } else if (action === 'deleteTask') {
      if (!createdAt) {
        return {
          code: 400,
          message: '任务标识不能为空',
        };
      }

      console.log('传入的 createdAt:', createdAt);
      console.log('用户的任务列表:', userData.task);

      const res = await db.collection('biter_users')
        .doc(uid)
        .update({
          task: db.command.pull({ createdAt: String(createdAt) }),
        });

      console.log('更新结果:', res);

      if (res.updated === 0) {
        return {
          code: 404,
          message: '任务不存在或删除失败',
        };
      }

      return {
        code: 200,
        message: '任务删除成功',
      };
    } else {
      return {
        code: 400,
        message: '无效的操作类型',
      };
    }
  } catch (error) {
    console.error('操作失败：', error);
    return {
      code: 500,
      message: '服务器错误，请稍后重试',
    };
  }
};
