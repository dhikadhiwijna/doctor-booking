# Dokter Metabolik

Situs publikasi artikel tentang kesehatan metabolik dan pola hidup sehat.

## Menjalankan proyek

```sh
npm install
npm run dev
```

Gunakan `npm run check` untuk pemeriksaan Svelte dan `npm run build` untuk membuat build produksi.

## Prinsip implementasi

- **Mobile-first:** mulai dari layar kecil; tingkatkan layout dengan breakpoint `sm`, `md`, dan `lg` hanya saat konten membutuhkannya.
- **SEO-friendly:** tiap rute publik memiliki judul, deskripsi, dan canonical URL; metadata global ada di [src/app.html](./src/app.html).
- **Rute yang dapat dibagikan:** gunakan `/articles`, `/topics`, `/about`, dan `/contact`, bukan anchor hash sebagai navigasi utama.
- **Komponen:** gunakan shadcn-svelte untuk primitives, Lucide untuk ikon, dan ikuti panduan [typography](./documents/typography.md).
- **Aksesibilitas:** sediakan nama untuk action icon, gunakan HTML semantik, dan hormati `prefers-reduced-motion`.

## Struktur

- [src/features/home/](./src/features/home/) berisi komposisi dan komponen khusus beranda.
- [src/lib/components/](./src/lib/components/) berisi header, footer, dan template editorial yang dibagikan lintas rute.
- [src/routes/](./src/routes/) hanya mengomposisi halaman dan metadata rute.
