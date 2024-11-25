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
    <view class="flex-col group mt-11">
      <view class="flex-row justify-between items-center self-center section_2">
        <text class="font text" @click="onClick_2">个人</text>
        <view class="flex-col justify-start items-center text-wrapper"><text class="font text_2">团队</text></view>
      </view>
      <view class="flex-col self-stretch section_3">
        <view class="flex-row justify-between items-center self-stretch">
          <view class="flex-row items-start">
            <view class="shrink-0 section_4 view_1"></view>
            <text class="font_2 ml-14">任务一</text>
          </view>
          <image
            class="image_3 image_4"
            src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=ac3877bbde65ad0ca7c81fcbbd49279c.png"
            @click="onClick_3"
          />
        </view>
        <view class="flex-col justify-start items-start self-start section_5 view">
          <view class="section_6"></view>
        </view>
      </view>
      <view class="flex-col self-stretch group_2">
        <view class="flex-row justify-between items-center relative section_1">
          <view class="flex-col group_3">
            <view class="shrink-0 self-start section_4 view_3"></view>
            <text class="self-start font_2 text_3">任务二</text>
            <view class="flex-col justify-start items-start self-end section_5 view_2">
              <view class="section_8"></view>
            </view>
          </view>
          <image
            class="image_3"
            src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=ac3877bbde65ad0ca7c81fcbbd49279c.png"
            @click="onClick_4"
          />
        </view>
        <view class="flex-row justify-between items-center section_7 mt-20">
          <view class="flex-row items-center">
            <view class="section_4"></view>
            <view class="flex-col items-start ml-14">
              <text class="font_2">任务三</text>
              <image
                class="image_6 mt-15"
                src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=5e7ba4c3500ed8781a88854a8ce53930.png"
              />
            </view>
          </view>
          <image
            class="image_3"
            src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=ac3877bbde65ad0ca7c81fcbbd49279c.png"
            @click="onClick_5"
          />
        </view>
      </view>
      <view class="flex-col self-stretch group_4">
        <view class="flex-col relative section_9">
          <view class="flex-col justify-start items-start self-stretch group_1">
            <view class="flex-row items-center">
              <image
                class="shrink-0 image_7"
                src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=5f101320bdb68b660157da81933d54e0.png"
              />
              <text class="font_2 text_4 ml-14">作业设计</text>
            </view>
          </view>
          <view class="self-start section_10"></view>
        </view>
        <view class="flex-col section_9 mt-20">
          <view class="flex-col justify-start items-start self-stretch group_1">
            <view class="flex-row items-center">
              <image
                class="shrink-0 image_7"
                src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=5f101320bdb68b660157da81933d54e0.png"
              />
              <text class="font_2 text_5 ml-15">头脑风暴</text>
            </view>
          </view>
          <view class="self-start section_10"></view>
        </view>
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
        uni.navigateTo({ url: '/pages/Solowork/Solowork' });
      },
      onClick_3() {
        uni.navigateTo({ url: '/pages/EditTeamwork/EditTeamwork' });
      },
      onClick_4() {
        uni.navigateTo({ url: '/pages/EditTeamwork/EditTeamwork' });
      },
      onClick_5() {
        uni.navigateTo({ url: '/pages/EditTeamwork/EditTeamwork' });
      },
    },
  };
</script>

<style scoped lang="css">
  .mt-11 {
    margin-top: 19.93rpx;
  }
  .mt-15 {
    margin-top: 27.17rpx;
  }
  .ml-15 {
    margin-left: 27.17rpx;
  }
  .page {
    padding-bottom: 449.28rpx;
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
    padding: 12.68rpx 86.96rpx 12.68rpx 105.56rpx;
    background-color: #ffffff;
    border-radius: 10.87rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #2e32340d;
    width: 501.81rpx;
  }
  .font {
    font-size: 28.99rpx;
    font-family: Poppins;
    line-height: 26.61rpx;
  }
  .text {
    color: #7c7c7c;
  }
  .text-wrapper {
    padding: 15.54rpx 0 15.72rpx;
    background-color: #fcdb66;
    border-radius: 14.49rpx;
    width: 146.74rpx;
    height: 57.97rpx;
  }
  .text_2 {
    color: #000000;
    line-height: 26.7rpx;
  }
  .section_3 {
    margin-top: 56.16rpx;
    padding: 38.44rpx 30.8rpx 36.23rpx;
    background-color: #ffffff;
    border-radius: 21.74rpx;
    box-shadow: 0rpx 23.55rpx 47.1rpx #2e323414;
  }
  .section_4 {
    background-color: #d9d9d900;
    border-radius: 50%;
    width: 38.04rpx;
    height: 38.04rpx;
    border: solid 5.43rpx #19224c;
  }
  .view_1 {
    margin-top: 10.45rpx;
  }
  .font_2 {
    font-size: 25.36rpx;
    font-family: Poppins;
    line-height: 23.35rpx;
    color: #343434b3;
  }
  .image_3 {
    margin-right: 7.25rpx;
    width: 7.25rpx;
    height: 36.23rpx;
  }
  .image_4 {
    margin-right: 7.26rpx;
  }
  .section_5 {
    background-color: #efefef;
    border-radius: 14.49rpx;
    width: 331.52rpx;
  }
  .view {
    margin-left: 63.41rpx;
  }
  .section_6 {
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
  .view_3 {
    margin-top: 12.28rpx;
  }
  .text_3 {
    margin-left: 63.93rpx;
    margin-top: -50.33rpx;
  }
  .view_2 {
    margin-top: 26.97rpx;
  }
  .section_8 {
    background-color: #19224c;
    border-radius: 14.49rpx;
    width: 150.36rpx;
    height: 12.68rpx;
  }
  .section_7 {
    padding: 40.25rpx 30.8rpx 38.04rpx;
    background-color: #ffffff;
    border-radius: 21.74rpx;
    box-shadow: 0rpx 23.55rpx 47.1rpx #2e323414;
  }
  .image_6 {
    border-radius: 14.49rpx;
    width: 186.59rpx;
    height: 10.87rpx;
  }
  .group_4 {
    margin-top: 61.59rpx;
  }
  .section_9 {
    padding: 30.8rpx 32.61rpx 36.23rpx;
    background-color: #ffffff;
    border-radius: 21.74rpx;
    box-shadow: 0rpx 23.55rpx 47.1rpx #2e323414;
  }
  .group_1 {
    padding: 3.62rpx 0 19.93rpx;
  }
  .image_7 {
    width: 36.23rpx;
    height: 36.23rpx;
  }
  .text_4 {
    line-height: 23.33rpx;
  }
  .section_10 {
    margin-left: 61.59rpx;
    background-color: #fcdb66;
    border-radius: 14.49rpx;
    width: 331.52rpx;
    height: 12.68rpx;
  }
  .text_5 {
    line-height: 23.46rpx;
  }
</style>