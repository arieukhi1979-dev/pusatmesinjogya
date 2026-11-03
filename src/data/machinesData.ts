import { MachineItem } from '../types';

export const MACHINES_CATALOG: MachineItem[] = [
  {
    id: 'pmj-lathe-6240',
    name: 'Mesin Bubut Logam Presisi PMJ-L6240',
    category: 'perkakas',
    categoryLabel: 'Mesin Perkakas',
    shortDesc: 'Mesin bubut konvensional heavy duty dengan digital readout (DRO) 2-axis untuk workshop permesinan presisi.',
    longDesc: 'Didesain khusus untuk bengkel manufaktur logam, rekondisi komponen mesin, dan produksi massal part silindris. Dilengkapi bed induction hardened, spindle bore 52 mm, dan opsi Digital Readout 2-Axis presisi 0.005 mm.',
    targetIndustry: 'Bengkel Bubut, Industri Rekondisi Otomotif, Workshop Maintenance Pabrik',
    specs: {
      capacity: 'Swing over bed 400 mm, Panjang benda kerja 1.000 mm',
      power: '3.0 kW (4.0 HP), 3 Phase 380V / 50 Hz',
      dimensions: '1.920 x 760 x 1.420 mm',
      material: 'Baja Cor Cast Iron Meehanite Hardened Bed',
      weight: '1.450 kg',
      controlSystem: 'Manual dengan 2-Axis Digital Readout (DRO)',
      precision: '± 0.01 mm Runout Spindle'
    },
    features: [
      'Bed guide-way dilapisi induction hardened & precision ground',
      'Spindle bore lebar 52 mm dengan taper MT6',
      'Sistem pendingin coolant terintegrasi dengan pompa sirkulasi',
      'Rem kaki darurat (mechanical foot brake) respon instan',
      'Sudah termasuk 3-jaw chuck, 4-jaw chuck, and steady rest'
    ],
    leadTime: 'Siap Kirim / Ready Stock (Uji coba di workshop Yogyakarta)',
    warranty: '12 Bulan Garansi Mekanikal + Sparepart Terjamin',
    suitability: ['Pembubutan Poros Shaft', 'Pembuatan Ulir Metrik & Inci', 'Facing & Bor Presisi'],
    blueprintType: 'lathe'
  },
  {
    id: 'pmj-milling-uni',
    name: 'Mesin Milling & Frais Universal PMJ-M40',
    category: 'perkakas',
    categoryLabel: 'Mesin Perkakas',
    shortDesc: 'Mesin milling turret universal untuk pembuatan gear, alur pasak, bidang datar presisi, dan mold maker.',
    longDesc: 'Solusi mesin perkakas serbaguna dengan kepala milling yang dapat dimiringkan hingga 45° dan meja kerja fleksibel dengan power feed otomatis 3-axis. Cocok untuk prototyping dan produksi cetakan matras logam.',
    targetIndustry: 'Fabrikasi Presisi, Pembuat Cetakan Matras (Moulding), Divisi Tooling',
    specs: {
      capacity: 'Ukuran Meja: 1.270 x 254 mm, Travel X/Y/Z: 750/300/400 mm',
      power: '2.2 kW (3.0 HP), 3 Phase 380V',
      dimensions: '1.650 x 1.450 x 2.100 mm',
      material: 'Struktur Cast Iron FC-30 berkekuatan tinggi',
      weight: '1.200 kg',
      controlSystem: '3-Axis Power Feed + Digital DRO 3-Axis',
      precision: '± 0.015 mm Reposisi'
    },
    features: [
      'Kepala spindle putar 360° horizontal dan 45° vertikal tilt',
      'Gearbox transmisi kecepatan putaran 16 tingkat',
      'Sistem pelumasan rel otomatis (Central Lubrication Pump)',
      'Lampu kerja LED industri anti-getar dan sistem drainase coolant'
    ],
    leadTime: 'Ready Stock / Uji Fungsi di Workshop',
    warranty: '12 Bulan Garansi Mekanikal',
    suitability: ['Pengefraisan Alur Gigi/Gear', 'Pembuatan Slot Pasak', 'Perataan Permukaan Blok Mesin'],
    blueprintType: 'lathe'
  },
  {
    id: 'pmj-ribbon-mixer',
    name: 'Mesin Ribbon Mixer Double Helix SS304',
    category: 'pangan',
    categoryLabel: 'Pengolahan Pangan',
    shortDesc: 'Mesin pencampur bubuk, tepung, bumbu kering, dan pakan secara homogen dengan bilah pita ganda stainless steel.',
    longDesc: 'Didesain khusus untuk industri makanan, farmasi herbal, dan bahan kimia bubuk di wilayah Jawa Tengah & DIY. Menggunakan bilah spiral ganda (inner & outer helix) yang menghasilkan percampuran homogen 99% tanpa merusak struktur bahan baku.',
    targetIndustry: 'Industri Kopi Sachet, Bumbu Tabur, Susu Bubuk, Pakan Khusus UMKM',
    specs: {
      capacity: 'Batch 100 kg / 200 Liter (Tersedia opsi 50 - 1.000 kg)',
      power: '3.7 kW (5.0 HP) Motor Induksi + Heavy Duty Worm Gearbox',
      dimensions: '1.450 x 680 x 1.350 mm',
      material: 'Full Stainless Steel SS304 Food-Grade Polished Mirror',
      weight: '320 kg',
      controlSystem: 'Panel Digital Timer Otomatis + Inverter Putaran Forward/Reverse',
      precision: 'Tingkat Homogenitas > 98.5%'
    },
    features: [
      'Pita double helix presisi dengan celah dinding tangki < 2 mm',
      'Katup pengeluaran bawah tipe pneumatik atau butterfly valve sanitary',
      'Penutup atas dilengkapi kisi keselamatan dan switch interlock darurat',
      'Penyegelan poros ganda (mechanical packing + PTFE seal) anti-kebocoran bubuk',
      'Mudah dibersihkan sesuai standar Good Manufacturing Practices (GMP/BPOM)'
    ],
    leadTime: '14 - 21 Hari Kerja (Fabrikasi Custom sesuai kapasitas)',
    warranty: '12 Bulan Garansi Mesin & Dukungan Sparepart Lokal',
    suitability: ['Pencampuran Tepung Premix', 'Formula Bumbu Masak Kering', 'Kopi & Minuman Serbuk Instan'],
    blueprintType: 'mixer'
  },
  {
    id: 'pmj-pasteurisasi',
    name: 'Mesin Pasteurisasi Double Jacket SS304/SS316',
    category: 'pangan',
    categoryLabel: 'Pengolahan Pangan',
    shortDesc: 'Mesin pemasak dan sterilisasi suhu terkontrol dengan jaket pemanas minyak/air dan pengaduk dinding scraping.',
    longDesc: 'Menjawab kebutuhan UMKM minuman di Yogyakarta dan sekitarnya untuk susu segar, sari buah, sirup gula kelapa, dan sari kedelai. Sistem pemanas tidak langsung (double-jacket) mencegah kegosongan bahan baku (non-caramelizing), menjaga nutrisi dan cita rasa alami.',
    targetIndustry: 'Sentra Susu Sapi, Produsen Sari Buah, Jenang & Selai, Minuman Herbal',
    specs: {
      capacity: '100 Liter per proses (Tersedia 50L, 150L, 300L)',
      power: 'Motor Pengaduk 0.75 kW + Elemen Pemanas Listrik 6 kW atau Kompor Gas LPG',
      dimensions: '900 x 850 x 1.400 mm',
      material: 'Stainless Steel SS304 Food Grade (Opsi SS316 Kontak Produk)',
      weight: '185 kg',
      controlSystem: 'Digital PID Temperature Controller + Termokopel Suhu Presisi',
      precision: 'Akurasi Suhu ± 1.0 °C'
    },
    features: [
      'Pengaduk tipe paddle dengan scraper teflon food grade pembersih dinding tabung',
      'Isolasi panas rockwool tebal untuk efisiensi energi dan keamanan operator',
      'Kran butterfly sanitary 1.5 inch mudah dibongkar pasang untuk sanitasi CIP',
      'Pilihan sumber panas: Burner LPG Otomatis atau Heater Listrik Thermostat'
    ],
    leadTime: '10 - 18 Hari Kerja',
    warranty: '12 Bulan Garansi & Pelatihan Pengoperasian di Lokasi',
    suitability: ['Pasteurisasi Susu Murni', 'Pengolahan Sari Apel & Sirup Buah', 'Pemasakan Jamu Tradisional'],
    blueprintType: 'mixer'
  },
  {
    id: 'pmj-hammer-mill',
    name: 'Mesin Hammer Mill Penepung Presisi PMJ-HM50',
    category: 'pertanian',
    categoryLabel: 'Agro & Pertanian',
    shortDesc: 'Mesin penepung multi-komoditas dengan pemukul baja tempa dan saringan mesh yang dapat diganti cepat.',
    longDesc: 'Dirancang untuk menepungkan aneka biji-bijian, jagung pakan ternak, rempah kering (jahe, kunyit), dan limbah cangkang. Menggunakan rotor hammer bermaterial baja tempa tahan abrasi dengan blower cyclone penarik debu halus.',
    targetIndustry: 'Pengolahan Rempah, Pabrik Pakan Ternak Mandiri, Pengolah Biji Kopi',
    specs: {
      capacity: '200 - 400 kg/jam (Tergantung mesh saringan)',
      power: '5.5 kW (7.5 HP) Motor Listrik atau Mesin Diesel Kubota 8.5 PK',
      dimensions: '1.250 x 850 x 1.550 mm',
      material: 'Rangka UNP 80 + Ruang Hantam Baja Hardox / SS304 Kontak Bahan',
      weight: '260 kg',
      controlSystem: 'Starter Star-Delta dengan Proteksi Overload Ampere',
      precision: 'Kehalusan Mesh 20 hingga Mesh 100'
    },
    features: [
      '24 bilah hammer baja tempa tahan benturan dan aus',
      'Sistem Cyclone separator pemisah debu tepung otomatis higienis',
      'Penggantian saringan tanpa kunci baut (quick-release clamping)',
      'Dilengkapi magnet trap pada corong input untuk menangkap kotoran logam'
    ],
    leadTime: '10 - 15 Hari Kerja',
    warranty: '12 Bulan Rangka & Mekanikal',
    suitability: ['Penepungan Biji Jagung', 'Penepungan Rimpang Jahe Kering', 'Pembuatan Dedak & Pakan Ternak'],
    blueprintType: 'mill'
  },
  {
    id: 'pmj-rotary-dryer',
    name: 'Rotary Dryer Mesin Pengering Berputar Otomatis',
    category: 'pertanian',
    categoryLabel: 'Agro & Pertanian',
    shortDesc: 'Mesin pengering kontinyu untuk gabah, biji kopi, pelet, dan serbuk kayu dengan pengatur suhu udara panas.',
    longDesc: 'Mengatasi kendala cuaca hujan bagi petani dan industri pengolahan hasil bumi. Tabung silinder berputar dengan sirip internal mengangkat bahan baku sehingga terpapar aliran udara panas secara merata tanpa membakar bahan.',
    targetIndustry: 'Koperasi Kopi, Penggilingan Padi, Industri Wood Pellet, Pupuk Organik',
    specs: {
      capacity: '500 kg - 1.500 kg per batch / 300 kg/jam kontinyu',
      power: 'Motor Gearbox 2.2 kW + Blower Tiup Udara Panas 1.5 kW',
      dimensions: '6.000 x 1.200 x 1.800 mm (Dapat disesuaikan luas pabrik)',
      material: 'Silinder Drum Baja SS400 Tebal 4 mm / Opsi Stainless Steel',
      weight: '980 kg',
      controlSystem: 'Digital Burner Controller + Variable Speed Inverter Drum',
      precision: 'Penurunan Kadar Air Presisi hingga 12% - 14%'
    },
    features: [
      'Tungku pemanas fleksibel: Bahan bakar Sekam Padi, Biomassa Kayu, atau Gas Burner',
      'Sirip pengangkat spiral ganda menjamin aliran bahan seragam',
      'Insulasi peredam panas ganda menghemat bahan bakar hingga 30%',
      'Sistem pembuangan uap air terarah dengan cyclone exhauster'
    ],
    leadTime: '21 - 30 Hari Kerja Fabrikasi & Instalasi',
    warranty: '12 Bulan + Pendampingan Komisioning Lapangan',
    suitability: ['Pengeringan Kopi Cherry & Green Bean', 'Pengeringan Gabah Padi', 'Pengeringan Pelet Ikan'],
    blueprintType: 'dryer'
  },
  {
    id: 'pmj-band-sealer',
    name: 'Continuous Band Sealer Mesin Segel Kantong Gas Flush',
    category: 'pengemasan',
    categoryLabel: 'Mesin Pengemasan',
    shortDesc: 'Mesin segel kemasan kontinyu horizontal/vertikal dengan pencetak tanggal kedaluwarsa dan injeksi nitrogen.',
    longDesc: 'Meningkatkan estetika dan masa simpan (shelf life) kemasan produk pangan UMKM. Mampu merekatkan kemasan aluminium foil, plastik standing pouch, dan zipper dengan segel panas kedap udara 10 mm kuat tanpa bocor.',
    targetIndustry: 'Industri Keripik & Snack, Biskuit, Kopi Bubuk Kemasan, Produk Beku',
    specs: {
      capacity: 'Kecepatan Sealing 0 - 12 meter/menit (Hingga 3.000 kantong/jam)',
      power: '650 Watt, 1 Phase 220V',
      dimensions: '880 x 420 x 550 mm',
      material: 'Bodi Full Stainless Steel SS304 Anti-Karat',
      weight: '38 kg',
      controlSystem: 'Digital Temperature Controller Omron + Speed Regulator',
      precision: 'Lebar Segel 10 - 12 mm Rapat Bergaris'
    },
    features: [
      'Dilengkapi modul Solid Ink Coding untuk mencetak Tanggal Produksi & Expired',
      'Opsional modul Gas Flushing (Injeksi Nitrogen makanan kembung)',
      'Konveyor konstan dengan beban tampung kantong hingga 5 kg',
      'Posisi kepala sealer dapat diubah horizontal atau vertikal'
    ],
    leadTime: 'Ready Stock / Uji Coba Gratis dengan Sampel Kemasan Pelanggan',
    warranty: '12 Bulan Garansi Servis & Suku Cadang Pemanas',
    suitability: ['Penyegelan Kemasan Keripik Singkong', 'Kemasan Aluminium Foil Kopi', 'Kantong Makanan Kering'],
    blueprintType: 'sealer'
  },
  {
    id: 'pmj-liquid-filler',
    name: 'Automatic Piston Liquid Filler 2-Nozzle SS316',
    category: 'pengemasan',
    categoryLabel: 'Mesin Pengemasan',
    shortDesc: 'Mesin pengisi cairan dan pasta presisi dengan sistem silinder pneumatik anti-tetes untuk botol dan jerigen.',
    longDesc: 'Dibuat untuk akurasi pengisian cairan encer hingga kental seperti minyak goreng, saus sambal, madu, shampoo, dan pupuk cair organik. Bagian kontak produk menggunakan baja antikarat SS316 standar farmasi dengan toleransi volume sangat presisi.',
    targetIndustry: 'Produsen Madu, Minyak Herbal, Saus & Pasta, Kosmetik Cair, Kimia Rumah Tangga',
    specs: {
      capacity: 'Rentang Pengisian: 50 ml - 1.000 ml (Speed 1.200 - 2.000 botol/jam)',
      power: 'Daya Listrik 100 Watt + Konsumsi Udara Kompresor 0.6 MPa',
      dimensions: '1.200 x 500 x 1.450 mm',
      material: 'Piston & Nozzle Full Stainless Steel SS316 Sanitary',
      weight: '95 kg',
      controlSystem: 'Pedal Manual & Siklus Otomatis dengan Sensor Proximity Botol',
      precision: 'Akurasi Pengisian ± 0.5%'
    },
    features: [
      'Nozzle pneumatik dengan sistem anti-drip (anti-menetes) dan penarik tetes sisa',
      'Volume pengisian mudah disesuaikan via mikrometer pengukur piston',
      'Hopper penampung 50 Liter dengan opsi pengaduk dan pemanas elektrik',
      'Koneksi pipa tri-clamp sanitary mudah dilepas untuk pencucian bersih'
    ],
    leadTime: '12 - 18 Hari Kerja',
    warranty: '12 Bulan Garansi Silinder & Seal Teflon Food Grade',
    suitability: ['Pengisian Minyak Atsiri & Madu', 'Pengisian Saus & Minuman Botol', 'Dosis Sabun Cair'],
    blueprintType: 'sealer'
  },
  {
    id: 'pmj-modular-conveyor',
    name: 'Sistem Konveyor Belt Modular Stainless Steel',
    category: 'otomasi',
    categoryLabel: 'Otomasi & Konveyor',
    shortDesc: 'Sistem transfer material modular untuk menghubungkan lini produksi antar-stasiun secara efisien dan higienis.',
    longDesc: 'Pusat Mesin Jogya merancang dan memfabrikasi konveyor custom sesuai denah lantai produksi pabrik Anda (L-shape, U-shape, lurus, atau incline naik). Menggunakan sabuk modular food-grade dan motor inverter pengatur kecepatan fleksibel.',
    targetIndustry: 'Lini Perakitan Elektronik, Sortir Buah, Transfer Kotak Gudang, Pabrik Roti',
    specs: {
      capacity: 'Beban Angkut 50 - 150 kg/meter (Panjang custom 2 - 25 meter)',
      power: 'Motor Gearbox Flange Mounted 0.75 - 1.5 kW + Inverter VFD',
      dimensions: 'Panjang 3.000 mm (Custom) x Lebar 400 mm x Tinggi 800 mm',
      material: 'Struktur Rangka SS304 / Aluminium Profil Industri 40x40',
      weight: 'Tergantung panjang bentang',
      controlSystem: 'Variable Frequency Drive (VFD) + Sensor Emergency Wire Stop',
      precision: 'Kecepatan Linear 2 - 25 meter/menit'
    },
    features: [
      'Sabuk PU (Polyurethane) Food Grade atau Rantai Modular Plastik Intralox',
      'Ketinggian kaki penyangga dilengkapi leveling pad dan roda putar dengan rem',
      'Pagar pembatas samping (guide rail) yang dapat disetel lebar lintasannya',
      'Dapat diintegrasikan langsung dengan mesin coding, labeler, atau timbangan'
    ],
    leadTime: '10 - 20 Hari Kerja (Survei Layout & Instalasi Lapangan)',
    warranty: '12 Bulan Rangka Mekanikal & Roll Bearing',
    suitability: ['Transfer Botol & Toples Antar Mesin', 'Lini Sortir & Pemeriksaan Mutu', 'Konveyor Pengemasan Karton'],
    blueprintType: 'conveyor'
  }
];
