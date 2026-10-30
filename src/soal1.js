// Format: [kompetensi, skenario, [[tipe, teks opsi, penjelasan], ...]]  (6 opsi, semua lingkup Level 2)
// tipe: best | hampir | menuruti | pasif | melempar | kaku | melanggar | setengah | berlebihan | menghindar
const SOAL_1 = [
// ===================== INTEGRITAS (11) =====================
["integritas","Saat makan siang, rekan satu tim bercerita santai bahwa akhir pekan lalu ia memakai mobil dinas untuk mengantar keluarga ke luar kota.",[
 ["best","Mengingatkannya secara pribadi dan santun bahwa kendaraan dinas hanya untuk kedinasan, lalu mengajaknya tidak mengulanginya.","Lengkap: mengingatkan dengan cara pantas dan mengajak rekan kembali pada aturan."],
 ["hampir","Menyampaikan dengan nada bercanda bahwa kendaraan dinas hanya untuk keperluan kantor, saat itu juga di depan rekan-rekan lain yang ikut makan siang.","Isinya benar, tetapi menegur di depan orang lain mempermalukan dan bisa membuatnya defensif."],
 ["pasif","Tidak menanggapi cerita tersebut karena itu urusan pribadinya, mobil sudah dikembalikan, dan belum tentu ada pihak yang dirugikan.","Membiarkan pelanggaran yang kamu ketahui."],
 ["melempar","Langsung melaporkan cerita tersebut kepada atasan tanpa membicarakannya dulu dengan rekan.","Melewatkan langkah mengingatkan rekan secara langsung."],
 ["menuruti","Ikut tertawa agar suasana makan siang tetap akrab, lalu mengganti topik pembicaraan.","Demi suasana, pelanggaran malah dinormalkan."],
 ["setengah","Menyindir halus bahwa mobil dinas sekarang sudah seperti mobil pribadi, tanpa membahasnya lebih lanjut.","Sindiran tidak jelas pesannya dan tidak mengajak memperbaiki."]
]],
["integritas","Seorang wajib pajak mengirimkan parsel ke ruang tim setelah urusannya selesai. Beberapa rekan sudah mulai membagi isinya.",[
 ["hampir","Menolak bagian parsel untuk diri sendiri dengan sopan, lalu menjelaskan alasannya kepada rekan yang bertanya mengapa Anda tidak ikut mengambil.","Kamu sendiri benar, tetapi rekan tidak diajak dan parsel tetap tidak dilaporkan."],
 ["best","Mengingatkan rekan bahwa parsel itu termasuk gratifikasi, lalu mengajak tim melaporkannya sesuai ketentuan.","Lengkap: mengingatkan, mengajak tim, dan menuntaskannya lewat mekanisme resmi."],
 ["menuruti","Menerima bagian parsel karena nilainya kecil dan diberikan setelah layanan selesai.","Pemberian terkait jabatan tetap gratifikasi walau nilainya kecil."],
 ["kaku","Menegur keras rekan-rekan yang sudah membagi parsel dan meminta mereka mengembalikan semuanya saat itu juga.","Tujuannya benar, tetapi caranya keras dan memicu ketegangan."],
 ["menghindar","Keluar ruangan sampai pembagian parsel selesai agar tidak terlibat.","Menghindar tanpa mengingatkan atau melaporkan."],
 ["berlebihan","Mengembalikan parsel ke alamat wajib pajak sendiri disertai surat teguran atas nama kantor.","Bertindak di luar kewenangan dan melewati mekanisme pelaporan resmi."]
]],
["integritas","Atasan meminta Anda membulatkan angka capaian kinerja dalam laporan agar target terlihat tercapai, padahal realisasinya masih kurang sedikit.",[
 ["menuruti","Menuruti permintaan atasan karena pembulatan angka lazim dan selisihnya tidak signifikan.","Memanipulasi data kinerja, sekecil apa pun selisihnya."],
 ["best","Menyampaikan dengan santun data yang sebenarnya beserta penjelasan kendalanya, dan menawarkan narasi yang jujur untuk laporan.","Lengkap: jujur, disampaikan dengan pantas, dan tetap membantu atasan menyusun laporan."],
 ["kaku","Menolak dengan tegas permintaan tersebut karena termasuk manipulasi data, lalu menyerahkan sepenuhnya urusan penyusunan laporan itu kepada atasan sendiri.","Prinsipnya benar, tetapi kaku dan tidak membantu mencari jalan keluar."],
 ["hampir","Menyusun laporan sesuai realisasi yang sebenarnya, lalu langsung mengirimkannya tanpa membicarakan lagi permintaan tersebut dengan atasan.","Jujur, tetapi tanpa komunikasi atasan bisa kaget dan salah paham."],
 ["melempar","Meminta rekan lain yang menyusun laporan tersebut agar Anda tidak berada di posisi sulit.","Menghindari tanggung jawab dan memindahkan masalah ke orang lain."],
 ["melanggar","Membulatkan angka di ringkasan, tetapi mencantumkan angka sebenarnya di lampiran.","Tetap menyajikan informasi yang menyesatkan."]
]],
["integritas","Di grup WhatsApp kantor, seorang rekan membagikan tangkapan layar data SPT wajib pajak sebagai bahan candaan.",[
 ["pasif","Tidak menanggapi apa pun di grup agar tidak memperpanjang masalah.","Kebocoran data dibiarkan tetap beredar."],
 ["hampir","Menghubungi rekan secara pribadi dan memintanya menghapus tangkapan layar itu.","Sudah tepat caranya, tetapi tidak menjelaskan alasannya dan anggota grup lain tidak diingatkan."],
 ["best","Mengingatkan dengan santun agar tangkapan layar dihapus karena data wajib pajak rahasia, dan mengajak anggota grup menjaganya.","Lengkap: menghentikan kebocoran, menjelaskan alasan, dan mengajak kelompok."],
 ["kaku","Menegur keras rekan tersebut di grup agar semua anggota tahu kesalahannya.","Mempermalukan di depan umum dan memicu konflik."],
 ["melempar","Meneruskan tangkapan layar itu kepada atasan sebagai bukti pelanggaran.","Malah ikut menyebarkan data rahasia, dan rekan tidak diingatkan lebih dulu."],
 ["menuruti","Memberi emoji tertawa agar tidak dianggap kaku oleh rekan-rekan.","Ikut menormalkan pelanggaran kerahasiaan."]
]],
["integritas","Rekan yang terjebak macet menelepon dan meminta Anda mengisikan presensi daringnya karena ia hampir terlambat.",[
 ["menuruti","Membantu sekali ini saja karena ia sedang terkena macet dan biasanya disiplin.","Memalsukan presensi tetap pelanggaran."],
 ["best","Menolak dengan santun, mengingatkan bahwa presensi harus diisi sendiri, dan menyarankan ia melapor keterlambatan sesuai prosedur.","Lengkap: menolak, mengingatkan, dan menunjukkan jalan yang benar."],
 ["hampir","Menolak dengan halus dan menjelaskan bahwa Anda tidak boleh mengisikan presensi orang lain karena itu termasuk pelanggaran disiplin pegawai.","Benar, tetapi rekan tidak diberi tahu apa yang sebaiknya ia lakukan."],
 ["kaku","Menolak tegas dan mengatakan bahwa terlambat adalah risikonya sendiri.","Benar secara aturan, tetapi tidak santun dan merusak hubungan."],
 ["melempar","Menyarankan ia meminta tolong rekan lain yang lebih dekat dengannya.","Pelanggaran hanya dipindahkan ke orang lain."],
 ["pasif","Tidak mengangkat telepon berikutnya agar tidak perlu menjawab permintaannya.","Menghindar tanpa mengingatkan."]
]],
["integritas","Beredar pesan berantai bahwa akan ada pemotongan tunjangan bulan depan. Rekan meminta Anda meneruskannya ke grup seksi lain.",[
 ["best","Tidak meneruskan, mengingatkan rekan untuk menunggu informasi resmi, dan menunjukkan kanal resmi tempat kabar itu bisa dicek.","Lengkap: menghentikan hoaks, mengingatkan rekan, dan memberi jalan verifikasi."],
 ["menuruti","Meneruskan pesan tersebut dengan tambahan catatan \"belum pasti, mohon dicek\" agar rekan di grup lain tetap mendapat informasi lebih awal.","Label \"belum pasti\" tidak menghentikan penyebaran."],
 ["hampir","Tidak meneruskan pesan tersebut dan menyampaikan kepada rekan bahwa Anda pribadi lebih memilih menunggu pengumuman resmi dari bagian kepegawaian.","Sikap pribadi benar, tetapi tidak mengajak rekan berhenti menyebarkan."],
 ["setengah","Meneruskan pesan itu ke atasan untuk ditanyakan kebenarannya.","Bertanya boleh, tetapi tidak menghentikan rekan menyebarkan."],
 ["kaku","Menegur rekan bahwa ia penyebar hoaks dan memintanya keluar dari grup.","Berlebihan dan mempermalukan."],
 ["pasif","Membiarkan rekan meneruskannya sendiri karena itu bukan tanggung jawab Anda.","Membiarkan informasi tidak terverifikasi beredar."]
]],
["integritas","Rekan satu tim berencana memproses lebih dulu berkas milik kenalannya, mendahului berkas lain yang masuk lebih awal.",[
 ["hampir","Tetap memproses berkas bagian Anda sesuai urutan masuk, dengan harapan rekan melihat contoh tersebut dan ikut menyesuaikan caranya sendiri.","Memberi contoh baik, tetapi rekan tidak diingatkan sehingga ketidakadilan tetap terjadi."],
 ["menuruti","Membiarkan karena hanya satu berkas dan tidak terlalu memengaruhi antrean.","Membiarkan perlakuan tidak adil."],
 ["best","Mengingatkan rekan bahwa berkas harus diproses sesuai urutan, dan mengajaknya memperlakukan semua wajib pajak secara setara.","Lengkap: mengingatkan sekaligus mengajak menerapkan norma secara konsisten."],
 ["melempar","Melaporkan rencana rekan kepada atasan agar atasan yang menegurnya.","Belum mencoba mengingatkan langsung."],
 ["melanggar","Menawarkan diri memproses berkas kenalan tersebut di luar jam kerja agar antrean tidak terganggu.","Tetap memberi perlakuan istimewa."],
 ["kaku","Mengancam akan melaporkan rekan jika ia tetap mendahulukan berkas kenalannya.","Ancaman merusak hubungan kerja."]
]],
["integritas","Anda menyadari ada salah input pada data yang sudah dikirim ke unit lain. Rekan menyarankan diam saja karena kemungkinan tidak ada yang sadar.",[
 ["melanggar","Mengikuti saran rekan, lalu lebih teliti di pekerjaan berikutnya.","Menutupi kesalahan berarti tidak bertanggung jawab."],
 ["hampir","Segera memperbaiki data yang salah di sistem Anda sendiri dan memastikan data yang akan dikirim berikutnya sudah benar, tanpa menghubungi unit penerima.","Unit penerima tetap memakai data yang salah."],
 ["best","Segera menyampaikan koreksi beserta data yang benar kepada unit penerima, dan mengajak rekan untuk terbuka atas kesalahan.","Lengkap: jujur, bertanggung jawab, menuntaskan dampak, dan mengajak rekan."],
 ["melempar","Menyiapkan data koreksi, lalu meminta atasan yang menyampaikannya kepada unit penerima agar tidak terlihat sebagai kesalahan pribadi Anda.","Melempar tanggung jawab atas kesalahan sendiri."],
 ["pasif","Menunggu unit penerima menanyakan kejanggalan data sebelum memberikan koreksi.","Membiarkan data salah dipakai."],
 ["setengah","Mengirim ulang file yang benar tanpa keterangan bahwa file sebelumnya salah.","Tanpa keterangan, penerima bisa tidak sadar ada koreksi."]
]],
["integritas","Anda menjadi anggota panitia pengadaan. Calon penyedia mengundang panitia makan malam \"untuk mempererat hubungan\", dan rekan panitia tampak antusias.",[
 ["best","Mengingatkan rekan panitia bahwa jamuan itu berpotensi konflik kepentingan, lalu mengajak menolaknya bersama dengan sopan.","Lengkap: mengingatkan risiko dan mengajak menolak dengan cara pantas."],
 ["hampir","Menolak undangan untuk diri sendiri dengan alasan yang sopan.","Kamu aman, tetapi rekan panitia dibiarkan berisiko."],
 ["menuruti","Hadir bersama rekan tetapi membayar makanan sendiri agar hubungan dengan penyedia tetap baik.","Kehadiran tetap menimbulkan konflik kepentingan."],
 ["kaku","Menolak dengan tegas dan menyampaikan kepada penyedia bahwa ajakan itu tidak etis.","Benar, tetapi tidak santun dan rekan tidak diajak."],
 ["melempar","Menyerahkan keputusan hadir atau tidak kepada ketua panitia.","Lepas tangan padahal tahu ada risiko etika."],
 ["pasif","Diam saja dan mengikuti keputusan mayoritas panitia.","Tidak mengingatkan meski tahu risikonya."]
]],
["integritas","Rekan mengunggah video kegiatan di ruang kerja ke media sosial. Di latar video terlihat dokumen kantor yang terbuka.",[
 ["pasif","Memberi tanda suka lalu berharap ia sadar sendiri setelah ada yang berkomentar.","Pasif dan malah memberi validasi."],
 ["best","Segera memberi tahu rekan secara pribadi bahwa dokumen kantor terlihat, dan mengajaknya menurunkan atau menyunting unggahan.","Lengkap: cepat, santun, menyelesaikan risiko kebocoran."],
 ["kaku","Menulis komentar di unggahan itu bahwa ada dokumen kantor yang terlihat.","Malah menarik perhatian publik ke dokumen tersebut."],
 ["melempar","Melaporkan unggahan tersebut kepada bagian kepatuhan tanpa memberi tahu rekan.","Melewatkan langkah paling cepat, yaitu mengingatkan rekan langsung."],
 ["hampir","Memberi tahu rekan bahwa videonya menarik, tetapi menyarankan agar lain kali ia lebih berhati-hati memperhatikan latar saat merekam di ruang kerja.","Arah benar, tetapi unggahan yang sudah bocor tidak ditangani."],
 ["setengah","Mengunduh video itu sebagai bukti, lalu menunggu apakah rekan menghapusnya sendiri.","Menyimpan materi rahasia dan tetap pasif."]
]],
["integritas","Menjelang penilaian perilaku kerja 360 derajat, seorang rekan mengajak Anda saling memberi nilai tinggi.",[
 ["best","Menolak kesepakatan itu dengan santun dan mengajak rekan menilai secara objektif sesuai perilaku kerja yang sebenarnya.","Lengkap: menolak dan mengajak bertindak sesuai etika."],
 ["menuruti","Menyetujui karena penilaian rekan sejawat hanya sebagian kecil dari nilai akhir.","Merusak objektivitas penilaian."],
 ["hampir","Tidak menanggapi ajakan itu, lalu mengisi penilaian rekan secara objektif.","Kamu objektif, tetapi ajakan keliru tidak diluruskan."],
 ["kaku","Menegur bahwa ajakan itu curang dan mengancam akan melaporkannya.","Ancaman merusak hubungan dan belum perlu."],
 ["melempar","Menceritakan ajakan tersebut kepada rekan-rekan lain agar mereka berhati-hati.","Membicarakan di belakang tanpa menyelesaikan dengan yang bersangkutan."],
 ["melanggar","Berpura-pura setuju, lalu tetap memberi nilai sesuai pengamatan Anda.","Tidak jujur kepada rekan."]
]],

// ===================== KERJA SAMA (11) =====================
["kerjasama","Menjelang tenggat, seorang rekan tampak kewalahan menyelesaikan bagiannya, sementara tugas Anda sudah selesai.",[
 ["best","Menawarkan bantuan pada bagian yang bisa Anda kerjakan, menyepakati pembagiannya, dan memastikan target tim tercapai.","Lengkap: membantu secara proporsional dan terkoordinasi demi sasaran tim."],
 ["pasif","Menunggu rekan meminta bantuan agar tidak terkesan mencampuri pekerjaannya.","Pasif padahal tenggat tim dipertaruhkan."],
 ["berlebihan","Mengambil alih seluruh pekerjaannya agar cepat selesai.","Tidak proporsional dan mengambil alih tanggung jawab rekan."],
 ["melempar","Melaporkan kepada atasan bahwa rekan tersebut kewalahan.","Melempar ke atasan tanpa membantu."],
 ["hampir","Langsung mengerjakan sebagian rekap yang tertinggal tanpa berkoordinasi dulu dengan rekan, supaya pekerjaannya cepat berkurang menjelang tenggat.","Niatnya baik, tetapi tanpa koordinasi berisiko kerja dobel atau bertabrakan."],
 ["setengah","Menyemangati rekan dan mengingatkannya agar ke depannya membuat jadwal kerja yang lebih rapi supaya tidak kewalahan lagi menjelang tenggat.","Tidak menyelesaikan masalah yang sedang terjadi."]
]],
["kerjasama","Dari sebuah webinar, Anda mendapat informasi perubahan format laporan yang belum diketahui rekan-rekan satu tim.",[
 ["hampir","Menerapkan format baru pada laporan Anda sendiri, lalu menjelaskan perubahannya kepada rekan yang kebetulan bertanya mengapa format laporan Anda berbeda.","Kamu benar, tetapi informasi penting tidak dibagikan secara aktif."],
 ["pasif","Menunggu pengumuman resmi dari atasan agar tidak dianggap mendahului.","Menahan informasi yang bermanfaat bagi tim."],
 ["best","Segera membagikan materi dan poin perubahan kepada rekan tim, lalu menawarkan bantuan bila ada yang bingung menerapkannya.","Lengkap: berbagi informasi relevan dan membantu penerapannya."],
 ["setengah","Mengirim tautan rekaman webinar ke grup tim tanpa keterangan.","Rekan harus mencari sendiri poin penting yang berubah."],
 ["berlebihan","Mengubah sendiri format laporan seluruh anggota tim agar seragam.","Mengambil alih pekerjaan rekan tanpa koordinasi."],
 ["melempar","Menyampaikan informasi itu hanya kepada atasan dan menyerahkan sosialisasinya kepadanya.","Melempar padahal kamu bisa langsung berbagi."]
]],
["kerjasama","Dalam diskusi tim, rekan yang lebih junior mengusulkan cara kerja yang berbeda dari cara yang biasa Anda pakai.",[
 ["menghindar","Menyarankan usulan dibahas lain kali karena cara lama sudah terbukti berhasil.","Menutup masukan dan bertahan di cara lama."],
 ["hampir","Mengapresiasi usulan rekan junior di depan tim, lalu menyerahkan keputusan apakah usulan itu dipakai atau tidak sepenuhnya kepada ketua tim.","Menghargai, tetapi tidak ikut mempertimbangkan substansinya."],
 ["best","Mendengarkan usulan itu, mempertimbangkannya secara objektif bersama tim, dan bersedia mencobanya bila memang lebih baik.","Lengkap: menghargai, mempertimbangkan keahlian anggota, dan mau belajar."],
 ["kaku","Menjelaskan secara rinci kelemahan usulan tersebut beserta alasan cara lama dipakai selama ini, agar rekan junior memahami pertimbangan tim.","Defensif dan tidak membuka diri belajar."],
 ["menuruti","Langsung menyetujui usulan agar rekan junior merasa dihargai.","Menyetujui tanpa pertimbangan."],
 ["setengah","Mengucapkan terima kasih atas usulannya tanpa membahasnya lebih lanjut.","Sopan, tetapi usulan tidak benar-benar dipertimbangkan."]
]],
["kerjasama","Target tim belum tercapai di akhir triwulan, dan beberapa anggota mulai saling menyalahkan.",[
 ["hampir","Menyelesaikan bagian Anda dengan baik dan tidak ikut menyalahkan siapa pun.","Sikap pribadi baik, tetapi belum membantu tim kembali fokus."],
 ["best","Mengajak tim berhenti mencari kesalahan, membahas bagian yang tertinggal, dan membantu menyelesaikannya bersama.","Lengkap: mengembalikan fokus pada tujuan tim dan ikut membantu."],
 ["melempar","Meminta atasan turun tangan menengahi perselisihan anggota tim.","Melempar sebelum mencoba mengajak tim."],
 ["menghindar","Menjauh dari diskusi agar tidak ikut terseret konflik.","Menghindar dari masalah tim."],
 ["kaku","Menegaskan bahwa bagian Anda sudah selesai sehingga keterlambatan bukan karena Anda.","Defensif dan memperkeruh suasana."],
 ["setengah","Mengirim pesan penyemangat di grup tim tanpa membahas pekerjaan yang tertinggal.","Niat baik, tetapi masalahnya tidak tersentuh."]
]],
["kerjasama","Anda ditunjuk masuk tim lintas seksi. Anggota dari seksi lain jarang aktif di grup koordinasi.",[
 ["melempar","Melaporkan kepada atasan bahwa anggota seksi lain tidak kooperatif.","Melempar tanpa upaya membangun kerja sama."],
 ["best","Rutin membagikan progres Anda dan menyapa anggota lain secara langsung untuk menanyakan kendala yang bisa dibantu.","Lengkap: berbagi informasi dan aktif membuka kerja sama."],
 ["pasif","Mengerjakan bagian Anda tepat waktu dan menunggu anggota lain aktif sendiri.","Pasif terhadap dinamika tim."],
 ["kaku","Menulis di grup bahwa semua anggota wajib aktif dan melaporkan progres setiap hari.","Memerintah seperti ketua, bukan mengajak."],
 ["hampir","Membagikan progres pekerjaan Anda secara rutin di grup koordinasi, dengan harapan anggota dari seksi lain ikut terdorong melakukan hal yang sama.","Sudah berbagi, tetapi belum menjangkau dan membantu anggota yang pasif."],
 ["berlebihan","Mengerjakan bagian anggota yang pasif agar pekerjaan tim tetap jalan.","Mengambil alih tanpa koordinasi."]
]],
["kerjasama","Rekan satu tim meminta pendapat Anda tentang cara menangani kasus yang mirip dengan kasus yang pernah Anda tangani.",[
 ["setengah","Menjawab singkat sesuai yang Anda ingat, lalu kembali ke pekerjaan Anda.","Membantu sekadarnya."],
 ["menghindar","Menyarankan rekan mempelajari sendiri arsip kasus agar ia lebih mandiri.","Menolak berbagi pengetahuan yang jelas bermanfaat."],
 ["best","Berbagi pengalaman dan dokumen kerja dari kasus serupa, lalu mendiskusikan pendekatan yang cocok untuk kasusnya.","Lengkap: berbagi informasi relevan dan membantu rekan menyelesaikan tugasnya."],
 ["berlebihan","Menawarkan diri menangani kasus itu secara langsung karena Anda sudah berpengalaman, sehingga rekan bisa fokus pada pekerjaan lain yang tertunda.","Mengambil alih tugas rekan."],
 ["hampir","Mengirimkan seluruh dokumen kerja dari kasus serupa yang pernah Anda tangani agar rekan bisa mempelajarinya sendiri sesuai waktunya.","Berbagi, tetapi tanpa diskusi rekan bisa salah menerapkannya."],
 ["melempar","Menyarankan rekan bertanya langsung kepada atasan agar lebih pasti.","Melempar padahal kamu punya pengalaman relevan."]
]],
["kerjasama","Tim sudah menyepakati sebuah cara penyelesaian pekerjaan yang berbeda dengan pendapat Anda.",[
 ["best","Menjalankan keputusan itu dengan sungguh-sungguh, membantu rekan yang memerlukan, dan memberi masukan perbaikan bila perlu.","Lengkap: komitmen pada keputusan dan hasil tim."],
 ["hampir","Menerima keputusan tim tanpa membantah dan mengerjakan bagian yang ditugaskan kepada Anda dengan baik sampai selesai tepat waktu.","Mendukung, tetapi sebatas bagian sendiri."],
 ["melanggar","Diam-diam tetap memakai cara Anda karena yakin hasilnya lebih baik.","Tidak berkomitmen pada keputusan bersama."],
 ["setengah","Menjalankan keputusan sambil mencatat risikonya untuk membuktikan pendapat Anda benar bila gagal.","Tidak berkomitmen pada keberhasilan tim."],
 ["kaku","Meminta keputusan dibahas ulang karena pendapat Anda belum dipertimbangkan cukup dalam.","Membuka kembali hal yang sudah disepakati."],
 ["pasif","Mengikuti keputusan tanpa memberi masukan apa pun meski melihat kendala di lapangan.","Ikut tapi tidak terlibat."]
]],
["kerjasama","Tim harus menyiapkan bahan rapat pimpinan dalam waktu singkat. Anda paling paham datanya, tetapi bagian Anda adalah menyusun narasi.",[
 ["berlebihan","Mengerjakan pengolahan data sendiri tanpa memberi tahu rekan agar hasilnya pasti benar.","Mengambil alih tugas rekan tanpa koordinasi."],
 ["hampir","Fokus menyelesaikan narasi sebaik mungkin sesuai pembagian tugas, lalu menyerahkannya kepada koordinator untuk digabungkan dengan bagian data.","Tuntas untuk bagian sendiri, tetapi pengetahuanmu soal data tidak dibagikan."],
 ["best","Menyelesaikan narasi sambil berbagi file dan penjelasan singkat soal data kepada rekan pengolah data agar bahan selaras.","Lengkap: tugas sendiri tuntas dan membantu rekan demi hasil tim."],
 ["setengah","Mengirimkan seluruh file data mentah yang Anda miliki kepada rekan pengolah data, lalu kembali fokus menyelesaikan narasi sesuai pembagian tugas.","Berbagi, tetapi tanpa penjelasan file itu kurang membantu."],
 ["kaku","Meminta koordinator memindahkan Anda ke bagian pengolahan data karena Anda lebih paham.","Memaksakan diri, bukan bekerja sama."],
 ["pasif","Menunggu rekan pengolah data bertanya jika ia menemui kesulitan.","Pasif padahal waktu singkat."]
]],
["kerjasama","Rekan dari seksi lain meminta rekap internal yang Anda kelola (bukan data rahasia) untuk menyelesaikan tugasnya.",[
 ["kaku","Meminta rekan mengajukan permintaan tertulis resmi lebih dulu.","Birokratis untuk data internal yang tidak rahasia."],
 ["best","Memberikan rekap yang relevan beserta penjelasan singkat cara membacanya agar mudah ia gunakan.","Lengkap: berbagi informasi yang bermanfaat dan memastikan berguna."],
 ["hampir","Mengirimkan rekap yang diminta apa adanya sesuai permintaan.","Sudah membantu, tetapi tanpa penjelasan rekap bisa disalahartikan."],
 ["melempar","Menyarankan ia meminta rekap itu melalui atasan masing-masing.","Memperpanjang proses tanpa alasan."],
 ["pasif","Menjanjikan akan mengirim setelah pekerjaan Anda sendiri selesai, tanpa kepastian waktu.","Menunda tanpa kejelasan."],
 ["berlebihan","Menawarkan diri mengerjakan sekalian bagian tugasnya yang memakai rekap tersebut.","Mengambil alih tugas orang lain."]
]],
["kerjasama","Dalam rapat evaluasi, pimpinan memuji hasil kerja tim. Anda tahu sebagian besar keberhasilan itu berkat kontribusi satu rekan.",[
 ["menuruti","Menerima pujian atas nama tim karena keberhasilan adalah hasil kerja bersama.","Mengaburkan kontribusi rekan."],
 ["hampir","Mengucapkan terima kasih kepada pimpinan atas apresiasi yang diberikan dan menyampaikan bahwa seluruh anggota tim sudah bekerja keras.","Sopan, tetapi kontribusi rekan tidak diakui."],
 ["best","Berterima kasih atas apresiasi, menyebutkan kontribusi rekan tersebut, dan mengajak tim belajar dari cara kerjanya.","Lengkap: menghargai keahlian anggota dan mendorong belajar bersama."],
 ["setengah","Mengucapkan selamat kepada rekan tersebut secara pribadi setelah rapat selesai.","Baik, tetapi kontribusinya tidak diketahui tim dan pimpinan."],
 ["berlebihan","Mengusulkan agar rekan tersebut langsung dijadikan koordinator tim.","Di luar kewenangan dan terlalu jauh dari konteks."],
 ["pasif","Diam saja karena pimpinan sudah memuji tim secara keseluruhan.","Tidak menghargai kontribusi anggota."]
]],
["kerjasama","Tim terhambat karena data dari pemerintah daerah belum diterima, sementara rekan yang biasa berkoordinasi dengan pemda sedang cuti.",[
 ["pasif","Mencatat kendala tersebut dan menunggu rekan kembali dari cuti.","Pekerjaan tim terhenti."],
 ["best","Menanyakan kontak dan status terakhir kepada rekan, lalu menghubungi pemda atas nama tim dan mengabarkan perkembangannya.","Lengkap: membantu tugas yang tertunda dengan koordinasi yang tepat."],
 ["hampir","Menghubungi pemda atas nama tim untuk menanyakan data tersebut.","Inisiatif baik, tetapi tanpa tahu status terakhir dari rekan bisa terjadi informasi ganda."],
 ["melempar","Meminta atasan yang menghubungi pemda karena itu bukan tugas Anda.","Melempar padahal bisa dibantu."],
 ["kaku","Mengirim surat permintaan data yang tegas ke pemda dengan tenggat waktu.","Terlalu formal dan bisa mengganggu hubungan yang sudah dibangun rekan."],
 ["setengah","Menginformasikan di grup tim bahwa data pemda belum masuk.","Hanya menyampaikan masalah tanpa tindakan."]
]]
];
