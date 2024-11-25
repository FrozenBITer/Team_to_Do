<template>
  <view class="flex-col page">
    <view class="flex-row justify-between relative section">
      <image
        class="image"
        src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=bdc68411e0790d8138ba199cdc9964b4.png"
        @click="onClick"
      />
      <image
        class="image image_2"
        src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=ab2259305964b8bfc457c7c8a2c0b047.png"
        @click="onClick_1"
      />
    </view>
    <view class="flex-col group mt-22">
      <view class="flex-row items-center self-stretch section_2">
        <text class="font text" @click="onClick_2">在进行</text>
        <view class="shrink-0 section_3"></view>
        <view class="flex-col justify-start items-center shrink-0 text-wrapper">
          <text class="font text_2">已完成</text>
        </view>
      </view>
      <text class="self-start font_2 text_3">任务列表</text>
      <view class="flex-col self-stretch list">
        <view class="flex-col relative list-item mt-20" v-for="(item, index) in items" :key="index">
          <view class="flex-row items-center self-stretch group_2">
            <image
              class="image_3"
              src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=5f101320bdb68b660157da81933d54e0.png"
            />
            <text class="font_2 text_4 ml-14">作业设计</text>
          </view>
          <view class="self-start section_4"></view>
        </view>
      </view>
      <view class="self-stretch section_5"></view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        items: [null, null, null],
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/mean/mean' });
      },
      onClick_1() {
        uni.navigateTo({ url: '/pages/Preson/Preson' });
      },
      onClick_2() {
        uni.navigateTo({ url: '/pages/Doing/Doing' });
      },
    },
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #fbfbfb;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .section {
    padding: 38.04rpx 39.86rpx 36.23rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 23.55rpx 47.1rpx #2e323414;
  }
  .image {
    border-radius: 21.74rpx;
    width: 72.46rpx;
    height: 72.46rpx;
  }
  .image_2 {
    margin-right: 7.25rpx;
  }
  .group {
    padding-left: 36.23rpx;
    padding-right: 36.23rpx;
  }
  .section_2 {
    padding: 12.68rpx 0 12.68rpx;
    background-color: #ffffff;
    border-radius: 10.87rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #2e32340d;
  }
  .font {
    font-size: 28.99rpx;
    font-family: Poppins;
    line-height: 26.76rpx;
  }
  .text {
    margin-left: 129.73rpx;
    color: #7c7c7c;
  }
  .section_3 {
    margin-left: 131.14rpx;
    background-color: #2e323440;
    width: 3.62rpx;
    height: 38.04rpx;
  }
  .text-wrapper {
    margin-left: 74.28rpx;
    padding: 15.54rpx 0 15.58rpx;
    background-color: #2e3234;
    border-radius: 14.49rpx;
    width: 181.16rpx;
    height: 57.97rpx;
  }
  .text_2 {
    color: #ffffff;
    line-height: 26.85rpx;
  }
  .font_2 {
    font-size: 25.36rpx;
    font-family: Poppins;
    line-height: 23.46rpx;
    color: #343434b3;
  }
  .text_3 {
    margin-top: 67.43rpx;
    color: #343434e6;
    line-height: 23.44rpx;
  }
  .list {
    margin-top: 45rpx;
  }
  .list-item {
    padding: 0 32.61rpx 36.23rpx;
    background-color: #ffffff;
    border-radius: 21.74rpx;
    box-shadow: 0rpx 23.55rpx 47.1rpx #2e323414;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .group_2 {
    padding: 34.42rpx 0 19.93rpx;
  }
  .image_3 {
    width: 36.23rpx;
    height: 36.23rpx;
  }
  .text_4 {
    line-height: 23.33rpx;
  }
  .section_4 {
    margin-left: 61.59rpx;
    background-color: #fcdb66;
    border-radius: 14.49rpx;
    width: 331.52rpx;
    height: 12.68rpx;
  }
  .section_5 {
    margin-top: 695.65rpx;
    background-color: #ffffff;
    border-radius: 21.74rpx 21.74rpx 0 0;
    box-shadow: 0rpx 23.55rpx 47.1rpx #2e323414;
    height: 30rpx;
  }
</style>