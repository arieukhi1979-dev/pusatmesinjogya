/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useId } from 'react';
import {
  Wrench,
  Cog,
  FileText,
  Send,
  Phone,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
  Search,
  ExternalLink,
  Printer,
  Maximize2,
  Award,
  Factory,
  MessageSquare,
  Clock,
  Gauge,
  Sliders,
  ChevronDown,
  Hammer,
  DraftingCompass
} from 'lucide-react';

import ballPressImage from './assets/images/hydraulic_ball_press_machine_1793693229906.jpg';

// Contact & Business Constant
const BUSINESS_INFO = {
  name: 'Pusat Mesin Jogya',
  tagline: 'Machine Tools & Custom Machine Solutions',
  subtagline: 'From Consultation, Design & Fabrication to Ready-to-Use Machines',
  phone: '082230712778',
  waNumber: '6282230712778',
  address: 'Dusun Cungkuk Kidul RT 05 RW 17, Desa Margorejo, Tempel, Sleman, Yogyakarta',
  hours: 'Senin - Sabtu: 08.00 - 17.00 WIB (Minggu & Hari Libur via Janji Temu)',
  email: 'pusatmesinjogya@gmail.com'
};

// 4 Layanan Utama
interface ServiceStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  deliverables: string;
}

const MAIN_SERVICES: ServiceStep[] = [
  {
    number: '01',
    title: 'Consultation',
    subtitle: 'Konsultasi Kebutuhan & Spesifikasi',
    description: 'Konsultasi kebutuhan mesin, fungsi, kapasitas, spesifikasi teknis dan anggaran pelanggan secara menyeluruh.',
    details: [
      'Analisis karakter bahan baku atau material yang akan diproses',
      'Penentuan kapasitas target per jam/hari dan ritme operasional',
      'Audit kesiapan daya listrik, ruang workshop, dan fondasi mesin',
      'Penyusunan estimasi anggaran investasi yang efisien dan realistis'
    ],
    deliverables: 'Kerangka Acuan Kerja (KAK) & Rekomendasi Spesifikasi Awal'
  },
  {
    number: '02',
    title: 'Design & Engineering',
    subtitle: 'Perancangan Mesin & Simulasi CAD 3D',
    description: 'Perancangan mesin berdasarkan kebutuhan dan kondisi operasional pelanggan dengan akurasi gambar kerja teknik.',
    details: [
      'Pemodelan 3D mekanikal terperinci menggunakan software CAD modern',
      'Perhitungan rasio torsi, kekuatan daya motor, dan transmisi mekanik',
      'Simulasi titik beban dan ketebalan material rangka struktural',
      'Penyusunan gambar kerja 2D orthographic untuk proses machining'
    ],
    deliverables: 'Gambar Kerja 3D/2D CAD, Skema Elektrikal, dan Bill of Materials'
  },
  {
    number: '03',
    title: 'Fabrication',
    subtitle: 'Machining, Welding & Perakitan Presisi',
    description: 'Proses pemotongan presisi, machining, welding, assembly dan pembuatan komponen mesin di workshop Yogyakarta.',
    details: [
      'Pemotongan plat presisi, pembubutan poros, dan milling bidang datar',
      'Pengelasan struktural kokoh (MIG/Argon TIG) dan finishing halus',
      'Pemasangan komponen penggerak (diesel / motor listrik, gearbox, bearing)',
      'Perakitan kabel panel kontrol elektrik dengan proteksi standar PUIL'
    ],
    deliverables: 'Komponen Mesin Terfabrikasi Presisi & Perakitan Unit Utuh'
  },
  {
    number: '04',
    title: 'Testing & Delivery',
    subtitle: 'Uji Fungsi, Commissioning & Serah Terima',
    description: 'Pengujian fungsi, pemeriksaan hasil kerja dan penyerahan mesin siap digunakan langsung di fasilitas produksi Anda.',
    details: [
      'Running test kontinu tanpa beban dan dengan beban bahan material nyata',
      'Pengecekan getaran, suhu kerja bearing, dan kestabilan tekanan hidrolik',
      'Pelatihan pengoperasian, SOP keselamatan kerja, dan perawatan berkala',
      'Pengiriman aman, instalasi leveling di tempat, serta garansi purna jual'
    ],
    deliverables: 'Berita Acara FAT (Factory Acceptance Test), Buku Manual & Garansi'
  }
];

// Data Produk Unggulan: Hydraulic Ball Press Machine
const FEATURED_BALL_PRESS = {
  name: 'Hydraulic Ball Press Machine',
  subtitle: 'Mesin Press Hidrolik Pemadat Botol Plastik PET & Limbah Daur Ulang',
  image: ballPressImage,
  shortDesc: 'Mesin press hidrolik bertenaga tinggi yang dirancang khusus untuk memadatkan botol plastik PET, kardus, kaleng, dan limbah kemasan menjadi bal padat berdensitas tinggi untuk memudahkan transportasi dan penjualan daur ulang.',
  specs: [
    { label: 'Dimensi Mesin', value: '90 × 90 × 350 cm' },
    { label: 'Konstruksi Rangka', value: 'Baja UNP 10 Heavy Duty' },
    { label: 'Pipa Silinder', value: '2,5 inci Seamless High Pressure' },
    { label: 'Boom Hidrolis (Ukuran As)', value: 'As 80 mm (Hard Chrome Piston Rod)' },
    { label: 'Panjang Stroke (Struk)', value: '100 cm (1.000 mm Langkah Tekan)' },
    { label: 'Material Plat', value: 'Plat Hitam 8 mm' },
    { label: 'Sistem Penggerak', value: 'Mesin Diesel Dong Hai 16 PK' },
    { label: 'Sistem Tekan', value: 'Hidrolik Silinder Ganda / Tunggal Kapasitas 15-20 Ton' },
    { label: 'Output Bal Plastik', value: 'Ukuran Bal ± 80 × 80 × 90 cm, Bobot 60 - 100 kg/bal' },
    { label: 'Pintu Pengunci', value: 'Kait Pengunci Baja Manual Safety Lock Ganda' }
  ],
  advantages: [
    'Boom hidrolis dengan as tebal 80 mm tahan gaya lentur dan defleksi saat kompresi berat',
    'Panjang stroke (struk) 100 cm memberikan langkah kompresi penuh hingga ke dasar ruang tekan',
    'Rangka UNP 10 kokoh mampu menahan gaya reaksi tekan hidrolik ekstrem tanpa deformasi',
    'Ditenagai mesin diesel Dong Hai 16 PK yang bandel, hemat bahan bakar solar, dan mandiri tanpa ketergantungan listrik PLN',
    'Dinding ruang tekan plat hitam 8 mm tebal tahan benturan material keras',
    'Sistem pengikat kawat/tali bal dirancang cepat dikeluarkan (quick-eject)',
    'Cocok untuk pengepul botol plastik, TPS3R, bank sampah, dan pabrik daur ulang'
  ],
  note: 'Spesifikasi di atas merupakan data acuan awal yang dapat dikustomisasi (panjang stroke, dimensi ruang tekan, opsi motor listrik 3 phase) sesuai kebutuhan aktual operasional pelanggan.'
};

// Data Katalog Produk
interface ProductCatalogItem {
  id: string;
  name: string;
  category: 'press' | 'perkakas' | 'pangan' | 'pertanian' | 'otomasi';
  categoryLabel: string;
  shortDesc: string;
  image?: string;
  specs: { [key: string]: string };
  applications: string[];
  isFeatured?: boolean;
}

const CATALOG_ITEMS: ProductCatalogItem[] = [
  {
    id: 'ball-press',
    name: 'Hydraulic Ball Press Machine',
    category: 'press',
    categoryLabel: 'Mesin Press & Daur Ulang',
    image: ballPressImage,
    shortDesc: 'Mesin press hidrolik pemadat botol plastik PET, kaleng, dan kardus rangka UNP 10 penggerak Diesel Dong Hai 16 PK dengan boom hidrolis as 80 mm & stroke 100 cm.',
    specs: {
      'Dimensi': '90 × 90 × 350 cm',
      'Rangka Utama': 'UNP 10 Kokoh',
      'Pipa Silinder': '2,5 inci Seamless',
      'Boom Hidrolis (As)': 'Ukuran As 80 mm (Hard Chrome)',
      'Panjang Stroke (Struk)': '100 cm (1.000 mm)',
      'Plat Dinding': 'Plat Hitam 8 mm',
      'Penggerak': 'Diesel Dong Hai 16 PK',
      'Gaya Tekan': '15 - 20 Ton Hidrolik',
      'Siklus Tekan': '± 45 - 60 detik / siklus'
    },
    applications: ['Pemadatan Botol PET', 'Press Kardus & Kertas Bekas', 'Press Kaleng Minuman Aluminium', 'Bank Sampah & TPS3R'],
    isFeatured: true
  },
  {
    id: 'lathe-pmj',
    name: 'Mesin Bubut Logam Presisi PMJ-6240',
    category: 'perkakas',
    categoryLabel: 'Mesin Perkakas',
    shortDesc: 'Mesin bubut konvensional heavy duty dengan induction hardened bed dan opsi Digital Readout (DRO) 2-axis.',
    specs: {
      'Swing over bed': '400 mm',
      'Panjang Benda': '1.000 mm',
      'Spindle Bore': '52 mm',
      'Motor': '3.0 kW (4.0 HP), 3 Phase 380V',
      'Toleransi': '± 0.01 mm'
    },
    applications: ['Pembubutan Poros & As Mesin', 'Pembuatan Ulir Drat Presisi', 'Facing & Boring Komponen Logam'],
    isFeatured: false
  },
  {
    id: 'milling-pmj',
    name: 'Mesin Milling & Frais Universal Turret',
    category: 'perkakas',
    categoryLabel: 'Mesin Perkakas',
    shortDesc: 'Mesin frais universal untuk pembuatan gear roda gigi, alur pasak, dudukan bearing, dan pengerjaan matras cetakan.',
    specs: {
      'Ukuran Meja': '1.270 × 254 mm',
      'Travel X/Y/Z': '750 / 300 / 400 mm',
      'Power Motor': '2.2 kW (3.0 HP), 380V',
      'Fitur': 'Power Feed Otomatis + DRO Digital 3-Axis'
    },
    applications: ['Pembuatan Roda Gigi / Gear', 'Milling Alur Pasak Poros', 'Perataan Permukaan Blok Mesin'],
    isFeatured: false
  },
  {
    id: 'ribbon-mixer',
    name: 'Mesin Ribbon Mixer Double Helix SS304',
    category: 'pangan',
    categoryLabel: 'Pengolahan Pangan',
    shortDesc: 'Mesin pengaduk bubuk dan tepung kering dengan spiral pita ganda stainless steel food grade untuk pencampuran homogen.',
    specs: {
      'Kapasitas': '100 kg / batch (Tersedia 50 - 500 kg)',
      'Material Kontak': 'Stainless Steel SS304 Food Grade Polished',
      'Penggerak': 'Motor 3.7 kW + Gearbox Heavy Duty',
      'Waktu Aduk': '10 - 15 menit homogenitas 99%'
    },
    applications: ['Campuran Bumbu Tabur & Rempah', 'Kopi & Minuman Serbuk Instan', 'Tepung Premix Bakery'],
    isFeatured: false
  },
  {
    id: 'pasteurisasi',
    name: 'Mesin Pasteurisasi Double Jacket SS304',
    category: 'pangan',
    categoryLabel: 'Pengolahan Pangan',
    shortDesc: 'Mesin pemasak dan sterilisasi suhu terkontrol dengan jaket pemanas air/oli dan pengaduk dinding scraping higienis.',
    specs: {
      'Kapasitas': '100 Liter (Opsi 50L - 300L)',
      'Material': 'Full Stainless Steel SS304 / SS316',
      'Pemanas': 'Burner LPG Otomatis atau Heater Listrik PID',
      'Pengaduk': 'Paddle dengan Scraper Teflon Food Grade'
    },
    applications: ['Pasteurisasi Susu Segar', 'Pengolahan Sari Buah & Sirup', 'Pemasakan Jamu Herbal Tradisional'],
    isFeatured: false
  },
  {
    id: 'hammer-mill',
    name: 'Mesin Hammer Mill Penepung Presisi',
    category: 'pertanian',
    categoryLabel: 'Pertanian & Agro',
    shortDesc: 'Mesin penepung multi-komoditas dengan pemukul baja tempa dan saringan mesh yang dapat diganti cepat.',
    specs: {
      'Kapasitas': '200 - 400 kg/jam',
      'Penggerak': 'Motor Listrik 5.5 kW atau Diesel 8.5 PK',
      'Pemisah': 'Blower Cyclone Separator Higienis',
      'Kehalusan': 'Mesh 20 hingga Mesh 100'
    },
    applications: ['Penepungan Biji Jagung & Kopi', 'Rimpang Jahe & Kunyit Kering', 'Bahan Pakan Ternak Mandiri'],
    isFeatured: false
  },
  {
    id: 'conveyor-modular',
    name: 'Sistem Belt Conveyor Modular Pabrik',
    category: 'otomasi',
    categoryLabel: 'Otomasi & Konveyor',
    shortDesc: 'Konveyor transfer barang antar stasiun kerja dengan rangka stainless steel kokoh dan speed regulator inverter.',
    specs: {
      'Panjang & Lebar': 'Custom sesuai layout pabrik (3 - 15 meter)',
      'Sabuk': 'Food Grade PU Belt atau Plastik Modular Chain',
      'Motor': 'Gearmotor Flange + Variable Speed Inverter',
      'Rangka': 'SS304 atau Aluminium Profile Industri'
    },
    applications: ['Lini Pengemasan & Labelling', 'Transfer Botol Minuman', 'Sortir Produk Pergudangan'],
    isFeatured: false
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'products' | 'custom' | 'workshop' | 'job-order' | 'contact'>('home');
  const [productCategory, setProductCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductCatalogItem | null>(null);
  const [heroViewMode, setHeroViewMode] = useState<'photo' | 'cad'>('photo');

  // Job Order Form State
  const [jobOrder, setJobOrder] = useState({
    companyName: '',
    customerName: '',
    whatsapp: '',
    machineType: 'Hydraulic Ball Press Machine',
    machineFunction: 'Pemadatan botol plastik PET (Boom Hidrolis As 80 mm, Stroke 100 cm)',
    capacityTarget: '± 10 bal per jam (60-100 kg/bal)',
    dimensions: '90 × 90 × 350 cm',
    powerPreference: 'Diesel Dong Hai 16 PK',
    materialPreference: 'Baja UNP 10 + Plat 8 mm',
    referenceNotes: 'Boom hidrolis as 80 mm, panjang stroke 100 cm',
    additionalNotes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle WhatsApp Link Generator for Job Order
  const handleJobOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!jobOrder.customerName || !jobOrder.whatsapp) {
      alert('Mohon isi nama dan nomor WhatsApp Anda agar engineer kami dapat menghubungi kembali.');
      return;
    }

    const message = `Halo Pusat Mesin Jogya,\nSaya ingin mengajukan Permintaan Pembuatan Mesin (Job Order):\n\n` +
      `*Nama / Perusahaan:* ${jobOrder.customerName} ${jobOrder.companyName ? `(${jobOrder.companyName})` : ''}\n` +
      `*Nomor WhatsApp:* ${jobOrder.whatsapp}\n` +
      `*Jenis Mesin:* ${jobOrder.machineType}\n` +
      `*Fungsi Mesin:* ${jobOrder.machineFunction}\n` +
      `*Target Kapasitas:* ${jobOrder.capacityTarget}\n` +
      `*Estimasi Dimensi:* ${jobOrder.dimensions || 'Menyesuaikan rekomendasi teknis'}\n` +
      `*Preferensi Penggerak:* ${jobOrder.powerPreference}\n` +
      `*Preferensi Material:* ${jobOrder.materialPreference}\n` +
      `*Catatan / Referensi:* ${jobOrder.referenceNotes || '-'}\n` +
      `*Keterangan Tambahan:* ${jobOrder.additionalNotes || '-'}\n\n` +
      `Mohon informasi estimasi desain, biaya fabrikasi, dan jadwal konsultasi teknisnya. Terima kasih!`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${BUSINESS_INFO.waNumber}?text=${encodedMsg}`;

    setFormSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Filter Catalog
  const filteredProducts = productCategory === 'all'
    ? CATALOG_ITEMS
    : CATALOG_ITEMS.filter(item => item.category === productCategory);

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* =========================================================================
          TOP NAVIGATION BAR (Strict 3-zone Top Bar Contract per Constitution)
          Zone 1: Brand title, one line
          Zone 2: Single-line clean text navigation links
          Zone 3: 1 Primary CTA Button
      ========================================================================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0f1d]/90 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <div 
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 cursor-pointer select-none group shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              <Cog className="w-5 h-5 animate-[spin_12s_linear_infinite]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
                PUSAT MESIN JOGYA
              </span>
              <span className="text-[11px] font-mono tracking-wider text-amber-400/90 uppercase whitespace-nowrap hidden sm:block">
                Machine Tools & Custom Machine
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => setActiveTab('home')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${activeTab === 'home' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-300'}`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${activeTab === 'about' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-300'}`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${activeTab === 'products' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-300'}`}
            >
              Our Products
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${activeTab === 'custom' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-300'}`}
            >
              Custom Machine
            </button>
            <button
              onClick={() => setActiveTab('workshop')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${activeTab === 'workshop' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-300'}`}
            >
              Our Workshop
            </button>
            <button
              onClick={() => setActiveTab('job-order')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${activeTab === 'job-order' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-300'}`}
            >
              Job Order
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${activeTab === 'contact' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-300'}`}
            >
              Contact Us
            </button>
          </nav>

          {/* Zone 3: 1 Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => { setActiveTab('job-order'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-md transition-all flex items-center gap-2 shadow-lg shadow-amber-500/10 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Pesan Mesin (Job Order)</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Strip */}
        <div className="lg:hidden flex items-center overflow-x-auto px-4 py-2 bg-slate-900/90 border-t border-slate-800 text-xs gap-4 scrollbar-none">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About Us' },
            { id: 'products', label: 'Products' },
            { id: 'custom', label: 'Custom' },
            { id: 'workshop', label: 'Workshop' },
            { id: 'job-order', label: 'Job Order' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`whitespace-nowrap px-2.5 py-1 rounded transition-colors ${
                activeTab === item.id ? 'bg-amber-500/20 text-amber-400 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* =========================================================================
          MAIN ROUTING CONTAINER
      ========================================================================= */}
      <main className="flex-1">

        {/* =====================================================================
            PAGE: HOME
        ===================================================================== */}
        {activeTab === 'home' && (
          <div>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-800 bg-blueprint">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Proposition */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400">
                      <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                      YOGYAKARTA PRECISION MACHINE ENGINEERING
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
                      Solusi Mesin Perkakas & Pembuatan Mesin Berdasarkan Kebutuhan Anda
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                      Pusat Mesin Jogya menghadirkan solusi mesin perkakas presisi dan fabrikasi mesin custom terpercaya. 
                      Mulai dari <span className="text-amber-400 font-semibold">konsultasi teknis</span>, <span className="text-amber-400 font-semibold">perancangan desain CAD 3D</span>, <span className="text-amber-400 font-semibold">fabrikasi & perakitan</span>, hingga mesin siap digunakan di fasilitas produksi Anda.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button
                        onClick={() => setActiveTab('job-order')}
                        className="px-6 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                      >
                        <Wrench className="w-4 h-4" />
                        <span>Mulai Rancang Mesin (Job Order)</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>

                      <button
                        onClick={() => setActiveTab('products')}
                        className="px-6 py-3 text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700 rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        <span>Lihat Katalog Mesin</span>
                      </button>
                    </div>

                    {/* Regional Trust Marker */}
                    <div className="pt-4 flex items-center gap-3 text-xs text-slate-400 border-t border-slate-800/80">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Workshop & Fabrikasi: Tempel, Sleman, D.I. Yogyakarta · Melayani Seluruh Indonesia</span>
                    </div>
                  </div>

                  {/* Right Column: Marquee Showcase Card (Hydraulic Ball Press Machine) */}
                  <div className="lg:col-span-5">
                    <div className="bg-slate-900/90 border border-slate-700 rounded-xl p-6 relative overflow-hidden shadow-2xl">
                      {/* Top technical kicker */}
                      {/* Top technical kicker & View Toggle */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                        <span className="font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          PRODUK UNGGULAN FABRIKASI
                        </span>
                        
                        {/* Toggle Photo vs CAD */}
                        <div className="flex items-center p-0.5 bg-slate-950 rounded border border-slate-800 text-[11px] font-mono">
                          <button
                            onClick={() => setHeroViewMode('photo')}
                            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${heroViewMode === 'photo' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                          >
                            Foto Mesin
                          </button>
                          <button
                            onClick={() => setHeroViewMode('cad')}
                            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${heroViewMode === 'cad' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                          >
                            Skema CAD
                          </button>
                        </div>
                      </div>

                      {/* Visual Container: Actual Photo or CAD Schematic */}
                      {heroViewMode === 'photo' ? (
                        <div className="my-4 relative rounded-lg overflow-hidden border border-slate-700 bg-slate-950 group shadow-lg">
                          <img
                            src={FEATURED_BALL_PRESS.image}
                            alt="Mesin Hydraulic Ball Press Pusat Mesin Jogya"
                            className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                          {/* Key Technical Callout Overlays */}
                          <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur border border-amber-500/50 text-[11px] font-mono text-amber-300 shadow-md flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                            <span>Boom Hidrolis: <strong>As 80 mm · Stroke 100 cm</strong></span>
                          </div>

                          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/85 backdrop-blur border border-slate-700 text-[10px] font-mono text-slate-300 shadow-md">
                            Rangka UNP 10 · Plat 8 mm
                          </div>

                          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-amber-500/90 text-slate-950 text-[10px] font-mono font-bold shadow-md">
                            Diesel Dong Hai 16 PK
                          </div>
                        </div>
                      ) : (
                        <div className="my-4 p-4 bg-[#070b14] rounded-lg border border-slate-800 flex flex-col items-center justify-center relative">
                          {/* Schematic Technical SVG Illustration of Hydraulic Ball Press */}
                          <svg viewBox="0 0 360 260" className="w-full h-64 text-amber-400" fill="none" stroke="currentColor">
                            {/* Outer structural UNP frame */}
                            <rect x="70" y="30" width="220" height="200" strokeWidth="2.5" className="stroke-slate-500" rx="2" />
                            <rect x="85" y="45" width="190" height="170" strokeWidth="1.5" className="stroke-slate-700" strokeDasharray="3 3" />
                            
                            {/* Upper hydraulic cylinder housing */}
                            <rect x="150" y="15" width="60" height="40" strokeWidth="2" className="stroke-amber-400 fill-amber-500/10" />
                            
                            {/* Cylinder piston rod (As 80 mm) */}
                            <rect x="168" y="55" width="24" height="45" strokeWidth="2" className="stroke-amber-300 fill-amber-400/30" />
                            <text x="200" y="75" fill="#f59e0b" fontSize="8" fontFamily="monospace" fontWeight="bold">As 80 mm</text>
                            
                            {/* Hydraulic ram pressing plate */}
                            <rect x="100" y="100" width="160" height="20" strokeWidth="2" className="stroke-amber-400 fill-amber-500/30" />
                            
                            {/* Press chamber with PET bottle icons */}
                            <rect x="95" y="125" width="170" height="85" strokeWidth="1.5" className="stroke-slate-600 fill-slate-900/50" />
                            <path d="M120 160 Q130 150 140 160 T160 160" strokeWidth="1.5" className="stroke-amber-400/80" />
                            <path d="M170 170 Q185 155 200 170 T230 170" strokeWidth="1.5" className="stroke-amber-400/80" />
                            <path d="M110 185 Q135 175 160 185 T220 185" strokeWidth="1.5" className="stroke-amber-400/80" />
                            
                            {/* Base platform */}
                            <rect x="50" y="230" width="260" height="14" strokeWidth="2" className="stroke-slate-400 fill-slate-800" />
                            
                            {/* Dimension indicators */}
                            <line x1="45" y1="30" x2="45" y2="230" strokeWidth="1" className="stroke-amber-400/60" strokeDasharray="2 2" />
                            <text x="25" y="135" fill="#f59e0b" fontSize="9" fontFamily="monospace" transform="rotate(-90 25,135)">Tinggi 350 cm</text>
                            
                            {/* Stroke length indicator */}
                            <line x1="130" y1="20" x2="130" y2="120" strokeWidth="1.5" className="stroke-cyan-400" />
                            <text x="125" y="70" fill="#38bdf8" fontSize="7.5" fontFamily="monospace" transform="rotate(-90 125,70)" textAnchor="middle">Stroke 100 cm</text>
                            
                            <line x1="70" y1="250" x2="290" y2="250" strokeWidth="1" className="stroke-amber-400/60" strokeDasharray="2 2" />
                            <text x="165" y="258" fill="#f59e0b" fontSize="9" fontFamily="monospace" textAnchor="middle">90 × 90 cm</text>
                            
                            {/* Diesel Dong Hai Engine Badge */}
                            <rect x="235" y="175" width="90" height="40" strokeWidth="1.5" className="stroke-cyan-400 fill-slate-950" rx="3" />
                            <text x="280" y="193" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DIESEL DONG HAI</text>
                            <text x="280" y="206" fill="#94a3b8" fontSize="7.5" fontFamily="monospace" textAnchor="middle">16 PK Solar</text>
                          </svg>

                          <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">
                            15-20 TON TEKAN
                          </div>
                        </div>
                      )}

                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-base font-bold text-white">
                            {FEATURED_BALL_PRESS.name}
                          </h3>
                          <span className="text-xs font-mono text-amber-400 font-semibold whitespace-nowrap">
                            Rangka UNP 10
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {FEATURED_BALL_PRESS.subtitle} — Boom hidrolis as 80 mm, stroke 100 cm, penggerak Diesel Dong Hai 16 PK dan plat 8 mm.
                        </p>

                        {/* Quick Spec Matrix */}
                        <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                          <div className="p-2 rounded bg-slate-950/70 border border-slate-800">
                            <span className="text-slate-400 block text-[10px]">Boom Hidrolis</span>
                            <span className="font-mono text-amber-400 font-medium">As 80 mm · Stroke 100 cm</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950/70 border border-slate-800">
                            <span className="text-slate-400 block text-[10px]">Penggerak</span>
                            <span className="font-mono text-white font-medium">Dong Hai 16 PK</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950/70 border border-slate-800">
                            <span className="text-slate-400 block text-[10px]">Dimensi Mesin</span>
                            <span className="font-mono text-slate-200 font-medium">90 × 90 × 350 cm</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950/70 border border-slate-800">
                            <span className="text-slate-400 block text-[10px]">Material Rangka</span>
                            <span className="font-mono text-slate-200 font-medium">UNP 10 & Plat 8 mm</span>
                          </div>
                        </div>

                        <div className="pt-2 flex items-center gap-3">
                          <button
                            onClick={() => {
                              setJobOrder(prev => ({
                                ...prev,
                                machineType: 'Hydraulic Ball Press Machine',
                                machineFunction: 'Pemadatan botol plastik PET dan limbah daur ulang (Boom Hidrolis As 80 mm, Stroke 100 cm)',
                                capacityTarget: '± 8-12 bal per jam (60-100 kg/bal)',
                                dimensions: '90 × 90 × 350 cm',
                                powerPreference: 'Diesel Dong Hai 16 PK',
                                materialPreference: 'UNP 10 + Plat Hitam 8 mm',
                                referenceNotes: 'Boom hidrolis as 80 mm, panjang stroke 100 cm, pipa 2,5 inci'
                              }));
                              setActiveTab('job-order');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors text-center cursor-pointer shadow-md"
                          >
                            Pesan Mesin Press Ini (Job Order)
                          </button>
                          
                          <button
                            onClick={() => setActiveTab('products')}
                            className="py-2.5 px-4 text-xs font-medium text-slate-300 bg-slate-800 hover:text-white rounded border border-slate-700 transition-colors whitespace-nowrap cursor-pointer"
                          >
                            Lihat Katalog
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ADJACENCY PROOF STRIP (Constitution 1.H & 2.A) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800 text-xs">
                  <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800/80">
                    <div className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">4 Tahap</div>
                    <div className="text-slate-300 font-medium mt-1">Solusi Terintegrasi</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Konsultasi, Desain, Fabrikasi, Ready to Use</div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800/80">
                    <div className="text-2xl font-extrabold text-white font-mono tabular-nums">100%</div>
                    <div className="text-slate-300 font-medium mt-1">Kustomisasi Spesifikasi</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Disesuaikan bahan, kapasitas, & daya listrik</div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800/80">
                    <div className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">± 0.02 mm</div>
                    <div className="text-slate-300 font-medium mt-1">Presisi Pengerjaan</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Machining bubut & milling toleransi ketat</div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800/80">
                    <div className="text-2xl font-extrabold text-white font-mono tabular-nums">12 Bulan</div>
                    <div className="text-slate-300 font-medium mt-1">Jaminan Garansi</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Pendampingan uji coba & suku cadang lokal</div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: 4 LAYANAN UTAMA PUSAT MESIN JOGYA */}
            <section className="py-20 border-b border-slate-800 bg-slate-950/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
                  <div className="text-xs font-mono text-amber-400 tracking-wider uppercase font-semibold">
                    Alur Layanan Terpadu
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Dari Konsultasi, Desain, Fabrikasi Hingga Mesin Siap Digunakan
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Setiap mesin yang kami buat melalui 4 tahap rekayasa ketat untuk menjamin fungsionalitas, efisiensi operasional, dan keawetan jangka panjang bagi usaha Anda.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {MAIN_SERVICES.map((service) => (
                    <div 
                      key={service.number}
                      className="bg-slate-900/80 border border-slate-800 rounded-lg p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-extrabold font-mono text-amber-400/90 group-hover:text-amber-400 transition-colors">
                            {service.number}
                          </span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            TAHAP {service.number}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                            {service.title}
                          </h3>
                          <div className="text-xs text-amber-400 font-medium mt-0.5">
                            {service.subtitle}
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="pt-2 border-t border-slate-800 space-y-2">
                          <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">Cakupan Aktivitas:</span>
                          <ul className="text-xs text-slate-400 space-y-1.5">
                            {service.details.slice(0, 3).map((d, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-amber-400 mt-0.5 shrink-0">·</span>
                                <span className="leading-snug">{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-slate-300">
                        <span className="text-slate-400 block text-[10px]">Output Hasil:</span>
                        <span className="font-medium text-amber-300/90">{service.deliverables}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">Punya ide mesin atau kebutuhan khusus untuk pabrik Anda?</h4>
                    <p className="text-xs text-slate-300">Konsultasikan langsung dengan tim mekanikal Pusat Mesin Jogya tanpa biaya konsultasi awal.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('job-order')}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
                  >
                    Konsultasi Kebutuhan Mesin Sekarang
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION: PRODUK UNGGULAN DEEP DIVE (Hydraulic Ball Press Machine) */}
            <section className="py-20 border-b border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left: Detailed Specs & Blueprint Card */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
                        Katalog Produk Unggulan
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {FEATURED_BALL_PRESS.name}
                      </h2>
                      <p className="text-sm font-medium text-slate-300">
                        {FEATURED_BALL_PRESS.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {FEATURED_BALL_PRESS.shortDesc}
                    </p>

                    {/* Technical Specification Table */}
                    <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900/60">
                      <div className="bg-slate-800/80 px-4 py-2 border-b border-slate-700 text-xs font-mono font-semibold text-amber-300 flex items-center justify-between">
                        <span>DATA SPESIFIKASI TEKNIK AWAL</span>
                        <span className="text-slate-400">PMJ-HBP90</span>
                      </div>
                      <div className="divide-y divide-slate-800/80 text-xs">
                        {FEATURED_BALL_PRESS.specs.map((item, idx) => (
                          <div key={idx} className="px-4 py-2.5 flex items-center justify-between gap-4">
                            <span className="text-slate-400 shrink-0">{item.label}</span>
                            <span className="font-mono text-white text-right font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 leading-relaxed">
                      <span className="font-semibold block mb-0.5">Catatan Fleksibilitas Desain:</span>
                      {FEATURED_BALL_PRESS.note}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => {
                          setJobOrder(prev => ({
                            ...prev,
                            machineType: 'Hydraulic Ball Press Machine',
                            machineFunction: 'Pemadatan botol plastik PET',
                            capacityTarget: '± 8-12 bal per jam',
                            dimensions: '90 × 90 × 350 cm',
                            powerPreference: 'Diesel Dong Hai 16 PK',
                            materialPreference: 'UNP 10 + Plat 8 mm'
                          }));
                          setActiveTab('job-order');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Kirim Permintaan Job Order Mesin Ini</span>
                      </button>

                      <a
                        href={`https://wa.me/${BUSINESS_INFO.waNumber}?text=${encodeURIComponent('Halo Pusat Mesin Jogya, saya ingin konsultasi detail dan harga untuk Hydraulic Ball Press Machine (Rangka UNP 10, Dong Hai 16 PK).')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-600/40 hover:bg-emerald-900/30 rounded transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp Engineer (082230712778)</span>
                      </a>
                    </div>
                  </div>

                  {/* Right: Feature Highlights & Real Machine Photograph */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-6">
                      
                      {/* Real Machine Image Card with Badges */}
                      <div className="relative rounded-lg overflow-hidden border border-slate-700 bg-slate-950 shadow-xl group">
                        <img
                          src={FEATURED_BALL_PRESS.image}
                          alt="Foto Mesin Hydraulic Ball Press Pusat Mesin Jogya"
                          className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        {/* Overlay Badges */}
                        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-md bg-slate-950/90 backdrop-blur border border-amber-400 text-xs font-mono text-amber-300 shadow-lg flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                          <span>Boom Hidrolis: <strong>As 80 mm · Stroke 100 cm</strong></span>
                        </div>

                        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-slate-950/90 backdrop-blur border border-slate-700 text-[11px] font-mono text-slate-300">
                          Dimensi 90 × 90 × 350 cm · Rangka UNP 10
                        </div>

                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-amber-400 text-slate-950 text-[11px] font-mono font-bold">
                          Diesel Dong Hai 16 PK
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-white flex items-center gap-2 pt-2">
                        <ShieldCheck className="w-5 h-5 text-amber-400" />
                        Keunggulan Rekayasa Konstruksi Mesin Press PMJ
                      </h3>

                      <div className="space-y-3">
                        {FEATURED_BALL_PRESS.advantages.map((adv, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-200 leading-relaxed">{adv}</span>
                          </div>
                        ))}
                      </div>

                      {/* Workshop Quality Seal */}
                      <div className="p-4 rounded-lg bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-700/80 space-y-2">
                        <div className="text-xs font-mono text-amber-400 font-semibold uppercase">
                          STANDAR FABRIKASI TEMPEL - SLEMAN
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Seluruh pengelasan rangka UNP 10, pembubutan as boom 80 mm, dan perakitan hidrolik stroke 100 cm dikerjakan teknisi berpengalaman dengan kontrol kelurusan geometri dan pengujian hidrolik di workshop kami di Yogyakarta sebelum serah terima.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =====================================================================
            PAGE: ABOUT US
        ===================================================================== */}
        {activeTab === 'about' && (
          <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Header */}
            <div className="max-w-3xl space-y-4">
              <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                Profil Perusahaan & Rekayasa
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Tentang Pusat Mesin Jogya
              </h1>
              <p className="text-base text-slate-300 leading-relaxed">
                Pusat Mesin Jogya berdiri sebagai mitra strategis industri manufaktur, bengkel permesinan, pengolahan pangan, dan pelaku usaha daur ulang di Daerah Istimewa Yogyakarta, Jawa Tengah, dan seluruh pelosok Nusantara.
              </p>
            </div>

            {/* Core Values / 3 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <DraftingCompass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Desain Berbasis Kebutuhan Nyata</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Kami tidak memaksakan model template. Setiap mesin dirancang berdasar kapasitas riil, jenis bahan mentah, ketersediaan daya listrik pelanggan, dan target anggaran yang telah disepakati.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Fabrikasi & Machining Mandiri</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pengerjaan dilakukan langsung di workshop kami di Tempel, Sleman. Mulai dari pemotongan plat tebal, pembubutan poros presisi, milling, pengelasan argon/MIG, hingga perakitan elektrikal.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Uji Coba & Jaminan Purna Jual</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Mesin diserahterimakan hanya setelah lulus uji fungsi dengan bahan material riil. Dilengkapi garansi teknis 12 bulan dan kemudahan ketersediaan suku cadang lokal yang cepat didapat.
                </p>
              </div>
            </div>

            {/* Workshop Address & Presence */}
            <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <h3 className="text-xl font-bold text-white">Fasilitas Workshop di Sleman, Yogyakarta</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Workshop kami berlokasi di <span className="text-amber-400 font-medium">Dusun Cungkuk Kidul RT 05 RW 17, Desa Margorejo, Tempel, Sleman, Yogyakarta</span>. 
                    Dilengkapi mesin perkakas bubut, mesin frais/milling, bor radial, peralatan las MIG/TIG, press hidrolik, dan crane instalasi untuk pengerjaan mesin kelas ringan hingga heavy duty.
                  </p>
                  <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Teknisi Berpengalaman</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Pengujian Beban Aktual</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Terbuka untuk Kunjungan</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <button
                    onClick={() => setActiveTab('workshop')}
                    className="w-full py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors text-center cursor-pointer"
                  >
                    Lihat Dokumentasi Workshop
                  </button>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="w-full py-3 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition-colors text-center cursor-pointer"
                  >
                    Jadwalkan Kunjungan ke Tempel
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            PAGE: OUR PRODUCTS (Katalog Mesin Perkakas & Mesin Produksi)
        ===================================================================== */}
        {activeTab === 'products' && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Header & Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
              <div className="space-y-2">
                <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  Katalog Mesin & Peralatan
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  Our Products & Machinery
                </h1>
                <p className="text-sm text-slate-300 max-w-2xl">
                  Katalog mesin perkakas dan mesin produksi fabrikasi Pusat Mesin Jogya. Setiap unit dapat disesuaikan spesifikasi teknisnya sesuai kebutuhan khusus Anda.
                </p>
              </div>

              {/* Functional Category Filter (Constitution 1.A DO rule) */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
                {[
                  { id: 'all', label: 'Semua Produk' },
                  { id: 'press', label: 'Mesin Press Hidrolik' },
                  { id: 'perkakas', label: 'Mesin Perkakas' },
                  { id: 'pangan', label: 'Mesin Pangan' },
                  { id: 'pertanian', label: 'Agro & Pertanian' },
                  { id: 'otomasi', label: 'Otomasi & Konveyor' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setProductCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      productCategory === cat.id
                        ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className={`bg-slate-900/90 border rounded-xl p-6 flex flex-col justify-between transition-all ${
                    product.isFeatured ? 'border-amber-500/60 shadow-lg shadow-amber-500/5' : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header line */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-amber-400 font-medium">
                        {product.categoryLabel}
                      </span>
                      {product.isFeatured && (
                        <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 font-mono text-[10px] border border-amber-400/30">
                          UNGGULAN
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                        {product.shortDesc}
                      </p>
                    </div>

                    {/* Image preview for featured products */}
                    {product.image && (
                      <div className="relative rounded-lg overflow-hidden border border-slate-700 bg-slate-950 h-44 group">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-slate-950/85 backdrop-blur text-[10px] font-mono text-amber-300 border border-amber-500/40">
                          As 80 mm · Stroke 100 cm
                        </div>
                        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-mono font-bold">
                          Foto Unit Riil
                        </div>
                      </div>
                    )}

                    {/* Technical Specs Snapshot */}
                    <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 space-y-1.5 text-xs">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Spesifikasi Utama:</span>
                      {Object.entries(product.specs).slice(0, 4).map(([key, val], idx) => (
                        <div key={idx} className="flex items-center justify-between gap-2 text-[11px]">
                          <span className="text-slate-400">{key}:</span>
                          <span className="font-mono text-slate-200 text-right">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Application Tags (Unboxed per Constitution 1.A) */}
                    <div className="pt-2 text-[11px] text-slate-400 space-y-1">
                      <span className="block text-[10px] uppercase font-mono text-slate-400">Aplikasi Penggunaan:</span>
                      <div className="flex flex-wrap gap-x-2 gap-y-1">
                        {product.applications.map((app, i) => (
                          <span key={i} className="text-slate-300">
                            {app}{i < product.applications.length - 1 ? ' ·' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-2">
                    <button
                      onClick={() => {
                        setJobOrder(prev => ({
                          ...prev,
                          machineType: product.name,
                          machineFunction: product.shortDesc,
                          capacityTarget: product.specs['Kapasitas'] || product.specs['Gaya Tekan'] || 'Sesuai spesifikasi standar',
                          dimensions: product.specs['Dimensi'] || 'Sesuai standar',
                          powerPreference: product.specs['Penggerak'] || product.specs['Motor'] || 'Listrik / Diesel'
                        }));
                        setActiveTab('job-order');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex-1 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors text-center cursor-pointer"
                    >
                      Ajukan Job Order
                    </button>
                    
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-3 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:text-white rounded border border-slate-700 transition-colors cursor-pointer"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Request Banner */}
            <div className="p-8 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">Tidak Menemukan Mesin yang Cocok di Katalog?</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Kami mengkhususkan diri dalam pembuatan mesin custom berdasarkan kebutuhan spesifik Anda. Kirimkan sketsa, sampel produk, atau ceritakan proses kerja yang ingin Anda otomatisasikan.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('custom')}
                className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
              >
                Rancang Mesin Custom Khusus
              </button>
            </div>
          </section>
        )}

        {/* =====================================================================
            PAGE: CUSTOM MACHINE (Jasa Desain & Pembuatan Mesin)
        ===================================================================== */}
        {activeTab === 'custom' && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                Engineering & Custom Fabrication
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Jasa Desain & Pembuatan Mesin Sesuai Kebutuhan
              </h1>
              <p className="text-base text-slate-300 leading-relaxed">
                Setiap industri memiliki tantangan bahan baku, keterbatasan dimensi ruang, dan ritme produksi yang unik. Pusat Mesin Jogya merancang solusi mesin custom dari nol dengan kalkulasi teknik yang matang.
              </p>
            </div>

            {/* Alur Rekayasa Mesin Custom */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Tahapan Pengembangan Mesin Custom Anda:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 space-y-3">
                  <span className="font-mono text-amber-400 font-bold text-lg">Langkah 01</span>
                  <h3 className="text-sm font-bold text-white">Brief & Studi Kelayakan</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Diskusi mendalam mengenai bahan baku, volume output yang diinginkan, ketersediaan daya listrik (1 Phase 220V atau 3 Phase 380V atau Diesel), dan ruang peletakan mesin.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 space-y-3">
                  <span className="font-mono text-amber-400 font-bold text-lg">Langkah 02</span>
                  <h3 className="text-sm font-bold text-white">Desain CAD 3D & Kalkulasi Torsi</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Engineer kami menggambar model 3D CAD parametrik dan menghitung beban motor, gearbox reducer, ketebalan plat, serta menyajikan visualisasi untuk disetujui bersama.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 space-y-3">
                  <span className="font-mono text-amber-400 font-bold text-lg">Langkah 03</span>
                  <h3 className="text-sm font-bold text-white">Fabrikasi Logam & Perakitan</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pemotongan plat presisi, machining bubut as poros toleransi tinggi, pengelasan struktur baja UNP / stainless steel SS304/SS316 food-grade di workshop Sleman.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 space-y-3">
                  <span className="font-mono text-amber-400 font-bold text-lg">Langkah 04</span>
                  <h3 className="text-sm font-bold text-white">Uji Bahan Nyata & Pelatihan</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Mesin diuji coba langsung menggunakan bahan baku Anda selama 4-8 jam kontinu. Setelah performa stabil dan aman, mesin dikirim dan operator Anda dilatih langsung.
                  </p>
                </div>
              </div>
            </div>

            {/* Contoh Kategori Mesin Custom yang Telah Kami Buat */}
            <div className="p-8 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
              <h2 className="text-xl font-bold text-white">Spesialisasi Mesin Custom Pusat Mesin Jogya</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
                <div className="p-4 rounded bg-slate-950/70 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-amber-400 text-sm">1. Mesin Daur Ulang & Hidrolik</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Mesin Hydraulic Ball Press botol plastik PET (Rangka UNP 10, Dong Hai 16 PK), mesin pencacah plastik (crusher), mesin pemadat kaleng, dan mesin press limbah kardus.
                  </p>
                </div>

                <div className="p-4 rounded bg-slate-950/70 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-amber-400 text-sm">2. Mesin Pengolah Makanan & Minuman</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Ribbon mixer bumbu kering SS304, pasteurisasi double jacket sari buah/susu, vacuum frying keripik buah, evaporator vakum jamu, dan tangki pencampur sirup.
                  </p>
                </div>

                <div className="p-4 rounded bg-slate-950/70 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-amber-400 text-sm">3. Mesin Agroindustri & Pertanian</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Hammer mill penepung jagung/rempah, rotary dryer pengering biji kopi/gabah, mesin pencetak pelet pakan ikan/ternak, dan mesin perontok serbaguna.
                  </p>
                </div>

                <div className="p-4 rounded bg-slate-950/70 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-amber-400 text-sm">4. Mesin Pengemasan & Sealing</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Continuous band sealer injeksi nitrogen, liquid & paste filler piston silinder pneumatik anti-drip, mesin penutup botol (capper), dan sealer vakum industri.
                  </p>
                </div>

                <div className="p-4 rounded bg-slate-950/70 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-amber-400 text-sm">5. Konveyor & Otomasi Lini Produksi</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Belt conveyor modular PU food-grade, gravity roller conveyor, meja akumulasi putar (rotary table), dan konveyor transfer penghubung antar mesin.
                  </p>
                </div>

                <div className="p-4 rounded bg-slate-950/70 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-amber-400 text-sm">6. Mesin Perkakas & Alat Bantu Khusus</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Mesin roll plat manual/elektrik, jig & fixture perakitan presisi, modifikasi mesin bubut dan frais dengan digital readout DRO, serta mesin press mekanik.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => { setActiveTab('job-order'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Isi Formulir Permintaan Mesin Custom (Job Order)</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            PAGE: OUR WORKSHOP (Dokumentasi Workshop & Fasilitas)
        ===================================================================== */}
        {activeTab === 'workshop' && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                Fasilitas Fabrikasi & Permesinan
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Workshop & Fabrication Facility
              </h1>
              <p className="text-base text-slate-300 leading-relaxed">
                Pusat Mesin Jogya mengoperasikan workshop mandiri di Tempel, Sleman, Yogyakarta dengan peralatan mesin perkakas lengkap untuk menjamin kecepatan, presisi geometri, dan kontrol mutu fabrikasi.
              </p>
            </div>

            {/* Equipment Grid */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Peralatan & Kapabilitas Permesinan Workshop Kami:</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                    <span>DIVISI PERKAKAS</span>
                    <span>TOLERANSI 0.01 MM</span>
                  </div>
                  <h3 className="text-base font-bold text-white">Mesin Bubut Logam Heavy Duty</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Digunakan untuk pembubutan poros shaft penggerak, pembuatan ulir drat presisi, pembubutan puli, dan facing permukaan logam silindris.
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-slate-400">
                    Kapasitas: Swing over bed hingga 400 mm, panjang hingga 1.500 mm.
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                    <span>DIVISI TOOLING</span>
                    <span>3-AXIS MILLING</span>
                  </div>
                  <h3 className="text-base font-bold text-white">Mesin Milling & Frais Universal</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Digunakan untuk pembuatan roda gigi (gear), alur pasak poros, bidang presisi dudukan bearing, dan pengerjaan lubang baut presisi.
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-slate-400">
                    Dilengkapi digital readout DRO 3-axis untuk akurasi tinggi.
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                    <span>DIVISI WELDING</span>
                    <span>ARGON & MIG/MAG</span>
                  </div>
                  <h3 className="text-base font-bold text-white">Pengelasan Argon TIG & MIG Co2</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pengelasan struktur baja UNP kokoh untuk mesin press hidrolik dan pengelasan gas argon TIG sanitasi full food-grade untuk stainless SS304/SS316.
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-slate-400">
                    Hasil las rapat, tanpa pori udara, dan dipoles halus (mirror finish).
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                    <span>DIVISI HIDROLIK</span>
                    <span>TEKANAN HINGGA 30 TON</span>
                  </div>
                  <h3 className="text-base font-bold text-white">Instalasi & Perakitan Hidrolik</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Perakitan tabung hidrolik pipa seamless 2,5 inci, pompa hidrolik gear pump, hand valve spool control, serta pengujian tekanan oli hidrolik anti-bocor.
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-slate-400">
                    Spesialis mesin Ball Press botol plastik PET rangka UNP 10.
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                    <span>DIVISI PENGGERAK</span>
                    <span>DIESEL & MOTOR LISTRIK</span>
                  </div>
                  <h3 className="text-base font-bold text-white">Bench Test Mesin Penggerak</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Area pengujian mesin penggerak diesel Dong Hai 16 PK, mesin diesel Kubota/Yanmar, serta motor induksi listrik 1 Phase dan 3 Phase dengan inverter.
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-slate-400">
                    Pengecekan vibrasi getaran, rpm putaran, dan konsumsi bahan bakar.
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                    <span>DIVISI ELEKTRIKAL</span>
                    <span>STANDARD PUIL</span>
                  </div>
                  <h3 className="text-base font-bold text-white">Wiring Panel Kontrol & Otomasi</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Penyusunan panel kontrol box rapi dengan komponen proteksi overload thermal, MCB, tombol Emergency Stop mudah dijangkau, dan pengatur digital.
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-slate-400">
                    Aman dari sengatan listrik dan debu operasional pabrik.
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Commitment Notice */}
            <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Factory className="w-5 h-5 text-amber-400" />
                Kunjungan Langsung ke Workshop Pusat Mesin Jogya
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                Calon pelanggan sangat dipersilakan berkunjung ke workshop kami untuk melihat langsung unit mesin yang sedang difabrikasi, mendiskusikan gambar desain di meja engineer, atau mencoba langsung mesin dengan sampel material Anda.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <span className="text-amber-400 font-mono">Alamat: Dusun Cungkuk Kidul RT 05 RW 17, Desa Margorejo, Tempel, Sleman, Yogyakarta</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-300">Jam Kerja: 08.00 - 17.00 WIB</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('contact')}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors cursor-pointer"
                >
                  Lihat Lokasi & Rute di Peta
                </button>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            PAGE: JOB ORDER (Form Permintaan Mesin Sesuai Kebutuhan)
        ===================================================================== */}
        {activeTab === 'job-order' && (
          <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="space-y-3 text-center sm:text-left">
              <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                Formulir Rekayasa & Penawaran
              </div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                Form Permintaan Pembuatan Mesin (Job Order)
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed">
                Silakan isi data kebutuhan mesin yang ingin Anda buat di bawah ini. Tim engineer Pusat Mesin Jogya akan meninjau spesifikasi teknis dan langsung merespon via WhatsApp dengan rekomendasi desain serta estimasi biayanya.
              </p>
            </div>

            {formSubmitted && (
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Permintaan berhasil disiapkan! WhatsApp telah terbuka untuk terhubung langsung dengan teknisi kami.</span>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs underline hover:text-white"
                >
                  Tutup
                </button>
              </div>
            )}

            {/* The Main Job Order Form */}
            <form onSubmit={handleJobOrderSubmit} className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-sm font-bold text-amber-400 font-mono uppercase tracking-wide">
                  1. Informasi Kontak & Pelanggan
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Nama Lengkap <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={jobOrder.customerName}
                    onChange={(e) => setJobOrder({ ...jobOrder, customerName: e.target.value })}
                    placeholder="Contoh: Pak Budi Santoso"
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Nomor WhatsApp Aktif <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={jobOrder.whatsapp}
                    onChange={(e) => setJobOrder({ ...jobOrder, whatsapp: e.target.value })}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Nama Usaha / Perusahaan / UMKM (Opsional)
                  </label>
                  <input
                    type="text"
                    value={jobOrder.companyName}
                    onChange={(e) => setJobOrder({ ...jobOrder, companyName: e.target.value })}
                    placeholder="Contoh: UD Daur Ulang Mandiri / PT Agro Jogja"
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="border-b border-slate-800 pb-4 pt-4">
                <h3 className="text-sm font-bold text-amber-400 font-mono uppercase tracking-wide">
                  2. Spesifikasi Mesin yang Dibutuhkan
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Jenis Mesin yang Dibutuhkan <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={jobOrder.machineType}
                    onChange={(e) => setJobOrder({ ...jobOrder, machineType: e.target.value })}
                    placeholder="Contoh: Hydraulic Ball Press Machine, Ribbon Mixer, Mesin Pencacah"
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Fungsi & Bahan Baku yang Diproses <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={jobOrder.machineFunction}
                    onChange={(e) => setJobOrder({ ...jobOrder, machineFunction: e.target.value })}
                    placeholder="Jelaskan fungsi mesin, misal: Untuk memadatkan botol plastik PET agar ringkas saat pengiriman ke pabrik daur ulang."
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Target Kapasitas Produksi
                  </label>
                  <input
                    type="text"
                    value={jobOrder.capacityTarget}
                    onChange={(e) => setJobOrder({ ...jobOrder, capacityTarget: e.target.value })}
                    placeholder="Contoh: 10 bal/jam (60-100 kg/bal) atau 200 kg/jam"
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Estimasi Dimensi Mesin (jika ada)
                  </label>
                  <input
                    type="text"
                    value={jobOrder.dimensions}
                    onChange={(e) => setJobOrder({ ...jobOrder, dimensions: e.target.value })}
                    placeholder="Contoh: 90 × 90 × 350 cm (atau menyesuaikan ruang)"
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Preferensi Penggerak
                  </label>
                  <select
                    value={jobOrder.powerPreference}
                    onChange={(e) => setJobOrder({ ...jobOrder, powerPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Diesel Dong Hai 16 PK">Diesel Dong Hai 16 PK (Populer untuk Ball Press)</option>
                    <option value="Diesel Kubota / Yanmar">Diesel Kubota / Yanmar</option>
                    <option value="Motor Listrik 1 Phase 220V">Motor Listrik 1 Phase 220V (Listrik Rumah/UMKM)</option>
                    <option value="Motor Listrik 3 Phase 380V">Motor Listrik 3 Phase 380V (Listrik Industri)</option>
                    <option value="Manual / Hidrolik Tangan">Manual Hand Crank / Hand Pump</option>
                    <option value="Konsultasikan dengan Engineer PMJ">Konsultasikan dengan Engineer PMJ</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Preferensi Material Rangka & Kontak
                  </label>
                  <select
                    value={jobOrder.materialPreference}
                    onChange={(e) => setJobOrder({ ...jobOrder, materialPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Baja UNP 10 + Plat Hitam 8 mm">Baja UNP 10 + Plat Hitam 8 mm (Standar Ball Press)</option>
                    <option value="Stainless Steel SS304 Food-Grade">Stainless Steel SS304 (Standar Makanan & Minuman)</option>
                    <option value="Stainless Steel SS316 Anti-Asam">Stainless Steel SS316 (Standar Farmasi/Kimia)</option>
                    <option value="Baja Struktural SS400 / UNP Biasa">Baja Struktural SS400 / UNP Biasa</option>
                    <option value="Rekomendasi Teknisi">Rekomendasi Terbaik dari Teknisi PMJ</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Referensi Desain, Sketsa, atau Link Foto Mesin
                  </label>
                  <input
                    type="text"
                    value={jobOrder.referenceNotes}
                    onChange={(e) => setJobOrder({ ...jobOrder, referenceNotes: e.target.value })}
                    placeholder="Contoh: Mirip model ball press botol PET di YouTube / Sketsa dikirim via WhatsApp"
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    *Gambar sketsa, foto referensi, atau dokumen teknis dapat Anda kirimkan langsung saat chat WhatsApp terbuka.
                  </span>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Keterangan Tambahan / Pertanyaan Khusus
                  </label>
                  <textarea
                    rows={3}
                    value={jobOrder.additionalNotes}
                    onChange={(e) => setJobOrder({ ...jobOrder, additionalNotes: e.target.value })}
                    placeholder="Tuliskan jika ada kendala ruang peletakan, estimasi tenggat waktu (deadline), atau kebutuhan pengiriman ke luar kota."
                    className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-4">
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.99] rounded-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry ke WhatsApp Pusat Mesin Jogya (082230712778)</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Setelah menekan tombol di atas, browser akan membuka WhatsApp dengan pesan yang sudah terformat rapi sesuai isian formulir Anda.
                </p>
              </div>
            </form>
          </section>
        )}

        {/* =====================================================================
            PAGE: CONTACT US (Alamat, WhatsApp, dan Lokasi Peta)
        ===================================================================== */}
        {activeTab === 'contact' && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                Hubungi Kami & Kunjungan Workshop
              </div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                Kontak Pusat Mesin Jogya
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed">
                Kami siap berdiskusi mengenai kebutuhan mesin perkakas dan mesin custom Anda. Hubungi kami melalui WhatsApp, telepon, atau silakan berkunjung langsung ke workshop kami di Sleman.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Direct Info Cards */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* WhatsApp Direct Card */}
                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">WHATSAPP / TELEPON</div>
                      <div className="text-lg font-bold text-white font-mono">{BUSINESS_INFO.phone}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Respon cepat konsultasi teknis, pertanyaan spesifikasi, dan pemesanan mesin.
                  </p>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.waNumber}?text=${encodeURIComponent('Halo Pusat Mesin Jogya, saya ingin berkonsultasi mengenai solusi mesin.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat Langsung di WhatsApp</span>
                  </a>
                </div>

                {/* Workshop Address Card */}
                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">ALAMAT WORKSHOP & FABRIKASI</div>
                      <div className="text-sm font-bold text-white">Pusat Mesin Jogya</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    {BUSINESS_INFO.address}
                  </p>

                  <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                    <span className="text-amber-400 font-semibold block mb-0.5">Petunjuk Rute:</span>
                    Terletak di Tempel, Sleman (Dekat perbatasan DIY - Magelang / Jalan Magelang km 17). Akses mudah untuk truk pengiriman dan kendaraan operasional.
                  </div>
                </div>

                {/* Operating Hours Card */}
                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">JAM OPERASIONAL WORKSHOP</div>
                      <div className="text-xs font-medium text-white">{BUSINESS_INFO.hours}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Location Map Visualizer */}
              <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      Peta Lokasi & Panduan Rute Tempel - Sleman
                    </h3>
                    <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      D.I. YOGYAKARTA
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Kawasan Tempel, Sleman menghubungkan Kota Yogyakarta dengan Magelang & Jawa Tengah.
                  </p>
                </div>

                {/* Vector Map Simulation Representation */}
                <div className="w-full h-72 bg-[#070b14] rounded-lg border border-slate-800 relative overflow-hidden flex items-center justify-center p-4">
                  <svg viewBox="0 0 500 300" className="w-full h-full text-slate-600">
                    {/* Grid lines */}
                    <path d="M0 50 H500 M0 100 H500 M0 150 H500 M0 200 H500 M0 250 H500" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                    <path d="M50 0 V300 M100 0 V300 M150 0 V300 M200 0 V300 M250 0 V300 M300 0 V300 M350 0 V300 M400 0 V300 M450 0 V300" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                    
                    {/* Main road: Jl. Magelang - Tempel */}
                    <path d="M120 0 Q220 120 270 300" stroke="#f59e0b" strokeWidth="4" fill="none" />
                    {/* Ringroad feeder */}
                    <path d="M50 250 Q250 240 480 270" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
                    {/* Secondary roads */}
                    <path d="M220 120 Q350 140 450 100" stroke="#475569" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                    <path d="M180 80 Q220 120 200 200" stroke="#475569" strokeWidth="2" fill="none" />

                    {/* Location Pin for Workshop */}
                    <g transform="translate(250, 110)">
                      <circle cx="0" cy="0" r="14" fill="#f59e0b" fillOpacity="0.2" />
                      <circle cx="0" cy="0" r="7" fill="#f59e0b" />
                      <circle cx="0" cy="0" r="3" fill="#0a0f1d" />
                    </g>

                    {/* Callout Box */}
                    <rect x="270" y="80" width="190" height="60" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
                    <text x="280" y="98" fill="#f59e0b" fontSize="10" fontFamily="sans-serif" fontWeight="bold">PUSAT MESIN JOGYA</text>
                    <text x="280" y="114" fill="#e2e8f0" fontSize="8" fontFamily="sans-serif">Dusun Cungkuk Kidul RT 05 RW 17</text>
                    <text x="280" y="128" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Margorejo, Tempel, Sleman</text>

                    {/* Geographic labels */}
                    <text x="70" y="30" fill="#94a3b8" fontSize="9" fontFamily="monospace">ARAH MAGELANG & JATENG ↑</text>
                    <text x="240" y="290" fill="#94a3b8" fontSize="9" fontFamily="monospace">ARAH KOTA YOGYAKARTA ↓</text>
                  </svg>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-slate-300">
                    Ingin koordinat presisi Google Maps atau panduan share location?
                  </div>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.waNumber}?text=${encodeURIComponent('Halo Pusat Mesin Jogya, mohon kirimkan koordinat Google Maps / share lock lokasi workshop di Tempel Sleman.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap"
                  >
                    Minta Share Location via WA
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* =========================================================================
          PRODUCT DETAIL MODAL
      ========================================================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">{selectedProduct.categoryLabel}</span>
                <h3 className="text-xl font-bold text-white mt-0.5">{selectedProduct.name}</h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedProduct.shortDesc}
            </p>

            {/* Product Image in Modal */}
            {selectedProduct.image && (
              <div className="relative rounded-lg overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-56 sm:h-64 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-slate-950/90 backdrop-blur border border-amber-500/50 text-[11px] font-mono text-amber-300 shadow">
                  Boom Hidrolis As 80 mm · Stroke 100 cm
                </div>
                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-amber-400 text-slate-950 text-[11px] font-mono font-bold shadow">
                  Workshop Tempel - Sleman
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-amber-400 uppercase font-semibold">Tabel Spesifikasi Teknis:</h4>
              <div className="border border-slate-800 rounded-lg overflow-hidden divide-y divide-slate-800 text-xs">
                {Object.entries(selectedProduct.specs).map(([label, val], i) => (
                  <div key={i} className="px-4 py-2.5 flex items-center justify-between gap-4">
                    <span className="text-slate-400">{label}</span>
                    <span className="font-mono text-white text-right font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <span className="text-slate-400 font-mono uppercase text-[10px] block">Aplikasi & Komoditas:</span>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.applications.map((app, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  setJobOrder(prev => ({
                    ...prev,
                    machineType: selectedProduct.name,
                    machineFunction: selectedProduct.shortDesc,
                    capacityTarget: selectedProduct.specs['Kapasitas'] || selectedProduct.specs['Gaya Tekan'] || 'Standar',
                    dimensions: selectedProduct.specs['Dimensi'] || 'Sesuai standar',
                    powerPreference: selectedProduct.specs['Penggerak'] || selectedProduct.specs['Motor'] || 'Listrik/Diesel'
                  }));
                  setSelectedProduct(null);
                  setActiveTab('job-order');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
              >
                Pesan / Kustomisasi Mesin Ini
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          QUIET PROFESSIONAL FOOTER (Constitution 1.B & 2.A)
      ========================================================================= */}
      <footer className="border-t border-slate-800 bg-[#070b14] text-slate-400 py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Col 1: Brand Info */}
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-2 text-white font-bold text-base tracking-tight">
                <Cog className="w-5 h-5 text-amber-400" />
                <span>PUSAT MESIN JOGYA</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                Pusat Mesin Jogya menghadirkan solusi mesin perkakas dan pembuatan mesin berdasarkan kebutuhan pelanggan. Mulai dari konsultasi, perancangan desain, fabrikasi, perakitan, hingga mesin siap digunakan.
              </p>
              <div className="text-[11px] font-mono text-slate-500">
                Tempel, Sleman, Daerah Istimewa Yogyakarta, Indonesia.
              </div>
            </div>

            {/* Col 2: Nav Quicklinks */}
            <div className="space-y-2">
              <span className="text-white font-semibold font-mono uppercase text-xs block">Menu Utama</span>
              <ul className="space-y-1.5 text-xs">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-amber-400 transition-colors">Home</button></li>
                <li><button onClick={() => setActiveTab('about')} className="hover:text-amber-400 transition-colors">About Us</button></li>
                <li><button onClick={() => setActiveTab('products')} className="hover:text-amber-400 transition-colors">Our Products</button></li>
                <li><button onClick={() => setActiveTab('custom')} className="hover:text-amber-400 transition-colors">Custom Machine</button></li>
                <li><button onClick={() => setActiveTab('workshop')} className="hover:text-amber-400 transition-colors">Our Workshop</button></li>
                <li><button onClick={() => setActiveTab('job-order')} className="hover:text-amber-400 transition-colors">Job Order</button></li>
                <li><button onClick={() => setActiveTab('contact')} className="hover:text-amber-400 transition-colors">Contact Us</button></li>
              </ul>
            </div>

            {/* Col 3: Contact Summary */}
            <div className="space-y-2">
              <span className="text-white font-semibold font-mono uppercase text-xs block">Kontak Workshop</span>
              <p className="text-xs text-slate-400">
                WhatsApp: <span className="text-amber-400 font-mono font-medium">{BUSINESS_INFO.phone}</span>
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-[11px] text-slate-400">
                {BUSINESS_INFO.hours}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div>
              © {new Date().getFullYear()} Pusat Mesin Jogya. Machine Tools & Custom Machine Solutions.
            </div>
            <div className="flex items-center gap-4">
              <span>Konsultasi</span>
              <span>·</span>
              <span>Desain CAD 3D</span>
              <span>·</span>
              <span>Fabrikasi</span>
              <span>·</span>
              <span>Mesin Siap Pakai</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Direct WhatsApp Action Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.waNumber}?text=${encodeURIComponent('Halo Pusat Mesin Jogya, saya ingin konsultasi mengenai pembuatan mesin.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-3 rounded-full font-semibold text-xs flex items-center gap-2 shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all"
        title="Chat WhatsApp Engineer Pusat Mesin Jogya"
      >
        <Phone className="w-4 h-4" />
        <span className="font-bold">Chat WA: 082230712778</span>
      </a>
    </div>
  );
}
