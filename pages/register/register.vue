<template>
  <view class="flex-col page">
    <!-- 返回按钮 -->
    <view class="back-btn" @click="goBack">返回</view>

    <image
      class="self-center image"
      src="../../static/logo.png"
    />
    <view class="flex-col self-stretch section mt-57">
      <text class="self-center text">注册</text>
      <text class="self-center font text_2">请填写以下信息</text>
      
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

      <!-- 邮箱输入框 -->
      <view class="flex-col self-stretch group">
        <text class="self-start font_2">邮箱</text>
        <input
          class="input"
          type="email"
          placeholder="请输入邮箱"
          v-model="email"
        />
        <view class="send-code-btn" :disabled="codeButtonDisabled" @click="sendVerificationCode">
          <text class="send-code-text">{{ codeButtonText }}</text>
        </view>
      </view>

      <!-- 验证码输入框 -->
      <view class="flex-col self-stretch group">
        <text class="self-start font_2">验证码</text>
        <input
          class="input"
          type="text"
          placeholder="请输入验证码"
          v-model="verificationCode"
        />
      </view>

      <!-- 密码输入框 -->
      <view class="flex-col self-stretch group">
        <text class="self-start font_2">密码</text>
        <input
          class="input"
          type="password"
          placeholder="请输入密码"
          v-model="password"
        />
      </view>

      <!-- 确认密码输入框 -->
      <view class="flex-col self-stretch group">
        <text class="self-start font_2">确认密码</text>
        <input
          class="input"
          type="password"
          placeholder="请再次输入密码"
          v-model="confirmPassword"
        />
      </view>

      <!-- 注册按钮 -->
      <view class="flex-col justify-start items-center self-stretch text-wrapper" @click="register">
        <text class="font_2 text_5">注册</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      verificationCode: "",
      codeButtonText: "发送验证码",
      codeButtonDisabled: false,
      timer: null,
    };
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    async sendVerificationCode() {
      if (!this.email) {
        uni.showToast({ title: "请输入邮箱", icon: "none" });
        return;
      }
      try {
        const res = await uniCloud.callFunction({
          name: "sendVerificationCode",
          data: { email: this.email },
        });
        if (res.result.code === 200) {
          uni.showToast({ title: "验证码已发送", icon: "success" });
          this.startCountdown();
        } else {
          uni.showToast({ title: res.result.message, icon: "none" });
        }
      } catch (error) {
        uni.showToast({ title: "验证码发送失败，请稍后重试", icon: "none" });
      }
    },
    startCountdown() {
      let count = 60;
      this.codeButtonDisabled = true;
      this.codeButtonText = `${count}s后重新发送`;
      this.timer = setInterval(() => {
        count--;
        if (count > 0) {
          this.codeButtonText = `${count}s后重新发送`;
        } else {
          clearInterval(this.timer);
          this.codeButtonText = "发送验证码";
          this.codeButtonDisabled = false;
        }
      }, 1000);
    },
    async register() {
      if (!this.username || !this.email || !this.password || !this.confirmPassword || !this.verificationCode) {
        uni.showToast({ title: "请完整填写信息", icon: "none" });
        return;
      }
      if (this.password !== this.confirmPassword) {
        uni.showToast({ title: "两次密码不一致", icon: "none" });
        return;
      }
      try {
        const res = await uniCloud.callFunction({
          name: "registerUser",
          data: {
            username: this.username,
            email: this.email,
            password: this.password,
            verificationCode: this.verificationCode,
          },
        });
        if (res.result.code === 201) {
          uni.showToast({ title: "注册成功", icon: "success" });
          setTimeout(() => uni.navigateBack(), 1000);
        } else {
          uni.showToast({ title: res.result.message, icon: "none" });
        }
      } catch (error) {
        uni.showToast({ title: "注册失败，请稍后重试", icon: "none" });
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.page {
  padding-top: 144.93rpx;
  background-color: #fafafa;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.back-btn {
  position: fixed;
  top: 20rpx;
  left: 20rpx;
  padding: 15rpx 30rpx;
  background-color: #2e3234;
  color: #fff;
  border-radius: 25rpx;
  z-index: 10; /* Ensure the button stays on top */
}
.image {
  height: 280rpx; /* Adjust the height */
  margin-top: 40rpx; /* Add margin-top to give space from the top */
}
.section {
  padding: 54.35rpx 43.48rpx 132.25rpx;
  background-color: #fff;
  border-radius: 73.37rpx 73.37rpx 0 0;
}
.group {
  margin-top: 43.48rpx;
}
.input {
  padding: 18rpx;
  font-size: 28.99rpx;
  border: 1px solid #ddd;
  border-radius: 18rpx;
  margin-top: 17rpx;
}
.send-code-btn {
  margin-top: 10rpx;
  padding: 10rpx 20rpx;
  background-color: #2e3234;
  border-radius: 18rpx;
  text-align: center;
}
.send-code-text {
  color: #fff;
}
.text-wrapper {
  margin-top: 50rpx;
  padding: 39.86rpx 0;
  background-color: #2e3234;
  border-radius: 14.49rpx;
}
.text_5 {
  color: #fff;
}
</style>
