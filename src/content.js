// ================= MATERI BAB =================
// [[key|label]] = istilah dengan penjelasan saat di-hover/tekan
// <div data-w="..."> = widget interaktif

const BAB = {

mulai: { judul:"Mulai di sini", sub:"Apa yang akan kamu hadapi Senin, dan cara memakai modul ini", isi:`
<p class="lead">Senin nanti kamu mengerjakan tes [[sjt|SJT]] [[mansoskul|Mansoskul]] Level 2. Soalnya berupa situasi kerja dengan 4 pilihan respons. Biasanya <mark>semua pilihan terdengar baik</mark>. Tugasmu memilih yang paling pas untuk orang di Level 2: tidak ketinggian, tidak kebawahan.</p>

<p>Kabar baiknya, materinya sebenarnya kecil. Ada 9 kompetensi, masing-masing punya 5 level, dan semuanya memakai pola yang sama. Begitu kamu bisa "melihat" polanya, soal-soal yang kelihatan mirip jadi gampang dibedakan.</p>

<h3>Cara memakai modul ini</h3>
<ol class="steps">
 <li><b>Mode jabatan sudah kamu pilih di halaman awal.</b> Mode menentukan standar level jabatanmu dan memengaruhi penjelasan setelah kamu menjawab soal. Untuk mengganti, ketuk tombol mode di pojok kanan atas.</li>
 <li><b>Baca bab secara berurutan kalau baru mulai.</b> Bab 1–3 membangun "kacamata" untuk membaca semua soal. Setelah itu, kamu bebas loncat ke kompetensi mana pun lewat menu.</li>
 <li><b>Istilah bergaris titik-titik bisa disentuh.</b> Contoh: [[radius|radius dampak]]. Arahkan kursor atau tekan istilahnya untuk melihat penjelasan singkat.</li>
 <li><b>Latihan ada tiga jenis.</b> <em>Level 2 atau bukan?</em> (cepat, beberapa detik per butir), <em>Latihan SJT</em> (100 soal dengan pembahasan per opsi), dan <em>Simulasi</em> (soal acak dengan timer). Soal yang salah otomatis masuk daftar <em>Ulang yang salah</em>.</li>
 <li><b>Tandai bab yang selesai</b> dengan tombol di bawah setiap bab.</li>
 <li><b>Jaga progresmu lewat menu <a href="#/progres">Simpan progres</a>.</b> Di sana ada langkah mudah untuk menyimpan dan memulihkan progres, termasuk saat pindah dari laptop ke HP.</li>
</ol>

<h3>Rencana belajar sampai Senin</h3>
<p>Disusun untuk sekitar 60–75 menit per hari, karena kamu juga perlu waktu untuk UKT.</p>
<div class="plan">
 <div><b>Kamis</b><span>Bab 1–3, lalu 2 putaran "Level 2 atau bukan?" (30 butir).</span></div>
 <div><b>Jumat</b><span>Integritas, Kerja Sama, Perekat Bangsa (wajib Level 2 untuk Terampil), lalu ±34 soal latihan dari ketiganya.</span></div>
 <div><b>Sabtu</b><span>6 kompetensi lainnya (baca cepat tangganya), lalu ±40 soal latihan.</span></div>
 <div><b>Minggu</b><span>Bab "Yang sering tertukar", sisa soal latihan, lalu Ulang yang salah sampai habis.</span></div>
 <div><b>Senin pagi</b><span>Review kilat, 15 menit. Jangan belajar hal baru.</span></div>
</div>

<aside class="note"><b>Catatan jujur.</b> Kunci jawaban resmi ujian tidak dipublikasikan. Modul ini memakai kamus kompetensi resmi [[permenpan|Permenpan-RB 38/2017]] sebagai patokan, dan menetapkan opsi Level 2 sebagai jawaban paling tepat karena kamu diuji pada posisi Level 2.</aside>
`},

dasar: { judul:"Bab 1 · Kenalan dengan kompetensi", sub:"Apa yang diukur, ada berapa level, dan standar untuk jabatanmu", isi:`
<p class="lead">Kompetensi ASN dibagi tiga: <b>teknis</b> (sesuai tugas instansi, misalnya perpajakan), <b>manajerial</b>, dan <b>sosial kultural</b>. Ujian Senin hanya menguji dua yang terakhir.</p>

<h3>9 kompetensi yang diuji</h3>
<div data-w="daftar9"></div>

<h3>5 level kemahiran</h3>
<p>Setiap kompetensi punya [[level|level profisiensi]] 1 sampai 5. Semakin tinggi levelnya, semakin luas tanggung jawab dan jangkauan perilakunya.</p>
<div data-w="levelnames"></div>

<h3>Standar untuk jabatanmu</h3>
<p>[[skj|Standar Kompetensi Jabatan]] menentukan level minimal per kompetensi. Tabel di bawah mengikuti mode yang kamu pilih. Untuk perbandingan, pejabat pengawas wajib Level 2 di semua kompetensi.</p>
<div data-w="standar"></div>
<aside class="key"><b>Yang perlu kamu pegang:</b> untuk JF Terampil, hanya <mark>Integritas, Kerja Sama, dan Perekat Bangsa</mark> yang wajib Level 2. Enam kompetensi lainnya standarnya Level 1. Menjawab Level 2 di semua kompetensi tetap aman. Titik rawanmu justru di tiga kompetensi tadi: jawaban Level 1 di sana berarti di bawah standar.</aside>

<h3>Bagaimana hasilnya dinilai</h3>
<p>Hasil tes dibandingkan dengan standar jabatan menjadi [[jpm|JPM]] (Job Person Match). Per BKN No. 26/2019:</p>
<div class="jpm"><div><b>≥ 90%</b><span>Optimal</span></div><div><b>78% – &lt;90%</b><span>Cukup optimal</span></div><div><b>&lt; 78%</b><span>Kurang optimal</span></div></div>
<p class="small">Pelaksana dan JF setara dinilai dengan tes kompetensi online. Struktural dan JF setara memakai [[ac|Assessment Center]].</p>
`},

kunci: { judul:"Bab 2 · Rumus membaca level", sub:"Satu alat untuk menebak level opsi mana pun dalam hitungan detik", isi:`
<p class="lead">Kalau kamu perhatikan kamus kompetensi, setiap kenaikan level hampir selalu berarti satu hal: <mark>jangkauan tindakan makin luas</mark>. Modul ini menyebutnya [[radius|radius dampak]].</p>

<div data-w="radius"></div>

<h3>Tiga pertanyaan untuk setiap opsi</h3>
<ol class="steps">
 <li><b>Siapa yang dijangkau tindakan ini?</b> Diri sendiri (L1), rekan atau kelompok kerja kecil (L2), unit yang dipimpin (L3), lintas unit atau instansi (L4), nasional (L5).</li>
 <li><b>Apakah tindakannya butuh kewenangan memimpin?</b> Kalau opsi itu menegur, mengapresiasi, membagi tugas tim, atau menetapkan target unit, itu peran pemimpin unit (L3 ke atas).</li>
 <li><b>Apakah tindakannya membangun sistem, program, atau kebijakan?</b> Kalau ya, hampir pasti L4 atau L5.</li>
</ol>

<h3>Ciri khas Level 2</h3>
<p>Level 2 punya rasa yang sama di semua kompetensi: <mark>proaktif dalam lingkup tugasku sendiri, dan menyentuh rekan di sekitarku</mark>. Aku tidak menunggu disuruh, aku tidak berhenti di diri sendiri, tetapi aku juga tidak bertindak seolah-olah pemimpin unit.</p>
<div class="contrast">
 <div class="c1"><b>Level 1</b><p>"Saya patuh. Saya ikut. Saya belajar." Benar, tapi untuk diri sendiri, atau menunggu arahan dan bimbingan.</p></div>
 <div class="c2"><b>Level 2</b><p>"Saya proaktif, lalu mengajak, membantu, menjelaskan, atau memberi contoh." Tanpa diarahkan, dan dalam kewenanganku.</p></div>
 <div class="c3"><b>Level 3</b><p>"Saya memastikan, menegur, mengapresiasi, memperbaiki standar unit." Bertindak sebagai pemimpin unit kerja.</p></div>
</div>

<h3>Kata kerja pengenal</h3>
<div data-w="katakerja"></div>
`},

sjt: { judul:"Bab 3 · Cara menjawab SJT", sub:"Eliminasi tiga langkah, dicoba langsung pada satu soal", isi:`
<p class="lead">Jangan langsung mencari jawaban yang "paling bagus", karena opsi Level 3 dan 4 sering terdengar paling hebat. Lebih aman <mark>membuang opsi yang salah dulu</mark>, satu per satu.</p>

<ol class="steps">
 <li><b>Buang yang keliru.</b> Opsi yang melanggar aturan atau etika, pasif ("menunggu arahan"), melempar ("lapor atasan tanpa klarifikasi"), terlalu keras, terlalu mengalah ("memenuhi permintaan agar cepat selesai"), atau mengambil alih pekerjaan orang lain.</li>
 <li><b>Buang yang [[ketinggian|ketinggian]].</b> Opsi dengan kata seperti <em>seluruh seksi/kantor/instansi, sistem, program, kebijakan, menegur anggota, menetapkan target unit, menjadi mediator, memetakan</em>.</li>
 <li><b>Buang yang [[kebawahan|kebawahan]].</b> Opsi yang benar tetapi hanya untuk diri sendiri, menunggu bimbingan, atau sekadar memenuhi standar.</li>
</ol>
<p>Yang tersisa biasanya opsi Level 2. Coba langsung pada soal berikut, ketuk tiap langkah:</p>
<div data-w="walk"></div>

<h3>Kalau masih ragu di antara dua opsi</h3>
<ul>
 <li>Pilih yang <b>tetap dalam kewenanganmu</b>. Kamu bukan kepala seksi.</li>
 <li>Pilih yang <b>ada tindakan nyata</b>, bukan sekadar memahami atau menerima.</li>
 <li>Pilih yang <b>menyentuh rekan atau pihak yang terlibat langsung</b>, bukan seluruh kantor.</li>
 <li>Perhatikan <b>kompetensi apa yang sedang diuji</b>. Membantu rekan belajar aplikasi baru bisa Level 2 di Kerja Sama, tetapi Level 3 di Mengelola Perubahan.</li>
</ul>

<aside class="trap"><b>Jebakan paling umum.</b> Opsi yang paling panjang dan paling "visioner" bukan otomatis yang benar. Di ujian Level 2, opsi yang terdengar seperti pidato kepala kantor biasanya justru jawaban ketinggian.</aside>
`},

bedakan: { judul:"Yang sering tertukar", sub:"Pasangan kompetensi dan level yang paling sering bikin ragu", isi:`
<p class="lead">Bagian ini untuk hari Minggu, setelah kamu membaca semua kompetensi. Setiap kartu membandingkan dua hal yang mirip dan menunjukkan kata kunci pembedanya.</p>
<div data-w="bedakan"></div>
`},

kilat: { judul:"Review kilat", sub:"Satu layar untuk Senin pagi", isi:`
<div data-w="kilat"></div>
`}
};

// ================= TAMBAHAN PER KOMPETENSI =================
const EXTRA = {
integritas:{
 kenapa:`<p>Integritas adalah kompetensi manajerial <b>pertama</b> yang wajib dimiliki setiap ASN. Menurut John C. Maxwell (<i>Developing the Leader Within You</i>, 2014), integritas penting karena tiga hal: membangun kepercayaan, memberi nilai pengaruh yang tinggi, dan membuat standar kerja tinggi.</p>
 <blockquote>"Kurang cerdas dapat diperbaiki dengan belajar. Kurang cakap dapat diperbaiki dengan pengalaman. Namun, tidak jujur itu sulit diperbaiki." <cite>Bung Hatta</cite></blockquote>
 <p>Warren Buffett: carilah tiga kualitas, yaitu integritas, kecerdasan, dan energi. Tanpa yang pertama, dua lainnya akan "membunuhmu".</p>`,
 contoh:["Konsisten mengingatkan tim agar bertindak sesuai aturan dan nilai","Tidak sungkan menekankan pentingnya integritas secara informal","Mengingatkan rekan memakai data/informasi sesuai ketentuan","Mengingatkan etika penggunaan media sosial","Memberi contoh dan mengajak rekan bertindak sesuai kode etik","Membuka ruang diskusi jika ada perbedaan atau masalah","Memastikan laporan hasil kerja benar; tidak menyebarkan informasi yang belum terbukti; menjaga hal yang bersifat [[confidential|confidential]]"],
 jebakan:`<p><b>L1 vs L2:</b> Level 1 bersih untuk diri sendiri ("saya menolak", "saya tidak ikut"). Level 2 <mark>menolak dan mengingatkan atau mengajak rekan</mark>.</p>
 <p><b>L2 vs L3:</b> Level 3 berbicara tentang "anggota yang dipimpin": memastikan, memberi apresiasi dan teguran, serta [[monev|monev]] integritas unit. Materi e-learning memang menyebut "memantau penerapan kode etik secara berkala" sebagai contoh Level 2, karena ditulis dari sudut pandang pengawas. Di soal, kalau opsinya sudah berbentuk teguran resmi atau pemantauan terhadap anggota yang kamu pimpin, anggap itu Level 3.</p>`,
 hafal:[
  ["4 fungsi integritas","Skill (bisa dipelajari) · Guideline (acuan keputusan) · Benih (dipupuk sejak dini) · Bangunan kokoh (dijaga agar tidak runtuh)"],
  ["Kadar integritas, rendah ke tinggi","1) Jujur mengikuti nurani → 2) Konsisten jujur mengikuti nurani → 3) Berani konsisten jujur mengikuti nurani"],
  ["[[ujietik|Uji Etik]] 5 langkah","Legal secara hukum? · Percaya diri bila diteliti pihak lain? · Pihak lain akan melakukan hal sama? · Tidak memihak/objektif? · Bisa diterima masyarakat?"],
  ["Cara mengembangkan integritas (Johnson, 2016)","Pahami dan internalisasi hakikat integritas · Tunjukkan integritas melebihi yang kamu harapkan dari orang lain · Bertanggung jawab atas kesalahan · Hargai pendapat dan keputusan orang lain"],
  ["Peran organisasi (McFarlin, 2016)","Sampaikan urgensi integritas · Kaitkan kebijakan, proses, dan prosedur · Keteladanan · Tangani pelanggaran dengan cepat · Sosialisasi terus-menerus"]
 ]},
kerjasama:{
 kenapa:`<p>Kerja sama meningkatkan efisiensi, memunculkan ide baru, memberi pengalaman belajar, memudahkan komunikasi, dan membagi beban kerja. Tim yang berkomitmen bekerja sama berorientasi pada opini, pada persamaan, dan pada tujuan, tanpa agenda tersembunyi.</p>
 <blockquote>"Coming together is a beginning; keeping together is progress; working together is success." <cite>Henry Ford</cite></blockquote>`,
 contoh:["Menanyakan kesulitan anggota tim dan membantu memberi solusi","Membuka ruang diskusi untuk masalah bersama","Menerima saran dari pengalaman anggota tim lain sebagai bahan belajar","Objektif menerima informasi tanpa melihat latar belakang pemberinya","Mendengarkan dan mengapresiasi pendapat anggota tim","Mendorong semangat tim fokus pada target"],
 jebakan:`<p><b>L1 vs L2:</b> Level 1 = "melakukan bagian saya, mendukung keputusan tim, menghargai masukan". Level 2 = <mark>membantu rekan menyelesaikan tugasnya, berbagi informasi, mempertimbangkan dan belajar dari masukan, serta berkomitmen pada hasil tim</mark>.</p>
 <p><b>L2 vs L3:</b> Level 3 melihat kekuatan dan kelemahan anggota, membentuk atau menata ulang tim, bernegosiasi, dan membangun [[aliansi|aliansi]] dengan pemangku kepentingan. Level 4 membangun [[sinergi|sinergi]] antarunit.</p>
 <p><b>Keliru:</b> "mengambil alih seluruh pekerjaan rekan". Kedengarannya membantu, tapi tidak proporsional.</p>`,
 hafal:[
  ["5 manfaat kerja sama","Efisiensi · Ide baru · Pengalaman belajar · Kemudahan komunikasi · Membagi beban kerja"],
  ["Ciri tim berkomitmen","Berorientasi opini · Berorientasi persamaan · Berfokus pada tujuan"],
  ["Komitmen organisasi (McShane & Glinow, 2010)","Keadilan & dukungan · Berbagi nilai · Kepercayaan (trust) · Pemahaman organisasi · Partisipasi pegawai"],
  ["Tips membangun komitmen tinggi","Pertahankan akuntabilitas · Bangun respek · Rayakan kesuksesan anggota"]
 ]},
komunikasi:{
 kenapa:`<p>Komunikasi menghasilkan pemahaman yang sama dan menjadi sarana brainstorming. Perannya: meluruskan persepsi, memperluas sudut pandang, dan melengkapi sudut pandang. William J. Seller mendefinisikan komunikasi sebagai proses ketika simbol verbal dan nonverbal dikirimkan, diterima, dan diberi arti.</p>`,
 contoh:["Mengenali kapan perlu gaya informal dan kapan formal","Memberi tanggapan sesuai saat ditanya soal tugas","Menjawab sopan, gestur wajar, tidak memotong pembicaraan","Mengonfirmasi ulang pesan yang kurang jelas","Menuangkan ide dalam tulisan formal secara mandiri","Menerjemahkan arahan pimpinan menjadi bahan paparan, telaahan, notulensi, resume"],
 jebakan:`<p><b>L1 vs L2:</b> Level 1 = menyampaikan informasi dengan jelas, memahami instruksi, membuat memo sederhana. Level 2 = <mark>[[dengaraktif|mendengar aktif]], menangkap pesan tersirat, mengonfirmasi, memakai gaya informal untuk hubungan profesional, dan menyusun naskah atau laporan sesuai arahan</mark>.</p>
 <p><b>L2 vs L3:</b> Level 3 = [[asertif|asertif]] menyampaikan informasi sensitif atau rumit, menyederhanakan topik rumit, membuat proposal atau laporan periodik, dan menyampaikan dengan cara menarik yang tidak konvensional.</p>
 <p><b>Perhatikan:</b> materi e-learning menganjurkan komunikasi asertif sebagai tips umum, tetapi di kamus Permenpan "berkomunikasi secara asertif untuk informasi sensitif" adalah <b>deskripsi Level 3</b>.</p>`,
 hafal:[
  ["5 tips komunikasi efektif","[[selftalk|Self talk]] positif · [[rapport|Rapport]] building · Saling memahami (Covey) · Selaraskan pesan dengan vokal dan visual · Action (pilih perilaku asertif)"],
  ["[[mehrabian|Hukum 7-38-55]]","Verbal 7% · Vokal/intonasi 38% · Visual/bahasa tubuh 55% (tatap muka)"],
  ["Stephen Covey","Pahami orang lain dulu sebelum minta dipahami. Kebanyakan orang mendengar untuk menjawab, bukan untuk memahami."],
  ["3 perilaku komunikasi","[[agresif|Agresif]] (memaksakan kehendak) · [[submisif|Submisif]] (menghindari konflik, takut) · [[asertif|Asertif]] (jujur dan menghormati)"]
 ]},
hasil:{
 kenapa:`<p>Pegawai Level 2 (pengawas, JF pertama/mahir/terampil) yang kinerjanya efektif dipandang sebagai aset organisasi karena menciptakan nilai tambah, dan diharapkan mendorong rekan Level 1 agar berkomitmen menyelesaikan tugas.</p>`,
 contoh:["Mengajak rekan memantau sistem kerja dan menyesuaikan cara kerja untuk mengatasi kendala","Mengevaluasi proses kerja dan memperbaikinya berdasarkan hasil evaluasi","Mencari cara kerja terbaru dari berbagai sumber dan menerapkannya sesuai kewenangan","Berbagi strategi efektif kepada tim","Memperkenalkan metode baru yang terbukti efektif kepada rekan"],
 jebakan:`<p><b>L1 vs L2:</b> Level 1 = tuntas, memenuhi standar, mau menerima masukan dan mengikuti contoh cara kerja orang lain. Level 2 = <mark>menetapkan standar pribadi lebih tinggi dari standar organisasi, mencoba [[metodealternatif|metode alternatif]], dan memberi contoh kepada rekan seunit</mark>.</p>
 <p><b>L2 vs L3:</b> Level 3 menetapkan target <b>unit</b> yang menantang, memberi apresiasi atau teguran, dan mengembangkan metode untuk unit. Kata "seksi", "seluruh tim", atau "teguran" menandakan ketinggian.</p>
 <aside class="trap">Di materi e-learning, contoh perilaku untuk indikator pertama ("menanyakan kesulitan anggota tim…") <b>salah tempel dari Kerja Sama</b>. Pegang definisi indikatornya: menetapkan standar pribadi yang lebih tinggi.</aside>`,
 hafal:[
  ["[[standarkerja|Standar kerja]] (Vitalo, 2014)","Deskripsi tertulis proses kerja yang seharusnya. Ukurannya: waktu, jumlah unit per waktu, biaya per waktu, tingkat kesalahan, jumlah keluhan."],
  ["Metode kerja (Lawrence, 2000)","Material · Manusia · Peralatan & mesin · Lingkungan fisik"],
  ["5 perilaku pendukung","Assertiveness (tegas) · Work pace (cepat) · Self-reliance (mandiri) · Realistic (target realistis) · Frustration tolerance (tahan mental)"]
 ]},
pelayanan:{
 kenapa:`<p>Pelayanan publik yang baik membuat birokrasi dekat dan responsif, serta mewujudkan [[stakeholdersdriven|stakeholders-driven government]]. Esensinya adalah <mark>membalik mental model birokrat dari ingin dilayani menjadi melayani</mark>. Menurut UU 25/2009, pelayanan publik adalah pemenuhan kebutuhan layanan barang, jasa, dan/atau administratif bagi setiap warga negara dan penduduk.</p>`,
 contoh:["Mengelola layanan sesuai SOP dan peraturan","Menjelaskan maksud dan tujuan kebijakan layanan kepada pihak terkait","Mengatasi keluhan dengan pemahaman yang tepat","Belajar dari rekan berpengalaman cara merespons kebutuhan stakeholder","Survei kebutuhan stakeholder, misalnya dengan [[ipa|Importance Performance Analysis]]","Memanfaatkan forum atau kegiatan untuk menyampaikan informasi layanan"],
 jebakan:`<p><b>L1 vs L2:</b> Level 1 = menjalankan standar layanan, melayani keluhan, menyelesaikan masalah tanpa membela diri. Level 2 = <mark>yakin dan mampu menjelaskan kebijakan secara objektif saat dipertanyakan, aktif menggali kebutuhan pemangku kepentingan, dan memanfaatkan kebiasaan atau situasi setempat agar pesan diperhatikan</mark>.</p>
 <p><b>L2 vs L3:</b> Level 3 memperbaiki standar layanan di unit, memahami kekuatan kelompok, dan memantau masalah pemangku kepentingan secara sistematis.</p>`,
 hafal:[
  ["9 prinsip pelayanan (infografis)","Partisipatif · Transparan · Responsif · Tidak diskriminatif · Mudah & murah · Efektif & efisien · Aksesibel · Akuntabel · Berkeadilan"],
  ["Deskripsi Level 2","Mampu menjelaskan proses pelaksanaan tugas pemerintahan/pelayanan publik secara transparan"]
 ]},
pdol:{
 kenapa:`<p>Kompetensi ini meningkatkan produktivitas organisasi, membangun loyalitas dan komitmen, memberdayakan pegawai ([[empowering|empowering]]), dan menumbuhkan kebijaksanaan dalam kepemimpinan.</p>
 <blockquote>"Mengetahui orang lain adalah kecerdasan; mengetahui diri sendiri adalah kebijaksanaan sejati." <cite>Lao Tzu</cite></blockquote>`,
 contoh:["Memberi petunjuk, tahapan kerja, dan acuan peraturan terkini","Memberi tugas sesuai kemampuan masing-masing","Memberi format atau contoh konkret saat memberi instruksi","Mengadakan [[knowledgesharing|knowledge sharing]] atau diskusi rutin","Pendampingan langsung saat mencoba sistem baru","Mendorong hasil diklat diterapkan di pekerjaan","Konsultasi one-on-one, tanya jawab, atau praktik untuk mengecek pemahaman"],
 jebakan:`<p><b>L1 vs L2</b> di kompetensi ini paling jelas: Level 1 = <b>mengembangkan diri sendiri</b>. Level 2 = <mark>mengembangkan bawahan atau junior dengan contoh, instruksi, dan petunjuk praktis, membantu mempelajari sistem baru, dan memastikan pemahamannya</mark>.</p>
 <p><b>L2 vs L3:</b> Level 3 = memberi tugas menantang, [[umpanbalik|umpan balik]] objektif setelah mengamati, dan kepercayaan penuh. Level 4 = program jangka panjang dan [[kaderisasi|kaderisasi]].</p>
 <p><b>Untuk Terampil:</b> standarmu di sini Level 1, jadi mengembangkan diri sudah memenuhi standar. Tapi di ujian Level 2, pilih opsi yang membimbing dengan contoh.</p>`,
 hafal:[
  ["Tips mengelola pegawai","Kerja keras (otot) · Kerja cerdas (otak) · Kerja ikhlas (spiritual)"],
  ["[[coaching|Coaching]]","Kemitraan kreatif untuk memaksimalkan potensi personal dan profesional"],
  ["[[kepribadian|4 tipe kepribadian]]","Sanguinis · Koleris · Melankolis · Phlegmatis, berdasarkan orientasi tugas dan hubungan sosial"]
 ]},
perubahan:{
 kenapa:`<blockquote>"Change is the only evidence of life." <cite>Evelyn Waugh</cite></blockquote>
 <p>Arie de Geus: organisasi adalah makhluk hidup yang bisa lahir, berkembang, sakit, bahkan mati jika tidak beradaptasi. Darwin: yang bertahan bukan yang terkuat, tapi yang paling adaptif. George Bernard Shaw: "Progress is impossible without change."</p>`,
 contoh:["[[climbers|Climbers]]: langsung mempelajari aplikasi baru tanpa menunggu pelatihan formal","Mengikuti webinar atau kursus secara mandiri agar relevan, bukan terjebak [[zonanyaman|zona nyaman]] seperti [[campers|Campers]]","Saat mutasi, cepat mempelajari peta jabatan dan target baru, bukan bersikap seperti [[quitters|Quitters]]"],
 jebakan:`<p><b>L1 vs L2</b> dibedakan oleh satu kata: <mark>arahan</mark>. Level 1 mengikuti perubahan <b>dengan arahan atau bimbingan</b>, sesuai petunjuk. Level 2 mengikuti perubahan <b>secara mandiri, tanpa arahan orang lain</b>, serta cepat dan tanggap.</p>
 <p><b>L2 vs L3:</b> Level 3 = membantu orang lain berubah, menyesuaikan prioritas berulang kali, dan mengantisipasi kebutuhan unit. Hati-hati: "membantu rekan belajar aplikasi baru" itu baik, tetapi untuk kompetensi ini levelnya 3.</p>`,
 hafal:[
  ["3 tipe menghadapi perubahan","Quitters (penyerah, mundur) · Campers (berkemah di zona nyaman) · Climbers (pendaki, mencari solusi)"],
  ["Kalimat khas tiap tipe","Quitters: \"Tidak bisa, saya sudah tua\" · Campers: \"Ini sudah cukup bagus\" · Climbers: \"Mari kita cari jalan keluarnya\""],
  ["Deskripsi Level 2","Proaktif beradaptasi: mengikuti perubahan secara mandiri"]
 ]},
keputusan:{
 kenapa:`<p>Keputusan yang baik itu logis, konsisten dengan kemampuan organisasi, selaras dengan tujuan, dan didasarkan pada informasi yang valid. Pengambil keputusan yang bijak (wise decision maker) punya peluang sukses lebih besar karena mampu menavigasi ketidakpastian.</p>`,
 contoh:["Mengonfirmasi kebenaran informasi secara formal maupun informal","Menganalisis informasi dengan mengacu pada peraturan","Menyiapkan alternatif solusi dari analisis yang komprehensif","Menelaah masalah secara detail dan sistematis, tidak acak","Me-review alternatif solusi sesuai ketentuan sebelum memutuskan"],
 jebakan:`<p><b>L1 vs L2:</b> Level 1 = mengumpulkan informasi dan bertindak sesuai kewenangan atau prosedur rutin. Level 2 = <mark>menganalisis mendalam dari berbagai sumber, lalu membuat [[keputusanoperasional|keputusan operasional]] sesuai pedoman</mark>.</p>
 <p><b>L2 vs L3</b> paling tipis di sini. Level 3 punya kata kunci <b>membandingkan berbagai alternatif dan implikasinya</b> serta <b>menyeimbangkan risiko dan keberhasilan</b>. Level 4 = masalah berisiko tinggi lintas fungsi dengan [[mitigasi|mitigasi]].</p>`,
 hafal:[
  ["Jenis keputusan","Operasional (rutin/harian) vs [[keputusanstrategis|strategis]] (jangka panjang)"],
  ["Alur kerja keputusan","Identifikasi → Kumpulkan informasi → Alternatif → Eksekusi → Tinjau"],
  ["Deskripsi Level 2","Menganalisis masalah secara mendalam"]
 ]},
perekat:{
 kenapa:`<p>Indonesia sangat majemuk. Perekat Bangsa penting untuk mencegah ketidakadilan bagi yang berbeda latar belakang, meningkatkan efektivitas organisasi, dan menjalankan kewajiban etis memperlakukan setiap orang secara setara. Keberagaman yang dimaksud mencakup antara lain agama/kepercayaan, suku dan budaya, gender, latar belakang individu, sosial ekonomi, preferensi politik, nilai, moral, prinsip, dan emosi.</p>`,
 contoh:["Menunjuk anggota dari latar berbeda untuk memimpin proyek secara bergiliran, bukan berdasarkan kedekatan","Mendengarkan aspirasi kelompok masyarakat dengan empati tanpa memotong","Tetap tenang saat menghadapi keluhan bernada tinggi: menawarkan tempat duduk, memulai dengan nada rendah","Mengutamakan [[husnuzan|prasangka baik]], empati, tenggang rasa, dan sopan santun","Peka gender dan difabilitas: kesetaraan akses"],
 jebakan:`<p><b>L1 vs L2:</b> Level 1 = peka, menerima, terbuka belajar, mampu bekerja dengan yang berbeda. Level 2 = <mark>aktif menunjukkan perilaku peduli keberagaman, membangun hubungan baik, dan tenang mengendalikan emosi saat ada pertentangan</mark>.</p>
 <p><b>L2 vs L3:</b> Level 3 = mempromosikan toleransi, melakukan [[pemetaansosial|pemetaan sosial]], dan menjadi [[mediator|mediator]] konflik. Materi e-learning memberi contoh "bertindak sebagai mediator saat rapat memanas" di Level 2. Untuk soal, pakai patokan ini: kalau opsinya menenangkan dan mengajak kembali ke substansi, itu Level 2. Kalau opsinya menjadi mediator formal dan memetakan akar konflik, itu Level 3.</p>`,
 hafal:[
  ["3 indikator Level 2","Peduli nilai keberagaman · Membangun hubungan baik antarindividu dan pemangku kepentingan · Tenang dan mengendalikan emosi saat pertentangan"],
  ["Nilai Kemenkeu ([[iprospek|IProSPeK]])","Integritas · Profesionalisme · Sinergi · Pelayanan · Kesempurnaan"],
  ["Peran ASN","Perpanjangan tangan pemerintah untuk mempersatukan masyarakat dan membangun hubungan sosial psikologis"]
 ]}
};

// ================= YANG SERING TERTUKAR =================
const BEDAKAN = [
 { a:"Kerja Sama L2", b:"Pengembangan Diri & Orang Lain L2", kunci:"Siapa yang dibantu, dan caranya",
   ia:"Membantu <b>rekan setara</b> menyelesaikan tugasnya demi sasaran tim. Fokusnya hasil tim.",
   ib:"Meningkatkan kemampuan <b>bawahan/junior</b> dengan contoh, instruksi, dan memastikan ia paham. Fokusnya kemampuan orangnya." },
 { a:"Kerja Sama L2 (membantu rekan)", b:"Mengelola Perubahan L3 (membantu orang lain berubah)", kunci:"Kompetensi yang sedang diuji",
   ia:"Membantu rekan yang kewalahan agar target tim tercapai: Level 2.",
   ib:"Membantu rekan yang kesulitan beradaptasi dengan sistem baru: Level 3. Untuk kompetensi Mengelola Perubahan, Level 2 cukup beradaptasi <b>sendiri</b> secara mandiri." },
 { a:"Orientasi pada Hasil L2", b:"Mengelola Perubahan L2", kunci:"Siapa yang memulai perubahan",
   ia:"<b>Kamu sendiri</b> mencari dan mencoba metode alternatif agar hasil melampaui standar.",
   ib:"<b>Organisasi</b> mengubah sesuatu, lalu kamu menyesuaikan diri secara mandiri tanpa menunggu arahan." },
 { a:"Komunikasi L2", b:"Pelayanan Publik L2", kunci:"Apa yang disampaikan, kepada siapa",
   ia:"Cara berkomunikasi: mendengar aktif, mengonfirmasi, gaya informal yang profesional, menyusun naskah sesuai arahan.",
   ib:"Menjelaskan <b>kebijakan dan proses layanan</b> secara objektif dan transparan kepada pemangku kepentingan, serta aktif mencari tahu kebutuhan mereka." },
 { a:"Integritas L2", b:"Perekat Bangsa L2", kunci:"Nilai apa yang dijaga",
   ia:"Mengingatkan dan mengajak rekan patuh pada <b>etika, aturan, dan kejujuran</b>.",
   ib:"Menunjukkan sikap <b>menghargai keberagaman</b>, membangun hubungan baik, dan tetap tenang saat ada pertentangan." },
 { a:"Pengambilan Keputusan L2", b:"Pengambilan Keputusan L3", kunci:"Menganalisis vs membandingkan",
   ia:"<b>Menganalisis mendalam</b> dari berbagai sumber, lalu memutuskan sesuai pedoman.",
   ib:"<b>Membandingkan alternatif</b> beserta implikasinya dan <b>menyeimbangkan risiko</b> dengan peluang keberhasilan." },
 { a:"Perekat Bangsa L2", b:"Perekat Bangsa L3", kunci:"Menenangkan vs memediasi",
   ia:"Tetap tenang, tidak terpancing, menjaga hubungan baik, dan mengajak kembali ke substansi.",
   ib:"Menjadi mediator, memetakan akar konflik, memfasilitasi kesepakatan, dan mempromosikan toleransi di unit." },
 { a:"Integritas L2", b:"Integritas L3", kunci:"Rekan vs anggota yang dipimpin",
   ia:"Mengingatkan dan mengajak <b>rekan kerja</b> secara informal.",
   ib:"<b>Memastikan</b> anggota yang dipimpin patuh: memberi apresiasi atau teguran dan melakukan monev unit." },
 { a:"Mengelola Perubahan L1", b:"Mengelola Perubahan L2", kunci:"Ada arahan atau tidak",
   ia:"Menyesuaikan diri <b>dengan bimbingan</b> atau sesuai petunjuk yang diberikan.",
   ib:"Menyesuaikan diri <b>tanpa arahan orang lain</b>, cepat dan tanggap." }
];

// ================= KATA KERJA PENGENAL =================
const KATAKERJA = {
 1:["melaksanakan","mengikuti","memahami","memenuhi standar","berpartisipasi","menerima","belajar sendiri","dengan bimbingan"],
 2:["mengingatkan","mengajak","membantu rekan","berbagi info","mendengar aktif","menjelaskan","menganalisis mendalam","mencoba metode alternatif","tanpa arahan","memberi contoh"],
 3:["memastikan","menegur & mengapresiasi","memonitor unit","membentuk tim","menegosiasikan","memediasi","mengantisipasi","membandingkan alternatif","memperbaiki standar unit"],
 4:["menciptakan situasi","sinergi antarunit","program jangka panjang","kaderisasi","mitigasi lintas fungsi","mendayagunakan perbedaan"],
 5:["kebijakan nasional","role model nasional","wakil pemerintah","prioritas nasional"]
};

// ================= FLASHCARD HAFALAN =================
const KARTU = [
 ["Apa dasar hukum kamus kompetensi manajerial & sosial kultural?","Permenpan-RB No. 38 Tahun 2017 tentang Standar Kompetensi Jabatan ASN"],
 ["Sebutkan 8 kompetensi manajerial","Integritas · Kerja Sama · Komunikasi · Orientasi pada Hasil · Pelayanan Publik · Pengembangan Diri & Orang Lain · Mengelola Perubahan · Pengambilan Keputusan"],
 ["Kompetensi sosial kultural ada berapa?","Satu: Perekat Bangsa"],
 ["Nama 5 level profisiensi","1 Paham/dalam pengembangan · 2 Dasar · 3 Menengah · 4 Mumpuni · 5 Ahli"],
 ["Kompetensi yang wajib Level 2 untuk JF Terampil","Integritas, Kerja Sama, Perekat Bangsa. Sisanya Level 1."],
 ["Kategori JPM menurut Per BKN 26/2019","≥90% Optimal · 78% s.d. <90% Cukup Optimal · <78% Kurang Optimal"],
 ["Deskripsi Level 2 Integritas","Mampu mengingatkan, mengajak rekan kerja bertindak sesuai nilai, norma, dan etika organisasi"],
 ["Deskripsi Level 2 Kerja Sama","Menumbuhkan tim kerja yang partisipatif dan efektif"],
 ["Deskripsi Level 2 Komunikasi","Bersedia mendengarkan orang lain, menginterpretasikan pesan dengan respons sesuai, mampu menyiapkan materi presentasi, pidato, naskah, laporan"],
 ["Deskripsi Level 2 Orientasi pada Hasil","Berupaya meningkatkan hasil kerja pribadi lebih tinggi dari standar, mencari dan mencoba metode alternatif"],
 ["Deskripsi Level 2 Pelayanan Publik","Mampu menjelaskan proses pelaksanaan tugas pemerintahan/pelayanan publik secara transparan"],
 ["Deskripsi Level 2 Pengembangan Diri & Orang Lain","Meningkatkan kemampuan bawahan dengan memberikan contoh dan penjelasan cara melaksanakan pekerjaan"],
 ["Deskripsi Level 2 Mengelola Perubahan","Mengikuti perubahan secara mandiri"],
 ["Deskripsi Level 2 Pengambilan Keputusan","Menganalisis masalah secara mendalam"],
 ["Deskripsi Level 2 Perekat Bangsa","Aktif mengembangkan sikap saling menghargai, menekankan persamaan dan persatuan"],
 ["Siapa yang bilang: \"Tidak jujur itu sulit diperbaiki\"?","Bung Hatta"],
 ["Integrity, Intelligence, Energy — tanpa yang pertama, dua lainnya akan \"membunuhmu\"","Warren Buffett"],
 ["\"Working together is success\"","Henry Ford"],
 ["\"Change is the only evidence of life\"","Evelyn Waugh"],
 ["Organisasi adalah makhluk hidup (a living organism)","Arie de Geus"],
 ["\"Mengetahui diri sendiri adalah kebijaksanaan sejati\"","Lao Tzu"],
 ["\"Pahami orang lain dulu sebelum minta dipahami\"","Stephen Covey"],
 ["Hukum 7-38-55","Verbal 7% · Vokal 38% · Visual 55% (Albert Mehrabian, UCLA)"],
 ["Uji Etik 5 langkah (Shrosbree)","Legal? · Percaya diri bila diamati? · Orang lain akan melakukan sama? · Objektif/tidak memihak? · Diterima masyarakat?"],
 ["4 fungsi integritas","Skill · Guideline · Benih · Bangunan kokoh"],
 ["Komitmen organisasi McShane & Glinow (5)","Keadilan & dukungan · Berbagi nilai · Kepercayaan · Pemahaman organisasi · Partisipasi pegawai"],
 ["Metode kerja Lawrence (4 komponen)","Material · Manusia · Peralatan & mesin · Lingkungan fisik"],
 ["5 perilaku pendukung Orientasi pada Hasil","Assertiveness · Work pace · Self-reliance · Realistic · Frustration tolerance"],
 ["3 tipe menghadapi perubahan","Quitters · Campers · Climbers. Level 2 diharapkan jadi Climbers."],
 ["3 perilaku komunikasi","Agresif · Submisif · Asertif"],
 ["9 prinsip pelayanan","Partisipatif · Transparan · Responsif · Tidak diskriminatif · Mudah & murah · Efektif & efisien · Aksesibel · Akuntabel · Berkeadilan"],
 ["Nilai-nilai Kemenkeu","IProSPeK: Integritas, Profesionalisme, Sinergi, Pelayanan, Kesempurnaan"]
];
