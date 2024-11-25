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
    
    </view>
   <view class="flex-col group mt-15">
      <view class="flex-row items-center self-stretch group_2">
        <view class="shrink-0 section_4"></view>
        <text class="font_4 text_10">任务信息</text>
        <view class="shrink-0 section_4 view"></view>
      </view>
      <view class="flex-col self-stretch group_10 view_2">
        <text class="self-start font_5">任务名称</text>
       <view class="flex-col justify-start items-start self-stretch text-wrapper mt-14">
         <input class="font_4 text_12" v-model="taskName" placeholder="请输入任务名称" />
       </view>

      </view>
      <view class="flex-col self-stretch group_10 view_3">
        <text class="self-start font_5 text_13">任务类型</text>
      <view class="flex-row self-stretch mt-17">
  <!-- 个人任务类型按钮 -->
 <view
   class="flex-col justify-start items-center text-wrapper_2"
   :class="{ active: taskType === '个人' }"
   @click="selectTaskType('个人')"
 >
   <text :class="{ 'font-bold': taskType === '个人', 'font': taskType !== '个人' }" class="text_14">个人</text>
 </view>
 
 <view
   class="flex-col justify-start items-center text-wrapper_3 ml-15"
   :class="{ active: taskType === '团队' }"
   @click="selectTaskType('团队')"
 >
   <text :class="{ 'font-bold': taskType === '团队', 'font': taskType !== '团队' }" class="text_15">团队</text>
 </view>

</view>

<view v-if="taskType === '团队'" class="flex-col self-stretch mt-14">
  <text class="self-start font_5">请输入群成员</text>
  <view class="flex-col justify-start items-start self-stretch text-wrapper mt-14">
    <view class="flex-row items-center">
      <input
        class="font_4 text_12 flex-grow"
        v-model="searchQuery"
        placeholder="请输入群成员"
        @input="searchMembers"
      />
      <button
        class="add-button ml-10"
        @click="addMember(searchQuery)"
        :disabled="!searchQuery"
      >
        添加
      </button>
    </view>
    <view v-if="searchResults.length > 0" class="search-results mt-10">
      <view
        v-for="(member, index) in searchResults"
        :key="index"
        class="search-item flex-row justify-between items-center"
      >
        <text :class="{ 'font-bold': member.username === searchQuery }">{{ member.username }}</text>
        <button class="remove-button" @click="removeMember(member.username)">移除</button>
      </view>
    </view>
    <view class="selected-members mt-10">
      <text>已添加成员:</text>
      <view v-for="member in selectedMembers" :key="member" class="selected-member">
        <text>{{ member }}</text>
      </view>
    </view>
  </view>
</view>

      </view>
     <view class="flex-row equal-division group_4">
       <view class="flex-col group_5 group_7">
         <text class="self-start font_5 text_1">开始时间</text>
        <!-- <view class="flex-row items-center self-stretch section_5 mt-14">
          <input type="datetime-local" v-model="startTime" class="font text_17" placeholder="选择开始时间" />
        </view> -->
<view class="flex-row items-center self-stretch section_5 mt-14">
  <picker mode="date" @change="onStartTimeChange" :value="startTime" class="font text_17">
    <view class="picker-placeholder">
      {{ startTime ? startTime : '选择开始时间' }}
    </view>
  </picker>
</view>

       </view>
       <view class="flex-col group_5 group_8">
         <text class="self-start font_5 text_16">截止时间</text>
         <view class="flex-row items-center self-stretch section_6 mt-15">
           <picker mode="date" @change="onEndTimeChange" :value="endTime" class="font text_18">
             <view class="picker-placeholder">
               {{ endTime ? endTime : '选择截止时间' }}
             </view>
           </picker>
         </view>
       </view>
     </view>
     
     <!-- 添加任务描述 -->
     <view class="flex-col self-stretch group_10 view_2 mt-14">
       <text class="self-start font_5">任务描述</text>
       <view class="flex-col justify-start items-start self-stretch text-wrapper mt-14">
         <input class="font_4 text_12" v-model="taskDescription" placeholder="请输入任务描述" />
       </view>
     </view>

      <view class="flex-col justify-start items-center self-stretch text-wrapper_4" @click="onClick_2">
        <text class="text_19">确认添加</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
 data() {
   return {
    taskName: '',
        startTime: '',
        endTime: '',
        taskType: '',
        taskDescription: '',
        showAdditionalInput: false,
        searchQuery: '', // 搜索框输入内容
        searchResults: [], // 搜索结果
        selectedMembers: [], // 已选择的群成员
        isSearching: false, // 标志是否正在搜索
   };
 },

 mounted() {
    const uid = uni.getStorageSync("uid");
    console.log("添加任务页面检测到的uid:", uid);
   
  },
	methods: {
		 selectTaskType(type) {
		     this.taskType = type; 
		     console.log('当前任务类型:', this.taskType);
		     if (type === '团队') {
		       this.showAdditionalInput = true;
		     } else {
		       this.showAdditionalInput = false;
		       this.groupMembers = this.taskType === '团队' ? '' : '无';
		     }
		   },
		   
		     async addMember(username) {
		       if (!username) {
		         uni.showToast({
		           title: '请输入成员名称',
		           icon: 'none',
		         });
		         return;
		       }
		       if (!this.selectedMembers.includes(username)) {
		         this.selectedMembers.push(username);
		         uni.showToast({
		           title: `${username} 添加成功`,
		           icon: 'success',
		         });
		       } else {
		         uni.showToast({
		           title: `${username} 已在列表中`,
		           icon: 'none',
		         });
		       }
		       this.searchQuery = '';
		       this.searchResults = [];
		     },

		 addMember(username) {
		   if (!username) {
		     uni.showToast({
		       title: '请输入成员名称',
		       icon: 'none',
		     });
		     return;
		   }
		   if (!this.selectedMembers.includes(username)) {
		     this.selectedMembers.push(username);
		     uni.showToast({
		       title: `${username} 添加成功`,
		       icon: 'success',
		     });
		   } else {
		     uni.showToast({
		       title: `${username} 已经在列表中`,
		       icon: 'none',
		     });
		   }
		   this.searchQuery = '';
		   this.searchResults = [];
		 },

		  onStartTimeChange(event) {
		    this.startTime = event.detail.value; // 更新开始时间
		    console.log('选择的开始时间:', this.startTime);
		  },
		  onEndTimeChange(event) {
		    this.endTime = event.detail.value; // 更新截止时间
		    console.log('选择的截止时间:', this.endTime);
		  },

		onClick() {
		  uni.navigateBack();
		  
		},
		onClick_1() {
		  uni.navigateTo({ url: '/pages/Preson/Preson' });
		},
	 async searchMembers() {
	    if (!this.searchQuery.trim()) {
	      this.searchResults = [];
	      return;
	    }
	    try {
	      const res = await uniCloud.callFunction({
	        name: 'addTeam', // 使用 addTeam 云函数的查询功能
	        data: { query: this.searchQuery.trim() },
	      });
	      if (res.result.code === 200) {
	        this.searchResults = res.result.users.map(user => ({
	          ...user,
	          isBold: user.username.includes(this.searchQuery.trim()),
	        }));
	      } else {
	        this.searchResults = [];
	        uni.showToast({
	          title: res.result.message || '未找到匹配用户',
	          icon: 'none',
	        });
	      }
	    } catch (error) {
	      console.error('搜索成员失败:', error);
	      uni.showToast({
	        title: '搜索失败，请稍后重试',
	        icon: 'none',
	      });
	    }
	  },
	  formatDate(date) {
	    const d = new Date(date);
	    const year = d.getFullYear();
	    const month = String(d.getMonth() + 1).padStart(2, '0');
	    const day = String(d.getDate()).padStart(2, '0');
	    return `${year}-${month}-${day}`;
	  },
	   async onClick_2() {
	      const uid = uni.getStorageSync("uid");
	      if (!uid) {
	        return uni.showToast({
	          title: '用户信息错误，请重新登录',
	          icon: 'none',
	        });
	      }
	      if (!this.taskName || !this.startTime || !this.endTime) {
	        return uni.showToast({
	          title: '请填写完整任务信息',
	          icon: 'none',
	        });
	      }
	  
	     const formattedStartTime = this.formatDate(this.startTime);
	       const formattedEndTime = this.formatDate(this.endTime);
	  
	      try {
	        let res;
	        if (this.taskType === '个人') {
	          // 调用 addTask 云函数
	          res = await uniCloud.callFunction({
	            name: 'addTask',
	            data: {
	              uid,
	              taskName: this.taskName,
	              startTime: this.startTime,
	              endTime: this.endTime,
	              taskType: this.taskType,
	              taskDescription: this.taskDescription,
	            },
	          });
	        } else if (this.taskType === '团队') {
	          // 调用 addTeam 云函数
	          res = await uniCloud.callFunction({
	            name: 'addTeam',
	            data: {
	              uid,
	              taskName: this.taskName,
	              startTime: this.startTime,
	              endTime: this.endTime,
	              taskType: this.taskType,
	              taskDescription: this.taskDescription,
	              groupMembers: this.selectedMembers,
	            },
	          });
	        }
	  
	        if (res.result.code === 200) {
	          uni.showToast({
	            title: '任务添加成功',
	            icon: 'success',
	          });
	           // 清空页面内容
	                    this.taskName = "";
	                    this.startTime = "";
	                    this.endTime = "";
	                    this.taskType = "";
	                    this.taskDescription = "";
	                    this.selectedMembers = [];
	                    this.showAdditionalInput = false;
	        // 跳转到主页
	                  setTimeout(() => {
	                    uni.switchTab({ url: "/pages/mean/mean" });
	                  }, 2000);
			
			} 
			
			else {
	          uni.showToast({
	            title: res.result.message || '任务添加失败',
	            icon: 'none',
	          });
	        }
	      } catch (error) {
	        console.error('调用云函数失败：', error);
	        uni.showToast({
	          title: '服务器错误',
	          icon: 'none',
	        });
	      }
	    },


},
  };
</script>

<style scoped lang="css">
  .mt-13 {
    margin-top: 23.55rpx;
  }
  /* 新增 font-bold 样式，用于加粗文字 */
 .font-bold {
   font-weight: bold;
   color: #000; /* 黑色字体 */
 }
 
 .add-button {
   padding: 10rpx 20rpx;
   background-color: #000;
   color: #fff;
   border-radius: 8rpx;
   font-size: 24rpx;
 }
 
 .add-button:disabled {
   background-color: #ccc;
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
  .group_9 {
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
    color: #ffffff;
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
  .group_10 {
    padding: 0 22.74rpx;
  }
  .view_2 {
    margin-top: 42.03rpx;
  }
  .font_5 {
    font-size: 28.99rpx;
    font-family: Poppins;
    line-height: 27.43rpx;
    font-weight: 700;
    color: #343434cc;
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
    background-color: #272727a1;
    border-radius: 14.49rpx;
    width: 144.93rpx;
    height: 50.72rpx;
    border: solid 1.45rpx #a5abad00;
  }
  .text_14 {
    line-height: 19.96rpx;
  }
  .text-wrapper_3 {
    padding: 12.37rpx 0 15.43rpx;
    background-color: #fcdb6666;
    border-radius: 14.49rpx;
    width: 144.93rpx;
    height: 50.72rpx;
    border: solid 1.45rpx #fcdb66;
  }
  .text_15 {
    color: #d7b53a;
    line-height: 20.02rpx;
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
  .group_7 {
    padding: 10rpx 20.74rpx 10rpx 22.74rpx;
  }
  .text_1 {
    line-height: 27.39rpx;
  }
  .section_5 {
    padding: 14.49rpx 18.51rpx 14.49rpx 21.52rpx;
    background-color: #c3e99c66;
    border-radius: 10.87rpx;
  }
  .text_17 {
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
  .text_16 {
    line-height: 26.7rpx;
    font-weight: unset;
  }
  .section_6 {
    padding: 14.49rpx 14.89rpx 14.49rpx 17.9rpx;
    background-color: #030b5e3b;
    border-radius: 10.87rpx;
  }
  .text_18 {
    line-height: 20.07rpx;
  }
  .text-wrapper_4 {
    margin: 381.3rpx 24.55rpx 0 24.55rpx;
    padding: 40.87rpx 0 41.07rpx;
    background-color: #2e3234;
    border-radius: 14.49rpx;
  }
  .text_19 {
    color: #ffffff;
    font-size: 28.99rpx;
    font-family: Poppins;
    line-height: 26.76rpx;
  }
</style>