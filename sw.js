/* ============================================================
   考研EP系统 进化属性获得演出补丁 v1.0 · build 20261119-0200
   ① 进化模式 Lv.3/6/9 随机大幅属性 → 全屏获得演出（图标+渐变流光名称+描述）
   ② 其余通知维持右上角小框
   ③ 修复通知小框对比度（深底亮字）
   ④ 全屏演出与升段动画统一为点击任意处退出，不再自动消失（2026-11-19 23:00）
   守卫 __evoBigFx，已注入时自动跳过
   ============================================================ */
(function(){
'use strict';
if(window.__evoBigFx)return;window.__evoBigFx=true;

/* ---------- CSS：全屏演出 + 小框对比度 ---------- */
var st=document.createElement('style');
st.id='evoBigFxStyle';
st.textContent=[
'#evoBigFxOv{position:fixed;inset:0;z-index:1350;background:rgba(6,4,2,.84);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s ease;cursor:pointer;overflow-y:auto;padding:20px;box-sizing:border-box}',
'#evoBigFxOv.show{opacity:1}',
'.evoBigFx-card{position:relative;width:min(560px,92vw);text-align:center;padding:44px 26px 30px;border-radius:22px;border:1.5px solid rgba(240,179,92,.55);background:radial-gradient(circle at 50% -12%,rgba(240,179,92,.18),transparent 55%),linear-gradient(165deg,#221a10,#120e08);box-shadow:0 0 60px -12px rgba(240,179,92,.55),0 24px 70px rgba(0,0,0,.75);transform:scale(.86) translateY(18px);transition:transform .38s cubic-bezier(.2,1.35,.3,1);box-sizing:border-box}',
'#evoBigFxOv.show .evoBigFx-card{transform:none}',
'.evoBigFx-lv{position:absolute;top:14px;right:16px;font-family:var(--mono);font-size:10px;letter-spacing:.18em;color:#ffd60a;border:1px solid rgba(255,214,10,.5);border-radius:999px;padding:3px 11px;background:rgba(255,214,10,.08)}',
'.evoBigFx-kick{font-family:var(--mono);font-size:10px;letter-spacing:.4em;color:#a98d5f;margin-bottom:14px}',
'.evoBigFx-ic{font-size:62px;line-height:1;filter:drop-shadow(0 0 22px rgba(255,214,10,.6));margin-bottom:14px;animation:evoBigFxPulse 2.2s ease-in-out infinite}',
'.evoBigFx-name{font-size:clamp(30px,7vw,44px);font-weight:800;letter-spacing:.1em;background:linear-gradient(110deg,#f7dfae,#e8a33d 45%,#fff6e2 55%,#d9832a);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;filter:drop-shadow(0 0 20px rgba(232,163,61,.45));animation:bwShine 5.5s linear infinite;margin-bottom:10px}',
'.evoBigFx-en{font-family:var(--mono);font-size:9.5px;letter-spacing:.42em;color:#8d7c5f;margin-bottom:18px;text-transform:uppercase}',
'.evoBigFx-desc{font-size:13.5px;color:#d8c9a8;line-height:2;padding:14px 16px;border:1px dashed rgba(232,163,61,.35);border-radius:12px;background:rgba(240,179,92,.05);text-align:left}',
'.evoBigFx-hint{margin-top:16px;font-family:var(--mono);font-size:10px;letter-spacing:.24em;color:#6b5a3d}',
'@keyframes evoBigFxPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}',
'.notif-card{background:rgba(19,14,8,.98)!important;border:1px solid rgba(240,179,92,.5)!important;box-shadow:0 6px 24px rgba(0,0,0,.55)!important}',
'.notif-title{color:#ffd60a!important;font-size:14px!important;letter-spacing:.04em}',
'.notif-body{color:#f3ead6!important;font-size:12.5px!important;line-height:1.65!important}'
].join('\n');
document.head.appendChild(st);

/* ---------- 全屏演出（连发排队） ---------- */
var __q=[],__busy=false;
function evoBigFxShow(name,desc,lv,pathLabel){
  __q.push({n:name,d:desc,lv:lv,p:pathLabel});
  if(!__busy)__next();
}
function __next(){
  var it=__q.shift();
  if(!it){__busy=false;return;}
  __busy=true;
  var ov=document.createElement('div');
  ov.id='evoBigFxOv';
  ov.innerHTML='<div class="evoBigFx-card">'
    +'<span class="evoBigFx-lv">Lv.'+it.lv+' \u7a81\u7834</span>'
    +'<div class="evoBigFx-kick">EVOLUTION \u00b7 MAJOR ATTRIBUTE \u00b7 '+(it.p||'')+'</div>'
    +'<div class="evoBigFx-ic">\u26a1</div>'
    +'<div class="evoBigFx-name">'+it.n+'</div>'
    +'<div class="evoBigFx-en">ATTRIBUTE ACQUIRED</div>'
    +'<div class="evoBigFx-desc">'+it.d+'</div>'
    +'<div class="evoBigFx-hint">\u70b9 \u51fb \u4efb \u610f \u5904 \u7ee7 \u7eed</div></div>';
  document.body.appendChild(ov);
  requestAnimationFrame(function(){ov.classList.add('show');});
  var closed=false;
  function close(){if(closed)return;closed=true;ov.classList.remove('show');setTimeout(function(){ov.remove();__next();},320);}
  ov.addEventListener('click',close);
}

/* ---------- 接管 3/6/9 级大幅属性发放 ---------- */
function arm(){
  if(typeof window.onEvolveLevelUp!=='function'||typeof window.pushEvolveNote!=='function'){setTimeout(arm,300);return;}
  if(window.onEvolveLevelUp.__evofx)return;window.onEvolveLevelUp.__evofx=true;
  var __raw=window.onEvolveLevelUp;
  window.onEvolveLevelUp=function(lv){
    if(lv!==3&&lv!==6&&lv!==9)return __raw(lv);
    var pathLabel='\u2694\ufe0f \u653b\u51fb';
    try{var e=(typeof getEvolve==='function')?getEvolve():{};if(e&&e.path==='def')pathLabel='\U0001f6e1\ufe0f \u9632\u5fa1';}catch(_){}
    var __push=window.pushEvolveNote;
    window.pushEvolveNote=function(msg){
      window.pushEvolveNote=__push;
      msg=String(msg);
      var m=msg.match(/\u26a1 \u968f\u673a\u5c5e\u6027\u3010(.+?)\u3011\uff1a([\s\S]*?)(?=<br>|$)/);
      if(m)evoBigFxShow(m[1],m[2],lv,pathLabel);
      var rest=msg.replace(/<br>\u26a1 \u968f\u673a\u5c5e\u6027\u3010[\s\S]*?(?=<br>|$)/,'');
      if(rest)__push(rest);
    };
    try{__raw(lv);}finally{if(window.pushEvolveNote!==__push)window.pushEvolveNote=__push;}
  };
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',arm);
else arm();
})();
