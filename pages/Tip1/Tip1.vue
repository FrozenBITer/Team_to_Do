<template>
  <view class="flex-col page">
    <text class="self-end text" @click="onClick">忽略</text>
    <text class="self-center text_2">计划你的任务</text>
    <view class="flex-col items-center self-stretch group">
      <text class="font">建立您的新任务，并同步系统日历，</text>
      <text class="font text_3">添加相关日程信息。</text>
    </view>
    <view class="flex-col self-stretch section">
      <view class="flex-row justify-center self-stretch">
        <view class="section_2"></view>
        <view class="section_3 ml-8"></view>
        <view class="section_2 ml-8"></view>
      </view>
      <image
        class="self-center image"
        src="../../static/c155f64b0e7122567f2841b8fb52789c.png"
      />
      <view class="flex-col justify-start items-center self-center image-wrapper" @click="onClick_1">
        <image
          class="image_2"
          src="../../static/ae929311a339b6f3d2b829c183541ef1.png"
        />
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },

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
          url: '/pages/Tip2/Tip2',
          animationType: 'fade-in', // 设置动画类型
          animationDuration: 300, // 设置动画持续时间（毫秒）
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
  .text {
    margin-right: 64.38rpx;
    color: #ffffffb3;
    font-size: 28.99rpx;
    font-family: Poppins;
    font-weight: 600;
    line-height: 27.25rpx;
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
  .image {
    margin-top: 117.92rpx;
    width: 603.26rpx;
    height: 425.72rpx;
  }
  .image-wrapper {
    margin-top: 90.42rpx;
    padding: 34.42rpx 0 34.42rpx;
    background-color: #2e3234;
    box-shadow: 0rpx 32.61rpx 50.72rpx #2e32342e;
    border-radius: 50%;
    width: 108.7rpx;
  }
  .image_2 {
    width: 39.86rpx;
    height: 39.86rpx;
  }
</style>