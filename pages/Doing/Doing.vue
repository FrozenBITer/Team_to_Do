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
        <view class="flex-col justify-start items-center shrink-0 text-wrapper">
          <text class="font text">在进行</text>
        </view>
        <view class="shrink-0 section_3"></view>
        <text class="font text_2" @click="onClick_2">已完成</text>
      </view>
      <text class="self-start font_2 text_3">任务列表</text>
      <view class="flex-col self-stretch section_4 view_1">
        <view class="flex-row justify-between items-center self-stretch">
          <view class="flex-row items-start">
            <view class="shrink-0 section_5 view"></view>
            <text class="font_2 ml-14">任务一</text>
          </view>
          <image
            class="image_3 image_9"
            src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=ac3877bbde65ad0ca7c81fcbbd49279c.png"
            @click="onClick_3"
          />
        </view>
        <view class="flex-col justify-start items-start self-start section_6"><view class="section_7"></view></view>
      </view>
      <view class="flex-col self-stretch group_2">
        <view class="flex-row justify-between items-center section_1">
          <view class="flex-col group_3">
            <view class="shrink-0 self-start section_5 view_2"></view>
            <text class="self-start font_2 text_4">任务二</text>
            <view class="flex-col justify-start items-start self-end section_6 view_3">
              <view class="section_9"></view>
            </view>
          </view>
          <image
            class="image_3 image_1"
            src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=ac3877bbde65ad0ca7c81fcbbd49279c.png"
            @click="onClick_4"
          />
        </view>
        <view class="flex-row justify-between items-center section_8 mt-21">
          <view class="flex-row items-center">
            <view class="section_5"></view>
            <view class="flex-col items-start ml-14">
              <text class="font_2">任务三</text>
              <image
                class="image_4 mt-15"
                src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=5e7ba4c3500ed8781a88854a8ce53930.png"
              />
            </view>
          </view>
          <image
            class="image_3 image_6"
            src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=ac3877bbde65ad0ca7c81fcbbd49279c.png"
            @click="onClick_5"
          />
        </view>
        <view class="flex-row justify-between items-center section_1 mt-21">
          <view class="flex-row items-center">
            <view class="section_5"></view>
            <view class="flex-col group_4 ml-14">
              <text class="self-start font_2">任务四</text>
              <view class="flex-col justify-start items-start self-stretch section_10 mt-15">
                <view class="section_11"></view>
              </view>
            </view>
          </view>
          <image
            class="image_3 image_1"
            src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=ac3877bbde65ad0ca7c81fcbbd49279c.png"
            @click="onClick_6"
          />
        </view>
        <view class="flex-col section_4 mt-21">
          <view class="flex-row justify-between items-center self-stretch">
            <view class="flex-row items-start">
              <view class="shrink-0 section_5 view"></view>
              <text class="font_2 ml-14">任务一</text>
            </view>
            <image
              class="image_3 image_9"
              src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=ac3877bbde65ad0ca7c81fcbbd49279c.png"
              @click="onClick_7"
            />
          </view>
          <view class="flex-col justify-start items-start self-start section_6"><view class="section_12"></view></view>
        </view>
      </view>
      <view class="flex-col justify-start items-center self-end image-wrapper" @click="onClick_8">
        <image
          class="image_5"
          src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=28cf89356eaf14f0ca88080243be8051.png"
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
        uni.navigateTo({ url: '/pages/mean/mean' });
      },
      onClick_1() {
        uni.navigateTo({ url: '/pages/Preson/Preson' });
      },
      onClick_2() {
        uni.navigateTo({ url: '/pages/Done/Done' });
      },
      onClick_3() {
        uni.navigateTo({ url: '/pages/EditSolowork/EditSolowork' });
      },
      onClick_4() {
        uni.navigateTo({ url: '/pages/EditSolowork/EditSolowork' });
      },
      onClick_5() {
        uni.navigateTo({ url: '/pages/EditSolowork/EditSolowork' });
      },
      onClick_6() {
        uni.navigateTo({ url: '/pages/EditSolowork/EditSolowork' });
      },
      onClick_7() {
        uni.navigateTo({ url: '/pages/EditSolowork/EditSolowork' });
      },
      onClick_8() {
        uni.navigateTo({ url: '/pages/AddSolowork/AddSolowork' });
      },
    },
  };
</script>

<style scoped lang="css">
  .mt-21 {
    margin-top: 38.04rpx;
  }
  .mt-15 {
    margin-top: 27.17rpx;
  }
  .page {
    padding-bottom: 112.32rpx;
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
  .text-wrapper {
    margin-left: 79.71rpx;
    padding: 15.51rpx 0 15.71rpx;
    background-color: #2e3234;
    border-radius: 14.49rpx;
    width: 181.16rpx;
    height: 57.97rpx;
  }
  .font {
    font-size: 28.99rpx;
    font-family: Poppins;
    line-height: 26.85rpx;
  }
  .text {
    color: #ffffff;
    line-height: 26.76rpx;
  }
  .section_3 {
    margin-left: 88.77rpx;
    background-color: #2e323440;
    width: 3.62rpx;
    height: 38.04rpx;
  }
  .text_2 {
    margin-left: 125.89rpx;
    color: #7c7c7c;
  }
  .font_2 {
    font-size: 25.36rpx;
    font-family: Poppins;
    line-height: 23.35rpx;
    color: #343434b3;
  }
  .text_3 {
    margin-top: 67.45rpx;
    color: #343434e6;
    line-height: 23.44rpx;
  }
  .section_4 {
    padding: 38.44rpx 30.8rpx 36.23rpx;
    background-color: #ffffff;
    border-radius: 21.74rpx;
    box-shadow: 0rpx 23.55rpx 47.1rpx #2e323414;
  }
  .view_1 {
    margin-top: 44.98rpx;
  }
  .section_5 {
    background-color: #d9d9d900;
    border-radius: 50%;
    width: 38.04rpx;
    height: 38.04rpx;
    border: solid 5.43rpx #19224c;
  }
  .view {
    margin-top: 10.45rpx;
  }
  .image_3 {
    width: 7.25rpx;
    height: 36.23rpx;
  }
  .image_9 {
    margin-right: 7.26rpx;
  }
  .section_6 {
    margin-left: 63.41rpx;
    background-color: #efefef;
    border-radius: 14.49rpx;
    width: 331.52rpx;
  }
  .section_7 {
    background-color: #19224c;
    border-radius: 14.49rpx;
    width: 255.43rpx;
    height: 12.68rpx;
  }
  .group_2 {
    margin-top: 36.23rpx;
  }
  .section_1 {
    padding: 40.25rpx 30.8rpx 36.23rpx;
    background-color: #ffffff;
    border-radius: 21.74rpx;
    box-shadow: 0rpx 23.55rpx 47.1rpx #2e323414;
  }
  .group_3 {
    width: 394.93rpx;
    height: 63.01rpx;
  }
  .view_2 {
    margin-top: 12.28rpx;
  }
  .text_4 {
    margin-left: 63.93rpx;
    margin-top: -50.33rpx;
  }
  .view_3 {
    margin-left: 0;
  }
  .section_9 {
    background-color: #19224c;
    border-radius: 14.49rpx;
    width: 150.36rpx;
    height: 12.68rpx;
  }
  .image_1 {
    margin-right: 7.25rpx;
  }
  .section_8 {
    padding: 40.25rpx 30.8rpx 38.04rpx;
    background-color: #ffffff;
    border-radius: 21.74rpx;
    box-shadow: 0rpx 23.55rpx 47.1rpx #2e323414;
  }
  .image_4 {
    border-radius: 14.49rpx;
    width: 186.59rpx;
    height: 10.87rpx;
  }
  .image_6 {
    margin-right: 7.25rpx;
  }
  .group_4 {
    width: 331.52rpx;
  }
  .section_10 {
    background-color: #efefef;
    border-radius: 14.49rpx;
  }
  .section_11 {
    background-color: #19224c;
    border-radius: 14.49rpx;
    width: 304.35rpx;
    height: 12.68rpx;
  }
  .section_12 {
    background-color: #19224c;
    border-radius: 14.49rpx;
    width: 157.61rpx;
    height: 10.87rpx;
  }
  .image-wrapper {
    margin-right: 38.04rpx;
    margin-top: 132.25rpx;
    padding: 38.04rpx 0 39.86rpx;
    filter: drop-shadow(0rpx 7.25rpx 5.89rpx #00000040);
    background-color: #2e3234;
    box-shadow: 0rpx -10.87rpx 72.46rpx #2e2e2e26;
    border-radius: 50%;
    width: 123.19rpx;
  }
  .image_5 {
    width: 45.29rpx;
    height: 45.29rpx;
  }
</style>