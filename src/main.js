import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/manrope/latin-200.css';
import '@fontsource/manrope/latin-400.css';
import '@fontsource/manrope/latin-600.css';
import '@fontsource/manrope/latin-500.css';
import './styles.css';
import sizes from './image-sizes.json';
const projects = [
 {id:'mantun',title:'慢吞',en:'MANTUN',category:'IP 形象设计 / 视觉延展',count:11,cover:'mantun-01.webp',desc:'慢，不代表落后。',body:'慢吞诞生于一个不断提速的时代。面对效率、秒回和持续赶路，它选择按照自己的节奏生活。圆钝的身体、半睁的眼睛与腹部螺旋符号，共同表达一种缓慢、松弛、慢慢消化世界的状态。'},
 {id:'lowtide',title:'退潮',en:'LOWTIDE',category:'品牌策略 / 视觉识别',count:14,cover:'lowtide-03.webp',desc:'让身体先停下来，让情绪慢慢退潮。',body:'以「下班后的情绪退潮」为核心概念，将 Listening Bar、鸡尾酒、黑胶音乐与低频社交结合。项目从品牌策略、视觉识别、IP 形象、酒单系统到空间应用进行完整构建，为城市夜晚创造一个缓冲区。'},
 {id:'melody',title:'把今天交给旋律',en:'MELODY',category:'品牌视觉 / IP 形象 / 应用延展',count:12,cover:'melody-01.webp',desc:'今天，只听旋律。',body:'以视听联觉与趣味减压为核心，通过超现实手法与高饱和色彩，将抽象的节奏和旋律转化为具象视觉场景。从主视觉、角色语言到社交媒体与实体物料，构建自由、活力并富有情绪共鸣的品牌体验。'}
];
const projectSlots=[...projects,{placeholder:true}];
// Original geometric stencil lettering, drawn for Wang Zhishen.
const glyphs = {
 W:'M0 0H29L25 4 43 112 33 164 6 4ZM45 0H65L86 112 75 164 47 20ZM91 0H110L106 5 89 83 83 54 95 4Z',
 A:'M44 0H65L29 160 33 164H4L10 158ZM68 67L99 158 105 164H70L74 160 51 91ZM39 118H62L68 138H34Z',
 N:'M0 0H29L25 4V160L29 164H0L4 160V4ZM36 0H58L97 101V155L36 22ZM80 0H109L105 4V91L84 37V4Z',
 G:'M0 33L25 8V160L29 164H0L4 160V37ZM39 0H100L75 25H39ZM64 82H105L101 86V160L105 164H76L80 160V102H64Z',
 Z:'M0 0H77L58 22H0ZM82 0H109L30 164H2ZM53 142H105V164H42Z',
 H:'M0 0H29L25 4V160L29 164H0L4 160V4ZM78 0H107L103 4V71L82 92V4ZM36 73H71L51 94H36ZM82 105H103V160L107 164H78L82 160Z',
 I:'M38 0H71L67 4V160L71 164H38L42 160V4Z',
 S:'M5 24L29 0H99L75 24H35V64L5 35ZM8 49L103 126V146L85 164 5 99V70L81 132V120L8 61ZM5 123L36 148H66L85 164H5Z',
 E:'M0 0H29L25 4V160L29 164H0L4 160V4ZM40 0H105L82 23H40ZM40 72H84L64 94H40ZM40 141H81L105 164H40Z'
};
let letterX=0;
const wordmark = `<svg viewBox="0 0 1630 164" role="presentation" aria-hidden="true" focusable="false">${[...'WANG ZHISHEN'].map(c=>{if(c===' '){letterX+=68;return '';}const x=letterX;letterX+=142;return `<path transform="translate(${x} 0)" d="${glyphs[c]}"/>`;}).join('')}</svg>`;
const mantunScene = (compact=false) => `<div class="mantun-scene${compact?' is-compact':''}"${compact?' aria-hidden="true"':' role="img" aria-label="慢吞站在人流穿梭的地铁站中，眨着眼睛"'}>
  <video class="mantun-crowd" autoplay muted loop playsinline preload="metadata" poster="/assets/mantun-01.webp">
    <source src="/assets/subway-crowd-user.mp4" type="video/mp4">
  </video>
  <div class="mantun-shade"></div>
  <div class="mantun-title"><img src="/assets/mantun-wordmark.png" alt="MANTUN" width="3246" height="714"></div>
  <div class="mantun-figure">
    <img src="/assets/mantun-character-clean3.png" alt="" width="676" height="739">
  </div>
  <div class="mantun-details" aria-hidden="true">
    <i class="mantun-lid lid-left"></i><i class="mantun-lid lid-right"></i>
  </div>
  <p class="mantun-quote">“If we go the wrong way, just look around more.”<br>“It's okay if we don't make it in time.”<br>“I am just moving a little slower.”</p>
</div>`;
const mantunEntry = () => `<section class="mantun-entry" aria-labelledby="mantun-entry-title">
  <div class="mantun-entry-ips" aria-label="慢吞 IP 角色阵列">
    ${[1,4,3,5,2,6,8,7,2,5,1,6,4,3,7,8,5,1,4,6].map((asset,i)=>`<figure class="mantun-entry-ip ip-${i+1}"><img src="/assets/mantun-ip-${String(asset).padStart(2,'0')}.png" alt="" loading="eager"></figure>`).join('')}
  </div>
  <div class="mantun-entry-brand"><h1 id="mantun-entry-title"><img src="/assets/mantun-hanzi.png" alt="慢吞"></h1><div class="mantun-entry-word"><img src="/assets/mantun-wordmark.png" alt="MANTUN" width="3246" height="714"></div></div>
  <div class="mantun-entry-claim"><strong>“慢，不代表落后”</strong><span>“Slow doesn’t mean falling behind.”</span></div>
  <button class="mantun-entry-scroll" type="button">SCROLL TO STORY <b>↓</b></button>
</section>`;
const mantunFooterIcons = [1,4,3,5,2,6,8,7];
const mantunFooterIconLoop = () => `<div class="mantun-next-loop">${mantunFooterIcons.map(asset=>`<img src="/assets/mantun-ip-${String(asset).padStart(2,'0')}.png" alt="" loading="lazy">`).join('')}</div>`;
const mantunNext = () => `<section class="mantun-next" aria-labelledby="mantun-next-title">
  <div class="mantun-next-pattern" aria-hidden="true">
    <div class="mantun-next-row is-forward"><div class="mantun-next-track">${mantunFooterIconLoop()}${mantunFooterIconLoop()}</div></div>
    <div class="mantun-next-row is-reverse"><div class="mantun-next-track">${mantunFooterIconLoop()}${mantunFooterIconLoop()}</div></div>
  </div>
  <div class="mantun-next-content">
    <div class="mantun-next-copy"><span>PROJECT 02 / NEXT PROJECT</span><strong id="mantun-next-title">LOWTIDE</strong><small>退潮 · 品牌策略 / 视觉识别</small></div>
    <a class="mantun-next-button" href="#project/lowtide" aria-label="下一个项目：退潮 LOWTIDE"><span>NEXT</span><b>→</b></a>
  </div>
</section>`;
const lowtideDetail = (p,nextProject) => `<div class="lowtide-project">
  <section class="lowtide-hero" aria-labelledby="lowtide-title">
    <a class="lowtide-back" href="#works">← ALL PROJECTS</a>
    <div class="lowtide-kicker"><span>PROJECT 02</span><span>BRAND IDENTITY · 2026</span></div>
    <div class="lowtide-title-row">
      <h1 id="lowtide-title">LOW<span>TIDE</span></h1>
      <div class="lowtide-stamp" aria-hidden="true"><b>退潮</b><small>LISTENING<br>BAR</small></div>
    </div>
    <div class="lowtide-intro">
      <h2>${p.desc}</h2>
      <p>${p.body}</p>
      <div class="lowtide-tags" aria-label="项目关键词"><span>VINYL</span><span>COCKTAIL</span><span>LOW-FI NIGHT</span></div>
    </div>
    <p class="lowtide-scroll">SCROLL TO DISCOVER <b>↓</b></p>
  </section>
  <section class="lowtide-gallery" aria-label="${p.title}项目完整展示">
    ${Array.from({length:p.count},(_,i)=>`<figure class="lowtide-page page-${i+1}"><figcaption><span>${String(i+1).padStart(2,'0')} / ${String(p.count).padStart(2,'0')}</span><span>${i===0?'OPENING':i===p.count-1?'LAST CALL':'LOWTIDE ARCHIVE'}</span></figcaption><img src="/assets/${p.id}-${String(i+1).padStart(2,'0')}.webp" width="1920" height="${sizes[p.id+'-'+String(i+1).padStart(2,'0')][1]}" alt="${p.title}作品展示，第 ${i+1} 页" loading="${i?'lazy':'eager'}"></figure>`).join('')}
  </section>
  <a class="lowtide-next" href="#project/${nextProject.id}" aria-label="下一个项目：${nextProject.title} ${nextProject.en}">
    <span>NEXT PROJECT / 03</span><strong>${nextProject.en}</strong><i>→</i><small>${nextProject.title}</small>
  </a>
</div>`;
const melodyStaff = () => `<svg class="melody-staff" viewBox="0 0 1600 760" preserveAspectRatio="none" aria-hidden="true">
  <g class="melody-staff-lines" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M-80 520 C260 140 530 690 900 345 S1390 105 1700 280"/><path d="M-80 555 C260 175 530 725 900 380 S1390 140 1700 315"/><path d="M-80 590 C260 210 530 760 900 415 S1390 175 1700 350"/><path d="M-80 625 C260 245 530 795 900 450 S1390 210 1700 385"/><path d="M-80 660 C260 280 530 830 900 485 S1390 245 1700 420"/>
  </g>
  <g class="melody-notes">
    <circle class="note-dot note-a" cx="350" cy="342" r="18"/><circle class="note-dot note-b" cx="816" cy="475" r="18"/><circle class="note-dot note-c" cx="1260" cy="220" r="18"/>
  </g>
</svg>`;
const melodyDetail = (p,nextProject) => `<div class="melody-project">
  <section class="melody-hero" aria-labelledby="melody-title">
    ${melodyStaff()}
    <a class="melody-back" href="#works">← PROJECT INDEX</a>
    <div class="melody-side-nav" aria-hidden="true"><span>CONCEPT</span><span>VISUAL</span><span>CHARACTER</span><span>APPLICATION</span></div>
    <p class="melody-question">今天的情绪，<br>应该是什么旋律？</p>
    <h1 id="melody-title"><span>MELODY</span><small>ONLY, TODAY.</small></h1>
    <div class="melody-burst"><span>03</span></div>
    <p class="melody-subtitle">把今天交给旋律</p>
    <div class="melody-hero-foot"><span>AUDIO–VISUAL SYNAESTHESIA</span><span>BRAND VISUAL / IP / APPLICATION</span></div>
  </section>
  <section class="melody-concept" aria-labelledby="melody-concept-title">
    <div><span>CONCEPT / 01</span><h2 id="melody-concept-title">让抽象的节奏，<br>变成看得见的快乐。</h2></div>
    <p>${p.body}</p>
    <div class="melody-orbit" aria-hidden="true"><i>♪</i><b>♫</b><em>♬</em></div>
  </section>
  <section class="melody-gallery" aria-label="${p.title}项目完整展示">
    ${Array.from({length:p.count},(_,i)=>`<figure class="melody-page page-${i+1}"><figcaption><b>${String(i+1).padStart(2,'0')}</b><span>${i<3?'CONCEPT & KEY VISUAL':i<8?'VISUAL SYSTEM & IP':'APPLICATION'}</span><small>MELODY ONLY, TODAY.</small></figcaption><img src="/assets/${p.id}-${String(i+1).padStart(2,'0')}.webp" width="1920" height="${sizes[p.id+'-'+String(i+1).padStart(2,'0')][1]}" alt="${p.title}作品展示，第 ${i+1} 页" loading="${i?'lazy':'eager'}"></figure>`).join('')}
  </section>
  <a class="melody-next" href="#project/${nextProject.id}" aria-label="下一个项目：${nextProject.title} ${nextProject.en}">
    ${melodyStaff()}<span>NEXT PROJECT / 01</span><strong>${nextProject.en}</strong><small>${nextProject.title}</small><i>↗</i>
  </a>
</div>`;
document.querySelector('#app').innerHTML = `
<a class="skip" href="#works">跳至作品</a>
<header class="header"><a class="identity" href="#top">王智申 <span>© 2026</span></a><nav aria-label="主导航"><a href="#top">[ Home ]</a><a href="#about">About</a><a href="#works">Projects <sup>04</sup></a><a href="#contact">Contact ↗</a></nav><button class="menu-toggle" aria-label="打开菜单" aria-expanded="false" aria-controls="menu">Menu +</button></header>
<main id="home">
<section class="hero" id="top"><div class="hero-topline"><span>独立思考，自由表达。</span><span>VISUAL DESIGN PORTFOLIO / 2026</span></div><h1 class="wordmark" aria-label="Wang Zhishen 王智申">${wordmark}</h1><div class="hero-caption"><p>Visual design with a focus on<br>brand identities and character culture.</p><a href="#about">关于王智申 ↗</a></div><div class="hero-bottom"><div><h2>视觉与 AI 设计师。</h2><p>从细微的感受出发，让想法有自己的形状。</p></div><a href="#about" class="scroll-link">认识我 <span>↓</span></a></div><div class="marquee" aria-hidden="true"><div>IDEAS TAKE SHAPE. DESIGN FINDS MEANING. IDEAS TAKE SHAPE. DESIGN FINDS MEANING. </div></div></section>
<section class="profile-page" id="about" aria-labelledby="profile-title">
<div class="profile-sheet">
<header class="profile-heading"><h2 id="profile-title">关于我<span>About Me</span></h2></header>
<div class="profile-contact"><a href="mailto:15503595248@163.com">E-MAIL:15503595248@163.COM</a><a href="tel:15503595248">☎ :15503595248</a></div>
<div class="profile-info"><h3>个人信息<span>Personal Info</span></h3><div class="profile-info-copy"><p>出生于2003Year来自山西</p><p>2026毕业</p><p>专业：视觉传达设计</p></div></div>
<div class="profile-photo" aria-hidden="true"></div>
<div class="profile-experience"><h3>项目经历<span>Project Experience</span></h3><div class="profile-body"><p>悠乐玩星 | 平面设计师实习生（IP 创作方向）2025.8.31–2026.7.6</p><p>· 参与潮玩 IP 项目，协助梳理 IP 人设与视觉规范，绘制 IP 表情、角色动作延展；</p><p>校园项目 | 比赛项目等</p><p>· 毕棚沟品牌全案设计 VI 手册 42P，包含办公用品 / 外卖包装 / 员工制服等场景应用</p><p>· 书籍设计《在风雨中呼喊》、《非遗木版年画》入选 2024 年四川工商学院艺术书籍优秀作品展，其中《非遗木版年画》入选“华灿奖”。</p><p>…</p></div></div>
<div class="profile-skills"><h3>个人能力<span>Personal ability</span></h3><div class="profile-body"><p>AIGC 设计</p><p>品牌视觉规范</p><p>PS / AI 等设计软件</p><p>平面物料设计</p></div></div>
<div class="profile-awards"><h3>项目经历<span>Project Experience</span></h3><div class="profile-body"><p>2024- 东方设计奖全国高校创新设计大赛二等奖</p><p>2023- 两岸新锐设计竞赛 · 华灿奖优秀奖</p><p>2023- 四川省大学生农业创意设计大赛一等奖</p><p>2022- 四川省大学生农业创意设计大赛二等奖</p><p>…</p></div></div>
<div class="profile-tools"><p>精通 (PS) 图像处理、Illustrator(AI)</p><p>图形绘制、InDesign(ID) 版式编排</p><p>擅长使用 AIGC 解决各类问题</p></div>
</div></section>
<section class="works works-index" id="works">
  <div class="works-cards">
    ${projectSlots.map((p,i)=>p.placeholder?`<article class="cover-card cover-card-${i+1} is-placeholder" aria-label="项目 ${i+1}，暂未添加">
      <div class="cover-stage"><span class="cover-number">0${i+1}</span><span class="cover-year">2026</span></div>
      <div class="cover-caption" aria-hidden="true"><h3>&nbsp;</h3><p>&nbsp;</p></div>
    </article>`:`<article class="cover-card cover-card-${i+1}">
      <a class="cover-link" href="#project/${p.id}" aria-label="查看${p.title}完整项目">
        <div class="cover-stage">
          <span class="cover-number">0${i+1}</span>
          <span class="cover-year">2026</span>
          <div class="cover-stack" aria-hidden="true">
            <img class="cover-layer cover-back" src="/assets/${p.id}-02.webp" alt="" loading="lazy" width="1600" height="900">
            <img class="cover-layer cover-middle" src="/assets/${p.id}-03.webp" alt="" loading="lazy" width="1600" height="900">
            <img class="cover-layer cover-front" src="/assets/${p.cover}" alt="" loading="lazy" width="1600" height="900">
          </div>
          <span class="cover-view">VIEW PROJECT ↗</span>
        </div>
        <div class="cover-caption">
          <h3>${p.title} <span>/ ${p.en}</span></h3>
          <p>${p.category}</p>
        </div>
      </a>
    </article>`).join('')}
  </div>
</section>
<footer class="section footer" id="contact"><div class="eyebrow">HAVE AN IDEA? <span>一起让想法发生。</span></div><a class="contact-title" href="mailto:15503595248@163.com">Let's talk<span>↗</span></a><div class="contact-row"><a href="mailto:15503595248@163.com">15503595248@163.com</a><button id="copy-email">复制邮箱 +</button><a href="tel:15503595248">+86 155 0359 5248</a></div><div class="footer-bottom"><span>© 2026 王智申</span><span>VISUAL & AI DESIGN</span><a href="#top">BACK TO TOP ↑</a></div></footer></main>
<aside id="menu" class="menu" hidden><nav aria-label="移动导航"><a href="#top">首页 <span>Home</span></a><a href="#works">作品 <span>Projects / 04</span></a><a href="#about">关于 <span>About</span></a><a href="#contact">联系 <span>Contact</span></a></nav></aside>
<main id="detail" hidden></main><div class="toast" role="status" aria-live="polite"></div><div class="mantun-cursor" aria-hidden="true"><img src="/assets/mantun-cursor.png" alt=""></div><div class="mantun-note-layer" aria-hidden="true"></div>`;
const menu=document.querySelector('#menu'),toggle=document.querySelector('.menu-toggle');
function setMenu(open){menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'关闭菜单':'打开菜单');toggle.textContent=open?'Close ×':'Menu +';document.body.classList.toggle('menu-open',open);}
toggle.addEventListener('click',()=>setMenu(menu.hidden));menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape'){setMenu(false);toggle.focus();}});
const home=document.querySelector('#home'),detail=document.querySelector('#detail');
function resumeMantunVideos(){requestAnimationFrame(()=>document.querySelectorAll('.mantun-crowd').forEach(video=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches){video.pause();return;}video.muted=true;video.play().catch(()=>{});}));}
function route(){
  const p=projects.find(x=>location.hash===`#project/${x.id}`);
  setMenu(false);home.hidden=!!p;detail.hidden=!p;
  document.body.classList.toggle('detail-open',!!p);
  document.body.classList.toggle('mantun-detail',p?.id==='mantun');
  document.body.classList.toggle('lowtide-detail',p?.id==='lowtide');
  document.body.classList.toggle('melody-detail',p?.id==='melody');
  if(p){
    document.title=`${p.title} ${p.en} — 王智申作品集`;
    const nextProject=projects[(projects.indexOf(p)+1)%projects.length];
    if(p.id==='mantun'){
      detail.innerHTML=`${mantunEntry()}<div class="gallery mantun-detail-gallery">${mantunScene(false)}${Array.from({length:p.count-1},(_,i)=>`<img src="/assets/${p.id}-${String(i+2).padStart(2,'0')}.webp" width="1600" height="${sizes[p.id+'-'+String(i+2).padStart(2,'0')][1]}" alt="${p.title}作品展示，第 ${i+2} 页" loading="${i?'lazy':'eager'}">`).join('')}</div>${mantunNext()}`;
      detail.querySelector('.mantun-entry-scroll')?.addEventListener('click',()=>detail.querySelector('.mantun-detail-gallery')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
    }else if(p.id==='lowtide'){
      detail.innerHTML=lowtideDetail(p,nextProject);
    }else if(p.id==='melody'){
      detail.innerHTML=melodyDetail(p,nextProject);
    }else{
      detail.innerHTML=`<section class="detail-intro section"><a class="underlined" href="#works">← 返回作品</a><div class="detail-meta"><span>SELECTED PROJECT / 2026</span><span>${p.category}</span></div><h1>${p.en}<small>${p.title}</small></h1><div class="detail-description"><h2>${p.desc}</h2><p>${p.body}</p></div></section><div class="gallery">${Array.from({length:p.count},(_,i)=>`<img src="/assets/${p.id}-${String(i+1).padStart(2,'0')}.webp" width="1920" height="${sizes[p.id+'-'+String(i+1).padStart(2,'0')][1]}" alt="${p.title}作品展示，第 ${i+1} 页" loading="${i?'lazy':'eager'}">`).join('')}</div><a class="next-project section" href="#project/${nextProject.id}"><span>NEXT PROJECT ↗</span><strong>${nextProject.en}</strong></a>`;
    }
    window.scrollTo({top:0,behavior:'instant'});
  }else{
    document.title='王智申 — 视觉与 AI 设计师';
    if(location.hash)requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView());
  }
  resumeMantunVideos();
}
window.addEventListener('hashchange',route);route();
document.querySelector('#copy-email').addEventListener('click',async()=>{const toast=document.querySelector('.toast');try{await navigator.clipboard.writeText('15503595248@163.com');toast.textContent='邮箱已复制';}catch{toast.textContent='邮箱：15503595248@163.com';}toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3000);});
// Text motion preserves the original accessible label and link destination.
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(({target,isIntersecting}) => {
    if (isIntersecting) { target.classList.add('text-visible'); revealObserver.unobserve(target); }
  });
}, {threshold:0.15});
function prepareTextMotion(root=document) {
  root.querySelectorAll('.header nav a, .hero-caption a, .underlined, .footer-bottom a, .next-project > span').forEach(el => {
    if(el.dataset.roll) return;
    el.dataset.roll='true';
    const label=document.createElement('span'); label.className='roll-window';
    const original=document.createElement('span');original.className='roll-original';
    while(el.firstChild) original.append(el.firstChild);
    const echo=original.cloneNode(true);echo.className='roll-echo';echo.setAttribute('aria-hidden','true');
    label.append(original,echo);el.append(label);
  });
  root.querySelectorAll('.section-heading h2, .works-index-head h2, .about-grid > h2, .hero-bottom h2, .detail-description h2').forEach(el=>{
    if(el.dataset.reveal) return;
    el.dataset.reveal='true';
    el.setAttribute('aria-label',el.innerText);
    const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    let index=0;
    nodes.forEach(node=>{
      const fragment=document.createDocumentFragment();
      for(const char of node.textContent){
        const span=document.createElement('span');span.className='text-char';span.textContent=char;
        span.setAttribute('aria-hidden','true');span.style.setProperty('--char-delay',`${Math.min(index++,24)*24}ms`);fragment.append(span);
      }
      node.replaceWith(fragment);
    });
    if(motionPreference.matches) el.classList.add('text-visible');else revealObserver.observe(el);
  });
}
prepareTextMotion();
window.addEventListener('hashchange',()=>{revealObserver.disconnect();prepareTextMotion();document.querySelectorAll('[data-reveal]:not(.text-visible)').forEach(el=>revealObserver.observe(el));});
motionPreference.addEventListener('change',()=>{if(motionPreference.matches)document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('text-visible'));});
document.querySelectorAll('.wordmark path').forEach((path,index)=>path.style.setProperty('--glyph-delay',`${index*45}ms`));

document.querySelectorAll('.cover-stage').forEach(stage=>{
  stage.addEventListener('pointermove',event=>{
    if (motionPreference.matches || event.pointerType === 'touch') return;
    const rect=stage.getBoundingClientRect();
    stage.style.setProperty('--mx',((event.clientX-rect.left)/rect.width-.5)*2);
    stage.style.setProperty('--my',((event.clientY-rect.top)/rect.height-.5)*2);
  });
  stage.addEventListener('pointerleave',()=>{
    stage.style.setProperty('--mx',0);
    stage.style.setProperty('--my',0);
  });
});

const mantunCursor=document.querySelector('.mantun-cursor');
const mantunNoteLayer=document.querySelector('.mantun-note-layer');
const cursorMedia=matchMedia('(hover:hover) and (pointer:fine)');
const noteGlyphs=['♪','♫','♬','♩'];
let cursorFrame=0,noteIndex=0,lastNoteTime=0,lastNoteX=0,lastNoteY=0;
document.addEventListener('pointermove',event=>{
  const active=document.body.classList.contains('mantun-detail')&&cursorMedia.matches&&event.pointerType!=='touch';
  if(!active){mantunCursor.classList.remove('is-visible');return;}
  mantunCursor.classList.add('is-visible');
  cancelAnimationFrame(cursorFrame);
  cursorFrame=requestAnimationFrame(()=>{
    mantunCursor.style.setProperty('--cursor-x',`${event.clientX}px`);
    mantunCursor.style.setProperty('--cursor-y',`${event.clientY}px`);
  });
  const now=performance.now(),distance=Math.hypot(event.clientX-lastNoteX,event.clientY-lastNoteY);
  if(motionPreference.matches||now-lastNoteTime<58||distance<14)return;
  lastNoteTime=now;lastNoteX=event.clientX;lastNoteY=event.clientY;
  const note=document.createElement('span');
  note.className=`mantun-note${noteIndex%3===0?' is-red':''}`;
  note.textContent=noteGlyphs[noteIndex%noteGlyphs.length];
  note.style.left=`${event.clientX}px`;note.style.top=`${event.clientY}px`;
  note.style.setProperty('--note-x',`${(noteIndex%5-2)*8}px`);
  note.style.setProperty('--note-rotate',`${(noteIndex%7-3)*9}deg`);
  note.style.setProperty('--note-size',`${18+(noteIndex%4)*4}px`);
  noteIndex+=1;mantunNoteLayer.append(note);
  note.addEventListener('animationend',()=>note.remove(),{once:true});
});
document.addEventListener('pointerover',event=>{if(event.target.closest?.('a,button'))mantunCursor.classList.add('is-hovering');});
document.addEventListener('pointerout',event=>{if(event.target.closest?.('a,button'))mantunCursor.classList.remove('is-hovering');});
document.documentElement.addEventListener('mouseleave',()=>mantunCursor.classList.remove('is-visible'));
window.addEventListener('hashchange',()=>{mantunCursor.classList.remove('is-visible');mantunNoteLayer.replaceChildren();});
