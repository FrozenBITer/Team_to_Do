<template>
  <view class="flex-col page">
    <!-- 退出按钮 -->
    <view class="back-btn" @click="goBack">退出</view>

    <!-- 注册按钮 -->
    <view class="register-btn" @click="goToRegister">注册</view>

    <image
      class="self-center image"
      src="../../static/logo.png"
    />
    <view class="flex-col self-stretch section mt-57">
      <text class="self-center text">登录</text>
      <text class="self-center font text_2">请输入账号信息</text>
      
      <!-- 用户名输入框 -->
      <view class="flex-col self-stretch group">
        <text class="self-start font_2 text_3">用户名</text>
        <input
          class="input"
          type="text"
          placeholder="请输入用户名"
          v-model="username"
        />
      </view>
      
      <!-- 密码输入框 -->
      <view class="flex-col self-stretch group">
        <text class="self-start font_2">密码</text>
        <view class="input-wrapper">
          <input
            class="input password-input"
            :type="showPassword ? 'text' : 'password'"
            placeholder="请输入密码"
            v-model="password"
          />
          <text
            class="eye-icon"
            @click="togglePasswordVisibility"
          >
            {{ showPassword ? '👁️' : '🙈' }}
          </text>
        </view>
      </view>
      
      <!-- 登录按钮 -->
      <view class="flex-col justify-start items-center self-stretch text-wrapper" @click="login">
        <text class="font_2 text_5">登录</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      showPassword: false, // 控制密码显示状态
    };
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    goToRegister() {
      uni.navigateTo({ url: "/pages/register/register" });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async login() {
      if (!this.username || !this.password) {
        uni.showToast({
          title: "用户名或密码不能为空",
          icon: "none",
        });
        return;
      }

      try {
        const res = await uniCloud.callFunction({
          name: "loginUser",
          data: { username: this.username, password: this.password },
        });

        if (res.result.code === 200) {
          uni.setStorageSync("uid", res.result.user.uid);
          console.log("登录成功，保存的 uid:", res.result.user.uid);

          uni.showToast({ title: "登录成功", icon: "success" });
          setTimeout(() => {
            uni.switchTab({ url: "/pages/mean/mean" });
          }, 1000);
        } else if (res.result.code === 404) {
          uni.showToast({ title: "用户不存在", icon: "none" });
          this.username = "";
          this.password = "";
        } else if (res.result.code === 401) {
          uni.showToast({ title: "密码错误，请重新输入", icon: "none" });
          this.password = "";
        }
      } catch (error) {
        console.error("登录请求失败：", error);
        uni.showToast({ title: "服务器错误，请稍后重试", icon: "none" });
      }
    },
  },
};
</script>

<style scoped lang="css">
.page {
  padding-top: 144.93rpx;
  background-color: #fafafa;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  position: relative;
}

.back-btn,
.register-btn {
  position: fixed;
  top: 20rpx;
  padding: 15rpx 30rpx;
  background-color: #2e3234;
  color: #ffffff;
  border-radius: 25rpx;
  font-size: 30rpx;
  font-family: Poppins;
  text-align: center;
  z-index: 10;
  box-shadow: 0rpx 10rpx 20rpx rgba(0, 0, 0, 0.2);
}

.back-btn {
  left: 20rpx;
}

.register-btn {
  right: 20rpx;
}

.image {
  height: 349.64rpx;
}

.section {
  padding: 54.35rpx 43.48rpx 132.25rpx;
  background-color: #ffffff;
  border-radius: 73.37rpx 73.37rpx 0rpx 0rpx;
}

.text {
  color: #343434;
  font-size: 57.97rpx;
  font-family: Poppins;
  font-weight: 600;
  line-height: 54.55rpx;
}

.font {
  font-size: 25.36rpx;
  font-family: Poppins;
  line-height: 17.9rpx;
  color: #c1c1c1;
}

.text_2 {
  margin-top: 47.1rpx;
  color: #343434b3;
  line-height: 23.73rpx;
}

.group {
  margin-top: 43.48rpx;
}

.font_2 {
  font-size: 28.99rpx;
  font-family: Poppins;
  line-height: 26.67rpx;
  color: #343434b3;
}

.input {
  padding: 18rpx;
  font-size: 28.99rpx;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 18rpx;
  margin-top: 17rpx;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.password-input {
  width: calc(100% - 30rpx);
}

.eye-icon {
  position: absolute;
  right: 15rpx;
  top: 50%;
  transform: translateY(-50%);
  font-size: 28rpx;
  cursor: pointer;
}

.text-wrapper {
  margin-top: 50rpx;
  padding: 39.86rpx 0;
  background-color: #2e3234;
  border-radius: 14.49rpx;
  box-shadow: 0rpx 32.61rpx 50.72rpx #0000001a;
}

.text_5 {
  color: #fefefe;
  line-height: 26.56rpx;
}
</style>
