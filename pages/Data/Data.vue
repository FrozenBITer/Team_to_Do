<template>
  <view class="flex-col justify-start relative page">
    <view class="flex-col group_7">
      <view class="flex-col justify-start items-start self-stretch text-wrapper_2">
        <text class="font_3 text_35">任务一</text>
      </view>
      <view class="flex-col self-stretch group_8">
        <text class="self-start font_4 text_36">任务类型</text>
        <view class="flex-row self-stretch mt-17">
          <view class="flex-col justify-start items-center text-wrapper_3">
            <text class="font_5 text_37">个人</text>
          </view>
          <view class="flex-col justify-start items-center text-wrapper_4 ml-15">
            <text class="font_5 text_38">团队</text>
          </view>
        </view>
      </view>
      <view class="flex-row equal-division">
        <view class="flex-col items-start group_9 equal-division-item">
          <text class="font_4 text_1">开始时间</text>
          <view class="flex-row items-center section_4 mt-14">
            <text class="font_5 text_40">9月26日下午2:00</text>
            <image
              class="shrink-0 image_2 ml-4"
              src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=1c0922845080b8d319796ed4a6571dde.png"
            />
          </view>
        </view>
        <view class="flex-col items-start group_9 group_16 ml-13">
          <text class="font_4 text_39">截止时间</text>
          <view class="flex-row items-center section_5 mt-15">
            <text class="font_5 text_41">9月30日上午10:00</text>
            <image
              class="shrink-0 image_2 ml-3"
              src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=4c47fb342fb99121d09a314a340b0259.png"
            />
          </view>
        </view>
      </view>
      <view class="flex-col self-stretch group_10">
        <view class="flex-col relative section_6">
          <text class="self-start font_4">参与人员</text>
          <view class="flex-col self-stretch mt-15">
            <view class="flex-col justify-start items-start self-stretch relative group_11">
              <view class="relative section_7"></view>
              <view class="flex-row equal-division_2">
                <view class="flex-row items-center group_12 group_14">
                  <image
                    class="image_3"
                    src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=588b09c02682a287a29c75edf930d25f.png"
                  />
                  <view class="flex-row items-center ml-30">
                    <image
                      class="shrink-0 image_4"
                      src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=7185e17a24552ebf237e064476e76674.png"
                    />
                    <text class="font_3 text_43 ml-12">李明</text>
                  </view>
                </view>
                <view class="flex-row justify-between items-center group_13 equal-division-item ml-19">
                  <image
                    class="image_5"
                    src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=5b08aba678c5d62dc5af50ee4254b83e.png"
                  />
                  <view class="flex-row items-center section_8">
                    <image
                      class="shrink-0 image_4"
                      src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=dea518583988d33e8b044296add42a35.png"
                    />
                    <text class="font_3 text_44">张一天</text>
                    <image
                      class="shrink-0 image_5 image_6"
                      src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=5b08aba678c5d62dc5af50ee4254b83e.png"
                    />
                  </view>
                </view>
              </view>
            </view>
            <view class="flex-row items-center self-start section_9">
              <image
                class="shrink-0 image_4"
                src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=3bbbb850b6ffe008c01787692bb666ce.png"
              />
              <text class="font_3 text_45">李木子</text>
              <image
                class="shrink-0 image_5 image_7"
                src="https://ide.code.fun/api/image?token=673f5cb9797f850011ef4bbe&name=5b08aba678c5d62dc5af50ee4254b83e.png"
              />
            </view>
          </view>
        </view>
        <view class="flex-col justify-start items-center text-wrapper_5 mt-15">
          <text class="text_46">确认添加</text>
        </view>
      </view>
    </view>
    <view class="section_2 pos_2"></view>
    <view class="flex-col section pos">
      <view class="flex-col">
        <view class="flex-row justify-between self-stretch">
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
        <text class="self-center text mt-6">9月</text>
      </view>
      <view class="flex-col group mt-37">
        <view class="flex-row justify-between">
          <text class="font text_2">周一</text>
          <view class="flex-row">
            <text class="font text_3">周二</text>
            <text class="font text_4 ml-33">周三</text>
          </view>
          <text class="font text_5">周四</text>
          <view class="flex-row group_1">
            <text class="font text_6">周五</text>
            <view class="flex-row shrink-0 ml-28">
              <text class="font text_7">周六</text>
              <text class="font text_8 ml-26">周日</text>
            </view>
          </view>
        </view>
        <view class="flex-row justify-between group_2 mt-25">
          <text class="font_2">01</text>
          <text class="font_2">02</text>
          <view class="flex-row">
            <text class="font_2 text_9">03</text>
            <text class="font_2 text_10">04</text>
            <text class="font_2 text_11">05</text>
            <text class="font_2 text_12">06</text>
          </view>
        </view>
        <view class="flex-col group_3 mt-25">
          <view class="flex-row justify-between self-stretch">
            <text class="font_2">07</text>
            <text class="font_2 text_13">08</text>
            <text class="font_2 text_14">09</text>
            <text class="font_2">10</text>
            <text class="font_2 text_15">11</text>
            <text class="font_2 text_16">12</text>
            <text class="font_2 text_17">13</text>
          </view>
          <view class="flex-row justify-between items-center self-stretch group_4">
            <text class="font_2 text_18">14</text>
            <text class="font_2 text_19">15</text>
            <text class="font_2 text_20">16</text>
            <text class="font_2 text_21">17</text>
            <text class="font_2 text_22">18</text>
            <view class="flex-row self-stretch">
              <text class="font_2 text_23">19</text>
              <text class="font_2 ml-34">20</text>
            </view>
          </view>
          <view class="flex-row items-center self-stretch group_5">
            <text class="font_2 text_24">21</text>
            <text class="font_2 text_25">22</text>
            <text class="font_2 text_26">23</text>
            <text class="font_2 text_27">24</text>
            <view class="flex-col justify-start items-center shrink-0 relative text-wrapper">
              <text class="font_2 text_28">25</text>
            </view>
            <text class="font_2 text_29">26</text>
            <text class="font_2 text_30">27</text>
          </view>
          <view class="flex-row self-stretch group_6">
            <text class="font_2 text_31">28</text>
            <text class="font_2 text_32 ml-41">29</text>
            <text class="font_2 text_33 ml-41">30</text>
            <text class="font_2 text_34 ml-41">31</text>
          </view>
          <view class="self-center section_3"></view>
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
    },
  };
</script>

<style scoped lang="css">
  .mt-17 {
    margin-top: 30.8rpx;
  }
  .ml-15 {
    margin-left: 27.17rpx;
  }
  .ml-13 {
    margin-left: 23.55rpx;
  }
  .ml-3 {
    margin-left: 5.43rpx;
  }
  .ml-19 {
    margin-left: 34.42rpx;
  }
  .mt-15 {
    margin-top: 27.17rpx;
  }
  .mt-37 {
    margin-top: 67.03rpx;
  }
  .ml-33 {
    margin-left: 59.78rpx;
  }
  .mt-25 {
    margin-top: 45.29rpx;
  }
  .ml-41 {
    margin-left: 74.28rpx;
  }
  .page {
    padding: 623.19rpx 0 72.46rpx;
    background-color: #fafafa;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .group_7 {
    margin-left: 41.67rpx;
    margin-right: 43.48rpx;
  }
  .text-wrapper_2 {
    padding: 21.96rpx 0 29.33rpx;
    background-color: #ffffff;
    border-radius: 14.49rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #5050500d;
    border: solid 0.72rpx #0000001a;
  }
  .font_3 {
    font-size: 25.36rpx;
    font-family: Poppins;
    line-height: 23.35rpx;
    color: #343434b3;
  }
  .text_35 {
    margin-left: 20.27rpx;
    color: #343434cc;
  }
  .group_8 {
    margin-top: 65.94rpx;
  }
  .font_4 {
    font-size: 28.99rpx;
    font-family: Poppins;
    line-height: 27.5rpx;
    font-weight: 700;
    color: #343434cc;
  }
  .text_36 {
    line-height: 27.25rpx;
  }
  .text-wrapper_3 {
    padding: 12.41rpx 0 15.45rpx;
    background-color: #c1c1c136;
    border-radius: 14.49rpx;
    width: 144.93rpx;
    height: 50.72rpx;
    border: solid 1.45rpx #2e323400;
  }
  .font_5 {
    font-size: 21.74rpx;
    font-family: Poppins;
    line-height: 20.07rpx;
  }
  .text_37 {
    color: #a7a7a7;
    line-height: 19.96rpx;
  }
  .text-wrapper_4 {
    padding: 12.37rpx 0 15.43rpx;
    background-color: #fcdb6666;
    border-radius: 14.49rpx;
    width: 144.93rpx;
    height: 50.72rpx;
    border: solid 1.45rpx #fcdb66;
  }
  .text_38 {
    color: #d7b53a;
    line-height: 20.02rpx;
  }
  .equal-division {
    align-self: flex-start;
    margin-top: 55.94rpx;
  }
  .group_9 {
    flex: 1 1 274.37rpx;
  }
  .text_1 {
    line-height: 27.39rpx;
  }
  .section_4 {
    padding: 14.49rpx 18.51rpx 14.49rpx 21.52rpx;
    background-color: #c3e99c66;
    border-radius: 10.87rpx;
  }
  .text_40 {
    color: #2e3234;
  }
  .image_2 {
    border-radius: 7.25rpx;
    width: 32.21rpx;
    height: 28.99rpx;
  }
  .group_16 {
    padding: 10.33rpx 0 10rpx;
  }
  .text_39 {
    line-height: 26.7rpx;
    font-weight: unset;
  }
  .section_5 {
    padding: 14.49rpx 14.89rpx 14.49rpx 17.9rpx;
    background-color: #030b5e3b;
    border-radius: 10.87rpx;
  }
  .text_41 {
    color: #ffffff;
  }
  .group_10 {
    margin-top: 47.97rpx;
  }
  .section_6 {
    padding: 42.21rpx 27.34rpx 18.66rpx 28.8rpx;
    background-color: #ffffff;
    border-radius: 14.49rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #5050500d;
    border: solid 0.72rpx #0000001a;
  }
  .group_11 {
    padding: 10rpx 0 19.93rpx;
  }
  .section_7 {
    margin-left: 108.7rpx;
    background-color: #ffffff;
    border-radius: 14.49rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #50505014;
    width: 217.39rpx;
    height: 79.71rpx;
  }
  .equal-division_2 {
    position: absolute;
    left: 0;
    right: 4rpx;
    top: 50%;
    transform: translateY(-50%);
  }
  .group_12 {
    flex-shrink: 0;
  }
  .group_14 {
    padding: 13.62rpx 0 13.62rpx;
  }
  .image_3 {
    border-radius: 50%;
    width: 72.46rpx;
    height: 72.46rpx;
  }
  .image_4 {
    width: 54.35rpx;
    height: 54.35rpx;
  }
  .text_43 {
    line-height: 23.51rpx;
  }
  .group_13 {
    flex: 1 1 0;
  }
  .equal-division-item {
    padding: 10rpx 0;
  }
  .image_5 {
    width: 21.74rpx;
    height: 21.74rpx;
  }
  .section_8 {
    padding: 12.68rpx 18.12rpx 12.68rpx;
    background-color: #ffffff;
    border-radius: 14.49rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #50505014;
    height: 79.71rpx;
  }
  .text_44 {
    margin-left: 22.14rpx;
    line-height: 22.97rpx;
  }
  .image_6 {
    margin-left: 34.02rpx;
  }
  .section_9 {
    margin-left: 108.7rpx;
    padding: 12.68rpx 18.12rpx 12.68rpx;
    background-color: #ffffff;
    border-radius: 14.49rpx;
    box-shadow: 0rpx 18.12rpx 43.48rpx #50505014;
  }
  .text_45 {
    margin-left: 20.82rpx;
    line-height: 23.41rpx;
  }
  .image_7 {
    margin-left: 6.36rpx;
  }
  .text-wrapper_5 {
    padding: 40.87rpx 0 41.07rpx;
    background-color: #2e3234;
    border-radius: 14.49rpx;
  }
  .text_46 {
    color: #ffffff;
    font-size: 28.99rpx;
    font-family: Poppins;
    line-height: 26.76rpx;
  }
  .section_2 {
    background-color: #d9d9d98a;
    width: 750rpx;
    height: 1126.81rpx;
  }
  .pos_2 {
    position: absolute;
    left: 0;
    right: 0;
    top: 456.52rpx;
  }
  .section {
    padding: 25.36rpx 36.23rpx 7.25rpx 36.23rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 18.12rpx 43.48rpx #2e32340d;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .image {
    border-radius: 21.74rpx;
    width: 72.46rpx;
    height: 72.46rpx;
  }
  .text {
    color: #343434cc;
    font-size: 32.61rpx;
    font-family: Poppins;
    font-weight: 600;
    line-height: 29.09rpx;
  }
  .group {
    padding-left: 29.57rpx;
    padding-right: 29.57rpx;
  }
  .font {
    font-size: 18.12rpx;
    font-family: Poppins;
    line-height: 16.12rpx;
    color: #34343480;
  }
  .text_2 {
    line-height: 15.89rpx;
  }
  .text_3 {
    line-height: 15.89rpx;
  }
  .text_4 {
    line-height: 15.89rpx;
  }
  .text_5 {
    line-height: 15.89rpx;
  }
  .group_1 {
    margin-right: 2.46rpx;
  }
  .text_6 {
    line-height: 15.89rpx;
  }
  .text_7 {
    line-height: 16.68rpx;
  }
  .text_8 {
    line-height: 15.89rpx;
  }
  .group_2 {
    padding-left: 111.23rpx;
    padding-right: 7.17rpx;
  }
  .font_2 {
    font-size: 21.74rpx;
    font-family: Poppins;
    line-height: 16.12rpx;
    color: #34343480;
  }
  .text_9 {
    line-height: 16.3rpx;
  }
  .text_10 {
    margin-left: 67.03rpx;
  }
  .text_11 {
    margin-left: 65.22rpx;
  }
  .text_12 {
    margin-left: 57.97rpx;
    line-height: 16.23rpx;
  }
  .group_3 {
    padding-left: 7.75rpx;
    padding-right: 7.39rpx;
  }
  .text_13 {
    line-height: 16.52rpx;
  }
  .text_14 {
    line-height: 16.2rpx;
  }
  .text_15 {
    line-height: 15.85rpx;
  }
  .text_16 {
    line-height: 16.18rpx;
  }
  .text_17 {
    margin-right: 3.73rpx;
    line-height: 16.3rpx;
  }
  .group_4 {
    margin-top: 46.79rpx;
  }
  .text_18 {
    line-height: 15.85rpx;
  }
  .text_19 {
    line-height: 15.89rpx;
  }
  .text_20 {
    line-height: 16.23rpx;
  }
  .text_21 {
    line-height: 15.85rpx;
  }
  .text_22 {
    line-height: 16.52rpx;
  }
  .text_23 {
    color: #9a9a9a;
    line-height: 16.21rpx;
  }
  .group_5 {
    margin-top: 28.59rpx;
  }
  .text_24 {
    line-height: 16.18rpx;
  }
  .text_25 {
    margin-left: 81.52rpx;
    line-height: 15.96rpx;
  }
  .text_26 {
    margin-left: 74.28rpx;
    line-height: 16.3rpx;
  }
  .text_27 {
    margin-left: 76.09rpx;
    line-height: 16.18rpx;
  }
  .text-wrapper {
    margin-left: 51.45rpx;
    padding: 20.05rpx 0 21.74rpx;
    background-color: #fcdb66;
    box-shadow: 0rpx 32.61rpx 50.72rpx #fcdb662e;
    border-radius: 50%;
    width: 57.97rpx;
    height: 57.97rpx;
  }
  .text_28 {
    color: #2e3234;
    line-height: 16.18rpx;
  }
  .text_29 {
    margin-left: 51.81rpx;
    line-height: 16.23rpx;
  }
  .text_30 {
    margin-left: 61.59rpx;
    line-height: 16.18rpx;
  }
  .group_6 {
    margin-top: 27.26rpx;
  }
  .text_31 {
    line-height: 16.56rpx;
  }
  .text_32 {
    line-height: 16.2rpx;
  }
  .text_33 {
    line-height: 16.3rpx;
  }
  .text_34 {
    line-height: 16.3rpx;
  }
  .section_3 {
    margin-top: 50.33rpx;
    background-color: #19224c;
    border-radius: 14.49rpx;
    width: 83.33rpx;
    height: 3.62rpx;
  }
</style>