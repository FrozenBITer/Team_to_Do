'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { uid, taskName, startTime, endTime, taskType, taskDescription } = event;

  // 参数校验
  if (!uid || !taskName || !startTime || !endTime || !taskType) {
    return {
      code: 400,
      message: '任务名称、开始时间、截止时间和任务类型不能为空',
    };
  }

  try {
    // 格式化时间
    const formatDate = (date) => {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    const formattedStartTime = formatDate(startTime);
    const formattedEndTime = formatDate(endTime);

    // 获取当前操作用户的记录
    const userRecord = await db.collection('biter_users').doc(uid).get();
    if (!userRecord.data || userRecord.data.length === 0) {
      return {
        code: 404,
        message: '操作用户不存在',
      };
    }

    const operator = userRecord.data[0];

    // 构造新任务对象
    const newTask = {
      taskName,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      taskType,
      taskDescription,
      createdAt: new Date().toISOString(),
    };

    // 将任务添加到操作用户的 task 字段
    await db.collection('biter_users').doc(uid).update({
      task: db.command.push(newTask),
    });

    return {
      code: 200,
      message: '任务添加成功',
      task: newTask,
    };
  } catch (error) {
    console.error('任务添加失败：', error);
    return {
      code: 500,
      message: '服务器错误，请稍后重试',
      errorDetail: error.message,
    };
  }
};

