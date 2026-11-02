/* ============================================================
   v1.5.4「焕新出发」发布补丁 · build 20261101-0315
   ① 版本号恢复 v1.5.4（浏览器标题）
   ② 公告：移除追猎旧公告（ann-153 / ann-1531），置顶 v1.5.4 简略公告
   ③ 邮箱：发放《v1.5.4「焕新出发」完整更新公告》长信
   说明：可重复加载（幂等），也可单独作为 patch-v154.js 引用
   ============================================================ */
(function(){
'use strict';

try{document.title='考研成长系统 v1.5.4.1';}catch(e){}
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
/* ===== v1.5.4-hotfix1：弹窗防卡死（全站通用）===== */
(function(){
'use strict';
if(window.__modalGuard154)return;
window.__modalGuard154=true;
function __mgClose(){
  try{
    var mo=document.getElementById('modal-overlay');
    if(mo){mo.classList.remove('m-open');mo.style.display='none';}
  }catch(e){}
}
/* 1) 点遮罩空白处关闭（点在对话框上不关） */
document.addEventListener('click',function(e){
  try{
    var mo=document.getElementById('modal-overlay');
    if(!mo||getComputedStyle(mo).display==='none')return;
    if(e.target===mo)__mgClose();
  }catch(err){}
},true);
/* 2) ESC 关闭 */
document.addEventListener('keydown',function(e){if(e.key==='Escape')__mgClose();});
/* 3) 弹窗打开后强制补一个右上角 ✕ */
try{
  if(typeof showModal==='function'&&!showModal.__mgWrapped){
    var _sm=showModal;
    var _w=function(){
      _sm.apply(this,arguments);
      try{
        var mo=document.getElementById('modal-overlay');
        var dlg=mo&&mo.firstElementChild;
        if(dlg&&!dlg.querySelector('.mg-x')){
          var x=document.createElement('button');
          x.className='mg-x';x.textContent='✕';
          x.setAttribute('style','position:absolute;top:10px;right:12px;width:32px;height:32px;border-radius:50%;border:1px solid #d1d1d6;background:#fff;color:#6e6e73;font-size:14px;cursor:pointer;z-index:5;line-height:1;padding:0;');
          x.onclick=function(ev){ev.stopPropagation();__mgClose();};
          if(getComputedStyle(dlg).position==='static')dlg.style.position='relative';
          dlg.appendChild(x);
        }
      }catch(err){}
    };
    _w.__mgWrapped=true;window.showModal=_w;
  }
}catch(e){}
/* 4) closeModal 兜底：确保 display 归位 */
try{
  if(typeof closeModal==='function'&&!closeModal.__mgWrapped){
    var _cm=closeModal;
    var _c=function(){_cm.apply(this,arguments);__mgClose();};
    _c.__mgWrapped=true;window.closeModal=_c;
  }
}catch(e){}
})();
/* ===== v1.5.4-hotfix2：竞技页段位页签切换失效 ===== */
(function(){
'use strict';
if(window.__arenaDivTabFix154)return;
window.__arenaDivTabFix154=true;
window.arenaSetDiv=function(d){
  try{window.__arDiv=d;}catch(e){}
  try{if(typeof renderArenaUI==='function')renderArenaUI();}catch(e){}
  try{
    var rw=document.querySelector('#page-race .rc-rw');
    if(rw&&typeof arenaRewardsHTML==='function'){
      var h=arenaRewardsHTML();
      if(h&&h.indexOf('rc-divtab')>-1){var tmp=document.createElement('div');tmp.innerHTML=h;rw.replaceWith(tmp.firstElementChild);}
    }
  }catch(e){}
  try{
    document.querySelectorAll('#page-race .rc-divtab').forEach(function(t){
      var on=(t.getAttribute('onclick')||'').indexOf("'"+d+"'")>-1;
      t.classList.toggle('on',!!on);
    });
  }catch(e){}
};
})();
/* ===== v1.5.4-hotfix3：杯赛 cvGuard 未定义 + 布局边框溢出加固 ===== */
(function(){
'use strict';
if(window.__cupFix154)return;
window.__cupFix154=true;
/* 1) cvGuard 全局化：原实现闭包内私有，卡片 onclick 调不到 */
window.cvGuard=function(){
  var msg='赛事进行中 · 结束后黄卡统一领取';
  try{
    var box=document.getElementById('notif-container');
    if(box){
      var c=document.createElement('div');
      c.className='notif-card';c.style.borderLeftColor='#e8a33d';
      c.innerHTML='<div class="notif-title">🔒 杯赛</div><div class="notif-body">'+msg+'</div>';
      box.appendChild(c);
      requestAnimationFrame(function(){c.classList.add('show');});
      setTimeout(function(){c.classList.add('hide');setTimeout(function(){c.remove();},300);},4000);
      return;
    }
  }catch(e){}
  try{alert('🔒 '+msg);}catch(e){}
};
/* 2) 布局加固：网格列防撑破 + 轨道按钮限宽换行 + 页头按钮可换行 */
var st=document.createElement('style');
st.textContent=[
  '.cv3-layout{grid-template-columns:minmax(0,185px) minmax(0,1fr)}',
  '#cupV3-rail,.cv3-panel,#cupV3-pending{min-width:0}',
  '#cupV3-rail{flex-wrap:wrap}',
  '.cv3-rail-btn{max-width:100%;min-width:0;width:100%}',
  '#page-cup header .cv3-daybtn,#page-cup header .cv3-energyPill{white-space:normal}'
].join('\n');
document.head.appendChild(st);
})();
/* ===== v1.5.4-patch4：每日登记任务卡 v2（按 demo 设计落地）===== */
(function(){
'use strict';
if(window.__dailyTaskV2)return;
window.__dailyTaskV2=true;

var __esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');};

window.taskToggleMore=function(ev,i){
  if(ev){var t=ev.target;if(t&&(t.tagName==='INPUT'||t.tagName==='BUTTON'||(t.closest&&t.closest('input,button'))))return;}
  var m=document.getElementById('tmore'+i);if(!m)return;
  m.classList.toggle('open');
  var c=m.closest('.task-card');if(c)c.classList.toggle('open');
};

window.__finClick=function(i){window.__justFinished=i;try{completeTask(i);}catch(e){}};
var __rtV2Mine=function(){
  checkLongMigration();
  normalizeTasks();
  var container=document.getElementById('task-list');
  var addBtn=document.getElementById('add-task-btn');
  var confirmBtn=document.getElementById('confirm-task-btn');
  var submitBtn=document.getElementById('submit-daily-btn');
  if(!container)return;
  var html='';
  var baseSum=0,qSum=0;
  var locked=state.tasksLocked;

  var badgeCommon=function(t){
    return (t.pinned?' <span class="t-badge tb-pin">'+(hasPassive(13)?'📌置顶+15%':'📌置顶')+'</span>':'')
      +(t.lucky?' <span class="t-badge tb-lucky">🍀幸运</span>':'')
      +(t.evoReprieve?' <span class="t-badge tb-grey">⚖️缓刑×'+(t.penBoost||1)+'</span>':'')
      +(t.enhanced?' <span class="t-badge tb-purple">⚡强化</span>':'')
      +(t.adjacencyBonus?' <span class="t-badge tb-orange">💥剑气+'+Math.round(t.adjacencyBonus*100)+'%</span>':'')
      +(t.fixedByPassive11?' <span class="t-badge tb-green">🛠修正补足</span>':'')
      +(t.shieldBoosted?' <span class="t-badge tb-blue">⛨护盾+'+(t.shieldBoostAmount||0)+'EP</span>':'');
  };
  var evalPanelHTML=function(t,i){
    var num=function(k){return (t.qs&&typeof t.qs[k]==='number')?t.qs[k]:60;};
    var qNow=(typeof computeQualityEp==='function')?computeQualityEp(t):(parseInt(t.qualityEp)||0);
    var wNow=(typeof qualityAvg==='function')?Math.round(qualityAvg(t)):60;
    return '<div class="t-toggle" onclick="taskToggleMore(event,'+i+')"><span>📊 收起/展开评价与进度</span><span class="t-chev">▾</span></div>'
      +'<div class="t-more open" id="tmore'+i+'"><div class="t-eval">'
      +'<div class="t-eval-title">📋 任务状态评价 <span>0-100 · 默认60 · 权重：正确率60% 专注度25% 用时8% 基本状态7%</span></div>'
      +'<div class="t-eval-body"><div class="t-eval-inputs">'
      +'<span>正确率</span><input type="number" min="0" max="100" value="'+num('acc')+'" oninput="updateQDim(\'today\','+i+',\'acc\',this.value)">'
      +'<span>专注度</span><input type="number" min="0" max="100" value="'+num('focus')+'" oninput="updateQDim(\'today\','+i+',\'focus\',this.value)">'
      +'<span>用时</span><input type="number" min="0" max="100" value="'+num('time')+'" oninput="updateQDim(\'today\','+i+',\'time\',this.value)">'
      +'<span>基本状态</span><input type="number" min="0" max="100" value="'+num('state')+'" oninput="updateQDim(\'today\','+i+',\'state\',this.value)">'
      +'</div><div class="t-eval-out" id="qres-today-'+i+'">→ 质量EP <b>'+qNow+'</b>（'+wNow+'%）</div>'
      +'</div></div></div>';
  };
  var progressHTML=function(t,i){
    var _mb=getTag(t.tagId,t);
    var _mp=(_mb&&_mb.maxEp>0)?Math.min(100,Math.round(((parseInt(t.baseEp)||0)+(parseInt(t.qualityEp)||0))/_mb.maxEp*100)):null;
    if(_mp===null)return '';
    var _seal=(typeof t.sealBasePct==='number');
    var _bg=_seal?('linear-gradient(90deg,#34c759 0%,#34c759 '+t.sealBasePct+'%,#ffd60a '+t.sealBasePct+'%,#ffd60a 100%)'):epPctColor(_mp);
    var _fg=_seal?'#d9a400':epPctColor(_mp);
    var _done=(t.completed&&t.baseEp!=='');var _anim=_done&&window.__justFinished===i;
    return '<div class="t-bar-row"><span class="t-bar-label">'+(_seal?'🛡️封印':'占上限')+'</span>'
      +'<div class="t-bar"><i id="tbar'+i+'"'+(_anim?(' data-fill="'+_mp+'"'):'')+' style="width:'+(_anim?'0%':_mp+'%')+';background:'+_bg+';"></i></div>'
      +'<span class="t-pct" id="tpct'+i+'" style="color:'+_fg+';"'+(_anim?' data-target="'+_mp+'"':'')+'>'+(_anim?'0%':_mp+'%')+'</span></div>';
  };
  var sumHTML=function(t,i){
    var own=(parseInt(t.baseEp)||0)+(parseInt(t.qualityEp)||0);
    return '<div class="t-ep-sum" id="tsum'+i+'">完成 '+(t.baseEp||0)+' + 质量 '+(t.qualityEp||0)+' = '+own+' EP'+(t.completed&&t.baseEp!==''?' · ✓ 已完成':'')+'</div>';
  };
  var epRowHTML=function(t,i){
    var req=requiredBaseOf(t);
    return '<div class="t-row"><div class="t-ep"><input type="number" value="'+(t.baseEp||'')+'" onchange="updateTask('+i+',\'baseEp\',this.value)" placeholder="完成EP（须为 '+req+'）"><div class="t-ph">须为 '+req+' · 填错无法提交</div></div>'
      +'<button class="t-fin" onclick="__finClick('+i+')">完成</button></div>'
      +((hasPotential(9)||hasPotential(31))&&!t.completed?'<div class="t-mini">'
        +(hasPotential(9)?'<button class="t-mini-btn" onclick="togglePotentialWanted('+i+')">'+(t.wanted?'取消悬赏':'🎯标记悬赏')+'</button>':'')
        +(hasPotential(31)?'<button class="t-mini-btn" onclick="setTaskTune('+i+')">'+(state.fpMarks&&state.fpMarks.tagId===t.tagId?'🎨特调中':'🎨设为特调')+'</button>':'')
        +'</div>':'');
  };

  state.todayTasks.forEach(function(t,i){
    var b=parseInt(t.baseEp)||0;
    var q=parseInt(t.qualityEp)||0;
    baseSum+=b;qSum+=q;
    var tag=getTag(t.tagId,t);
    var tc=tag?getTagColor(tag.maxEp):'#8d7c5f';
    var _bt=tag?_origGetTag(t.tagId):null;
    var _chg=state.todayMode==='evolve'&&_bt&&(tag.maxEp!==_bt.maxEp||tag.pen!==(typeof _bt.pen==='number'?_bt.pen:Math.round(getPenaltyRate(_bt.maxEp)*100)));
    var maxEpText='';
    if(tag){maxEpText=(tag.pen?('max '+tag.maxEp+'EP · -'+tag.pen+'%'):('max '+tag.maxEp+'EP'));if(_chg)maxEpText='<span style="color:#d9832a;font-weight:700;">'+maxEpText+'</span>';}
    var _spOn=tag&&(((state.tagUp||{})[tag.id]||{}).sp);
    var tagChip=tag?(_spOn
      ?'<span class="t-tag sp">★ '+tag.path.join(' · ')+' · SP · '+maxEpText+'</span>'
      :'<span class="t-tag" style="color:'+tc+';border-color:'+tc+'66;background:'+tc+'12;">'+tag.path.join(' · ')+' · '+maxEpText+'</span>')
      :'<span class="t-tag" style="color:#8d7c5f;">未分类</span>';
    var _mk=state.exState&&state.exState.marksPrev?state.exState.marksPrev[t.tagId]:null;
    var _mkChip=_mk?(_mk.type==='up'
      ?' <span class="t-badge tb-green" title="追踪标记·伤害加深：该标签任务完成+10%EP">🏷加深+10%</span>'
      :' <span class="t-badge tb-blue" title="追踪标记·伤害降低：该标签任务扣减-10%">🏷降低-10%</span>'):'';
    var fusionAttr=(state.fusionAssign&&t.tagId&&state.fusionAssign[t.tagId])?BRAWLS.find(function(x){return x.id===state.fusionAssign[t.tagId];}):null;
    var infectInfo=t.infected?(function(){var sl=getInfectionSlotInfo(t.infectSlot);return ' <span class="t-badge" style="color:#ff8a80;border-color:rgba(255,59,48,.5);" title="感染任务必须在该时段完成">☣️感染·'+sl.name+' '+sl.range+'</span>';})():'';
    var extras=_mkChip+(_bt&&isEliteTagId(t.tagId)?' <b class="t-elite">🎖ELITE</b>':'')+infectInfo
      +(getCheckinStreakBadge(t)?' '+getCheckinStreakBadge(t):'')
      +(fusionAttr?' <span class="t-badge tb-purple" title="'+__esc(fusionAttr.effect)+'">🎯'+fusionAttr.name+'</span>':'');
    var spClass=_spOn?' task-sp-'+getSPCardTheme(tag):'';

    /* ---- 长期/周期副本卡 ---- */
    if(t.fromLong||t.fromCycle){
      var cc=t.fromLong?'#007aff':'#00b578';
      var clabel=t.fromLong?'📥 长期 · 🔒':'🔄 周期 · 🔒';
      html+='<div class="task-card tc-copy'+(t.infected?' task-infected':'')+spClass+((t.completed&&t.baseEp!=='')?(window.__justFinished===i?' done-enter':' done'):'')+'" style="--tc:'+(t.infected?'#ff3b30':(_spOn?'#8b5cf6':cc))+';">';
      html+='<div class="t-top"><span class="t-grip" style="cursor:default;">⠿</span><span class="t-name">'+__esc(t.name||'任务')+'</span>'+badgeCommon(t)
        +' <span class="t-badge" style="color:'+cc+';border-color:'+cc+'66;">'+clabel+'</span>'
        +potentialTaskBadges(t)+evolveTaskBadges(t)+'</div>';
      html+='<div class="t-top2">'+tagChip+extras+'</div>';
      if(!t.completed&&locked){html+=epRowHTML(t,i)+evalPanelHTML(t,i);}
      else{html+='<div class="t-done-row"><span class="t-done-tag">✓ 已完成</span>'+(hasPotential(6)&&!t.chapterClosed?'<button class="t-mini-btn" onclick="closeChapterTask('+i+')">🏁 收官</button>':(t.chapterClosed?'<span class="t-badge tb-blue">🏁已收官</span>':''))+'</div>';}
      html+=progressHTML(t,i)+sumHTML(t,i);
      html+='</div>';
      return;
    }

    /* ---- 普通任务卡 ---- */
    html+='<div ondragover="taskDragOver(event)" ondrop="taskDrop(event,'+i+')" ondragleave="taskDragLeave(event)" ondragenter="taskDragEnter(event)" class="task-card'
      +(t.pinned?' task-pinned':'')+(t.lucky?' task-lucky':'')+(t.infected?' task-infected':'')+spClass
      +((t.completed&&t.baseEp!=='')?(window.__justFinished===i?' done-enter':' done'):'')+'" style="--tc:'+(t.infected?'#ff3b30':(t.lucky?'#ff2d95':(_spOn?'#8b5cf6':tc)))+';" data-i="'+i+'">';

    if(!locked&&!(t.completed&&t.baseEp!=='')&&!(t.pinned&&t.pinConfirmed&&hasPassive(13))){
      /* 规划态 */
      html+='<div class="t-top"><span draggable="true" ondragstart="taskDragStart(event,'+i+')" class="t-grip" title="拖动调整顺序">⠿</span>'+badgeCommon(t)
        +'<input class="t-name-input" type="text" value="'+__esc(t.name)+'" onchange="updateTask('+i+',\'name\',this.value)" placeholder="任务'+(i+1)+'"'+(t.lucky?' style="color:#ff7ec2;"':'')+'>'
        +tagCascadeHTML(i)
        +'<button class="t-icon" onclick="pinTask('+i+')" title="置顶">⬆</button>'
        +'<button class="t-icon del" onclick="removeTask('+i+')" title="删除">×</button></div>';
      html+='<div class="t-top2">'+tagChip+extras+'</div>';
    }else{
      /* 锁定/完成态 */
      var tmNow=calcTalentMods();
      var talChips=talentTagsForTask(t,tmNow);
      var tgTag=getTag(t.tagId),tgS=tSubj(tgTag),tgTy=tType(tgTag);
      var talBtn='';
      if(!t.completed&&((tmNow[19]||tmNow[20])&&tgS==='zz'&&(tgTy==='st'||tgTy==='mk'))){var lbl={'':'选择题型','subj':'✏️主观','obj':'⭕客观'}[t.talSel||''];talBtn=' <span class="t-badge tb-blue" style="cursor:pointer;" onclick="cycleTalSel('+i+',\'zz\')">'+lbl+'</span>';}
      if(!t.completed&&((tmNow[21]||tmNow[22])&&tgS==='yze'&&(tgTy==='st'||tgTy==='mk'))){var lbl2={'':'选择文体','noessay':'📄无作文','essay':'✒️作文'}[t.talSel||''];talBtn=' <span class="t-badge tb-blue" style="cursor:pointer;" onclick="cycleTalSel('+i+',\'yze\')">'+lbl2+'</span>';}
      var gunN=(calcBrawlMods().hasGun)?state.todayTasks.filter(function(x){return x.tagId===t.tagId;}).length:0;
      html+='<div class="t-top"><span '+((t.completed)?'':'draggable="true" ondragstart="taskDragStart(event,'+i+')" title="拖动调整顺序"')+' class="t-grip">⠿</span>'
        +'<span class="t-name'+(t.infected?' infected':(t.lucky?' lucky':''))+'">'+__esc(t.name||('任务'+(i+1)))+'</span>'
        +badgeCommon(t)+potentialTaskBadges(t)+evolveTaskBadges(t)+talBtn+talChips+'</div>';
      html+='<div class="t-top2"><button class="t-icon" onclick="pinTask('+i+')" title="置顶/取消置顶">⬆</button>'+tagChip+extras
        +(gunN>0?' <span class="t-badge tb-blue" title="同标签任务数（枪械协同）">×'+gunN+'</span>':'')+'</div>';
    }

    if(!t.completed&&locked){html+=epRowHTML(t,i)+evalPanelHTML(t,i);}
    else{html+='<div class="t-done-row"><span class="t-done-tag">✓ 已完成</span>'+(hasPotential(6)&&!t.chapterClosed?'<button class="t-mini-btn" onclick="closeChapterTask('+i+')">🏁 收官</button>':(t.chapterClosed?'<span class="t-badge tb-blue">🏁已收官</span>':''))+'</div>';}
    html+=progressHTML(t,i)+sumHTML(t,i);
    html+='</div>';
  });

  var __ls=document.getElementById('daily-lock-strip');
  if(__ls)__ls.innerHTML=(!locked)?'<div class="dl-lock-strip"><span>🔒 任务规划中 · 锁定任务后方可填写完成EP与质量评价</span></div>':'';
  container.innerHTML=html||'<div style="text-align:center;color:#8e8e93;padding:20px;">暂无任务，点击添加</div>';
  try{
    var oldBar=document.getElementById('lockedit-bar');if(oldBar)oldBar.remove();
    if(typeof canEditLockedTasks==='function'&&canEditLockedTasks()&&container.parentNode){
      var info=todayEditInfo();
      var bar=document.createElement('div');bar.id='lockedit-bar';
      bar.setAttribute('style','margin:0 0 10px;padding:9px 12px;border:1px dashed rgba(232,163,61,.4);border-radius:11px;background:rgba(240,179,92,.05);font-size:11.5px;color:#c9b791;line-height:1.6;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;');
      bar.innerHTML='<span>🔧 任务已锁定 · 今日还可修改 <b style="color:#ffb340;">'+info.total+'</b> 次'+(info.pot>0?'（含免罚 '+info.pot+' 次）':'')+(info.dailyOK?'（每日1次 · 限18:00前）':'')+'</span><button class="t-mini-btn" onclick="openTaskEditModal()">✏️ 修改任务</button>';
      container.parentNode.insertBefore(bar,container);
    }
  }catch(e){}
  document.getElementById('task-count').textContent=state.todayTasks.length;
  document.getElementById('task-base-ep').textContent=baseSum;
  document.getElementById('task-quality-ep').textContent=qSum;
  document.getElementById('task-total-ep').textContent=baseSum+qSum;
  if(addBtn){addBtn.disabled=locked||state.todayTasks.length>=15;addBtn.textContent=state.todayTasks.length>=15?'已达上限 (15/15)':'+ 添加任务 ('+state.todayTasks.length+'/15)';}
  if(confirmBtn){
    if(locked){confirmBtn.disabled=false;confirmBtn.textContent='🔓 解锁今日任务';confirmBtn.style.opacity='1';confirmBtn.onclick=unlockTasks;}
    else{confirmBtn.onclick=confirmTasks;confirmBtn.disabled=state.todayTasks.length===0;confirmBtn.textContent='🔒 确认今日任务';confirmBtn.style.opacity='1';}
  }
  if(submitBtn){submitBtn.disabled=false;submitBtn.style.opacity=locked?'1':'0.65';submitBtn.title=locked?'结算今日任务':'请先确认今日任务后再结算';}
  updatePointsPreview();renderDailySkills();renderDailyAttrs();renderHome();renderTalentBars();renderEvolveBars();
  setTimeout(function(){
    container.querySelectorAll('.t-pct[data-target]').forEach(function(el){
      var target=parseInt(el.getAttribute('data-target'))||0;var cur=0;
      var iv=setInterval(function(){cur=Math.min(target,cur+2);el.textContent=cur+'%';if(cur>=target)clearInterval(iv);},28);
    });
    container.querySelectorAll('.task-card.done-enter').forEach(function(c){
      requestAnimationFrame(function(){requestAnimationFrame(function(){
        c.classList.add('done');c.classList.remove('done-enter');
        var bar=c.querySelector('i[data-fill]');
        if(bar)bar.style.width=bar.getAttribute('data-fill')+'%';
      });});
    });
    window.__justFinished=null;
  },80);
};

/* CSS：任务卡 v2 */
var st=document.createElement('style');
st.textContent=[
'#page-daily .t-top{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:8px}',
'#page-daily .t-grip{color:#756445;font-size:13px;letter-spacing:2px;cursor:grab;user-select:none;flex:0 0 auto}',
'#page-daily .t-name{font-size:14px;font-weight:700;color:#f0e6cf;overflow-wrap:anywhere}',
'#page-daily .task-card.done .t-name{color:#b9a888}',
'#page-daily .t-name.lucky{color:#ff7ec2}',
'#page-daily .t-name.infected{color:#ff8a80;font-weight:800}',
'#page-daily .t-name-input{flex:1;min-width:110px;padding:8px 10px;border:1px solid #4a3b20;border-radius:8px;background:#1e180e;color:#f0e6cf;font-size:13px}',
'#page-daily .t-icon{border:1px solid transparent;background:transparent;color:#7cc4ff;font-size:14px;cursor:pointer;line-height:1;padding:5px 7px;border-radius:8px;flex:0 0 auto}',
'#page-daily .t-icon:hover{border-color:#4a3b22;background:rgba(240,179,92,.06)}',
'#page-daily .t-icon.del{color:#ff8a80;font-size:17px}',
'#page-daily .t-badge{display:inline-flex;align-items:center;min-height:19px;padding:1px 7px;border:1px solid currentColor;border-radius:999px;font-family:var(--mono);font-size:9px;line-height:1.35;white-space:nowrap;color:#c9b791}',
'#page-daily .t-badge.tb-lucky{color:#ff7ec2;border-color:rgba(255,45,149,.5)}',
'#page-daily .t-badge.tb-pin{color:#ffb340;border-color:rgba(255,149,0,.5)}',
'#page-daily .t-badge.tb-blue{color:#7cc4ff;border-color:rgba(0,122,255,.4)}',
'#page-daily .t-badge.tb-green{color:#7ee2a0;border-color:rgba(52,199,89,.4)}',
'#page-daily .t-badge.tb-purple{color:#e2c4ff;border-color:rgba(175,82,222,.45)}',
'#page-daily .t-badge.tb-orange{color:#ffd60a;border-color:rgba(255,214,10,.4)}',
'#page-daily .t-badge.tb-grey{color:#a98d5f;border-color:#4a3b22}',
'#page-daily .t-elite{color:#b5772a;font-size:10px;font-weight:700}',
'#page-daily .t-tag{font-family:var(--mono);font-size:10px;padding:2px 8px;border-radius:6px;border:1px solid #4a3b22;white-space:nowrap}',
'#page-daily .t-tag.sp{background:#090704;color:#ffd98a;border-color:#8b5cf6}',
'#page-daily .t-top2{display:flex;align-items:center;justify-content:flex-end;gap:5px;flex-wrap:wrap;margin-bottom:8px}',
'#page-daily .t-row{display:flex;gap:8px;align-items:flex-start}',
'#page-daily .t-ep{flex:1;min-width:0}',
'#page-daily .t-ep input{width:100%;padding:9px 10px;border:1px solid #4a3b20;border-radius:8px;background:#1e180e;color:#f0e6cf;font-size:13px;font-family:var(--mono)}',
'#page-daily .t-ep input:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px rgba(232,163,61,.15)}',
'#page-daily .t-ph{font-size:8.5px;color:#8d7c5f;font-family:var(--mono);margin-top:3px}',
'#page-daily .t-fin{flex-shrink:0;padding:9px 18px;border:0;border-radius:10px;font-size:12.5px;font-weight:800;letter-spacing:.08em;cursor:pointer;background:linear-gradient(135deg,var(--gold-l),var(--gold-d));color:#2a1c08;box-shadow:0 3px 12px rgba(217,131,42,.35);transition:filter .2s,transform .15s}',
'#page-daily .t-fin:hover{filter:brightness(1.08)}',
'#page-daily .t-fin:active{transform:scale(.96)}',
'#page-daily .t-mini{display:flex;gap:7px;flex-wrap:wrap;margin-top:8px}',
'#page-daily .t-mini-btn{padding:5px 11px;border:1px solid #4a3b22;border-radius:9px;background:rgba(20,15,9,.5);color:#c9b791;font-size:10px;cursor:pointer}',
'#page-daily .t-mini-btn:hover{border-color:var(--gold);color:#f0d9a2}',
'#page-daily .t-done-row{display:flex;align-items:center;gap:8px}',
'#page-daily .t-done-tag{font-size:12px;color:#7ee2a0;font-weight:600}',
'#page-daily .t-toggle{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:9px;padding:7px 10px;border:1px solid rgba(232,163,61,.18);border-radius:9px;background:rgba(20,15,9,.4);cursor:pointer;font-size:10px;color:#a98d5f;font-family:var(--mono);letter-spacing:.06em;transition:border-color .2s,color .2s}',
'#page-daily .t-toggle:hover{border-color:rgba(240,179,92,.5);color:#c9a86a}',
'#page-daily .t-chev{transition:transform .35s}',
'#page-daily .task-card.open .t-chev{transform:rotate(180deg)}',
'#page-daily .t-more{max-height:0;overflow:hidden;opacity:0;transition:max-height .45s cubic-bezier(.2,.8,.2,1),opacity .3s}',
'#page-daily .t-more.open{max-height:720px;opacity:1}',
'#page-daily .t-eval{margin-top:9px;border:1.5px dashed #4a3b22;border-radius:11px;padding:10px 12px;background:rgba(20,15,9,.45)}',
'#page-daily .t-eval-title{font-size:11px;color:#c9b791;font-weight:600}',
'#page-daily .t-eval-title span{font-size:9.5px;color:#8d7c5f;font-weight:400;font-family:var(--mono)}',
'#page-daily .t-eval-body{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap}',
'#page-daily .t-eval-inputs{display:flex;align-items:center;gap:6px;flex-wrap:wrap}',
'#page-daily .t-eval-inputs span{font-size:11px;color:#8d7c5f}',
'#page-daily .t-eval-inputs input{width:56px;padding:7px 8px;border:1px solid #4a3b20;border-radius:8px;background:#1e180e;color:#f0e6cf;font-size:13px;font-family:var(--mono);text-align:center}',
'#page-daily .t-eval-inputs input:focus{outline:none;border-color:var(--gold)}',
'#page-daily .t-eval-out{font-size:11px;color:#8d7c5f;font-family:var(--mono);white-space:nowrap}',
'#page-daily .t-eval-out b{color:#f0d9a2;font-size:14px}',
'#page-daily .t-bar-row{display:flex;align-items:center;gap:10px;margin-top:10px}',
'#page-daily .t-bar-label{flex:0 0 auto;font-size:10.5px;color:#8d7c5f;white-space:nowrap}',
'#page-daily .t-bar{flex:1;height:8px;background:#241c10;border-radius:4px;overflow:hidden}',
'#page-daily .t-bar i{display:block;height:100%;border-radius:4px;transition:width 1.05s cubic-bezier(.25,.9,.3,1),background .4s}',
'#page-daily .t-pct{width:52px;text-align:right;font-family:var(--mono);font-size:12px;font-weight:700}',
'#page-daily .t-ep-sum{font-size:10px;color:#8d7c5f;font-family:var(--mono);margin-top:7px}',
'#page-daily #task-list .task-card.done{filter:grayscale(.55) brightness(.62);opacity:.78}',
'#page-daily #task-list .task-card.done .t-row,#page-daily #task-list .task-card.done .t-toggle,#page-daily #task-list .task-card.done .t-more,#page-daily #task-list .task-card.done .t-mini{max-height:0!important;opacity:0;margin-top:0!important;margin-bottom:0!important;padding-top:0!important;padding-bottom:0!important;border-width:0!important;overflow:hidden;transition:max-height .45s cubic-bezier(.2,.8,.2,1),opacity .3s}',
'#page-daily #task-list .task-card.done-enter{filter:none!important;opacity:1!important}',
'#page-daily #task-list .task-card.done{transition:filter .9s ease,opacity .7s ease,border-color .5s ease}',
'#page-daily .tc-copy{opacity:.97}'
].join('\n');
document.head.appendChild(st);
function __rtV2Restore(){try{window.renderTasks=__rtV2Mine;}catch(e){}}
window.__rtV2Mine=__rtV2Mine;
__rtV2Restore();
window.addEventListener('load',function(){
  __rtV2Restore();
  var _sp=window.switchPage;
  if(_sp&&!_sp.__rtV2w){
    var _w=function(name){var r=_sp.apply(this,arguments);__rtV2Restore();if(name==='daily'){try{__rtV2Mine();}catch(e){}}return r;};
    _w.__rtV2w=true;window.switchPage=_w;
  }
  try{if(document.getElementById('page-daily').classList.contains('active'))__rtV2Mine();}catch(e){}
});
})();
/* ===== 36号天赋「标签熔炉」v1.5.4.1 ===== */
(function(){
'use strict';
if(window.__fuseTalent36)return;
window.__fuseTalent36=true;

/* 1) 注册天赋（高级2费档，第36号） */
try{
  if(typeof TALENTS!=='undefined'){
    var __t36=TALENTS.find(function(t){return t.id===36;});
    var __fx36="锁定今日任务后，可将今日已安排的2~3个同级标签融合：融合标签最大EP=融合前各标签之和×110%，未完成扣罚=融合前平均罚率×80%（上限100%）；融合次数不限，融合结果可继续参与同级融合";
    if(__t36){__t36.name='标签熔炉';__t36.scope='全局';__t36.effect=__fx36;}
    else{TALENTS.push({id:36,name:'标签熔炉',tier:'epic',scope:'全局',effect:__fx36});}
    if(typeof TIER_CFG!=='undefined'&&typeof TIER_KEYS!=='undefined'){
      TIER_KEYS.forEach(function(k){TIER_CFG[k].total=TALENTS.filter(function(t){return t.tier===k;}).length;});
    }
  }
}catch(e){}

/* 2) 融合状态（按日重置） */
function __fuseToday(){var d=new Date().toDateString();if(!state.todayFuse||state.todayFuse.date!==d)state.todayFuse={date:d,tags:[]};return state.todayFuse.tags;}

/* 3) getTag 全局包装：融合标签可被全系统解析（结算/校验/显示/杯赛） */
var __origGetTag=window.getTag;
window.getTag=function(id,_t){
  var f=__fuseToday().find(function(x){return x.id===id;});
  if(f)return f;
  return __origGetTag.apply(this,arguments);
};

/* 4) 融合执行 */
function __fuseTagLevel(tag){return (typeof tag.fuseLevel==='number')?tag.fuseLevel:tag.path.length;}
function __fuseCommonPath(paths){
  if(!paths.length)return ['融合标签'];
  var p=paths[0].slice();
  for(var i=1;i<paths.length;i++){var q=paths[i];var n=0;while(n<p.length&&n<q.length&&p[n]===q[n])n++;p=p.slice(0,n);}
  return p.length?p:['融合标签'];
}
window.fuseDo=function(){
  try{
    var ids=Array.prototype.map.call(document.querySelectorAll('#modal-body input[data-fuse]:checked'),function(c){return c.value;});
    if(ids.length<2||ids.length>3){alert('请选择 2~3 个同级标签');return;}
    var tags=ids.map(function(id){return getTag(id);}).filter(Boolean);
    if(tags.length!==ids.length){alert('标签数据异常');return;}
    var lv=__fuseTagLevel(tags[0]);
    if(!tags.every(function(t){return __fuseTagLevel(t)===lv;})){alert('只能融合同级标签');return;}
    var sum=0,penSum=0;
    tags.forEach(function(t){sum+=t.maxEp;penSum+=(typeof t.pen==='number'?t.pen:Math.round(getPenaltyRate(t.maxEp)*100));});
    var avg=penSum/tags.length;
    var fused={
      id:'fuse_'+Date.now()+'_'+Math.floor(Math.random()*999),
      path:__fuseCommonPath(tags.map(function(t){return t.path;})),
      maxEp:Math.round(sum*1.1),
      pen:Math.min(100,Math.round(avg*0.8*100)/100),
      fuseLevel:lv,
      fusedFrom:ids.slice()
    };
    var shortNames=tags.map(function(t){return t.path[t.path.length-1];});
    var nTasks=0;
    state.todayTasks.forEach(function(t){if(ids.indexOf(t.tagId)>-1){t.tagId=fused.id;nTasks++;}});
    if(!nTasks){alert('没有任务使用所选标签');return;}
    __fuseToday().push(fused);
    saveState();
    try{closeModal();}catch(e){}
    if(typeof renderTasks==='function')renderTasks();
    try{
      var box=document.getElementById('notif-container');
      if(box){var c=document.createElement('div');c.className='notif-card';c.style.borderLeftColor='#e8a33d';
      c.innerHTML='<div class="notif-title">🔥 标签熔炉</div><div class="notif-body">已融合 '+tags.length+' 个标签 →「'+fused.path.join('·')+'」· max '+fused.maxEp+'EP · -'+fused.pen+'% · 迁移 '+nTasks+' 个任务</div>';
      box.appendChild(c);requestAnimationFrame(function(){c.classList.add('show');});setTimeout(function(){c.classList.add('hide');setTimeout(function(){c.remove();},300);},6000);}
    }catch(e){}
  }catch(e){try{alert('融合失败：'+e.message);}catch(_){}}
};

/* 5) 融合界面 */
window.fuseOpenUI=function(){
  try{
    if(!(state.talent&&state.talent.equipped&&state.talent.equipped.indexOf(36)>-1)){alert('需装备天赋「#36 标签熔炉」');return;}
    if(!state.tasksLocked){alert('请先「确认今日任务」后再融合');return;}
    var map={};
    state.todayTasks.forEach(function(t){
      if(!t.tagId)return;
      var tg=getTag(t.tagId);if(!tg)return;
      map[t.tagId]=map[t.tagId]||{tag:tg,n:0,done:0};
      map[t.tagId].n++;if(t.completed)map[t.tagId].done++;
    });
    var keys=Object.keys(map);
    if(keys.length<2){alert('今日任务标签不足 2 种，无法融合');return;}
    var rows=keys.map(function(id){
      var m=map[id];var tg=m.tag;
      var nm=(typeof tg.fuseLevel==='number')?'🔥'+tg.path.join('·'):tg.path.join('·');
      return '<label style="display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid rgba(232,163,61,.15);border-radius:10px;margin-bottom:6px;cursor:pointer;background:rgba(28,21,11,.5);font-size:12px;color:#ecdcba;">'
        +'<input type="checkbox" data-fuse="1" value="'+id+'" data-level="'+__fuseTagLevel(tg)+'" style="accent-color:#e8a33d;flex:0 0 auto;">'
        +'<span style="flex:1;">'+nm+'</span>'
        +'<span style="font-family:var(--mono);font-size:10px;color:#8d7c5f;white-space:nowrap;">Lv'+__fuseTagLevel(tg)+' · max '+tg.maxEp+' · -'+tg.pen+'% · '+m.n+'任务'+(m.done?'('+m.done+'✓)':'')+'</span></label>';
    }).join('');
    var body='<div style="font-size:12px;color:#8d7c5f;line-height:1.7;margin-bottom:8px;">选择 <b style="color:#f0d9a2;">2~3 个同级标签</b>融合：新标签 maxEP = 各标签之和 × 110%，罚率 = 平均 × 80%（上限100%），次数不限、可连锁融合；使用这些标签的任务将全部迁移到新标签。</div>'+rows;
    if(typeof showModal==='function')showModal('🔥 标签熔炉',body,function(){window.fuseDo();});
  }catch(e){try{alert('熔炉打开失败：'+e.message);}catch(_){}}
};

/* 6) 入口按钮：注入每日任务操作行，随渲染显隐 */
function __fuseBtnSync(){
  try{
    var btn=document.getElementById('fuse-open-btn');
    if(!btn)return;
    var show=(state.talent&&state.talent.equipped&&state.talent.equipped.indexOf(36)>-1)&&state.tasksLocked;
    btn.style.display=show?'':'none';
  }catch(e){}
}
function __fuseInstall(){
  try{
    var row=document.getElementById('confirm-task-btn');
    if(row&&row.parentNode&&!document.getElementById('fuse-open-btn')){
      var b=document.createElement('button');
      b.id='fuse-open-btn';b.className='btn-secondary dl-ghost';
      b.textContent='🔥 标签熔炉';b.onclick=function(){window.fuseOpenUI();};
      b.style.display='none';
      row.parentNode.appendChild(b);
    }
    var _rt=window.renderTasks;
    if(_rt&&!_rt.__fusew){
      var w=function(){var r=_rt.apply(this,arguments);__fuseBtnSync();return r;};
      w.__fusew=true;window.renderTasks=w;
    }
    var _sp2=window.switchPage;
    if(_sp2&&!_sp2.__fusewsp){
      var wsp=function(name){
        var r=_sp2.apply(this,arguments);
        var rt=window.renderTasks;
        if(rt&&!rt.__fusew){var w2=function(){var rr=rt.apply(this,arguments);__fuseBtnSync();return rr;};w2.__fusew=true;window.renderTasks=w2;}
        __fuseBtnSync();
        return r;
      };
      wsp.__fusewsp=true;window.switchPage=wsp;
    }
    __fuseBtnSync();
  }catch(e){}
}
window.addEventListener('load',__fuseInstall);
__fuseInstall();
})();
/* ===== 36号天赋「标签熔炉」SP 灯带闪电特效（图鉴/装配台/记录）===== */
(function(){
'use strict';
if(window.__fuseSpFx154)return;
window.__fuseSpFx154=true;

var st=document.createElement('style');
st.textContent=[
'/* SP同款灯带：金橙渐变光环 */',
'.fuse-sp{position:relative!important;box-shadow:0 0 0 1.5px #ffd60a,0 0 18px -3px rgba(240,179,92,.65),inset 0 0 14px rgba(232,163,61,.16)!important;border-radius:12px!important;z-index:1;}',
'.fuse-sp::before{content:"⚡";position:absolute;top:-10px;right:-5px;font-size:13px;line-height:1;z-index:5;filter:drop-shadow(0 0 5px rgba(255,214,10,.95)) drop-shadow(0 0 12px rgba(232,163,61,.6));animation:fuseBolt 1.6s ease-in-out infinite;}',
'.fuse-sp::after{content:"";position:absolute;inset:-2px;border-radius:14px;border:1px solid rgba(255,214,10,.55);pointer-events:none;animation:fuseRing 2.2s ease-in-out infinite;}',
'@keyframes fuseBolt{0%,100%{opacity:1;transform:translateY(0) scale(1)}50%{opacity:.55;transform:translateY(-2px) scale(1.15)}}',
'@keyframes fuseRing{0%,100%{opacity:.9;box-shadow:0 0 10px -2px rgba(255,214,10,.5)}50%{opacity:.35;box-shadow:0 0 20px 2px rgba(255,214,10,.75)}}',
'#eq-slots .tl-slot.fuse-sp .slot-name{color:#ffd60a!important;text-shadow:0 0 10px rgba(255,214,10,.55)}'
].join('\n');
document.head.appendChild(st);

function __fuseSpFx(){
  function ownText(el){var t='';for(var i=0;i<el.childNodes.length;i++){if(el.childNodes[i].nodeType===3)t+=el.childNodes[i].textContent;}return t;}
  function mark(rootSel,text){
    var root=document.querySelector(rootSel);
    if(!root)return;
    var all=root.querySelectorAll('*');
    for(var i=0;i<all.length;i++){
      var el=all[i];
      if(ownText(el).indexOf(text)>-1){
        var target=(rootSel==='#talent-codex')?el.parentElement:(el.closest('.tl-slot')||el.closest('.tl-chip')||el);
        if(target)target.classList.add('fuse-sp');
      }
    }
  }
  try{mark('#talent-codex','#36');}catch(e){}
  try{mark('#eq-slots','标签熔炉');}catch(e){}
  try{mark('#t-formal-hist','标签熔炉');}catch(e){}
}
['renderCodex','updateEquipUI','updateTalentUI'].forEach(function(fn){
  try{
    var f=window[fn];
    if(typeof f==='function'&&!f.__fuseSpW){
      var w=function(){var r=f.apply(this,arguments);__fuseSpFx();return r;};
      w.__fuseSpW=true;window[fn]=w;
    }
  }catch(e){}
});
try{__fuseSpFx();}catch(e){}
})();
