import React, { useState } from 'react';
import { 
  ChevronDown, 
  X, 
  Check, 
  Menu, 
  Share2, 
  ShieldCheck, 
  Compass, 
  Activity, 
  Zap, 
  Gauge, 
  Maximize2 
} from 'lucide-react';

interface CarModel {
  id: string;
  name: string;
  type: string;
  tag: string;
  tagStyle: string;
  desc: string;
  power: string;
  zeroToHundred: string;
  range: string;
  price: string;
  priceNum: number;
  image: string;
  topSpeed: string;
  torque: string;
  battery: string;
  curbWeight: string;
}

const CAR_MODELS: CarModel[] = [
  {
    id: 'hyperion',
    name: 'HYPERION GT',
    type: 'QUAD MOTOR',
    tag: 'FLAGSHIP HYPER GT',
    tagStyle: 'bg-[#00e5ff] text-black font-extrabold',
    desc: '트랙과 공도를 압도하는 트라이아웃 순수 전기 하이퍼 스포츠카.',
    power: '1,450 HP',
    zeroToHundred: '1.89 초',
    range: '720 km',
    price: '₩ 380,000,000',
    priceNum: 380000000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMCJGz7-GwLc_kveaop34ZjsfpZIt_6uyKkEga-aq15YHxaq4D95lh_iBzWMYU9sWEuk63A2yjY_h_YmGpqqUir4IOSApLpkZc4PiHTDw927c37JkJcFd-Vq0l7v-s7AFKRtkGCnoM5mGalQly7dTuDMmu98yUbYq96PBEU9E1DN_zN-jdBtW5rgQTrWd9D3B9J_qmnYn0CMEe2c7PQLv_tAotggaFKkGm-Rx7bXoFStP0Bcg_BbTQ',
    topSpeed: '412 km/h',
    torque: '1,700 Nm',
    battery: '120 kWh Solid-Electrolyte',
    curbWeight: '1,680 kg'
  },
  {
    id: 'velox',
    name: 'VELOX AERO',
    type: 'AERO COUPE',
    tag: 'DUAL PRE-ORDER',
    tagStyle: 'bg-white/20 backdrop-blur-md text-white font-extrabold',
    desc: '완벽한 중량 배분과 액티브 윙으로 완성된 정밀 트랙 머신.',
    power: '1,020 HP',
    zeroToHundred: '2.2 초',
    range: '650 km',
    price: '₩ 260,000,000',
    priceNum: 260000000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUSsE--z9uREPudhonYaSrqdk60HTzAXFscSJ73qbD7bSOLNDHPQ-8BH9TGqsMn2dzJybJRAoNg7fpH56V2uX4Ga-rTS84quN2KMPfJSH7IHs-yIoxGPoRNpLi1iqN9PP0yp9YFFKKJxbdAKOmx-314ST4L6ihrZitOBzbDTu2dwoCkpEELY2XxSR0YWzPrieciw55TJrk3gcz41abgmK9GHk7WKfXvToa9hxKqawI9zmUHXy-lsow',
    topSpeed: '375 km/h',
    torque: '1,350 Nm',
    battery: '105 kWh Silicon-Graphite',
    curbWeight: '1,590 kg'
  },
  {
    id: 'lumen',
    name: 'LUMEN GT-R',
    type: 'LONG RANGE GT',
    tag: 'LONG DISTANCE GT',
    tagStyle: 'bg-white/20 backdrop-blur-md text-white font-extrabold',
    desc: '빛의 고속도로를 가르는 야간 에어로 감성의 롱레인지 그랜드 투어러.',
    power: '980 HP',
    zeroToHundred: '2.4 초',
    range: '810 km',
    price: '₩ 230,000,000',
    priceNum: 230000000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrBYmvTeuSPSvkfRKJiS-oVIXAEHfXwSL0k4QzfipGFIYA5upuTGjWpdypTNmAylJmRm9lxezGR4_hF7De76up9YdRITstAP-jBM-qkSUHxEcKHjhabruEx5mVQ3R4pZ3oU3G53Cs5IUSF0-qbN78QhGoKFDp92gc8uZ5eGHqEZ-M-uUsiF7bd0pDhaWwudzO_Jt0htev3WqzvVTiGsjknN1YByd4ZEdIVWlv7gZvMzhnTNdBo22gu',
    topSpeed: '350 km/h',
    torque: '1,200 Nm',
    battery: '135 kWh Ultra-Cell',
    curbWeight: '1,820 kg'
  }
];

interface GalleryItem {
  id: number;
  tag: string;
  title: string;
  category: 'exterior' | 'interior' | 'performance';
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    tag: 'EXTERIOR VIEW 01',
    title: '옵시디언 블랙 & 시안 일루미네이션',
    category: 'exterior',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFsFtSHwLF7o94hKxij4o3J77pWRdid0qZEHDX9qFmQgMZZLrXaYKp4NoGFfBGm5iDIcP7phhxDTDzRqbtxJzlfzviGaZ16Y_tRbJIOsLrrJT6BGoKLtyH6rxRx6_hshRfZC0Als1bJ82N0loAZ7TCt5VyXYDPTeq8VshL5L_JhzmEjhxJ0liueRqHZ5K5bovG7bgQMNFZqKNGVGsiVhgsGOCLYwMld8Ml8Sjit00C0LvtlAUHOuxf'
  },
  {
    id: 2,
    tag: 'AERODYNAMICS 02',
    title: '초정밀 윈드터널 기류 분석',
    category: 'performance',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbwB_Cs6vCgYiBz9QXpqEUjjq5H1J-2eFJGj8xt9ijnM-JkB7oddvc5kf73IqTUzi-_-sXnMqUihUPsH-XmjTUh4SmjpPei0mBF0Yp7pc7D825WDvTe0AKTzsTazwx7R7JHzet1Vsl7cOQaGKnEM3esb97e7x96-1kEr7LoU_43iwOAQ1kHDIvsVpsURIFrmRZgY9Qs_Ue2DSwqKQEwh5Y2ruM_sjO2S0QcDM36CaNjaqXLUNJwf_W'
  },
  {
    id: 3,
    tag: 'PERFORMANCE 03',
    title: '액티브 리어 윙 & 티타늄 일렉트릭 디퓨저',
    category: 'performance',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQqF_qSxPhkGzWCkU3w-mdkDMBwrzdBcFoTEbkhzZ-SVnIuiWJS4TIYjo_vFsKa5UpUmtOYLGZkbhrYMFt-E-SHXDEm6-QGJBTkkTOBnsG_FLljOLe6VTqTWB4ZhL2zqjPgHZL7OxTU_VIr9x2CdgEI3eFhTzyL6qH23MeZwF0QvDrKcsW8Yc2uaINklAoLwW0Ny1Il4LCOjuI6VIYJnTEy4Dc470icNB_A3kzWiULuPFp3DXjnay0'
  },
  {
    id: 4,
    tag: 'INTERIOR CRAFT 04',
    title: '커브드 파노라믹 OLED & 포지드 카본 요크',
    category: 'interior',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYSROZMtgZHqCmT8ykCGg1rYPuTstyjwgtkoz4RtPo_axKDZVX5uMeDggGHC9r1PBSYzz_SIMkf8Gf2gSRPnn3c8wLu6xpEOF6it-QYvQLTeffRSuwQYFxASJxCFg70NHQ6BvOUCLLPz7C6gkmSB3zujHn3wOzuP90-sNV4NSz3JL6cWU0uDKsu5P1JFHLXEfnaia7CTvkKm6csdDWyNuJV2zgIsSsIgMUG2nisgFvB-VrWA4SEIzv'
  }
];

export default function App() {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);
  const [selectedModalCar, setSelectedModalCar] = useState<CarModel | null>(null);
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [configColor, setConfigColor] = useState('obsidian');
  const [configWheels, setConfigWheels] = useState('carbon');
  const [configInterior, setConfigInterior] = useState('cyan-stitch');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'KR' | 'EN'>('KR');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicle: 'hyperion',
    lounge: '서울 강남 시그니처 라운지 (피터나스 타워 38F)',
    notes: '',
    agree: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredGallery = selectedGalleryCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedGalleryCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('개인정보 수집 및 VIP 상담 서비스 제공에 동의해 주십시오.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleCarSelectForConfig = (car: CarModel) => {
    setSelectedModalCar(car);
    setIsConfiguratorOpen(true);
  };

  const calculateConfigPrice = () => {
    if (!selectedModalCar) return '₩ 380,000,000';
    let base = selectedModalCar.priceNum;
    if (configColor === 'liquid-chrome') base += 12000000;
    if (configColor === 'cyber-cyan') base += 15000000;
    if (configWheels === 'aero-forged') base += 18000000;
    if (configInterior === 'atelier-leather') base += 22000000;
    return `₩ ${base.toLocaleString('ko-KR')}`;
  };

  return (
    <div className="bg-[#0e0e10] text-[#f3f4f6] antialiased selection:bg-[#00e5ff] selection:text-black overflow-x-hidden w-full min-h-screen">
      
      {/* BEGIN: MainHeader */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e10]/85 backdrop-blur-md border-b border-white/10" data-purpose="site-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo Emblem */}
          <a className="flex items-center gap-3 group" href="#">
            <div className="w-8 h-8 rounded-full border border-[#00e5ff]/60 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
              <svg className="w-full h-full text-[#00e5ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="tracking-[0.25em] text-white font-extrabold text-sm sm:text-base leading-none">AETHER</span>
              <span className="text-[9px] tracking-[0.35em] text-gray-400 font-light mt-0.5">KINETIC MOTORS</span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-medium tracking-wide text-gray-300">
            <a className="hover:text-[#00e5ff] transition-colors py-1" href="#lineup">라인업</a>
            <a className="hover:text-[#00e5ff] transition-colors py-1" href="#technology">기술 혁신</a>
            <a className="hover:text-[#00e5ff] transition-colors py-1" href="#performance">성능</a>
            <a className="hover:text-[#00e5ff] transition-colors py-1" href="#gallery">갤러리</a>
            <a className="hover:text-[#00e5ff] transition-colors py-1" href="#testdrive">시승 신청</a>
            <a className="hover:text-[#00e5ff] transition-colors py-1" href="#faq">고객 지원</a>
          </nav>

          {/* Right Utility Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center text-xs tracking-wider font-semibold text-gray-400 gap-1.5 px-2 py-1">
              <button 
                onClick={() => setLang('KR')} 
                className={`${lang === 'KR' ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors cursor-pointer`}
              >
                KR
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => setLang('EN')} 
                className={`${lang === 'EN' ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors cursor-pointer`}
              >
                EN
              </button>
            </div>

            {/* Book Test Drive Button */}
            <a 
              className="bg-[#00e5ff] hover:bg-[#00c5dd] text-black font-semibold text-xs sm:text-sm px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-[1.02] cyan-glow-sm" 
              href="#testdrive"
            >
              시승 신청하기
            </a>

            {/* User Profile Icon Button */}
            <button 
              aria-label="User Account" 
              onClick={() => alert('AETHER VIP 멤버십 포털은 승인된 오너 전용으로 로그인 준비 중입니다.')}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#00e5ff]/50 transition-colors" 
              type="button"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e0e10]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 flex flex-col gap-4">
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-200 hover:text-[#00e5ff]" href="#lineup">라인업</a>
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-200 hover:text-[#00e5ff]" href="#technology">기술 혁신</a>
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-200 hover:text-[#00e5ff]" href="#performance">성능</a>
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-200 hover:text-[#00e5ff]" href="#gallery">갤러리</a>
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-200 hover:text-[#00e5ff]" href="#testdrive">시승 신청</a>
            <a onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-200 hover:text-[#00e5ff]" href="#faq">고객 지원</a>
          </div>
        )}
      </header>
      {/* END: MainHeader */}

      {/* BEGIN: HeroSection */}
      <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden min-h-screen flex flex-col justify-between border-b border-white/10" data-purpose="hero-banner">
        {/* Atmospheric Ambient Lighting Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00e5ff]/15 blur-[140px] pointer-events-none rounded-full"></div>
        <div className="absolute -top-32 right-10 w-96 h-96 bg-cyan-600/10 blur-[120px] pointer-events-none"></div>

        {/* Truly 100% Full-Width Hero Cinematic Showcase */}
        <div className="relative w-full overflow-hidden border-y border-white/15 bg-black/40 shadow-2xl group mb-12 min-h-[550px] sm:min-h-[650px] md:min-h-[750px] flex items-center justify-center">
          <img 
            alt="AETHER Hyperion GT Cinematic Exterior" 
            className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out block" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVsqGrcJmpDBr5aYtyYZXJ5luKISaAsxPU4l6xc4aHrU6CsBouaioUIYopws8mjr7sLtsY_VRXOaMLVkSYAjWbbYyxYF8JbIkIHnySnD-rvNQX8qSGWSFo6SDun8WXpGONDabQ0B6MMuysyZcs6ql99hxqcMkEGTJI4QyDn1BwnFDjb2QLd485x-EKoFFq-C4n4c59lVkFcZ1yFamPvU1KItISpYAbbSnZlxOChsiiy0-44J-V4ajD"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-black/40 to-black/60 pointer-events-none"></div>
          <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

          <div className="absolute top-12 sm:top-16 md:top-20 inset-x-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center pointer-events-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white leading-tight mb-6 text-center select-none drop-shadow-2xl">
              ENGINEERED<br />FOR THE <span className="text-[#00e5ff] text-glow">VOID</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <a 
                className="px-7 py-3 bg-[#00e5ff] hover:bg-[#00c5dd] text-black font-extrabold text-xs tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-0.5 cyan-glow" 
                href="#lineup"
              >
                EXPLORE LINEUP
              </a>
              <a 
                className="px-7 py-3 bg-black/60 hover:bg-black/90 border border-white/30 hover:border-[#00e5ff]/60 text-white font-bold text-xs tracking-widest uppercase backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5" 
                href="#testdrive"
              >
                BOOK A TEST DRIVE
              </a>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute bottom-6 inset-x-0 flex items-center justify-between pointer-events-none z-20">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></span>
              AERO PROFILE: HIGH DOWNFORCE ACTIVE
            </div>
            <span className="text-xs font-mono text-[#00e5ff] tracking-wider hidden sm:inline-block">
              TELEMETRY SYSTEM: NOMINAL
            </span>
          </div>
        </div>

        {/* Live Performance Benchmark Bar at Bottom of Hero */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-7 rounded-xl bg-[#121316]/90 border border-white/10 backdrop-blur-md">
            <div className="text-center border-r border-white/10 last:border-r-0 md:last:border-r-0">
              <div className="text-[11px] font-mono tracking-wider text-gray-400 mb-1">가속 성능 (0-100 KM/H)</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                1.89 <span className="text-xs text-[#00e5ff] font-normal">SECONDS</span>
              </div>
            </div>
            <div className="text-center md:border-r border-white/10">
              <div className="text-[11px] font-mono tracking-wider text-gray-400 mb-1">최고 속도 (MAX VELOCITY)</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                412 <span className="text-xs text-[#00e5ff] font-normal">KM/H</span>
              </div>
            </div>
            <div className="text-center border-r border-white/10">
              <div className="text-[11px] font-mono tracking-wider text-gray-400 mb-1">1회 충전 거리 (WLTP)</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                720 <span className="text-xs text-[#00e5ff] font-normal">KM RANGE</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-[11px] font-mono tracking-wider text-gray-400 mb-1">초고속 충전 (800V ARCH)</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                12 <span className="text-xs text-[#00e5ff] font-normal">MIN (10→80%)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* BEGIN: PhilosophySection */}
      <section className="py-24 border-b border-white/10 bg-[#0a0a0c]" data-purpose="brand-philosophy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] text-[#00e5ff] uppercase block mb-2">OUR PHILOSOPHY</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                순수한 공학, 타협 없는 미학
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400 font-light leading-relaxed">
              AETHER MOTORS는 정적의 안락함과 폭발적인 가속의 이중성을 완벽하게 조율합니다. 차세대 럭셔리 모빌리티의 기준을 다시 정의합니다.
            </p>
          </div>

          {/* 3 Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 01 */}
            <div className="p-8 rounded-2xl bg-[#121316] border border-white/10 hover:border-[#00e5ff]/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-black border border-[#00e5ff]/40 flex items-center justify-center mb-6 text-[#00e5ff] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">PILLAR 01</span>
              <h3 className="text-xl font-bold text-white mb-2">Aerodynamic Sculpting</h3>
              <h4 className="text-sm font-medium text-[#00e5ff] mb-4">공기역학적 조각</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                바람을 거스르지 않고 지배하는 에어로다이내믹스. 모든 곡선은 다운포스와 에너지 효율의 극한을 위해 설계되었습니다.
              </p>
              <div className="text-xs font-mono text-gray-500 tracking-wider flex items-center gap-1 group-hover:text-[#00e5ff] transition-colors cursor-pointer">
                ACTIVE AERO FLAPS ›
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="p-8 rounded-2xl bg-[#121316] border border-white/10 hover:border-[#00e5ff]/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-black border border-[#00e5ff]/40 flex items-center justify-center mb-6 text-[#00e5ff] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">PILLAR 02</span>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Electric Core</h3>
              <h4 className="text-sm font-medium text-[#00e5ff] mb-4">양자 전기 파워트레인</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                초정밀 4-모터 독립 토크 벡터링 시스템으로 어떤 코너에서도 완벽한 트랙션을 구현하는 독자 아키텍처.
              </p>
              <div className="text-xs font-mono text-gray-500 tracking-wider flex items-center gap-1 group-hover:text-[#00e5ff] transition-colors cursor-pointer">
                INDEPENDENT 4-MOTOR VECTORING ›
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="p-8 rounded-2xl bg-[#121316] border border-white/10 hover:border-[#00e5ff]/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-black border border-[#00e5ff]/40 flex items-center justify-center mb-6 text-[#00e5ff] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">PILLAR 03</span>
              <h3 className="text-xl font-bold text-white mb-2">Bespoke Handcrafted Luxury</h3>
              <h4 className="text-sm font-medium text-[#00e5ff] mb-4">비스포크 수제 럭셔리</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                탄소 섬유와 지속 가능한 최상급 베지터블 레더, 정밀 가공 알루미늄이 빚어내는 장인정신의 결정체.
              </p>
              <div className="text-xs font-mono text-gray-500 tracking-wider flex items-center gap-1 group-hover:text-[#00e5ff] transition-colors cursor-pointer">
                ATELIER CUSTOM TAILORING ›
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: PhilosophySection */}

      {/* BEGIN: VehicleLineupSection */}
      <section className="py-24 border-b border-white/10 bg-[#0e0e10]" data-purpose="vehicle-collection" id="lineup">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-[0.3em] text-[#00e5ff] uppercase block mb-2">VEHICLE COLLECTION</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              AETHER 시그니처 라인업
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-light">
              극한의 엔지니어링과 첨단 디지털 기술이 결합된 독보적인 3가지 에디션 모델을 소개합니다.
            </p>
          </div>

          {/* 3 Vehicle Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAR_MODELS.map((car) => (
              <div 
                key={car.id}
                className="rounded-2xl overflow-hidden bg-[#121316] border border-white/10 hover:border-[#00e5ff]/60 transition-all duration-300 flex flex-col group hover:shadow-2xl"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-black">
                  <span className={`absolute top-4 left-4 z-10 text-[10px] font-mono tracking-wider px-2.5 py-1 rounded ${car.tagStyle} uppercase`}>
                    {car.tag}
                  </span>
                  <img 
                    alt={`AETHER ${car.name}`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    src={car.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-2xl font-black text-white tracking-tight">{car.name}</h3>
                      <span className="text-xs font-mono text-gray-400">{car.type}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-light mb-6">
                      {car.desc}
                    </p>
                    
                    {/* Quick Specs */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-black/50 rounded-lg border border-white/5 mb-6 text-center">
                      <div>
                        <div className="text-[10px] text-gray-500 font-mono">최고출력</div>
                        <div className="text-sm font-bold text-white">{car.power}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 font-mono">0-100 KM/H</div>
                        <div className="text-sm font-bold text-[#00e5ff]">{car.zeroToHundred}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 font-mono">주행거리</div>
                        <div className="text-sm font-bold text-white">{car.range}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-500 block">STARTING AT</span>
                      <span className="text-base font-extrabold text-white">
                        {car.price} <span className="text-xs font-normal text-gray-400">부터</span>
                      </span>
                    </div>
                    <button 
                      onClick={() => handleCarSelectForConfig(car)}
                      className="text-xs font-bold text-[#00e5ff] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      세부 사양 보기 →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: VehicleLineupSection */}

      {/* BEGIN: FlagshipHighlightSection */}
      <section className="py-24 border-b border-white/10 bg-[#0a0a0c]" data-purpose="flagship-focus">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Large Hypercar Wind Tunnel Image */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/15 group shadow-2xl">
              <img 
                alt="Flagship Hyperion in Wind Tunnel" 
                className="w-full h-[400px] sm:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdMwyLFKSCNte0h_E8QvzNitM5qz2xe77uKG-xh0tkR_LbMe4ydq4klC6zx8Hj-9z9zLSI9ZDjHYabGr-Ko6TWxJbtrw3nuVGgjWXOZDPofrCClR9S8Hkcv03vKosIpizefMUvXJ6oOrWZU-GgyX9JvQp-KKj3J7PGdaAupvhEGs1IUu2ewNpKPo-ruNMY29okrwSK_MXvw41Lb0TBFBo2SiaCiA5ww6grk9zLlauD94ke8urQ7Mvh"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent"></div>
              
              {/* Interactive Telemetry Pin on Image */}
              <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md border border-[#00e5ff]/40 rounded-xl p-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#00e5ff] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></span>
                  ACTIVE GROUND AERO VENTURI
                </div>
                <p className="text-gray-300 text-[11px]">고속 주행 시 지체 하부 음압 550kg 다운포스 생성</p>
              </div>
              <div className="absolute top-6 right-6 font-mono text-xs px-3 py-1 bg-black/60 border border-white/10 rounded-full text-gray-400">
                STATUS: LOCKED 100%
              </div>
            </div>

            {/* Right: Specifications and Callout */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs font-mono tracking-[0.3em] text-[#00e5ff] uppercase block mb-3">
                FLAGSHIP SHOWCASE — AETHER HYPERION GT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                물리학의 한계를 재정의한 차세대 플래그십
              </h2>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-8">
                에테르 하이페리온 GT는 모터스포츠의 레이싱 DNA와 최고급 GT의 우아함을 결합했습니다. 탄소섬유 모노코크 섀시와 초고밀도 실리콘 음극재 배터리를 탑재하여 전례 없는 반응성과 안정성을 전달합니다.
              </p>

              {/* 4 Grid Performance Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#121316] border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">MAX OUTPUT</span>
                  <span className="text-2xl font-black text-white">1,450 <span className="text-xs text-[#00e5ff]">HP</span></span>
                </div>
                <div className="p-4 rounded-xl bg-[#121316] border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">MAX TORQUE</span>
                  <span className="text-2xl font-black text-white">1,700 <span className="text-xs text-[#00e5ff]">NM</span></span>
                </div>
                <div className="p-4 rounded-xl bg-[#121316] border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">0-100 KM/H</span>
                  <span className="text-2xl font-black text-[#00e5ff]">1.89 <span className="text-xs text-white">SEC</span></span>
                </div>
                <div className="p-4 rounded-xl bg-[#121316] border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">TOP TRACK SPEED</span>
                  <span className="text-2xl font-black text-white">412 <span className="text-xs text-[#00e5ff]">KM/H</span></span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => handleCarSelectForConfig(CAR_MODELS[0])}
                  className="px-6 py-3 bg-[#00e5ff] hover:bg-[#00c5dd] text-black font-bold text-sm rounded-lg transition-colors cyan-glow-sm cursor-pointer"
                >
                  하이퍼리온 전용 컨피규레이터 열기
                </button>
                <a 
                  className="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium text-sm rounded-lg transition-colors inline-block" 
                  href="#testdrive"
                >
                  시승 예약
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: FlagshipHighlightSection */}

      {/* BEGIN: CuttingEdgeTechSection */}
      <section className="py-24 border-b border-white/10 bg-[#0e0e10]" data-purpose="technology-bento-grid" id="technology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] text-[#00e5ff] uppercase block mb-2">CUTTING-EDGE TECH</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                미래 모빌리티를 선도하는 4대 혁신 기술
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400 font-light leading-relaxed">
              AETHER 연구진이 독일 슈투트가르트와 서울 R&D 센터에서 구축한 최첨단 엔지니어링 패러다임.
            </p>
          </div>

          {/* Bento Grid 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tech 01 */}
            <div className="p-6 rounded-2xl bg-[#121316] border border-white/10 flex flex-col justify-between hover:border-[#00e5ff]/50 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#00e5ff] uppercase tracking-widest block mb-3">INNOVATION 01</span>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">800V Quantum Powertrain</h3>
                <p className="text-xs text-[#00e5ff] font-medium mb-3">초고전압 파워트레인</p>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  800V 초고전압 아키텍처, 4개 인버터 독립 제어로 최상 최고 효율과 극한의 열관리 냉각 솔루션을 제공합니다.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>EFFICIENCY 97.4%</span>
                <span className="text-[#00e5ff]">⚡</span>
              </div>
            </div>

            {/* Tech 02 */}
            <div className="p-6 rounded-2xl bg-[#121316] border border-white/10 flex flex-col justify-between hover:border-[#00e5ff]/50 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#00e5ff] uppercase tracking-widest block mb-3">INNOVATION 02</span>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">Neural Autonomous Pilot</h3>
                <p className="text-xs text-[#00e5ff] font-medium mb-3">스마트 드라이빙</p>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  라이다 4기 및 고성능 듀얼 신경망 칩셋 탑재로 레벨 3+ 고속 자율주행과 지능형 레이스트랙 어시스트를 지원합니다.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>LEVEL 3+ READY</span>
                <span className="text-[#00e5ff]">🛡️</span>
              </div>
            </div>

            {/* Tech 03 */}
            <div className="p-6 rounded-2xl bg-[#121316] border border-white/10 flex flex-col justify-between hover:border-[#00e5ff]/50 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#00e5ff] uppercase tracking-widest block mb-3">INNOVATION 03</span>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">Titanium Monocoque</h3>
                <p className="text-xs text-[#00e5ff] font-medium mb-3">안전 섀시 시스템</p>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  우주 항공 등급 티타늄 및 고장력 카본 파이버 복합체 세이프티 셀로 가벼운 중량과 완벽한 충돌 방호를 구현합니다.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>TORSION 65,000 Nm/deg</span>
                <span className="text-[#00e5ff]">💎</span>
              </div>
            </div>

            {/* Tech 04: Cockpit with image background inside card */}
            <div className="relative p-6 rounded-2xl bg-[#121316] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#00e5ff]/50 transition-colors">
              <img 
                alt="Interior Cockpit" 
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-45 transition-opacity duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeWy1pVQsEGo4EbRYZOPWjC6h8oevisYP0rVfBN7GcnHjUrL2VqYd_V3jZZDGEqQpa3E2c1zFSY_gQhbmcBOzrHlJOrM4WAhmdDH0aopmJ3UsO25DejNUWbs3CdfCuAdgxqNd8_5dzQw-Tm7lmndtaImBShgtF0nER00LDSCi0V1ZgcpngIl0qHfhQ7DproMgwMH4mva61VLhezELSrLFwRUN2pK5SwHe1Fm-ijM7hB2NQAc87YFyI"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              
              <div className="relative z-10">
                <span className="text-[10px] font-mono text-[#00e5ff] uppercase tracking-widest block mb-3">INNOVATION 04</span>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">Aether Panoramic Cockpit</h3>
                <p className="text-xs text-[#00e5ff] font-medium mb-3">디지털 콕핏</p>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  와이드 커브드 OLED 파노라마 디스플레이, 햅틱 요크 스티어링과 차세대 AI 음성 인터페이스.
                </p>
              </div>
              <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-300">
                <span>58" CURVED OLED</span>
                <span className="text-[#00e5ff]">🖥️</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: CuttingEdgeTechSection */}

      {/* BEGIN: BenchmarkPerformanceSection */}
      <section className="py-24 border-b border-white/10 bg-[#0a0a0c] text-center" data-purpose="performance-metrics" id="performance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono tracking-[0.3em] text-[#00e5ff] uppercase block mb-3">CERTIFIED BENCHMARK</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            순수 전기가 도달한 최고치
          </h2>
          <p className="text-sm text-gray-400 font-light max-w-xl mx-auto mb-16">
            국제 공인 시험 및 독일 뉘르부르크링 노르트슐라이페 실측 기록
          </p>

          {/* Giant Numbers Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-[#121316]/50 border border-white/5 hover:border-[#00e5ff]/30 transition-colors">
              <div className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white mb-2 text-glow">
                810
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#00e5ff] mb-1">km</div>
              <p className="text-[11px] text-gray-400">1회 운행 주행거리(WLTP 기준 인증)</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-[#121316]/50 border border-white/5 hover:border-[#00e5ff]/30 transition-colors">
              <div className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#00e5ff] mb-2 text-glow">
                1.89
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-1">초 (s)</div>
              <p className="text-[11px] text-gray-400">정지상태에서 100km/h 도달 시간</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121316]/50 border border-white/5 hover:border-[#00e5ff]/30 transition-colors">
              <div className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white mb-2 text-glow">
                12
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#00e5ff] mb-1">분 (min)</div>
              <p className="text-[11px] text-gray-400">10%에서 80%까지 급속 충전 소요</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121316]/50 border border-white/5 hover:border-[#00e5ff]/30 transition-colors">
              <div className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white mb-2 text-glow">
                1,450
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#00e5ff] mb-1">HP</div>
              <p className="text-[11px] text-gray-400">합산 4-모터 시스템 최고 출력</p>
            </div>
          </div>
        </div>
      </section>
      {/* END: BenchmarkPerformanceSection */}

      {/* BEGIN: VisualArchiveGallerySection */}
      <section className="py-24 border-b border-white/10 bg-[#0e0e10]" data-purpose="visual-gallery" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Category Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] text-[#00e5ff] uppercase block mb-2">VISUAL ARCHIVE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                압도적 실루엣과 디테일
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button 
                onClick={() => setSelectedGalleryCategory('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  selectedGalleryCategory === 'all' 
                    ? 'bg-[#00e5ff] text-black' 
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300'
                }`}
              >
                전체보기
              </button>
              <button 
                onClick={() => setSelectedGalleryCategory('exterior')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  selectedGalleryCategory === 'exterior' 
                    ? 'bg-[#00e5ff] text-black' 
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300'
                }`}
              >
                외관 (EXTERIOR)
              </button>
              <button 
                onClick={() => setSelectedGalleryCategory('interior')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  selectedGalleryCategory === 'interior' 
                    ? 'bg-[#00e5ff] text-black' 
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300'
                }`}
              >
                실내 (INTERIOR)
              </button>
              <button 
                onClick={() => setSelectedGalleryCategory('performance')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  selectedGalleryCategory === 'performance' 
                    ? 'bg-[#00e5ff] text-black' 
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300'
                }`}
              >
                퍼포먼스 (PERFORMANCE)
              </button>
            </div>
          </div>

          {/* 4-Grid Images Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black cursor-pointer shadow-lg hover:border-[#00e5ff]/50 transition-all duration-300"
              >
                <img 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                  src={item.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#00e5ff]">{item.tag}</span>
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                  </div>
                  <Maximize2 className="w-5 h-5 text-[#00e5ff]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: VisualArchiveGallerySection */}

      {/* BEGIN: ConsultationAndBookingSection */}
      <section className="py-24 border-b border-white/10 bg-[#0a0a0c]" data-purpose="vip-consultation-form" id="testdrive">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card Container for VIP Request Form */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#121316] border border-white/15 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#00e5ff]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono tracking-[0.3em] text-[#00e5ff] uppercase block mb-2">EXPERIENCE AETHER</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                VIP 프라이빗 시승 및 구매 상담
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-light">
                전담 AETHER 큐레이터가 고객님의 일정에 맞춘 프리미엄 시승 경험을 준비해 드립니다.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 px-6 rounded-2xl bg-black/60 border border-[#00e5ff]/40 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#00e5ff]/20 border border-[#00e5ff] flex items-center justify-center mx-auto mb-4 text-[#00e5ff]">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">VIP 시승 신청이 성공적으로 접수되었습니다</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
                  {formData.fullName} 고객님을 위한 전담 AETHER 큐레이터가 배정되었습니다. 24시간 이내에 <strong>{formData.phone}</strong> 번호로 프라이빗 일정 조율 연락을 드리겠습니다.
                </p>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => { setIsSubmitted(false); setFormData({ fullName: '', phone: '', email: '', vehicle: 'hyperion', lounge: '서울 강남 시그니처 라운지 (피터나스 타워 38F)', notes: '', agree: false }); }}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    추가 시승 신청하기
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">성함 (FULL NAME)</label>
                    <input 
                      className="w-full bg-[#0a0a0c] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff]" 
                      placeholder="홍길동" 
                      required 
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">연락처 / 전화번호</label>
                    <input 
                      className="w-full bg-[#0a0a0c] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff]" 
                      placeholder="010-0000-0000" 
                      required 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">이메일 주소</label>
                    <input 
                      className="w-full bg-[#0a0a0c] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff]" 
                      placeholder="aether.vip@example.com" 
                      required 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  {/* Vehicle Interest Selection */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">관심 모델 선택</label>
                    <select 
                      className="w-full bg-[#0a0a0c] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff]"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                    >
                      <option value="hyperion">AETHER HYPERION GT (1,450 HP 플래그십)</option>
                      <option value="velox">AETHER VELOX AERO (1,020 HP 에어로 쿠페)</option>
                      <option value="lumen">AETHER LUMEN GT-R (980 HP 롱레인지 GT)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Lounge */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-2">희망 시승 라운지</label>
                  <select 
                    className="w-full bg-[#0a0a0c] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff]"
                    value={formData.lounge}
                    onChange={(e) => setFormData({...formData, lounge: e.target.value})}
                  >
                    <option>서울 강남 시그니처 라운지 (피터나스 타워 38F)</option>
                    <option>부산 해운대 프라이빗 베이 센터</option>
                    <option>인천 영종도 인제 트랙 드라이빙 서킷</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-2">문의 사항 및 특별 요청 (OPTIONAL)</label>
                  <textarea 
                    className="w-full bg-[#0a0a0c] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff]" 
                    placeholder="선호하시는 시승 요일이나 맞춤 상담 요청 사항을 적어주십시오." 
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  />
                </div>

                {/* Privacy Agreement */}
                <div className="flex items-start gap-2 pt-2">
                  <input 
                    className="mt-1 rounded bg-[#0a0a0c] border-white/20 text-[#00e5ff] focus:ring-0 cursor-pointer" 
                    id="privacy-terms" 
                    required 
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                  />
                  <label className="text-xs text-gray-400 leading-normal cursor-pointer select-none" htmlFor="privacy-terms">
                    개인정보 수집 및 VIP 상담 서비스 제공에 동의합니다.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  className="w-full py-4 bg-[#00e5ff] hover:bg-[#00c5dd] text-black font-extrabold text-sm rounded-xl transition-all duration-300 cyan-glow transform hover:scale-[1.01] cursor-pointer" 
                  type="submit"
                >
                  VIP 시승 신청 완료하기
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      {/* END: ConsultationAndBookingSection */}

      {/* BEGIN: FAQSection */}
      <section className="py-24 border-b border-white/10 bg-[#0e0e10]" data-purpose="faq-accordion" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-[0.3em] text-[#00e5ff] uppercase block mb-2">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              고객 지원 및 자주 묻는 질문
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-light">
              AETHER 차저리지 구매 및 소유에 관한 주요 궁금증을 확인하십시오.
            </p>
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            <details className="group p-5 rounded-xl bg-[#121316] border border-white/10 open:border-[#00e5ff]/50 transition-colors">
              <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-white cursor-pointer select-none">
                <span>AETHER 차량의 인도 기간 및 주문 제작 프로세스는 어떻게 되나요?</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-white/5 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                모든 AETHER 차량은 고객의 개별 맞춤 비스포크 주문에 따라 한정 수량 수작업 조립됩니다. 기본 사양의 경우 계약 후 약 3~4개월, 아틀리에 비스포크 익스클루시브 트림의 경우 약 6개월의 정밀 제작 기간이 소요됩니다.
              </div>
            </details>

            <details className="group p-5 rounded-xl bg-[#121316] border border-white/10 open:border-[#00e5ff]/50 transition-colors">
              <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-white cursor-pointer select-none">
                <span>초고속 충전 네트워크 호환성 및 보증 프로그램은 어떻게 지원되나요?</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-white/5 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                국내 DC 콤보1 규격 350kW 초급속 충전기 및 전용 AETHER 플래시 차징 허브와 100% 호환되며, 8년 / 160,000km 배터리 팩 잔존 수명 80% 보증 및 무상 전용 에어 서스펜션 정밀 점검 서비스를 포함합니다.
              </div>
            </details>

            <details className="group p-5 rounded-xl bg-[#121316] border border-white/10 open:border-[#00e5ff]/50 transition-colors">
              <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-white cursor-pointer select-none">
                <span>시승 신청 후 일정 조율은 어떻게 진행되나요?</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-white/5 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                신청서 제출 후 24시간 이내에 전담 큐레이터가 유선으로 연락을 드려 원하시는 라운지 일정 및 비공개 1:1 트랙 시승 코스를 안내해 드립니다.
              </div>
            </details>

            <details className="group p-5 rounded-xl bg-[#121316] border border-white/10 open:border-[#00e5ff]/50 transition-colors">
              <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-white cursor-pointer select-none">
                <span>트랙 모드 및 애프터마켓 튜닝 지원 정책이 궁금합니다.</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-white/5 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                하이페리온 GT는 자체 트랙 전용 텔레메트리 로거와 액티브 에어로 제어 시스템을 기본 지원하며, 공식 공인 트랙 파츠 장착 시 제조사 워런티가 온전히 유지됩니다.
              </div>
            </details>
          </div>
        </div>
      </section>
      {/* END: FAQSection */}

      {/* BEGIN: GlobalFooter */}
      <footer className="bg-[#08080a] text-gray-400 pt-16 pb-12" data-purpose="site-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Company & Logo */}
            <div className="md:col-span-1">
              <a className="flex items-center gap-2 mb-4" href="#">
                <div className="w-6 h-6 rounded-full border border-[#00e5ff] flex items-center justify-center p-1 text-[#00e5ff]">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-extrabold tracking-[0.2em] text-white text-sm">AETHER KINETIC</span>
              </a>
              <p className="text-xs text-gray-500 font-light leading-relaxed mb-4">
                지능형 공기역학, 극대화 고효율 파워트레인, 미니멀리스트 럭셔리의 정점을 결합하여 감각적 가속의 미래를 정의합니다.
              </p>
              <div className="text-[11px] font-mono text-[#00e5ff]">
                GLOBAL TELEMETRY ACTIVE • LEVEL 4 AUTONOMOUS READY
              </div>
            </div>

            {/* Architecture Links */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">Architectures</h4>
              <ul className="space-y-2 text-xs">
                <li><a className="hover:text-white transition-colors" href="#lineup">Hyperion GT Aerok</a></li>
                <li><a className="hover:text-white transition-colors" href="#lineup">Vortex Spyder</a></li>
                <li><a className="hover:text-white transition-colors" href="#lineup">Aether Stratos SUV</a></li>
                <li><a className="hover:text-white transition-colors" href="#lineup">Track Bespoke Spec</a></li>
              </ul>
            </div>

            {/* Innovation Hub */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">Innovation Hub</h4>
              <ul className="space-y-2 text-xs">
                <li><a className="hover:text-white transition-colors" href="#technology">Cryo-Flux Cell Architecture</a></li>
                <li><a className="hover:text-white transition-colors" href="#technology">Active Aero Wings</a></li>
                <li><a className="hover:text-white transition-colors" href="#technology">Haptic Cockpit HUD</a></li>
                <li><a className="hover:text-white transition-colors" href="#technology">Safety &amp; Carbon Monocoque</a></li>
              </ul>
            </div>

            {/* Headquarters */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">Headquarters</h4>
              <address className="not-italic text-xs space-y-1.5 text-gray-400">
                <p className="text-white font-medium">Seoul Kinetic Hub</p>
                <p>강남구 테헤란로 521 피터나스타워 38F</p>
                <p className="text-white font-medium mt-3">Stuttgart R&amp;D Studio</p>
                <p>Königstraße 27, 70173 Stuttgart, Germany</p>
              </address>
              <div className="flex items-center gap-3 mt-4 text-gray-500">
                <a className="hover:text-[#00e5ff] transition-colors" href="#" title="Instagram">📷</a>
                <a className="hover:text-[#00e5ff] transition-colors" href="#" title="YouTube">📺</a>
                <a className="hover:text-[#00e5ff] transition-colors" href="#" title="X">🌐</a>
              </div>
            </div>
          </div>

          {/* Copyright and Regulatory Notice */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
            <div>
              © 2026 AETHER KINETIC MOTORS CORP. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-6">
              <a className="hover:text-gray-300 transition-colors" href="#">개인정보 처리방침</a>
              <a className="hover:text-gray-300 transition-colors" href="#">이용약관</a>
              <a className="hover:text-gray-300 transition-colors" href="#">법적 고지</a>
              <a className="hover:text-gray-300 transition-colors" href="#">쿠키 설정</a>
            </div>
          </div>
        </div>
      </footer>
      {/* END: GlobalFooter */}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-[#121316] rounded-2xl overflow-hidden border border-white/20 p-2" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-black">
              <img 
                src={lightboxImage.image} 
                alt={lightboxImage.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#00e5ff]">{lightboxImage.tag}</span>
                <h3 className="text-lg font-bold text-white">{lightboxImage.title}</h3>
              </div>
              <span className="text-xs text-gray-400 font-mono">AETHER KINETIC ARCHIVE</span>
            </div>
          </div>
        </div>
      )}

      {/* Configurator / Spec Modal */}
      {isConfiguratorOpen && selectedModalCar && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsConfiguratorOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#121316] rounded-3xl border border-white/20 p-6 sm:p-8 my-8 shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsConfiguratorOpen(false)}
              className="absolute top-6 right-6 z-20 w-9 h-9 rounded-full bg-black/60 text-gray-300 flex items-center justify-center hover:text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#00e5ff] text-black font-extrabold uppercase">
                {selectedModalCar.tag}
              </span>
              <span className="text-xs font-mono text-gray-400">{selectedModalCar.type}</span>
            </div>

            <h2 className="text-3xl font-black text-white mb-4">
              {selectedModalCar.name} <span className="text-sm font-normal text-gray-400">비스포크 컨피규레이터</span>
            </h2>

            {/* Vehicle Preview */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10 mb-6">
              <img 
                src={selectedModalCar.image} 
                alt={selectedModalCar.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-[#00e5ff]">
                LIVE SPEC VIEW
              </div>
            </div>

            {/* Detailed Technical Specs Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-black/40 border border-white/5 mb-6 text-center">
              <div>
                <div className="text-[10px] text-gray-500 font-mono">합산 최고출력</div>
                <div className="text-base font-extrabold text-white">{selectedModalCar.power}</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-mono">0-100 KM/H</div>
                <div className="text-base font-extrabold text-[#00e5ff]">{selectedModalCar.zeroToHundred}</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-mono">최고 속도</div>
                <div className="text-base font-extrabold text-white">{selectedModalCar.topSpeed}</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-mono">최대 토크</div>
                <div className="text-base font-extrabold text-white">{selectedModalCar.torque}</div>
              </div>
            </div>

            {/* Configurator Controls */}
            <div className="space-y-5 border-t border-white/10 pt-5 mb-8">
              {/* Exterior Color */}
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2">익스테리어 페인트 (EXTERIOR COLOR)</label>
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    onClick={() => setConfigColor('obsidian')}
                    className={`p-3 rounded-xl border text-left text-xs transition-colors cursor-pointer ${configColor === 'obsidian' ? 'border-[#00e5ff] bg-[#00e5ff]/10 text-white' : 'border-white/10 bg-black/30 text-gray-400'}`}
                  >
                    <div className="font-bold text-white mb-0.5">Obsidian Void</div>
                    <span className="text-[10px] text-gray-400">기본 포함</span>
                  </button>
                  <button 
                    onClick={() => setConfigColor('liquid-chrome')}
                    className={`p-3 rounded-xl border text-left text-xs transition-colors cursor-pointer ${configColor === 'liquid-chrome' ? 'border-[#00e5ff] bg-[#00e5ff]/10 text-white' : 'border-white/10 bg-black/30 text-gray-400'}`}
                  >
                    <div className="font-bold text-white mb-0.5">Liquid Chrome</div>
                    <span className="text-[10px] text-gray-400">+ ₩12,000,000</span>
                  </button>
                  <button 
                    onClick={() => setConfigColor('cyber-cyan')}
                    className={`p-3 rounded-xl border text-left text-xs transition-colors cursor-pointer ${configColor === 'cyber-cyan' ? 'border-[#00e5ff] bg-[#00e5ff]/10 text-white' : 'border-white/10 bg-black/30 text-gray-400'}`}
                  >
                    <div className="font-bold text-white mb-0.5">Cyber Kinetic Cyan</div>
                    <span className="text-[10px] text-gray-400">+ ₩15,000,000</span>
                  </button>
                </div>
              </div>

              {/* Wheels */}
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2">휠 &amp; 에어로 패키지 (WHEELS &amp; AERO)</label>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setConfigWheels('carbon')}
                    className={`p-3 rounded-xl border text-left text-xs transition-colors cursor-pointer ${configWheels === 'carbon' ? 'border-[#00e5ff] bg-[#00e5ff]/10 text-white' : 'border-white/10 bg-black/30 text-gray-400'}`}
                  >
                    <div className="font-bold text-white mb-0.5">21" Ultra Carbon Monoblock</div>
                    <span className="text-[10px] text-gray-400">기본 장착</span>
                  </button>
                  <button 
                    onClick={() => setConfigWheels('aero-forged')}
                    className={`p-3 rounded-xl border text-left text-xs transition-colors cursor-pointer ${configWheels === 'aero-forged' ? 'border-[#00e5ff] bg-[#00e5ff]/10 text-white' : 'border-white/10 bg-black/30 text-gray-400'}`}
                  >
                    <div className="font-bold text-white mb-0.5">22" Kinetic Aero Forged + Active Blades</div>
                    <span className="text-[10px] text-gray-400">+ ₩18,000,000</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Estimated Total & Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-black/60 border border-white/10">
              <div>
                <span className="text-[11px] font-mono text-gray-400 block">ESTIMATED CONFIGURATION PRICE</span>
                <span className="text-2xl font-extrabold text-[#00e5ff]">{calculateConfigPrice()}</span>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button 
                  onClick={() => {
                    setIsConfiguratorOpen(false);
                    setFormData({...formData, vehicle: selectedModalCar.id});
                    window.location.hash = '#testdrive';
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#00e5ff] hover:bg-[#00c5dd] text-black font-extrabold text-xs rounded-xl cyan-glow-sm cursor-pointer"
                >
                  이 구성으로 시승 및 구매 상담 신청
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
