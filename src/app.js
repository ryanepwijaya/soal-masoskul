(function(){
"use strict";
// ---------- data prep ----------
const SOAL = [...SOAL_1, ...SOAL_2, ...SOAL_3].map((q,i)=>({id:i+1,k:q[0],s:q[1],w:WORST[i],o:q[2].map(o=>({t:o[0],x:o[1],e:o[2]}))}));
const full = a => !!(a && a.b && a.w);
const score = (s,a) => full(a) ? (a.b==="best"?1:0)+(a.w===s.w?1:0) : 0;
const PEND = {};
const KMAP = Object.fromEntries(KOMPETENSI.map(k=>[k.id,k]));
const DRILL = [];
SOAL.forEach(s=>s.o.forEach(o=>{ if(o.t!=="best") DRILL.push({id:s.id+"-"+o.t,sid:s.id,k:s.k,t:o.t,x:o.x,e:o.e}); }));
const EFEKTIF = {integritas:"Menolak atau mengoreksi, lalu mengingatkan dan mengajak rekan dengan santun",kerjasama:"Membantu proporsional dan terkoordinasi, berbagi informasi, komit pada hasil tim",komunikasi:"Mendengar aktif, mengonfirmasi bila kurang jelas, menyusun naskah sesuai arahan",hasil:"Target pribadi di atas standar, mencoba cara baru, berbagi cara yang berhasil",pelayanan:"Menjelaskan aturan secara transparan dan objektif, santun, lalu memberi jalan keluar",pdol:"Memberi contoh dan petunjuk praktis, mendampingi praktik, memastikan paham",perubahan:"Beradaptasi mandiri tanpa menunggu arahan dan mencari solusi atas kendala",keputusan:"Menelusuri dan mengonfirmasi dari beberapa sumber, lalu memutuskan sesuai pedoman",perekat:"Tenang, menghargai perbedaan, dan aktif menjaga hubungan baik"};
const ORDER = ["mulai","dasar","kunci","sjt",...KOMPETENSI.map(k=>"k/"+k.id),"bedakan","hafalan","kilat"];
const TITLES = {progres:"Simpan progres",mode:"Mode jabatan",mulai:"Mulai di sini",dasar:"Bab 1 · Kenalan dengan kompetensi",kunci:"Bab 2 · Ciri terbaik dan terburuk",sjt:"Bab 3 · Mengenali tipe pengecoh",bedakan:"Terbaik vs hampir benar",hafalan:"Hafalan ringan",kilat:"Review kilat"};
KOMPETENSI.forEach(k=>TITLES["k/"+k.id]=k.nama);
const LETTER="ABCDEF";

// ---------- state ----------
const KEY="mansoskul-l2-tangga-v3";
let ST = {mode:"terampil",done:{},ans:{},drill:{},flashI:0};
try{const raw=localStorage.getItem(KEY); if(raw) ST=Object.assign(ST,JSON.parse(raw));}catch(e){}
let CAN_SAVE=false;
try{localStorage.setItem(KEY+"_t","1");CAN_SAVE=localStorage.getItem(KEY+"_t")==="1";localStorage.removeItem(KEY+"_t");}catch(e){}
function save(){if(!CAN_SAVE)return;try{localStorage.setItem(KEY,JSON.stringify(ST));}catch(e){}}
const target = k => MODES[ST.mode].target[k];

// ---------- helpers ----------
const $ = (s,el=document)=>el.querySelector(s);
const $$ = (s,el=document)=>[...el.querySelectorAll(s)];
function rt(s){return String(s).replace(/\[\[([a-z0-9]+)(?:\|([^\]]+))?\]\]/g,(m,k,lab)=>{const g=GLOSS[k];const label=lab||(g?g[0]:k);return g?`<span class="term" tabindex="0" role="button" data-k="${k}">${label}</span>`:label;});}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function tag(t){const T=TIPE[t];const c=t==="best"?"t2":t==="hampir"?"t3":"t4";return `<span class="tag ${c}">${T?T.nama:t}</span>`;}
function lvColor(l){return `var(--l${l})`;}
function toast(msg){const t=$("#toast");t.textContent=msg;t.style.display="block";clearTimeout(toast._t);toast._t=setTimeout(()=>t.style.display="none",1800);}
function stdLabel(k){const t=target(k);return t===2?`<span class="tag t2">Standar ${MODES[ST.mode].label}: L2</span>`:`<span class="tag t1">Standar ${MODES[ST.mode].label}: L1</span>`;}

function verdict(t){
  if(t==="best") return {cls:"v-ok",h:"Tepat, ini jawaban paling efektif.",d:"Opsi ini lolos keempat syarat: sesuai aturan, santun, proaktif tapi proporsional, dan menuntaskan masalah."};
  const T=TIPE[t]; return {cls:t==="hampir"?"v-mid":"v-bad",h:(t==="hampir"?"Hampir. ":"Belum tepat. ")+`Pilihanmu bertipe ${T.nama.toLowerCase()}.`,d:T.ciri};
}
function ladMini(chosen){let h='<span class="ladmini" aria-hidden="true">';for(let l=1;l<=5;l++){h+=`<i style="height:${4+l*3}px;background:${l===2?"var(--l2)":(l===chosen?lvColor(l):"var(--line)")}"></i>`;}return h+"</span>";}

// ---------- nav ----------
function buildNav(){
  const g=(id,label,extra="")=>{const done=ST.done[id];return `<a href="#/${id}" data-r="${id}"><span class="dot${done?" done":""}"></span><span class="lbl">${label}</span>${extra}</a>`;};
  let h=`<a href="#/progres" data-r="progres" class="important"><span class="lbl"><b>Simpan progres</b></span><span class="tag t3">Penting</span></a>`;
  h+=`<h4>Pondasi</h4>`+["mulai","dasar","kunci","sjt"].map(id=>g(id,TITLES[id])).join("");
  h+=`<h4>9 kompetensi · standar ${MODES[ST.mode].label}</h4>`;
  KOMPETENSI.forEach(k=>{const t=target(k.id);h+=g("k/"+k.id,k.nama,`<span class="lv" style="color:${lvColor(t)}">L${t}</span>`);});
  h+=`<h4>Pemantapan</h4>`+["bedakan","hafalan","kilat"].map(id=>g(id,TITLES[id])).join("");
  const wrong=wrongList().length;
  h+=`<h4>Latihan</h4>
   <a href="#/drill" data-r="drill"><span class="lbl">Apa cacatnya?</span><span class="small">${DRILL.length}</span></a>
   <a href="#/latihan" data-r="latihan"><span class="lbl">Latihan SJT</span><span class="small">${SOAL.filter(s=>full(ST.ans[s.id])).length}/100</span></a>
   <a href="#/simulasi" data-r="simulasi"><span class="lbl">Simulasi ujian</span></a>
   <a href="#/ulang" data-r="ulang"><span class="lbl">Ulang yang salah</span><span class="small">${wrong}</span></a>`;
  $("nav.side").innerHTML=h;
  markNav();
}
function markNav(){const r=route().path;$$("nav.side a").forEach(a=>{const on=a.dataset.r===r||(r.startsWith("latihan")&&a.dataset.r==="latihan");on?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current");});}
function buildModes(){
  $(".modes").innerHTML=`<button type="button" class="modechip" data-gomode="1" aria-label="Ganti mode jabatan"><span>Mode</span><b>${MODES[ST.mode].label}</b><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>`;
}

// ---------- router ----------
let CUR="mulai";
function route(){const h=CUR||"mulai";const [path,qs]=h.split("?");return {path,q:new URLSearchParams(qs||"")};}
function go(p){CUR=p;if(!window.__ARTIFACT__){try{if(location.hash!=="#/"+p) history.pushState(null,"","#/"+p);}catch(e){}}render();}
function twoTap(btn,label){if(btn.dataset.armed){delete btn.dataset.armed;return true;}btn.dataset.armed="1";const old=btn.innerHTML;btn.innerHTML=label||"Ketuk sekali lagi untuk yakin";setTimeout(()=>{if(btn.dataset.armed){delete btn.dataset.armed;btn.innerHTML=old;}},3500);return false;}
function render(){
  const {path,q}=route(); const main=$("#main"); hideTip();
  document.body.classList.remove("nav-open");
  let html="";
  document.body.classList.toggle("welcome",path==="mode");
  if(path==="mode") html=pageMode();
  else if(BAB[path]) html=pageBab(path);
  else if(path.startsWith("k/")&&KMAP[path.slice(2)]) html=pageK(path.slice(2));
  else if(path==="hafalan") html=pageHafalan();
  else if(path==="drill") html=pageDrillShell();
  else if(path==="latihan") html=pageLatihanList(q);
  else if(path.startsWith("latihan/")) html=pageSoal(+path.split("/")[1],q);
  else if(path==="simulasi") html=pageSimShell();
  else if(path==="ulang") html=pageUlang();
  else if(path==="progres") html=pageProgres();
  else {go("mulai");return;}
  const warn=(CAN_SAVE||path==="mode"||path==="progres")?"":`<aside class="trap" style="margin-top:0"><b>Progres belum bisa tersimpan di tampilan ini.</b> Kamu sedang membuka file di jendela pratinjau yang memblokir penyimpanan. Semua menu tetap bisa dibuka, tetapi jawaban akan hilang saat ditutup. Solusinya: buka file ini lewat browser (Chrome/Safari), atau simpan <a href="#/progres">kode progres</a> sebelum menutup.</aside>`;
  main.innerHTML=`<div class="page">${warn}${html}</div>`;
  mountWidgets(main);
  if(path==="drill") drillStart();
  if(path==="simulasi") simMount();
  if(path==="hafalan") flashMount();
  markNav(); window.scrollTo(0,0);
  if(path!=="mode"){try{ST.last=CUR;save();}catch(e){}}
}

// ---------- welcome / mode ----------
let SEL=null, BACK=null;
const MODEDESC={terampil:"Integritas, Kerja Sama, dan Perekat Bangsa wajib Level 2. Enam kompetensi lainnya cukup Level 1.",mahir:"Kesembilan kompetensi wajib Level 2.",pertama:"Kesembilan kompetensi wajib Level 2 (sama dengan JF Mahir)."};
function pageMode(){
  const first=!ST.modeChosen; SEL=SEL||ST.mode;
  return `<div class="welcome-box">
   <svg width="44" height="44" viewBox="0 0 30 30" aria-hidden="true"><rect x="2" y="22" width="6" height="6" rx="1.5" fill="#4F6FA8"/><rect x="8" y="17" width="6" height="11" rx="1.5" fill="#14875A"/><rect x="14" y="12" width="6" height="16" rx="1.5" fill="#B97A0B"/><rect x="20" y="7" width="6" height="21" rx="1.5" fill="#C4522A"/><rect x="26" y="2" width="3" height="26" rx="1.5" fill="#9E3653"/></svg>
   <h1>${first?"Tangga Level":"Ganti mode jabatan"}</h1>
   <p class="sub">${first?"Modul belajar ujian Mansoskul Level 2 untuk pegawai DJP. Pilih jabatan fungsional yang kamu tuju dulu, supaya penjelasan setiap soal menyesuaikan standar jabatanmu.":"Mode menentukan standar level jabatan yang dipakai dalam penjelasan. Progresmu tidak berubah."}</p>
   <div class="modecards" role="radiogroup" aria-label="Jabatan yang dituju">
   ${Object.entries(MODES).map(([id,m])=>`<button type="button" role="radio" class="modecard" data-mode="${id}" aria-checked="${SEL===id}"><span class="radio" aria-hidden="true"></span><span><b>${m.label}</b><span>${MODEDESC[id]}</span></span></button>`).join("")}
   </div>
   <p class="small">Soal ujiannya tetap Level 2 untuk ketiga jabatan ini. Bedanya ada di standar minimal yang harus kamu penuhi.</p>
   <div class="btnrow"><button type="button" class="btn pri big" data-enter="1">${first?"Mulai belajar sebagai ":"Pakai mode "}${MODES[SEL].label}</button>${first?"":`<button type="button" class="btn sec" data-cancelmode="1">Batal</button>`}</div>
   ${first?`<p class="small">Sudah pernah belajar dan punya kode progres? <a href="#/progres" data-restorefirst="1">Pulihkan progres di sini</a>.</p>`:""}
  </div>`;
}

// ---------- pages ----------
function pager(id){
  const i=ORDER.indexOf(id); if(i<0) return "";
  const p=ORDER[i-1], n=ORDER[i+1];
  return `<div class="donebar"><span style="flex:1">${ST.done[id]?"Bab ini sudah kamu tandai selesai.":"Sudah paham isi bab ini?"}</span>
   <button class="btn ${ST.done[id]?"sec":"ok"}" data-done="${id}">${ST.done[id]?"Batalkan tanda selesai":"Tandai selesai"}</button></div>
   <div class="pager">${p?`<a href="#/${p}"><small>Sebelumnya</small><b>${TITLES[p]}</b></a>`:"<span></span>"}${n?`<a class="nx" href="#/${n}"><small>Berikutnya</small><b>${TITLES[n]}</b></a>`:""}</div>`;
}
function pageBab(id){const b=BAB[id];return `<h1>${b.judul}</h1><p class="sub">${b.sub}</p>${rt(b.isi)}${pager(id)}`;}

function tanggaHTML(k){
  const t=target(k.id); let h=`<div class="tangga">`;
  for(let l=1;l<=5;l++){
    const L=k.levels[l]; const is2=l===2;
    const tags=(is2?`<span class="tag t2">Posisi ujianmu</span>`:"")+(l===t&&t!==2?`<span class="tag t1">Standar ${MODES[ST.mode].label}</span>`:"")+(l===t&&t===2?`<span class="tag t2">Standar ${MODES[ST.mode].label}</span>`:"");
    h+=`<div role="button" tabindex="0" class="rung r${l}${is2?" is2":""}" aria-expanded="${is2}">
      <span class="stair">${l}</span>
      <span class="body"><span class="nm">${LEVEL_NAMES[l]} ${tags}</span>
      <span class="ks d-block">${k.kunci[l]}</span>
      <span class="more"><b>Deskripsi:</b> ${L.d}<ul>${L.i.map(x=>`<li>${x}</li>`).join("")}</ul></span></span></div>`;
  }
  return h+`</div><p class="hint">Ketuk anak tangga untuk membuka deskripsi dan indikator resminya.</p>`;
}
function pageK(id){
  const k=KMAP[id], x=EXTRA[id]; const n=SOAL.filter(s=>s.k===id).length;
  const ans=SOAL.filter(s=>s.k===id&&full(ST.ans[s.id])); const ok=ans.filter(s=>score(s,ST.ans[s.id])===2).length;
  return `<div class="crumb">Kompetensi ${k.jenis.toLowerCase()}</div><h1>${k.nama}</h1>
   <div class="std">${stdLabel(id)}<span class="tag t2">Ujian: Level 2</span></div>
   <div class="def"><b>Definisi (Permenpan-RB 38/2017).</b> ${k.definisi}</div>
   <p class="inti">Efektif di Level 2: ${EFEKTIF[id]}.</p>
   <h3>Indikator Level 2 resmi</h3><ul class="cth">${k.levels[2].i.map(i=>`<li>${i}</li>`).join("")}</ul>
   <h3>Pengecoh yang sering muncul</h3><aside class="trap">${rt(x.jebakan)}</aside>
   <h3>Contoh perilaku Level 2 di tempat kerja</h3><ul class="cth">${x.contoh.map(c=>`<li>${rt(c)}</li>`).join("")}</ul>
   <h3>Kenapa ini penting</h3>${rt(x.kenapa)}
   <h3>Cek cepat: apa cacatnya?</h3><div data-w="minicek" data-k="${id}"></div>
   <div class="btnrow"><a class="btn pri" href="#/latihan?k=${id}">Latihan ${n} soal ${k.nama}</a>${ans.length?`<span class="small" style="align-self:center">Sudah dijawab ${ans.length}/${n}, tepat ${ok}</span>`:""}</div>
   <h3>Hafalan ringan</h3><dl class="hafal">${x.hafal.map(([a,b])=>`<div><dt>${rt(a)}</dt><dd>${rt(b)}</dd></div>`).join("")}</dl>
   <details class="extra"><summary>Bacaan tambahan: tangga Level 1–5 dari Permenpan</summary><p class="small">Tidak diujikan secara langsung di ujian Level 2, tetapi membantu memahami kenapa jawaban Level 2 berbentuk seperti itu.</p>${tanggaHTML(k)}</details>
   ${pager("k/"+id)}`;
}
function pageHafalan(){return `<h1>Hafalan ringan</h1><p class="sub">SJT jarang menanyakan teori secara langsung, tapi hafalan ini membantu kamu mengenali kata kunci. Ketuk kartu untuk membalik.</p>
  <div class="flash"><div class="card" id="fc"><div class="face front"><small></small><p></p></div><div class="face back"><small>Jawaban</small><p></p></div></div></div>
  <div class="btnrow"><button class="btn sec" id="fcPrev">Sebelumnya</button><button class="btn pri" id="fcNext">Berikutnya</button><button class="btn sec" id="fcShuf">Acak urutan</button></div>
  ${pager("hafalan")}`;}

// ---------- widgets ----------
function mountWidgets(root){
  $$("[data-w]",root).forEach(el=>{const w=el.dataset.w;
    if(w==="daftar9") el.innerHTML=`<div class="grid9">${KOMPETENSI.map(k=>`<a class="k9" href="#/k/${k.id}"><b>${k.nama}</b><span>${k.inti2}</span>${stdLabel(k.id)}</a>`).join("")}</div>`;
    if(w==="levelnames") el.innerHTML=`<div class="lvnames">${[1,2,3,4,5].map(l=>`<div style="background:${lvColor(l)};height:${54+l*14}px"><b>${l}</b>${LEVEL_NAMES[l]}</div>`).join("")}</div>`;
    if(w==="standar") el.innerHTML=standarTable();
    if(w==="radius") radiusMount(el);
    if(w==="katakerja") el.innerHTML=`<div class="kk">${[1,2,3,4,5].map(l=>`<div class="row"><span class="tag t${l}">L${l}</span><div class="chips" style="margin:0">${KATAKERJA[l].map(c=>`<span class="chip">${c}</span>`).join("")}</div></div>`).join("")}</div>`;
    if(w==="walk") walkMount(el);
    if(w==="bedakan") el.innerHTML=BEDAKAN.map(p=>`<div class="pair"><div class="pk">${p.kunci}</div><div class="two"><div><b class="h">${p.a}</b>${p.ia}</div><div><b class="h">${p.b}</b>${p.ib}</div></div></div>`).join("");
    if(w==="kilat") el.innerHTML=kilatHTML();
    if(w==="kilat2") el.innerHTML=kilat2HTML();
    if(w==="syarat") el.innerHTML=`<div class="syarat">${SYARAT.map((s,i)=>`<div><span class="no">${i+1}</span><div><b>${s[0]}</b><p>${s[1]}</p><span class="small">Gagal di sini = tipe <i>${s[2]}</i></span></div></div>`).join("")}</div>`;
    if(w==="efektif9") el.innerHTML=`<div class="grid9">${KOMPETENSI.map(k=>`<a class="k9" href="#/k/${k.id}"><b>${k.nama}</b><span>${EFEKTIF[k.id]}</span></a>`).join("")}</div>`;
    if(w==="tipe") el.innerHTML=`<div class="tipegrid">${TIPE_PENGECOH.map(t=>{const T=TIPE[t];const ex=DRILL.find(d=>d.t===t);return `<div class="tipecard ${t==="hampir"?"th":""}"><b>${T.nama}</b><p>${T.ciri}</p><div class="chips">${T.pemicu.map(c=>`<span class="chip">${c}</span>`).join("")}</div>${ex?`<p class="small ex">Contoh: "${ex.x}"</p>`:""}</div>`;}).join("")}</div>`;
    if(w==="bedakan2") el.innerHTML=bedakan2HTML();
    if(w==="parah") el.innerHTML=`<div class="syarat parah">${PARAH.map((s,i)=>`<div><span class="no">${i+1}</span><div><b>${s[0]}</b><p>${s[1]}</p><span class="small">Tipe: <i>${s[2]}</i></span></div></div>`).join("")}</div>`;
    if(w==="minicek") miniMount(el,el.dataset.k);
  });
}
function standarTable(){
  const cols=[["Pelaksana",()=>1],["JF Terampil",k=>MODES.terampil.target[k]],["JF Mahir",k=>MODES.mahir.target[k]],["JF Pertama",k=>MODES.pertama.target[k]],["Pengawas",()=>2]];
  const cur=MODES[ST.mode].label;
  return `<div class="tblwrap"><table class="tbl"><thead><tr><th>Kompetensi</th>${cols.map(c=>`<th class="${c[0]===cur?"cur":""}">${c[0]}</th>`).join("")}</tr></thead><tbody>
  ${KOMPETENSI.map(k=>`<tr><td>${k.nama}</td>${cols.map(c=>{const v=c[1](k.id);return `<td class="${c[0]===cur?"cur":""}">${v}</td>`;}).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function radiusMount(el){
  const names={1:"Diri sendiri",2:"Rekan & kelompok kerja kecil",3:"Unit kerja yang dipimpin",4:"Lintas unit / instansi",5:"Nasional"};
  const R={5:140,4:114,3:88,2:62,1:36};
  let svg=`<svg viewBox="0 0 300 300" role="img" aria-label="Lingkaran radius dampak level 1 sampai 5">`;
  for(let l=5;l>=1;l--) svg+=`<circle data-l="${l}" cx="150" cy="150" r="${R[l]}" fill="${lvColor(l)}" fill-opacity=".18" stroke="${lvColor(l)}" stroke-width="2"/>`;
  svg+=`<text x="150" y="155" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-weight="800" font-size="15" fill="#17202E" pointer-events="none">Aku</text>`;
  [2,3,4,5].forEach(l=>{svg+=`<text x="150" y="${150-R[l]+17}" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-weight="800" font-size="13" fill="${lvColor(l)}" pointer-events="none">L${l}</text>`;});
  svg+=`</svg>`;
  el.innerHTML=`<div class="radius">${svg}<div class="panel"><div class="lvbtns">${[1,2,3,4,5].map(l=>`<button type="button" data-l="${l}">L${l}</button>`).join("")}</div><div class="pc"></div></div></div>`;
  const show=l=>{
    $$("circle",el).forEach(c=>c.setAttribute("fill-opacity",+c.dataset.l===l?".42":".07"));
    $$(".lvbtns button",el).forEach(b=>{const on=+b.dataset.l===l;b.setAttribute("aria-pressed",on);b.style.background=on?lvColor(l):"";});
    $(".pc",el).innerHTML=`<h4 style="color:${lvColor(l)}">Level ${l}: ${names[l]}</h4><p class="small" style="margin:.2em 0 .4em">Contoh dari tiap kompetensi:</p><ul>${KOMPETENSI.map(k=>`<li><b>${k.nama}:</b> ${k.kunci[l]}</li>`).join("")}</ul>`;
  };
  el.addEventListener("click",e=>{const t=e.target.closest("[data-l]");if(t) show(+t.dataset.l);});
  show(2);
}
function walkMount(el){
  const W=WALK2; const order=[4,0,2,5,1,3];
  el.innerHTML=`<div class="q"><div class="sk">${W.s}</div><div class="ask">Apa tindakan paling tepat?</div><div class="ops">${order.map((i,pos)=>`<div class="opt" data-t="${W.o[i].t}" style="cursor:default"><span class="ab">${LETTER[pos]}</span><span class="tx">${W.o[i].x}</span><span class="why" hidden>${tag(W.o[i].t)}<span>${W.o[i].e}</span></span></div>`).join("")}</div>
   <div class="walkbtns"><button type="button" data-s="1">1. Coret pengecoh jelas</button><button type="button" data-s="2">2. Coret setengah jalan</button><button type="button" data-s="3">3. Bandingkan dua finalis</button><button type="button" data-s="4">4. Cari yang paling parah</button><button type="button" data-s="0">Ulangi</button></div><p class="small wmsg" style="margin-top:10px"></p></div>`;
  const msgs={1:"Dicoret: E (pasif, menunggu diminta), C (berlebihan, mengambil alih), F (melempar ke atasan).",2:"Dicoret: D (setengah jalan, nasihat untuk lain kali tidak menyelesaikan masalah sekarang).",3:"Tersisa A dan B. A langsung mengerjakan tanpa koordinasi, jadi hampir benar. B menyepakati pembagian dan memastikan target, jadi B paling efektif.",4:"Paling tidak efektif: E (pasif). Tenggat tim dipertaruhkan dan kamu sama sekali tidak bergerak. C dan F masih berupaya walau caranya keliru, D masih menyapa rekan."};
  const ops=$$(".opt",el);
  const step=s=>{
    $$(".walkbtns button",el).forEach(b=>b.setAttribute("aria-pressed",+b.dataset.s>0&&+b.dataset.s<=s));
    ops.forEach(o=>{const t=o.dataset.t;const st=(s>=1&&["pasif","berlebihan","melempar"].includes(t))||(s>=2&&t==="setengah")||(s>=3&&t==="hampir");o.classList.toggle("struck",st);o.classList.toggle("win",s>=3&&t==="best");o.classList.toggle("lose",s>=4&&t==="pasif");o.querySelector(".why").hidden=!(st||(s>=3&&t==="best"));});
    $(".wmsg",el).textContent=s?msgs[s]:"";
  };
  el.addEventListener("click",e=>{const b=e.target.closest("[data-s]");if(b) step(+b.dataset.s);});
}
function miniMount(el,kid){
  const items=shuffle(DRILL.filter(d=>d.k===kid&&d.t!=="hampir")).slice(0,1).concat(shuffle(DRILL.filter(d=>d.k===kid&&d.t==="hampir")).slice(0,1));
  el.innerHTML=items.map((d,i)=>`<div class="q drill" style="margin:10px 0" data-i="${i}">${drillBody(d,"data-mt")}</div>`).join("");
  el.addEventListener("click",e=>{const b=e.target.closest("button[data-mt]");if(!b||b.disabled)return;const box=b.closest(".q");const d=items[+box.dataset.i];const ok=b.dataset.mt===d.t;
    $$("button[data-mt]",box).forEach(x=>{x.disabled=true;if(x.dataset.mt===d.t)x.classList.add("right");else if(x===b)x.classList.add("wrong");});
    ST.drill[d.id]=ok?1:0;save(); $(".dfb",box).innerHTML=drillFeedback(d,ok);});
}
function kilat2HTML(){
  return `<h3 style="margin-top:0">4 syarat jawaban terbaik</h3><ol class="steps">${SYARAT.map(s=>`<li><b>${s[0]}.</b> ${s[1]}</li>`).join("")}</ol>
  <h3>Urutan keparahan (untuk paling tidak efektif)</h3><ol class="steps">${PARAH.map(s=>`<li><b>${s[0]}.</b> <span class="small">${s[2]}</span></li>`).join("")}</ol><p class="small">Hampir benar dan setengah jalan hampir tidak pernah jadi yang terparah.</p>
  <h3>9 tipe pengecoh dan kata pemicunya</h3>${TIPE_PENGECOH.map(t=>`<div class="kilat-row"><b class="n">${TIPE[t].nama}</b><div class="chips" style="margin:.3em 0 0">${TIPE[t].pemicu.map(c=>`<span class="chip">${c}</span>`).join("")}</div></div>`).join("")}
  <h3>Efektif di Level 2, per kompetensi</h3>${KOMPETENSI.map(k=>`<div class="kilat-row"><b class="n">${k.nama}</b><div class="small" style="color:var(--ink)">${EFEKTIF[k.id]}</div></div>`).join("")}
  <aside class="key"><b>Kalimat terakhir sebelum masuk ruang ujian:</b> "Terbaik: sesuai aturan, santun, aku bergerak tapi tidak mengambil alih, dan masalahnya selesai. Terburuk: yang melanggar atau yang lepas tangan."</aside>`;
}
function bedakan2HTML(){
  return KOMPETENSI.map(k=>{const s=SOAL.find(q=>q.k===k.id&&q.o.find(o=>o.t==="hampir").e.length>30)||SOAL.find(q=>q.k===k.id);const b=s.o.find(o=>o.t==="best"), h=s.o.find(o=>o.t==="hampir");
    return `<div class="pair"><div class="pk">${k.nama}: ${s.s}</div><div class="two"><div><b class="h">Hampir benar</b>${h.x}<p class="small" style="margin:.4em 0 0">Kurangnya: ${h.e}</p></div><div><b class="h">Terbaik</b>${b.x}<p class="small" style="margin:.4em 0 0">${b.e}</p></div></div></div>`;}).join("");
}
function kilatHTML(){
  return `<h3 style="margin-top:0">Tiga langkah menjawab</h3><ol class="steps"><li><b>Buang keliru:</b> melanggar, pasif, melempar, terlalu keras, terlalu mengalah, mengambil alih.</li><li><b>Buang ketinggian:</b> seluruh seksi/kantor/instansi, sistem, program, kebijakan, menegur/mengapresiasi anggota, target unit, mediator, pemetaan.</li><li><b>Buang kebawahan:</b> hanya diri sendiri, menunggu arahan/bimbingan, sekadar memenuhi standar atau menerima.</li></ol>
  <div class="flags"><div style="background:var(--l1bg)"><b>Ciri Level 1</b><div class="chips">${KATAKERJA[1].map(c=>`<span class="chip">${c}</span>`).join("")}</div></div><div style="background:var(--l3bg)"><b>Ciri Level 3 ke atas</b><div class="chips">${KATAKERJA[3].concat(KATAKERJA[4]).map(c=>`<span class="chip">${c}</span>`).join("")}</div></div></div>
  <h3>Tangga 9 kompetensi dalam satu layar</h3>
  ${KOMPETENSI.map(k=>`<div class="kilat-row"><b class="n">${k.nama}</b> ${stdLabel(k.id)}${[1,2,3].map(l=>`<div class="ln${l===2?" l2":""}"><span class="tag t${l}">L${l}</span><span>${k.kunci[l]}</span></div>`).join("")}</div>`).join("")}
  <aside class="key"><b>Kalimat terakhir sebelum masuk ruang ujian:</b> "Saya proaktif dalam kewenangan saya, dan saya mengajak, membantu, menjelaskan, atau memberi contoh kepada rekan di sekitar saya. Saya bukan kepala kantor."</aside>`;
}

// ---------- latihan SJT ----------
function wrongList(){return SOAL.filter(s=>full(ST.ans[s.id])&&score(s,ST.ans[s.id])<2);}
function pageLatihanList(q){
  const f=q.get("k")||"all";
  const list=SOAL.filter(s=>f==="all"||s.k===f);
  const answered=list.filter(s=>full(ST.ans[s.id])).length, ok=list.filter(s=>score(s,ST.ans[s.id])===2).length;
  const firstOpen=(list.find(s=>!full(ST.ans[s.id]))||list[0]);
  return `<h1>Latihan SJT</h1><p class="sub">100 soal unik, masing-masing 6 opsi. Pilih yang paling efektif, lalu yang paling tidak efektif. Setelah itu setiap opsi dibahas. Urutan opsi diacak setiap kali soal dibuka.</p>
  <div class="filters">${[["all","Semua"],...KOMPETENSI.map(k=>[k.id,k.nama])].map(([id,n])=>`<button type="button" data-f="${id}" aria-pressed="${f===id}">${n}</button>`).join("")}</div>
  <div class="qhead"><div class="bar"><i style="width:${list.length?answered/list.length*100:0}%"></i></div><span class="small">${answered}/${list.length} dijawab · ${ok} tepat</span></div>
  <div class="btnrow"><a class="btn pri" href="#/latihan/${firstOpen.id}?k=${f}">${answered&&answered<list.length?"Lanjutkan":"Mulai"} dari soal ${list.indexOf(firstOpen)+1}</a>${answered?`<button class="btn sec" data-reset="${f}">Kosongkan jawaban ${f==="all"?"semua":"kompetensi ini"}</button>`:""}</div>
  <div class="qgrid">${list.map((s,i)=>{const a=ST.ans[s.id];return `<button type="button" data-q="${s.id}" class="${full(a)?["w","p","c"][score(s,a)]:""}" aria-label="Soal ${i+1}">${i+1}</button>`;}).join("")}</div>
  <p class="small">Hijau = kedua pilihan tepat, kuning = satu tepat, merah = keduanya belum tepat. Ketuk nomor untuk membuka soal.</p>`;
}
const ORD={};
function optsOrder(id){if(!ORD[id]) ORD[id]=shuffle([0,1,2,3,4,5]);return ORD[id];}
function pageSoal(id,q){
  const s=SOAL.find(x=>x.id===id); if(!s){return "";}
  const f=q.get("k")||"all"; const list=SOAL.filter(x=>f==="all"||x.k===f); const i=list.indexOf(s);
  const a=ST.ans[s.id]; const ord=optsOrder(s.id);
  const prev=list[i-1], next=list[i+1];
  return `<div class="qhead"><a href="#/latihan?k=${f}" class="small">Daftar soal</a><div class="bar"><i style="width:${(i+1)/list.length*100}%"></i></div><span class="small">${i+1} / ${list.length}</span></div>
  ${soalCard(s,ord,full(a)?a:null,true)}
  <div class="btnrow">${prev?`<a class="btn sec" href="#/latihan/${prev.id}?k=${f}">Sebelumnya</a>`:""}${next?`<a class="btn pri" href="#/latihan/${next.id}?k=${f}">Soal berikutnya</a>`:`<a class="btn pri" href="#/latihan?k=${f}">Selesai, lihat ringkasan</a>`}${full(a)?`<button class="btn sec" data-retry="${s.id}">Jawab ulang</button>`:""}</div>`;
}
function soalCard(s,ord,ans,showK){
  const k=KMAP[s.k]; const best=s.o.find(o=>o.t==="best");
  const done=ans==="-"||full(ans); const P=PEND[s.id]||{};
  const L=t=>LETTER[ord.findIndex(oi=>s.o[oi].t===t)];
  let h=`<div class="q" data-sid="${s.id}"><div class="meta">${showK?`<span class="tag t0">${k.nama}</span>`:""}<span>Soal ${s.id}</span></div><div class="sk">${s.s}</div>`;
  if(!done) h+=`<div class="ask step">${P.b?`<span class="stepno">2/2</span> Sekarang ketuk opsi yang <u>paling TIDAK efektif</u>.`:`<span class="stepno">1/2</span> Ketuk opsi yang <u>paling efektif</u>.`}</div>`;
  else {
    const row=(lbl,mine,key,cls)=>{const ok=mine===key;return `<div class="hrow ${cls}"><span class="hico ${mine===null?"na":ok?"ok":"no"}">${mine===null?"–":ok?"✓":"✗"}</span><span class="hlbl">${lbl}</span><span class="hval">Kamu <b class="lt you">${mine===null?"–":L(mine)}</b></span><span class="hval">Kunci <b class="lt ${cls}">${L(key)}</b></span></div>`;};
    const na=ans==="-";
    h+=`<div class="hasil">${row("Paling efektif",na?null:ans.b,"best","kb")}${row("Paling tidak efektif",na?null:ans.w,s.w,"kw")}</div>
    <p class="legend"><span class="lg kb"></span>Kunci paling efektif <span class="lg kw"></span>Kunci paling tidak efektif <span class="lg you"></span>Pilihanmu</p>`;
  }
  ord.forEach((oi,pos)=>{const o=s.o[oi];
    let cls="opt", lab=[];
    if(done){
      const isB=o.t==="best", isW=o.t===s.w, myB=ans!=="-"&&ans.b===o.t, myW=ans!=="-"&&ans.w===o.t;
      if(isB){cls+=" kb";lab.push(`<span class="pl kb">Kunci: paling efektif</span>`);}
      if(isW){cls+=" kw";lab.push(`<span class="pl kw">Kunci: paling tidak efektif</span>`);}
      if(myB){cls+=" you";lab.push(`<span class="pl you">Pilihanmu: paling efektif ${isB?"✓":"✗"}</span>`);}
      if(myW){cls+=" you";lab.push(`<span class="pl you">Pilihanmu: paling tidak efektif ${isW?"✓":"✗"}</span>`);}
      if(!isB&&!isW) cls+=" dim";
    } else if(P.b===o.t){ cls+=" pickb"; lab.push(`<span class="pl you">Pilihanmu: paling efektif (ketuk lagi untuk batal)</span>`); }
    const why=done?`<span class="why2">${o.t==="best"?"<b>Kenapa terbaik.</b> ":`<b>${TIPE[o.t].nama}.</b> `}${o.e}${o.t===s.w?" "+WORSTWHY[o.t]:""}</span>`:"";
    h+=`<button type="button" class="${cls}" data-pick="${o.t}" ${done?"disabled":""}><span class="ab">${LETTER[pos]}</span><span class="tx">${lab.length?`<span class="pls">${lab.join("")}</span>`:""}${o.x}${why}</span></button>`;});
  if(done) h+=`<p class="lesson">Kenapa ${L("best")} paling efektif: <b>${best.e}</b> <a href="#/k/${k.id}">Buka bab ${k.nama}</a></p>`;
  return h+`</div>`;
}
function pageUlang(){
  const w=wrongList();
  if(!w.length) return `<h1>Ulang yang salah</h1><div class="empty">${Object.values(ST.ans).some(full)?"Semua soal yang sudah kamu jawab tepat di kedua pilihan. Mantap.":"Belum ada soal yang dijawab. Mulai dari Latihan SJT."}</div><div class="btnrow"><a class="btn pri" href="#/latihan">Buka Latihan SJT</a></div>`;
  const bB={}, bW={}; let nB=0,nW=0;
  w.forEach(s=>{const a=ST.ans[s.id]; if(a.b!=="best"){nB++;bB[a.b]=(bB[a.b]||0)+1;} if(a.w!==s.w){nW++;bW[a.w]=(bW[a.w]||0)+1;}});
  const topB=Object.entries(bB).sort((a,b)=>b[1]-a[1])[0], topW=Object.entries(bW).sort((a,b)=>b[1]-a[1])[0];
  return `<h1>Ulang yang salah</h1><p class="sub">${w.length} soal belum tepat di salah satu atau kedua pilihan.</p>
  <div class="stats"><div class="stat"><b>${nB}</b><span>salah memilih paling efektif</span></div><div class="stat"><b>${nW}</b><span>salah memilih paling tidak efektif</span></div></div>
  ${topB?`<aside class="note"><b>Saat memilih yang paling efektif, kamu paling sering terjebak opsi ${TIPE[topB[0]].nama.toLowerCase()}.</b> ${TIPE[topB[0]].ciri} ${topB[0]==="hampir"?"Cek lagi: apakah opsi itu benar-benar menuntaskan masalah dan menyentuh pihak lain yang terlibat?":"Waspadai kata pemicunya: "+TIPE[topB[0]].pemicu.join(", ")+"."}</aside>`:""}
  ${topW?`<aside class="note"><b>Saat memilih yang paling tidak efektif, kamu paling sering memilih opsi ${TIPE[topW[0]].nama.toLowerCase()}.</b> ${["hampir","setengah","melempar","berlebihan"].includes(topW[0])?"Opsi jenis ini masih ada upayanya, jadi jarang menjadi yang terparah. Cari dulu opsi yang melanggar, menuruti permintaan yang melanggar, atau lepas tangan.":"Bandingkan lagi dengan urutan keparahan di Bab 2."} <a href="#/kunci">Buka Bab 2</a></aside>`:""}
  <div class="btnrow"><a class="btn pri" href="#/latihan/${w[0].id}?k=salah">Kerjakan ulang mulai soal ${w[0].id}</a></div>
  <div class="qgrid">${w.map(s=>`<button type="button" data-q="${s.id}" data-kf="salah" class="${["w","p","c"][score(s,ST.ans[s.id])]}">${s.id}</button>`).join("")}</div>`;
}
// ---------- drill ----------
let DR=null;
function pageDrillShell(){return `<h1>Apa cacatnya?</h1><p class="sub">Setiap butir adalah satu opsi pengecoh dari bank soal. Tebak tipenya. Kalau kamu bisa menamai cacat sebuah opsi dalam beberapa detik, kamu bisa mencoretnya dengan cepat di ujian.</p>
 <div class="filters" id="drF"><button type="button" data-df="mix" aria-pressed="true">Campur (prioritas yang belum/salah)</button><button type="button" data-df="all">Acak semua</button><a class="btn sec" href="#/sjt" style="padding:5px 12px;font-size:.86rem">Lihat 9 tipe</a></div><div id="drill"></div>`;}
function drillPick(list,n,mode){
  if(mode!=="mix") return shuffle(list).slice(0,n);
  const w=shuffle(list.filter(d=>ST.drill[d.id]===0)), u=shuffle(list.filter(d=>ST.drill[d.id]===undefined)), r=shuffle(list.filter(d=>ST.drill[d.id]===1));
  return w.concat(u,r).slice(0,n);
}
function drillStart(mode="mix"){
  // seimbang antartipe: kira-kira 2 butir per tipe, hampir benar sedikit lebih banyak
  let items=[]; TIPE_PENGECOH.forEach(t=>{items=items.concat(drillPick(DRILL.filter(d=>d.t===t),t==="hampir"?3:1,mode));});
  const rest=drillPick(DRILL.filter(d=>!items.includes(d)),15-items.length,mode);
  DR={items:shuffle(items.concat(rest)).slice(0,15),i:0,ok:0};drillShow();
}
function drillChoices(d){
  if(!d._c) d._c=shuffle([d.t].concat(shuffle(TIPE_PENGECOH.filter(x=>x!==d.t)).slice(0,3)));
  return d._c;
}
function drillBody(d,attr){
  const s=SOAL.find(q=>q.id===d.sid);
  return `<div class="meta"><span class="tag t0">${KMAP[d.k].nama}</span></div><p class="small" style="margin:.2em 0">${s.s}</p><div class="stmt">"${d.x}"</div>
  <div class="typepick">${drillChoices(d).map(c=>`<button type="button" ${attr}="${c}">${TIPE[c].nama}</button>`).join("")}</div><div class="dfb"></div>`;
}
function drillFeedback(d,ok){
  const s=SOAL.find(q=>q.id===d.sid), b=s.o.find(o=>o.t==="best");
  return `<div class="verdict ${ok?"v-ok":"v-bad"}"><b>${ok?"Tepat.":"Belum tepat."} Ini tipe ${TIPE[d.t].nama.toLowerCase()}.</b>
   <div style="margin-top:4px">${d.e}</div>
   <div class="small" style="margin-top:6px">Jawaban terbaik di soal ini: "${b.x}"</div></div>`;
}
function drillShow(){
  const el=$("#drill"); if(!el) return; const d=DR.items[DR.i];
  if(!d){el.innerHTML=`<div class="q"><h3 style="margin-top:0">Selesai: ${DR.ok}/${DR.items.length} tepat</h3><p>${DR.ok>=12?"Matamu sudah tajam mengenali pengecoh.":DR.ok>=9?"Sudah lumayan. Satu putaran lagi untuk butir yang salah.":"Baca ulang Bab 3 (tipe pengecoh), lalu coba lagi."}</p><div class="btnrow"><button class="btn pri" data-drnew="1">15 butir berikutnya</button><a class="btn sec" href="#/sjt">Buka Bab 3</a></div></div>`;return;}
  const tot=Object.keys(ST.drill).length, okAll=Object.values(ST.drill).filter(v=>v===1).length;
  el.innerHTML=`<div class="qhead"><div class="bar"><i style="width:${DR.i/DR.items.length*100}%"></i></div><span class="small">${DR.i+1}/${DR.items.length}, total ${okAll}/${tot} tepat</span></div>
  <div class="q drill">${drillBody(d,"data-dl")}</div>`;
}
function drillAnswer(c){
  const d=DR.items[DR.i]; const el=$("#drill .q"); if(!d||$(".dfb",el).innerHTML) return;
  const ok=c===d.t; if(ok) DR.ok++; ST.drill[d.id]=ok?1:0; save();
  $$(".typepick button",el).forEach(b=>{b.disabled=true;if(b.dataset.dl===d.t)b.classList.add("right");else if(b.dataset.dl===c)b.classList.add("wrong");});
  $(".dfb",el).innerHTML=drillFeedback(d,ok)+`<div class="btnrow" style="margin-bottom:0"><button class="btn pri" data-drnext="1">Lanjut</button></div>`;
  $("[data-drnext]",el).focus();
}

// ---------- simulasi ----------
let SIM=null;
function pageSimShell(){return `<h1>Simulasi ujian</h1><p class="sub">Soal diambil acak dari bank 100 soal. Nama kompetensi disembunyikan dan pembahasan baru muncul di akhir, seperti ujian sungguhan.</p><div id="sim"></div>`;}
function simMount(){
  const el=$("#sim");
  if(SIM&&!SIM.end){simShow();return;}
  el.innerHTML=`<div class="q"><h3 style="margin-top:0">Atur simulasi</h3>
   <p>Jumlah soal</p><div class="filters" id="simN">${[20,30,45].map((n,i)=>`<button type="button" data-n="${n}" aria-pressed="${i===1}">${n} soal</button>`).join("")}</div>
   <p>Waktu</p><div class="filters" id="simT"><button type="button" data-t="90" aria-pressed="true">1,5 menit/soal</button><button type="button" data-t="60">1 menit/soal</button><button type="button" data-t="0">Tanpa timer</button></div>
   <label class="toggle"><input type="checkbox" id="simNew" checked> Utamakan soal yang belum pernah dijawab</label>
   <div class="btnrow"><button class="btn pri" id="simGo">Mulai simulasi</button></div>
   <p class="small">Jumlah soal dan durasi ujian asli belum diketahui. Timer ini hanya untuk melatih kecepatan.</p></div>`;
}
function simBegin(){
  const n=+$("#simN [aria-pressed=true]").dataset.n, t=+$("#simT [aria-pressed=true]").dataset.t, nw=$("#simNew").checked;
  let pool=shuffle(SOAL); if(nw) pool=pool.filter(s=>!full(ST.ans[s.id])).concat(pool.filter(s=>full(ST.ans[s.id])));
  // balance competencies: round-robin
  const byK={};pool.forEach(s=>(byK[s.k]=byK[s.k]||[]).push(s));const ks=shuffle(Object.keys(byK));const pick=[];
  while(pick.length<n){let added=false;for(const k of ks){if(byK[k].length&&pick.length<n){pick.push(byK[k].shift());added=true;}}if(!added)break;}
  SIM={qs:shuffle(pick),i:0,ans:{},ord:{},dur:t*n,start:Date.now(),end:false};
  SIM.qs.forEach(s=>SIM.ord[s.id]=shuffle([0,1,2,3,4,5]));
  simShow(); simTick();
}
function simShow(){
  const el=$("#sim"); if(!el) return; if(SIM.end) return simResult();
  const s=SIM.qs[SIM.i]; const ord=SIM.ord[s.id]; const p=SIM.ans[s.id]||{};
  el.innerHTML=`<div class="qhead"><div class="bar"><i style="width:${SIM.qs.filter(x=>full(SIM.ans[x.id])).length/SIM.qs.length*100}%"></i></div><span class="small">${SIM.i+1}/${SIM.qs.length}</span>${SIM.dur?`<span class="timer" id="tmr"></span>`:""}</div>
  <div class="q"><div class="sk">${s.s}</div><div class="ask step">${!p.b?`<span class="stepno">1/2</span> Ketuk yang <u>paling efektif</u>.`:!p.w?`<span class="stepno">2/2</span> Ketuk yang <u>paling TIDAK efektif</u>.`:`Terjawab. Ketuk ulang untuk mengubah.`}</div>${ord.map((oi,pos)=>{const o=s.o[oi];const c=p.b===o.t?" pickb":p.w===o.t?" pickw":"";const ch=p.b===o.t?`<span class="pls"><span class="pl you">Pilihanmu: paling efektif</span></span>`:p.w===o.t?`<span class="pls"><span class="pl you">Pilihanmu: paling tidak efektif</span></span>`:"";return `<button type="button" class="opt${c}" data-sp="${o.t}"><span class="ab">${LETTER[pos]}</span><span class="tx">${ch}${o.x}</span></button>`;}).join("")}</div>
  <div class="btnrow">${SIM.i>0?`<button class="btn sec" data-sg="-1">Sebelumnya</button>`:""}${SIM.i<SIM.qs.length-1?`<button class="btn pri" data-sg="1">Berikutnya</button>`:""}<button class="btn sec" data-send="1">Selesai & lihat hasil</button></div>
  <div class="qgrid">${SIM.qs.map((x,i)=>`<button type="button" data-sj="${i}" style="${i===SIM.i?"outline:2px solid var(--navy)":""}" class="${full(SIM.ans[x.id])?"c":(SIM.ans[x.id]&&SIM.ans[x.id].b)?"p":""}">${i+1}</button>`).join("")}</div>`;
  simTickPaint();
}
function simTickPaint(){const t=$("#tmr");if(!t||!SIM.dur)return;const left=Math.max(0,SIM.dur-Math.floor((Date.now()-SIM.start)/1000));t.textContent=`${Math.floor(left/60)}:${String(left%60).padStart(2,"0")}`;t.classList.toggle("low",left<120);if(left<=0&&!SIM.end){SIM.end=true;toast("Waktu habis");simFinish();}}
function simTick(){clearInterval(simTick._i);if(!SIM.dur)return;simTick._i=setInterval(()=>{if(!SIM||SIM.end){clearInterval(simTick._i);return;}simTickPaint();},1000);}
function simFinish(){SIM.end=true;clearInterval(simTick._i);SIM.qs.forEach(s=>{if(full(SIM.ans[s.id])) ST.ans[s.id]={b:SIM.ans[s.id].b,w:SIM.ans[s.id].w,ts:Date.now()};});save();buildNav();simResult();}
function simResult(){
  const el=$("#sim"); if(!el) return; const n=SIM.qs.length;
  let okB=0,okW=0,pts=0; const bk={};
  SIM.qs.forEach(s=>{const a=SIM.ans[s.id];const f=full(a);if(f&&a.b==="best")okB++;if(f&&a.w===s.w)okW++;const sc=f?score(s,a):0;pts+=sc;bk[s.k]=bk[s.k]||{n:0,p:0};bk[s.k].n+=2;bk[s.k].p+=sc;});
  el.innerHTML=`<div class="stats"><div class="stat"><b>${Math.round(pts/(2*n)*100)}%</b><span>skor total (${pts}/${2*n} poin)</span></div><div class="stat"><b>${okB}/${n}</b><span>paling efektif tepat</span></div><div class="stat"><b>${okW}/${n}</b><span>paling tidak efektif tepat</span></div></div>
  <p class="small">Setiap soal bernilai 2 poin: 1 untuk paling efektif, 1 untuk paling tidak efektif. Ini gambaran latihan, bukan rumus penilaian resmi.</p>
  <h3>Per kompetensi</h3>${KOMPETENSI.filter(k=>bk[k.id]).map(k=>{const b=bk[k.id];return `<div class="prog-row"><span>${k.nama}</span><div class="bar"><i style="width:${b.p/b.n*100}%"></i></div><span class="num">${b.p}/${b.n}</span></div>`;}).join("")}
  <h3>Pembahasan</h3>${SIM.qs.map(s=>soalCard(s,SIM.ord[s.id],full(SIM.ans[s.id])?SIM.ans[s.id]:"-",true)).join("")}
  <div class="btnrow"><button class="btn pri" data-simnew="1">Simulasi baru</button><a class="btn sec" href="#/ulang">Ulang yang salah</a></div>`;
}
// ---------- progres ----------
function progCode(){return btoa(unescape(encodeURIComponent(JSON.stringify(ST))));}
function pageProgres(){
  const a=SOAL.filter(s=>full(ST.ans[s.id])).length, ok=SOAL.filter(s=>score(s,ST.ans[s.id])===2).length;
  const dt=Object.keys(ST.drill).length, dok=Object.values(ST.drill).filter(v=>v===1).length;
  const bab=ORDER.filter(id=>ST.done[id]).length;
  return `<h1>Simpan progres</h1><p class="sub">Supaya bab yang sudah dibaca dan soal yang sudah dijawab tidak hilang.</p>
  ${CAN_SAVE?`<aside class="key"><b>Kabar baik: tampilan ini menyimpan progres otomatis.</b> Selama kamu membuka modul di browser dan perangkat yang sama, progres tidak akan hilang walau ditutup. Langkah di bawah hanya perlu kalau kamu mau <b>pindah perangkat</b> (misalnya dari laptop ke HP) atau ingin punya cadangan.</aside>`
   :`<aside class="trap"><b>Perhatian: tampilan ini TIDAK menyimpan progres otomatis.</b> Kalau ditutup, progres akan hilang. Lakukan <b>Langkah A</b> setiap kali selesai belajar, lalu <b>Langkah B</b> saat membuka modul lagi.</aside>`}

  <div class="howto">
  <h2>Langkah A: menyimpan progres</h2>
  <p class="small">Lakukan sebelum menutup modul, atau sebelum pindah ke perangkat lain.</p>
  <ol class="steps">
   <li><b>Ketuk tombol hijau di bawah ini.</b> Kode progresmu otomatis dibuat dan disalin.<div class="btnrow" style="margin:.6em 0"><button class="btn ok big" id="cpBtn">Salin kode progres</button></div>
    <textarea id="progCode" class="codebox" rows="3" readonly placeholder="Kode akan muncul di sini setelah tombol di atas diketuk."></textarea>
    <p class="small">Kalau muncul tulisan "salin manual", tekan lama kotak kode di atas, pilih <b>Pilih semua</b>, lalu <b>Salin</b>.</p></li>
   <li><b>Simpan kodenya di tempat yang gampang dicari.</b> Contohnya kirim ke WhatsApp dirimu sendiri, atau tempel di aplikasi Catatan. Caranya: tekan lama kolom ketik, lalu pilih <b>Tempel</b>.</li>
   <li><b>Selesai.</b> Kode itu berisi seluruh progresmu sampai saat ini. Setiap habis belajar, ulangi langkah ini supaya kodemu yang terbaru.</li>
  </ol>

  <h2>Langkah B: memulihkan progres</h2>
  <p class="small">Lakukan saat membuka modul lagi, atau di perangkat baru.</p>
  <ol class="steps">
   <li><b>Salin kode terakhir</b> dari WhatsApp atau Catatan tempat kamu menyimpannya.</li>
   <li><b>Tempel di kotak ini.</b> Tekan lama kotak, lalu pilih <b>Tempel</b>.
    <textarea id="impCode" class="codebox" rows="3" placeholder="Tempel kode progres di sini"></textarea></li>
   <li><b>Ketuk "Pulihkan progres".</b> Progres di tampilan ini akan diganti dengan isi kode.<div class="btnrow" style="margin:.6em 0"><button class="btn pri big" id="impBtn">Pulihkan progres</button></div></li>
  </ol>
  </div>

  <h2>Ringkasan progresmu</h2>
  <p class="small">Mode aktif: ${MODES[ST.mode].label}.</p>
  <div class="stats"><div class="stat"><b>${bab}/${ORDER.length}</b><span>bab selesai</span></div><div class="stat"><b>${ok}/${a}</b><span>soal SJT tepat dua-duanya (dari yang dijawab)</span></div><div class="stat"><b>${dok}/${dt}</b><span>butir "Apa cacatnya?" tepat</span></div></div>
  <h3>Kesiapan per kompetensi</h3>
  ${KOMPETENSI.map(k=>{const qs=SOAL.filter(s=>s.k===k.id&&full(ST.ans[s.id]));const o=qs.filter(s=>score(s,ST.ans[s.id])===2).length;const pct=qs.length?o/qs.length:0;
   const st=qs.length<5?`<span class="tag t0">data kurang</span>`:pct>=.8?`<span class="tag t2">siap</span>`:pct>=.6?`<span class="tag t3">hampir</span>`:`<span class="tag t4">perlu ulang</span>`;
   return `<div class="prog-row"><span><a href="#/k/${k.id}">${k.nama}</a> <span class="lv" style="color:${lvColor(target(k.id))}">L${target(k.id)}</span></span><div class="bar"><i style="width:${pct*100}%"></i></div><span class="num">${o}/${qs.length} ${st}</span></div>`;}).join("")}
  <h3>Mulai dari nol</h3><p class="small">Menghapus semua jawaban, tanda selesai, dan latihan di tampilan ini. Tidak bisa dibatalkan.</p>
  <div class="btnrow"><button class="btn sec" id="resetAll">Hapus semua progres</button></div>`;
}

// ---------- flashcards ----------
let FC=null;
function flashMount(){FC=FC||{order:KARTU.map((_,i)=>i)};flashShow();}
function flashShow(){const i=ST.flashI%KARTU.length;const c=KARTU[FC.order[i]];const card=$("#fc");if(!card)return;card.classList.remove("flip");
  $(".front small",card).textContent=`Kartu ${i+1} dari ${KARTU.length}`;$(".front p",card).textContent=c[0];$(".back p",card).textContent=c[1];}

// ---------- tooltip ----------
const tip=document.createElement("div");tip.id="tip";tip.setAttribute("role","tooltip");document.body.appendChild(tip);
let tipEl=null;
function showTip(el){const g=GLOSS[el.dataset.k];if(!g)return;tipEl&&tipEl.classList.remove("on");tipEl=el;el.classList.add("on");
  tip.innerHTML=`<b>${g[0]}</b>${g[1]}`;tip.style.display="block";
  const r=el.getBoundingClientRect(), tw=tip.offsetWidth, th=tip.offsetHeight;
  let x=Math.min(Math.max(12,r.left+r.width/2-tw/2),innerWidth-tw-12); let y=r.bottom+8; if(y+th>innerHeight-8) y=r.top-th-8;
  tip.style.left=x+"px";tip.style.top=Math.max(8,y)+"px";}
function hideTip(){tip.style.display="none";tipEl&&tipEl.classList.remove("on");tipEl=null;}
const fine=matchMedia("(hover:hover) and (pointer:fine)").matches;
document.addEventListener("mouseover",e=>{if(!fine)return;const t=e.target.closest(".term");if(t)showTip(t);});
document.addEventListener("mouseout",e=>{if(!fine)return;const t=e.target.closest(".term");if(t&&!t.contains(e.relatedTarget))hideTip();});
document.addEventListener("focusin",e=>{const t=e.target.closest(".term");if(t)showTip(t);});
document.addEventListener("focusout",e=>{if(e.target.closest(".term"))hideTip();});
addEventListener("scroll",()=>{if(tipEl&&!fine)hideTip();},{passive:true});
addEventListener("keydown",e=>{if(e.key==="Escape")hideTip();if((e.key==="Enter"||e.key===" ")&&e.target.classList&&e.target.classList.contains("term")){e.preventDefault();tipEl===e.target?hideTip():showTip(e.target);}});

// ---------- global clicks ----------
document.addEventListener("click",e=>{
  const t=e.target;
  const term=t.closest(".term"); if(term){e.preventDefault();e.stopPropagation(); if(tipEl===term&&!fine) hideTip(); else showTip(term); return;}
  if(tipEl&&!t.closest("#tip")) hideTip();
  const ln=t.closest('a[href^="#/"]'); if(ln){e.preventDefault();if(ln.dataset.restorefirst){ST.mode=SEL||ST.mode;ST.modeChosen=true;save();buildModes();buildNav();}go(ln.getAttribute("href").slice(2));return;}
  const mb=t.closest("[data-mode]"); if(mb){SEL=mb.dataset.mode;render();return;}
  if(t.closest("[data-gomode]")){BACK=CUR==="mode"?BACK:CUR;SEL=ST.mode;go("mode");return;}
  if(t.closest("[data-enter]")){const first=!ST.modeChosen;ST.mode=SEL||ST.mode;ST.modeChosen=true;SEL=null;save();buildModes();buildNav();go(first?"mulai":(BACK||"mulai"));toast("Mode: "+MODES[ST.mode].label);return;}
  if(t.closest("[data-cancelmode]")){SEL=null;go(BACK||"mulai");return;}
  if(t.closest(".menu-btn")){document.body.classList.toggle("nav-open");return;}
  const rung=t.closest(".rung"); if(rung){rung.setAttribute("aria-expanded",rung.getAttribute("aria-expanded")!=="true");return;}
  const dn=t.closest("[data-done]"); if(dn){const id=dn.dataset.done;ST.done[id]=!ST.done[id];if(!ST.done[id])delete ST.done[id];save();buildNav();
    if(ST.done[id]){const n=ORDER[ORDER.indexOf(id)+1];toast("Ditandai selesai");if(n){go(n);return;}} render();return;}
  const fb=t.closest("[data-f]"); if(fb){go("latihan"+(fb.dataset.f==="all"?"":"?k="+fb.dataset.f));return;}
  const qb=t.closest("[data-q]"); if(qb){const kf=qb.dataset.kf||(route().q.get("k")||"all");go("latihan/"+qb.dataset.q+"?k="+kf);return;}
  const pk=t.closest("[data-pick]"); if(pk&&!pk.disabled){const card=pk.closest(".q");const sid=+card.dataset.sid;const s=SOAL.find(x=>x.id===sid);const v=pk.dataset.pick;
    const P=PEND[sid]||{};
    if(!P.b){P.b=v;PEND[sid]=P;card.outerHTML=soalCard(s,optsOrder(sid),null,true);return;}
    if(P.b===v){delete PEND[sid];card.outerHTML=soalCard(s,optsOrder(sid),null,true);return;}
    ST.ans[sid]={b:P.b,w:v,ts:Date.now()};delete PEND[sid];save();buildNav();
    card.outerHTML=soalCard(s,optsOrder(sid),ST.ans[sid],true);
    const host=$("#main .page");const br=$(".btnrow",host);if(br&&!$("[data-retry]",br))br.insertAdjacentHTML("beforeend",`<button class="btn sec" data-retry="${sid}">Jawab ulang</button>`);
    const vd=$(".hasil",host);vd&&vd.scrollIntoView({behavior:"smooth",block:"start"});return;}
  const rr=t.closest("[data-retry]"); if(rr){const sid=+rr.dataset.retry;delete ST.ans[sid];delete PEND[sid];delete ORD[sid];save();buildNav();render();return;}
  const rs=t.closest("[data-reset]"); if(rs){const f=rs.dataset.reset;if(twoTap(rs)){SOAL.forEach(s=>{if(f==="all"||s.k===f){delete ST.ans[s.id];delete ORD[s.id];}});save();buildNav();render();}return;}
  // drill
  const df=t.closest("[data-df]"); if(df){$$("#drF button").forEach(b=>b.setAttribute("aria-pressed",b===df));drillStart(df.dataset.df);return;}
  const dl=t.closest("[data-dl]"); if(dl&&!dl.disabled){drillAnswer(dl.dataset.dl);return;}
  if(t.closest("[data-drnext]")){DR.i++;drillShow();return;}
  if(t.closest("[data-drnew]")){const m=($("#drF [aria-pressed=true]")||{}).dataset;drillStart(m?m.df:"mix");return;}
  // sim
  const sn=t.closest("#simN [data-n],#simT [data-t]"); if(sn){$$("button",sn.parentElement).forEach(b=>b.setAttribute("aria-pressed",b===sn));return;}
  if(t.closest("#simGo")){simBegin();return;}
  const sp=t.closest("[data-sp]"); if(sp&&SIM&&!SIM.end){const s=SIM.qs[SIM.i];const v=sp.dataset.sp;let a=SIM.ans[s.id]||{};if(full(a))a={};if(!a.b)a.b=v;else if(a.b===v)delete a.b;else{a.w=v;}SIM.ans[s.id]=a;if(full(a)&&SIM.i<SIM.qs.length-1){SIM.i++;} simShow();return;}
  const sg=t.closest("[data-sg]"); if(sg){SIM.i+= +sg.dataset.sg;simShow();return;}
  const sj=t.closest("[data-sj]"); if(sj){SIM.i=+sj.dataset.sj;simShow();return;}
  if(t.closest("[data-send]")){const un=SIM.qs.filter(x=>!full(SIM.ans[x.id])).length;if(un&&!twoTap(t.closest("[data-send]"),un+" soal belum dijawab. Ketuk lagi untuk selesai"))return;simFinish();window.scrollTo(0,0);return;}
  if(t.closest("[data-simnew]")){SIM=null;simMount();window.scrollTo(0,0);return;}
  // flash
  if(t.closest("#fc")){$("#fc").classList.toggle("flip");return;}
  if(t.closest("#fcNext")){ST.flashI=(ST.flashI+1)%KARTU.length;save();flashShow();return;}
  if(t.closest("#fcPrev")){ST.flashI=(ST.flashI-1+KARTU.length)%KARTU.length;save();flashShow();return;}
  if(t.closest("#fcShuf")){FC.order=shuffle(FC.order);ST.flashI=0;save();flashShow();toast("Urutan kartu diacak");return;}
  if(t.closest("#resetAll")){if(twoTap(t.closest("#resetAll"),"Ketuk lagi untuk menghapus semua")){ST={mode:ST.mode,modeChosen:true,done:{},ans:{},drill:{},flashI:0};save();buildNav();render();}return;}
  if(t.closest("#cpBtn")){const ta=$("#progCode");ta.value=progCode();
    const manual=()=>{ta.focus();ta.select();let ok=false;try{ok=document.execCommand("copy");}catch(x){}toast(ok?"Kode tersalin. Lanjut ke langkah 2.":"Salin manual: kode sudah terpilih");};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(ta.value).then(()=>toast("Kode tersalin. Lanjut ke langkah 2."),manual);}else manual();return;}
  if(t.closest("#impBtn")){const raw=($("#impCode").value||"").replace(/\s+/g,"");if(!raw){toast("Kotak kode masih kosong");return;}
    try{const o=JSON.parse(decodeURIComponent(escape(atob(raw))));if(!o||typeof o!=="object"||!o.ans)throw 0;ST=Object.assign({mode:"terampil",done:{},ans:{},drill:{},flashI:0},o);ST.modeChosen=true;save();buildModes();buildNav();go("progres");toast("Progres berhasil dipulihkan");}catch(x){toast("Kode tidak dikenali. Pastikan seluruh kode tersalin.");}return;}
  if(t.closest("nav.side a")) document.body.classList.remove("nav-open");
});
addEventListener("keydown",e=>{const r=e.target.closest&&e.target.closest(".rung");if(r&&(e.key==="Enter"||e.key===" ")){e.preventDefault();r.setAttribute("aria-expanded",r.getAttribute("aria-expanded")!=="true");}});
addEventListener("keydown",e=>{ if(route().path!=="drill"||!DR||e.target.closest("input,textarea"))return; const n=+e.key; const d=DR.items[DR.i]; if(d&&n>=1&&n<=4) drillAnswer(drillChoices(d)[n-1]); });

// ---------- boot ----------
// special filter "salah" for ulang flow
const _ps=pageSoal;
pageSoal=function(id,q){const s=SOAL.find(x=>x.id===id);if(!s)return "";const f=q.get("k")||"all";
  if(f!=="salah") return _ps(id,q);
  // fixed list snapshot of wrong ones (+ current) so navigation stays stable
  pageSoal._snap=pageSoal._snap&&pageSoal._snap.includes(id)?pageSoal._snap:wrongList().map(x=>x.id);
  if(!pageSoal._snap.includes(id)) pageSoal._snap.push(id);
  const list=pageSoal._snap.map(i=>SOAL.find(x=>x.id===i)); const i=list.indexOf(s); const a=ST.ans[s.id];
  const prev=list[i-1], next=list[i+1];
  return `<div class="qhead"><a href="#/ulang" class="small">Ulang yang salah</a><div class="bar"><i style="width:${(i+1)/list.length*100}%"></i></div><span class="small">${i+1} / ${list.length}</span></div>
  ${full(a)&&score(s,a)<2?`<aside class="note" style="margin-top:0">Sebelumnya: paling efektif ${a.b==="best"?"tepat":"belum tepat"}, paling tidak efektif ${a.w===s.w?"tepat":"belum tepat"}. Jawab ulang dari awal.</aside>`:""}
  ${soalCard(s,optsOrder(s.id),full(a)&&score(s,a)===2?a:null,true)}
  <div class="btnrow">${prev?`<a class="btn sec" href="#/latihan/${prev.id}?k=salah">Sebelumnya</a>`:""}${next?`<a class="btn pri" href="#/latihan/${next.id}?k=salah">Berikutnya</a>`:`<a class="btn pri" href="#/ulang">Kembali ke ringkasan</a>`}</div>`;
};
const fromHash=()=>{const h=location.hash.replace(/^#\/?/,"");if(h&&h!==CUR){CUR=h;render();}};
addEventListener("hashchange",fromHash); addEventListener("popstate",fromHash);
{const h=location.hash.replace(/^#\/?/,""); if(!ST.modeChosen){CUR="mode";} else {CUR=h||(ST.last&&ST.last!=="mulai"?ST.last:"mulai"); if(!h&&CUR!=="mulai") setTimeout(()=>toast("Melanjutkan dari terakhir kali"),400);}}
buildModes(); buildNav();
render();
})();
