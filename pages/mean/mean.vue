<template>
  <view class="flex-col page">
    <!-- Hi, 用户名部分 -->
    <view class="flex-col items-start">
      <text class="text">Hi,</text>
      <text class="text_2 mt-12">{{ username }}</text>
    </view>
    <view class="flex-row justify-between group_4 mt-20">
      <text class="font text_3">今日日期</text>
      <view class="flex-row items-center">
        <image
          class="shrink-0 image_4"
          src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=a02113f15fb519dd46832b7a03ff560b.png"
        />
        <text class="font_2 text_4 ml-7">{{ today }}</text>
      </view>
    </view>
    <!-- 任务卡片部分 -->
    <view v-for="(task, index) in tasks" :key="index" class="task-card mt-20">
      <!-- 任务类型 -->
      <view class="task-type">
        <text class="task-type-text">{{ task.taskType || "无任务类型" }}</text>
      </view>

      <!-- 任务内容 -->
      <view class="task-content">
        <text class="task-name">{{ task.taskName || "无任务名称" }}</text>
        <view class="spacer mt-20"></view>
        <!-- 显示任务描述 -->
        <text class="task-label mt-20">任务描述：</text>
        <text class="task-description mt-10">{{ task.taskDescription || "无任务描述" }}</text>
        <view class="task-time mt-20">
          <image
            class="time-icon"
            src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=7dd3903af5c74c24213b045d3fe5b37f.png"
          />
          <text class="time-text">
            {{ task.startTime || "无起始时间" }} - {{ task.endTime || "无截止时间" }}
          </text>
        </view>
      </view>

      <!-- 删除按钮 -->
      <view class="delete-btn" @click="deleteTask(task.createdAt)">
        <text class="delete-text">Done！</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: "加载中...", // 用户名初始化
      today: "", // 当前日期
      tasks: [], // 动态任务列表
    };
  },
  onShow() {
    // 设置今日日期
    this.today = this.formatDate(new Date());

    // 每次页面显示时刷新数据
    const uid = uni.getStorageSync("uid");
    if (!uid) {
      // 用户未登录，跳转到登录页
      uni.showToast({
        title: "请先登录",
        icon: "none",
      });
      uni.navigateTo({ url: "/pages/login/login" });
    } else {
      this.fetchData(uid); // 调用刷新数据的方法
    }
  },
  methods: {
    formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    async fetchData(uid) {
      try {
        const res = await uniCloud.callFunction({
          name: "getUserInfo1",
          data: { uid, action: "getTasks" },
        });

        if (res.result.code === 200) {
          const user = res.result.user;

          // 设置用户名和任务列表
          this.username = user.username || "未知用户";
          const currentDate = new Date();

          // 筛选并排序有效任务
          const parseDate = dateStr => {
            const [year, month, day] = dateStr.split("-").map(Number);
            return new Date(year, month - 1, day);
          };

          const validTasks = (user.tasks || []).filter(task => {
            return (
              task.endTime &&
              /\d{4}-\d{2}-\d{2}/.test(task.endTime) &&
              parseDate(task.endTime) >= currentDate
            );
          });

          this.tasks = validTasks.sort((a, b) => {
            const dateA = parseDate(a.endTime);
            const dateB = parseDate(b.endTime);
            return dateA - dateB;
          });
        } else {
          uni.showToast({
            title: res.result.message || "加载用户信息失败",
            icon: "none",
          });
          this.username = "未知用户";
          this.tasks = [];
        }
      } catch (error) {
        console.error("加载用户信息失败：", error);
        uni.showToast({
          title: "服务器错误，请稍后重试",
          icon: "none",
        });
        this.username = "加载失败";
        this.tasks = [];
      }
    },

    async deleteTask(createdAt, updateTasks = true) {
      try {
        const res = await uniCloud.callFunction({
          name: "getUserInfo1",
          data: { uid: uni.getStorageSync("uid"), action: "deleteTask", createdAt },
        });

        if (res.result.code === 200) {
          if (updateTasks) {
            uni.showToast({
              title: "任务删除成功",
              icon: "success",
            });

            // 更新任务列表
            this.tasks = this.tasks.filter(task => task.createdAt !== createdAt);
          }
        } else {
          uni.showToast({
            title: res.result.message || "任务删除失败",
            icon: "none",
          });
        }
      } catch (error) {
        console.error("删除任务失败：", error);
        uni.showToast({
          title: "服务器错误，请稍后重试",
          icon: "none",
        });
      }
    },
  },
};
</script>



</script>
<style scoped lang="css">
.page {
  padding-top: 63.01rpx;
  background-color: #fafafa;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.text {
  margin-left: 3.03rpx;
  color: #343434;
  font-size: 36.23rpx;
  font-family: Poppins;
  line-height: 32.75rpx;
}
.text_2 {
  color: #343434;
  font-size: 50.72rpx;
  font-family: Poppins;
  font-weight: 700;
  line-height: 48.04rpx;
}
.group_4 {
  margin-top: 83.64rpx;
  padding-left: 11.79rpx;
  padding-right: 4.15rpx;
}
.text_3 {
  line-height: 37.83rpx;
}
.image_4 {
  width: 36.23rpx;
  height: 36.23rpx;
}
.text_4 {
  color: #34343466;
  line-height: 18.84rpx;
}

/* 新增任务卡片样式 */
.task-card {
  display: flex;
  flex-direction: column;
  padding: 20rpx;
  background-color: #ffffff;
  border-radius: 15rpx;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
  margin: 10rpx 0;
  position: relative;
}

.task-type {
  position: absolute;
  top: 10rpx;
  left: -5rpx;
  padding: 4rpx 10rpx;
  background-color: #dcdcdc;
  border-radius: 10rpx;
}

.task-type-text {
  font-size: 20rpx;
  color: #4f4f4f;
  font-family: Arial, sans-serif;
}

.task-content {
  margin-top: 40rpx;
}

.task-name {
  font-size: 32rpx;
  color: #333333;
  font-weight: bold;
}

.task-time {
  display: flex;
  align-items: center;
  margin-top: 10rpx;
}

.time-icon {
  width: 20rpx;
  height: 20rpx;
  margin-right: 8rpx;
}

.time-text {
  font-size: 24rpx;
  color: #8c8c8c;
}
.delete-btn {
  position: absolute;
  right: 10rpx;
  top: 10rpx;
  padding: 5rpx 10rpx;
  background-color: #ff4d4f;
  border-radius: 10rpx;
  cursor: pointer;
}
.task-description {
  font-size: 24rpx;
  color: #666666;
  line-height: 36rpx;
}
.task-label {
  font-size: 28rpx;
  color: #343434;
  font-weight: bold;
  line-height: 38rpx;
}

.delete-text {
  color: #ffffff;
  font-size: 20rpx;
  text-align: center;
}
</style>