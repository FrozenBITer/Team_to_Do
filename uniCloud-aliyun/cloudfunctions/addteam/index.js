'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { uid, taskName, startTime, endTime, taskType, taskDescription, groupMembers } = event;

  // 参数校验
  if (!uid || !taskName || !startTime || !endTime || !taskType || !Array.isArray(groupMembers)) {
    return {
      code: 400,
      message: '任务名称、开始时间、截止时间、任务类型和群成员不能为空',
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


    // 构造新任务对象
    const newTask = {
      taskName,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      taskType,
      taskDescription,
      groupMembers,
      createdAt: new Date().toISOString(),
    };

    // 将任务分发到群成员
    for (const member of groupMembers) {
      const targetUserRecord = await db.collection('biter_users').where({ username: member }).get();

      if (targetUserRecord.data && targetUserRecord.data.length > 0) {
        const targetUserId = targetUserRecord.data[0]._id;

        // 将任务写入目标用户的 task 字段
        await db.collection('biter_users').doc(targetUserId).update({
          task: db.command.push(newTask),
        });
      } else {
        console.warn(`未找到用户名为 ${member} 的用户，跳过该成员任务同步。`);
      }
    }

    return {
      code: 200,
      message: '团队任务添加成功，并同步到所有成员',
      task: newTask,
    };
  } catch (error) {
    console.error('团队任务添加失败：', error);
    return {
      code: 500,
      message: '服务器错误，请稍后重试',
      errorDetail: error.message,
    };
  }
};
