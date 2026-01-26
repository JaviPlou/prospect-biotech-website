import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useInView, AnimatePresence, useMotionValue } from 'framer-motion';
import { 
  Dna, 
  Microscope, 
  FlaskConical, 
  Database, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Award, 
  Users, 
  Search, 
  CheckCircle2, 
  Mail, 
  Linkedin, 
  Twitter,
  Cpu,
  Layers,
  Activity
} from 'lucide-react';

// --- CONFIGURACIÓN DE RECURSOS ---
const LOGO_URL = "https://raw.githubusercontent.com/JaviPlou/prospect-assets/main/prospectbiotech_logo3.png";

// --- COMPONENTE: FONDO INTERACTIVO AURA + GRID ---
const TechnicalBackground = () => {
  useEffect(() => {
    // Inicialización de Unicorn Studio
    const initUnicorn = () => {
      if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };

    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = initUnicorn;
      document.head.appendChild(script);
    } else {
      initUnicorn();
    }
  }, []);

  return (
    <>
      <style>
        {`
          html { scroll-behavior: smooth; }

          .bg-hero {
              background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4b08548-af2a-40d7-969a-6e88e5c60d59_3840w.png');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
          }

          /* Patrón de cuadrícula técnica */
          .bg-grid-pattern {
            background-size: 40px 40px;
            background-image: 
              linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          }

          .aura-wrapper {
            filter: invert(1) opacity(0.1) saturate(19) hue-rotate(270deg) brightness(3.1);
            mix-blend-mode: multiply;
          }
        `}
      </style>

      {/* Aura Background Component */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none aura-wrapper">
          <div 
            data-us-project="0WrRbFIPaKoWVkiQWBG0" 
            className="absolute w-full h-full left-0 top-0"
            style={{ width: '100%', height: '100%' }}
          ></div>
      </div>

      {/* Static Grid Overlay */}
      <div className="fixed inset-0 -z-10 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true"></div>
    </>
  );
};

// --- COMPONENTE: CURSOR PERSONALIZADO ---
const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
      style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        className="absolute w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.9)]"
        animate={{ scale: isHovering ? 3 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
      <motion.div
        className="absolute w-8 h-8 border border-orange-500/40 rounded-full"
        animate={{
          scale: isHovering ? 2.2 : 1,
          opacity: isHovering ? 0.4 : 1,
          borderWidth: isHovering ? '1px' : '2px'
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </motion.div>
  );
};

// --- EASE FUNCTIONS ---
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// --- NUEVO ANIMATED COUNTER (Actualizado para soportar decimales) ---
function AnimatedCounter({ value, duration = 1500, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const [start, setStart] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let raf;
    const t0 = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      const easedT = easeOutCubic(t);
      const currentVal = value * easedT;
      
      if (decimals > 0) {
        setDisplay(currentVal.toFixed(decimals));
      } else {
        setDisplay(Math.round(currentVal));
      }

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value, duration, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

// --- COMPONENTE: GRÁFICO RAMAN VS SERS ---
const RamanSERSChart = () => {
  const [hoveredLine, setHoveredLine] = useState(null);
  const [mousePos, setMousePos] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Generar datos de espectro super suave
  const generateSpectrum = (peaks, baseIntensity) => {
    const points = [];
    const resolution = 200;

    for (let i = 0; i <= resolution; i++) {
      let intensity = baseIntensity;
      peaks.forEach(peak => {
        const x = (i / resolution) * 100;
        const distance = Math.abs(x - peak.position);
        intensity += peak.height * Math.exp(-Math.pow(distance / peak.width, 2));
      });
      points.push({ x: i / resolution * 100, y: Math.max(0, intensity) });
    }
    return points;
  };

  // Datos Raman (gris, señal débil)
  const ramanPeaks = [
    { position: 15, height: 8, width: 2 },
    { position: 28, height: 12, width: 2.5 },
    { position: 42, height: 6, width: 2 },
    { position: 55, height: 10, width: 2.2 },
    { position: 72, height: 5, width: 1.8 },
    { position: 88, height: 7, width: 2 }
  ];
  const ramanData = generateSpectrum(ramanPeaks, 2);

  // Datos SERS (morado, señal amplificada)
  const sersPeaks = [
    { position: 15, height: 75, width: 1.5 },
    { position: 28, height: 95, width: 1.8 },
    { position: 42, height: 55, width: 1.4 },
    { position: 55, height: 85, width: 1.6 },
    { position: 72, height: 45, width: 1.3 },
    { position: 88, height: 65, width: 1.5 }
  ];
  const sersData = generateSpectrum(sersPeaks, 3);

  // Path suave con curvas bezier
  const dataToSmoothPath = (data, scaleY = 1) => {
    if (data.length === 0) return '';
    let path = '';
    const margin = 60;
    const width = 700;
    const height = 280;

    data.forEach((point, i) => {
      const x = margin + (point.x / 100) * (width - margin * 2);
      const y = height - (point.y * scaleY);
      if (i === 0) {
        path += `M ${x} ${y}`;
      } else {
        const prevPoint = data[i - 1];
        const prevX = margin + (prevPoint.x / 100) * (width - margin * 2);
        const prevY = height - (prevPoint.y * scaleY);
        const cpX = (prevX + x) / 2;
        path += ` Q ${cpX} ${prevY}, ${x} ${y}`;
      }
    });
    return path;
  };

  const ramanPath = dataToSmoothPath(ramanData, 1.8);
  const sersPath = dataToSmoothPath(sersData, 1.8);

  const handleMouseMove = (e) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div ref={ref} className="w-full h-full bg-white rounded-[2.5rem] p-8 relative overflow-hidden">
      {/* Título minimalista */}
      <div className="absolute top-8 right-8 z-10 flex flex-col items-end gap-3">
        <h3 className="text-gray-800 font-bold text-xl">Raman</h3>
        <h3 className="text-[#6366f1] font-bold text-xl" style={{ marginTop: '-8px' }}>SERS</h3>
      </div>

      {/* Leyenda interactiva */}
      <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          style={{ opacity: hoveredLine === 'sers' || hoveredLine === null ? 1 : 0.3, transition: 'opacity 0.2s' }}
          onMouseEnter={() => setHoveredLine('sers')}
          onMouseLeave={() => setHoveredLine(null)}
          whileHover={{ x: 5 }}
        >
          <div className="w-10 h-1 bg-[#6366f1] rounded-full"></div>
          <span className="text-[#6366f1] text-sm font-semibold">SERS</span>
        </motion.div>
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          style={{ opacity: hoveredLine === 'raman' || hoveredLine === null ? 1 : 0.3, transition: 'opacity 0.2s' }}
          onMouseEnter={() => setHoveredLine('raman')}
          onMouseLeave={() => setHoveredLine(null)}
          whileHover={{ x: 5 }}
        >
          <div className="w-10 h-1 bg-gray-400 rounded-full"></div>
          <span className="text-gray-600 text-sm font-semibold">Raman</span>
        </motion.div>
      </div>

      {/* Gráfico super limpio */}
      <svg
        viewBox="0 0 700 350"
        className="w-full h-full relative z-0"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos(null)}
        style={{ cursor: 'crosshair' }}
      >
        {/* Ejes minimalistas */}
        <line x1="60" y1="280" x2="650" y2="280" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="60" y1="280" x2="60" y2="30" stroke="#e5e7eb" strokeWidth="2" />

        {/* Marcas eje X */}
        {[600, 800, 1000, 1200, 1400, 1600].map((value, i) => {
          const x = 60 + (i / 5) * 590;
          return (
            <g key={value}>
              <line x1={x} y1="280" x2={x} y2="285" stroke="#d1d5db" strokeWidth="1.5" />
              <text x={x} y="305" fill="#9ca3af" fontSize="11" textAnchor="middle" fontFamily="Poppins, sans-serif">
                {value}
              </text>
            </g>
          );
        })}

        {/* Labels */}
        <text x="355" y="330" fill="#6b7280" fontSize="13" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="500">
          Wavenumber (cm⁻¹)
        </text>
        <text x="25" y="160" fill="#6b7280" fontSize="13" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="500" transform="rotate(-90, 25, 160)">
          Intensity
        </text>

        {/* Línea Raman (gris) */}
        <motion.path
          d={ramanPath}
          fill="none"
          stroke={hoveredLine === 'raman' ? "#9ca3af" : "#d1d5db"}
          strokeWidth={hoveredLine === 'raman' ? "3" : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: hoveredLine === 'sers' ? 0.4 : 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            filter: hoveredLine === 'raman' ? 'drop-shadow(0 2px 6px rgba(156, 163, 175, 0.4))' : 'none',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={() => setHoveredLine('raman')}
          onMouseLeave={() => setHoveredLine(null)}
        />

        {/* Línea SERS (morado/azul) */}
        <motion.path
          d={sersPath}
          fill="none"
          stroke="#6366f1"
          strokeWidth={hoveredLine === 'sers' ? "4" : "3"}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: hoveredLine === 'raman' ? 0.4 : 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          style={{
            filter: hoveredLine === 'sers' ? 'drop-shadow(0 4px 12px rgba(99, 102, 241, 0.5))' : 'drop-shadow(0 2px 8px rgba(99, 102, 241, 0.3))',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={() => setHoveredLine('sers')}
          onMouseLeave={() => setHoveredLine(null)}
        />

        {/* Línea vertical seguimiento mouse */}
        {mousePos && (
          <motion.line
            x1={(mousePos.x / 100) * 700}
            y1="30"
            x2={(mousePos.x / 100) * 700}
            y2="280"
            stroke="#6366f1"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
          />
        )}
      </svg>

      {/* Amplificación minimalista */}
      <motion.div
        className="absolute bottom-8 right-8 flex items-baseline gap-1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <span className="text-5xl font-black text-[#6366f1]">100</span>
        <span className="text-2xl font-bold text-[#6366f1]">×</span>
      </motion.div>
    </div>
  );
};

// --- COMPONENTE: NAVBAR ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Technology', href: '#technology' },
    { name: 'Applications', href: '#applications' },
    { name: 'About', href: '#company' }
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? 'h-24 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'h-32 bg-transparent'}`}>
      <div className="container mx-auto max-w-[1400px] px-8 h-full flex justify-between items-center relative">
        <div className="flex-shrink-0 relative w-80 h-full flex items-center">
          <a 
            href="#" 
            className={`absolute left-0 -translate-y-1/2 z-[110] transition-all duration-700 ${
              isScrolled ? 'top-1/2' : 'top-[60%]'
            }`}
          >
            <img 
              src={LOGO_URL} 
              alt="Prospect Biotech" 
              className={`transition-all duration-700 object-contain origin-left filter drop-shadow-2xl ${
                isScrolled ? 'h-20' : 'h-[45vh] md:h-[60vh]'
              }`} 
            />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-12">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-[13px] font-bold tracking-widest uppercase text-[#000B3D] hover:text-[#0066FF] transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-[#000B3D] text-white px-8 py-3 rounded-full text-[13px] font-bold tracking-widest uppercase hover:bg-[#0066FF] transition-all shadow-lg active:scale-95">
            Contact
          </button>
        </div>
        <button className="md:hidden p-2 text-[#000B3D]" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={32} />
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 50 }} 
            className="fixed inset-0 w-full h-screen bg-white z-[110] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <img src={LOGO_URL} alt="Logo" className="h-20" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#000B3D]"><X size={40} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {links.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-bold text-[#000B3D]">{link.name}</a>
              ))}
              <button className="mt-8 bg-[#000B3D] text-white py-6 rounded-full font-bold uppercase tracking-widest text-xl">Contact Us</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-white text-[#000B3D] selection:bg-emerald-500/20 selection:text-emerald-800 cursor-none" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');`}
      </style>
      
      <TechnicalBackground />
      <CustomCursor />
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#0066FF] origin-left z-[150]" style={{ scaleX }} />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-hero">
        <div className="container mx-auto max-w-[1400px] px-8 relative z-10 pt-20 md:pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            className="max-w-4xl"
          >
            {/* ETIQUETA SUPERIOR SIN HIGHLIGHT */}
            <h5 className="text-base md:text-xl font-black tracking-[0.12em] uppercase text-[#0066FF] mb-6">
              DESIGNED FOR WHAT'S NEXT
            </h5>

            {/* TAMAÑO REDUCIDO PARA AJUSTAR EN DOS LÍNEAS/BLOQUES */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter mb-5 text-[#000B3D]">
              The Pulse of Your <br />
              <span className="text-[#0066FF]">Bioprocess.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-500 mb-8 max-w-3xl leading-relaxed">
              Precision SERS analytics for automated labs that demand instant metabolic feedback.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-[#0066FF] text-white px-14 md:px-16 py-6 md:py-7 rounded-full font-bold uppercase tracking-widest text-sm md:text-base hover:bg-[#000B3D] transition-all flex items-center gap-4 group shadow-2xl shadow-blue-500/30 active:scale-95">
                Our Technology <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 md:px-12 py-6 md:py-7 rounded-full font-bold uppercase tracking-widest text-sm md:text-base text-[#000B3D] border-2 border-[#000B3D] hover:bg-[#000B3D] hover:text-white transition-all active:scale-95">
                View Applications
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP - Usando AnimatedCounter Actualizado */}
      <section className="py-12 border-b border-gray-100 relative z-10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-[1400px] px-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { label: 'Analytical Accuracy', value: 99.8, suffix: '%', decimals: 1, color: 'text-[#0066FF]' },
              { label: 'Data Processing', value: 14, suffix: 'x', decimals: 0, color: 'text-[#000B3D]' },
              { label: 'Cloud Trials', value: 1500, suffix: '+', decimals: 0, color: 'text-[#000B3D]' },
              { label: 'Detection Speed', value: 0.2, suffix: 's', decimals: 1, color: 'text-[#000B3D]' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`text-4xl md:text-5xl font-bold tracking-tighter mb-2 ${stat.color}`}>
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                  />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* TECHNOLOGY SECTION - Usando AnimatedCounter (Ya configurado) */}
      <section className="py-24 bg-[#000B3D]/95 text-white relative z-10 backdrop-blur-sm shadow-2xl" id="technology">
        <div className="container mx-auto max-w-[1400px] px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {/* TAMAÑO REDUCIDO TAMBIÉN AQUÍ PARA CONSISTENCIA */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tighter uppercase">
                <span className="block whitespace-nowrap text-white">
                OUR SPECTRAL
                </span>
                <span className="block text-orange-500">CORE.</span>
              </h2>
              
              <p className="text-blue-100/60 text-lg mb-8 max-w-2xl leading-relaxed">
                Multi-analyte SERS data streams enabling real-time bioprocess monitoring and automated lab control.
              </p>
              
              {/* Glassmorphism Box for SERS Features */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-3xl p-8">

                <h3 className="text-lg md:text-xl font-bold tracking-[0.100em] text-white uppercase mb-12 border-b border-white/10 pb-4">
                  SERS Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-y-10 gap-x-8">
                  {[
                    { value: 100, title: 'More Sensitive', desc: 'Finds the smallest traces hidden in any mix.' },
                    { value: 40, title: 'Less Sample', desc: 'Test often without draining your bioreactor.' },
                    { value: 30, title: 'Lower Power', desc: 'High precision that is gentle on your cells.' },
                    { value: 12, title: 'Faster', desc: 'Get results instantly. No waiting.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2 group">
                      <div className="text-4xl md:text-5xl font-black text-orange-500 tracking-tighter mb-1">
                        <AnimatedCounter value={item.value} suffix="×" />
                      </div>
                      <div>
                        <span className="font-bold tracking-wide text-sm uppercase block mb-2 text-white">{item.title}</span>
                        <span className="text-sm text-blue-100/70 leading-relaxed block font-light">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative group">
              <div className="absolute -inset-10 bg-orange-500/10 rounded-full blur-[100px] opacity-50"></div>
              <div className="bg-white/5 rounded-[3rem] p-4 border border-white/10 backdrop-blur-sm overflow-hidden shadow-2xl" style={{ minHeight: '500px' }}>
                <RamanSERSChart />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS SECTION */}
      <section className="py-16 px-8 relative z-10" id="applications">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden shadow-2xl relative group max-h-[450px]">
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                <img 
                  src="https://www.inspek-solutions.com/wp-content/uploads/2025/10/AI-visual-1-1024x1024.png" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt="AI Platform Visual"
                />
             </div>
             <div className="lg:w-1/2 text-center lg:text-left">
                <h5 className="text-xs font-black tracking-[0.3em] uppercase text-[#0066FF] mb-5">Our Digital Ecosystem</h5>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#000B3D]">The <span className="text-[#0066FF] italic font-medium underline decoration-blue-100 underline-offset-8">next-gen</span> platform.</h2>
                <p className="text-xl text-gray-500 leading-relaxed mb-8 font-light">
                  Combining <strong>Integrated Photonics</strong> with optical sensing and <strong>AI</strong> to lead the bioprocessing industry into a new age of data-driven precision.
                </p>
                <button className="flex items-center justify-center lg:justify-start gap-4 text-sm font-bold tracking-widest uppercase text-[#0066FF] hover:text-[#000B3D] transition-colors group">
                  EXPLORE OUR TECHNOLOGY <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white/90 border-t border-gray-100 relative z-10 backdrop-blur-md" id="company">
        <div className="container mx-auto max-w-[1400px] px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-full lg:col-span-2">
              <img src={LOGO_URL} alt="Logo" className="h-24 md:h-28 mb-6 object-contain" />
              <p className="text-gray-400 max-w-sm leading-relaxed mb-6 text-base">
                Pioneering the future of bioprocess optimization through photonic sensing and industrial AI.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center text-[#000B3D] hover:text-[#0066FF] hover:border-[#0066FF] transition-all shadow-sm"><Linkedin size={18} /></a>
                <a href="#" className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center text-[#000B3D] hover:text-[#0066FF] hover:border-[#0066FF] transition-all shadow-sm"><Twitter size={18} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#000B3D] mb-6">Quick Links</h4>
              <ul className="space-y-3 text-[13px] font-bold text-gray-500 uppercase tracking-widest">
                <li><a href="#technology" className="hover:text-[#0066FF] transition-colors">Technology</a></li>
                <li><a href="#applications" className="hover:text-[#0066FF] transition-colors">Applications</a></li>
                <li><a href="#" className="hover:text-[#0066FF] transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#000B3D] mb-6">Get in touch</h4>
              <p className="text-base font-bold text-[#0066FF] underline decoration-blue-200 underline-offset-8 mb-4 cursor-pointer hover:text-[#000B3D] transition-colors">
                contact@prospect-biotech.com
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">&copy; 2025 Prospect Biotech Solutions S.A. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}