if(!window.hasOwnProperty("aiExecuted")){console.log(`%cPost-Summary-AI 文章摘要AI生成工具:%chttps://github.com/qxchuckle/Post-Summary-AI%c`,"border:1px #888 solid;border-right:0;border-radius:5px 0 0 5px;padding: 5px 10px;color:white;background:#4976f5;margin:10px 0","border:1px #888 solid;border-left:0;border-radius:0 5px 5px 0;padding: 5px 10px;","");window.aiExecuted="chuckle"}function ChucklePostAI(t){e(t);if(t.pjax){document.addEventListener("pjax:complete",()=>{setTimeout(()=>{e(t)},0)})}function e(a){const t=document.querySelector(".post-ai");if(t){t.parentElement.removeChild(t)}const e=window.location.href;if(a.eliminate&&a.eliminate.length&&a.eliminate.some(t=>e.includes(t))){console.log("Post-Summary-AI 已排除当前页面(黑名单)");return}if(a.whitelist&&a.whitelist.length&&!a.whitelist.some(t=>e.includes(t))){console.log("Post-Summary-AI 已排除当前页面(白名单)");return}let i="";if(!a.auto_mount&&a.el){i=document.querySelector(a.el?a.el:".article>.content");console.log(`zhengque`,"border:1px #888 solid;border-right:0;border-radius:5px 0 0 5px;padding: 5px 10px;color:white;background:#4976f5;margin:10px 0","border:1px #888 solid;border-left:0;border-radius:0 5px 5px 0;padding: 5px 10px;","")}else{console.log(`cuowu`,"border:1px #888 solid;border-right:0;border-radius:5px 0 0 5px;padding: 5px 10px;color:white;background:#4976f5;margin:10px 0","border:1px #888 solid;border-left:0;border-radius:0 5px 5px 0;padding: 5px 10px;","")}const q=document.querySelector(a.title_el)?document.querySelector(a.title_el).textContent:document.title;if(!i){return}const s={name:"Moss",introduce:"我叫Moss，是Yuhao为您安排的小助手，可以生成本文简介、推荐相关文章，快点击下方的按钮试试吧~",version:"YuhaoGPT",button:["介绍自己","相关文章","AI摘要"],...a.interface};pt();const o=document.createElement("div");o.className="post-ai";o.setAttribute("id","post-ai");i.insertBefore(o,i.firstChild);o.innerHTML=`<div class="ai-title">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21px" height="21px" viewBox="0 0 48 48">
        <g id="&#x673A;&#x5668;&#x4EBA;" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M34.717885,5.03561087 C36.12744,5.27055371 37.079755,6.60373651 36.84481,8.0132786 L35.7944,14.3153359 L38.375,14.3153359 C43.138415,14.3153359 47,18.1768855 47,22.9402569 L47,34.4401516 C47,39.203523 43.138415,43.0650727 38.375,43.0650727 L9.625,43.0650727 C4.861585,43.0650727 1,39.203523 1,34.4401516 L1,22.9402569 C1,18.1768855 4.861585,14.3153359 9.625,14.3153359 L12.2056,14.3153359 L11.15519,8.0132786 C10.920245,6.60373651 11.87256,5.27055371 13.282115,5.03561087 C14.69167,4.80066802 16.024865,5.7529743 16.25981,7.16251639 L17.40981,14.0624532 C17.423955,14.1470924 17.43373,14.2315017 17.43948,14.3153359 L30.56052,14.3153359 C30.56627,14.2313867 30.576045,14.1470924 30.59019,14.0624532 L31.74019,7.16251639 C31.975135,5.7529743 33.30833,4.80066802 34.717885,5.03561087 Z M38.375,19.4902885 L9.625,19.4902885 C7.719565,19.4902885 6.175,21.0348394 6.175,22.9402569 L6.175,34.4401516 C6.175,36.3455692 7.719565,37.89012 9.625,37.89012 L38.375,37.89012 C40.280435,37.89012 41.825,36.3455692 41.825,34.4401516 L41.825,22.9402569 C41.825,21.0348394 40.280435,19.4902885 38.375,19.4902885 Z M14.8575,23.802749 C16.28649,23.802749 17.445,24.9612484 17.445,26.3902253 L17.445,28.6902043 C17.445,30.1191812 16.28649,31.2776806 14.8575,31.2776806 C13.42851,31.2776806 12.27,30.1191812 12.27,28.6902043 L12.27,26.3902253 C12.27,24.9612484 13.42851,23.802749 14.8575,23.802749 Z M33.1425,23.802749 C34.57149,23.802749 35.73,24.9612484 35.73,26.3902253 L35.73,28.6902043 C35.73,30.1191812 34.57149,31.2776806 33.1425,31.2776806 C31.71351,31.2776806 30.555,30.1191812 30.555,28.6902043 L30.555,26.3902253 C30.555,24.9612484 31.71351,23.802749 33.1425,23.802749 Z" id="&#x5F62;&#x72B6;&#x7ED3;&#x5408;" fill="#444444" fill-rule="nonzero"></path></g></svg>
        <div class="ai-title-text">${s.name}</div>
        <div class="ai-Toggle">切换简介</div>
        <div class="ai-speech-box">
          <div class="ai-speech-content"></div>
        </div>
        <div class="ai-tag">${s.version}</div>
      </div>
      <div class="ai-explanation">${s.name}初始化中...</div>
      <div class="ai-btn-box">
        <div class="ai-btn-item">${s.button[0]}</div>
        <div class="ai-btn-item">${s.button[1]}</div>
        <div class="ai-btn-item">${s.button[2]}</div>
        <div class="ai-btn-item">${s.button[3]}</div>
      </div>`;let r=true;let n=document.querySelector(".ai-explanation");let M=document.querySelector(".post-ai");let l=document.querySelectorAll(".ai-btn-item");let c=document.querySelector(".ai-Toggle");let d=document.querySelector(".ai-speech-box");let p="";let m="";let P=600;let u=0;let f=0;let b=a.speed||20;let R=b*7.5;let g=[];let x=0;let h=false;let y=new AbortController;let w=y.signal;let v="";let k="";const S=a.summary_toggle??true;const E=a.summary_speech??true;let C=0;let H=false;let I="";let L="";let T=false;const J=a.summary_num||3;const G=true;const F="填入chatGPT的apiKey";const B=`https://${window.location.host}/`;const A=a.key?a.key:"eaffedde02b01962815a";const z=t=>{if(!r){return}if(!z.start)z.start=t;x=t-z.start;if(x>=b){z.start=t;if(u<m-1){let t=p.charAt(u+1);let e=/[,.，。!?！？]/.test(t)?R:b;if(n.firstElementChild){n.removeChild(n.firstElementChild)}n.innerHTML+=t;let o=document.createElement("div");o.className="ai-cursor";n.appendChild(o);u++;if(e===R){document.querySelector(".ai-explanation .ai-cursor").style.opacity="0"}if(u===m-1){$.disconnect();n.removeChild(n.firstElementChild)}g[0]=setTimeout(()=>{requestAnimationFrame(z)},e)}}else{requestAnimationFrame(z)}};const $=new IntersectionObserver(t=>{let e=t[0].isIntersecting;r=e;if(r){P=u===0?200:20;g[1]=setTimeout(()=>{if(f){u=0;f=0}if(u===0){n.innerHTML=p.charAt(0)}requestAnimationFrame(z)},P)}},{threshold:0});function U(){if(g.length){g.forEach(t=>{if(t){clearTimeout(t)}})}}function _(t=true,e="Moss努力生成中. . ."){u=0;f=1;U();r=false;x=0;if(t){n.innerHTML=e}else{n.innerHTML="网络有点慢，Moss在努力读取数据，请等待. . ."}if(!h){y.abort()}p="";m="";if(S){c.style.opacity="0";c.style.pointerEvents="none"}if(E){O();d.style.opacity="0";d.style.pointerEvents="none"}$.disconnect()}function N(t,e=true){if(a.hasOwnProperty("typewriter")&&!a.typewriter){n.innerHTML=t}else{_(e);p=t;m=p.length;$.observe(M)}}function D(){N(s.introduce)}function Y(){_();g[2]=setTimeout(async()=>{let t=await Q();if(t===""||t===false){N(`抱歉，Moss太笨了，未能找到任何可推荐的文章，去主页逛逛或到留言板给我的主人催更吧~`)}else if(t){n.innerHTML=t}},200)}async function Z(){_();const t=i;const e=lt(t);const o=await ct(e,G);if(o){N(o.summary);if(S){c.style.opacity="1";c.style.pointerEvents="auto";et()}}}async function K(){_();L=null;const t=i;C=(C+1)%J;const e=lt(t)+"#".repeat(C);let o="";if(C===1&&!H){sessionStorage.setItem("backupsSummary",sessionStorage.getItem("summary"));H=true}if(!sessionStorage.getItem(`summary${"#".repeat(C)}`)){sessionStorage.removeItem("summary");o=await ct(e,G);if(o){sessionStorage.setItem(`summary${"#".repeat(C)}`,JSON.stringify(o))}}else{o=JSON.parse(sessionStorage.getItem(`summary${"#".repeat(C)}`));k=o.id;if(C===0){sessionStorage.setItem("summary",sessionStorage.getItem("backupsSummary"))}else{sessionStorage.setItem("summary",sessionStorage.getItem(`summary${"#".repeat(C)}`))}}if(o){N(o.summary);c.style.opacity="1";c.style.pointerEvents="auto";et()}}async function Q(){h=false;y=new AbortController;w=y.signal;let t="";let o="";let e="";const i={signal:w,method:"GET",headers:{"content-type":"application/x-www-form-urlencoded"}};if(sessionStorage.getItem("recommendList")){e=JSON.parse(sessionStorage.getItem("recommendList"))}else{try{t=await fetch(`https://summary.tianli0.top/recommends?url=${encodeURIComponent(window.location.href)}&author=${a.rec_method?a.rec_method:"all"}`,i);h=true;if(t.status===429){N("对Moss的请求过于频繁，请稍后再问我吧。")}if(!t.ok){throw new Error("Response not ok")}}catch(t){if(t.name==="AbortError"){}else{console.error("Error occurred:",t);N("获取推荐出错了，请稍后再试。")}h=true;return false}e=await t.json();sessionStorage.setItem("recommendList",JSON.stringify(e))}if(e.hasOwnProperty("success")&&!e.success){return false}else{o=`推荐文章：<br />`;o+='<div class="ai-recommend">';e.forEach((t,e)=>{o+=`<div class="ai-recommend-item"><span>推荐${e+1}：</span><a target="_blank" href="${t.url}" title="${t.title?t.title:"未获取到题目"}">${t.title?t.title:"未获取到题目"}</a></div>`});o+="</div>"}return o}async function V(){_(true,"矩阵穿梭中. . .");h=false;y=new AbortController;w=y.signal;let t="";let e="";const o={signal:w,method:"GET",headers:{"content-type":"application/x-www-form-urlencoded"}};if(sessionStorage.getItem("matrixShuttle")){e=JSON.parse(sessionStorage.getItem("matrixShuttle"))}else{try{t=await fetch("https://summary.tianli0.top/websites_used",o);h=true;if(t.status===429){N("请求过于频繁，请稍后再请求AI。")}if(!t.ok){throw new Error("Response not ok")}}catch(t){if(t.name==="AbortError"){}else{console.error("Error occurred:",t);N("矩阵穿梭失败了，请稍后再试。")}h=true;return false}e=await t.json();sessionStorage.setItem("matrixShuttle",JSON.stringify(e))}const i=X(e.websites);if(i){N(`正在前往 ${i} ，已有 ${e.count} 个网站接入AI摘要。`);g[2]=setTimeout(()=>{window.open(`https://${i}`,"_blank")},b*100)}else{N(`没有可以穿梭的网站。`)}}function X(t){if(t.length===0){return null}const e=W(t.length);return t[e]}function W(t){const e=new Uint32Array(1);window.crypto.getRandomValues(e);return e[0]%t}async function tt(){if(!k)return;let t="";if(L&&!I){await ot(L);return}if(I&&I){if(T){T=false;I.play();d.style.opacity="0.4";d.style.animation="ai_breathe .7s linear infinite"}else{T=true;I.pause();d.style.opacity="1";d.style.animation=""}return}else{const e={method:"GET",headers:{"Content-Type":"application/json",Referer:B}};const o=new URLSearchParams({key:A,id:k});try{d.style.pointerEvents="none";d.style.opacity="0.4";t=await fetch(`https://summary.tianli0.top/audio?${o}`,e);if(t.status===403){console.error("403 refer与key不匹配。")}else if(t.status===500){console.error("500 系统内部错误")}else{L=await t.blob();d.style.pointerEvents="auto";await ot(L)}}catch(t){console.log("摘要语音请求出错：",t);d.style.opacity="1";d.style.pointerEvents="auto"}}}function O(t=false){if(!E){return}if(I){I.pause();I.remove()}I=null;d.style.opacity="1";d.style.animation="";if(t){L=null}}function et(){if(!E){return}d.style.opacity="1";d.style.animation="";d.style.pointerEvents="auto"}async function ot(t){if(!E){return}const e=URL.createObjectURL(t);I=new Audio(e);I.play();if(a.pjax){function o(){I.pause();I.remove();document.removeEventListener("pjax:complete",o)}document.removeEventListener("pjax:complete",o);document.addEventListener("pjax:complete",o)}d.style.opacity="0.4";d.style.animation="ai_breathe .7s linear infinite";I.removeEventListener("ended",it);I.addEventListener("ended",it)}function it(){O()}async function rt(){sessionStorage.removeItem("recommendList");sessionStorage.removeItem("backupsSummary");for(let t=0;t<J;t++){sessionStorage.removeItem(`summary${"#".repeat(t)}`)}n=document.querySelector(".ai-explanation");M=document.querySelector(".post-ai");l=document.querySelectorAll(".ai-btn-item");const o=[D,Y,Z,V];l.forEach((t,e)=>{if(a.hide_shuttle&&e===l.length-1){t.style.display="none";return}t.addEventListener("click",()=>{o[e]()})});c=document.querySelector(".ai-Toggle");if(S){c.addEventListener("click",()=>{K()})}else{c.style.display="none"}d=document.querySelector(".ai-speech-box");if(E){d.addEventListener("click",()=>{tt()})}else{d.style.display="none"}if(a.summary_directly){Z()}else{D()}v=localStorage.getItem("visitorId")||await nt()}async function nt(){try{const e=await import("https://openfpcdn.io/fingerprintjs/v4");const o=await e.default.load();const i=await o.get();const t=i.visitorId;localStorage.setItem("visitorId",t);return t}catch(t){console.error("生成ID失败");return null}}function j(t){const i=a.exclude?a.exclude:["highlight","Copyright-Notice","post-ai","post-series","mini-sandbox"];if(!i.includes("post-ai")){i.push("post-ai")}const r=["script","style","iframe","embed","video","audio","source","canvas","img","svg","hr","input","form"];let n="";for(let o of t.childNodes){if(o.nodeType===Node.TEXT_NODE){n+=o.textContent.trim()}else if(o.nodeType===Node.ELEMENT_NODE){let e=false;for(let t of o.classList){if(i.includes(t)){e=true;break}}let t=r.includes(o.tagName.toLowerCase());if(!e&&!t){let t=j(o);n+=t}}}return n.replace(/\s+/g,"")}function at(t){const e=t.querySelectorAll("h1, h2, h3, h4");const o=[];for(let t=0;t<e.length;t++){const i=e[t];const r=i.textContent.trim();o.push(r);const n=at(i);o.push(...n)}return o.join(";")}function st(t,e=1600,o="4:3:3"){e=Math.min(e,5e3);if(t.length<=e){return t}const i=o.split(":").map(Number);const r=i.reduce((t,e)=>t+e,0);const n=Math.min(t.length,e);const a=i.map(t=>Math.floor(n*t/r));const s=t.substring(0,a[0]);const l=(t.length-300)/2;const c=t.substring(l,l+a[1]);const d=t.substring(t.length-a[2]);const p=s+c+d;return p}function lt(t,e=true){let o;if(e){const i=1600;const r="4:3:3";o=`文章的各级标题：${at(t)}。文章内容的截取：${st(j(t),i,r)}`}else{o=`${j(t)}`}return o}async function ct(t,e=true){if(!A){return"没有获取到key，代码可能没有安装正确，详细请查看文档。"}if(A==="123456"){return"请购买 key 使用，如果你能看到此条内容，则说明代码安装正确。"}h=false;y=new AbortController;w=y.signal;let o="";if(sessionStorage.getItem("summary")){return JSON.parse(sessionStorage.getItem("summary"))}if(e){try{o=await fetch("https://summary.tianli0.top/",{signal:w,method:"POST",headers:{"Content-Type":"application/json",Referer:B},body:JSON.stringify({content:t,key:A,title:q,url:window.location.href,user_openid:v})});h=true;if(o.status===429){N("请求过于频繁，请稍后再请求AI。")}if(!o.ok){throw new Error("Response not ok")}}catch(t){if(t.name==="AbortError"){}else if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"){N(`${s.name}请求YuhaoGPT出错了，你正在本地进行调试，请前往summary.zhheo.com添加本地域名（127.0.0.1:端口）的白名单。`)}else{N(`${s.name}请求YuhaoGPT出错了，请稍后再试。`)}h=true;return""}const i=await o.json();k=i.id;sessionStorage.setItem("summary",JSON.stringify(i));O(true);return i}else{const r=`你是一个摘要生成工具，你需要解释我发送给你的内容，不要换行，不要超过200字，只需要介绍文章的内容，不需要提出建议和缺少的东西。请用中文回答，文章内容为：${t}`;const n="https://api.openai.com/v1/chat/completions";try{o=await fetch(n,{signal:w,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${F}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:r}]})});h=true;if(o.status===429){N("请求过于频繁，请稍后再请求AI。")}if(!o.ok){throw new Error("Response not ok")}}catch(t){console.error("Error occurred:",t);N(`${s.name}请求chatGPT出错了，请稍后再试。`);h=true;return""}const i=await o.json();const a=i.choices[0].message.content;sessionStorage.setItem("summary",a);return a}}function dt(){function a(t){let e=1;for(const o of t.children){e+=a(o)}return e}function s(t){const e=["IFRAME","FOOTER","HEADER","BLOCKQUOTE"];if(e.includes(t.tagName)){return true}const o=["aplayer","comment"];return Array.from(t.classList).some(e=>o.some(t=>e.includes(t)))}function l(t){const i={H1:1.5,H2:1,H3:.5,P:1};let r=0;let n=null;function a(t){if(s(t)){return}let e=0;for(const o of t.children){if(o.tagName in i){e+=i[o.tagName]}}if(e>r){r=e;n=t}for(const o of t.children){a(o)}}a(t);return n}function t(){const t=[document.body];let e=0;let o=null;while(t.length>0){const i=t.shift();if(s(i)){continue}const r=a(i);if(r>e){e=r;o=i}for(const n of i.children){t.push(n)}}return l(o)}return t()}function pt(){const t="qx-ai-style";if(document.getElementById(t)){return}const e=document.createElement("style");e.id=t;e.textContent=a.css||`:root{--ai-font-color:#353535;--ai-post-bg:#f1f3f8;--ai-content-bg:#fff;--ai-content-border:1px solid #e3e8f7;--ai-border:1px solid #e3e8f7bd;--ai-tag-bg:rgba(48,52,63,0.80);--ai-cursor:#333;--ai-btn-bg:rgba(48,52,63,0.75);--ai-title-color:#4c4948;--ai-btn-color:#fff;--ai-speech-content:#fff;}[data-theme=dark],.theme-dark,body.dark,body.dark-theme{--ai-font-color:rgba(255,255,255,0.9);--ai-post-bg:#30343f;--ai-content-bg:#1d1e22;--ai-content-border:1px solid #42444a;--ai-border:1px solid #3d3d3f;--ai-tag-bg:#1d1e22;--ai-cursor:rgb(255,255,255,0.9);--ai-btn-bg:#1d1e22;--ai-title-color:rgba(255,255,255,0.86);--ai-btn-color:rgb(255,255,255,0.9);--ai-speech-content:#1d1e22;}#post-ai.post-ai{background:var(--ai-post-bg);border-radius:12px;padding:10px 12px 11px;line-height:1.3;border:var(--ai-border);margin-top:10px;margin-bottom:6px;transition:all 0.3s;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;}#post-ai .ai-title{display:flex;color:var(--ai-title-color);border-radius:8px;align-items:center;padding:0 6px;position:relative;}#post-ai .ai-title i{font-weight:800;}#post-ai .ai-title-text{font-weight:bold;margin-left:8px;font-size:17px;}#post-ai .ai-tag{font-size:12px;background-color:var(--ai-tag-bg);color:var(--ai-btn-color);border-radius:4px;margin-left:auto;line-height:1;padding:4px 5px;border:var(--ai-border);}#post-ai .ai-explanation{margin-top:10px;padding:8px 12px;background:var(--ai-content-bg);border-radius:8px;border:var(--ai-content-border);font-size:15.5px;line-height:1.4;color:var(--ai-font-color);}#post-ai .ai-cursor{display:inline-block;width:7px;background:var(--ai-cursor);height:16px;margin-bottom:-2px;opacity:0.95;margin-left:3px;transition:all 0.3s;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;}#post-ai .ai-btn-box{font-size:15.5px;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;}#post-ai .ai-btn-item{padding:5px 10px;margin:10px 16px 0px 5px;width:fit-content;line-height:1;background:var(--ai-btn-bg);border:var(--ai-border);color:var(--ai-btn-color);border-radius:6px 6px 6px 0;-webkit-border-radius:6px 6px 6px 0;-moz-border-radius:6px 6px 6px 0;-ms-border-radius:6px 6px 6px 0;-o-border-radius:6px 6px 6px 0;user-select:none;transition:all 0.3s;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;cursor:pointer;}#post-ai .ai-btn-item:hover{background:#49b0f5dc;}#post-ai .ai-recommend{display:flex;flex-direction:row;flex-wrap:wrap;}#post-ai .ai-recommend-item{width:50%;margin-top:2px;}#post-ai .ai-recommend-item a{border-bottom:2px solid #4c98f7;padding:0 .2em;color:#4c98f7;font-weight:700;text-decoration:none;transition:all 0.3s;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;}#post-ai .ai-recommend-item a:hover{background-color:#49b1f5;border-bottom:2px solid #49b1f5;color:#fff;border-radius:5px;}@media screen and (max-width:768px){#post-ai .ai-btn-box{justify-content:center;}}#post-ai .ai-title>svg{width:21px;height:21px;}#post-ai .ai-title>svg path{fill:var(--ai-font-color);}#post-ai .ai-Toggle{font-size:12px;border:var(--ai-border);background:var(--ai-btn-bg);color:var(--ai-btn-color);padding:3px 4px;border-radius:4px;margin-left:6px;cursor:pointer;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;-ms-transition:.3s;transition:.3s;font-weight:bolder;pointer-events:none;opacity:0;}#post-ai .ai-Toggle:hover{background:#49b0f5dc;}#post-ai .ai-speech-box{width:21px;height:21px;background:var(--ai-font-color);margin-left:7px;border-radius:50%;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;justify-content:center;pointer-events:none;opacity:0;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;-ms-transition:.3s;transition:.3s;cursor:pointer;}#post-ai .ai-speech-content{width:8px;background:var(--ai-speech-content);height:8px;border-radius:50%;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;-ms-transition:.3s;transition:.3s;}#post-ai .ai-speech-box:hover .ai-speech-content{background:#49b0f5;}@keyframes ai_breathe{0%{transform:scale(0.9);-webkit-transform:scale(0.9);-moz-transform:scale(0.9);-ms-transform:scale(0.9);-o-transform:scale(0.9);}50%{transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);}}`;a.additional_css&&(e.textContent+=a.additional_css);document.head.appendChild(e)}async function mt(){h=false;y=new AbortController;w=y.signal;const t={signal:w,method:"GET",headers:{"content-type":"application/x-www-form-urlencoded"}};try{const e=await fetch(`https://summary.tianli0.top/personalized_recommends?openid=${v}`,t);h=true;const o=await e.json();return o}catch{N(`${s.name}获取个性化推荐出错了，请稍后再试。`);h=true;return null}}rt()}}new ChucklePostAI({el:".article>.content",key:"eaffedde02b01962815a",rec_method:"web",eliminate:["c0297c2d","/archives","/index"],summary_directly:true,hide_shuttle:true,total_length:1600,ratio_string:"4:3:3",pjax:true,css:`:root{--ai-font-color:#353535;--ai-post-bg: #f1f3f8;--ai-content-bg: #fff;--ai-content-border: 1px solid #e3e8f7;--ai-border:1px solid #e3e8f7bd;--ai-tag-bg:rgba(48, 52, 63, 0.80);--ai-cursor: #333;--ai-btn-bg: rgba(48, 52, 63, 0.75);--ai-title-color: #4c4948;--ai-btn-color: #fff;--ai-speech-content: #fff;}[data-theme=dark], .theme-dark, body.dark, body.dark-theme {--ai-font-color:rgba(255,255,255,0.9);--ai-post-bg:#30343f;--ai-content-bg: #1d1e22;--ai-content-border: 1px solid #42444a;--ai-border:1px solid #3d3d3f;--ai-tag-bg:#425AEF;--ai-cursor: rgb(255, 255, 255, 0.9);--ai-btn-bg: #425AEF;--ai-title-color: rgba(255,255,255,0.86);--ai-btn-color: rgb(255, 255, 255, 0.9);--ai-speech-content: #1d1e22;}#post-ai.post-ai{background: var(--ai-post-bg);border-radius: 12px;padding: 10px 12px 11px;line-height: 1.3;border: var(--ai-border);margin-top: 10px;margin-bottom: 6px;transition: all 0.3s;-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-ms-transition: all 0.3s;-o-transition: all 0.3s;}#post-ai .ai-title{display: flex;color: var(--ai-title-color);border-radius: 8px;align-items: center;padding: 0 6px;position: relative;}#post-ai .ai-title i{font-weight: 800;}#post-ai .ai-title-text{font-weight: bold;margin-left: 8px;font-size: 17px;}#post-ai .ai-tag{font-size: 12px;background-color: var(--ai-tag-bg);color: var(--ai-btn-color);border-radius: 4px;margin-left: auto;line-height: 1;padding: 4px 5px;border: var(--ai-border);}#post-ai .ai-explanation{margin-top: 10px;padding: 8px 12px;background: var(--ai-content-bg);border-radius: 8px;border: var(--ai-content-border);font-size: 13px;line-height: 1.4;color: var(--ai-font-color);}#post-ai .ai-cursor{display: inline-block;width: 7px;background: var(--ai-cursor);height: 16px;margin-bottom: -2px;opacity: 0.95;margin-left: 3px;transition: all 0.3s;-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-ms-transition: all 0.3s;-o-transition: all 0.3s;}#post-ai .ai-btn-box{font-size: 12px;width: 100%;display: flex;flex-direction: row;flex-wrap: wrap;}#post-ai .ai-btn-item{padding: 5px 10px;margin: 10px 16px 0px 5px;width: fit-content;line-height: 1;background: var(--ai-btn-bg);border: var(--ai-border);color: var(--ai-btn-color);border-radius: 6px 6px 6px 6px;-webkit-border-radius: 6px 6px 6px 6px;-moz-border-radius: 6px 6px 6px 6px;-ms-border-radius: 6px 6px 6px 6px;-o-border-radius: 6px 6px 6px 6px;user-select: none;transition: all 0.3s;-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-ms-transition: all 0.3s;-o-transition: all 0.3s;cursor: pointer;}#post-ai .ai-btn-item:hover{background: #49b0f5dc;}#post-ai .ai-recommend{display: flex;flex-direction: row;flex-wrap: wrap;}#post-ai .ai-recommend-item{width: 50%;margin-top: 2px;}#post-ai .ai-recommend-item a{border-bottom: 2px solid #4c98f7;padding: 0 .2em;color: #4c98f7;font-weight: 700;text-decoration: none;transition: all 0.3s;-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-ms-transition: all 0.3s;-o-transition: all 0.3s;}#post-ai .ai-recommend-item a:hover{background-color: #49b1f5;border-bottom: 2px solid #49b1f5;color: #fff;border-radius: 5px;}@media screen and (max-width: 768px){#post-ai .ai-btn-box{justify-content: center;}}#post-ai .ai-title>svg {width: 21px;height: 21px;}#post-ai .ai-title>svg path{fill: var(--ai-font-color);}#post-ai .ai-Toggle{font-size: 12px;border: var(--ai-border);background: var(--ai-btn-bg);color: var(--ai-btn-color);padding: 3px 4px;border-radius: 4px;margin-left: 6px;cursor: pointer;-webkit-transition: .3s;-moz-transition: .3s;-o-transition: .3s;-ms-transition: .3s;transition: .3s;font-weight: bolder;pointer-events: none;opacity: 0;}#post-ai .ai-Toggle:hover{background: #49b0f5dc;}#post-ai .ai-speech-box{width: 21px;height: 21px;background: var(--ai-font-color);margin-left: 7px;border-radius: 50%;display: flex;flex-direction: row;flex-wrap: wrap;align-content: center;justify-content: center;pointer-events:none;opacity:0;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;-ms-transition:.3s;transition:.3s;cursor: pointer;}#post-ai .ai-speech-content{width: 8px;background: var(--ai-speech-content);height: 8px;border-radius: 50%;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;-ms-transition:.3s;transition:.3s;}#post-ai .ai-speech-box:hover .ai-speech-content{background: #49b0f5;}@keyframes ai_breathe {0% {transform: scale(0.9);-webkit-transform: scale(0.9);-moz-transform: scale(0.9);-ms-transform: scale(0.9);-o-transform: scale(0.9);}50% {transform: scale(1);-webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);}}`});