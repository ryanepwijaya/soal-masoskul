// Tangga level resmi — Lampiran Permenpan-RB 38/2017 (via PDF Sosialisasi Kemenkeu)
const MODES = {
  terampil: { label: "JF Terampil", target: { integritas:2, kerjasama:2, komunikasi:1, hasil:1, pelayanan:1, pdol:1, perubahan:1, keputusan:1, perekat:2 } },
  mahir:    { label: "JF Mahir",    target: { integritas:2, kerjasama:2, komunikasi:2, hasil:2, pelayanan:2, pdol:2, perubahan:2, keputusan:2, perekat:2 } },
  pertama:  { label: "JF Pertama",  target: { integritas:2, kerjasama:2, komunikasi:2, hasil:2, pelayanan:2, pdol:2, perubahan:2, keputusan:2, perekat:2 } }
};

const LEVEL_NAMES = { 1:"Paham / dalam pengembangan", 2:"Dasar", 3:"Menengah", 4:"Mumpuni", 5:"Ahli" };

const KOMPETENSI = [
 {
  id:"integritas", nama:"Integritas", jenis:"Manajerial", warna:"#1D3A6E",
  definisi:"Konsisten berperilaku selaras dengan nilai, norma dan/atau etika organisasi, dan jujur dalam hubungan dengan manajemen, rekan kerja, bawahan langsung, dan pemangku kepentingan, menciptakan budaya etika tinggi, bertanggung jawab atas tindakan atau keputusan beserta risiko yang menyertainya.",
  inti2:"Mengingatkan dan mengajak rekan kerja bertindak sesuai etika",
  kunci:{1:"Patuh untuk diri sendiri",2:"Mengingatkan & mengajak rekan",3:"Memastikan anggota yang dipimpin patuh",4:"Menciptakan situasi patuh, berani koreksi di tingkat instansi",5:"Role model nasional, konsep kebijakan integritas"},
  levels:{
   1:{d:"Mampu bertindak sesuai nilai, norma, etika organisasi dalam kapasitas pribadi",
      i:["Bertingkah laku sesuai dengan perkataan; berkata sesuai dengan fakta","Melaksanakan peraturan, kode etik organisasi dalam lingkungan kerja sehari-hari, pada tataran individu/pribadi","Tidak menjanjikan/memberikan sesuatu yang bertentangan dengan aturan organisasi"]},
   2:{d:"Mampu mengingatkan, mengajak rekan kerja untuk bertindak sesuai nilai, norma, dan etika organisasi",
      i:["Mengingatkan rekan kerja untuk bertindak sesuai dengan nilai, norma, dan etika organisasi dalam segala situasi dan kondisi; mengajak orang lain untuk bertindak sesuai etika dan kode etik","Menerapkan norma-norma secara konsisten dalam setiap situasi, pada unit kerja terkecil/kelompok kerjanya","Memberikan informasi yang dapat dipercaya kebenarannya dengan cara yang pantas"]},
   3:{d:"Mampu memastikan, menanamkan keyakinan bersama agar anggota yang dipimpin bertindak sesuai nilai, norma, dan etika organisasi, dalam lingkup formal",
      i:["Memastikan anggota yang dipimpin bertindak sesuai dengan nilai, norma, dan etika organisasi dalam segala situasi dan kondisi","Mampu memberi apresiasi dan teguran bagi anggota yang dipimpin agar bertindak selaras dengan nilai, norma, dan etika organisasi","Melakukan monitoring dan evaluasi terhadap penerapan sikap integritas di dalam unit kerja yang dipimpin"]},
   4:{d:"Mampu menciptakan situasi kerja yang mendorong kepatuhan pada nilai, norma, dan etika organisasi",
      i:["Menciptakan situasi kerja yang mendorong seluruh pemangku kepentingan mematuhi nilai, norma, dan etika organisasi","Mendukung dan menerapkan prinsip moral dan standar etika yang tinggi, serta berani menanggung konsekuensinya","Berani melakukan koreksi atau mengambil tindakan atas penyimpangan kode etik/nilai yang dilakukan orang lain, pada lingkup kerja setingkat instansi meskipun ada risiko"]},
   5:{d:"Mampu menjadi role model dalam penerapan standar keadilan dan etika di tingkat nasional",
      i:["Mempertahankan standar keadilan dan etika yang tinggi yang dipatuhi seluruh pemangku kepentingan pada lingkup instansi yang dipimpinnya","Menjadi role model/keteladanan dalam penerapan standar keadilan dan etika yang tinggi di tingkat nasional","Membuat konsep kebijakan dan strategi penerapan sikap integritas yang sejalan dengan nilai strategis organisasi"]}
  }
 },
 {
  id:"kerjasama", nama:"Kerja Sama", jenis:"Manajerial", warna:"#1D3A6E",
  definisi:"Kemampuan menjalin, membina, mempertahankan hubungan kerja yang efektif, memiliki komitmen saling membantu dalam penyelesaian tugas, dan mengoptimalkan segala sumber daya untuk mencapai tujuan strategis organisasi.",
  inti2:"Menumbuhkan tim kerja yang partisipatif dan efektif",
  kunci:{1:"Ikut berpartisipasi, kerjakan bagian sendiri",2:"Membantu rekan, berbagi info, komit pada hasil tim",3:"Membentuk tim, negosiasi, aliansi",4:"Sinergi antar unit kerja",5:"Kerja sama di dalam & luar instansi untuk bangsa"},
  levels:{
   1:{d:"Berpartisipasi dalam kelompok kerja",
      i:["Berpartisipasi sebagai anggota tim yang baik, melakukan tugas/bagiannya, dan mendukung keputusan tim","Mendengarkan dan menghargai masukan dari orang lain dan memberikan usulan bagi kepentingan tim","Bekerja sama dalam interaksi formal dan informal"]},
   2:{d:"Menumbuhkan tim kerja yang partisipatif dan efektif",
      i:["Membantu orang lain dalam menyelesaikan tugas-tugas mereka untuk mendukung sasaran tim","Berbagi informasi yang relevan atau bermanfaat pada anggota tim; mempertimbangkan masukan dan keahlian anggota tim serta bersedia belajar dari orang lain","Memiliki komitmen yang tinggi untuk penyelesaian tujuan tim/hasil kerja tim"]},
   3:{d:"Efektif membangun tim kerja untuk peningkatan kinerja organisasi",
      i:["Melihat kekuatan/kelemahan anggota tim, membentuk tim yang tepat, mengantisipasi kemungkinan hambatan, dan mencari solusi yang optimal","Mengutamakan pengambilan keputusan berdasarkan usulan anggota tim, bernegosiasi secara efektif untuk penyelesaian target kinerja kelompok/unit","Membangun aliansi dengan para pemangku kepentingan untuk mendukung penyelesaian target kerja kelompok"]},
   4:{d:"Membangun komitmen tim, sinergi",
      i:["Membangun sinergi antar unit kerja di lingkup instansi yang dipimpin","Memfasilitasi kepentingan yang berbeda dari unit kerja lain sehingga tercipta sinergi untuk target organisasi","Mengembangkan sistem yang menghargai kerja sama antar unit"]},
   5:{d:"Menciptakan situasi kerja sama secara konsisten, baik di dalam maupun di luar instansi",
      i:["Menciptakan hubungan kerja yang konstruktif dengan menerapkan nilai kerja yang baik di dalam dan di luar organisasi","Secara konsisten menjaga sinergi agar pemangku kepentingan dapat bekerja sama dengan orang di dalam maupun di luar organisasi","Membangun konsensus untuk menggabungkan sumber daya dari berbagai pemangku kepentingan untuk tujuan bangsa dan negara"]}
  }
 },
 {
  id:"komunikasi", nama:"Komunikasi", jenis:"Manajerial", warna:"#1D3A6E",
  definisi:"Kemampuan untuk menerangkan pandangan dan gagasan secara jelas, sistematis disertai argumentasi yang logis dengan cara-cara yang sesuai baik secara lisan maupun tertulis; memastikan pemahaman; mendengarkan secara aktif dan efektif; mempersuasi, meyakinkan dan membujuk orang lain dalam rangka mencapai tujuan organisasi.",
  inti2:"Mendengar aktif, merespons tepat, menyusun naskah/laporan sesuai arahan",
  kunci:{1:"Sampaikan info jelas, pahami instruksi",2:"Dengar aktif, gaya informal profesional, susun naskah sesuai arahan",3:"Asertif, info sensitif/rumit disederhanakan",4:"Pemikiran multidimensi, persuasi stakeholder",5:"Menggagas sistem komunikasi strategis nasional"},
  levels:{
   1:{d:"Menyampaikan informasi dengan jelas, lengkap, pemahaman yang sama",
      i:["Menyampaikan informasi, pikiran atau pendapat dengan jelas, singkat dan tepat dengan cara/media yang sesuai dan alur yang logis","Memahami instruksi/perintah yang diberikan","Membuat memo, surat secara sederhana"]},
   2:{d:"Bersedia mendengarkan orang lain, menginterpretasikan pesan dengan respon yang sesuai, mampu menyiapkan materi presentasi, pidato, naskah, laporan",
      i:["Menggunakan gaya komunikasi informal untuk meningkatkan hubungan profesional","Mendengarkan pihak lain secara aktif; menangkap dan menginterpretasikan pesan dari orang lain, serta memberikan respon yang sesuai","Membuat materi presentasi, pidato, draft naskah, laporan sesuai arahan pimpinan"]},
   3:{d:"Berkomunikasi secara asertif, terampil berkomunikasi lisan/tertulis untuk menyampaikan informasi yang sensitif/rumit/kompleks",
      i:["Menyampaikan informasi yang sensitif/rumit dengan cara dan kondisi yang tepat sehingga dapat dipahami dan diterima","Menyederhanakan topik yang rumit dan sensitif sehingga lebih mudah dipahami; membuat laporan periodik yang mudah dimengerti, surat resmi yang sistematis, dan proposal yang rinci","Menyampaikan informasi dengan cara-cara yang menarik, mudah dimengerti dan berbeda dari cara konvensional"]},
   4:{d:"Mampu mengemukakan pemikiran multidimensi secara lisan dan tertulis untuk mendorong kesepakatan dengan tujuan meningkatkan kinerja secara keseluruhan",
      i:["Mengintegrasikan informasi penting hasil diskusi dengan pihak lain untuk mendapatkan pemahaman yang sama","Menuangkan pemikiran/konsep yang multidimensi dalam bentuk tulisan formal","Menyampaikan informasi secara persuasif untuk mendorong pemangku kepentingan sepakat pada langkah bersama"]},
   5:{d:"Menggagas sistem komunikasi yang terbuka secara strategis untuk mencari solusi dengan tujuan meningkatkan kinerja",
      i:["Menghilangkan hambatan komunikasi, berkomunikasi dalam isu nasional berisiko tinggi, menggalang hubungan strategis tingkat nasional","Menggunakan saluran komunikasi formal dan nonformal untuk mencapai kesepakatan di tingkat instansi/nasional","Menggagas sistem komunikasi dengan melibatkan pemangku kepentingan sejak dini"]}
  }
 },
 {
  id:"hasil", nama:"Orientasi pada Hasil", jenis:"Manajerial", warna:"#1D3A6E",
  definisi:"Kemampuan mempertahankan komitmen pribadi yang tinggi untuk menyelesaikan tugas, dapat diandalkan, bertanggung jawab, mampu secara sistematis mengidentifikasi risiko dan peluang dengan memperhatikan keterhubungan antara perencanaan dan hasil, untuk keberhasilan organisasi.",
  inti2:"Standar pribadi di atas standar organisasi, coba metode alternatif, beri contoh",
  kunci:{1:"Tuntas & memenuhi standar",2:"Standar pribadi lebih tinggi, coba metode alternatif",3:"Target unit yang menantang, apresiasi & teguran",4:"Unit tingkat instansi melampaui target",5:"Mutu organisasi untuk prioritas nasional"},
  levels:{
   1:{d:"Bertanggung jawab untuk memenuhi standar kerja",
      i:["Menyelesaikan tugas dengan tuntas; dapat diandalkan","Memenuhi standar kerja","Bersedia menerima masukan, mengikuti contoh cara bekerja yang lebih efektif dan efisien di lingkungan kerjanya"]},
   2:{d:"Berupaya meningkatkan hasil kerja pribadi yang lebih tinggi dari standar yang ditetapkan, mencari, mencoba metode alternatif untuk peningkatan kinerja",
      i:["Menetapkan dan berupaya mencapai standar kerja pribadi yang lebih tinggi dari standar kerja yang ditetapkan organisasi","Mencari, mencoba metode kerja alternatif untuk meningkatkan hasil kerjanya","Memberi contoh kepada orang-orang di unit kerjanya untuk mencoba menerapkan metode kerja yang lebih efektif yang sudah dilakukannya"]},
   3:{d:"Menetapkan target kerja yang menantang bagi unit kerja, memberi apresiasi dan teguran untuk mendorong kinerja",
      i:["Menetapkan target kinerja unit yang lebih tinggi dari target yang ditetapkan organisasi","Memberikan apresiasi dan teguran untuk mendorong pencapaian hasil unit kerjanya","Mengembangkan metode kerja yang lebih efektif dan efisien untuk mencapai target kerja unitnya"]},
   4:{d:"Mendorong unit kerja mencapai target yang ditetapkan atau melebihi hasil kerja sebelumnya",
      i:["Mendorong unit kerja di tingkat instansi untuk mencapai kinerja yang melebihi target","Memantau dan mengevaluasi hasil kerja unitnya agar selaras dengan sasaran strategis instansi","Mendorong pemanfaatan sumber daya bersama antar unit kerja"]},
   5:{d:"Meningkatkan mutu pencapaian kerja organisasi",
      i:["Memastikan kualitas dan keberlanjutan hasil kerja organisasi yang berkontribusi pada target prioritas nasional","Memastikan tersedianya sumber daya organisasi untuk target prioritas instansi/nasional","Membuat kebijakan untuk menerapkan metode kerja yang lebih efektif-efisien"]}
  }
 },
 {
  id:"pelayanan", nama:"Pelayanan Publik", jenis:"Manajerial", warna:"#1D3A6E",
  definisi:"Kemampuan dalam melaksanakan tugas-tugas pemerintahan, pembangunan dan kegiatan pemenuhan kebutuhan pelayanan publik secara profesional, transparan, mengikuti standar pelayanan yang objektif, netral, tidak memihak, tidak diskriminatif, serta tidak terpengaruh kepentingan pribadi/kelompok/golongan/partai politik.",
  inti2:"Menjelaskan proses layanan secara transparan, aktif mengenali kebutuhan stakeholder",
  kunci:{1:"Layani sesuai standar",2:"Jelaskan kebijakan objektif, aktif cari tahu kebutuhan stakeholder",3:"Perbaiki standar layanan unit, fasilitasi lintas kelompok",4:"Antisipasi isu jangka panjang, kebijakan layanan instansi",5:"Menciptakan kebijakan pelayanan publik"},
  levels:{
   1:{d:"Menjalankan tugas mengikuti standar pelayanan",
      i:["Mengerjakan tugas dengan mengikuti standar pelayanan yang objektif, netral, tidak memihak, tidak diskriminatif, transparan","Melayani kebutuhan, permintaan dan keluhan pemangku kepentingan","Menyelesaikan masalah dengan tepat tanpa bersikap membela diri dalam kapasitas sebagai pelaksana pelayanan publik"]},
   2:{d:"Mampu menjelaskan proses pelaksanaan tugas-tugas pemerintahan/pelayanan publik secara transparan",
      i:["Menunjukkan sikap yakin dalam mengerjakan tugas pelayanan publik, mampu menjelaskan secara objektif bila ada yang mempertanyakan kebijakan yang diambil","Secara aktif mencari informasi untuk mengenali kebutuhan pemangku kepentingan agar pelayanan berjalan cepat dan tanggap","Mampu mengenali dan memanfaatkan kebiasaan, tata cara, situasi tertentu sehingga apa yang disampaikan menjadi perhatian pemangku kepentingan"]},
   3:{d:"Mampu memanfaatkan kekuatan kelompok serta memperbaiki standar pelayanan publik di lingkup unit kerja",
      i:["Memahami pengaruh dan hubungan/kekuatan kelompok di organisasi (aliansi atau persaingan) dan dampaknya terhadap unit kerja","Menggunakan pemahaman lintas organisasi untuk memfasilitasi kebutuhan kelompok yang lebih besar secara objektif dan transparan","Mengimplementasikan cara efektif untuk memantau dan mengevaluasi masalah pemangku kepentingan serta mengantisipasi kebutuhan mereka di unit kerjanya"]},
   4:{d:"Mampu memonitor, mengevaluasi, memperhitungkan dan mengantisipasi dampak dari isu-isu jangka panjang, kesempatan, atau kekuatan politik dalam pelayanan",
      i:["Memperhatikan isu jangka panjang, kesempatan atau kekuatan politik yang mempengaruhi organisasi dan mengantisipasi dampaknya","Menjaga agar kebijakan pelayanan publik instansinya selaras dengan standar pelayanan yang objektif dan netral","Menerapkan strategi jangka panjang yang berfokus pada kebutuhan pemangku kepentingan dalam menyusun kebijakan"]},
   5:{d:"Mampu memastikan kebijakan pelayanan publik yang menjamin terselenggaranya pelayanan publik yang objektif, netral, tidak memihak, tidak diskriminatif",
      i:["Menciptakan kebijakan pelayanan publik yang menjamin pelayanan yang objektif, netral, tidak diskriminatif","Menginternalisasikan nilai dan semangat pelayanan publik kepada setiap individu di lingkungan instansi/nasional","Menjamin terselenggaranya pelayanan publik yang tidak terpengaruh kepentingan pribadi/kelompok/partai politik"]}
  }
 },
 {
  id:"pdol", nama:"Pengembangan Diri dan Orang Lain", jenis:"Manajerial", warna:"#1D3A6E",
  definisi:"Kemampuan untuk meningkatkan pengetahuan dan menyempurnakan keterampilan diri; menginspirasi orang lain untuk mengembangkan dan menyempurnakan pengetahuan dan keterampilan yang relevan dengan pekerjaan dan pengembangan karir jangka panjang, mendorong kemauan belajar sepanjang hidup, memberikan saran/bantuan, umpan balik, bimbingan untuk membantu orang lain mengembangkan potensi dirinya.",
  inti2:"Meningkatkan kemampuan bawahan/rekan junior lewat contoh dan penjelasan praktis",
  kunci:{1:"Mengembangkan diri sendiri",2:"Beri contoh, instruksi, petunjuk praktis; pastikan paham",3:"Tugas menantang, umpan balik, bimbingan",4:"Program pengembangan jangka panjang, kaderisasi",5:"Budaya belajar tingkat instansi"},
  levels:{
   1:{d:"Pengembangan diri",
      i:["Mengidentifikasi kebutuhan pengembangan diri dan menyeleksi sumber serta metodologi pembelajaran yang diperlukan","Menunjukkan usaha mandiri untuk mempelajari keterampilan atau kemampuan baru dari berbagai media pembelajaran","Berupaya meningkatkan diri dengan belajar dari orang-orang lain yang berwawasan luas di dalam organisasi"]},
   2:{d:"Meningkatkan kemampuan bawahan dengan memberikan contoh dan penjelasan cara melaksanakan suatu pekerjaan",
      i:["Meningkatkan kemampuan bawahan dengan memberikan contoh, instruksi, penjelasan dan petunjuk praktis yang jelas dalam menyelesaikan suatu pekerjaan","Membantu bawahan untuk mempelajari proses, program atau sistem baru","Menggunakan metode lain untuk meyakinkan bahwa orang lain telah memahami penjelasan atau pengarahan"]},
   3:{d:"Memberikan umpan balik, membimbing",
      i:["Memberikan tugas-tugas yang menantang pada bawahan sebagai media belajar untuk mengembangkan kemampuannya","Mengamati bawahan dalam mengerjakan tugasnya dan memberikan umpan balik yang objektif dan jujur; berdiskusi untuk memberikan bimbingan","Mendorong kepercayaan diri bawahan; memberi kepercayaan penuh mengerjakan tugas dengan caranya sendiri; membantu menemukan peluang berkembang"]},
   4:{d:"Menyusun program pengembangan jangka panjang dalam rangka mendorong manajemen pembelajaran",
      i:["Menyusun program pengembangan jangka panjang bersama bawahan, termasuk tujuan, bimbingan, penugasan, dan alokasi waktu pelatihan","Melaksanakan manajemen pembelajaran termasuk evaluasi dan umpan balik pada tataran organisasi","Mengembangkan orang-orang di sekitarnya secara konsisten, melakukan kaderisasi untuk posisi di unit kerjanya"]},
   5:{d:"Menciptakan situasi yang mendorong organisasi untuk mengembangkan kemampuan belajar secara berkelanjutan",
      i:["Menciptakan situasi yang mendorong individu, kelompok, unit kerja untuk belajar berkelanjutan di tingkat instansi","Merekomendasikan/memberikan penghargaan bagi upaya pengembangan yang berhasil di tingkat instansi","Memberikan inspirasi kepada individu atau kelompok untuk belajar berkelanjutan di tingkat instansi"]}
  }
 },
 {
  id:"perubahan", nama:"Mengelola Perubahan", jenis:"Manajerial", warna:"#1D3A6E",
  definisi:"Kemampuan dalam menyesuaikan diri dengan situasi yang baru atau berubah dan tidak bergantung secara berlebihan pada metode dan proses lama, mengambil tindakan untuk mendukung dan melaksanakan inisiatif perubahan, memimpin usaha perubahan, mengambil tanggung jawab pribadi untuk memastikan perubahan berhasil diimplementasikan secara efektif.",
  inti2:"Mengikuti perubahan secara mandiri, tanpa menunggu arahan",
  kunci:{1:"Ikut berubah dengan arahan/bimbingan",2:"Berubah mandiri tanpa arahan, cepat tanggap",3:"Membantu orang lain berubah, antisipasi kebutuhan unit",4:"Memimpin perubahan di unit kerja",5:"Kebijakan perubahan, galang stakeholder"},
  levels:{
   1:{d:"Mengikuti perubahan dengan arahan",
      i:["Sadar mengenai perubahan yang terjadi di organisasi dan berusaha menyesuaikan diri","Mengikuti perubahan secara terbuka sesuai petunjuk/pedoman","Menyesuaikan cara kerja lama dengan menerapkan metode/proses baru dengan bimbingan orang lain"]},
   2:{d:"Mengikuti perubahan secara mandiri",
      i:["Menyesuaikan cara kerja lama dengan menerapkan metode/proses baru selaras dengan ketentuan yang berlaku tanpa arahan orang lain","Mengembangkan kemampuan diri untuk menghadapi perubahan","Cepat dan tanggap dalam menerima perubahan"]},
   3:{d:"Membantu orang lain mengikuti perubahan, mengantisipasi perubahan secara tepat",
      i:["Membantu orang lain dalam melakukan perubahan","Menyesuaikan prioritas kerja secara berulang-ulang jika diperlukan","Mengantisipasi perubahan yang dibutuhkan unit kerjanya; memberikan solusi efektif terhadap masalah yang ditimbulkan perubahan"]},
   4:{d:"Memimpin perubahan pada unit kerja",
      i:["Mengarahkan unit kerja untuk lebih siap menghadapi perubahan termasuk memitigasi risiko","Memastikan perubahan sudah diterapkan secara aktif di lingkup unit kerjanya","Memimpin dan memastikan penerapan program perubahan di berbagai unit kerja dalam lingkupnya"]},
   5:{d:"Memimpin, menggalang dan menggerakkan dukungan pemangku kepentingan untuk menjalankan perubahan secara berkelanjutan pada tingkat instansi/nasional",
      i:["Membuat kebijakan yang mendorong perubahan berdampak pada sasaran prioritas nasional","Menggalang dan menggerakkan dukungan para pemangku kepentingan untuk mengimplementasikan perubahan","Secara berkelanjutan mencari cara baru untuk memberi nilai tambah bagi perubahan yang dijalankan"]}
  }
 },
 {
  id:"keputusan", nama:"Pengambilan Keputusan", jenis:"Manajerial", warna:"#1D3A6E",
  definisi:"Kemampuan membuat keputusan yang baik secara tepat waktu dan dengan keyakinan diri setelah mempertimbangkan prinsip kehati-hatian, dirumuskan secara sistematis dan seksama berdasarkan berbagai informasi, alternatif pemecahan masalah dan konsekuensinya, serta bertanggung jawab atas keputusan yang diambil.",
  inti2:"Menganalisis masalah secara mendalam sebelum keputusan operasional",
  kunci:{1:"Kumpulkan info, bertindak sesuai kewenangan & prosedur",2:"Analisis mendalam dari berbagai sumber, keputusan operasional",3:"Bandingkan alternatif, seimbangkan risiko",4:"Masalah berisiko tinggi lintas fungsi, mitigasi",5:"Solusi strategis jangka panjang, dampak nasional"},
  levels:{
   1:{d:"Mengumpulkan informasi untuk bertindak sesuai kewenangan",
      i:["Mengumpulkan dan mempertimbangkan informasi yang dibutuhkan dalam mencari solusi","Mengenali situasi/pilihan yang tepat untuk bertindak sesuai kewenangan","Mempertimbangkan kemungkinan solusi untuk pekerjaan rutin berdasarkan kebijakan dan prosedur yang telah ditentukan"]},
   2:{d:"Menganalisis masalah secara mendalam",
      i:["Melakukan analisis secara mendalam terhadap informasi yang tersedia dalam upaya mencari solusi","Menerapkan analisis yang seksama terhadap masalah-masalah yang harus dievaluasi secara mendalam","Mempertimbangkan berbagai kemungkinan sebelum mengambil kesimpulan; membuat keputusan operasional berdasarkan kesimpulan dari berbagai sumber informasi sesuai pedoman"]},
   3:{d:"Membandingkan berbagai alternatif, menyeimbangkan risiko keberhasilan dalam implementasi",
      i:["Membandingkan berbagai alternatif tindakan dan implikasinya","Memilih alternatif solusi terbaik berdasarkan analisis data yang sistematis, seksama, dengan prinsip kehati-hatian","Menyeimbangkan antara kemungkinan risiko dan keberhasilan dalam implementasinya"]},
   4:{d:"Menyelesaikan masalah yang mengandung risiko tinggi, mengantisipasi dampak keputusan, membuat tindakan pengamanan",
      i:["Menyusun/memutuskan konsep penyelesaian masalah yang melibatkan beberapa/seluruh fungsi dalam organisasi","Menghasilkan solusi dari masalah kompleks di bidang kerjanya yang berdampak pada pihak lain","Membuat keputusan, mengantisipasi dampaknya, dan menyiapkan tindakan penanganan (mitigasi risiko)"]},
   5:{d:"Menghasilkan solusi dan mengambil keputusan untuk mengatasi permasalahan jangka panjang/strategis, berdampak nasional",
      i:["Menghasilkan solusi yang dapat mengatasi permasalahan jangka panjang","Menghasilkan solusi strategis yang berdampak pada tataran instansi/nasional","Membuat keputusan atau kebijakan berdampak nasional dengan memitigasi risiko"]}
  }
 },
 {
  id:"perekat", nama:"Perekat Bangsa", jenis:"Sosial Kultural", warna:"#8A5A00",
  definisi:"Kemampuan dalam mempromosikan sikap toleransi, keterbukaan, peka terhadap perbedaan individu/kelompok masyarakat; mampu menjadi perpanjangan tangan pemerintah dalam mempersatukan masyarakat dan membangun hubungan sosial psikologis dengan masyarakat di tengah kemajemukan Indonesia sehingga menciptakan kelekatan yang kuat antara ASN dan para pemangku kepentingan serta diantara para pemangku kepentingan itu sendiri; menjaga, mengembangkan, dan mewujudkan rasa persatuan dan kesatuan dalam kehidupan bermasyarakat, berbangsa dan bernegara Indonesia.",
  inti2:"Aktif mengembangkan sikap saling menghargai, menekankan persamaan dan persatuan",
  kunci:{1:"Peka, menerima, terbuka belajar perbedaan",2:"Peduli keberagaman, hubungan baik, tenang saat konflik",3:"Mempromosikan toleransi, pemetaan sosial, mediator konflik",4:"Mendayagunakan perbedaan, program akomodasi",5:"Wakil pemerintah, kebijakan nasional"},
  levels:{
   1:{d:"Peka memahami dan menerima kemajemukan",
      i:["Mampu memahami, menerima, peka terhadap perbedaan individu/kelompok masyarakat","Terbuka, ingin belajar tentang perbedaan/kemajemukan masyarakat","Mampu bekerja bersama dengan individu yang berbeda latar belakang"]},
   2:{d:"Aktif mengembangkan sikap saling menghargai, menekankan persamaan dan persatuan",
      i:["Menampilkan perilaku peduli akan nilai-nilai keberagaman dan menghargai perbedaan","Membangun hubungan baik antar individu dalam organisasi dan pemangku kepentingan","Bersikap tenang, mengendalikan emosi dalam menghadapi pertentangan"]},
   3:{d:"Mempromosikan, mengembangkan sikap toleransi dan persatuan",
      i:["Mempromosikan sikap menghargai perbedaan","Melakukan pemetaan sosial di masyarakat, mengidentifikasi potensi kesalahpahaman karena keragaman budaya","Menjadi mediator untuk menyelesaikan konflik atau potensi konflik"]},
   4:{d:"Mendayagunakan perbedaan secara konstruktif dan kreatif untuk meningkatkan efektivitas organisasi",
      i:["Menginisiasi dan merepresentasikan pemerintah di lingkungan kerja dan masyarakat","Mendayagunakan perbedaan untuk mencapai kelancaran tujuan organisasi","Membuat program yang mengakomodasi perbedaan"]},
   5:{d:"Wakil pemerintah untuk membangun hubungan sosial psikologis",
      i:["Menjadi wakil pemerintah untuk membangun hubungan sosial psikologis dengan masyarakat","Mengkomunikasikan dampak risiko dan merekomendasikan tindakan korektif berdasarkan pertimbangan keberagaman","Membuat kebijakan yang mengakomodasi perbedaan serta berdampak positif secara nasional"]}
  }
 }
];
