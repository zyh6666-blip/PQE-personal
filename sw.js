/* ============================================================
   v1.5.4「焕新出发」发布补丁 · build 20261101-0315
   ① 版本号恢复 v1.5.4（浏览器标题）
   ② 公告：移除追猎旧公告（ann-153 / ann-1531），置顶 v1.5.4 简略公告
   ③ 邮箱：发放《v1.5.4「焕新出发」完整更新公告》长信
   说明：可重复加载（幂等），也可单独作为 patch-v154.js 引用
   ============================================================ */
(function(){
'use strict';

try{document.title='考研成长系统 v1.5.4';}catch(e){}
try{Array.prototype.forEach.call(document.querySelectorAll('span'),function(s){if((s.textContent||'').indexOf('UI-v2.4')>-1)s.textContent='1.5.4';});}catch(e){}

/* ---------- ② 公告栏 ---------- */
var ANN154='<div id="ann-154" style="padding:8px 10px;border-bottom:1px solid #f2f2f7;"><b style="color:#ff3b30;">v1.5.4「焕新出发」</b> <span style="font-size:11px;color:#8e8e93;">全站焕新 · 11.01</span><div style="font-size:12px;color:#6e6e73;line-height:1.6;margin-top:3px;">全局暗金科幻UI焕新：首页指挥甲板、乱斗暗金舞台、进化/天赋装配台/潜能时序重构、每日「作战日志」、邮件v2、杯赛v3、影子赛道v2、商店补给站；导航改为下拉甲板；追猎系统整体移除；活动页新增「宝藏」棋盘与S2冬蓝前瞻海报v3.1。详情见邮箱《v1.5.4「焕新出发」完整更新公告》。</div></div>';
/* 追猎系统已移除，旧公告注入器一并下架 */
try{window.__injectAnn153=function(){};window.__injectAnn1531=function(){};}catch(e){}
function __v154_cleanAnn(){
  try{
    var a=document.getElementById('ann-153');if(a)a.parentNode.removeChild(a);
    var b=document.getElementById('ann-1531');if(b)b.parentNode.removeChild(b);
  }catch(e){}
}
function __v154_injectAnn(){
  try{
    var el=document.getElementById('ann-list');
    if(!el||document.getElementById('ann-154'))return;
    el.insertAdjacentHTML('afterbegin',ANN154);
  }catch(e){}
}
__v154_cleanAnn();__v154_injectAnn();
try{
  if(typeof renderAnnouncements==='function'){
    var __ra154=renderAnnouncements;
    window.renderAnnouncements=function(){
      __ra154.apply(this,arguments);
      __v154_cleanAnn();
      __v154_injectAnn();
    };
  }
}catch(e){}

/* ---------- ③ 邮箱长信 ---------- */
window.ensureV154Mail=function(){
  try{
    state.mailbox=Array.isArray(state.mailbox)?state.mailbox:[];
    state.mailGranted=state.mailGranted||{};
    if(state.mailGranted['v154_update'])return;
    state.mailGranted['v154_update']=true;
    if(!state.mailbox.some(function(m){return m.id==='v154_update';})){
      state.mailbox.push({
        id:'v154_update',
        title:'v1.5.4「焕新出发」完整更新公告',
        body:'各位考生：<br><br>久等了。v1.5.4「焕新出发」是一次以「视觉与体验焕新」为主轴的大版本：全站界面统一升级为暗金科幻风格（UI-v2.4），核心页面全部做了信息架构重排。以下为详细说明。<br><br><b>一、全局焕新 · 暗金科幻 UI</b><br>· 顶栏：暗色玻璃质感 + 星空粒子背景 + 金色等级进度条；<br>· 导航：三排平铺按钮改为「下拉甲板」——轨道日常 / 特殊玩法 / 竞技 / 特殊任务 / 活动 五组收纳，首页、邮件、成就独立直达；<br>· 首页「指挥甲板」：军衔与积分/代币/EP数据条、今日玩法主角位、全功能瓷砖甲板、玩法解锁进度、公告与数据管理分区呈现。<br><br><b>二、每日登记「作战日志」</b><br>· 重构为五大分区面板：今日玩法 / 增益矩阵 / 今日任务 / 打卡与补给 / 结算；<br>· 任务卡三态流转：规划态（可编辑）→ 锁定态 → 完成态（置灰折叠），锁定后显示专属提示条；<br>· 任务卡内嵌完成进度条（四档变色，封印无双补满段为金色），结算账单弹窗重排版。<br><br><b>三、玩法页重设计</b><br>· 乱斗：暗金舞台 + 抽取动画，未确认 / 已确认（SEALED 封条）双状态，属性图鉴重做；<br>· 潜能「时序构筑」：9:00 / 14:00 / 18:00 时段轨道四栏 + 中央召唤舞台，候选卡入场动画、每日 3 次刷新；<br>· 天赋「装配台」：费用仪表绿 / 金 / 红三态（超载红色告警呼吸）、槽位亮灯与装卸动效；<br>· 进化：等级阶梯时间线、增益卡片、攻防图鉴表格化。<br><br><b>四、系统页焕新</b><br>· 邮件 v2：全部 / 未读 / 附件 / 收藏筛选，一键领取、一键已读、一键删除；<br>· 杯赛 v3：左侧轨道 + 右侧面板布局，能量补给入口移至页头，赛后一键全领保留；<br>· 影子竞技「影子赛道 v2」：段位英雄区、候选对手卡、全国榜前 10 直览；<br>· 商店「补给站」/ 仓库 / 升级页：统一暗金风格，限购售罄态与动效补齐。<br><br><b>五、追猎系统移除</b><br>悬赏板与悬赏令已整体下架（商店不再出售），相关旧公告已清理；背包中的历史遗留道具不受影响。<br><br><b>六、活动更新</b><br>· 全新「宝藏」活动页：骰子棋盘 + 幸运转盘，积攒宝藏积分冲击终极大奖；<br>· S2 冬蓝赛季前瞻海报 v3.1：碎片收集 + 翻转动效。<br><br>随信发放 🎟️属性抽取券×1、🎫属性变更券×1、🌟天赋额外抽取×1，请查收。<br><br>焕新出发。愿并肩之处，便有光。',
        items:{draw_ticket:1,change_ticket:1,talent_extra:1},
        claimed:false,read:false,createdAt:Date.now()
      });
    }
    saveState();
  }catch(e){}
};
try{window.ensureV154Mail();}catch(e){}
try{
  if(typeof renderMailPage==='function'){
    var __rm154=renderMailPage;
    window.renderMailPage=function(){
      try{window.ensureV154Mail();}catch(e){}
      return __rm154.apply(this,arguments);
    };
  }
}catch(e){}
try{if(typeof updateMailBadge==='function')updateMailBadge();}catch(e){}

})();
