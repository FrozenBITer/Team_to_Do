<script>
  export default {
    onLaunch: function () {
      console.log('App Launch');
    },
    onShow: function () {
      console.log('App Show');
    },
    onHide: function () {
      console.log('App Hide');
    },
  };
</script>

<style>
    /************************************************************
  ** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
  ** 否则页面将无法正常显示                                  **
  ************************************************************/

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  view,
  image,
  text {
    box-sizing: border-box;
    flex-shrink: 0;
  }

  #app {
    width: 100vw;
    height: 100vh;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-col {
    display: flex;
    flex-direction: column;
  }

  .justify-start {
    justify-content: flex-start;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-around {
    justify-content: space-around;
  }

  .justify-evenly {
    justify-content: space-evenly;
  }

  .items-start {
    align-items: flex-start;
  }

  .items-end {
    align-items: flex-end;
  }

  .items-center {
    align-items: center;
  }

  .items-baseline {
    align-items: baseline;
  }

  .items-stretch {
    align-items: stretch;
  }

  .self-start {
    align-self: flex-start;
  }

  .self-end {
    align-self: flex-end;
  }

  .self-center {
    align-self: center;
  }

  .self-baseline {
    align-self: baseline;
  }

  .self-stretch {
    align-self: stretch;
  }

  .flex-1 {
    flex: 1 1 0%;
  }

  .flex-auto {
    flex: 1 1 auto;
  }

  .grow {
    flex-grow: 1;
  }

  .grow-0 {
    flex-grow: 0;
  }

  .shrink {
    flex-shrink: 1;
  }

  .shrink-0 {
    flex-shrink: 0;
  }

  .relative {
    position: relative;
  }

  .ml-2 {
    margin-left: 3.62rpx;
  }

  .mt-2 {
    margin-top: 3.62rpx;
  }

  .ml-4 {
    margin-left: 7.25rpx;
  }

  .mt-4 {
    margin-top: 7.25rpx;
  }

  .ml-6 {
    margin-left: 10.87rpx;
  }

  .mt-6 {
    margin-top: 10.87rpx;
  }

  .ml-8 {
    margin-left: 14.49rpx;
  }

  .mt-8 {
    margin-top: 14.49rpx;
  }

  .ml-10 {
    margin-left: 18.12rpx;
  }

  .mt-10 {
    margin-top: 18.12rpx;
  }

  .ml-12 {
    margin-left: 21.74rpx;
  }

  .mt-12 {
    margin-top: 21.74rpx;
  }

  .ml-14 {
    margin-left: 25.36rpx;
  }

  .mt-14 {
    margin-top: 25.36rpx;
  }

  .ml-16 {
    margin-left: 28.99rpx;
  }

  .mt-16 {
    margin-top: 28.99rpx;
  }

  .ml-18 {
    margin-left: 32.61rpx;
  }

  .mt-18 {
    margin-top: 32.61rpx;
  }

  .ml-20 {
    margin-left: 36.23rpx;
  }

  .mt-20 {
    margin-top: 36.23rpx;
  }

  .ml-22 {
    margin-left: 39.86rpx;
  }

  .mt-22 {
    margin-top: 39.86rpx;
  }

  .ml-24 {
    margin-left: 43.48rpx;
  }

  .mt-24 {
    margin-top: 43.48rpx;
  }

  .ml-26 {
    margin-left: 47.1rpx;
  }

  .mt-26 {
    margin-top: 47.1rpx;
  }

  .ml-28 {
    margin-left: 50.72rpx;
  }

  .mt-28 {
    margin-top: 50.72rpx;
  }

  .ml-30 {
    margin-left: 54.35rpx;
  }

  .mt-30 {
    margin-top: 54.35rpx;
  }

  .ml-32 {
    margin-left: 57.97rpx;
  }

  .mt-32 {
    margin-top: 57.97rpx;
  }

  .ml-34 {
    margin-left: 61.59rpx;
  }

  .mt-34 {
    margin-top: 61.59rpx;
  }

  .ml-36 {
    margin-left: 65.22rpx;
  }

  .mt-36 {
    margin-top: 65.22rpx;
  }

  .ml-38 {
    margin-left: 68.84rpx;
  }

  .mt-38 {
    margin-top: 68.84rpx;
  }

  .ml-40 {
    margin-left: 72.46rpx;
  }

  .mt-40 {
    margin-top: 72.46rpx;
  }

  .ml-42 {
    margin-left: 76.09rpx;
  }

  .mt-42 {
    margin-top: 76.09rpx;
  }

  .ml-44 {
    margin-left: 79.71rpx;
  }

  .mt-44 {
    margin-top: 79.71rpx;
  }

  .ml-46 {
    margin-left: 83.33rpx;
  }

  .mt-46 {
    margin-top: 83.33rpx;
  }

  .ml-48 {
    margin-left: 86.96rpx;
  }

  .mt-48 {
    margin-top: 86.96rpx;
  }

  .ml-50 {
    margin-left: 90.58rpx;
  }

  .mt-50 {
    margin-top: 90.58rpx;
  }

  .ml-52 {
    margin-left: 94.2rpx;
  }

  .mt-52 {
    margin-top: 94.2rpx;
  }

  .ml-54 {
    margin-left: 97.83rpx;
  }

  .mt-54 {
    margin-top: 97.83rpx;
  }

  .ml-56 {
    margin-left: 101.45rpx;
  }

  .mt-56 {
    margin-top: 101.45rpx;
  }

  .ml-58 {
    margin-left: 105.07rpx;
  }

  .mt-58 {
    margin-top: 105.07rpx;
  }

  .ml-60 {
    margin-left: 108.7rpx;
  }

  .mt-60 {
    margin-top: 108.7rpx;
  }

  .ml-62 {
    margin-left: 112.32rpx;
  }

  .mt-62 {
    margin-top: 112.32rpx;
  }

  .ml-64 {
    margin-left: 115.94rpx;
  }

  .mt-64 {
    margin-top: 115.94rpx;
  }

  .ml-66 {
    margin-left: 119.57rpx;
  }

  .mt-66 {
    margin-top: 119.57rpx;
  }

  .ml-68 {
    margin-left: 123.19rpx;
  }

  .mt-68 {
    margin-top: 123.19rpx;
  }

  .ml-70 {
    margin-left: 126.81rpx;
  }

  .mt-70 {
    margin-top: 126.81rpx;
  }

  .ml-72 {
    margin-left: 130.43rpx;
  }

  .mt-72 {
    margin-top: 130.43rpx;
  }

  .ml-74 {
    margin-left: 134.06rpx;
  }

  .mt-74 {
    margin-top: 134.06rpx;
  }

  .ml-76 {
    margin-left: 137.68rpx;
  }

  .mt-76 {
    margin-top: 137.68rpx;
  }

  .ml-78 {
    margin-left: 141.3rpx;
  }

  .mt-78 {
    margin-top: 141.3rpx;
  }

  .ml-80 {
    margin-left: 144.93rpx;
  }

  .mt-80 {
    margin-top: 144.93rpx;
  }

  .ml-82 {
    margin-left: 148.55rpx;
  }

  .mt-82 {
    margin-top: 148.55rpx;
  }

  .ml-84 {
    margin-left: 152.17rpx;
  }

  .mt-84 {
    margin-top: 152.17rpx;
  }

  .ml-86 {
    margin-left: 155.8rpx;
  }

  .mt-86 {
    margin-top: 155.8rpx;
  }

  .ml-88 {
    margin-left: 159.42rpx;
  }

  .mt-88 {
    margin-top: 159.42rpx;
  }

  .ml-90 {
    margin-left: 163.04rpx;
  }

  .mt-90 {
    margin-top: 163.04rpx;
  }

  .ml-92 {
    margin-left: 166.67rpx;
  }

  .mt-92 {
    margin-top: 166.67rpx;
  }

  .ml-94 {
    margin-left: 170.29rpx;
  }

  .mt-94 {
    margin-top: 170.29rpx;
  }

  .ml-96 {
    margin-left: 173.91rpx;
  }

  .mt-96 {
    margin-top: 173.91rpx;
  }

  .ml-98 {
    margin-left: 177.54rpx;
  }

  .mt-98 {
    margin-top: 177.54rpx;
  }

  .ml-100 {
    margin-left: 181.16rpx;
  }

  .mt-100 {
    margin-top: 181.16rpx;
  }
</style>