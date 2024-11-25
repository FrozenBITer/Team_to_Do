<template>
  <view class="flex-col page">
    <view class="flex-row justify-between top-bar">
      <text class="text" @click="onBack">返回</text>
      <text class="text" @click="onClick">忽略</text>
    </view>
    <text class="self-center text_2">轻松管理协作</text>
    <view class="flex-col items-center self-stretch group">
      <text class="font">分享任务并跟踪进度，</text>
      <text class="font text_3">确保团队高效运转。</text>
    </view>
    <view class="flex-col self-stretch section">
      <view class="flex-row justify-center self-stretch">
        <view class="section_2"></view>
        <view class="section_3 ml-8"></view>
        <view class="section_2 ml-8"></view>
      </view>
      <image
        class="self-center image_2"
        src="../../static/733503e4adf60c4738717733531a40eb.png"
      />
      <view class="flex-col justify-start items-center self-center image-wrapper" @click="onClick_1">
        <image
          class="image_3"
          src="../../static/ae929311a339b6f3d2b829c183541ef1.png"
        />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    onClick() {
      uni.navigateTo({
        url: '/pages/login/login',
        animationType: 'slide-in-right', // 设置动画类型
        animationDuration: 300, // 设置动画持续时间（毫秒）
      });
    },
    onClick_1() {
      uni.navigateTo({
        url: '/pages/login/login',
        animationType: 'fade-in', // 设置动画类型
        animationDuration: 300, // 设置动画持续时间（毫秒）
      });
    },
    onBack() {
      console.log('Navigating back to Tip1');
      uni.navigateBack({
        delta: 1, // 返回上一页
        animationType: 'slide-out-right', // 设置动画类型为从左到右
        animationDuration: 300, // 动画时长
        success() {
          console.log('Navigation back succeeded');
        },
        fail(err) {
          console.error('Navigation back failed:', err);
        },
      });
    },
  },
};
</script>

<style scoped lang="css">
  .page {
    padding-top: 82.21rpx;
    background-color: #2e3234;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .top-bar {
    padding: 0 64.38rpx;
    margin-bottom: 20rpx;
    align-items: center;
    height: 60rpx; /* 保证高度一致 */
  }
  .text {
    color: #ffffffb3;
    font-size: 28.99rpx;
    font-family: Poppins;
    font-weight: 600;
    line-height: 60rpx; /* 与容器高度一致，垂直居中 */
  }
  .text_2 {
    margin-top: 191.63rpx;
    color: #ffffff;
    font-size: 50.72rpx;
    font-family: Poppins;
    font-weight: 600;
    line-height: 47.74rpx;
  }
  .group {
    margin-top: 87.77rpx;
  }
  .font {
    font-size: 28.99rpx;
    font-family: Poppins;
    line-height: 52.54rpx;
    color: #ffffffcc;
  }
  .text_3 {
    margin-top: -9.24rpx;
  }
  .section {
    margin-top: 166.85rpx;
    padding: 63.41rpx 72.46rpx 103.26rpx 72.46rpx;
    background-color: #ffffff;
    border-radius: 72.46rpx 72.46rpx 0rpx 0rpx;
    box-shadow: 0rpx -68.84rpx 54.35rpx #6a6a6a0a;
  }
  .section_2 {
    background-color: #c8c9ca;
    border-radius: 36.23rpx;
    width: 14.49rpx;
    height: 14.49rpx;
  }
  .section_3 {
    background-color: #2e3234;
    border-radius: 36.23rpx;
    width: 28.99rpx;
    height: 14.49rpx;
  }
  .image_2 {
    margin-top: 117.92rpx;
    width: 596.01rpx;
    height: 402.17rpx;
  }
  .image-wrapper {
    margin-top: 90.42rpx;
    padding: 34.42rpx 0 34.42rpx;
    background-color: #2e3234;
    box-shadow: 0rpx 32.61rpx 50.72rpx #2e32342e;
    border-radius: 50%;
    width: 108.7rpx;
  }
  .image_3 {
    width: 39.86rpx;
    height: 39.86rpx;
  }
</style>
