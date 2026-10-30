// ================= v2: format SJT yang benar (semua opsi di lingkup Level 2) =================
const TIPE = {
 best:{nama:"Jawaban terbaik",cls:"tb",ciri:"Santun, sesuai aturan dan kewenangan, proaktif tapi proporsional, dan menuntaskan masalah."},
 hampir:{nama:"Hampir benar",cls:"th",ciri:"Arahnya sudah tepat, tetapi kurang satu unsur: tanpa koordinasi, tanpa penjelasan, tanpa memastikan, hanya untuk diri sendiri, atau tidak menuntaskan.",pemicu:["benar tapi berhenti di tengah","hanya diri sendiri","tanpa memastikan paham","tanpa tindak lanjut"]},
 menuruti:{nama:"Menuruti / mengalah",cls:"tx",ciri:"Mengikuti permintaan atau tekanan supaya cepat beres atau tidak ada keluhan, padahal mengorbankan aturan, keadilan, atau kejujuran.",pemicu:["agar cepat selesai","agar tidak kecewa","sekali ini saja","karena nilainya kecil","menjanjikan"]},
 pasif:{nama:"Pasif / menunggu",cls:"tx",ciri:"Tidak bertindak dan menunggu orang lain, arahan, pelatihan, atau keadaan berubah sendiri.",pemicu:["menunggu arahan","menunggu pelatihan","diam saja","membiarkan","menunda"]},
 melempar:{nama:"Melempar",cls:"tx",ciri:"Langsung menyerahkan masalah ke atasan atau orang lain tanpa upaya sendiri lebih dulu.",pemicu:["melaporkan ke atasan tanpa…","menyerahkan ke petugas lain","meminta rekan lain"]},
 kaku:{nama:"Kaku / keras",cls:"tx",ciri:"Benar secara aturan, tetapi disampaikan tanpa penjelasan, dengan nada keras, di depan umum, defensif, atau memaksakan.",pemicu:["menolak tegas","menegur keras","di depan orang lain","tanpa penjelasan","menyalahkan"]},
 melanggar:{nama:"Melanggar demi praktis",cls:"tx",ciri:"Jalan pintas yang menabrak aturan, kewenangan, atau kejujuran data.",pemicu:["diam-diam","paraf / tanda tangan","menyesuaikan angka","melewati tahap"]},
 setengah:{nama:"Setengah jalan",cls:"tx",ciri:"Tindakannya tidak salah, tetapi tidak menyentuh atau menuntaskan masalah utama.",pemicu:["sekadar mengirim file/tautan","menyemangati saja","menyindir","mencatat saja"]},
 berlebihan:{nama:"Berlebihan",cls:"tx",ciri:"Melebihi porsi: mengambil alih pekerjaan orang, bertindak di luar kewenangan, atau reaksi yang tidak proporsional.",pemicu:["mengambil alih seluruh","sekaligus semua","mengerjakan untuknya","memanggil keamanan"]},
 menghindar:{nama:"Menghindar",cls:"tx",ciri:"Menjauhi tugas, orang, atau perubahan, dan bertahan di zona nyaman.",pemicu:["tetap memakai cara lama","minta dipindahkan","keluar dari grup","minta tugas dialihkan"]}
};
const TIPE_PENGECOH = ["hampir","menuruti","pasif","melempar","kaku","melanggar","setengah","berlebihan","menghindar"];

Object.assign(BAB, {
mulai: { judul:"Mulai di sini", sub:"Seperti apa soal ujiannya, dan cara memakai modul ini", isi:`
<p class="lead">Senin nanti kamu mengerjakan [[sjt|SJT]] [[mansoskul|Mansoskul]] Level 2. Setiap soal berisi satu situasi kerja dengan <mark>6 pilihan tindakan yang semuanya terdengar benar</mark>. Tugasmu memilih satu yang <b>paling efektif</b>.</p>

<p>Karena ujiannya Level 2, semua situasi dan pilihan ada di lingkup Level 2: tindakanmu sendiri dalam situasi langsung, bersama rekan, atasan, atau wajib pajak. Tidak ada opsi soal kebijakan nasional atau membangun sistem kantor. Jadi yang diuji bukan "level berapa ini", tetapi <b>mana tindakan yang paling lengkap dan paling tepat</b>.</p>

<p>Kabar baiknya, pengecohnya berpola. Kalau kamu hafal 9 tipe pengecoh dan 4 ciri jawaban terbaik, 6 opsi yang awalnya mirip-mirip akan cepat tersaring.</p>

<h3>Cara memakai modul ini</h3>
<ol class="steps">
 <li><b>Baca Bab 2 dan Bab 3 lebih dulu.</b> Dua bab ini adalah inti modul: ciri jawaban terbaik dan tipe-tipe pengecoh.</li>
 <li><b>Latih mata dengan "Apa cacatnya?"</b> Satu opsi pengecoh muncul, kamu tebak tipenya. Cepat, beberapa detik per butir.</li>
 <li><b>Kerjakan Latihan SJT.</b> 100 soal dengan 6 opsi, dan setiap opsi dibahas cacatnya. Soal yang salah otomatis masuk "Ulang yang salah", lengkap dengan pola kesalahanmu.</li>
 <li><b>Bab kompetensi untuk pendalaman.</b> Isinya menjelaskan seperti apa tindakan efektif Level 2 di tiap kompetensi. Istilah bergaris titik-titik bisa disentuh untuk melihat penjelasannya, misalnya [[jpm|JPM]].</li>
 <li><b>Jaga progres lewat menu <a href="#/progres">Simpan progres</a>.</b></li>
</ol>

<h3>Rencana belajar sampai Senin</h3>
<div class="plan">
 <div><b>Jumat</b><span>Bab 2 dan 3, lalu 2 putaran "Apa cacatnya?" dan 30 soal latihan.</span></div>
 <div><b>Sabtu</b><span>40 soal latihan, lalu baca bab kompetensi yang paling banyak salah.</span></div>
 <div><b>Minggu</b><span>30 soal sisa, "Terbaik vs hampir benar", lalu Ulang yang salah sampai habis.</span></div>
 <div><b>Senin pagi</b><span>Review kilat, 15 menit. Jangan belajar hal baru.</span></div>
</div>

<aside class="note"><b>Catatan jujur.</b> Kunci jawaban resmi tidak dipublikasikan. Bank soal ini disusun mengikuti pola contoh soal Level 2 DJP dan indikator perilaku Level 2 di [[permenpan|Permenpan-RB 38/2017]].</aside>
`},

kunci: { judul:"Bab 2 · Ciri jawaban terbaik", sub:"Empat syarat yang selalu dipenuhi opsi paling efektif", isi:`
<p class="lead">Di soal Level 2, jawaban terbaik hampir selalu <mark>paling lengkap</mark>. Bukan paling panjang, melainkan yang lolos keempat syarat ini sekaligus.</p>
<div data-w="syarat"></div>

<h3>Cara cepat mengecek satu opsi</h3>
<p>Baca opsinya, lalu tanyakan: <i>"Kalau aku melakukan persis ini, apakah masalahnya selesai dengan baik, tanpa melanggar, tanpa menyakiti orang, dan tanpa mengambil porsi orang lain?"</i> Kalau ada satu "tapi", opsi itu bukan yang terbaik.</p>

<h3>Seperti apa "efektif" di tiap kompetensi</h3>
<p>Isi Level 2 di Permenpan membantu menebak unsur apa yang wajib ada di jawaban terbaik.</p>
<div data-w="efektif9"></div>

<aside class="trap"><b>Jangan memilih berdasarkan panjang.</b> Di bank soal ini, jawaban terbaik kadang opsi terpanjang, kadang kedua atau ketiga. Opsi "hampir benar" dan sebagian pengecoh sengaja dibuat sama panjang. Ujian asli juga begitu.</aside>
`},

sjt: { judul:"Bab 3 · Mengenali tipe pengecoh", sub:"Sembilan pola opsi yang terdengar benar padahal bukan yang terbaik", isi:`
<p class="lead">Lima opsi selain jawaban terbaik hampir selalu jatuh ke salah satu tipe di bawah ini. Begitu kamu bisa menamai cacatnya, opsi itu langsung bisa dicoret.</p>
<div data-w="tipe"></div>

<h3>Latihan eliminasi: 6 opsi</h3>
<p>Coba pada soal berikut. Ketuk tiap langkah dan perhatikan opsi mana yang dicoret.</p>
<div data-w="walk"></div>

<h3>Kalau tersisa dua opsi yang sama-sama bagus</h3>
<p>Biasanya dua opsi itu adalah <b>jawaban terbaik</b> dan <b>hampir benar</b>. Bandingkan unsur-unsurnya, lalu pilih yang:</p>
<ul>
 <li><b>Menuntaskan</b>, bukan berhenti di tengah. Contoh: menjelaskan <i>dan</i> memastikan paham, bukan sekadar menjelaskan.</li>
 <li><b>Menyentuh pihak lain yang terlibat</b>, bukan hanya diri sendiri. Contoh: menolak <i>dan</i> mengingatkan rekan.</li>
 <li><b>Terkoordinasi</b>. Contoh: membantu <i>sambil</i> menyepakati pembagian, bukan langsung mengerjakan.</li>
 <li><b>Tepat waktu</b>. Contoh: mengonfirmasi di awal, bukan menjelang tenggat.</li>
</ul>
`},

bedakan: { judul:"Terbaik vs hampir benar", sub:"Pasangan opsi yang paling sering bikin ragu, dan unsur pembedanya", isi:`
<p class="lead">Kesalahan paling mahal di SJT adalah memilih opsi <b>hampir benar</b>. Opsi ini tidak salah, hanya kurang satu unsur. Di bawah ini satu contoh dari tiap kompetensi, diambil dari bank soal.</p>
<div data-w="bedakan2"></div>
`},

kilat: { judul:"Review kilat", sub:"Satu layar untuk Senin pagi", isi:`<div data-w="kilat2"></div>`}
});

// jebakan per kompetensi: pengecoh yang khas
const JEBAKAN2 = {
 integritas:`<p>Di soal Integritas, jawaban terbaik hampir selalu <mark>menolak atau mengoreksi, lalu mengingatkan dan mengajak rekan dengan santun</mark>. Pengecoh yang khas:</p><ul><li><b>Hampir benar:</b> kamu sendiri bersih, tetapi rekan tidak diingatkan.</li><li><b>Kaku:</b> menegur keras atau di depan umum.</li><li><b>Melempar:</b> langsung lapor atasan tanpa mengingatkan rekan dulu.</li><li><b>Menuruti:</b> "sekali ini saja", "nilainya kecil".</li></ul>`,
 kerjasama:`<p>Jawaban terbaik <mark>membantu secara proporsional dan terkoordinasi, berbagi informasi, dan fokus pada hasil tim</mark>. Pengecoh yang khas:</p><ul><li><b>Berlebihan:</b> mengambil alih seluruh pekerjaan rekan.</li><li><b>Hampir benar:</b> membantu tanpa koordinasi, atau berbagi file tanpa penjelasan.</li><li><b>Pasif:</b> menunggu diminta.</li><li><b>Melempar:</b> melapor bahwa rekan lambat.</li></ul>`,
 komunikasi:`<p>Jawaban terbaik <mark>mendengar dulu, mengonfirmasi bila kurang jelas, lalu merespons tepat sesuai arahan</mark>. Pengecoh yang khas:</p><ul><li><b>Menuruti:</b> menebak maksud atasan supaya tidak mengganggu.</li><li><b>Hampir benar:</b> konfirmasi terlambat, atau jelas tetapi satu arah.</li><li><b>Kaku:</b> memotong pembicaraan atau menyalahkan penerima pesan.</li></ul>`,
 hasil:`<p>Jawaban terbaik <mark>menetapkan target pribadi lebih tinggi dan mencoba cara kerja baru, lalu berbagi cara yang berhasil</mark>. Pengecoh yang khas:</p><ul><li><b>Hampir benar:</b> sekadar mempertahankan standar.</li><li><b>Melanggar:</b> cepat tapi melewati pemeriksaan.</li><li><b>Menghindar:</b> menjadikan kendala sebagai alasan, atau menyimpan cara kerja sendiri.</li></ul>`,
 pelayanan:`<p>Jawaban terbaik <mark>menjelaskan dasar aturan secara transparan dan objektif, tetap santun, lalu memberi jalan keluar</mark>. Pengecoh yang khas:</p><ul><li><b>Menuruti:</b> mendahulukan kenalan, menjanjikan hal di luar kewenangan.</li><li><b>Kaku:</b> menolak atau mengembalikan tanpa penjelasan.</li><li><b>Hampir benar:</b> melayani sesuai standar tetapi pertanyaannya tidak dijawab.</li><li><b>Melempar:</b> "silakan ajukan keberatan", "tanya ke petugas lain".</li></ul>`,
 pdol:`<p>Jawaban terbaik <mark>memberi contoh dan petunjuk praktis, mendampingi praktik, lalu memastikan pemahaman</mark>. Pengecoh yang khas:</p><ul><li><b>Hampir benar:</b> menjelaskan tetapi tidak mengecek paham, atau memberi contoh tanpa penjelasan.</li><li><b>Berlebihan:</b> mengambil alih pekerjaan junior.</li><li><b>Setengah jalan:</b> hanya mengirim tautan atau dokumen.</li></ul>`,
 perubahan:`<p>Jawaban terbaik <mark>langsung beradaptasi secara mandiri dan mencari solusi atas kendala, tanpa kembali ke cara lama</mark>. Pengecoh yang khas:</p><ul><li><b>Pasif:</b> menunggu pelatihan atau sosialisasi resmi.</li><li><b>Hampir benar:</b> menyesuaikan diri "secara bertahap".</li><li><b>Menghindar:</b> tetap memakai cara lama, minta pengecualian.</li></ul>`,
 keputusan:`<p>Jawaban terbaik <mark>menelusuri dan mengonfirmasi informasi dari beberapa sumber, lalu memutuskan sesuai pedoman</mark>. Pengecoh yang khas:</p><ul><li><b>Hampir benar:</b> ikut prosedur rutin tanpa menganalisis kejanggalan.</li><li><b>Menuruti:</b> memutuskan berdasarkan orang atau rumor.</li><li><b>Melanggar:</b> menyesuaikan angka atau melewati tahap pemeriksaan.</li></ul>`,
 perekat:`<p>Jawaban terbaik <mark>tetap tenang, menghargai perbedaan, dan aktif menjaga hubungan baik</mark>. Pengecoh yang khas:</p><ul><li><b>Hampir benar:</b> tidak ikut-ikutan, tetapi diam saja.</li><li><b>Kaku:</b> membantah atau menegur keras di depan umum.</li><li><b>Menuruti:</b> ikut bercanda, menyetujui agar suasana aman.</li><li><b>Berlebihan:</b> memberi perlakuan khusus yang tidak diminta.</li></ul>`
};
Object.keys(JEBAKAN2).forEach(k=>{ if(EXTRA[k]) EXTRA[k].jebakan=JEBAKAN2[k]; });

const SYARAT = [
 ["Sesuai aturan dan kewenangan","Tidak melanggar, tidak mengambil jalan pintas, tidak menjanjikan hal di luar kewenanganmu.","melanggar, menuruti"],
 ["Santun dan menjaga hubungan","Disampaikan dengan cara yang pantas: pribadi bila perlu, tidak keras, tidak mempermalukan.","kaku"],
 ["Proaktif tapi proporsional","Kamu bertindak sendiri lebih dulu, tetapi tidak mengambil alih porsi orang lain.","pasif, melempar, menghindar, berlebihan"],
 ["Menuntaskan masalah","Ada penjelasan, konfirmasi, koordinasi, atau tindak lanjut, sehingga masalah utama selesai dan pihak terkait ikut tergerak.","setengah jalan, hampir benar"]
];

const WALK2 = {s:"Rekan satu tim kewalahan menyelesaikan rekap menjelang tenggat, sementara tugas Anda sudah selesai.",
 o:[
 {t:"best",x:"Menawarkan bantuan pada bagian yang bisa Anda kerjakan, menyepakati pembagiannya, dan memastikan target tim tercapai.",e:"Lolos keempat syarat."},
 {t:"pasif",x:"Menunggu rekan meminta bantuan agar tidak terkesan mencampuri pekerjaannya.",e:"Pasif padahal tenggat tim dipertaruhkan."},
 {t:"berlebihan",x:"Mengambil alih seluruh pekerjaannya agar cepat selesai.",e:"Mengambil porsi rekan."},
 {t:"melempar",x:"Melaporkan kepada atasan bahwa rekan tersebut kewalahan.",e:"Melempar tanpa membantu."},
 {t:"hampir",x:"Langsung mengerjakan sebagian rekapnya tanpa berkoordinasi agar lebih cepat dan target tim tetap aman.",e:"Arahnya benar, tetapi tanpa koordinasi berisiko kerja dobel."},
 {t:"setengah",x:"Mengingatkan rekan agar ke depannya mengatur waktu lebih baik.",e:"Masalah saat ini tidak terselesaikan."}
 ]};

KARTU.length = 0;
[
 ["Bentuk soal Mansoskul Level 2","1 situasi, 6 pilihan tindakan yang semuanya terdengar benar. Pilih yang paling efektif. Semua di lingkup Level 2."],
 ["4 syarat jawaban terbaik","Sesuai aturan dan kewenangan · Santun dan menjaga hubungan · Proaktif tapi proporsional · Menuntaskan masalah"],
 ["Tipe pengecoh: Hampir benar","Arahnya tepat tapi kurang satu unsur: tanpa koordinasi, tanpa penjelasan, tanpa memastikan, atau hanya diri sendiri."],
 ["Tipe pengecoh: Menuruti","Mengikuti permintaan/tekanan supaya cepat beres. Kata pemicu: agar cepat selesai, agar tidak kecewa, sekali ini saja."],
 ["Tipe pengecoh: Pasif","Menunggu arahan, pelatihan, atau orang lain. Kata pemicu: menunggu, diam saja, membiarkan."],
 ["Tipe pengecoh: Melempar","Langsung menyerahkan ke atasan/orang lain tanpa upaya sendiri dulu."],
 ["Tipe pengecoh: Kaku","Benar secara aturan tapi keras, tanpa penjelasan, di depan umum, atau defensif."],
 ["Tipe pengecoh: Melanggar","Jalan pintas yang menabrak aturan, kewenangan, atau kejujuran data."],
 ["Tipe pengecoh: Setengah jalan","Tidak salah, tapi tidak menuntaskan masalah utama (sekadar kirim file, menyemangati saja)."],
 ["Tipe pengecoh: Berlebihan","Mengambil alih, di luar kewenangan, atau reaksi tidak proporsional."],
 ["Tipe pengecoh: Menghindar","Menjauhi tugas, orang, atau perubahan; bertahan di cara lama."],
 ["Integritas Level 2 efektif berarti…","Menolak/mengoreksi, lalu mengingatkan dan mengajak rekan dengan santun."],
 ["Kerja Sama Level 2 efektif berarti…","Membantu proporsional dan terkoordinasi, berbagi informasi, komit pada hasil tim."],
 ["Komunikasi Level 2 efektif berarti…","Mendengar aktif, mengonfirmasi bila kurang jelas, menyusun naskah sesuai arahan."],
 ["Orientasi pada Hasil Level 2 efektif berarti…","Target pribadi di atas standar, mencoba cara baru, berbagi cara yang berhasil."],
 ["Pelayanan Publik Level 2 efektif berarti…","Menjelaskan aturan secara transparan dan objektif, santun, lalu memberi jalan keluar."],
 ["Pengembangan Diri & Orang Lain Level 2 efektif berarti…","Memberi contoh dan petunjuk praktis, mendampingi praktik, memastikan paham."],
 ["Mengelola Perubahan Level 2 efektif berarti…","Beradaptasi mandiri tanpa menunggu arahan, mencari solusi, tidak kembali ke cara lama."],
 ["Pengambilan Keputusan Level 2 efektif berarti…","Menelusuri dan mengonfirmasi dari beberapa sumber, lalu memutuskan sesuai pedoman."],
 ["Perekat Bangsa Level 2 efektif berarti…","Tenang, menghargai perbedaan, dan aktif menjaga hubungan baik."],
 ["Siapa yang bilang: \"Tidak jujur itu sulit diperbaiki\"?","Bung Hatta"],
 ["\"Working together is success\"","Henry Ford"],
 ["Hukum 7-38-55","Verbal 7% · Vokal 38% · Visual 55% (Albert Mehrabian)"],
 ["3 tipe menghadapi perubahan","Quitters · Campers · Climbers. Level 2 diharapkan jadi Climbers."],
 ["Kategori JPM (Per BKN 26/2019)","≥90% Optimal · 78% s.d. <90% Cukup Optimal · <78% Kurang Optimal"]
].forEach(k=>KARTU.push(k));
BAB.dasar.isi = BAB.dasar.isi.replace(/<aside class="key">[\s\S]*?<\/aside>/, `<aside class="key"><b>Yang perlu kamu pegang:</b> untuk JF Terampil, standar Level 2 wajib di <mark>Integritas, Kerja Sama, dan Perekat Bangsa</mark>, sedangkan enam lainnya Level 1. Di ujian, semua soal sudah berada di lingkup Level 2. Jadi tidak perlu menebak level opsi. Fokusmu cukup satu: memilih tindakan yang paling efektif.</aside>`);
