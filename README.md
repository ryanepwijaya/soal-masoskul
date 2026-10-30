# Tangga Level · Modul Belajar Mansoskul Level 2

Modul belajar interaktif untuk ujian **SJT Manajerial dan Sosial Kultural (Mansoskul) Level 2**, disusun untuk pegawai DJP calon pejabat fungsional (JF Terampil, Mahir, atau Pertama).

Semuanya ada di **satu file `index.html`**. File ini bisa dibuka langsung di browser HP atau laptop, tanpa instalasi dan tanpa server.

## Isi modul

- **Bab dasar:** kenalan dengan 9 kompetensi, ciri opsi paling efektif dan paling tidak efektif, dan 9 tipe pengecoh.
- **9 kompetensi:** Integritas, Kerja Sama, Komunikasi, Orientasi pada Hasil, Pelayanan Publik, Pengembangan Diri dan Orang Lain, Mengelola Perubahan, Pengambilan Keputusan, dan Perekat Bangsa. Tiap kompetensi berisi indikator Level 1–5 (dari Permenpan RB 38/2017), contoh, jebakan, dan cek mini.
- **100 soal latihan SJT:** tiap soal punya 6 opsi. Kamu memilih **paling efektif** dan **paling tidak efektif**, lalu langsung dapat pembahasan per opsi.
- **Simulasi ujian:** pilih jumlah soal dan timer (opsional), lalu dapat skor dan pembahasan di akhir.
- **Drill "Apa cacatnya?":** latihan mengenali tipe pengecoh.
- **Mode jabatan:** JF Terampil, Mahir, atau Pertama. Target level tiap kompetensi menyesuaikan mode yang dipilih.
- **Simpan progres:** progres tersimpan otomatis di browser. Kamu juga bisa membuat kode progres untuk dipindah ke perangkat lain.

> Catatan: soal latihan adalah soal buatan untuk latihan, **bukan** bocoran soal ujian asli.

## Cara pakai

**Paling gampang:** unduh `index.html`, lalu buka dengan Chrome, Safari, atau Edge.

**Lewat link (GitHub Pages):** modul bisa dibuka dari HP mana saja dan dibagikan ke teman.

1. Buka repo ini di github.com, lalu masuk ke **Settings → Pages**.
2. Di bagian **Build and deployment → Source**, pilih **Deploy from a branch**.
3. Di **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
4. Tunggu 1–2 menit. Muat ulang halamannya, lalu link-nya akan muncul di bagian atas, formatnya:
   `https://<username>.github.io/<nama-repo>/`

> GitHub Pages hanya gratis untuk **repo publik**. Kalau repo-nya publik, semua orang bisa melihat isinya.

## Cara mengubah isi

Jangan edit `index.html` langsung. Edit file di folder `src/`, lalu jalankan build:

```bash
python build/build.py
```

Perintah itu menggabungkan semua file di `src/` menjadi `index.html` yang baru. Butuh Python 3, tanpa library tambahan.

| File | Isi |
|---|---|
| `src/levels.js` | Mode jabatan, nama level, dan 9 kompetensi beserta indikator Level 1–5 |
| `src/soal1.js` | Soal Integritas dan Kerja Sama |
| `src/soal2.js` | Soal Komunikasi, Orientasi pada Hasil, dan Pelayanan Publik |
| `src/soal3.js` | Soal Pengembangan Diri, Mengelola Perubahan, Pengambilan Keputusan, dan Perekat Bangsa |
| `src/worst.js` | Kunci "paling tidak efektif" untuk soal 1–100, urut sesuai nomor soal |
| `src/glossary.js` | Istilah yang muncul sebagai tooltip |
| `src/content.js`, `src/materi2.js`, `src/materi3.js` | Isi bab materi, tipe pengecoh, kartu hafalan |
| `src/app.js` | Logika aplikasi: navigasi, soal, simulasi, drill, simpan progres |
| `src/app.css` | Tampilan (tema terang) |

### Format soal

Tiap soal ditulis dengan format ini:

```js
["kompetensi", "Skenario soal...", [
  ["best",      "Teks opsi", "Penjelasan"],
  ["hampir",    "Teks opsi", "Penjelasan"],
  ["menuruti",  "Teks opsi", "Penjelasan"],
  // ... total 6 opsi
]]
```

Aturan menulis soal:

- **Isi kolom pertama dengan tipe opsi.** Pilihannya: `best`, `hampir`, `menuruti`, `pasif`, `melempar`, `kaku`, `melanggar`, `setengah`, `berlebihan`, `menghindar`.
- **Tiap soal wajib berisi satu `best` dan satu `hampir`.** Empat opsi lainnya harus bertipe berbeda-beda.
- **Urutan opsi diacak otomatis** saat soal ditampilkan.
- **Kunci "paling tidak efektif" ditulis di `src/worst.js`.** Kuncinya berupa salah satu tipe opsi yang ada di soal tersebut.
- **Kalau menambah soal baru, tambahkan juga satu entri di `src/worst.js`.**

## Teknis

- **Tanpa framework dan tanpa dependensi.** Modul ini pakai JavaScript dan CSS biasa. Font dimuat dari Google Fonts, dan kalau sedang offline, browser memakai font cadangan.
- **Progres disimpan di `localStorage` browser** dengan key `mansoskul-l2-tangga-v3`. Artinya progres hanya tersimpan di perangkat dan browser yang dipakai saat itu. Untuk pindah perangkat, pakai menu **Simpan progres → kode progres**.
