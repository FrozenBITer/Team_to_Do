<template>
  <view class="flex-col page">
    <!-- 用户头像和自定义背景部分 -->
    <view
      class="flex-col items-center header"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
      @click="selectBackgroundImage"
    >
      <image class="avatar" :src="userAvatar" @click.stop="selectImage" />
      <text class="username">{{ username }}</text>
    </view>

    <!-- 编辑个人信息 -->
    <view class="flex-col form-container">
      <!-- 个人信息标题和三点按钮 -->
      <view class="flex-row justify-between align-center section-header">
        <text class="section-title">个人信息</text>
        <view class="menu-wrapper">
          <button @click="toggleMenu" class="menu-button">⋮</button>
          <view v-if="menuVisible" class="menu-dropdown">
            <button class="logout-button" @click="logout">退出登录</button>
          </view>
        </view>
      </view>

      <form @submit.prevent="updateUserInfo">
        <!-- 表单字段 -->
        <view class="form-field" v-for="(field, index) in formFields" :key="index">
          <text class="label">{{ field.label }}</text>
          <input
            v-if="!field.isPicker"
            v-model="userInfo[field.model]"
            :placeholder="'请输入' + field.label"
            class="input"
          />
          <picker
            v-else
            mode="selector"
            :range="field.options"
            @change="(e) => handlePickerChange(field.model, e)"
          >
            <view class="picker">
              {{ userInfo[field.model] || '请选择' + field.label }}
            </view>
          </picker>
        </view>

        <!-- 保存按钮 -->
        <view class="button-container">
          <button class="save-button" formType="submit">保存信息</button>
        </view>
      </form>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: "加载中...", // 用户名
      userAvatar:  "/static/cxk.jpg", // 默认头像路径
	  backgroundImage: "/static/logo.png", // 默认背景图片路径
      userInfo: {
        name: "",
        gender: "",
        phone: "",
        school: "",
        college: "",
        major: "",
        signature: "",
      },
      formFields: [
        { label: "姓名", model: "name", isPicker: false },
        { label: "性别", model: "gender", isPicker: true, options: ["男", "女"] },
        { label: "手机号", model: "phone", isPicker: false },
        { label: "学校", model: "school", isPicker: false },
        { label: "学院", model: "college", isPicker: false },
        { label: "专业", model: "major", isPicker: false },
        { label: "个性签名", model: "signature", isPicker: false },
      ],
      menuVisible: false, // 控制菜单显示
    };
  },
  onShow() {
    const uid = uni.getStorageSync("uid");
    if (!uid) {
      uni.showToast({
        title: "请先登录",
        icon: "none",
      });
      uni.navigateTo({ url: "/pages/login/login" });
    } else {
      this.fetchUserInfo();
    }
  },
  methods: {
    async fetchUserInfo() {
      try {
        const uid = uni.getStorageSync("uid"); // 获取用户ID
        const res = await uniCloud.callFunction({
          name: "getUserInfo", // 云函数名称
          data: { uid },
        });
        if (res.result.code === 200) {
          const user = res.result.user;
          this.username = user.username; // 设置用户名
          this.userAvatar = user.avatarUrl || this.userAvatar; // 设置头像
          this.backgroundImage = user.backgroundImage || this.backgroundImage; // 设置背景图片
          this.userInfo = {
            name: user.name || "",
            gender: user.gender || "",
            phone: user.phone || "",
            school: user.school || "",
            college: user.college || "",
            major: user.major || "",
            signature: user.signature || "",
          };
        } else {
          uni.showToast({
            title: res.result.message || "加载用户信息失败",
            icon: "none",
          });
        }
      } catch (error) {
        console.error("加载用户信息失败：", error);
        uni.showToast({
          title: "服务器错误，请稍后重试",
          icon: "none",
        });
      }
    },
    async updateUserInfo() {
      try {
        const uid = uni.getStorageSync("uid");
        const res = await uniCloud.callFunction({
          name: "updateUserInfo",
          data: {
            uid,
            userInfo: this.userInfo,
          },
        });
        if (res.result.code === 200) {
          uni.showToast({
            title: "信息更新成功",
            icon: "success",
          });
        } else {
          uni.showToast({
            title: res.result.message || "信息更新失败",
            icon: "none",
          });
        }
      } catch (error) {
        console.error("更新用户信息失败：", error);
        uni.showToast({
          title: "服务器错误，请稍后重试",
          icon: "none",
        });
      }
    },
    async selectBackgroundImage() {
      uni.chooseImage({
        count: 1,
        success: async (res) => {
          const tempFilePath = res.tempFilePaths[0];
          const uid = uni.getStorageSync("uid");
          const cloudPath = `background/${uid}-${Date.now()}.jpg`;
          const uploadRes = await uniCloud.uploadFile({ filePath: tempFilePath, cloudPath });
          if (uploadRes.success) {
            this.backgroundImage = uploadRes.fileID;
            await this.updateUserBackgroundImage(uid, uploadRes.fileID);
            uni.showToast({ title: "背景图片已更新", icon: "success" });
          } else {
            uni.showToast({ title: "上传背景失败", icon: "none" });
          }
        },
      });
    },
    async selectImage() {
      uni.chooseImage({
        count: 1,
        success: async (res) => {
          const tempFilePath = res.tempFilePaths[0];
          const uid = uni.getStorageSync("uid");
          const cloudPath = `avatar/${uid}-${Date.now()}.jpg`;
          const uploadRes = await uniCloud.uploadFile({ filePath: tempFilePath, cloudPath });
          if (uploadRes.success) {
            this.userAvatar = uploadRes.fileID;
            await this.updateUserAvatar(uid, uploadRes.fileID);
            uni.showToast({ title: "头像已更新", icon: "success" });
          } else {
            uni.showToast({ title: "上传头像失败", icon: "none" });
          }
        },
      });
    },
    async updateUserAvatar(uid, avatarUrl) {
      await uniCloud.callFunction({
        name: "updateUserAvatar",
        data: { uid, avatarUrl },
      });
    },
    async updateUserBackgroundImage(uid, backgroundImage) {
      try {
        const res = await uniCloud.callFunction({
          name: "updateUserBackground",
          data: { uid, backgroundImage },
        });

        if (res.result.code === 200) {
          console.log("背景图片更新成功");
        } else {
          console.error("背景图片更新失败：", res.result.message);
        }
      } catch (error) {
        console.error("调用云函数失败：", error);
      }
    },
    handlePickerChange(model, e) {
      this.userInfo[model] = this.formFields.find(
        (field) => field.model === model
      ).options[e.detail.value];
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    logout() {
      // 清空存储的 UID
      uni.removeStorageSync("uid");
    
      // 重置页面数据
      this.username = "加载中...";
      this.userAvatar = "https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=bd3139bf1d8f466164c8b3ab6dd86e56.png";
      this.backgroundImage = "https://via.placeholder.com/800x400.png?text=上传背景图片";
	  this.tasks = []; // 清空任务列表
      this.userInfo = {
        name: "",
        gender: "",
        phone: "",
        school: "",
        college: "",
        major: "",
        signature: "",
      };
    
      // 提示用户
      uni.showToast({
        title: "已退出登录",
        icon: "success",
      });
    
      // 跳转到登录页面
      uni.navigateTo({
        url: "/pages/login/login",
      });
    },
  },
};
</script>

<style scoped>
/* 页面整体样式 */
.page {
  padding: 20rpx;
  background: #f9f9f9;
  height: 100%;
  overflow-y: auto;
}
/* 头部样式 */
.header {
  margin-bottom: 30rpx;
  background-size: cover;
  background-position: center;
  padding: 30rpx;
  border-radius: 20rpx;
  position: relative;
}
.avatar {
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 5rpx 15rpx rgba(0, 0, 0, 0.3);
  margin-top: 20rpx;
}
.username {
  margin-top: 10rpx;
  font-size: 36rpx;
  font-weight: bold;
  color: #ffffff;
}

/* 标题和菜单样式 */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-wrapper {
  position: relative;
}
.menu-button {
  font-size: 36rpx;
  background: none;
  border: none;
  color: #757575;
  cursor: pointer;
}
.menu-dropdown {
  position: absolute;
  right: 0;
  top: 40rpx;
  background: #ffffff;
  box-shadow: 0 5rpx 15rpx rgba(0, 0, 0, 0.1);
  border-radius: 10rpx;
  padding: 10rpx;
}
.logout-button {
  background: none;
  border: none;
  font-size: 28rpx;
  color: #ff5252;
  cursor: pointer;
}

/* 表单样式 */
.form-container {
  background: #ffffff;
  padding: 20rpx;
  border-radius: 15rpx;
  box-shadow: 0 5rpx 15rpx rgba(0, 0, 0, 0.1);
}
.section-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #1e88e5;
  margin-bottom: 20rpx;
}
.form-field {
  margin-bottom: 20rpx;
}
.label {
  font-size: 26rpx;
  color: #757575;
  margin-bottom: 5rpx;
}
.input {
  width: 100%;
  padding: 12rpx;
  border: 2rpx solid #bdbdbd;
  border-radius: 10rpx;
  font-size: 28rpx;
  background: #f5f5f5;
}
.picker {
  padding: 12rpx;
  border: 2rpx solid #bdbdbd;
  border-radius: 10rpx;
  font-size: 28rpx;
  background: #f5f5f5;
}

/* 按钮样式 */
.button-container {
  margin-top: 20rpx;
}
.save-button {
  width: 100%;
  padding: 15rpx;
  font-size: 28rpx;
  background: #000000;
  color: #ffffff;
  text-align: center;
  border-radius: 10rpx;
}
.save-button:active {
  background: #333333;
}
</style>
