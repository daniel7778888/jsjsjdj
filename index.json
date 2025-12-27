import React, { useState, useEffect, useRef } from 'react';
import { Play, Music, Camera, Sparkles, CheckCircle, MapPin, Pause, ArrowRight, Zap, ExternalLink, MousePointer2 } from 'lucide-react';

// --- STYLES & ANIMATIONS ---
const styles = `
  /* Smooth Scroll Behavior */
  html {
    scroll-behavior: smooth;
  }
  
  /* Custom Cursor Hide (we use custom div) */
  .custom-cursor-area {
    cursor: none;
  }

  /* Animations */
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(1deg); }
  }
  
  @keyframes grain {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -10%); }
    20% { transform: translate(-15%, 5%); }
    30% { transform: translate(7%, -25%); }
    40% { transform: translate(-5%, 25%); }
    50% { transform: translate(-15%, 10%); }
    60% { transform: translate(15%, 0%); }
    70% { transform: translate(0%, 15%); }
    80% { transform: translate(3%, 35%); }
    90% { transform: translate(-10%, 10%); }
  }

  .grain-overlay {
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E");
    animation: grain 8s steps(10) infinite;
    pointer-events: none;
    z-index: 50;
    opacity: 0.05;
  }

  @keyframes spin-vinyl {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .vinyl-spin {
    animation: spin-vinyl 4s linear infinite;
  }
  .vinyl-paused {
    animation-play-state: paused;
  }

  /* Flashlight Effect */
  .flashlight-mask {
    mask-image: radial-gradient(circle 250px at var(--x) var(--y), black 100%, transparent 100%);
    -webkit-mask-image: radial-gradient(circle 250px at var(--x) var(--y), black 100%, transparent 100%);
  }
`;

const LandingPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0908] font-sans text-stone-100 selection:bg-amber-500 selection:text-white overflow-x-hidden relative cursor-default">
      <style>{styles}</style>
      
      {/* Cinematic Grain Overlay */}
      <div className="grain-overlay"></div>

      {/* Floating Telegram Button (Magnetic) */}
      <MagneticButton className="fixed bottom-8 right-8 z-[60]">
        <a 
          href="https://t.me/ozhiviBY" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-3 bg-[#2AABEE] text-white p-4 rounded-full shadow-[0_0_30px_rgba(42,171,238,0.4)] border-4 border-[#0a0908] transition-transform hover:scale-110"
        >
          <TelegramIcon size={28} />
          <span className="font-bold pr-2 hidden md:inline">Наш канал</span>
        </a>
      </MagneticButton>

      {/* --- HERO SECTION: THE FLASHLIGHT EFFECT --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden custom-cursor-area">
        
        {/* Layer 1: Background (Dimmed / B&W) */}
        <div className="absolute inset-0 z-0">
           {/* Collage of nostalgic elements */}
           <div className="absolute top-10 left-10 w-64 h-80 bg-stone-800 rotate-[-6deg] opacity-20 grayscale blur-sm"></div>
           <div className="absolute bottom-20 right-20 w-80 h-64 bg-stone-800 rotate-[3deg] opacity-20 grayscale blur-sm"></div>
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-900 rounded-full blur-[100px] opacity-50"></div>
        </div>

        {/* Layer 2: The Flashlight Reveal (Color & Sharp) */}
        <div 
            className="absolute inset-0 z-10 pointer-events-none flashlight-mask bg-[#0a0908]"
            style={{ 
              '--x': `${mousePos.x}px`, 
              '--y': `${mousePos.y + scrolled}px`, // Adjust for scroll
              background: 'radial-gradient(circle at center, #1c1917 0%, #0a0908 100%)' // Dark but slightly lighter than base
            }}
        >
            {/* Hidden vibrant elements revealed by mask */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-amber-600/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-orange-500/20 rounded-full blur-[80px]"></div>
            
            {/* Animated particles only visible in flashlight */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
        </div>

        {/* Layer 3: Content (Always Visible) */}
        <div className="container mx-auto px-6 relative z-20 pt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Text Content */}
            <div className="lg:w-1/2 pointer-events-auto">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-amber-500 text-xs font-bold uppercase tracking-widest mb-8 animate-fadeIn">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                  Online • Belarus
               </div>

               <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.9] mb-8 text-white mix-blend-screen">
                 ОЖИВИ <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 animate-gradient">
                   ИСТОРИЮ
                 </span>
               </h1>

               <p className="text-xl text-stone-400 mb-10 max-w-lg leading-relaxed">
                 Посвети фонариком на прошлое. Мы превращаем старые фото в видео, а воспоминания — в вечные песни.
               </p>

               <div className="bg-stone-900/80 backdrop-blur-xl border border-stone-800 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <HeroForm />
               </div>
            </div>

            {/* Visual: The Vinyl (Interactive Physics) */}
            <div className="lg:w-1/2 w-full flex justify-center pointer-events-auto mt-12 lg:mt-0">
               <InteractiveVinyl />
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-stone-500 animate-bounce pointer-events-none">
           <MousePointer2 size={24} className="opacity-50" />
        </div>
      </section>

      {/* --- TELEGRAM STRIP (Marquee) --- */}
      <section className="bg-[#2AABEE] py-4 overflow-hidden relative rotate-[-1deg] scale-105 z-30 shadow-2xl border-y-4 border-black">
         <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 mx-6 text-black font-black text-xl uppercase tracking-wider">
                 <TelegramIcon size={24} />
                 <span>Примеры работ в TG</span>
              </div>
            ))}
         </div>
      </section>

      {/* --- SERVICES (Parallax Cards) --- */}
      <section className="py-32 px-6 relative z-20">
         <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-6xl font-serif font-black mb-20 text-center">
               МАГИЯ ТЕХНОЛОГИЙ
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
               <ParallaxCard 
                  delay={0}
                  icon={<Camera size={40} className="text-amber-500"/>}
                  title="Оживление"
                  desc="Статика превращается в кино. Взгляд, улыбка, поворот головы."
               />
               <ParallaxCard 
                  delay={0.1}
                  icon={<Music size={40} className="text-amber-500"/>}
                  title="Нейро-Песня"
                  desc="Уникальные стихи и музыка про вашу семью. До слёз."
               />
               <ParallaxCard 
                  delay={0.2}
                  icon={<Sparkles size={40} className="text-amber-500"/>}
                  title="4K Монтаж"
                  desc="Собираем всё в единый фильм. Качество, достойное ТВ."
               />
            </div>
         </div>
      </section>

      {/* --- INTERACTIVE SLIDER --- */}
      <section className="py-20 px-6 bg-stone-900 relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-12">
               <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Интерактив</span>
               <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">Почувствуй разницу</h2>
            </div>
            
            <div className="bg-stone-800 p-2 rounded-[2.5rem] shadow-2xl border border-stone-700">
               <ComparisonSlider />
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-black text-center border-t border-stone-800">
         <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-6">
               <div className="w-12 h-12 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                  <Sparkles size={24} />
               </div>
               <p className="text-stone-500 max-w-md mx-auto">
                  Мы создаем эмоции, которые остаются навсегда. Работаем по всей Беларуси, отправляем магию через Telegram.
               </p>
               <a href="https://t.me/ozhiviBY" target="_blank" rel="noreferrer" className="text-[#2AABEE] font-bold hover:underline flex items-center gap-2">
                  <ExternalLink size={16} />
                  t.me/ozhiviBY
               </a>
            </div>
         </div>
      </footer>
    </div>
  );
};

/* --- SUBCOMPONENTS --- */

const MagneticButton = ({ children, className }) => {
  const btnRef = useRef(null);
  
  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    
    // Magnetic pull strength
    btnRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    btnRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div 
      ref={btnRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

const HeroForm = () => {
  const [step, setStep] = useState('input'); // input | sending | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('sending');
    setTimeout(() => setStep('success'), 1500);
  };

  return (
    <div className="relative z-10 w-full">
      {step === 'input' && (
        <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">Заказать магию</h3>
          </div>
          <div className="space-y-3">
             <div className="group relative">
                <input required type="text" placeholder=" " className="peer w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-4 text-white focus:border-amber-500 focus:outline-none transition-all pt-6" />
                <label className="absolute left-4 top-4 text-stone-500 text-xs font-bold uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-500">Ваше имя</label>
             </div>
             <div className="group relative">
                <input required type="text" placeholder=" " className="peer w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-4 text-white focus:border-amber-500 focus:outline-none transition-all pt-6" />
                <label className="absolute left-4 top-4 text-stone-500 text-xs font-bold uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-500">Телефон / TG</label>
             </div>
          </div>
          <button className="w-full py-4 mt-2 bg-white text-black rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] flex items-center justify-center gap-2">
             <span>Отправить</span>
             <ArrowRight size={18} />
          </button>
        </form>
      )}
      
      {step === 'sending' && (
         <div className="flex flex-col items-center justify-center py-10 animate-pulse">
            <Sparkles size={48} className="text-amber-500 mb-4 animate-spin-slow" />
            <p className="text-stone-400 font-mono uppercase tracking-widest">Отправляем во вселенную...</p>
         </div>
      )}

      {step === 'success' && (
         <div className="text-center py-6 animate-fadeIn">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
               <CheckCircle size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Заявка принята!</h3>
            <p className="text-stone-400 mb-6">Скоро свяжемся с вами.</p>
            <button onClick={() => setStep('input')} className="text-amber-500 text-sm font-bold hover:text-amber-400 underline decoration-dashed">
               Отправить еще
            </button>
         </div>
      )}
    </div>
  );
};

const InteractiveVinyl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer perspective-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setIsPlaying(!isPlaying)}
    >
       {/* Glow Effect */}
       <div className={`absolute inset-0 bg-amber-600/20 rounded-full blur-[80px] transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>

       {/* Album Cover Background (Square) */}
       <div className={`w-80 h-80 bg-stone-800 rounded-xl shadow-2xl absolute top-0 left-0 transform transition-transform duration-700 ${isPlaying ? 'translate-x-[-40px] rotate-[-5deg]' : 'translate-x-0 rotate-0'} z-10 border border-stone-700 flex items-center justify-center`}>
          <div className="text-center opacity-80">
             <Music size={48} className="mx-auto text-stone-600 mb-4" />
             <p className="font-serif font-bold text-2xl text-stone-500">Воспоминания</p>
          </div>
       </div>

       {/* The Vinyl Disc */}
       <div className={`w-80 h-80 rounded-full bg-black border-[6px] border-[#1a1a1a] shadow-2xl relative z-20 transform transition-transform duration-700 ${isPlaying ? 'translate-x-[60px]' : 'translate-x-2'}`}>
          {/* Shine */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-30"></div>
          
          <div className={`w-full h-full rounded-full flex items-center justify-center ${isPlaying ? 'vinyl-spin' : ''}`}>
              {/* Grooves */}
              <div className="absolute inset-2 border border-stone-800 rounded-full opacity-50"></div>
              <div className="absolute inset-4 border border-stone-800 rounded-full opacity-50"></div>
              <div className="absolute inset-6 border border-stone-800 rounded-full opacity-50"></div>
              <div className="absolute inset-8 border border-stone-800 rounded-full opacity-50"></div>
              
              {/* Center Label */}
              <div className="w-28 h-28 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center relative shadow-inner z-40">
                 <div className="w-3 h-3 bg-white rounded-full"></div>
                 <span className="absolute bottom-6 text-[8px] font-black uppercase tracking-widest text-amber-900">Stereo Sound</span>
              </div>
          </div>
       </div>

       {/* Tonearm */}
       <div className={`absolute top-[-20px] right-[-40px] w-6 h-32 bg-stone-300 rounded-full origin-top z-50 shadow-xl transition-transform duration-700 ${isPlaying ? 'rotate-[25deg] translate-x-[60px]' : 'rotate-0 translate-x-2'}`}>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-stone-400 rounded-md"></div>
       </div>

       {/* Play Button Overlay */}
       <div className={`absolute top-1/2 left-1/2 transform translate-x-[60px] -translate-y-1/2 z-50 transition-all duration-300 ${isPlaying ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg">
             <Play className="fill-white text-white ml-1" />
          </div>
       </div>
    </div>
  );
};

const ParallaxCard = ({ icon, title, desc, delay }) => {
  return (
    <div 
      className="group p-8 rounded-[2rem] bg-stone-900 border border-stone-800 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:bg-stone-800 relative overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-stone-800 group-hover:scale-110 transition-transform duration-300 relative z-10">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{title}</h3>
      <p className="text-stone-400 leading-relaxed relative z-10 group-hover:text-stone-300 transition-colors">{desc}</p>
    </div>
  );
};

const ComparisonSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);
  
  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden cursor-ew-resize select-none group">
      {/* After Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
            backgroundImage: 'url("/api/placeholder/1200/800")', 
            filter: 'brightness(1.1) contrast(1.1) saturate(1.2)'
        }}
      >
        <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold text-sm border border-white/20">ПОСЛЕ</div>
      </div>

      {/* Before Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
            backgroundImage: 'url("/api/placeholder/1200/800")',
            filter: 'grayscale(100%) sepia(50%) brightness(0.8) blur(0.5px)',
            clipPath: `inset(0 ${100 - sliderValue}% 0 0)`
        }}
      >
        <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold text-sm border border-white/20">ДО</div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      />
      
      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.8)] z-20 pointer-events-none"
        style={{ left: `${sliderValue}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full shadow-2xl flex items-center justify-center text-amber-500 border-2 border-amber-500 transform transition-transform group-hover:scale-125">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </div>
    </div>
  );
};

// --- ICONS ---
const TelegramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.4-1.08.39-.35-.01-1.03-.2-1.53-.37-.62-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.77-1.14 3.35-1.34 3.73-1.34.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
  </svg>
);

export default LandingPage;
