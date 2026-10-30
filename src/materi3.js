// ================= v3: format "paling efektif" + "paling tidak efektif" =================
const WORSTWHY = {
 melanggar:"Paling parah karena melanggar aturan, kewenangan, atau kejujuran. Kerugiannya nyata dan sulit diperbaiki.",
 menuruti:"Paling parah karena mengorbankan aturan, etika, atau keadilan demi menyenangkan pihak lain atau supaya cepat beres.",
 menghindar:"Paling parah karena kamu lepas tangan: menolak tugas, perubahan, atau orang, sehingga masalah tidak tersentuh sama sekali.",
 pasif:"Paling parah karena tidak ada tindakan sama sekali padahal situasinya menuntut kamu bergerak.",
 kaku:"Paling parah karena reaksinya keras atau emosional sehingga konflik membesar dan hubungan rusak.",
 berlebihan:"Paling parah karena tindakannya melampaui porsi atau kewenangan sampai menimbulkan masalah baru.",
 melempar:"Paling parah karena tanggung jawab yang jelas milikmu dilempar ke orang lain.",
 setengah:"Kurang tuntas, tetapi biasanya bukan yang paling parah.",
 hampir:"Hampir benar, jadi hampir tidak pernah menjadi yang paling parah."
};

const PARAH = [
 ["Melanggar aturan, etika, atau kejujuran","Termasuk menuruti permintaan yang melanggar: menerima gratifikasi, memalsukan presensi, menutupi kesalahan, mendahulukan kenalan, membuka data orang lain, menjanjikan hal di luar kewenangan.","melanggar, menuruti"],
 ["Lepas tangan dari tugas atau perubahan","Menolak, menghindari, atau sama sekali tidak bertindak saat situasi menuntut tindakan: tetap pakai cara lama, minta dipindahkan, menunda tanpa batas, mengabaikan laporan.","menghindar, pasif"],
 ["Reaksi emosional yang memperuncing konflik","Terutama di Perekat Bangsa dan Komunikasi: membantah keras, menegur di depan umum, meluruskan orang di depan peserta.","kaku"],
 ["Upaya yang keliru arah","Masih ada usaha, tetapi caranya salah: melempar, berlebihan, setengah jalan. Biasanya ada di tengah, jarang jadi yang paling parah.","melempar, berlebihan, setengah jalan"]
];

BAB.mulai.isi = BAB.mulai.isi
 .replace(/<p class="lead">[\s\S]*?<\/p>/, `<p class="lead">Senin nanti kamu mengerjakan [[sjt|SJT]] [[mansoskul|Mansoskul]] Level 2. Setiap soal berisi satu situasi kerja dengan <mark>6 pilihan tindakan yang semuanya terdengar benar</mark>. Kamu diminta memilih <b>dua</b> hal: mana yang <b>paling efektif</b>, dan mana yang <b>paling tidak efektif</b>.</p>`)
 .replace('Kalau kamu hafal 9 tipe pengecoh dan 4 ciri jawaban terbaik, 6 opsi yang awalnya mirip-mirip akan cepat tersaring.','Kalau kamu hafal 4 ciri jawaban terbaik, 9 tipe pengecoh, dan urutan keparahannya, kamu bisa menemukan opsi terbaik sekaligus yang terburuk dengan cepat.');

BAB.kunci.judul = "Bab 2 · Ciri terbaik dan terburuk";
BAB.kunci.sub = "Empat syarat opsi paling efektif, dan urutan keparahan untuk opsi paling tidak efektif";
BAB.kunci.isi = BAB.kunci.isi.replace('<h3>Seperti apa "efektif" di tiap kompetensi</h3>', `<h3>Mencari yang paling TIDAK efektif</h3>
<p>Di antara lima opsi sisanya, cari yang <mark>paling merugikan</mark>, bukan sekadar yang paling kurang. Urutan keparahannya, dari yang paling parah:</p>
<div data-w="parah"></div>
<aside class="key"><b>Aturan praktis:</b> opsi <b>hampir benar</b> dan <b>setengah jalan</b> hampir tidak pernah menjadi jawaban "paling tidak efektif". Kalau ada opsi yang melanggar aturan atau menuruti permintaan yang melanggar, hampir pasti itulah yang paling parah.</aside>
<p class="small">Pengecualian yang sering muncul: di Perekat Bangsa, reaksi keras atau emosional biasanya lebih parah daripada sikap diam. Di Pengambilan Keputusan, mengabaikan laporan atau menunda tanpa batas biasanya lebih parah daripada bertindak terlalu cepat.</p>

<h3>Seperti apa "efektif" di tiap kompetensi</h3>`);

BAB.sjt.isi = BAB.sjt.isi.replace('<h3>Latihan eliminasi: 6 opsi</h3>\n<p>Coba pada soal berikut. Ketuk tiap langkah dan perhatikan opsi mana yang dicoret.</p>',
 '<h3>Latihan: 6 opsi, pilih terbaik dan terburuk</h3>\n<p>Coba pada soal berikut. Ketuk tiap langkah dan perhatikan opsi mana yang dicoret, lalu mana yang paling parah.</p>');

KARTU.splice(2,0,["Urutan keparahan (paling tidak efektif)","1) Melanggar / menuruti yang melanggar · 2) Lepas tangan: menghindar, pasif · 3) Reaksi keras yang memperuncing konflik · 4) Melempar, berlebihan, setengah jalan (jarang yang terparah)"],
 ["Bentuk jawaban di ujian","Dua pilihan per soal: paling efektif DAN paling tidak efektif."]);
