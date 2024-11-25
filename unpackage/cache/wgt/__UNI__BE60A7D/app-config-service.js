
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Tip1/Tip1","pages/Tip2/Tip2","pages/login/login","pages/register/register","pages/Preson/Preson","pages/Doing/Doing","pages/Teamwork/Teamwork","pages/Solowork/Solowork","pages/Done/Done","pages/AddTeamwork/AddTeamwork","pages/AddSolowork/AddSolowork","pages/EditTeamwork/EditTeamwork","pages/EditSolowork/EditSolowork","pages/Data/Data","pages/mean/mean"],"tabBar":{"color":"#8A8A8A","selectedColor":"#2E3234","backgroundColor":"#FFFFFF","borderStyle":"black","iconSize":"28px","list":[{"pagePath":"pages/mean/mean","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/home-h.png","text":"主页"},{"pagePath":"pages/AddSolowork/AddSolowork","iconPath":"static/tabbar/add.png","selectedIconPath":"static/tabbar/add-h.png","text":"添加任务","textColor":"#F44336"},{"pagePath":"pages/Preson/Preson","iconPath":"static/tabbar/user.png","selectedIconPath":"static/tabbar/user-h.png","text":"个人中心"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Team_to_Do","compilerVersion":"4.29","entryPagePath":"pages/Tip1/Tip1","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Tip1/Tip1","meta":{"isQuit":true},"window":{"navigationBarTitleText":"提示页1","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/Tip2/Tip2","meta":{},"window":{"navigationBarTitleText":"提示页2","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录页","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"注册页","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/Preson/Preson","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/Doing/Doing","meta":{},"window":{"navigationBarTitleText":"进行中任务","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/Teamwork/Teamwork","meta":{},"window":{"navigationBarTitleText":"团队任务","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/Solowork/Solowork","meta":{},"window":{"navigationBarTitleText":"个人任务","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/Done/Done","meta":{},"window":{"navigationBarTitleText":"已完成任务","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/AddTeamwork/AddTeamwork","meta":{},"window":{"navigationBarTitleText":"添加团队任务","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/AddSolowork/AddSolowork","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"添加任务","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/EditTeamwork/EditTeamwork","meta":{},"window":{"navigationBarTitleText":"编辑团队任务","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/EditSolowork/EditSolowork","meta":{},"window":{"navigationBarTitleText":"编辑个人任务","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/Data/Data","meta":{},"window":{"navigationBarTitleText":"数据统计","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}},{"path":"/pages/mean/mean","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"主页","navigationBarBackgroundColor":"#2E3234","navigationBarTextStyle":"white"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});