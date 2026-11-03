import { WorkflowStage } from '../types';

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: 'Tahap 1',
    number: '01',
    title: 'Konsultasi Teknis & Audit Kebutuhan',
    subtitle: 'Memahami karakter bahan baku, kapasitas target, dan kondisi fasilitas Anda',
    description: 'Kami tidak menjual mesin cetak massal yang kaku. Engineer kami berdiskusi langsung mengenai karakteristik produk Anda (viskositas, kadar air, bulk density), target throughput (kg/jam atau botol/menit), keterbatasan daya listrik pabrik, serta regulasi higienitas (BPOM/Halal).',
    duration: '1 - 3 Hari Kerja',
    deliverables: [
      'Lembar Spesifikasi Kebutuhan Teknis (Design Brief)',
      'Rekomendasi Kapasitas & Dimensi Optimal',
      'Estimasi Anggaran Investasi & Jadwal Fabrikasi Awal'
    ],
    keyActivities: [
      'Pemeriksaan fisik sampel bahan mentah pelanggan',
      'Audit ruang penempatan mesin dan instalasi listrik workshop',
      'Penentuan material kontak (SS304 food-grade, SS316 anti-asam, atau baja)',
      'Analisis tingkat otomatisasi sesuai anggaran dan kesiapan operator'
    ],
    toolsUsed: ['TDS Checklist', 'Viskometer & Refraktometer', 'Power Audit Clamp Meter']
  },
  {
    step: 'Tahap 2',
    number: '02',
    title: 'Desain Rekayasa CAD 3D & Simulasi',
    subtitle: 'Pemodelan digital presisi sebelum satu batang besi dipotong',
    description: 'Tim drafter dan mekanikal engineer Pusat Mesin Jogya merancang mesin dalam model 3D CAD parametrik. Kami menghitung torsi gearbox, kekuatan struktur rangka dengan simulasi Finite Element Analysis (FEA), dan layout ergonomis agar mudah dioperasikan dan dibersihkan.',
    duration: '3 - 7 Hari Kerja',
    deliverables: [
      'Model 3D Assembly Interaktif (dapat direview bersama)',
      'Gambar Kerja 2D (Orthographic Workshop Blueprint)',
      'Diagram Kelistrikan & Skema Wiring Standar PUIL',
      'Bill of Materials (BOM) & Spesifikasi Komponen Penggerak'
    ],
    keyActivities: [
      'Perhitungan rasio transmisi pulley, rantai, dan roda gigi',
      'Simulasi titik beban dan ketebalan plat silinder',
      'Desain alur pengoperasian ergonomis dan sanitasi CIP (Clean-in-Place)',
      'Review dan persetujuan (approval sign-off) bersama pelanggan'
    ],
    toolsUsed: ['SolidWorks 3D', 'AutoCAD Mechanical', 'Autodesk Inventor FEA']
  },
  {
    step: 'Tahap 3',
    number: '03',
    title: 'Fabrikasi Presisi & Machining',
    subtitle: 'Pengerjaan logam dengan toleransi ketat di bengkel Yogyakarta kami',
    description: 'Proses manufaktur berlangsung di workshop kami menggunakan mesin bubut, milling, rolling plat tebal, dan pengelasan profesional. Setiap poros dibubut dengan toleransi runout ketat, dan setiap sambungan stainless steel di-weld dengan gas argon TIG full sanitary dan dipoles halus.',
    duration: '10 - 25 Hari Kerja',
    deliverables: [
      'Komponen Mekanik Presisi Berstandar ISO Toleransi',
      'Tabung/Tangki Berjaket Uji Tekanan (Hydrostatic Test)',
      'Panel Kontrol Listrik Rapi dengan Komponen Industri Berkualitas',
      'Laporan Inspeksi Dimensi Antara (In-Process QC Log)'
    ],
    keyActivities: [
      'Pembubutan poros dan rumah bearing dengan presisi toleransi ±0.02 mm',
      'Pengelasan Argon TIG food-grade tanpa celah penumpuk bakteri',
      'Finishing permukaan: Mirror Polished, Hairline, atau Powder Coating',
      'Pemasangan komponen pneumatik Festo / Airtac dan bearing SKF/NSK'
    ],
    toolsUsed: ['Mesin Bubut Presisi', 'Milling Turret', 'Argon TIG Welder', 'Micrometer Mitutoyo']
  },
  {
    step: 'Tahap 4',
    number: '04',
    title: 'Uji Coba (FAT), Pelatihan & Mesin Siap Pakai',
    subtitle: 'Mesin dites dengan bahan nyata hingga siap produksi langsung (Plug-and-Produce)',
    description: 'Kami tidak melepas mesin tanpa Factory Acceptance Testing (FAT). Anda diundang ke bengkel untuk menguji mesin dengan bahan baku Anda selama 4-8 jam kontinu. Setelah lulus uji, mesin dikirim, diinstalasi di lokasi, operator dilatih, dan dilindungi garansi 12 bulan penuh.',
    duration: '1 - 3 Hari Uji & Instalasi',
    deliverables: [
      'Berita Acara Uji Fungsi & Factory Acceptance Test (FAT)',
      'Buku Panduan Operasional & Perawatan (Manual Book Bahasa Indonesia)',
      'Sertifikat Garansi Resmi 12 Bulan Mekanikal & Kelistrikan',
      'Starter Kit Suku Cadang Kritis (Spare Part Kit) & Video Tutorial'
    ],
    keyActivities: [
      'Running test kontinu tanpa beban & dengan beban material asli',
      'Kalibrasi temperatur PID, akurasi timbang/takaran, dan getaran sasis',
      'Pelatihan teknis pengoperasian dan SOP keselamatan bagi operator',
      'Pengiriman aman dengan packing palet kayu kokoh ke seluruh Indonesia'
    ],
    toolsUsed: ['Tachometer Laser', 'Thermal Imager FLIR', 'Vibration Analyzer', 'Beban Uji']
  }
];
