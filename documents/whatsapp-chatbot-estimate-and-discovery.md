# Estimasi Biaya dan Discovery Brief — WhatsApp Chatbot Dokter Metabolik

Dokumen ini dapat dikirim kepada calon klien/pemilik klinik sebagai dasar diskusi. Angka berikut adalah estimasi per September 2026, dalam Rupiah (IDR), belum termasuk PPN bila berlaku. Final quotation hanya dibuat setelah jawaban discovery dan pilihan vendor tersedia.

## Rekomendasi paket: Booking WhatsApp MVP

**Harga implementasi yang direkomendasikan: Rp39.500.000.**

Paket ini mencakup chatbot WhatsApp untuk memperkenalkan Dokter Oscar, melihat jadwal, menahan slot 60 menit, verifikasi OTP, form registrasi, checkout QRIS/VA, konfirmasi dari webhook pembayaran, serta eskalasi ke admin. Estimasi pengerjaan 6–8 minggu setelah akses akun dan materi konten lengkap.

| Ruang kerja                                                       |   Nilai estimasi |
| ----------------------------------------------------------------- | ---------------: |
| Discovery, arsitektur, dan kontrak API                            |      Rp3.500.000 |
| Setup WhatsApp Business Platform, webhook, dan template pesan     |      Rp5.000.000 |
| Shared Booking API: jadwal, slot hold, registrasi, status booking |     Rp12.000.000 |
| Integrasi payment gateway: order, checkout, webhook, expiry       |      Rp6.500.000 |
| Flow chatbot, handoff admin, dan pesan notifikasi                 |      Rp5.000.000 |
| QA skenario penting, keamanan dasar, deployment, runbook          |      Rp5.000.000 |
| Project management, demo, dan dua putaran revisi minor            |      Rp2.500.000 |
| **Total**                                                         | **Rp39.500.000** |

### Yang termasuk

- Satu nomor WhatsApp Business dan satu bahasa utama Indonesia.
- Menu: Tentang Dokter Oscar, Lihat Jadwal, Booking Saya, dan Bantuan Admin.
- Satu jenis konsultasi dengan harga tetap, jadwal dari satu sumber, serta hold slot 60 menit.
- OTP untuk verifikasi nomor, form registrasi minimum, dan ringkasan sebelum bayar.
- QRIS dan virtual account melalui satu payment gateway yang dipilih klien.
- Validasi webhook, status payment/booking, idempotensi webhook, dan log audit dasar.
- Notifikasi booking berhasil, pembayaran belum selesai, dan reminder konsultasi.
- Handoff ke admin melalui WhatsApp inbox/provider yang dipilih.
- Dokumentasi setup, daftar environment variables, dan sesi handover 90 menit.

### Yang tidak termasuk

- Website booking frontend; desain UI/UX baru; aplikasi mobile.
- Video consultation/telemedicine, EMR/rekam medis, e-resep, integrasi BPJS/asuransi, atau diagnosis AI.
- Dashboard admin kustom penuh. MVP menggunakan inbox WhatsApp/provider dan data booking dasar; dashboard kustom dapat ditawarkan sebagai fase berikutnya.
- Penyusunan atau peninjauan legal oleh konsultan hukum: Kebijakan Privasi, syarat layanan, informed consent, refund policy, dan kepatuhan kesehatan.
- Biaya Meta/WhatsApp, BSP, gateway pembayaran, SMS OTP, cloud hosting, domain, pajak, serta biaya vendor lainnya.
- Migrasi data, multi-dokter, multi-cabang, atau integrasi kalender/CRM eksternal yang belum disebutkan.

## Opsi harga agar ruang lingkup jelas

| Pilihan             | Biaya implementasi | Cocok bila                                                                                        | Batas utama                                                 |
| ------------------- | -----------------: | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Lite                |       Rp18–25 juta | Jadwal dan booking API sudah tersedia; hanya perlu chatbot, form sederhana, dan link checkout     | Tidak mencakup pembuatan shared Booking API atau dashboard. |
| **MVP rekomendasi** |    **Rp39,5 juta** | Booking API belum ada dan bot harus mengelola hold, registrasi, serta payment end-to-end          | Satu dokter, satu bahasa, dan satu alur konsultasi.         |
| Lanjutan            |       Rp55–80 juta | Membutuhkan dashboard kustom, multi-dokter, reschedule otomatis, laporan, dan integrasi eksternal | Didefinisikan setelah discovery; bukan fixed scope awal.    |

Jika website booking pada repository terpisah juga ingin dibuat bersamaan, tambahkan **Rp15–25 juta** untuk frontend web dan integrasinya. Angka tepatnya bergantung pada desain, autentikasi, halaman konten, serta apakah website memakai API booking yang sama.

## Biaya berjalan bulanan dan per transaksi

| Item                                   |                                             Estimasi | Cara penagihan                                                                                                    |
| -------------------------------------- | ---------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------- |
| Infrastruktur Cloudflare production    |                               **minimum US$5/bulan** | Dibayar langsung oleh klinik ke Cloudflare; budget internal sekitar Rp100.000/bulan, tergantung kurs/kartu/pajak. |
| Support dan maintenance                |                          Rp2.000.000–5.000.000/bulan | Opsional; mencakup monitoring, patch kecil, dan kuota jam kerja.                                                  |
| WhatsApp Business Platform / BSP       |                         Mengikuti rate card Meta/BSP | Pass-through berdasarkan negara, kategori, dan jumlah template message.                                           |
| OTP SMS, jika dipakai sebagai fallback |                                     Mengikuti vendor | Pass-through per pesan.                                                                                           |
| QRIS payment gateway                   | **0,7% per transaksi sukses** untuk merchant reguler | Dipotong gateway atau dibebankan sesuai konfigurasi checkout.                                                     |
| Refund / metode pembayaran lain        |                                    Mengikuti gateway | Pass-through; dikonfirmasi sebelum aktivasi.                                                                      |

### Rincian biaya Cloudflare untuk V1

Rekomendasi production adalah satu akun Cloudflare milik klinik dengan **Workers Paid**. Biaya minimum adalah **US$5 per bulan per akun**; bukan US$5 untuk setiap subdomain, Worker, atau database. Nilai Rupiah pada tagihan bergantung kurs kartu/bank dan pajak, sehingga quotation memakai US$5 sebagai nilai sumber serta Rp100.000/bulan hanya sebagai buffer anggaran.

| Layanan Cloudflare               |                                   Biaya V1 | Yang didapat / batas sebelum overage                                                                                                                                      | Dipakai untuk                                                                             |
| -------------------------------- | -----------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| DNS, SSL/TLS, CDN dasar          |                                       US$0 | Domain dan subdomain `www`/`admin` di zone yang sama                                                                                                                      | `doktermetabolik.id`, `www`, `admin`. Tidak ada biaya Hostinger tambahan untuk subdomain. |
| Workers Paid                     |                     **minimum US$5/bulan** | 10 juta request dan 30 juta CPU-ms/bulan termasuk; request di atasnya US$0,30 per juta dan CPU di atasnya US$0,02 per juta CPU-ms                                         | SvelteKit website, dashboard, API, webhook Meta/Midtrans.                                 |
| D1 database                      |               US$0 tambahan pada volume V1 | Pada Workers Paid: 25 miliar row read/bulan, 50 juta row write/bulan, dan 5 GB storage termasuk; setelahnya read US$0,001/juta, write US$1/juta, storage US$0,75/GB-bulan | Booking, slot hold, content CMS, audit log, payment event.                                |
| R2 object storage                |                       Umumnya US$0 pada V1 | 10 GB storage, 1 juta Class A, 10 juta Class B operation/bulan gratis; setelahnya storage US$0,015/GB-bulan. Egress internet gratis.                                      | Foto Dokter Oscar dan gambar artikel.                                                     |
| Workers Logs                     |                        US$0 pada volume V1 | 20 juta log event/bulan dan 7 hari retention termasuk; setelahnya US$0,60 per juta event                                                                                  | Error dan security log tanpa data pasien/secret.                                          |
| Turnstile                        |                                       US$0 | Free: hingga 20 widget dan challenge tak terbatas; server wajib memvalidasi token                                                                                         | Form booking web dan form publik.                                                         |
| Cloudflare Access                | US$0 yang diharapkan untuk tim admin kecil | Gunakan Zero Trust Free/allowlist email; konfirmasi entitlement akun saat onboarding                                                                                      | Proteksi `admin.doktermetabolik.id`.                                                      |
| WAF custom rules + AI bot policy |                               US$0 pada V1 | Free zone: 5 custom rule dan 1 rate-limit rule; block AI bot policy tersedia untuk semua customer                                                                         | Blok admin API di public hostname, AI crawler, dan abuse dasar.                           |

Cloudflare Workers Paid memberi minimum US$5/bulan, dengan 10 juta request/bulan dan 30 juta CPU-ms sebelum overage. [Harga Workers](https://developers.cloudflare.com/workers/platform/pricing/)

D1 tidak mempunyai biaya compute saat database diam; pada Workers Paid, kuota termasuknya jauh di atas kebutuhan booking klinik V1. [Harga D1](https://developers.cloudflare.com/d1/platform/pricing/)

R2 memberi 10 GB free tier dan tidak mengenakan egress internet; Workers Logs serta Turnstile juga memiliki kuota gratis yang cukup untuk V1. [Harga R2](https://developers.cloudflare.com/r2/pricing/) [Workers Logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/) [Paket Turnstile](https://developers.cloudflare.com/turnstile/plans/)

### Contoh tagihan Cloudflare

| Skenario                                                            | Perkiraan penggunaan                                                |                              Estimasi biaya Cloudflare |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | -----------------------------------------------------: |
| Pilot: 100 booking/bulan, 5.000 kunjungan website, <2 GB gambar     | Jauh di bawah semua kuota yang termasuk                             |                                         **US$5/bulan** |
| V1 aktif: 500 booking/bulan, 30.000 kunjungan website, <5 GB gambar | Jauh di bawah 10 juta Worker request dan 5 GB D1                    |                                         **US$5/bulan** |
| Traffic besar                                                       | Lebih dari 10 juta dynamic Worker request atau 30 juta CPU-ms/bulan |                    US$5 + overage Workers yang terukur |
| Media besar                                                         | Lebih dari 10 GB R2                                                 | US$5 + US$0,015 per GB-bulan storage di atas free tier |

Skenario ini tidak memasukkan Meta/WhatsApp, Midtrans, perpanjangan domain Hostinger, SMS/email, maupun support developer. Buat billing alert dan CPU limit pada Cloudflare sejak awal agar bug atau serangan tidak menciptakan tagihan yang tidak terduga.

Untuk pembayaran QRIS, Midtrans menyatakan MDR untuk merchant reguler adalah 0,7% per transaksi sukses. Konfirmasikan kembali saat onboarding karena klasifikasi merchant dan kebijakan gateway dapat memengaruhi biaya. [Dokumentasi biaya QRIS Midtrans](https://docs.midtrans.com/docs/berapa-biaya-transaksi-untuk-qris)

Untuk WhatsApp, gunakan biaya vendor sebagai _pass-through_ pada invoice bulanan, bukan angka tetap dalam quotation. Kebijakan WhatsApp mewajibkan template yang disetujui untuk percakapan yang dimulai bisnis dan mewajibkan jalur eskalasi manusia; rate card dan kategori template perlu dikonfirmasi pada akun Meta/BSP klien saat setup. [Kebijakan WhatsApp Business](https://business.whatsapp.com/policy/preview?lang=id_ID)

### Contoh proyeksi volume

Jika biaya konsultasi Rp300.000 dan terdapat 100 booking QRIS sukses per bulan:

- Nilai pembayaran: Rp30.000.000.
- Estimasi MDR QRIS 0,7%: Rp210.000.
- Hosting/support/biaya WhatsApp ditambahkan sesuai vendor dan paket yang dipilih.

Contoh ini hanya menunjukkan struktur biaya, bukan perkiraan pendapatan atau biaya total Meta.

## Pembayaran proyek

- 30% — discovery selesai dan proyek dimulai: **Rp11.850.000**.
- 40% — flow booking dan integrasi sandbox siap diuji: **Rp15.800.000**.
- 20% — user acceptance test selesai: **Rp7.900.000**.
- 10% — production go-live dan handover: **Rp3.950.000**.

Template Meta/WhatsApp dan aktivasi merchant payment gateway bergantung pada proses pihak ketiga; penundaan persetujuan vendor tidak mengubah ruang lingkup, tetapi dapat menggeser tanggal go-live.

## Pertanyaan yang harus ditanyakan kepada klien

Kirim daftar berikut sebelum menyampaikan harga final. Jawaban dapat diberikan singkat dalam format bernomor.

### A. Tujuan dan prioritas

1. Apa tujuan utama chatbot pada tiga bulan pertama: mengurangi admin manual, menaikkan booking, mengurangi no-show, atau lainnya?
2. Berapa perkiraan chat, booking, dan konsultasi per bulan saat peluncuran dan enam bulan setelahnya?
3. Apa yang harus dilakukan chatbot pada fase MVP, dan apa yang secara tegas ditunda ke fase berikutnya?
4. Apa indikator proyek dianggap berhasil: contoh, 90% booking selesai tanpa bantuan admin atau no-show turun 20%?

### B. Layanan Dokter Oscar dan jadwal

5. Apa nama lengkap, gelar/kredensial yang disetujui, bio singkat, foto, dan fokus layanan Dokter Oscar?
6. Jenis konsultasi apa yang dapat dibooking: online, tatap muka, atau keduanya? Berapa durasi dan harga tiap jenis?
7. Pada platform apa konsultasi online dilakukan, atau di mana alamat praktiknya?
8. Siapa yang mengelola kalender? Apakah jadwal sudah ada di Google Calendar/sistem lain atau perlu dibuat dari awal?
9. Berapa slot per hari, buffer antar pasien, hari libur, dan batas waktu pasien boleh booking atau reschedule?
10. Apakah akan ada dokter, cabang, atau jenis layanan tambahan dalam 12 bulan ke depan?

### C. Pendaftaran dan data pasien

11. Siapa yang boleh mendaftar: pasien sendiri, orang tua/wali, atau keduanya?
12. Data minimum apa yang wajib dikumpulkan dan alasan bisnis/klinisnya? Pilih hanya data yang benar-benar diperlukan.
13. Apakah email wajib? Apakah perlu kontak darurat, domisili, atau keluhan awal?
14. Di mana data pasien akan disimpan, siapa yang boleh mengaksesnya, dan berapa lama data disimpan?
15. Apakah Kebijakan Privasi, syarat layanan, consent, dan kebijakan medis sudah tersedia serta ditinjau pihak berwenang?

### D. Pembayaran dan kebijakan booking

16. Berapa harga final, apakah pajak/biaya admin dibebankan pasien, dan apakah ada diskon atau kode promo?
17. Metode pembayaran MVP yang wajib: QRIS, virtual account, kartu, e-wallet, atau lainnya?
18. Apakah akun Midtrans/payment gateway dan rekening settlement sudah ada? Siapa pemilik serta approver akun tersebut?
19. Berapa lama slot ditahan untuk pembayaran? Dokumen flow saat ini menggunakan 60 menit—apakah disetujui?
20. Apa aturan cancel, reschedule, refund, no-show, dan siapa yang berhak menyetujui refund?

### E. Operasional WhatsApp dan admin

21. Nomor WhatsApp bisnis mana yang dipakai? Apakah nomor tersebut masih dipakai WhatsApp biasa?
22. Apakah Meta Business Portfolio/WhatsApp Business Account sudah ada? Siapa admin yang memberi akses?
23. Siapa agent manusia yang menerima handoff, pada jam berapa, dan berapa target waktu responsnya?
24. Apa yang harus bot lakukan di luar jam layanan? Misalnya: menerima booking, menjanjikan balasan, atau hanya menampilkan info.
25. Siapa yang menyetujui salinan pesan dan template WhatsApp: opening, OTP, reminder, konfirmasi, pembatalan, dan pesan darurat?
26. Bagaimana pasien memberi opt-in untuk reminder WhatsApp, dan bagaimana mereka berhenti menerima reminder?

### F. Teknis, keamanan, dan peluncuran

27. Apakah sudah ada website, repository, hosting, domain, database, API, atau developer internal yang harus diintegrasikan?
28. Siapa pemilik akun cloud, Meta, payment gateway, domain, dan source code? Sebaiknya semua akun vendor dimiliki klinik.
29. Apakah ada standar keamanan, audit, atau kewajiban hukum khusus yang harus dipenuhi?
30. Siapa product owner yang berwenang memberi keputusan dan menerima hasil UAT?
31. Kapan target soft launch dan go-live? Adakah kampanye/promosi yang tanggalnya tidak boleh mundur?

## Kondisi penerimaan MVP

MVP dapat diterima apabila pasien uji dapat memilih slot yang tersedia, slot tidak dapat dipesan ganda, menyelesaikan verifikasi dan registrasi, menerima checkout, lalu memperoleh konfirmasi booking hanya setelah webhook pembayaran valid. Admin harus dapat menerima handoff, dan semua alur gagal penting—OTP salah, pembayaran gagal, pembayaran kedaluwarsa, hold habis, dan webhook duplikat—harus teruji.
