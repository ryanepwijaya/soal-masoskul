"""Gabungkan src/*.js + src/app.css menjadi satu file index.html.
Jalankan dari folder mana saja:  python build/build.py
"""
import pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
S = ROOT / 'src'
OUT = ROOT / 'index.html'
FILES = ['levels.js','soal1.js','soal2.js','soal3.js','glossary.js','content.js','materi2.js','worst.js','materi3.js','app.js']
css = (S/'app.css').read_text(encoding='utf-8')
js = '\n'.join((S/f).read_text(encoding='utf-8') for f in FILES)
html = f'''<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="color-scheme" content="light">
<meta name="theme-color" content="#FFFFFF">
<title>Tangga Level Mansoskul</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
<style>{css}</style>
</head>
<body>
<header class="top"><div class="top-in">
 <button class="menu-btn" type="button" aria-label="Buka menu"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14" stroke="#17202E" stroke-width="2" stroke-linecap="round"/></svg></button>
 <a class="brand" href="#/mulai">
  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><rect x="2" y="22" width="6" height="6" rx="1.5" fill="#4F6FA8"/><rect x="8" y="17" width="6" height="11" rx="1.5" fill="#14875A"/><rect x="14" y="12" width="6" height="16" rx="1.5" fill="#B97A0B"/><rect x="20" y="7" width="6" height="21" rx="1.5" fill="#C4522A"/><rect x="26" y="2" width="3" height="26" rx="1.5" fill="#9E3653"/></svg>
  <div><b>Tangga Level</b><span>Mansoskul Level 2 untuk DJP</span></div>
 </a>
 <div class="spacer"></div>
 <div class="modes" role="group" aria-label="Mode jabatan"></div>
</div></header>
<div class="wrap">
 <nav class="side" aria-label="Daftar isi"></nav>
 <main id="main"></main>
</div>
<div class="toast" id="toast" role="status" aria-live="polite"></div>
<script>
{js}
</script>
</body>
</html>
'''

OUT.write_text(html, encoding='utf-8')
print(OUT, len(html)//1024, 'KB')
