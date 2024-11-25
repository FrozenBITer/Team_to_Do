<template>
  <view class="flex-col page">
    <view class="flex-col relative section">
      <view class="flex-row justify-between">
        <image
          class="image"
          src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=bdc68411e0790d8138ba199cdc9964b4.png"
          @click="onClick"
        />
        <image
          class="image"
          src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=ab2259305964b8bfc457c7c8a2c0b047.png"
          @click="onClick_1"
        />
      </view>
      <view class="flex-col group_1 mt-30">
        <view class="flex-row justify-between">
          <view class="flex-col items-start group_11">
            <text class="text">9月25日</text>
            <text class="font text_2 mt-13">今日已有2个任务</text>
          </view>
          <image
            class="image_2"
            src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=9cce886e02a5ec671e813927da68e4ca.png"
          />
        </view>
        <view class="flex-row justify-between items-center equal-division_1 mt-24">
          <view class="flex-col items-center equal-division-item">
            <text class="font_2 text_4">22</text>
            <text class="font_3 mt-15">周一</text>
          </view>
          <view class="flex-col items-center equal-division-item_1">
            <text class="font_2 text_5">23</text>
            <text class="font_3 mt-15">周二</text>
          </view>
          <view class="flex-col items-center equal-division-item">
            <text class="font_2">24</text>
            <text class="font_3 mt-15">周三</text>
          </view>
          <view class="flex-col items-center equal-division-item_2 section_2">
            <text class="font_2 text_3">25</text>
            <text class="font_3 text_8">周四</text>
            <view class="section_3"></view>
          </view>
          <view class="flex-col items-center equal-division-item_3">
            <text class="font_2 text_6">26</text>
            <text class="font_3 mt-15">周五</text>
          </view>
          <view class="flex-col items-center equal-division-item">
            <text class="font_2">27</text>
            <text class="font_3 text_9 mt-15">周六</text>
          </view>
          <view class="flex-col items-center equal-division-item">
            <text class="font_2 text_7">28</text>
            <text class="font_3 mt-15">周日</text>
          </view>
        </view>
      </view>
    </view>
    <view class="flex-col group mt-28">
      <view class="flex-row items-center self-stretch group_2">
        <view class="shrink-0 section_4"></view>
        <text class="font_4 text_10">任务信息</text>
        <view class="shrink-0 section_4 view"></view>
      </view>
      <view class="flex-col self-stretch group_12 view_2">
        <text class="self-start font_5 text_11">任务名称</text>
        <view class="flex-col justify-start items-start self-stretch text-wrapper mt-14">
          <text class="font_4 text_12">任务一</text>
        </view>
      </view>
      <view class="flex-col self-stretch group_12 view_3">
        <text class="self-start font_5 text_13">任务类型</text>
        <view class="flex-row self-stretch mt-17">
          <view class="flex-col justify-start items-center text-wrapper_2"><text class="font text_14">个人</text></view>
          <view class="flex-col justify-start items-center text-wrapper_3 ml-15">
            <text class="font text_15">团队</text>
          </view>
        </view>
      </view>
      <view class="flex-row equal-division group_4">
        <view class="flex-col group_5 group_13">
          <text class="self-start font_5 text_16">开始时间</text>
          <view class="flex-row items-center self-stretch section_5 mt-14">
            <text class="font text_18">9月26日下午2:00</text>
            <image
              class="shrink-0 image_3 ml-4"
              src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=1c0922845080b8d319796ed4a6571dde.png"
            />
          </view>
        </view>
        <view class="flex-col group_5 group_8">
          <text class="self-start font_5 text_17">截止时间</text>
          <view class="flex-row items-center self-stretch section_6 mt-15">
            <text class="font text_19">9月30日上午10:00</text>
            <image
              class="shrink-0 image_3 ml-3"
              src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=4c47fb342fb99121d09a314a340b0259.png"
            />
          </view>
        </view>
      </view>
      <view class="flex-col self-stretch group_12 view_4">
        <view class="flex-col relative section_7">
          <text class="self-start font_5 text_20">参与人员</text>
          <view class="flex-col self-stretch mt-20">
            <view class="flex-row justify-evenly items-center self-stretch group_6">
              <image
                class="image_4"
                src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=588b09c02682a287a29c75edf930d25f.png"
              />
              <view class="flex-row items-center relative section_8">
                <view class="shrink-0 section_10"></view>
                <text class="font_6">李明</text>
                <image
                  class="shrink-0 image_5 image_6"
                  src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=5b08aba678c5d62dc5af50ee4254b83e.png"
                />
              </view>
              <view class="flex-row items-center section_9">
                <text class="font_6 text_21">李明</text>
                <image
                  class="shrink-0 image_5 ml-28"
                  src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=5b08aba678c5d62dc5af50ee4254b83e.png"
                />
              </view>
            </view>
            <view class="flex-row justify-center items-center self-start relative section_11">
              <text class="font_6 text_22">李木子</text>
              <image
                class="image_5 pos"
                src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=5b08aba678c5d62dc5af50ee4254b83e.png"
              />
            </view>
          </view>
        </view>
        <view class="flex-row group_7">
          <view class="flex-col justify-start items-center text-wrapper_4" @click="onClick_2">
            <text class="font_7 text_23">确认修改</text>
          </view>
          <view class="flex-col justify-start items-center view_5 ml-22" @click="onClick_3">
            <text class="font_7 text_24">删除任务</text>
          </view>
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
        uni.navigateBack();
      },
      onClick_1() {
        uni.navigateTo({ url: '/pages/Preson/Preson' });
      },
      onClick_2() {
        uni.navigateBack();
      },
      onClick_3() {
        uni.navigateBack();
      },
    },
  };
</script>

<style scoped lang="css">
  .mt-13 {
    margin-top: 23.55rpx;
  }
  .mt-17 {
    margin-top: 30.8rpx;
  }
  .ml-15 {
    margin-left: 27.17rpx;
  }
  .mt-15 {
    margin-top: 27.17rpx;
  }
  .ml-3 {
    margin-left: 5.43rpx;
  }
  .page {
    padding-bottom: 72.46rpx;
    background-color: #fafafa;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .section {
    padding: 45.29rpx 43.48rpx 43.48rpx 43.48rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 23.55rpx 47.1rpx #2e323414;
  }
  .image {
    border-radius: 21.74rpx;
    width: 72.46rpx;
    height: 72.46rpx;
  }
  .group_1 {
    padding-left: 2.55rpx;
  }
  .group_11 {
    margin-top: 2.83rpx;
  }
  .text {
    color: #343434cc;
    font-size: 32.61rpx;
    font-family: Poppins;
    font-weight: 600;
    line-height: 29.09rpx;
  }
  .font {
    font-size: 21.74rpx;
    font-family: Poppins;
    line-height: 18.88rpx;
  }
  .text_2 {
    color: #34343499;
    line-height: 20.13rpx;
  }
  .image_2 {
    box-shadow: 0rpx 32.61rpx 50.72rpx #2e32341a;
    border-radius: 50%;
    width: 76.09rpx;
    height: 76.09rpx;
  }
  .equal-division_1 {
    margin-left: 3.46rpx;
  }
  .equal-division-item {
    padding: 28.22rpx 0 27.43rpx;
  }
  .font_2 {
    font-size: 25.36rpx;
    font-family: Poppins;
    line-height: 18.88rpx;
    color: #34343480;
  }
  .text_4 {
    line-height: 18.62rpx;
  }
  .font_3 {
    font-size: 18.12rpx;
    font-family: Poppins;
    line-height: 15.89rpx;
    color: #34343480;
  }
  .equal-division-item_1 {
    padding: 28.19rpx 0 27.43rpx;
  }
  .text_5 {
    line-height: 19.02rpx;
  }
  .equal-division-item_2 {
    position: relative;
  }
  .section_2 {
    padding-top: 12.79rpx;
    background-color: #fcdb66;
    border-radius: 72.46rpx;
    box-shadow: 0rpx 32.61rpx 50.72rpx #fcdb662e;
    height: 97.75rpx;
  }
  .text_3 {
    color: #2e3234;
  }
  .text_8 {
    margin-top: 27.34rpx;
    color: #2e3234;
  }
  .section_3 {
    margin-top: 12.93rpx;
    background-color: #2e3234;
    border-radius: 50%;
    width: 10.87rpx;
    height: 10.87rpx;
  }
  .equal-division-item_3 {
    padding: 28.15rpx 0 27.43rpx;
  }
  .text_6 {
    line-height: 18.95rpx;
  }
  .text_9 {
    line-height: 16.68rpx;
  }
  .text_7 {
    line-height: 19.33rpx;
  }
  .group {
    padding-left: 18.93rpx;
    padding-right: 18.93rpx;
  }
  .group_2 {
    padding-left: 37.23rpx;
    padding-right: 35.42rpx;
  }
  .section_4 {
    background-color: #0000001a;
    width: 231.88rpx;
    height: 1.81rpx;
  }
  .font_4 {
    font-size: 25.36rpx;
    font-family: Poppins;
    line-height: 23.59rpx;
  }
  .text_10 {
    margin-left: 40.4rpx;
    color: #3434344d;
  }
  .view {
    margin-left: 30.25rpx;
  }
  .group_12 {
    padding: 0 22.74rpx;
  }
  .view_2 {
    margin-top: 42.03rpx;
  }
  .font_5 {
    font-size: 28.99rpx;
    font-family: Poppins;
    line-height: 26.87rpx;
    font-weight: 700;
    color: #343434cc;
  }
  .text_11 {
    line-height: 27.43rpx;
  }
  .text-wrapper {
    margin-right: 3.62rpx;
    padding: 21.96rpx 0 29.33rpx;
    background-color: #ffffff;
    border-radius: 14.49rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #5050500d;
    border: solid 0.72rpx #0000001a;
  }
  .text_12 {
    margin-left: 20.27rpx;
    color: #343434cc;
    line-height: 23.35rpx;
  }
  .view_3 {
    margin-top: 65.94rpx;
  }
  .text_13 {
    line-height: 27.25rpx;
  }
  .text-wrapper_2 {
    padding: 12.41rpx 0 15.45rpx;
    background-color: #c1c1c136;
    border-radius: 14.49rpx;
    width: 144.93rpx;
    height: 50.72rpx;
    border: solid 1.45rpx #2e323400;
  }
  .text_14 {
    color: #a7a7a7;
    line-height: 19.96rpx;
  }
  .text-wrapper_3 {
    padding: 12.37rpx 0 15.43rpx;
    background-color: #ffd737;
    border-radius: 14.49rpx;
    width: 144.93rpx;
    height: 50.72rpx;
    border: solid 1.45rpx #fcfab6;
  }
  .text_15 {
    color: #66520d;
    line-height: 20.02rpx;
    text-shadow: 0 1.81rpx #fcfab6, 0 -1.81rpx #fcfab6, 1.81rpx 0 #fcfab6, -1.81rpx 0 #fcfab6;
  }
  .equal-division {
    align-self: flex-start;
    margin-top: 55.94rpx;
  }
  .group_4 {
    width: 594.2rpx;
  }
  .group_5 {
    flex: 1 1 297.1rpx;
  }
  .group_13 {
    padding: 10rpx 20.74rpx 10rpx 22.74rpx;
  }
  .text_16 {
    line-height: 27.39rpx;
  }
  .section_5 {
    padding: 14.49rpx 18.51rpx 14.49rpx 21.52rpx;
    background-color: #c3e99c66;
    border-radius: 10.87rpx;
  }
  .text_18 {
    color: #2e3234;
    line-height: 20.07rpx;
  }
  .image_3 {
    border-radius: 7.25rpx;
    width: 32.21rpx;
    height: 28.99rpx;
  }
  .group_8 {
    padding: 10.33rpx 20.74rpx 10rpx 22.74rpx;
  }
  .text_17 {
    line-height: 26.7rpx;
    font-weight: unset;
  }
  .section_6 {
    padding: 14.49rpx 14.89rpx 14.49rpx 17.9rpx;
    background-color: #030b5e3b;
    border-radius: 10.87rpx;
  }
  .text_19 {
    color: #ffffff;
    line-height: 20.07rpx;
  }
  .view_4 {
    margin-top: 47.97rpx;
  }
  .section_7 {
    margin-right: 3.62rpx;
    padding: 42.21rpx 27.34rpx 18.66rpx 28.8rpx;
    background-color: #ffffff;
    border-radius: 14.49rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #5050500d;
    border: solid 0.72rpx #0000001a;
  }
  .text_20 {
    line-height: 27.5rpx;
  }
  .group_6 {
    padding-bottom: 19.93rpx;
  }
  .image_4 {
    border-radius: 50%;
    width: 72.46rpx;
    height: 72.46rpx;
  }
  .section_8 {
    padding: 12.68rpx 18.12rpx 12.68rpx;
    background-color: #ffffff;
    border-radius: 14.49rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #50505014;
    height: 79.71rpx;
  }
  .section_10 {
    background-color: #00000000;
    width: 54.35rpx;
    height: 54.35rpx;
  }
  .font_6 {
    font-size: 28.99rpx;
    font-family: Poppins;
    line-height: 26.87rpx;
    color: #343434b3;
  }
  .image_5 {
    width: 21.74rpx;
    height: 21.74rpx;
  }
  .image_6 {
    margin-left: 49.71rpx;
  }
  .section_9 {
    padding: 26.38rpx 18.12rpx 26.47rpx;
    background-color: #ffffff;
    border-radius: 14.49rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #50505014;
    height: 79.71rpx;
  }
  .text_21 {
    margin-left: 51.74rpx;
  }
  .section_11 {
    margin-left: 108.7rpx;
    padding: 22.75rpx 18.12rpx 30.2rpx;
    background-color: #ffffff;
    border-radius: 14.49rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #50505014;
    width: 217.39rpx;
  }
  .text_22 {
    line-height: 26.76rpx;
  }
  .pos {
    position: absolute;
    right: 18.12rpx;
    top: 50%;
    transform: translateY(-50%);
  }
  .group_7 {
    padding-top: 34.42rpx;
  }
  .text-wrapper_4 {
    padding: 35.43rpx 0 39.24rpx;
    flex: 1 1 306.16rpx;
    background-color: #2e3234;
    border-radius: 14.49rpx;
    height: 101.45rpx;
  }
  .font_7 {
    font-size: 28.99rpx;
    font-family: Poppins;
    line-height: 26.87rpx;
    color: #ffffff;
  }
  .text_23 {
    line-height: 26.78rpx;
  }
  .view_5 {
    margin-right: 12.68rpx;
    padding: 35.4rpx 0 39.33rpx;
    flex: 1 1 306.16rpx;
    background-color: #2e3234;
    border-radius: 14.49rpx;
    height: 101.45rpx;
  }
  .text_24 {
    line-height: 26.72rpx;
  }
</style>