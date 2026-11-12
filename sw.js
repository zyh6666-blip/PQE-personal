/* ============================================================
   考研EP系统 v1.5.6「协议时代」补丁 · build 20261112-1305-r6
   = index.html 内嵌全套（金融中心/杯赛竞技v2/两位小数/公告注入）
   守卫 __fin156 / __v2cuparena / __money2dp，已内嵌时自动跳过
   ============================================================ */
/* ================= v1.5.6「协议时代」· 金融中心 ================= */
(function(){
'use strict';
window.__fin156=true;
 ['fmoTr','fmoFin','fmoContract','fmoXBuy'].forEach(function(id){var e=document.getElementById(id);if(e&&e.parentNode)e.parentNode.removeChild(e);});
/* 注入弹窗骨架 */
var __ov=document.createElement('div');
__ov.innerHTML="<div class=\"fmo\" id=\"fmoTr\"><div class=\"fmo-box\">\n  <div class=\"fmo-h\"><span class=\"fmo-t\" id=\"f-trTitle\">交易</span><button class=\"fmo-x\" onclick=\"closeMo('fmoTr')\">✕</button></div>\n  <div class=\"kline-wrap\"><svg id=\"f-kline\" viewBox=\"0 0 460 150\" style=\"width:100%\"></svg></div>\n  <div style=\"display:flex;gap:6px;margin:6px 0;align-items:center;flex-wrap:wrap\">\n    <button class=\"btn\" id=\"f-viewSw\" title=\"仅切换计价显示\">💱 计价 ⚫</button>\n    <span style=\"font-size:10px;color:#8d7c5f;font-family:var(--mono)\" id=\"f-viewHint\">查看其他货币报价</span>\n  </div>\n  <div style=\"font-size:10px;color:#8d7c5f;font-family:var(--mono);margin:2px 0\">支付币种</div>\n  <div style=\"display:flex;gap:6px;margin:4px 0\" id=\"f-payTabs\"></div>\n  <div style=\"font-size:10px;color:#8d7c5f;font-family:var(--mono);margin:2px 0\">卖出到账币种（自选）</div>\n  <div style=\"display:flex;gap:6px;margin:4px 0\" id=\"f-sellTabs\"></div>\n  <input class=\"inp\" type=\"number\" id=\"f-trQty\" placeholder=\"数量（份，支持 0.01）\" min=\"0\" step=\"0.01\">\n  <div id=\"f-trPay\" style=\"display:none;margin:6px 0;padding:10px 12px;border:1px solid rgba(255,214,10,.4);border-radius:10px;background:rgba(255,214,10,.07);font-family:var(--mono)\"></div>\n  <div id=\"f-trFee\" style=\"font-size:11px;color:#8d7c5f;font-family:var(--mono)\"></div>\n  <div style=\"display:flex;gap:10px;margin-top:8px\">\n    <button class=\"btn\" style=\"flex:1;padding:10px\" onclick=\"trConfirm('buy')\">买入 0.5%</button>\n    <button class=\"btn\" style=\"flex:1;padding:10px;background:rgba(255,59,48,.12);border-color:rgba(255,59,48,.4);color:#ff8a80\" onclick=\"trConfirm('sell')\">换币卖出 1%</button>\n  </div>\n</div></div>\n<div class=\"fmo\" id=\"fmoFin\"><div class=\"fmo-box\" style=\"width:min(560px,94vw);display:flex;flex-direction:column;max-height:88vh\">\n  <div class=\"fmo-h\"><span class=\"fmo-t\" id=\"f-finT\">申购</span><button class=\"fmo-x\" onclick=\"closeMo('fmoFin')\">✕</button></div>\n  <div id=\"f-finInfo\" style=\"font-size:12px;color:#c9b791;line-height:1.9;margin-bottom:6px\"></div>\n  <div style=\"display:flex;gap:6px;margin:6px 0\">\n    <button class=\"btn fincur on\" data-c=\"bc\">⚫ 黑币</button>\n    <button class=\"btn fincur\" data-c=\"tk\">🪙 代币</button>\n    <button class=\"btn fincur\" data-c=\"pt\">💰 积分</button>\n  </div>\n  <input class=\"inp\" type=\"number\" id=\"f-finAmt\" placeholder=\"申购金额（按产品币种计）\" min=\"0\">\n  <div id=\"f-finPay\" style=\"display:none;margin:6px 0;padding:10px 12px;border:1px solid rgba(255,214,10,.4);border-radius:10px;background:rgba(255,214,10,.07);font-family:var(--mono)\"></div>\n  <div id=\"f-finConv\" style=\"font-size:11px;color:#8d7c5f;font-family:var(--mono)\"></div>\n  <button class=\"fmo-ok\" onclick=\"finConfirm()\">确认申购</button>\n</div></div>\n<div class=\"fmo\" id=\"fmoContract\"><div class=\"fmo-box\" style=\"width:min(640px,94vw);border-color:rgba(255,214,10,.6);background:radial-gradient(circle at 50% -10%,rgba(255,214,10,.1),transparent 55%),linear-gradient(165deg,#241b0e,#14100a);display:flex;flex-direction:column;max-height:88vh\">\n  <div class=\"fmo-h\"><span class=\"fmo-t\">📜 交易合同</span><button class=\"fmo-x\" onclick=\"closeMo('fmoContract')\">✕</button></div>\n  <div id=\"f-ctBody\" style=\"font-size:12.5px;color:#d8c9a8;line-height:2;overflow-y:auto;flex:1;min-height:0;padding:2px 4px 2px 0\"></div>\n  <div class=\"pact-f\">\n    <label class=\"pact-lab\"><input type=\"checkbox\" id=\"f-ctCk\" onchange=\"fCtToggle()\"> 我已阅读合同全部条款并确认签署</label>\n    <div class=\"pact-btns\"><button class=\"btn\" onclick=\"closeMo('fmoContract')\">取消</button><button class=\"fmo-ok\" id=\"f-ctSign\" disabled style=\"background:linear-gradient(135deg,#ff8a5c,#e02a1e);margin-top:0\">🔏 签字上架</button></div>\n  </div>\n</div></div>\n<div class=\"fmo\" id=\"fmoXBuy\"><div class=\"fmo-box\" style=\"width:min(430px,94vw)\">\n  <div class=\"fmo-h\"><span class=\"fmo-t\" id=\"f-xbT\">购买</span><button class=\"fmo-x\" onclick=\"closeMo('fmoXBuy')\">✕</button></div>\n  <div style=\"font-size:11.5px;color:#c9b791;line-height:1.9\" id=\"f-xbInfo\"></div>\n  <input class=\"inp\" type=\"number\" id=\"f-xbQty\" placeholder=\"数量\" min=\"0\">\n  <div id=\"f-xbCalc\" style=\"font-size:12.5px;color:#d8c9a8;font-family:var(--mono);line-height:2\"></div>\n  <button class=\"fmo-ok\" id=\"f-xbGo\">确认购买</button>\n</div></div>\n<div class=\"fmo\" id=\"fmoSell\"><div class=\"fmo-box\" style=\"width:min(430px,94vw)\">\n  <div class=\"fmo-h\"><span class=\"fmo-t\" id=\"f-slT\">交易所出售</span><button class=\"fmo-x\" onclick=\"closeMo('fmoSell')\">✕</button></div>\n  <div id=\"f-slInfo\" style=\"font-size:12px;color:#c9b791;line-height:1.9\"></div>\n  <input class=\"inp\" type=\"number\" id=\"f-slQty\" placeholder=\"出售数量\" min=\"0\">\n  <input class=\"inp\" type=\"number\" id=\"f-slPrice\" placeholder=\"单价（🪙）\" min=\"0\" step=\"0.01\">\n  <div id=\"f-slGuide\" style=\"font-size:11px;color:#8d7c5f;font-family:var(--mono);line-height:1.8\"></div>\n  <button class=\"fmo-ok\" id=\"f-slGo\">下一步 · 签合同</button>\n</div></div>\n<div class=\"fmo\" id=\"fmoTrPact\"><div class=\"fmo-box\" style=\"width:min(620px,94vw);display:flex;flex-direction:column;max-height:88vh\">\n  <div class=\"fmo-h\"><span class=\"fmo-t\">📜 交易确认 · 风险协议</span><button class=\"fmo-x\" onclick=\"closeMo('fmoTrPact')\">✕</button></div>\n  <div id=\"f-trpDeal\" style=\"padding:10px 12px;border:1px solid rgba(255,214,10,.35);border-radius:10px;background:rgba(255,214,10,.06);margin-bottom:8px\"></div>\n  <div id=\"f-trpBody\" style=\"flex:1;min-height:0;overflow-y:auto;font-size:10.5px;color:#a98d5f;line-height:1.9;text-align:justify;padding-right:4px\"></div>\n  <div class=\"pact-f\">\n    <label class=\"pact-lab\"><input type=\"checkbox\" id=\"f-trpCk\" onchange=\"fTrpToggle()\"> 我已阅读《货币市场交易风险揭示与交易协议》并确认交易</label>\n    <div class=\"pact-btns\"><button class=\"btn\" onclick=\"closeMo('fmoTrPact')\">取消</button><button class=\"fmo-ok\" id=\"f-trpOk\" disabled style=\"margin-top:0\">确认交易</button></div>\n  </div>\n</div></div>\n<div class=\"fmo\" id=\"fmoFinPact\"><div class=\"fmo-box\" style=\"width:min(620px,94vw);display:flex;flex-direction:column;max-height:88vh\">\n  <div class=\"fmo-h\"><span class=\"fmo-t\">📜 申购确认 · 产品协议</span><button class=\"fmo-x\" onclick=\"closeMo('fmoFinPact')\">✕</button></div>\n  <div id=\"f-fnpDeal\" style=\"padding:10px 12px;border:1px solid rgba(255,214,10,.35);border-radius:10px;background:rgba(255,214,10,.06);margin-bottom:8px\"></div>\n  <div id=\"f-fnpBody\" style=\"flex:1;min-height:0;overflow-y:auto;font-size:10.5px;color:#a98d5f;line-height:1.9;text-align:justify;padding-right:4px\"></div>\n  <div class=\"pact-f\">\n    <label class=\"pact-lab\"><input type=\"checkbox\" id=\"f-fnpCk\" onchange=\"fFnpToggle()\"> 我已阅读《理财产品申购协议与风险揭示书》并确认申购</label>\n    <div class=\"pact-btns\"><button class=\"btn\" onclick=\"closeMo('fmoFinPact')\">取消</button><button class=\"fmo-ok\" id=\"f-fnpOk\" disabled style=\"margin-top:0\">确认申购</button></div>\n  </div>\n</div></div>\n<div class=\"fmo\" id=\"fmoPrompt\"><div class=\"fmo-box\" style=\"width:min(400px,94vw)\">\n  <div class=\"fmo-h\"><span class=\"fmo-t\" id=\"f-pT\">输入</span><button class=\"fmo-x\" onclick=\"closeMo('fmoPrompt')\">✕</button></div>\n  <div id=\"f-pM\" style=\"font-size:12px;color:#c9b791;line-height:1.9\"></div>\n  <input class=\"inp\" type=\"number\" id=\"f-pIn\" placeholder=\"请输入数量\" min=\"0\">\n  <button class=\"fmo-ok\" id=\"f-pOk\">确 定</button>\n</div></div>";
document.body.appendChild(__ov);

/* ================= 数据 ================= */
function srand(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
var SEED=20261109;
/* 定价锚（考虑游戏经济：日入2~8⚫，每股3~9⚫、汇率对2⚫起步才玩得动）
   base = 指数100对应的⚫价；显示指数=现价/base×100 */
/* 计价币种 cur：fx 用货币对双币交易；stock 分币种专区（bc=黑币盘 / tk=代币盘 / pt=积分盘）
   定价：汇率盘按名义体量分档（BC/PT 体量最大单价最高）；概念股按币种钱包日产量定价 */
var INSTR=[
 {id:'fx_bt',tab:'fx',ic:'⚫🪙',name:'黑币/代币',code:'BC/TK',base:1,price:1,cur:'bc',nom:'1 ⚫ 名义'},
 {id:'fx_bp',tab:'fx',ic:'⚫💰',name:'黑币/积分',code:'BC/PT',base:1,price:1,cur:'bc',nom:'1 ⚫ 名义'},
 {id:'fx_tp',tab:'fx',ic:'🪙💰',name:'代币/积分',code:'TK/PT',base:0.2,price:0.2,cur:'bc',nom:'10 🪙 名义'},
 {id:'st_talent',tab:'stock',ic:'🎯',name:'天赋科技',code:'TAL',base:6,price:6,cur:'bc'},
 {id:'st_cup',tab:'stock',ic:'🏆',name:'杯赛重工',code:'CUP',base:8,price:8,cur:'tk'},
 {id:'st_brawl',tab:'stock',ic:'⚔️',name:'乱斗娱乐',code:'BRA',base:6,price:6,cur:'tk'},
 {id:'st_sp',tab:'stock',ic:'🏎️',name:'SP能源',code:'SPE',base:9,price:9,cur:'bc'},
 {id:'st_evo',tab:'stock',ic:'🧬',name:'进化生物',code:'EVO',base:7,price:7,cur:'bc'},
 {id:'st_pot',tab:'stock',ic:'✨',name:'潜能制药',code:'POT',base:1200,price:1200,cur:'pt'}
];
INSTR.forEach(function(it){it.hist=[{o:it.base,c:it.base,h:it.base,l:it.base}];});
/* 货品↔真实库存键 */
var GI={g_draw:'draw_ticket',g_change:'change_ticket',g_reroll:'reroll_ticket',g_vip:'brawl_vip',
 g_core:'sp_core',g_dup:'direct_up',g_pack:'parts_pack',g_exp12:'exp12',g_exp15:'exp15',g_exp2:'exp2',g_exp3:'exp3',
 g_coupon:'excl_coupon',g_trial:'potential_trial',g_golddie:'treasure_die_yellow',
 g_slotext:'talent_slot_ext',g_costext:'talent_cost_ext',g_theme:'theme_tianren'};
var GM={g_mark:'mark',g_medal:'medal',g_badge:'badge',g_peak:'peak'};
function qtyOf(g){if(GM[g.id])return migrateGlobalMats()[GM[g.id]]||0;return state.inventory[GI[g.id]]||0;}
function setQty(g,v){if(GM[g.id]){migrateGlobalMats()[GM[g.id]]=v;}else{state.inventory[GI[g.id]]=v;}}
var PRODUCTS=[
 {id:'f_demand',ic:'⚫',name:'黑币宝',cur:'bc',tag:'活期 · 随存随取',rate:0.05,term:0,desc:'每日结算计息，万份收益制。10⚫起投，单账户上限 500 ⚫。',limit:500,min:10},
 {id:'f_7',ic:'⚫',name:'稳盈 7 天',cur:'bc',tag:'定期 · 7天',rate:0.08,term:7,min:10,desc:'10⚫起投。到期本息自动回包，提前赎回收益清零。'},
 {id:'f_30',ic:'⚫',name:'稳盈 30 天',rate:0.15,term:30,cur:'bc',tag:'定期 · 30天',min:10,desc:'10⚫起投。年化最高稳健档，适合压箱底的黑币。'},
 {id:'f_tk',ic:'🪙',name:'代币季息',cur:'tk',tag:'定期 · 14天',rate:0.05,term:14,min:50,desc:'50🪙起投。给代币一条出路，低息稳健。'},
 {id:'f_pt',ic:'💰',name:'积分周息',cur:'pt',tag:'定期 · 7天',rate:0.04,term:7,min:1000,desc:'1000💰起投。小额顺手，积分不闲置。'},
 {id:'f_idx',ic:'📈',name:'股指挂钩',cur:'bc',tag:'浮动 · 14天',rate:0.20,term:14,risk:true,min:10,desc:'10⚫起投。预期年化 20%，到期收益挂钩大盘：区间 -5% ~ +28%，非保本。'}
];
var GOODS=[
 /* cat 映射虚拟股：talent=TAL cup=CUP bra=BRA sp=SPE evo=EVO pot=POT */
 {id:'g_draw',cat:'talent',ic:'🎟️',n:'属性抽取券',baseBC:0.16,qty:3},
 {id:'g_change',cat:'talent',ic:'🎫',n:'属性变更券',baseBC:0.07,qty:5},
 {id:'g_reroll',cat:'talent',ic:'🔮',n:'重铸券',baseBC:0.2,qty:2},
 {id:'g_vip',cat:'talent',ic:'👑',n:'乱斗特权券',baseBC:1,qty:1},
 {id:'g_mark',cat:'cup',ic:'🧊',n:'训练印记',baseBC:0.024,qty:30},
 {id:'g_medal',cat:'cup',ic:'🏅',n:'冲刺奖章',baseBC:0.024,qty:25},
 {id:'g_badge',cat:'cup',ic:'📛',n:'全勤徽章',baseBC:0.024,qty:18},
 {id:'g_peak',cat:'cup',ic:'🎖️',n:'巅峰凭证',baseBC:0.024,qty:12},
 {id:'g_core',cat:'sp',ic:'💠',n:'精研核心',baseBC:2.4,qty:2},
 {id:'g_dup',cat:'sp',ic:'🔧',n:'直接升级',baseBC:0.96,qty:3},
 {id:'g_pack',cat:'sp',ic:'📦',n:'材料包',baseBC:0.1,qty:4},
 {id:'g_exp12',cat:'evo',ic:'⚡',n:'1.2倍经验卡',baseBC:0.12,qty:3},
 {id:'g_exp15',cat:'evo',ic:'⚡',n:'1.5倍经验卡',baseBC:0.26,qty:2},
 {id:'g_exp2',cat:'evo',ic:'⚡',n:'2倍经验卡',baseBC:0.44,qty:1},
 {id:'g_exp3',cat:'evo',ic:'⚡',n:'3倍经验卡',baseBC:1.4,qty:1},
 {id:'g_coupon',cat:'pot',ic:'🎴',n:'高级功能半价券',baseBC:0.3,qty:2},
 {id:'g_trial',cat:'pot',ic:'🧪',n:'潜能体验卡',baseBC:0.4,qty:1},
 {id:'g_golddie',cat:'bra',ic:'🎲',n:'金骰子',baseBC:0.16,qty:1,rare:true},
 {id:'g_slotext',cat:'talent',ic:'🗳️',n:'天赋槽位扩展券',baseBC:6,qty:0,rare:true,unique:true},
 {id:'g_costext',cat:'talent',ic:'⚖️',n:'天赋费用扩展券',baseBC:6,qty:0,rare:true,unique:true},
 {id:'g_theme',cat:'pot',ic:'🐉',n:'【主题】天人合一',baseBC:3,qty:0,rare:true,unique:true}
];
function FE(id){var e=document.getElementById(id);if(e)return e;
  return {style:{},classList:{add:function(){},remove:function(){},contains:function(){return false}},value:'',textContent:'',innerHTML:'',onclick:null,oninput:null,querySelectorAll:function(){return [];}};}
var FIN=(state.fin=state.fin||{day:1,pos:{},fin:{},pool:200,idx:3000,idxHist:[3000],news:'',listings:[],bag:[],mkt:{},volLog:{}});
var S={get bc(){return state.blackCoin||0},set bc(v){state.blackCoin=v},
 get tk(){return state.tokens||0},set tk(v){state.tokens=v},
 get pt(){return state.points||0},set pt(v){state.points=v},
 get pos(){return FIN.pos},get fin(){return FIN.fin},
 get pool(){return FIN.pool},set pool(v){FIN.pool=v},
 get idx(){return FIN.idx},set idx(v){FIN.idx=v},
 get idxHist(){return FIN.idxHist},set idxHist(v){FIN.idxHist=v},
 get news(){return FIN.news},set news(v){FIN.news=v}};
var X={get bag(){if(!FIN.bag)FIN.bag=[];return FIN.bag},
 get listings(){if(!FIN.listings)FIN.listings=[];return FIN.listings},
 get mkt(){if(!FIN.mkt)FIN.mkt={};return FIN.mkt},
 get volLog(){if(!FIN.volLog)FIN.volLog={};return FIN.volLog}};
GOODS.forEach(function(g){
  X.mkt[g.id]={demand:1,vol:20+Math.random()*60,prevGuide:0};
  X.volLog[g.id]=[X.mkt[g.id].vol];
});
/* 首启初始化行情 */
GOODS.forEach(function(g){
  if(!X.mkt[g.id])X.mkt[g.id]={demand:1,vol:20+Math.floor(Math.random()*60),prevGuide:0};
  if(!X.volLog[g.id])X.volLog[g.id]=[X.mkt[g.id].vol];
});
/* 指导价（代币）= 黑币基准 × 实时汇率 × 需求因子 */
function guideTK(g){return g.baseBC*rateTK()*X.mkt[g.id].demand;}
function goodOf(id){return GOODS.find(function(x){return x.id===id;});}


var curTab='fx', curInst=null, payCur='bc', sellCur='bc', viewCur='bc', finCur='bc';
var rowView={};   /* 每行独立计价币种 */
/* 持仓按币种分仓：S.pos[id] = {bc:{qty,cost}, tk:{...}, pt:{...}} */
function posLot(id,cur){var p=S.pos[id];return (p&&p[cur])?p[cur]:{qty:0,cost:0};}
function posTotal(id){var p=S.pos[id],t=0;if(p)['bc','tk','pt'].forEach(function(c){t+=p[c]?p[c].qty:0;});return t;}
function instCurs(it){return it.tab==='fx'?(it.id==='fx_bt'?['bc','tk']:(it.id==='fx_bp'?['bc','pt']:['tk','pt'])):[it.cur];}
function instUnit(it){return {bc:'⚫',tk:'🪙',pt:'💰'}[it.cur];}
function instBCPrice(it){return it.cur==='bc'?it.price:(it.cur==='tk'?it.price/rateTK():it.price/ratePT());}
function priceIn(it,cur){return cur===it.cur?it.price:bcTo(cur,instBCPrice(it));}
/* 汇率：1⚫ 兑多少代币/积分（随汇率盘波动） */
function rateTK(){return INSTR[0].price/INSTR[0].base*50;}   /* 基准：指数100 ⇔ 1⚫=50🪙 */
function ratePT(){return INSTR[1].price/INSTR[1].base*9000;} /* 基准：指数100 ⇔ 1⚫=9000💰 */
function curName(k){return {bc:'⚫ 黑币',tk:'🪙 代币',pt:'💰 积分'}[k];}
function curBal(k){return {bc:S.bc,tk:S.tk,pt:S.pt}[k];}
function bcTo(k,amt){return k==='bc'?amt:(k==='tk'?amt*rateTK():amt*ratePT());}
function payFrom(k,amt){
  if(k==='bc')S.bc-=amt;else if(k==='tk')S.tk-=amt;else S.pt-=amt;
}
function gainTo(k,amt){
  if(k==='bc')S.bc+=amt;else if(k==='tk')S.tk+=amt;else S.pt+=amt;
}

/* ================= 行情引擎 ================= */
function idxOfDay(d){return S.idxHist[d-1]||3000;}
function tickMarket(){
  var rng=srand(SEED+FIN.day*7919);
  var sentiment=(window.__finSent!==null&&window.__finSent!==undefined)?window.__finSent:(rng()*2-1)*0.02;
  var newsPool=[
   {t:'🏛️ 央行降准，流动性宽松，市场全线走强',r:+0.06},
   {t:'⚠️ 外围市场大跌，避险情绪升温',r:-0.05},
   {t:'📰 行业利好：天赋改革政策出台',r:+0.04,tab:'stock'},
   {t:'📰 杯赛赛季开启，相关板块活跃',r:+0.04,tab:'stock'},
   {t:'📰 汇率波动加剧，汇市交易活跃',r:+0.03,tab:'fx'},
   {t:'🦢 黑天鹅：某概念股业绩暴雷，板块承压',r:-0.07,tab:'stock'}
  ];
  var ev=rng()<0.10?newsPool[Math.floor(rng()*newsPool.length)]:null;
  S.news=ev?ev.t+'（影响相关板块）':'📰 今日无重大消息，市场观望情绪浓厚。';
  INSTR.forEach(function(it,i){
    var r=(rng()*2-1)*0.03+sentiment;
    if(ev&&(!ev.tab||ev.tab===it.tab))r+=ev.r*(0.6+rng()*0.8);
    var anchor=it.base;
    if(it.id==='fx_tp'){
      /* 交叉盘锚定隐含汇率：BC/PT ÷ BC/TK，杜绝三角套利 */
      anchor=it.base*(INSTR[1].price/INSTR[1].base)/(INSTR[0].price/INSTR[0].base);
    }
    r+=(anchor/it.price-1)*0.06;               /* 均值回归：向锚拉回，防失血/冻结 */
    if(it.__xmom)r+=it.__xmom;                 /* 交易所板块热度传导 */
    r=Math.max(-0.10,Math.min(0.10,r));
    var o=it.price,c=o*(1+r);
    c=Math.max(it.base*0.2,Math.min(it.base*5,c));   /* 宽区间护栏 */
    c=Math.round(c*100)/100;
    var h=Math.round(Math.max(o,c)*(1+rng()*0.02)*100)/100;
    var l=Math.round(Math.min(o,c)*(1-rng()*0.02)*100)/100;
    it.hist.push({o:o,c:c,h:h,l:l});
    if(it.hist.length>40)it.hist.shift();
    it.price=c;
  });
  /* 交易所：各货成交量驱动需求因子（影响指导价），并汇总板块动量喂给概念股 */
  var catVol={talent:0,cup:0,bra:0,sp:0,evo:0,pot:0},catAvg={talent:0,cup:0,bra:0,sp:0,evo:0,pot:0};
  GOODS.forEach(function(g){
    var m=X.mkt[g.id];
    var rng2=srand(SEED+FIN.day*7919+g.id.length*131+g.baseBC*1000);
    /* 成交量：价格跌→买入放量，价格涨→获利抛压，加随机与事件 */
    var move=(m.demand-1);
    var vol=m.vol*(0.6+rng2()*0.9)*(1+Math.abs(move)*6);
    m.vol=Math.round(vol);
    X.volLog[g.id].push(m.vol);if(X.volLog[g.id].length>40)X.volLog[g.id].shift();
    m.demand+=(rng2()*2-1)*0.06+( (m.vol/(X.volLog[g.id].slice(-7, -1).reduce(function(a,b){return a+b;},0)/Math.max(1,X.volLog[g.id].slice(-7,-1).length)||m.vol))-1 )*0.04;
    m.demand+=(1-m.demand)*0.15;                      /* 向1回归 */
    m.demand=Math.max(0.8,Math.min(1.25,m.demand));    /* ±20%带 */
    catVol[g.cat]+=m.vol;catAvg[g.cat]+=m.vol;
  });
  Object.keys(catAvg).forEach(function(c){catAvg[c]=catAvg[c]||1;});
  var catMom={};
  Object.keys(catVol).forEach(function(c){catMom[c]=catVol[c]/ (catAvg[c]||1); });
  window.__catMom=catMom;
  /* 概念股：板块交易热度推动股价（±2%上限） */
  INSTR.forEach(function(it){
    if(it.tab!=='stock')return;
    var mom=(window.__catMom[it.code==='TAL'?'talent':(it.code==='CUP'?'cup':(it.code==='BRA'?'bra':(it.code==='SPE'?'sp':(it.code==='EVO'?'evo':'pot'))))]||1)-1;
    it.__xmom=Math.max(-0.02,Math.min(0.02,mom*0.02));
  });
  /* 我的挂单撮合与到期 */
  X.listings.forEach(function(L){
    if(L.sold)return;
    L.daysLeft--;
    var g=goodOf(L.gid);
    var comp=L.price/guideTK(g);
    var rng3=srand(SEED+FIN.day*104729+L.price*7);
    var p=comp<=0.9?1:(comp<=1.1?0.7:Math.max(0.05,0.45-(comp-1.1)));
    if(rng3()<p){
      L.sold=true;L.soldDay=FIN.day;
      var gain=L.qty*L.price*0.85;
      S.tk+=gain;
      toast&&toast('🔄 交易所：【'+g.n+'】×'+L.qty+' 已售出，+'+fmt(gain)+' 代币（到手85%）');
    }else if(L.daysLeft<=0){
      L.expired=true;setQty(g,qtyOf(g)+L.qty);   /* 72小时无人购买退回仓库 */
    }
  });
  (function(){var kept=X.listings.filter(function(L){return !L.sold&&!L.expired;});X.listings.length=0;kept.forEach(function(L){X.listings.push(L);});})();
  S.idx=Math.round(3000*INSTR.filter(function(x){return x.tab==='stock'}).reduce(function(s,x){return s+x.price/x.base;},0)/6*100)/100;
  S.idxHist.push(S.idx);if(S.idxHist.length>40)S.idxHist.shift();
  FIN.day++;
}
/* ================= 理财引擎 ================= */
function finAccrue(){
  Object.keys(S.fin).forEach(function(pid){
    var h=S.fin[pid],p=PRODUCTS.find(function(x){return x.id===pid;});
    h.days++;
    if(p.term===0){h.accrued+=h.amt*p.rate/365*(S.pool>100?1.1:S.pool<40?0.7:1);}
    else if(h.days>=p.term){
      var gain=0;
      if(p.risk){
        var ret=(S.idx/h.idxStart-1);
        gain=h.amt*Math.max(-0.05,Math.min(0.28,0.20*ret/0.06));
      }else gain=h.amt*p.rate*(p.term/365);
      h.mature=true;h.matureGain=Math.round(gain*100)/100;
    }
  });
}
/* ================= 渲染 ================= */
function fmt(n){return (Math.round(n*100)/100).toLocaleString('en-US');}
function clsOf(r){return r>=0?'up':'down';}
function chgOf(it){var h=it.hist;return h.length>1?(h[h.length-1].c/h[h.length-1].o-1):0;}
function sparkline(svg,arr,color){
  var min=Math.min.apply(null,arr),max=Math.max.apply(null,arr),rg=max-min||1;
  var pts=arr.map(function(v,i){return (i/(arr.length-1)*100).toFixed(1)+','+(60-(v-min)/rg*56).toFixed(1);}).join(' ');
  svg.innerHTML='<polyline points="'+pts+'" fill="none" stroke="'+color+'" stroke-width="1.6"/>';
}
function setAll(cls,v){try{document.querySelectorAll(cls).forEach(function(e){e.textContent=v;});}catch(e){}}
function renderAll(){
  setAll('.js-fbc',fmt(S.bc));
  setAll('.js-ftk',fmt(S.tk));
  setAll('.js-fpt',fmt(S.pt));
  var mv=0;Object.keys(S.pos).forEach(function(id){var it=INSTR.find(function(x){return x.id===id});['bc','tk','pt'].forEach(function(c){var lot=S.pos[id][c];if(lot)mv+=lot.qty*instBCPrice(it);});});
  setAll('.js-fmv',fmt(mv));
  var fin=0;Object.keys(S.fin).forEach(function(pid){fin+=S.fin[pid].amt+S.fin[pid].accrued;});
  setAll('.js-ffin',fmt(fin));
  setAll('.js-fpool',fmt(S.pool));
  setAll('.js-fday',FIN.day);
  setAll('.js-fnews',S.news);
  var chg=S.idxHist.length>1?(S.idx/S.idxHist[S.idxHist.length-2]-1):0;
  document.querySelectorAll('.js-fidx').forEach(function(e){e.textContent=fmt(S.idx);});
  document.querySelectorAll('.js-fidxchg').forEach(function(e){e.textContent=(chg>=0?'+':'')+(chg*100).toFixed(2)+'%';e.className='js-fidxchg idx-chg '+clsOf(chg);});
  sparkline(FE('f-idxSpark'),S.idxHist,chg>=0?'#ff3b30':'#34c759');
  renderInst();renderFin();renderHold();
  var n=0;Object.keys(S.pos).forEach(function(k){['bc','tk','pt'].forEach(function(c){if(S.pos[k][c]&&S.pos[k][c].qty>0)n++;});});
  FE('f-posN').textContent=n;
  xRender();
  whRender();
  try{saveState();updateTopBar();}catch(e){}
}
/* ================= 交易所 ================= */
function xRender(){
  var el=FE('f-xList');if(!el)return;
  FE('f-xSummary').textContent='背包 '+X.bag.length+' 件 · 挂单 '+X.listings.length+' 笔 · 🪙 '+fmt(S.tk);
  el.innerHTML=GOODS.map(function(g){
    var m=X.mkt[g.id],guide=guideTK(g);
    var chg=m.prevGuide?(guide/m.prevGuide-1):0;
    var mine=X.listings.filter(function(L){return L.gid===g.id;}).reduce(function(s,L){return s+L.qty;},0);
    return '<div class="inst">'
     +'<span class="inst-ic">'+g.ic+'</span>'
     +'<div class="inst-info"><div class="inst-name">'+g.n+(g.rare?' <span class="pos-chip" style="background:rgba(255,214,10,.14);color:#ffd60a;border-color:rgba(255,214,10,.4)">稀有</span>':'')+'</div>'
     +'<div class="inst-pos">指导价 '+fmt(guide)+' 🪙 · 今量 '+m.vol+' · 仓存 '+g.qty+(mine?' · 在售 '+mine:'')+'</div></div>'
     +'<div class="inst-right" style="display:flex;gap:5px;align-items:center">'
     +'<span class="inst-chg '+clsOf(chg)+'">'+(chg>=0?'▲ +':'▼ ')+(chg*100).toFixed(1)+'%</span>'
     +'<button class="btn" style="padding:7px 14px;font-size:12px;background:linear-gradient(135deg,#7ee2a0,#34c759);border:none;color:#0c2a12;font-weight:800" onclick="xBuy(\''+g.id+'\')">'+fmt(guideTK(g)*1.02)+' 🪙 购买</button>'
     +'</div></div>';
  }).join('');
  var mine=FE('f-xMine');
  var html='';
  if(X.listings.length){
    html+='<div style="font-size:11px;color:#c9a86a;letter-spacing:.14em;margin-bottom:6px">— 我的挂单（72小时） —</div>'
     +X.listings.map(function(L){
        var g=goodOf(L.gid);
        return '<div class="hold-row"><span>'+g.ic+' '+g.n+' ×'+L.qty+' · 单价 '+fmt(L.price)+' 🪙 · 剩 '+L.daysLeft+' 天</span>'
         +'<span style="font-family:var(--mono);color:#8d7c5f">预计到手 '+fmt(L.qty*L.price*0.85)+'</span></div>';
      }).join('');
  }
  if(X.bag.length){
    html+='<div style="font-size:11px;color:#c9a86a;letter-spacing:.14em;margin:8px 0 6px">— 交易背包（买入不入仓，需手动交割） —</div>'
     +X.bag.map(function(b,i){
        var g=goodOf(b.gid);
        var blocked=g.unique&&g.qty>=1;
        return '<div class="hold-row"><span>'+g.ic+' '+g.n+' ×'+b.qty+(g.unique?' <span class="pos-chip">唯一</span>':'')+'</span>'
         +'<span style="display:flex;gap:6px">'
         +'<button class="btn" style="padding:5px 12px;font-size:11px" '+(blocked?'disabled style="opacity:.4" title="唯一道具仅能入仓一个"':'onclick="xDeposit('+i+')"')+'>存入仓库</button>'
         +'<button class="btn" style="padding:5px 12px;font-size:11px;background:rgba(240,179,92,.12);border-color:rgba(232,163,61,.4);color:#f0d9a2" onclick="xSellBag('+i+')">转卖</button>'
         +'</span></div>';
      }).join('');
  }
  mine.innerHTML=html;
}
var __xb=null;
function xBuy(gid){
  var g=goodOf(gid),ask=+(guideTK(g)*1.02).toFixed(2);
  __xb={gid:gid,ask:ask};
  FE('f-xbT').textContent='购买 · '+g.n;
  FE('f-xbInfo').innerHTML='单价 <b style="color:#ffd60a;font-family:var(--mono)">'+fmt(ask)+'</b> 🪙/件 · 最低卖单'
    +(g.rare?'<br><span style="color:#ffd60a;font-size:10.5px">稀有道具：先入交易背包；唯一性道具仓库仅能持有一个</span>':'');
  FE('f-xbQty').value='';
  xbCalc();
  FE('f-xbQty').oninput=xbCalc;
  FE('f-xbGo').onclick=function(){
    var q=parseFloat(FE('f-xbQty').value)||0;
    if(q<=0){toast('请输入数量');return;}
    var cost=q*__xb.ask;
    if(cost>S.tk){toast('代币不足');return;}
    S.tk-=cost;S.pool+=cost*0.005;
    var has=X.bag.find(function(b){return b.gid===__xb.gid;});
    if(has)has.qty+=q;else X.bag.push({gid:__xb.gid,qty:q});
    closeMo('fmoXBuy');renderAll();
    toast('购买成功：'+g.n+' ×'+q+' · 已入交易背包');
  };
  FE('fmoXBuy').classList.add('show');
}
function xbCalc(){
  var q=parseFloat(FE('f-xbQty').value)||0;
  var cost=q*(__xb?__xb.ask:0);
  FE('f-xbCalc').innerHTML=q>0
    ?('合计 <b style="color:#ffd60a">'+fmt(cost)+'</b> 🪙 · 购买后剩余 <b style="color:#7ee2a0">'+fmt(S.tk-cost)+'</b> 🪙')
    :('当前持有 🪙 '+fmt(S.tk));
}
var __sell=null;
var __pCb=null,__sellG=null,__sellFromBag=null;
function finPrompt(title,msg,def,cb){__pCb=cb;FE('f-pT').textContent=title;FE('f-pM').innerHTML=msg;FE('f-pIn').value=(def!==undefined?def:'');FE('f-pOk').onclick=finPromptOk;FE('fmoPrompt').classList.add('show');}
function finPromptOk(){var v=parseFloat(FE('f-pIn').value)||0;closeMo('fmoPrompt');var cb=__pCb;__pCb=null;if(cb)cb(v);}
function v2trPactHtml(it){
 var d=new Date();var ds=d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日';
 return '<h3 style="text-align:center;color:#f0d9a2;font-size:13.5px;letter-spacing:.18em;margin-bottom:10px">《货币市场交易风险揭示与交易协议》</h3>'
 +'<p style="text-align:center;font-family:var(--mono);font-size:10px;color:#8d7c5f;letter-spacing:.12em;margin:-4px 0 10px">签署日期：'+ds+' · 标的：'+it.name+'（'+it.code+'）· 现价 '+fmt(it.price)+' '+instUnit(it)+'/份</p>'
 +'<p><b style="color:#e6d3ac">甲方（投资者）：</b>本系统参赛者（以交易时登录账号为准）<br><b style="color:#e6d3ac">乙方（平台）：</b>考研EP系统金融中心运营方</p>'
 +'<p><b style="color:#e6d3ac">一、标的与行情</b><br>1.1 本协议项下交易标的为金融中心挂牌之「'+it.name+'」（代码 '+it.code+'），当前盘面价 '+fmt(it.price)+' '+instUnit(it)+'/份；行情每结算日收盘后刷新，红涨绿跌。<br>1.2 行情由平台效率模型生成：汇率盘与黑币/代币/积分三种货币实时联动，概念股价格受对应板块成交量与事件驱动，历史走势不代表未来表现。</p>'
 +'<p><b style="color:#e6d3ac">二、市场风险揭示（重要）</b><br>2.1 价格波动风险：标的每日涨跌幅限制为 ±10%，但连续涨跌仍可能造成重大浮亏，甲方应自行承担全部盈亏。<br>2.2 汇率联动风险：跨币种交易按盘面实时汇率折算，汇率波动会导致实际成本与预期存在偏差。<br>2.3 流动性风险：极端行情下买卖价差可能扩大，市价委托可能以劣于预期的价格成交。<br>2.4 虚拟性质声明：本中心全部标的为系统内虚拟资产，不构成任何现实世界的证券、基金或理财邀约。</p>'
 +'<p><b style="color:#e6d3ac">三、交易规则</b><br>3.1 佣金：买入按成交金额 0.5% 计收，卖出（换币）按 1% 计收，于成交时自动扣收。<br>3.2 交易日：每个结算日为一个交易日，结算后行情刷新、持仓计息、盈亏入账。<br>3.3 委托方式：采用市价即时成交，输入数量并点击「买入」或「换币卖出」即视为不可撤销之委托。<br>3.4 持仓分仓：买入按支付币种建立独立仓位并记录成本，卖出时同币种仓位优先扣减，盈亏按该仓位成本计算。</p>'
 +'<p><b style="color:#e6d3ac">四、账户与资金安全</b><br>4.1 甲方应妥善保管本机存档并定期导出备份；因设备丢失、浏览器清理且未备份导致的资产损失，平台无法协助找回。<br>4.2 平台不托管任何现实资金，全部货币与资产均为系统内数据。</p>'
 +'<p><b style="color:#e6d3ac">五、禁止行为</b><br>5.1 严禁利用漏洞刷取行情或资产、操纵价格、对倒交易；违者平台有权回档、冻结并追缴违规所得。</p>'
 +'<p><b style="color:#e6d3ac">六、电子交易效力</b><br>6.1 甲方勾选「我已阅读协议」并完成交易，即视为已充分阅读并同意本协议全部条款，交易记录以系统数据为准，可作为系统内凭据。</p>'
 +'<p><b style="color:#e6d3ac">七、责任限制与争议</b><br>7.1 因系统维护、故障或不可抗力导致的交易异常，平台有权回档处理并公告，双方互不追责。<br>7.2 争议应先友好协商，协商不成的提交平台运营方裁定；本协议最终解释权归平台所有。</p>'
 +'<p><b style="color:#e6d3ac">八、税费与成本说明</b><br>8.1 甲方进行买入、卖出及跨币种换币时，除本协议第三条约定之佣金外，平台不另行收取印花税、过户费或其他任何费用；行情查看、持仓查询、K线复盘等功能永久免费。<br>8.2 跨币种成交按成交瞬间盘面汇率折算，汇率本身波动不构成平台收费，但会影响甲方实际到账数量，甲方应在下单前仔细核对汇率提示。</p>'
 +'<p><b style="color:#e6d3ac">九、通知与送达</b><br>9.1 与本协议有关的行情异动、交易成交、系统维护等信息，平台通过页面公示与系统通知方式送达，视为自发布之时起送达甲方。<br>9.2 甲方应保持关注页面公告；因未及时查看公告导致的损失，由甲方自行承担。</p>'
 +'<p><b style="color:#e6d3ac">十、协议变更与终止</b><br>10.1 平台有权根据系统运营需要修订本协议，修订后的协议自页面公示之日起适用于新发生的交易，已成交的交易仍按成交时版本执行。<br>10.2 甲方注销存档或长期未登录的，本协议自存档注销之日终止，未了结的持仓与委托仍按本协议约定处理完毕。</p>'
 +'<p><b style="color:#e6d3ac">十一、其他</b><br>11.1 本协议任何条款被认定无效的，不影响其余条款的效力。<br>11.2 甲方勾选确认即视为知悉：交易有风险，入市须谨慎。</p>';
}
function v2finPactHtml(p){
 var d=new Date();var ds=d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日';
 var termTxt=p.term===0?'活期（随存随取）':p.term+' 天定期';
 return '<h3 style="text-align:center;color:#f0d9a2;font-size:13.5px;letter-spacing:.18em;margin-bottom:10px">《理财产品申购协议与风险揭示书》</h3>'
 +'<p style="text-align:center;font-family:var(--mono);font-size:10px;color:#8d7c5f;letter-spacing:.12em;margin:-4px 0 10px">签署日期：'+ds+' · 产品：'+p.name+' · 参考年化 '+(p.rate*100).toFixed(0)+'% · '+termTxt+'</p>'
 +'<p><b style="color:#e6d3ac">甲方（投资者）：</b>本系统参赛者<br><b style="color:#e6d3ac">乙方（管理人）：</b>考研EP系统金融中心理财业务运营方</p>'
 +'<p><b style="color:#e6d3ac">一、产品要素</b><br>1.1 产品名称：'+p.name+'；参考年化收益率 '+(p.rate*100).toFixed(0)+'%；产品期限：'+termTxt+'；起投金额：'+p.min+(p.limit?('；单账户持仓上限 '+p.limit):'')+'。<br>1.2 收益类型：'+(p.risk?'浮动收益型（非保本）':'稳健收益型')+'；风险等级：'+(p.risk?'R4 中高风险':'R1-R2 低风险')+'。</p>'
 +'<p><b style="color:#e6d3ac">二、收益计算与分配</b><br>2.1 活期产品采用万份收益制，自申购确认之日起按日计息，收益并入持仓，随存随取。<br>2.2 定期产品到期一次性还本付息：利息 = 本金 × 参考年化 × 实际持有天数 ÷ 365，到期自动回包。<br>2.3 理财收益池来源于股市手续费收入的 50% 再分配，池子规模每日公示；池子充裕时活期收益上浮、紧张时下浮。</p>'
 +'<p><b style="color:#e6d3ac">三、赎回规则</b><br>3.1 活期：随时赎回，本息即时到账。<br>3.2 定期：仅支持到期赎回；若提前赎回，仅返还本金，已计提收益全部清零，请谨慎安排资金。<br>3.3 股指挂钩（如适用）：到期收益与大盘指数区间表现挂钩，区间为 -5% ~ +28%，不承诺保本，最坏情况下可能亏损本金 5%。</p>'
 +'<p><b style="color:#e6d3ac">四、风险提示（重要）</b><br>4.1 本金风险：除股指挂钩产品明确可能亏损外，其余产品为系统内稳健计息设计，但仍可能因规则调整而变动。<br>4.2 流动性风险：定期产品持有期内资金不可用，请预留日常开销。<br>4.3 收益不达预期：参考年化不代表承诺收益，实际收益以到期结算为准。</p>'
 +'<p><b style="color:#e6d3ac">五、信息披露</b><br>5.1 产品要素、收益池规模、持仓与收益明细均在理财面板实时公示，甲方应自行关注。</p>'
 +'<p><b style="color:#e6d3ac">六、禁止与违约</b><br>6.1 严禁利用漏洞套取收益；违者平台有权清零违规收益并追回。</p>'
 +'<p><b style="color:#e6d3ac">七、电子签署效力</b><br>7.1 甲方勾选「我已阅读协议」并点击「确认申购」，即视为已阅读并同意本协议全部条款，申购记录以系统数据为准。</p>'
 +'<p><b style="color:#e6d3ac">八、争议解决</b><br>8.1 争议应先友好协商，协商不成的提交平台运营方裁定；本协议最终解释权归平台所有。</p>'
 +'<p><b style="color:#e6d3ac">九、产品估值与份额确认</b><br>9.1 甲方申购时以支付币种按盘面汇率折算为产品币种份额，份额确认以系统记录为准，面板持仓数字即为确权凭证。<br>9.2 产品存续期内，活期产品每日展示计提收益；定期产品在到期日之前不展示浮动盈亏，避免误导，实际收益以到期结算单为准。</p>'
 +'<p><b style="color:#e6d3ac">十、投资者适当性声明</b><br>10.1 甲方确认：用于申购的资金为系统内富余资产，未影响每日结算、杯赛报名等核心玩法的正常资金安排。<br>10.2 甲方已理解本产品并非存款，不受任何现实存款保险保障；若无法承受本金波动，请选择活期类产品或不要申购股指挂钩产品。</p>'
 +'<p><b style="color:#e6d3ac">十一、冷静期与撤单</b><br>11.1 甲方提交申购指令前可无限次修改金额与支付币种，点击「确认申购」前的任何环节均可放弃，不产生任何费用。<br>11.2 申购确认后份额即刻成立并开始计息，除第三条约定之提前赎回规则外，甲方不得要求撤销当笔申购。</p>'
 +'<p><b style="color:#e6d3ac">十二、其他</b><br>12.1 本协议任何条款被认定无效的，不影响其余条款的效力。<br>12.2 甲方勾选确认即视为知悉：理财非存款，投资须谨慎。</p>';
}
var __trSide=null;
function fTrpToggle(){FE('f-trpOk').disabled=!FE('f-trpCk').checked;}
function fFnpToggle(){FE('f-fnpOk').disabled=!FE('f-fnpCk').checked;}
function trConfirm(side){
 var q=parseFloat(FE('f-trQty').value)||0;
 if(q<=0){toast('请先输入数量');return;}
 var it=curInst;
 var unitC=instBCPrice(it)*q;
 var gross=unitC*(side==='buy'?1.005:1.01);
 var cur=side==='buy'?payCur:sellCur;
 var amtC=bcTo(cur,gross);
 FE('f-trpDeal').innerHTML='<div style=\'display:flex;gap:14px;flex-wrap:wrap;font-family:var(--mono);font-size:12px;color:#e6d3ac\'><span>标的 <b style=\'color:#ffd60a\'>'+it.name+'（'+it.code+'）</b></span><span>方向 <b style=\'color:'+(side==='buy'?'#7ee2a0':'#ff8a80')+'\'>'+(side==='buy'?'买入':'换币卖出')+'</b></span><span>数量 <b style=\'color:#ffd60a\'>'+q+'</b> 份</span><span>参考价 '+fmt(it.price)+' '+instUnit(it)+'/份</span><span>含手续费合计 <b style=\'color:#ffd60a\'>'+fmt(amtC)+'</b> '+curName(cur).slice(2)+'</span></div>';
 FE('f-trpBody').innerHTML=v2trPactHtml(it);
 FE('f-trpCk').checked=false;FE('f-trpOk').disabled=true;
 __trSide=side;
 FE('f-trpOk').onclick=function(){closeMo('fmoTrPact');doTrade(__trSide);};
 FE('fmoTrPact').classList.add('show');
}
function finConfirm(){
 var q=parseFloat(FE('f-finAmt').value)||0;
 var p=finTarget;
 if(!q||q<=0){toast('请输入金额');return;}
 if(p.min&&q<p.min){toast('起投金额 '+p.min+{bc:' ⚫',tk:' 🪙',pt:' 💰'}[p.cur]);return;}
 var eqBC=p.cur==='bc'?q:(p.cur==='tk'?q/rateTK():q/ratePT());
 var payC=finCur==='bc'?eqBC:(finCur==='tk'?eqBC*rateTK():eqBC*ratePT());
 FE('f-fnpDeal').innerHTML='<div style=\'display:flex;gap:14px;flex-wrap:wrap;font-family:var(--mono);font-size:12px;color:#e6d3ac\'><span>产品 <b style=\'color:#ffd60a\'>'+p.ic+' '+p.name+'</b></span><span>申购 <b style=\'color:#ffd60a\'>'+fmt(q)+'</b> '+{bc:'⚫ 黑币',tk:'🪙 代币',pt:'💰 积分'}[p.cur]+'</span><span>实付 <b style=\'color:#ffd60a\'>'+fmt(payC)+'</b> '+curName(finCur).slice(2)+'</span></div>';
 FE('f-fnpBody').innerHTML=v2finPactHtml(p);
 FE('f-fnpCk').checked=false;FE('f-fnpOk').disabled=true;
 FE('f-fnpOk').onclick=function(){closeMo('fmoFinPact');finDoBuy();};
 FE('fmoFinPact').classList.add('show');
}
window.fTrpToggle=fTrpToggle;window.fFnpToggle=fFnpToggle;window.trConfirm=trConfirm;window.finConfirm=finConfirm;
function fCtToggle(){FE('f-ctSign').disabled=!FE('f-ctCk').checked;}
window.fCtToggle=fCtToggle;
function openContract(gid,qty,price,fromBag){
 var g=goodOf(gid);var guide=guideTK(g);
 FE('f-ctCk').checked=false;FE('f-ctSign').disabled=true;
 var now=new Date();
 var ds=now.getFullYear()+'年'+(now.getMonth()+1)+'月'+now.getDate()+'日';
 var no='EX-'+gid.toUpperCase()+'-'+now.getTime().toString(36).toUpperCase();
 var ratio=(price/guide).toFixed(2);
 var total=qty*price, net=total*0.85, fee=total*0.15;
 var h3='<h3 style="text-align:center;color:#f0d9a2;font-size:15px;letter-spacing:.2em;margin-bottom:12px">《考研EP系统交易所挂牌交易合同》</h3>';
 var body='<p style="text-align:center;font-family:var(--mono);font-size:10.5px;color:#8d7c5f;letter-spacing:.14em;margin:-6px 0 14px">合同编号：'+no+'　·　签署日期：'+ds+'</p>'
 +'<p><b style="color:#e6d3ac">甲方（卖方）：</b>本系统参赛者（以签署时登录账号为准）<br><b style="color:#e6d3ac">乙方（买方）：</b>交易所内竞买方，由系统按价格优先、时间优先原则自动撮合<br><b style="color:#e6d3ac">丙方（平台）：</b>考研EP系统交易所运营方，提供挂牌、撮合、结算与交割服务</p>'
 +'<p><b style="color:#e6d3ac">一、交易标的</b><br>1.1 标的物品：<b style="color:#ffd60a">'+g.ic+' '+g.n+'</b>，数量 <b style="color:#ffd60a">'+qty+'</b> 件，按件计数、不可分割。<br>1.2 甲方声明对标的拥有完整处分权，标的来源合法，未设定质押、冻结或其他权利负担，亦不属于盗号、刷取、利用漏洞等违规所得。<br>1.3 标的以甲方仓库实际库存为准；挂牌成功后由系统锁定相应库存，挂牌期内甲方不得另行处分。</p>'
 +'<p><b style="color:#e6d3ac">二、挂牌定价</b><br>2.1 挂牌单价：<b style="color:#ffd60a">'+fmt(price)+'</b> 🪙/件；挂牌总价：<b style="color:#ffd60a">'+fmt(total)+'</b> 🪙。<br>2.2 定价依据：本合同签署时交易所公示指导价 <b style="color:#ffd60a">'+fmt(guide)+'</b> 🪙，本挂牌价为指导价的 <b style="color:#ffd60a">'+ratio+'×</b>，处于交易所允许的定价区间（0.5× 至 2× 指导价）之内。<br>2.3 挂牌期限：<b>72 小时（三个交易日）</b>，自签署之时起算。期内标的进入撮合队列，由系统自动匹配买方。</p>'
 +'<p><b style="color:#e6d3ac">三、费用与结算</b><br>3.1 平台服务费：按成交金额的 <b>15%</b> 计收，即 <b style="color:#ffd60a">'+fmt(fee)+'</b> 🪙，由甲方承担，于成交结算时自货款中自动扣收，不再另行收取其他费用。<br>3.2 甲方净得：成交金额的 85%，即 <b style="color:#7ee2a0">'+fmt(net)+'</b> 🪙，于成交之时即时入账，可在交易所面板查询流水。<br>3.3 若挂牌期满仍无人购买，本合同自动解除，标的解除锁定并<b>全额退回</b>甲方仓库，双方互不承担责任，亦不产生任何费用。</p>'
 +'<p><b style="color:#e6d3ac">四、交付与验收</b><br>4.1 成交即交付：系统自甲方仓库扣减标的，并划转至买方交易背包，交易背包内物品需买方手动交割入仓后使用。<br>4.2 唯一性道具（同类别每账户最多持有一件）超出买方持有上限的部分无法交割，该部分自动退回甲方仓库。<br>4.3 本系统内虚拟物品一经交付，不支持无理由退换；买方应在交割前自行确认需求。</p>'
 +'<p><b style="color:#e6d3ac">五、甲方承诺与违约</b><br>5.1 甲方违反第 1.2 条声明的，平台有权撤销成交、追回已发放款项，并处以挂牌金额等额的违约金；情节严重的取消交易资格。<br>5.2 挂牌期内甲方不得单方面撤回标的；确需撤回的，可通过系统保底收购渠道处理，不适用本合同。</p>'
 +'<p><b style="color:#e6d3ac">六、平台责任限制</b><br>6.1 因系统维护、故障或不可抗力导致的错单、延迟，平台有权回档处理并公告说明，双方互不追责。<br>6.2 价格波动风险由买卖双方自行承担，平台不对挂牌价格的涨跌作任何保证。</p>'
 +'<p><b style="color:#e6d3ac">七、其他约定</b><br>7.1 本合同以电子方式订立，甲方点击「签字上架」并完成身份校验（签署动作）即视为已充分阅读、理解并同意全部条款，合同自点击之时起生效。<br>7.2 本合同适用考研EP系统交易所业务规则；规则与本合同不一致的，以本合同为准。<br>7.3 因本合同产生的争议，双方应先行友好协商；协商不成的，提交平台运营方裁定。<br>7.4 本合同一式两份，甲乙双方各执一份，平台留存备案。</p>'
 +'<p style="text-align:center;color:#f0d9a2;margin-top:14px">—— 甲方确认无误后请点击下方「🔏 签字上架」——</p>';
 FE('f-ctBody').innerHTML=h3+body;
 FE('f-ctSign').onclick=function(){
  if(fromBag!==undefined){var bag=X.bag[fromBag];if(bag){bag.qty-=qty;if(bag.qty<=1e-9)X.bag.splice(fromBag,1);}}
  else{setQty(g,qtyOf(g)-qty);}
  X.listings.push({gid:gid,qty:qty,price:price,daysLeft:3});
  closeMo('fmoContract');renderAll();
  toast('🔏 合同已签：'+g.n+' ×'+qty+' 上架（编号 '+no+'）');
 };
 FE('fmoContract').classList.add('show');
}
function xSell(gid,fromBagIdx){
 var g=goodOf(gid);__sellG=g;__sellFromBag=fromBagIdx;
 var maxQ=fromBagIdx!==undefined?X.bag[fromBagIdx].qty:qtyOf(g);
 var guide=guideTK(g);
 FE('f-slT').textContent='交易所出售 · '+g.n;
 FE('f-slInfo').innerHTML='可出 <b style="color:#ffd60a">'+maxQ+'</b> 件 · 卖家到手 85% · 挂牌 72 小时 · 超时退回';
 FE('f-slQty').value='';FE('f-slPrice').value='';
 FE('f-slGuide').textContent='指导价 '+fmt(guide)+' 🪙 · 允许区间 '+fmt(guide*0.5)+' ~ '+fmt(guide*2);
 FE('f-slGo').onclick=function(){
  var q=parseFloat(FE('f-slQty').value)||0,p=parseFloat(FE('f-slPrice').value)||0;
  if(q<=0){toast('请输入出售数量');return;}
  if(q>maxQ){toast('数量超出可售（'+maxQ+'）');return;}
  if(p<=0){toast('请输入单价');return;}
  if(p<guide*0.5||p>guide*2){toast('定价超出允许区间（0.5×~2× 指导价）');return;}
  closeMo('fmoSell');
  openContract(gid,q,p,fromBagIdx);
 };
 FE('fmoSell').classList.add('show');
}
function xSellBag(i){var b=X.bag[i];xSell(b.gid,i);}
function xDump(gid){
 var g=goodOf(gid);
 var bp=guideTK(g)*0.5;
 finPrompt('系统收购 · '+g.n,'保底价 <b style="color:#ffd60a">'+fmt(bp)+'</b> 🪙/个 · 到手 85%<br>仓库持有 ×'+qtyOf(g),''+qtyOf(g),function(q){
  if(!q||q<=0)return;
  if(q>qtyOf(g)){toast('数量超出');return;}
  var gain=q*bp*0.85;
  setQty(g,qtyOf(g)-q);S.tk+=gain;
  renderAll();
  toast('系统收购 '+q+' 件 · 到账 '+fmt(gain)+' 🪙');
 });
}
function xDeposit(i){
  var b=X.bag[i];if(!b)return;
  var g=goodOf(b.gid);
  if(g.unique){
    var allow=1-g.qty;                     /* 唯一道具入仓额度 */
    if(allow<=0){toast('【'+g.n+'】唯一性道具，仓库仅能持有一个，多余只能转卖');return;}
    var dep=Math.min(b.qty,allow);
    setQty(g,qtyOf(g)+dep);b.qty-=dep;
    if(b.qty<=1e-9)X.bag.splice(i,1);
    renderAll();
    toast('已入仓 '+dep+' 件'+(b.qty>0?(' · 唯一道具仅能入仓一个，剩余 '+b.qty+' 件留交易背包只能转卖'):''));
    return;
  }
  setQty(g,qtyOf(g)+b.qty);X.bag.splice(i,1);
  renderAll();
  toast('已存入仓库：'+g.n+' ×'+b.qty);
}
/* 仓库：出售与保底收购入口 */
function whRender(){
  var el=FE('f-whMount');if(!el)return;
  var html='';
  GOODS.forEach(function(g){
    if(g.qty<=0)return;
    html+='<div class="hold-row"><span>'+g.ic+' '+g.n+(g.rare?' <span class="pos-chip" style="background:rgba(255,214,10,.14);color:#ffd60a;border-color:rgba(255,214,10,.4)">稀有</span>':'')
      +' × <b>'+g.qty+'</b></span>'
      +'<span style="display:flex;gap:6px">'
      +'<button class="btn" style="padding:6px 13px;font-size:11.5px;background:rgba(240,179,92,.12);border-color:rgba(232,163,61,.4);color:#f0d9a2" onclick="xSell(\''+g.id+'\')">↗ 交易所出售</button>'
      +'<button class="btn" style="padding:6px 13px;font-size:11.5px" title="到手 85%" onclick="xDump(\''+g.id+'\')">↘ 系统收购 '+fmt(guideTK(g)*0.5)+'</button>'
      +'</span></div>';
  });
  el.innerHTML=html||'<div style="text-align:center;color:#6b5a3d;padding:14px;font-size:12px">仓库空空 · 去交易所买入或等每日掉落</div>';
}
function swapRate(f,t){
  var rTK=rateTK(), rPT=ratePT();   /* 1⚫=rTK🪙=rPT💰 */
  if(f===t)return 1;
  if(f==='bc'&&t==='tk')return rTK;
  if(f==='tk'&&t==='bc')return 1/rTK;
  if(f==='bc'&&t==='pt')return rPT;
  if(f==='pt'&&t==='bc')return 1/rPT;
  if(f==='tk'&&t==='pt')return rPT/rTK;
  return rTK/rPT;
}
function updSwap(){
  var amt=parseFloat(FE('swAmt').value)||0;
  var f=FE('swFrom').value,t=FE('swTo').value;
  var out=FE('swOut');
  if(amt<=0){
    out.innerHTML='汇率：1⚫ = '+fmt(rateTK())+'🪙 = '+fmt(ratePT())+'💰 · 1🪙 = '+(ratePT()/rateTK()).toFixed(1)+'💰（随盘中价实时浮动）';
    return;
  }
  if(f===t){out.innerHTML='<span style="color:#ff8a80">源币种与目标币种相同</span>';return;}
  var got=amt*swapRate(f,t)*0.99;
  var inBC=bcTo('bc',amt), outBC=bcTo('bc',got);
  out.innerHTML='将到账 <b style="color:#ffd60a;font-size:15px">'+fmt(got)+' '+curName(t).slice(2)+'</b>（扣 1% 手续费）'
    +'<br><span style="font-size:10.5px;color:#8d7c5f">≈ 黑币等值 '+fmt(outBC)+' ⚫（付 '+fmt(inBC)+' ⚫ 等值）· 汇率 '+fmt(swapRate(f,t))+'</span>';
}
function renderInst(){
  var list=FE('f-instList');
  if(curTab==='pos'){
    var rows=[];
    INSTR.forEach(function(it){
      ['bc','tk','pt'].forEach(function(c){
        var lot=S.pos[it.id]&&S.pos[it.id][c];
        if(lot&&lot.qty>0.0001){
          var pnl=(it.price-lot.cost)*lot.qty;
          rows.push('<div class="inst"><span class="inst-ic">'+it.ic+'</span><div class="inst-info">'
           +'<div class="inst-name">'+it.name+' <span class="pos-chip">'+curName(c).slice(2)+'仓</span></div>'
           +'<div class="inst-pos">'+lot.qty.toFixed(2)+' 份 · 成本 '+fmt(lot.cost)+' '+instUnit(it)+'</div></div>'
           +'<div class="inst-right"><div class="inst-price '+clsOf(pnl)+'">'+(pnl>=0?'+':'')+fmt(pnl)+'</div>'
           +'<div class="inst-chg '+clsOf(pnl)+'">'+(pnl>=0?'盈':'亏')+'（'+curName(c).slice(2)+'结算）</div></div></div>');
        }
      });
    });
    list.innerHTML=rows.join('')||'<div style="text-align:center;color:#6b5a3d;padding:16px;font-size:12px">暂无持仓 · 去行情页买入</div>';
    return;
  }
  list.innerHTML=INSTR.filter(function(it){return it.tab===curTab;}).map(function(it){
    var c=chgOf(it),pTotal=posTotal(it.id);
    var rv=rowView[it.id]||it.cur;
    return '<div class="inst" onclick="openTrade(\''+it.id+'\')">'
     +'<button class="btn rvsw" data-id="'+it.id+'" title="切换计价货币" style="padding:6px 8px;font-size:12px;flex-shrink:0">💱'+{bc:'⚫',tk:'🪙',pt:'💰'}[rv]+'</button>'
     +'<span class="inst-ic">'+it.ic+'</span>'
     +'<div class="inst-info"><div class="inst-name">'+it.name+' <span class="inst-code">'+it.code+'</span>'
     +(pTotal>0?'<span class="pos-chip">持 '+pTotal.toFixed(2)+'</span>':'')+(it.cur!=='bc'?'<span class="pos-chip" style="background:rgba(240,179,92,.14);color:#ffd60a;border-color:rgba(232,163,61,.45)">'+instUnit(it)+'专属</span>':'')+'</div>'
     +'<div class="inst-pos">指数 '+(it.price/it.base*100).toFixed(2)+' · 昨收 '+fmt(it.hist[it.hist.length-2]?it.hist[it.hist.length-2].c:it.base)+' '+instUnit(it)+'/份</div></div>'
     +'<svg class="inst-spark" viewBox="0 0 90 30"></svg>'
     +'<div class="inst-right"><div class="inst-price '+clsOf(c)+'">'+fmt(priceIn(it,rv))+'<small style="font-size:10px;color:#8d7c5f"> '+curName(rv).slice(2)+'/份</small></div>'
     +'<div class="inst-chg '+clsOf(c)+'">'+(c>=0?'▲ +':'▼ ')+(c*100).toFixed(2)+'%</div></div></div>';
  }).join('');
  Array.prototype.forEach.call(list.querySelectorAll('.inst'),function(row,i){
    var it=INSTR.filter(function(x){return x.tab===curTab;})[i];
    if(row.querySelector('.inst-spark'))sparkline(row.querySelector('.inst-spark'),it.hist.map(function(h){return h.c;}),chgOf(it)>=0?'#ff3b30':'#34c759');
  });
  Array.prototype.forEach.call(list.querySelectorAll('.rvsw'),function(b){
    b.onclick=function(e){
      e.stopPropagation();
      var id=b.getAttribute('data-id');
      var order=['bc','tk','pt'];
      rowView[id]=order[(order.indexOf(rowView[id]||'bc')+1)%3];
      renderInst();
    };
  });
}
function renderFin(){
  FE('f-finGrid').innerHTML=PRODUCTS.map(function(p,i){
    var held=S.fin[p.id];
    var curName={bc:'⚫',tk:'🪙',pt:'💰'}[p.cur];
    return '<div class="fin-card"><div class="fin-top"><span class="fin-name">'+p.ic+' '+p.name+'</span><span class="fin-tag'+(p.risk?' risk':'')+'">'+p.tag+'</span></div>'
     +'<div class="fin-rate">'+(p.rate*100).toFixed(0)+'%<small> 参考年化</small></div>'
     +'<div class="fin-desc">'+p.desc+(held?'<br><b style="color:#7cc4ff">已投 '+fmt(held.amt)+' '+curName+' · '+held.days+'/'+ (p.term||'∞') +' 天'+(held.accrued>0?' · 已计息 +'+fmt(held.accrued):'')+'</b>':'')+'</div>'
     +'<div class="fin-act"><button class="btn gold" onclick="finBuy(\''+p.id+'\')">申 购</button>'
     +(held?'<button class="btn" onclick="finRedeem(\''+p.id+'\')">'+(held.mature?'赎 回':'提前赎回')+'</button>':'')
     +'</div></div>';
  }).join('');
}
function renderHold(){
  var ks=Object.keys(S.fin);
  FE('f-holdList').innerHTML=ks.length?'<div style="font-size:11px;color:#c9a86a;letter-spacing:.14em;margin-bottom:6px">— 理财持仓 —</div>'
   +ks.map(function(pid){
     var h=S.fin[pid],p=PRODUCTS.find(function(x){return x.id===pid});
     return '<div class="hold-row"><span>'+p.name+' <b>'+fmt(h.amt)+'</b> · 第 '+h.days+' 天</span>'
      +(h.mature?'<b style="color:#ffd60a">已到期 收益 '+(h.matureGain>=0?'+':'')+fmt(h.matureGain)+'</b><button class="btn gold" style="padding:4px 12px" onclick="finRedeem(\''+pid+'\')">领取</button>'
        :'<b style="color:#7ee2a0">计息中 +'+fmt(h.accrued)+'</b>')
      +'</div>';
   }).join(''):'';
}
/* ================= 交易 ================= */
function openTrade(id){
  curInst=INSTR.find(function(x){return x.id===id;});
  var it=curInst,c=chgOf(it);
  payCur=instCurs(it)[0];sellCur=instCurs(it)[0];viewCur='bc';
  FE('f-trTitle').innerHTML=it.ic+' '+it.name+' ('+it.code+') <span style="font-size:10px;color:#8d7c5f;font-family:var(--mono)">'+fmt(it.price)+' '+instUnit(it)+'/份 · 指数 '+(it.price/it.base*100).toFixed(2)+(it.cur!=='bc'?(' · ≈'+fmt(instBCPrice(it))+'⚫'):'')+(it.nom?(' · 每份='+it.nom):'')+'</span>';
  buildCurTabs('f-payTabs',instCurs(it),payCur,function(c){payCur=c;updFee();});
  var heldCurs=instCurs(it).filter(function(c){return posLot(it.id,c).qty>0.0001;});
  sellCur=heldCurs.length?heldCurs[0]:instCurs(it)[0];
  buildCurTabs('f-sellTabs',instCurs(it),sellCur,function(c){sellCur=c;updFee();});
  FE('f-viewSw').onclick=function(){
    var order=['bc','tk','pt'];
    viewCur=order[(order.indexOf(viewCur)+1)%3];
    this.textContent='💱 计价 '+{bc:'⚫',tk:'🪙',pt:'💰'}[viewCur];
    updFee();
  };
  FE('f-viewSw').textContent='💱 计价 ⚫';
  FE('f-trQty').value='';
  kline(FE('f-kline'),it.hist);
  updFee();
  FE('fmoTr').classList.add('show');
}
function buildCurTabs(elId,curs,cur,cb,enabled){
  var el=document.getElementById(elId);
  el.innerHTML=curs.map(function(c){
    var off=enabled&&enabled.indexOf(c)===-1;
    return '<button class="btn'+(c===cur?' gold':'')+'" data-c="'+c+'" '+(off?'disabled style="opacity:.35"':'')+'>'+curName(c)+'</button>';
  }).join('');
  Array.prototype.forEach.call(el.querySelectorAll('button'),function(b){
    b.onclick=function(){cb(b.getAttribute('data-c'));buildCurTabs(elId,curs,b.getAttribute('data-c'),cb,enabled);};
  });
}
function updFee(){
  var q=parseFloat(FE('f-trQty').value)||0;
  var it=curInst;
  var pay=FE('f-trPay'), fee=FE('f-trFee');
  var unit=curName(viewCur).slice(2);
  if(q<=0){
    pay.style.display='none';
    fee.innerHTML='计价参考：1 份 = '+fmt(bcTo(viewCur,instBCPrice(it)))+' '+unit
      +'<br>可用 '+fmt(S.bc)+'⚫ / '+fmt(S.tk)+'🪙 / '+fmt(S.pt)+'💰 · 汇率 1⚫='+fmt(rateTK())+'🪙='+fmt(ratePT())+'💰';
    return;
  }
  var buyC=bcTo(payCur,q*instBCPrice(it)*1.005), sellC=bcTo(sellCur,q*instBCPrice(it)*0.99);
  pay.style.display='block';
  pay.innerHTML='<div style="font-size:10px;color:#8d7c5f;letter-spacing:.1em">实际支付（已含手续费）</div>'
    +'<div style="font-size:19px;font-weight:900;color:#ffd60a;margin-top:2px">买入 '+q+' 份 → 实付 '+fmt(buyC)+' '+curName(payCur).slice(2)+'</div>'
    +'<div style="font-size:12px;color:#c9a86a;margin-top:2px">或卖出 '+q+' 份 → 到账 '+fmt(sellC)+' '+curName(sellCur).slice(2)+'（扣 1% 费）</div>';
  fee.innerHTML='按'+curName(viewCur)+'显示：'+fmt(bcTo(viewCur,q*instBCPrice(it)))+' '+unit+'（不计费，仅比价）'
    +'<br>汇率 1⚫='+fmt(rateTK())+'🪙='+fmt(ratePT())+'💰';
}
FE('f-trQty').oninput=updFee;
function doTrade(side){
  var q=parseFloat(FE('f-trQty').value)||0;
  if(q<=0){toast('请输入数量');return;}
  var it=curInst;
  if(side==='buy'){
    var costC=bcTo(payCur,q*instBCPrice(it)*1.005);
    if(costC>curBal(payCur)+1e-9){toast(curName(payCur)+'不足');return;}
    payFrom(payCur,costC);S.pool+=q*instBCPrice(it)*0.005;
    var lot=posLot(it.id,payCur);
    S.pos[it.id]=S.pos[it.id]||{};
    lot.cost=(lot.cost*lot.qty+q*it.price)/(lot.qty+q);lot.qty+=q;
    S.pos[it.id][payCur]=lot;
    toast('买入 '+q+' 份 '+it.name+'（'+curName(payCur)+'建仓）');
  }else{
    /* 换币卖出：总仓即可卖，先到账所选币种（同币仓优先扣减） */
    if(posTotal(it.id)<q-1e-9){toast('持仓不足（总 '+posTotal(it.id).toFixed(2)+' 份）');return;}
    var gainC=bcTo(sellCur,q*instBCPrice(it)*0.99);
    gainTo(sellCur,gainC);S.pool+=q*instBCPrice(it)*0.005;
    var left=q;
    ['bc','tk','pt'].sort(function(a,b){return (a===sellCur?-1:0)-(b===sellCur?-1:0);}).forEach(function(c){
      if(left<=1e-9)return;
      var lot=S.pos[it.id]&&S.pos[it.id][c];
      if(!lot||lot.qty<=1e-9)return;
      var take=Math.min(lot.qty,left);
      lot.qty-=take;left-=take;
      if(lot.qty<1e-9){lot.qty=0;lot.cost=0;}
    });
    toast('换币卖出 '+q+' 份 · '+curName(sellCur)+'到账 '+fmt(gainC));
  }
  closeMo('fmoTr');renderAll();
}
function kline(svg,hist){
  var arr=hist.slice(-30);
  var min=Math.min.apply(null,arr.map(function(h){return h.l;}));
  var max=Math.max.apply(null,arr.map(function(h){return h.h;}));var rg=max-min||1;
  var bw=440/arr.length;
  var html='';
  arr.forEach(function(h,i){
    var x=i*bw+bw*0.2,w=bw*0.6;
    var up=h.c>=h.o;
    var col=up?'#ff3b30':'#34c759';
    var yO=140-(h.o-min)/rg*120,yC=140-(h.c-min)/rg*120,yH=140-(h.h-min)/rg*120,yL=140-(h.l-min)/rg*120;
    html+='<line x1="'+(x+w/2)+'" y1="'+yH+'" x2="'+(x+w/2)+'" y2="'+yL+'" stroke="'+col+'" stroke-width="1"/>'
        +'<rect x="'+x+'" y="'+Math.min(yO,yC)+'" width="'+w+'" height="'+Math.max(2,Math.abs(yC-yO))+'" fill="'+(up?'#ff3b30':'#34c759')+'" opacity="0.9"/>';
  });
  svg.innerHTML=html;
}
/* ================= 理财操作 ================= */
var finTarget=null;
function finBuy(pid){
  finTarget=PRODUCTS.find(function(x){return x.id===pid;});
  FE('f-finT').textContent='申购 · '+finTarget.name;
  FE('f-finInfo').innerHTML='参考年化 <b style="color:#ffd60a;font-family:var(--mono)">'+(finTarget.rate*100).toFixed(0)+'%</b> · '+(finTarget.term?('期限 '+finTarget.term+' 天'):'活期随存随取')+'<br><span style="font-size:10.5px;color:#8d7c5f">'+finTarget.desc+'</span>';
  FE('f-finAmt').value='';
  updFinConv();
  FE('fmoFin').classList.add('show');
}
function updFinConv(){
  var q=parseFloat(FE('f-finAmt').value)||0;
  var pay=FE('f-finPay'), conv=FE('f-finConv');
  if(q<=0){
    pay.style.display='none';
    conv.textContent='汇率 1⚫ = '+fmt(rateTK())+'🪙 = '+fmt(ratePT())+'💰 · 可用 '+fmt(S.bc)+'⚫ / '+fmt(S.tk)+'🪙 / '+fmt(S.pt)+'💰';
    return;
  }
  var eqBC=finTarget.cur==='bc'?q:(finTarget.cur==='tk'?q/rateTK():q/ratePT());
  var curPay=bcTo(finCur,eqBC);
  pay.style.display='block';
  pay.innerHTML='<div style="font-size:10px;color:#8d7c5f;letter-spacing:.1em">实际扣款（按所选支付币种）</div>'
    +'<div style="font-size:19px;font-weight:900;color:#ffd60a;margin-top:2px">实付 '+fmt(curPay)+' '+curName(finCur).slice(2)+'</div>'
    +'<div style="font-size:11.5px;color:#c9a86a;margin-top:2px">申购 '+fmt(q)+' '+{bc:'⚫ 黑币',tk:'🪙 代币',pt:'💰 积分'}[finTarget.cur]+' · 到期按该币种本息回包</div>';
  conv.textContent='可用 '+fmt(curBal(finCur))+' '+curName(finCur).slice(2)+(curPay>curBal(finCur)?'（不足）':'');
  conv.style.color=curPay>curBal(finCur)?'#ff8a80':'#8d7c5f';
}
FE('f-finAmt').oninput=updFinConv;
document.querySelectorAll('.fincur').forEach(function(b){
  b.onclick=function(){
    document.querySelectorAll('.fincur').forEach(function(x){x.classList.remove('on')});
    b.classList.add('on');finCur=b.getAttribute('data-c');updFinConv();
  };
});
function finDoBuy(){
  var p=finTarget;
  var q=parseFloat(FE('f-finAmt').value)||0;
  if(!q||q<=0){toast('请输入金额');return;}
  if(p.min&&q<p.min){toast('起投金额 '+p.min+{bc:' ⚫',tk:' 🪙',pt:' 💰'}[p.cur]);return;}
  var amtC=bcTo(p.cur==='tk'?q/rateTK():(p.cur==='pt'?q/ratePT():q),1);
  var payC=bcTo(finCur,p.cur==='tk'?q/rateTK():(p.cur==='pt'?q/ratePT():q));
  var eqBC=p.cur==='bc'?q:(p.cur==='tk'?q/rateTK():q/ratePT());   /* 申购额的产品币→黑币等值 */
  var payC=finCur==='bc'?eqBC:(finCur==='tk'?eqBC*rateTK():eqBC*ratePT()); /* 再折成支付币 */
  var amt=q;                                                       /* 记账金额=输入金额（产品币） */
  if(p.limit&&S.fin[p.id]&&S.fin[p.id].amt+amt>p.limit){toast('超过单账户上限 '+p.limit+' ⚫');return;}
  if(payC>curBal(finCur)){toast(curName(finCur)+'不足');return;}
  payFrom(finCur,payC);
  var h=S.fin[p.id]||(S.fin[p.id]={amt:0,days:0,accrued:0,mature:false});
  if(!h.mature&&h.amt>0){h.amt+=amt;closeMo('fmoFin');return void(renderAll(),toast('追加申购 '+fmt(amt)+'，期限不变'));}
  S.fin[p.id]={amt:amt,days:0,accrued:0,mature:false,idxStart:S.idx};
  closeMo('fmoFin');renderAll();toast('申购成功：'+p.name+' '+fmt(amt)+'（实付 '+fmt(payC)+' '+curName(finCur).slice(2)+'）');
}
function finRedeem(pid){
  var p=PRODUCTS.find(function(x){return x.id===pid;}),h=S.fin[pid];
  if(!h)return;
  var curKey={bc:'bc',tk:'tk',pt:'pt'}[p.cur];
  var gain=h.mature?(h.matureGain||0):(p.term===0?h.accrued:0);
  var total=h.amt+gain;
  S[curKey]+=total;
  if(p.risk)toast(p.name+' 到期：本金 '+fmt(h.amt)+' + 收益 '+(gain>=0?'+':'')+fmt(gain)+'（大盘区间表现决定）');
  else if(!h.mature)toast('提前赎回：仅返本金 '+fmt(h.amt)+'，收益清零');
  else toast('赎回 '+fmt(total)+'（含收益 '+(gain>=0?'+':'')+fmt(gain)+'）');
  delete S.fin[pid];S.pool=Math.max(0,S.pool-gain);
  renderAll();
}
/* ================= 杂项 ================= */
function closeMo(id){document.getElementById(id).classList.remove('show');}
function toast(t){
  try{
    var box=document.getElementById('notif-container');if(!box)return;
    var c=document.createElement('div');
    c.className='notif-card';c.style.borderLeftColor='#e8a33d';
    c.innerHTML='<div class="notif-title">🏛️ 金融中心</div><div class="notif-body">'+t+'</div>';
    box.appendChild(c);
    requestAnimationFrame(function(){c.classList.add('show');});
    setTimeout(function(){c.classList.add('hide');setTimeout(function(){c.remove();},300);},4500);
  }catch(e){}
}
document.querySelectorAll('#page-stock .tab').forEach(function(t){t.onclick=function(){
  document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('on')});t.classList.add('on');
  curTab=t.getAttribute('data-tab');renderInst();};});

renderAll();

window.openTrade=openTrade;window.doTrade=doTrade;window.finBuy=finBuy;window.finDoBuy=finDoBuy;window.finRedeem=finRedeem;window.xBuy=xBuy;window.xSell=xSell;window.xDump=xDump;window.xSellBag=xSellBag;window.xDeposit=xDeposit;window.closeMo=closeMo;window.openContract=openContract;window.finPrompt=finPrompt;window.finPromptOk=finPromptOk;
window.finGo=function(sec){
  try{switchPage(sec==='stock'?'stock':(sec==='fin'?'wealth':'exchange'));}catch(e){}
};
window.__finRender=renderAll;
window.__finDbg={goodOf:goodOf,setQty:setQty,qtyOf:qtyOf,guideTK:guideTK,X:X,FIN:FIN,tickMarket:tickMarket,finAccrue:finAccrue,S:S,GOODS:GOODS};
/* ---- 结算心跳：每日结算 EP 驱动行情/计息/撮合 ---- */
function finTick(gain){
  try{
    window.__finSent=Math.max(-0.02,Math.min(0.02,((gain||0)-800)/40000));
    tickMarket();finAccrue();
    window.__finSent=null;
    saveState();
  }catch(e){}
}
try{
  if(typeof window.__ssShowReport==='function'&&!window.__ssShowReport.__finw){
    var __or=window.__ssShowReport;
    var __w=function(before,after){var r=__or.apply(this,arguments);try{finTick(after-before);}catch(e){}return r;};
    __w.__finw=true;window.__ssShowReport=__w;
  }
}catch(e){}
/* 仓库页跳转入口 */
function __whEntry(){
  try{
    var wp=document.getElementById('page-warehouse');
    if(!wp)return;
    if(!document.getElementById('f-whMount')){
      var mount=document.createElement('div');
      mount.id='f-whMount';
      mount.setAttribute('style','margin-bottom:12px');
      var list=document.getElementById('warehouse-list');
      list.parentNode.insertBefore(mount,list);
    }
    if(document.getElementById('wh2fin'))return;
    var card=document.createElement('div');
    card.id='wh2fin';
    card.setAttribute('style','display:flex;align-items:center;gap:12px;padding:13px 15px;margin-bottom:12px;border:1.5px solid rgba(232,163,61,.45);border-radius:14px;background:linear-gradient(135deg,rgba(240,179,92,.12),rgba(217,131,42,.05));cursor:pointer');
    card.innerHTML='<span style="font-size:26px">🔄</span><div style="flex:1"><div style="font-size:13.5px;font-weight:800;color:#f0d9a2">交易所 · 出售闲置道具</div>'
      +'<div style="font-size:10.5px;color:#8d7c5f;margin-top:2px">挂单 72 小时 · 卖家到手 85% · 价格挂钩汇率与成交量</div></div>'
      +'<span style="font-size:16px;color:#c9a86a">›</span>';
    card.onclick=function(){switchPage('finance');};
    var list=document.getElementById('warehouse-list');
    list.parentNode.insertBefore(card,list);
  }catch(e){}
}
window.addEventListener('load',function(){
  setTimeout(function(){
    try{__whEntry();renderAll();}catch(e){}
    /* 老存档补初始化 */
    try{
      if(!FIN.mkt)FIN.mkt={};
      GOODS.forEach(function(g){
        if(!FIN.mkt[g.id])FIN.mkt[g.id]={demand:1,vol:20+Math.floor(Math.random()*60),prevGuide:0};
        if(!FIN.volLog[g.id])FIN.volLog[g.id]=[FIN.mkt[g.id].vol];
      });
    }catch(e){}
  },500);
});
try{
  if(typeof window.switchPage==='function'&&!window.switchPage.__finw){
    var __sp=window.switchPage;
    var __w2=function(name){var r=__sp.apply(this,arguments);if(name==='stock'||name==='wealth'||name==='exchange'){try{renderAll();}catch(e){}}if(name==='warehouse'){try{__whEntry();}catch(e){}}return r;};
    __w2.__finw=true;window.switchPage=__w2;
  }
}catch(e){}
})();
/* ================= v1.5.6 金融中心 END ================= */

/* ================= 杯赛×竞技 v2 正式移植 build 20261112 ================= */
(function(){
'use strict';
if(window.__v2cuparena)return;window.__v2cuparena=true;
try{['renderCupUI','renderCupV3','cvRollover','renderArenaUI','arenaAddEp','cvAccrue','arenaSettleWeek','arenaOfflineCatchup','cupWeekScore'].forEach(function(f){window[f]=function(){};});}catch(e){}
function $(id){return document.getElementById(id);}
function v2save(){try{saveState();}catch(e){}try{updateTopBar();}catch(e){}}
function v2toast(t){try{toast(t);}catch(e){}}
function v2fmt(n){return (Math.round(n*100)/100).toLocaleString('en-US');}
var v2DAYS=['周日','周一','周二','周三','周四','周五','周六'];
var v2now=function(){return new Date();};
function v2dkey(d){d=d||v2now();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function v2monday(d){d=d||v2now();var x=new Date(d);x.setDate(x.getDate()-((x.getDay()+6)%7));return x;}
function v2wkey(){return v2dkey(v2monday());}
function v2bikey(){var m=v2monday();var wk=Math.floor(m.getTime()/6048e5);return 'B'+(Math.floor(wk/2));}
function v2hash(s){var x=2166136261;for(var i=0;i<s.length;i++){x^=s.charCodeAt(i);x=Math.imul(x,16777619);}return x>>>0;}
function v2pick(arr,seed){return arr[seed%arr.length];}
/* ---------- 数据 ---------- */
try{if(typeof state.cupV3!=='object'||!state.cupV3)state.cupV3={energy:10};if(typeof state.cupV3.energy!=='number')state.cupV3.energy=(typeof getEnergy==='function')?(getEnergy().v||10):10;}catch(e){}
var CV=(state.cupV2=state.cupV2||{wk:'',bk:'',dk:'',joined:{},ended:{},claimed:{},scores:{},trophies:0,tby:{},dayType:-1,dayType2:-1,yType:-1,extra:false,pactId:null});
var AV=(state.arenaV2=state.arenaV2||{wk:'',preReg:false,joined:false,placed:false,league:-1,placeScore:0,pts:1000,placeEP:0,revenge:[],ghosts:[],pendingG:null,chDay:'',optDay:''});
var MAT_CUPS=['积分杯','训练印记杯','冲刺奖章杯','全勤徽章杯','巅峰凭证杯'];
var MAT_ICONS=['💰','🧊','🏅','📛','🎖️'];
var V2CUPS=[
 {id:'day',e:2,dur:'当日',names:null,n:'💰 积分杯',wOff:0,ths:[0,300,800,1500,2400,3600],tiersD:['参与奖 300积分','第1段 材料×3','第2段 材料×8','第3段 材料×10','第4段 材料×15','第5段 材料×18']},
 {id:'wkpt',e:1,dur:'周五~周日',names:['积分热浪周末','黑金积分周末','积分满贯周末','周末积分狂欢'],n:'💰 积分热浪周末',wOff:0,ths:[0,300,800,1500,2400,3400,4600,6200,8500],tiersD:['参与奖 300积分','第1段 100积分','第2段 300积分','第3段 600积分','第4段 900积分','第5段 1200积分','第6段 1500积分','第7段 2000积分','第8段 2500积分']},
 {id:'core',e:3,dur:'周五~周日',names:['核心圣杯战','精研核心争夺战','核心猎场周末','圣杯守卫战'],n:'💠 核心圣杯战',wOff:1,ths:[0,400,1200,2600,4600,7600],tiersD:['参与奖 💠×1','第1段 💠×1','第2段 💠×3','第3段 💠×5','第4段 💠×10','第5段 💠×15']},
 {id:'sprint',e:1,dur:'周一至周五',names:['五日冲刺令','极限五日赛','弯道冲刺周','五日夺标赛'],n:'⏱ 五日冲刺令',wOff:2,ths:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],tiersD:['参与奖 -','1杯 100积分','2杯 材料包×5','3杯 1.2倍经验卡','4杯 训练印记×10','5杯 冲刺奖章×15','6杯 全勤徽章×15','7杯 巅峰凭证×10','8杯 材料包×20','9杯 属性抽取券×3','10杯 1.5倍经验卡×3','11杯 💠×5','12杯 2000积分','13杯 150代币','14杯 💠×10','15杯 黑币×10']},
 {id:'champ',e:3,dur:'周一至周日',names:['王者加冕周','冠冕争夺战','周王座杯','加冕时刻','荣耀登顶周'],n:'🏆 王者加冕周',wOff:3,ths:[0,800,2200,4200,6800,10000],tiersD:['参与奖 300积分','第1段 材料包×3','第2段 700积分','第3段 材料包×9','第4段 100代币','第5段 直接升级×5']},
 {id:'biwk',e:3,dur:'双周',names:['双周千里拉力','双周马拉松杯','双周拉力赛','千里征途杯'],n:'🚗 双周千里拉力',wOff:1,ths:[0,4000,12000,26000,48000,80000,124000,182000,256000,350000,468000],tiersD:['参与奖 25代币','第1段 500积分','第2段 75代币','第3段 材料包×10','第4段 属性抽取券×10','第5段 重铸券×5','第6段 💠×3','第7段 300代币','第8段 450代币','第9段 黑币×50','第10段 终极改装包×1']},
 {id:'fest',e:3,dur:'依版本通知',names:null,n:'🎊 节庆狂欢杯',wOff:0,ths:[],tiersD:[],dis:true}
];
function v2cupName(c){if(!c.names)return c.n;var wk=Math.floor(v2monday().getTime()/6048e5);return c.n.slice(0,3)+c.names[(wk+(c.wOff||0))%c.names.length];}
function v2pool(){
 if(typeof cupParentPool==='function'){try{var pp=cupParentPool();if(pp&&pp.length)return pp;}catch(e){}}
 var pool=[];
 if(typeof TASK_TAGS!=='undefined'){TASK_TAGS.forEach(function(t){if(t.path&&t.path.length>=2){var par=t.path.slice(0,-1).join('·');if(pool.indexOf(par)<0)pool.push(par);}});}
 return pool.length?pool:['考研·公共课·英语二','考研·公共课·政治','考研·专业课·333教育综合','本科·公共课'];
}
function v2rollTags(n){
 var pool=v2pool().slice();
 var h=v2hash('VT'+v2wkey()+(n*7));
 for(var i=pool.length-1;i>0;i--){h=(Math.imul(h,31)+7)>>>0;var j=h%(i+1);var t=pool[i];pool[i]=pool[j];pool[j]=t;}
 return pool.slice(0,Math.min(n,pool.length));
}
function v2tagOf(id){
 var t=null;try{t=getTag(id);}catch(e){}
 if(!t)return null;
 if(typeof cupTagOf==='function'){try{var c=cupTagOf(id);if(c)return c;}catch(e){}}
 return t.path&&t.path.length>=2?t.path.slice(0,-1).join('·'):null;
}
function v2cupTags(c){
 if(c.id==='champ')return v2rollTags(1);
 if(c.id==='biwk')return v2rollTags(2);
 if(c.id==='sprint')return v2rollTags(5);
 return null;
}
function v2dayTiers(k){if(k===0)return['参与奖 300积分','第1段 300积分','第2段 800积分','第3段 1500积分','第4段 2400积分','第5段 3600积分'];var m=MAT_CUPS[k].replace(/杯$/,'');return['参与奖 300积分','第1段 '+m+'×3','第2段 '+m+'×8','第3段 '+m+'×10','第4段 '+m+'×15','第5段 '+m+'×18'];}
function v2tiers(c){if(c.id==='day')return v2dayTiers(CV.dayType);if(c.id==='day2')return v2dayTiers(CV.dayType2);return c.tiersD;}
function v2cupById(id){if(id==='day2')return{id:'day2',e:2,dur:'当日',n:MAT_ICONS[CV.dayType2]+' 加开·'+MAT_CUPS[CV.dayType2]};return V2CUPS.find(function(x){return x.id===id;});}
function v2active(c){
 var d=v2now().getDay();
 if(c.id==='day')return true;
 if(c.id==='day2')return CV.extra&&CV.dayType2>=0;
 if(c.id==='sprint')return d>=1&&d<=5;
 if(c.id==='wkpt'||c.id==='core')return d===0||d>=5;
 if(c.id==='champ')return true;
 if(c.id==='biwk')return true;
 if(c.id==='fest')return false;
 return true;
}
function v2rollDay(){
 var opts=[0,1,2,3,4].filter(function(i){return i!==CV.yType;});
 CV.dayType=opts[v2hash(v2dkey())%opts.length];CV.yType=CV.dayType;
 CV.extra=(v2hash('X'+v2dkey())%5)===0;
 if(CV.extra){var rest=opts.filter(function(i){return i!==CV.dayType;});CV.dayType2=rest[v2hash('Y'+v2dkey())%rest.length];}
 else CV.dayType2=-1;
}
function v2rollCheck(){
 var wk=v2wkey(),bk=v2bikey(),dk=v2dkey();
 if(CV.dk!==dk){
  if(CV.dk){
   Object.keys(CV.joined).forEach(function(id){if((id==='day'||id==='day2')&&CV.joined[id]&&!CV.ended[id])CV.ended[id]=true;});
  }
  CV.dk=dk;v2rollDay();
 }
 if(CV.wk!==wk){
  if(CV.wk){['sprint','champ','wkpt','core'].forEach(function(id){if(CV.joined[id]&&!CV.ended[id])CV.ended[id]=true;});}
  CV.wk=wk;CV.trophies=0;CV.tby={};
 }
 if(CV.bk!==bk){
  if(CV.bk&&CV.joined.biwk&&!CV.ended.biwk)CV.ended.biwk=true;
  CV.bk=bk;
 }
 if(AV.wk!==wk){
  AV.wk=wk;AV.preReg=false;AV.joined=false;AV.placed=false;AV.league=-1;AV.placeScore=0;AV.pts=1000;AV.placeEP=0;AV.revenge=[];AV.pendingG=null;AV.chDay='';AV.optDay='';
  v2initGhosts();
 }
}
/* ---------- 今日任务得分 ---------- */
function v2todayRaw(){var s=0;(state.todayTasks||[]).forEach(function(t){var e=parseFloat(t.baseEp);if(e>0)s+=e;});return s;}
function v2bonus(ep,max){if(ep>=max)return 300;if(ep>=max*0.9)return 200;if(ep>=max*0.8)return 100;return 0;}
function v2todayDetail(tags){
 var raw=0,bonus=0;
 (state.todayTasks||[]).forEach(function(t){
  var e=parseFloat(t.baseEp);if(!(e>0))return;
  var tg=null;try{tg=getTag(t.tagId);}catch(err){}
  if(tags){if(!tg||tags.indexOf(v2tagOf(t.tagId))<0)return;}
  var mx=tg?tg.maxEp:99999;
  raw+=e;bonus+=v2bonus(e,mx);
 });
 return{raw:raw,bonus:bonus,total:raw+bonus};
}
function v2cupScore(c){
 if(c.id==='sprint')return CV.trophies;
 if(c.id==='day'||c.id==='day2'||c.id==='wkpt'||c.id==='core'){var det=v2todayDetail(v2cupTags(c));return (CV.scores[c.id]||0)+(CV.joined[c.id]?det.total:0);}
 return CV.scores[c.id]||0;
}
function v2claimable(c){
 if(!(CV.ended[c.id]&&CV.joined[c.id]))return 0;
 var s=v2cupScore(c),n=0;
 v2tiers(c).forEach(function(t,i){if(!CV.claimed[c.id+':'+i]&&s>=c.ths[i])n++;});
 return n;
}
function v2grant(s){
 if(!s||s==='-')return;
 var inv=state.inventory=state.inventory||{};var mats=migrateGlobalMats();
 s.split('+').forEach(function(tok){
  tok=tok.trim();if(!tok||tok==='-')return;
  var m;
  if(m=tok.match(/^(\d+)积分$/))state.points+=+m[1];
  else if(m=tok.match(/^(\d+)代币$/))state.tokens+=+m[1];
  else if(m=tok.match(/^代币(\d+)$/))state.tokens+=+m[1];
  else if(m=tok.match(/^黑币(\d+)$/))state.blackCoin=(state.blackCoin||0)+ +m[1];
  else if(m=tok.match(/^(\d+)黑币$/))state.blackCoin=(state.blackCoin||0)+ +m[1];
  else if(m=tok.match(/^黑币×(\d+)$/))state.blackCoin=(state.blackCoin||0)+ +m[1];
  else if(m=tok.match(/^💠×?(\d+)$/))inv.sp_core=(inv.sp_core||0)+ +m[1];
  else if(m=tok.match(/^材料包×(\d+)$/))inv.parts_pack=(inv.parts_pack||0)+ +m[1];
  else if(m=tok.match(/^直接升级×(\d+)$/))inv.direct_up=(inv.direct_up||0)+ +m[1];
  else if(m=tok.match(/^属性抽取券×(\d+)$/))inv.draw_ticket=(inv.draw_ticket||0)+ +m[1];
  else if(m=tok.match(/^属性变更券×(\d+)$/))inv.change_ticket=(inv.change_ticket||0)+ +m[1];
  else if(m=tok.match(/^重铸券×(\d+)$/))inv.reroll_ticket=(inv.reroll_ticket||0)+ +m[1];
  else if(m=tok.match(/^1\.2倍经验卡$/))inv.exp12=(inv.exp12||0)+1;
  else if(m=tok.match(/^1\.5倍经验卡×(\d+)$/))inv.exp15=(inv.exp15||0)+ +m[1];
  else if(m=tok.match(/^(\d+)(训练印记|冲刺奖章|全勤徽章|巅峰凭证)$/)){var k={'训练印记':'mark','冲刺奖章':'medal','全勤徽章':'badge','巅峰凭证':'peak'}[m[2]];mats[k]=(mats[k]||0)+ +m[1];}
  else if(m=tok.match(/^(训练印记|冲刺奖章|全勤徽章|巅峰凭证)×(\d+)$/)){var k2={'训练印记':'mark','冲刺奖章':'medal','全勤徽章':'badge','巅峰凭证':'peak'}[m[1]];mats[k2]=(mats[k2]||0)+ +m[2];}
 });
}

/* ---------- 协议 ---------- */
function v2fmtD(dt){return dt.getFullYear()+'年'+(dt.getMonth()+1)+'月'+dt.getDate()+'日';}
function v2durText(cup){
 var now=new Date();var day=now.getDay();
 var mon=new Date(now);mon.setDate(now.getDate()-((day+6)%7));
 var fri=new Date(mon);fri.setDate(mon.getDate()+4);
 var sun=new Date(mon);sun.setDate(mon.getDate()+6);
 var sun2=new Date(mon);sun2.setDate(mon.getDate()+13);
 if(cup.id==='day'||cup.id==='day2')return v2fmtD(now)+' 00:00 – 23:59（当日）';
 if(cup.id==='sprint')return v2fmtD(mon)+' 00:00 – '+v2fmtD(fri)+' 23:59（周一至周五）';
 if(cup.id==='wkpt'||cup.id==='core')return v2fmtD(fri)+' 00:00 – '+v2fmtD(sun)+' 23:59（周五至周日）';
 if(cup.id==='champ')return v2fmtD(mon)+' 00:00 – '+v2fmtD(sun)+' 23:59（周一至周日）';
 if(cup.id==='biwk')return v2fmtD(mon)+' 00:00 – '+v2fmtD(sun2)+' 23:59（双周）';
 return cup.dur;
}
function v2pactHtml(name,cup){
 var d=v2now();var ds=d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日';
 var tags=v2cupTags(cup);
 var tagTxt=tags?('本杯指定父标签：<b style="color:#ffd60a">'+tags.join('</b>、<b style="color:#ffd60a">')+'</b>。只有任务标签属于上述父标签（含全部子标签）时才计入成绩。'):'本杯<b style="color:#ffd60a">不限标签</b>，赛事期间全部任务均计入成绩。';
 var scoreTxt=cup.id==='sprint'?'按日结算：每日仅统计当日悬赏父标签下的任务完成情况，每日最多 3 杯、五天最多 15 杯；本周奖杯总数即成绩。':'成绩 = 赛事期间完成任务时填入的真实EP累计（1:1，不含任何加成）；单任务达标签上限 80%/90%/100% 分别 +100/+200/+300 满档奖励分（取最高档）。';
 return '<h3>《'+name+' · 参赛协议》</h3><p style="text-align:center;font-family:var(--mono);font-size:11px;color:#8d7c5f;letter-spacing:.26em;margin:-4px 0 14px">签 署 日 期 · '+ds+'</p>'
 +'<p><b style="color:#e6d3ac">一、赛事周期与报名</b><br>本杯赛持续时间：<b style="color:#ffd60a">'+v2durText(cup)+'</b>。报名需消耗竞技能量 ⚡'+cup.e+'，能量一经消耗不予退还；报名成功后开始计分。</p>'
 +'<p><b style="color:#e6d3ac">二、杯赛标签</b><br>'+tagTxt+'</p>'
 +'<p><b style="color:#e6d3ac">三、分数获取方式</b><br>'+scoreTxt+'天赋、乱斗、潜能、经验卡等加成一律不计入。</p>'
 +'<p><b style="color:#e6d3ac">四、奖励种类与规则</b><br>'+v2tiers(cup).join('；')+'。按最终成绩对应档位，<b style="color:#ffd60a">赛后一次性领取全部达成档位（含参与奖）</b>；赛中奖励锁定，逾期未领视为放弃。</p>'
 +'<p><b style="color:#e6d3ac">五、通用条款</b><br>1. 严禁作弊，违者取消成绩并收回奖励。2. 幽灵选手为系统模拟对手。3. 赛事名称与悬赏标签按周期轮换。4. 本协议最终解释权归赛事组委会所有。</p>'
 +'<p style="text-align:center;color:#f0d9a2">—— 请阅读全文并勾选下方确认框后签署 ——</p>';
}
function v2openPact(id){v2rollCheck();CV.pactId=id;var cup=v2cupById(id);$('v2pactTitle').textContent='🏆 '+v2cupName(cup)+' · 参赛协议';$('v2pactCost').textContent=cup.e;$('v2pactText').innerHTML=v2pactHtml(v2cupName(cup),cup);$('v2pactCk').checked=false;$('v2pactOk').disabled=true;$('v2pactOv').classList.add('show');}
function v2closePact(){$('v2pactOv').classList.remove('show');}
function v2pactToggle(){$('v2pactOk').disabled=!$('v2pactCk').checked;}
function v2sign(){
 var id=CV.pactId;if(!id)return;
 var cup=v2cupById(id);
 if(CV.joined[id]){v2closePact();v2toast('已报名');return;}
 var en=state.cupV3.energy||0;
 if(en<cup.e){v2toast('能量不足（剩 '+en+' 点）');return;}
 state.cupV3.energy=en-cup.e;CV.joined[id]=true;CV.scores[id]=CV.scores[id]||0;
 v2closePact();v2toast('🎉 报名成功：'+v2cupName(cup)+'（-'+cup.e+' 能量）');
 v2renderCup();v2save();
}
function v2claimAll(id){
 var cup=v2cupById(id);var score=v2cupScore(cup);var got=[];
 v2tiers(cup).forEach(function(t,i){var k=id+':'+i;if(!CV.claimed[k]&&score>=cup.ths[i]){CV.claimed[k]=true;got.push(t);v2grant(t);}});
 if(!got.length){v2toast('没有可领取的档位');return;}
 v2toast('一键全领 '+got.length+' 档：'+got.slice(0,3).join('、')+(got.length>3?' 等':''));
 v2renderCup();v2save();
}

/* ---------- 杯赛渲染 ---------- */
var CV_CUR='day';
function v2renderCup(){
 v2rollCheck();
 var list=V2CUPS.filter(v2active);if(CV.extra&&CV.dayType2>=0)list.splice(1,0,v2cupById('day2'));
 if(!list.some(function(c){return c.id===CV_CUR;}))CV_CUR=list.length?list[0].id:'day';
 var cup=v2cupById(CV_CUR);
 var tags=v2cupTags(cup);
 var det=v2todayDetail(tags);
 var acc=(CV.scores[cup.id]||0);
 var score=cup.id==='sprint'?CV.trophies:(cup.id==='champ'||cup.id==='biwk')?acc:(acc+(CV.joined[cup.id]?det.total:0));
 var joined=!!CV.joined[cup.id],ended=!!CV.ended[cup.id],claimN=v2claimable(cup);
 var rail=$('cupV2Rail');rail.innerHTML='';
 list.forEach(function(c){
  var el=document.createElement('button');
  var cn=v2claimable(c);
  var cls=(CV_CUR===c.id?'on':'');
  if(cn>0)cls='claim';else if(!CV.joined[c.id]&&!CV.ended[c.id])cls+=' dim';
  el.className=cls;
  var nm=(c.id==='day')?MAT_ICONS[CV.dayType]+' '+MAT_CUPS[CV.dayType]:(c.id==='day2'?MAT_ICONS[CV.dayType2]+' 加开·'+MAT_CUPS[CV.dayType2]:v2cupName(c));
  var stateTxt=c.dis?'未开放':(cn>0?('待领取 '+cn+' 档'):(CV.ended[c.id]?'已结束':(CV.joined[c.id]?'进行中':'未报名')));
  el.innerHTML=nm+'<small>'+(c.id==='day'?'日杯 · ':c.id==='day2'?'加开 · ':'')+'⚡'+c.e+' · '+stateTxt+'</small>';
  if(!c.dis)el.onclick=function(){CV_CUR=c.id;v2renderCup();};
  rail.appendChild(el);
 });
 var isSpr=cup.id==='sprint';
 var html='<div class="rc-sec">'+((cup.id==='day')?MAT_ICONS[CV.dayType]+' '+MAT_CUPS[CV.dayType]:cup.n)+' <span class="rc-sec-n">'+cup.dur+'</span></div>';
 html+='<div style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px;flex-wrap:wrap;margin-bottom:10px">'
  +'<div class="cup-big"><span>'+v2fmt(score)+'</span>'+(isSpr?' 杯':'')+'<small>'+(isSpr?'本周累计奖杯（每日最多 3 杯 · 五天 15 杯）':'本杯得分（填入EP 1:1 + 满档奖励）'+(tags?' · 仅本杯标签':' · 不限标签'))+'</small></div>'
  +(joined?(ended?(claimN>0?'<span class="chip pill" style="border-color:rgba(255,214,10,.6);color:#ffd60a">已结束 · 待领取 '+claimN+' 档</span>':'<span class="chip pill">已结束 · 已领完</span>'):'<span class="chip pill" style="border-color:rgba(124,196,255,.4);color:#7cc4ff">进行中 · 已报名 ⚡'+cup.e+'</span>')
    :'<button class="btn gold" onclick="v2openPact(\''+cup.id+'\')">📜 报名 ⚡'+cup.e+'</button>')+'</div>';
 html+='<div class="cup-rest'+((!joined&&!ended)?' dimmed':'')+'">';
 if(tags)html+='<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">'+tags.map(function(t,i){var cur=isSpr?(i===(v2now().getDay()-1)):true;return '<span class="chip" style="'+(cur?'border-color:rgba(255,214,10,.55);color:#ffd60a':'opacity:.55')+'">'+t+(isSpr?(' · '+v2DAYS[i+1]):'')+(cur&&isSpr?' ◀':'')+'</span>';}).join('')+'</div>';
 if(!joined&&!ended)html+='<div class="lockstrip">⚠️ 尚未报名：成绩不计入本杯。点击右上角「📜 报名」签署协议后开始计分。</div>';
 if(joined&&!ended)html+='<div class="lockstrip">🔒 赛中锁定：'+cup.dur+' 结束后可一键领取全部达成档位（含参与奖）。</div>';
 if(joined&&ended){
  var reached=v2tiers(cup).filter(function(t,i){return score>=cup.ths[i];}).length;
  html+='<div class="claimall"><span class="s">🏁 杯赛已结束 · 达成 '+reached+'/'+v2tiers(cup).length+' 档'+(claimN>0?' · 待领取 '+claimN+' 档':' · 已全部领取')+'</span>'+(claimN>0?'<button class="btn" onclick="v2claimAll(\''+cup.id+'\')">📥 一键全领</button>':'<span class="btn" style="opacity:.5">✓ 已领取</span>')+'</div>';
 }
 html+=v2tiers(cup).map(function(t,i){
  var th=cup.ths[i],reach=score>=th,cl=CV.claimed[cup.id+':'+i],locked=joined&&!ended;
  return '<div class="tier'+(reach?' reach':'')+(locked?' locked':'')+'"><span class="ti">'+(i===0?'参与':('#'+i))+'</span><span class="tn">'+t+'</span><span class="bar"><i style="width:'+Math.min(100,(th===0?100:score/th*100))+'%"></i></span>'+(cl?'<span class="got">已领 ✓</span>':(locked?'<span class="lock">🔒 待结束</span>':(reach?'<span class="tv" style="color:#ffd60a">可领</span>':'<span class="tv">'+v2fmt(th)+'</span>')))+'</div>';
 }).join('');
 html+='</div>';
 $('cupV2Panel').innerHTML=html;
 var en=$('v2enC');if(en)en.textContent=state.cupV3.energy||0;
}
function v2buyEnergy(){
 v2rollCheck();
 var today=v2dkey();
 if(state.cupV3.energyBought===today){v2toast('今日已补充过能量');return;}
 if((state.tokens||0)<40){v2toast('代币不足 40');return;}
 state.tokens-=40;state.cupV3.energyBought=today;state.cupV3.energy=Math.min(10,(state.cupV3.energy||0)+5);
 v2toast('🪙 40 补 5 能量');v2save();v2renderCup();v2renderArena();
}

/* ================= 竞技 v2 ================= */
var V2LG=[
 {n:'业余联赛',min:600,max:1000,c1:'#c9742e',c2:'#6e3a16',lt:'#eda765'},
 {n:'挑战者联赛',min:1001,max:1400,c1:'#d6dbe3',c2:'#8a9098',lt:'#f2f4f7'},
 {n:'职业联赛',min:1401,max:1800,c1:'#ffd94d',c2:'#c8930a',lt:'#fff0b3'},
 {n:'冠军联赛',min:1801,max:2200,c1:'#54c8f8',c2:'#1a6cb0',lt:'#bfe7ff'},
 {n:'精英联赛',min:2201,max:99999,c1:'#ff3b30',c2:'#8f1210',lt:'#ff8a75'}
];
var V2BAND=['1','2','3','4-10','11-20','21-30','31-40','41-50','51-60','61-70','71-80','81-90','91-100','101-200','201-300','301-500'];
var V2REWARD=[
 ['800积分+材料包×5','600积分+材料包×4','500积分+材料包×3','400积分+材料包×3','350积分+材料包×2','300积分+材料包×2','280积分+材料包×2','250积分+材料包×2','220积分+材料包×1','200积分+材料包×1','180积分','150积分','120积分','100积分','80积分','50积分'],
 ['1200积分+材料包×8','900积分+材料包×6','700积分+材料包×5','600积分+材料包×4','550积分+材料包×4','500积分+材料包×3','450积分+材料包×3','400积分+材料包×3','350积分+材料包×2','300积分+材料包×2','280积分+材料包×2','250积分+材料包×1','200积分','150积分','120积分','80积分'],
 ['1500积分+材料包×10','1100积分+材料包×8','900积分+材料包×6+代币30','800积分+材料包×5+代币30','700积分+材料包×5','650积分+材料包×4','600积分+材料包×4','550积分+材料包×4','500积分+材料包×3','450积分+材料包×3','400积分+材料包×3','350积分+材料包×2','300积分','200积分','150积分','100积分'],
 ['2000积分+材料包×10+代币100','1500积分+材料包×8+代币80','1200积分+材料包×6+代币60','1000积分+材料包×5+代币50','900积分+材料包×5+代币40','850积分+材料包×4+代币40','800积分+材料包×4+代币35','750积分+材料包×4+代币30','700积分+材料包×3+代币30','650积分+材料包×3+代币25','600积分+材料包×3+代币25','550积分+材料包×2+代币20','500积分+黑币×10','300积分+黑币×5','200积分','100积分'],
 ['2500积分+代币150+💠3','2000积分+代币120+💠2','1600积分+代币100+💠1','1300积分+代币80+黑币50','1100积分+代币70+黑币40','1000积分+代币60+黑币35','900积分+代币50+黑币30','850积分+代币45+黑币30','800积分+代币40+黑币25','750积分+代币35+黑币25','700积分+代币30+黑币20','650积分+代币25+黑币20','600积分+代币20+黑币15','400积分+黑币×10','200积分+黑币×5','100积分']
];
var V2SURN=['张','李','王','赵','刘','陈','杨','黄','周','吴','徐','孙','马','朱','胡','郭','何','林','罗','郑'];
var V2NICK=['夜航','灯下','卷王','刷题','早起','续杯','词霸','上岸','黑马','稳过','三点钟','打铃','满勤','错题本','框架','回放','二刷','蹲馆'];
function v2ri(a,b){return Math.round(a+Math.random()*(b-a));}
function v2mkname(){return V2SURN[Math.floor(Math.random()*V2SURN.length)]+'·'+V2NICK[Math.floor(Math.random()*V2NICK.length)]+v2ri(100,999);}
function v2ghostEP(li){var L=V2LG[li];return li===4?v2ri(2201,3200):v2ri(L.min,L.max);}
function v2initGhosts(){AV.ghosts=[];for(var li=0;li<5;li++){for(var i=0;i<120;i++){AV.ghosts.push({n:v2mkname(),li:li,pts:v2ri(920,1080),placeEP:v2ghostEP(li)});}}}
if(!AV.ghosts.length)v2initGhosts();
function v2leagueOf(ep){if(ep<600)return -1;for(var i=0;i<5;i++){if(ep>=V2LG[i].min&&ep<=V2LG[i].max)return i;}return 4;}
function v2xOf(a,b){return Math.max(15,Math.min(50,Math.round(30+(b-a)/50)));}
function v2bandOf(r){for(var i=0;i<V2BAND.length;i++){var hi=parseInt(V2BAND[i].split('-')[1]||V2BAND[i],10);if(r<=hi)return i;}return V2BAND.length-1;}
var AV_CUR='cand';
var AV_CANDS=[],AV_CANDS_DAY='';
function v2renderArena(){
 v2rollCheck();
 var pg=$('page-race');if(!pg)return;
 var D=v2now().getDay();
 pg.classList.toggle('elite',AV.placed&&AV.league===4);
 if(AV.placed&&AV.league>=0&&!AV.fxThemeLock){var L=V2LG[AV.league];
  pg.style.setProperty('--agA','#fff6e2');pg.style.setProperty('--agB',L.c1);pg.style.setProperty('--agC','#ffffff');pg.style.setProperty('--agD',L.c2);pg.style.setProperty('--lg',L.c1);pg.style.setProperty('--lgL',L.lt);
 }else{['--agA','--agB','--agC','--agD','--lg','--lgL'].forEach(function(k){pg.style.removeProperty(k);});}
 var wb=$('v2weekbar');wb.innerHTML='';
 for(var d=0;d<7;d++){(function(d){
  var el=document.createElement('div');el.className='wd'+(d===D?' on':'');
  el.innerHTML=v2DAYS[d]+'<small>'+(d===0?'休赛·预报名':d===1?'定级日':d===6?'挑战日·赛季结算':'挑战日')+'</small>';
  wb.appendChild(el);})(d);}
 var settled=v2todaySettled();
 $('v2settledTag').textContent=settled?('已结算：'+v2fmt(v2todayRaw())+' EP'):'';
 $('v2ptsChip').textContent=v2fmt(AV.pts);
 $('v2lgChip').textContent=AV.placed?V2LG[AV.league].n:(AV.joined?'🔁 本周未入段':'未参加本赛季');
 $('v2placeChip').textContent=AV.placed?v2fmt(AV.placeScore):'-';
 $('v2baseChip').textContent=AV.placed?v2fmt(AV.placeEP):'-';
 $('v2revChip').textContent=AV.revenge.length;
 var slot=$('v2lgBadgeSlot');
 if(AV.placed&&AV.league>=0){var L2=V2LG[AV.league];
  slot.innerHTML='<div class="lgbadge'+(AV.league===4?' elite':'')+'" onclick="v2showLg()" style="--c1:'+L2.c1+';--c2:'+L2.c2+'"><div class="lgb-sh"><span class="lgb-ic">⏱</span></div><div class="lgb-tx"><div class="lgb-nm">'+L2.n+'</div><div class="lgb-sc">定级 '+v2fmt(AV.placeScore)+' EP · 积分 <b>'+v2fmt(AV.pts)+'</b></div></div></div>';
 }else{slot.innerHTML='<div class="lgbadge dim"><div class="lgb-sh"><span class="lgb-ic">⏱</span></div><div class="lgb-tx"><div class="lgb-nm">未定级</div><div class="lgb-sc">周一定级后点亮 · 点击查看段位</div></div></div>';}
 var b=$('v2arenaBody');b.innerHTML='';
 if(D===0){
  b.innerHTML='<div class="card"><div class="rc-sec">🌙 周日 · 休赛日与预报名</div><div class="row"><span class="n">休赛日：上周已结算。本周预报名开放中'+(AV.preReg?'（<b style="color:#7ee2a0">已预报名 ✓</b> 周一自动参加定级）':'')+'</span>'+(AV.preReg?'':'<button class="btn gold" onclick="v2preReg()">📝 预报名（周一自动参加定级）</button>')+'</div></div>';
 }else if(D===1){
  var inner='';
  if(AV.placed){inner='<span class="m">已定级：'+V2LG[AV.league].n+' · '+v2fmt(AV.placeScore)+' EP</span><button class="btn" onclick="v2showLg()">🏅 查看段位</button>';}
  else if(!AV.joined){inner='<button class="btn gold" onclick="v2join()">📝 报名（今日定级赛）</button>';}
  else{inner='<button class="btn gold" onclick="v2place()"'+(!settled?' disabled':'')+'>🏁 定级（取今日结算EP）</button>';}
  b.innerHTML='<div class="card"><div class="rc-sec">🏁 周一 · 定级日<span class="rc-sec-n">填入EP 1:1 · 无120分钟赛制</span></div><div class="row"><span class="n">'+(AV.preReg?'已预报名，自动参加定级。':'未预报名：需先报名，再以今天结算的填入EP（1:1）定级。')+'</span>'+inner+'</div></div>';
 }else{
  if(!AV.placed){
   var regBtns=(AV.joined?'':'<button class="btn gold" onclick="v2join()">📝 报名今日定级</button>')+'<button class="btn gold" onclick="v2place()"'+(!settled?' disabled':'')+'>🏁 定级（取今日结算EP）</button>';
   b.innerHTML='<div class="card"><div class="rc-sec">🔁 再次报名定级<span class="rc-sec-n">未入段 · 每日可重复报名直至达到 600</span></div><div class="row"><span class="n">本周尚未入段'+(AV.placeScore?('（上次定级 '+v2fmt(AV.placeScore)+' EP < 600）'):'')+'：每天可再次报名，以当天结算的填入EP重新定级，达到 600 即锁定本周联赛。</span>'+regBtns+'</div></div>';
  }else{
   v2renderCands(b);
   v2renderDefense(b);
   if(D===6)b.innerHTML+='<div class="card"><div class="rc-sec">🏆 今晚 23:59 赛季结束<span class="rc-sec-n">按联赛内积分排名结算16档</span></div><div class="row"><span class="n">结算后按排名领取对应档位奖励（非累积）。</span><button class="btn gold" onclick="v2settle()">🏆 赛季结算</button></div></div>';
  }
 }
}

function v2todaySettled(){return state.v2settledDay===v2dkey();}
function v2ghostDaily(g){var L=V2LG[g.li];var lo=Math.round(L.min*0.8);var hi=g.li===4?3400:Math.round(L.max*1.15);return Math.max(lo,Math.min(hi,Math.round(g.placeEP*(0.75+Math.random()*0.5))));}
function v2renderCands(b){
 var li=AV.league;
 if(AV_CANDS_DAY!==v2dkey()){AV_CANDS=[];var pool=AV.ghosts.filter(function(g){return g.li===li;});for(var i=0;i<5;i++)AV_CANDS.push(pool[Math.floor(Math.random()*pool.length)]);AV_CANDS_DAY=v2dkey();}
 var settled=v2todaySettled();
 var challenged=AV.chDay===v2dkey();
 var html='<div class="card"><div class="rc-sec">⚔️ 挑战 · 每日限 1 位<span class="rc-sec-n">先发起 → 今日结算 → 你的真实EP 对决对方当日模拟EP · 胜+x 负−x（15~50）</span></div><div class="cands">';
 AV_CANDS.forEach(function(g,idx){
  var st,off;
  if(challenged){st=AV.pendingG===g.n?'已发起 · 待结算':'今日已挑战';off=1;}
  else if(settled){st='已结算 · 明日再挑战';off=1;}
  else{st='⚔️ 发起挑战';off=0;}
  html+='<div class="cand'+(off?' off':'')+'"'+(off?'':' onclick="v2challenge('+idx+')"')+'><div class="ct"><b>👤 '+g.n+'</b><span class="cb">'+v2fmt(g.pts)+' 分</span></div><div class="cm">定级EP '+v2fmt(g.placeEP)+' · 当日发挥浮动 · '+V2LG[li].n+'</div><button class="btn ca" '+(off?'disabled':'')+'>'+st+'</button></div>';
 });
 html+='</div></div>';
 b.innerHTML+=html;
}
function v2renderDefense(b){
 var settled=v2todaySettled();
 var html='<div class="card"><div class="rc-sec">🛡️ 防御 · 优化与复仇<span class="rc-sec-n">被挑战比的是你的「定级赛EP」基准</span></div>';
 html+='<div class="row"><span class="n">随机模拟一次「幽灵挑战你」：对方以当日EP攻你的定级基准，高者赢（±x 流转）</span><button class="btn" onclick="v2defense()">🛡️ 模拟幽灵来袭</button></div>';
 html+='<div class="row"><span class="n">防御优化：以<b style="color:#e6d3ac">今日结算的真实EP</b>尝试覆盖自己的挑战基准（更大才替换；段位仍按定级赛锁定）</span><button class="btn" onclick="v2optimize()"'+(settled?'':' disabled')+'>'+(AV.optDay===v2dkey()?'今日已优化':'🛡️ 防御优化基准')+'</button></div>';
 if(AV.revenge.length){
  html+='<div style="font-size:11px;color:#c9a86a;margin:8px 0 4px">复仇名单（以今日真实EP对决对方当日EP，成功夺回丢掉的分数）：</div>';
  AV.revenge.forEach(function(r,idx){
   html+='<div class="row"><span class="n">😈 '+r.n+'（对方当日 '+v2fmt(r.pe)+' · 当时丢 '+r.x+' 分）</span><button class="btn red" onclick="v2revenge('+idx+')"'+(settled?'':' disabled')+'>⚔️ 复仇</button></div>';
  });
 }
 html+='<div class="hint">规则：挑战/被挑战一律以<b>定级赛EP</b>为你的基准——发起挑战用今日真实EP攻对方当日EP；被人挑战时对方当日EP攻你的基准；防御优化只能抬基准、不改本周段位。</div></div>';
 b.innerHTML+=html;
}
function v2preReg(){AV.preReg=true;AV.joined=true;v2toast('预报名成功，周一自动定级');v2renderArena();v2save();}
function v2join(){AV.joined=true;v2toast('报名成功，结算后即可定级');v2renderArena();v2save();}
var AV_PFX_T=null;
function v2place(){
 if(!AV.joined){v2toast('请先完成本周报名');return;}
 if(!v2todaySettled()){v2toast('请先结算今日');return;}
 var ep=v2todayRaw();
 AV.placeScore=ep;AV.league=v2leagueOf(ep);AV.placed=false;
 if(AV.league>=0){AV.placed=true;AV.pts=1000;AV.placeEP=ep;AV.fxThemeLock=true;v2playFx();}
 else{v2toast('未达 600，未入段：明天可再次报名定级');}
 v2renderArena();v2save();
}
function v2playFx(){
 var L=V2LG[AV.league];var pg=$('page-race');
 $('v2pfxOv').innerHTML='<div class="pfx-rays"></div><div class="pfx-box'+(AV.league===4?' elite':'')+'">'
  +'<div class="pfx-kick">PLACEMENT COMPLETE · 定级成功</div>'
  +'<div class="pfx-sh" style="--c1:'+L.c1+';--c2:'+L.c2+'"><span class="pfx-ic">⏱</span></div>'
  +'<div class="pfx-nm">'+L.n+'</div>'
  +'<div class="pfx-sc">定级成绩 <b>'+v2fmt(AV.placeScore)+'</b> EP · 本周联赛已锁定</div>'
  +'<div class="pfx-bar"><i></i></div><div class="pfx-tip">点 击 任 意 处 跳 过</div></div>';
 $('v2pfxOv').classList.add('show');
 AV.pfxBorn=Date.now();
 AV_PFX_T=setTimeout(v2endFx,2600);
}
function v2endFx(){
 if(AV.pfxBorn&&Date.now()-AV.pfxBorn<700)return;
 if(AV_PFX_T){clearTimeout(AV_PFX_T);AV_PFX_T=null;}
 $('v2pfxOv').classList.remove('show');
 v2badgeArrive();
}
function v2badgeArrive(){
 var slot=$('v2lgBadgeSlot');if(!slot||!slot.querySelector)return;
 var badge=slot.querySelector('.lgbadge');if(!badge)return;
 if(!badge.animate||!badge.getBoundingClientRect)return;
 var r=badge.getBoundingClientRect();
 var cx=(window.innerWidth||800)/2,cy=(window.innerHeight||600)*0.42;
 var dx=cx-(r.left+r.width/2),dy=cy-(r.top+r.height/2);
 badge.animate([
  {transform:'translate('+dx+'px,'+dy+'px) scale(2.1) rotate(-12deg)',opacity:0},
  {transform:'translate('+(dx*0.4)+'px,'+(dy*0.4+26)+'px) scale(1.18) rotate(5deg)',opacity:1,offset:0.55},
  {transform:'translate(0,-4px) scale(1.08,0.9) rotate(-2deg)',offset:0.75},
  {transform:'translate(0,0) scale(0.94,1.08)',offset:0.88},
  {transform:'translate(0,0) scale(1)'}
 ],{duration:540,easing:'cubic-bezier(.25,1,.35,1)'});
 setTimeout(function(){
  if(badge.animate)badge.animate([{transform:'scale(1,1)'},{transform:'scale(1.14,0.76)'},{transform:'scale(0.95,1.06)'},{transform:'scale(1.03,0.98)'},{transform:'scale(1)'}],{duration:340,easing:'ease-out'});
  if(slot.animate)slot.animate([{transform:'translateY(0)'},{transform:'translateY(3px)'},{transform:'translateY(-1px)'},{transform:'translateY(0)'}],{duration:260,easing:'ease-out'});
  var sr=slot.getBoundingClientRect();
  var hit=document.createElement('div');hit.className='lgb-hit';
  hit.style.left=(sr.left+Math.min(40,sr.height/2))+'px';hit.style.top=(sr.top+sr.height/2)+'px';
  document.body.appendChild(hit);
  setTimeout(function(){if(hit.remove)hit.remove();},580);
  v2sweep();
 },500);
}
function v2sweep(){
 AV.fxThemeLock=false;
 v2renderArena();
 var slot=$('v2lgBadgeSlot');
 var x=160,y=120;
 if(slot&&slot.getBoundingClientRect){var sr=slot.getBoundingClientRect();x=sr.left+Math.min(40,sr.height/2);y=sr.top+sr.height/2;}
 var c=(AV.league>=0?V2LG[AV.league].c1:'#e8a33d');
 var veil=document.createElement('div');veil.className='sweep';
 veil.style.left=x+'px';veil.style.top=y+'px';
 veil.style.background='radial-gradient(circle,'+c+'e0 0%,'+c+'88 36%,transparent 70%)';
 document.body.appendChild(veil);
 if(veil.animate)veil.animate([{transform:'translate(-50%,-50%) scale(0)',opacity:.95},{transform:'translate(-50%,-50%) scale(1)',opacity:0}],{duration:900,easing:'cubic-bezier(.25,.7,.3,1)'});
 setTimeout(function(){if(veil.remove)veil.remove();},940);
}

function v2showLg(){
 var box=document.querySelector('#v2lgOv .lgbox');if(box)box.classList.toggle('elite',AV.league===4);
 $('v2lgTitle').textContent=AV.league>=0?V2LG[AV.league].n:'未入段';
 $('v2lgShields').innerHTML=V2LG.map(function(L,i){
  var rg=i===4?'2201+':L.min+'-'+L.max;
  return '<div class="lg-sh'+(i===AV.league?' cur':'')+'" style="--c1:'+L.c1+';--c2:'+L.c2+'"><div class="shield">⏱</div><div class="nm">'+L.n+'</div><div class="rg">'+rg+'</div></div>';
 }).join('');
 $('v2lgScore').innerHTML=AV.league>=0
  ?('您的定级成绩：🏷 <b>'+v2fmt(AV.placeScore)+'</b>　→　本周征战 <b style="color:#f0d9a2">'+V2LG[AV.league].n+'</b>')
  :('您的定级成绩：🏷 <b>'+v2fmt(AV.placeScore)+'</b>　→　未达 600，本周<b style="color:#ff8a80">未入段</b>');
 $('v2lgOv').classList.add('show');
}
function v2closeLg(){$('v2lgOv').classList.remove('show');}
function v2challenge(idx){
 if(AV.chDay===v2dkey()){v2toast('今天已发起过挑战');return;}
 if(v2todaySettled()){v2toast('需先发起挑战再结算：今日已结算，请明天再挑战');return;}
 var g=AV_CANDS[idx];
 AV.pendingG=g.n;AV.chDay=v2dkey();
 v2toast('挑战已发起：结算今日后判定胜负');
 v2renderArena();v2save();
}
function v2resolveChallenge(){
 if(!AV.pendingG)return;
 var g=null;
 for(var i=0;i<AV.ghosts.length;i++){if(AV.ghosts[i].n===AV.pendingG){g=AV.ghosts[i];break;}}
 AV.pendingG=null;
 if(!g)return;
 var gd=v2ghostDaily(g);var my=v2todayRaw();var x=v2xOf(AV.pts,g.pts);
 if(my>=gd){AV.pts+=x;g.pts-=Math.round(x/2);v2toast('⚔️ 挑战胜利 +'+x+' 分');}
 else{AV.pts-=x;g.pts+=Math.round(x/2);v2toast('⚔️ 挑战失败 -'+x+' 分');}
}
function v2defense(){
 if(!(AV.placed&&AV.league>=0)){v2toast('未入段无法被挑战');return;}
 var pool=AV.ghosts.filter(function(g){return g.li===AV.league;});
 var g=pool[Math.floor(Math.random()*pool.length)];
 var gd=v2ghostDaily(g);var x=v2xOf(AV.pts,g.pts);
 if(AV.placeEP>=gd){AV.pts+=x;g.pts-=Math.round(x/2);v2toast('🛡️ 防御成功 +'+x+' 分');}
 else{AV.pts-=x;g.pts+=Math.round(x/2);AV.revenge.push({n:g.n,x:x,pe:gd});v2toast('🛡️ 防御失败 -'+x+' 分，可复仇');}
 v2renderArena();v2save();
}
function v2optimize(){
 if(!v2todaySettled()){v2toast('请先结算今日');return;}
 if(AV.optDay===v2dkey()){v2toast('今日已进行过防御优化');return;}
 AV.optDay=v2dkey();
 var my=v2todayRaw();
 if(my>AV.placeEP){AV.placeEP=my;v2toast('🛡️ 挑战基准已优化为 '+v2fmt(my)+' EP');}
 else{v2toast('未超过当前基准，优化失败');}
 v2renderArena();v2save();
}
function v2revenge(idx){
 var r=AV.revenge[idx];if(!r)return;
 if(!v2todaySettled()){v2toast('请先结算今日');return;}
 if(v2todayRaw()>=r.pe){AV.pts+=r.x;v2toast('⚔️ 复仇成功 +'+r.x+' 分');AV.revenge.splice(idx,1);}
 else{v2toast('复仇失败，只耗票');}
 v2renderArena();v2save();
}
function v2settle(){
 if(!(AV.placed&&AV.league>=0)){v2toast('未入段无赛季结算');return;}
 var li=AV.league;
 var board=AV.ghosts.filter(function(g){return g.li===li;}).sort(function(a,b){return b.pts-a.pts;});
 var rank=1;board.forEach(function(g){if(g.pts>AV.pts)rank++;});
 var band=v2bandOf(rank);
 var got=V2REWARD[li][band];
 v2grant(got);
 v2toast('🏆 赛季结算：'+V2LG[li].n+' 第 '+rank+' 名 → 第 '+(band+1)+' 档：'+got);
 AV.preReg=false;AV.joined=false;AV.placed=false;AV.league=-1;AV.placeScore=0;AV.pts=1000;AV.placeEP=0;AV.revenge=[];AV.pendingG=null;AV.chDay='';AV.optDay='';
 v2initGhosts();
 v2renderArena();v2save();
}

/* ================= 每日结算钩子 ================= */
function v2Tick(){
 try{
  v2rollCheck();
  var today=v2dkey();
  if(state.v2settledDay===today)return;
  state.v2settledDay=today;
  state.cupV3.energy=Math.min(10,(state.cupV3.energy||0)+3);
  var d=v2now().getDay();
  ['day','day2','wkpt','core'].forEach(function(id){
   if(CV.joined[id]&&!CV.ended[id]){var cup=v2cupById(id);CV.scores[id]=(CV.scores[id]||0)+v2todayDetail(v2cupTags(cup)).total;}
  });
  if(CV.joined.champ&&!CV.ended.champ)CV.scores.champ=(CV.scores.champ||0)+v2todayDetail(v2cupTags(v2cupById('champ'))).total;
  if(CV.joined.biwk&&!CV.ended.biwk)CV.scores.biwk=(CV.scores.biwk||0)+v2todayDetail(v2cupTags(v2cupById('biwk'))).total;
  if(CV.joined.sprint&&!CV.ended.sprint&&d>=1&&d<=5){
   var tags=v2cupTags(v2cupById('sprint'));
   var cnt=0;
   (state.todayTasks||[]).forEach(function(t){var tg=null;try{tg=getTag(t.tagId);}catch(e){}if(tg&&tags.indexOf(v2tagOf(t.tagId))>=0&&parseFloat(t.baseEp)>0)cnt++;});
   CV.tby[d]=Math.min(3,cnt);
   CV.trophies=Object.keys(CV.tby).reduce(function(s,k){return s+CV.tby[k];},0);
  }
  v2resolveChallenge();
  v2save();
 }catch(e){}
}
try{
 var __v2ssr=window.__ssShowReport;
 window.__ssShowReport=function(b,a){var r=__v2ssr?__v2ssr.apply(this,arguments):undefined;try{v2Tick();}catch(e){}return r;};
}catch(e){}
/* ================= 页面注入 ================= */
var V2_RACE_HTML='<header class="rc-head"><div><div class="rc-kicker">SHADOW ARENA · 周赛季联赛制</div><div class="rc-title">⚔️ 竞技</div><div class="rc-sub">周日休赛+预报名 · 周一填入EP 1:1定级 · 周二~周六挑战/防御/复仇 · 周六23:59按联赛排名结算16档</div></div><div id="v2lgBadgeSlot"></div></header>'
+'<div class="card"><div class="rc-sec">🗓️ 本周流程<span class="rc-sec-n">真实日期驱动</span></div><div class="weekbar" id="v2weekbar"></div>'
+'<div class="entryrow"><span class="n">今日填入 EP 合计（不含任何加成）</span><span class="m" id="v2settledTag" style="font-family:var(--mono);font-size:11px;color:#8d7c5f"></span></div>'
+'<div class="statline">'
+'<span class="chip">⚡ 竞技积分 <b id="v2ptsChip">1,000</b></span>'
+'<span class="chip" id="v2lgChip">未参加本赛季</span>'
+'<span class="chip">定级成绩 <b id="v2placeChip">-</b></span>'
+'<span class="chip">🎯 挑战基准 <b id="v2baseChip">-</b></span>'
+'<span class="chip">复仇名单 <b id="v2revChip">0</b></span>'
+'</div></div><div id="v2arenaBody"></div>';
var V2_CUP_HTML='<header class="cv3-head"><div><div class="cv3-kicker">CHAMPIONSHIP · 杯赛中心</div><div class="cv3-title">🏆 杯赛</div><div class="cv3-sub">新计分：填入EP 1:1 + 满档奖励 · 赛中锁领奖 · 结束后一键全领</div></div>'
+'<span class="chip pill">⚡ 能量 <b id="v2enC">10</b>/10 · 每日结算 +3　<button class="btn" style="padding:5px 12px;font-size:11px" onclick="v2buyEnergy()">🪙 40 补 5（每日1次）</button></span></header>'
+'<div class="cv3-layout"><nav id="cupV2Rail"></nav><div class="card" id="cupV2Panel" style="margin-bottom:0"></div></div>';
var V2_MODALS='<div class="pfx-ov" id="v2pfxOv" onclick="v2endFx()"></div>'
+'<div class="lgov" id="v2lgOv"><div class="lgbox"><div class="lg-title"><b id="v2lgTitle">定级结果</b><button onclick="v2closeLg()">✕</button></div><div class="lg-body"><div class="lg-shields" id="v2lgShields"></div><div class="lg-score" id="v2lgScore"></div><div class="lg-note">您的联赛级别取决于每周一定级日的结算成绩（填入EP 1:1）。<br>提升每日填入EP，以在下一赛季进入更高联赛。</div></div></div></div>'
+'<div class="pactov" id="v2pactOv"><div class="pactbox"><div class="pact-h"><span id="v2pactTitle">🏆 杯赛参赛协议</span><button onclick="v2closePact()">✕</button></div><div class="pact-body" id="v2pactText"></div><div class="pact-f"><label class="pact-lab"><input type="checkbox" id="v2pactCk" onchange="v2pactToggle()"> 我已阅读协议并确认参与此杯赛</label><div class="pact-btns"><button class="btn" onclick="v2closePact()">取消</button><button class="btn gold" id="v2pactOk" disabled onclick="v2sign()">✍️ 签署并报名 · ⚡<span id="v2pactCost">0</span></button></div></div></div></div>';
function v2injectModals(){
 var d=document.createElement('div');d.innerHTML=V2_MODALS;while(d.firstChild)document.body.appendChild(d.firstChild);
 var stub=document.createElement('div');stub.style.display='none';stub.id='v2oldStubs';
 ['cupV3-rail','cupV3-panel','cupV3-pending','cv3-energy','cv3-energyPill','arena-header','arena-qual','arena-race','arena-board','arena-revenge'].forEach(function(id){
  var s=document.createElement('div');s.id=id;stub.appendChild(s);
 });
 document.body.appendChild(stub);
}
try{
 var __v2sp=window.switchPage;
 window.switchPage=function(name){
  try{
   if(name==='cup'&&!document.getElementById('cupV2Rail')){var pc=document.getElementById('page-cup');if(pc){pc.className='page v2c';pc.innerHTML=V2_CUP_HTML;}}
   if(name==='race'&&!document.getElementById('v2arenaBody')){var pr=document.getElementById('page-race');if(pr){pr.className='page v2r';pr.innerHTML=V2_RACE_HTML;}}
  }catch(e){}
  var r=__v2sp?__v2sp.apply(this,arguments):undefined;
  try{if(name==='cup')v2renderCup();if(name==='race')v2renderArena();}catch(e){}
  return r;
 };
}catch(e){}
/* window 导出 */
['v2openPact','v2closePact','v2pactToggle','v2sign','v2claimAll','v2buyEnergy','v2preReg','v2join','v2place','v2endFx','v2showLg','v2closeLg','v2challenge','v2defense','v2optimize','v2revenge','v2settle'].forEach(function(f){window[f]=eval(f);});

function v2compMail(){
 try{
  state.mailbox=Array.isArray(state.mailbox)?state.mailbox:[];
  state.mailGranted=state.mailGranted||{};
  if(state.mailGranted['v156_update'])return;
  state.mailGranted['v156_update']=true;
  state.tokens=(state.tokens||0)+150;
  state.points=(state.points||0)+2500;
  state.blackCoin=(state.blackCoin||0)+10;
  if(!state.mailbox.some(function(m){return m.id==='v156_update';})){
   state.mailbox.push({id:'v156_update',title:'📢 v1.5.6「协议时代」更新公告',body:'各位考生：<br><br><b>一、新增 · 金融中心</b>（顶部导航 🏛️ 金融 直达）<br>· 📈 股票/汇率：货币汇率盘 + 虚拟概念股，红涨绿跌，每个结算日刷新行情，买入0.5%/卖出1%手续费<br>· 💼 理财：活期/定期/股指挂钩六款产品，收益池由股市手续费再分配<br>· 🔄 交易所：仓库道具挂牌交易（卖家到手85%）+ 系统保底收购<br>· 黑币（⚫）为本系统稀缺硬通货，贯穿金融与特惠体系<br><br><b>二、重做 · 竞技（周赛季联赛制）</b><br>· 周一=定级日：当天结算的填入EP按 1:1 定级（无120分钟赛制），业余/挑战者/职业/冠军/精英 五联赛<br>· 周二~周六：每日挑战1位（先发起→当日结算→真实EP对决对方当日模拟EP，胜+x负−x）+ 防御（对方攻你的定级基准）+ 防御优化（更大才替换，段位仍按定级锁定）+ 复仇<br>· 周六23:59按联赛内排名结算16档奖励<br><br><b>三、重做 · 杯赛（新计分 + 协议报名）</b><br>· 计分改为：填入EP 1:1 + 满档奖励（80% +100 / 90% +200 / 满额 +300），不再使用质量分<br>· 报名需签署参赛协议（含周期/标签/分数规则/奖励明细）；赛中锁定，结束后一键全领<br>· 日杯（每日随机材料冠名杯、20%双开）、周末积分/核心杯、五日冲刺令（悬赏标签）、王者加冕周、双周千里拉力；周杯/双周杯名称与标签每周轮换；节庆狂欢杯随版本开放<br><br><b>四、补偿</b><br>因竞技杯赛为全面重做、制期间全部旧杯赛进度未能保留，特发放：💠精研核心×5、🔧直接升级×5、📦零件材料包×20（见附件）、⚫黑币×10、🪙代币×150、💰积分×2500（货币已直接入账）。<br><br>祝上岸顺利。',items:{sp_core:5,direct_up:5,parts_pack:20},createdAt:Date.now(),read:false});
  }
  v2save();
 }catch(e){}
}
v2compMail();

v2injectModals();
v2rollCheck();

/* ===== v1.5.6「协议时代」公告（注入式，置顶） ===== */
(function(){
 var ANN='<div id="ann-156pact" style="padding:8px 10px;border-bottom:1px solid #f2f2f7;"><b style="color:#ff3b30;">v1.5.6「协议时代」</b> <span style="font-size:11px;color:#8e8e93;">竞技杯赛重做 · 金融中心 · 11.12</span><div style="font-size:12px;color:#6e6e73;line-height:1.6;margin-top:3px;">⚔️ 竞技重做：周赛季联赛制——周日休赛+预报名、周一填入EP 1:1定级五联赛（业余600~精英2201+）、周二~六挑战/防御/复仇（防御优化只抬基准不改段位）、周六按联赛排名结算16档。🏆 杯赛重做：填入EP 1:1+满档奖励（80/90/100%→+100/200/300）、父标签悬赏、协议报名、赛事名每周轮换、赛后一键全领。🏛️ 金融中心：股票/汇率、理财、交易所三页暗金重排，黑币硬通货贯穿全部交易。📜 全交易协议化：股票/理财/交易所/杯赛一律先填数字→弹出带具体数字的协议（≥1200字）→打钩确认后才成交。💰 旧杯赛进度补偿已发放（详见邮箱）。</div></div>';
 function inject(){try{var el=document.getElementById('ann-list');if(!el||document.getElementById('ann-156pact'))return;el.insertAdjacentHTML('afterbegin',ANN);}catch(e){}}
 inject();
 try{if(typeof renderAnnouncements==='function'){var __r156=renderAnnouncements;window.renderAnnouncements=function(){__r156.apply(this,arguments);inject();};}}catch(e){}
})();
/* ===== 货币两位小数显示 · 点击看精确值 ===== */
(function(){
 if(window.__money2dp)return;window.__money2dp=true;
 function fmt2(n){n=parseFloat(n)||0;return (Math.round(n*100)/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});}
 function apply(el,raw){
  if(!el)return;
  el.textContent=fmt2(raw);
  el.title='精确值：'+raw;
  el.setAttribute('data-exact',raw);
  el.style.cursor='pointer';
 }
 function fix(){
  try{
   apply(document.getElementById('top-points'),state.points);
   apply(document.getElementById('top-tokens'),state.tokens);
   apply(document.getElementById('top-ep'),state.totalEP);
   apply(document.getElementById('home-points'),state.points);
   apply(document.getElementById('home-tokens'),state.tokens);
   apply(document.getElementById('home-total-ep'),state.totalEP);
   apply(document.getElementById('top-black-n'),state.blackCoin||0);
  }catch(e){}
 }
 function v2AssetDlg(){
  try{
   var rows=[['💰 积分',state.points],['🪙 代币',state.tokens],['⚫ 黑币',state.blackCoin||0],['⚡ 总EP',state.totalEP]];
   var html='<div style="font-family:var(--mono);font-size:12.5px">'+rows.map(function(r){
    return '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;border-bottom:1px dashed rgba(232,163,61,.18);padding:7px 0"><span style="color:#c9b791">'+r[0]+'</span><span style="text-align:right"><b style="color:#ffd60a;font-size:16px">'+fmt2(r[1])+'</b><br><small style="color:#8d7c5f;font-size:10px;letter-spacing:.04em">精确值：'+r[1]+'</small></span></div>';
   }).join('')+'</div>';
   if(typeof showModal==='function'){showModal('💰 资产明细 · 精确值',html,function(){closeModal();});}
   else{toast('精确值：'+rows.map(function(r){return r[0]+' '+r[1];}).join(' · '));}
  }catch(e){}
 }
 try{
  var __ut=window.updateTopBar;
  window.updateTopBar=function(){var r=__ut?__ut.apply(this,arguments):undefined;fix();return r;};
 }catch(e){}
 document.addEventListener('click',function(e){
  var t=e.target&&e.target.closest?e.target.closest('[data-exact]'):null;
  if(t){try{v2AssetDlg();}catch(err){}}
 });
 try{fix();}catch(e){}
})();

})();
