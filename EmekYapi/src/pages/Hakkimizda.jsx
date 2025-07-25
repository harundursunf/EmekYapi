import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, Users, Zap, CheckCircle, Briefcase, TrendingUp, Globe, Heart, ArrowRight, Star, Building, Target, Eye } from 'lucide-react';

// Smooth parallax hook
const useParallax = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return offset;
};

// Professional Value Card
const ValueCard = ({ icon, title, children, delay, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 150);
        }
      },
      { threshold: 0.3 }
    );
    
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);
  
  return (
    <div
      ref={cardRef}
      className={`group cursor-pointer transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:scale-105`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
      
      <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
        </div>
        
        <div className="relative p-8">
          {/* Icon */}
          <div className={`inline-flex p-4 rounded-xl mb-6 transition-all duration-500 ${
            isHovered 
              ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white scale-110' 
              : 'bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600'
          }`}>
            {React.cloneElement(icon, { size: 28 })}
          </div>
          
          <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
            isHovered ? 'text-blue-600' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            {children}
          </p>
          
          {/* Hover indicator */}
          <div className={`flex items-center text-blue-600 font-semibold transition-all duration-300 ${
            isHovered ? 'translate-x-2 opacity-100' : 'opacity-0'
          }`}>
            <span className="text-sm">Detayları Gör</span>
            <ArrowRight size={14} className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Professional Timeline Item
const TimelineItem = ({ year, title, children, side, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.2 }
    );
    
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [index]);
  
  return (
    <div 
      ref={itemRef}
      className={`flex justify-between items-center w-full mb-12 ${side === 'right' ? 'flex-row-reverse' : ''}`}
    >
      <div className="w-5/12">
        <div className={`group relative transform transition-all duration-800 ${
          isVisible 
            ? 'translate-x-0 opacity-100' 
            : side === 'left' ? '-translate-x-16 opacity-0' : 'translate-x-16 opacity-0'
        } hover:scale-105`}>
          
          <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            
            {/* Year badge */}
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full mb-4 shadow-lg">
              {year}
            </div>
            
            <h4 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h4>
            
            <p className="text-gray-600 leading-relaxed">
              {children}
            </p>
            
            {/* Subtle decoration */}
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
      
      <div className="relative w-1/12 flex justify-center">
        <div className="h-full w-0.5 bg-gray-200"></div>
        <div className={`absolute top-1/2 -mt-3 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-white shadow-lg transform transition-all duration-500 ${
          isVisible ? 'scale-100' : 'scale-0'
        } hover:scale-125`}></div>
      </div>
      
      <div className="w-5/12"></div>
    </div>
  );
};

// Professional Stats Card
const StatCard = ({ number, label, icon, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const statRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counter
          const targetNumber = parseInt(number.replace('+', ''));
          const duration = 2000;
          const step = targetNumber / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += step;
            if (current >= targetNumber) {
              current = targetNumber;
              clearInterval(timer);
            }
            setCount(Math.floor(current));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    
    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, [number]);
  
  return (
    <div 
      ref={statRef}
      className={`text-center group cursor-pointer transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } hover:scale-105`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        {icon}
      </div>
      
      <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {isVisible ? (number.includes('+') ? `${count}+` : count) : '0'}
      </div>
      
      <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
        {label}
      </div>
    </div>
  );
};

function Hakkimizda() {
  const parallaxOffset = useParallax();
  
  return (
    <div className="bg-gray-50 text-gray-800 pt-[80px]">
      
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Professional background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"></div>
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-blue-600 mb-8 shadow-md border border-white/50">
              <Building className="w-4 h-4 mr-2" />
              20+ Yıllık Tecrübe
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              Geleceği
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text block">
                İnşa Ediyoruz
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              Her projede kalite, güven ve yenilikçiliği bir araya getirerek, sadece bina değil, yaşam deneyimleri yaratıyoruz.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center">
                  Projelerimizi İnceleyin
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-md">
                İletişime Geçin
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105"
              style={{
                transform: `translateY(${parallaxOffset * 0.05}px)`
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">1000+ Proje</div>
                  <div className="text-sm text-gray-600">Başarıyla Tamamlandı</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Temel Değerlerimiz
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Başarının Temelleri
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Her projemizin DNA'sında yer alan ve bizi sektörde farklı kılan dört ana değerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<ShieldCheck />} 
              title="Güvenilirlik" 
              delay={0.1}
              index={0}
            >
              Sözümüzün arkasında dururuz. Şeffaf süreçler ve dürüst iletişimle güven köprüleri kuruyoruz.
            </ValueCard>
            
            <ValueCard 
              icon={<Award />} 
              title="Kalite" 
              delay={0.2}
              index={1}
            >
              Malzeme seçiminden işçiliğe kadar her detayda en yüksek standartları hedefliyoruz.
            </ValueCard>
            
            <ValueCard 
              icon={<Zap />} 
              title="Yenilikçilik" 
              delay={0.3}
              index={2}
            >
              Sektördeki en son teknolojileri takip ederek projelerimize modern çözümler entegre ediyoruz.
            </ValueCard>
            
            <ValueCard 
              icon={<Users />} 
              title="İnsan Odaklılık" 
              delay={0.4}
              index={3}
            >
              Müşteri memnuniyetini ve ekip mutluluğunu her zaman önceliğimiz olarak görüyoruz.
            </ValueCard>
          </div>
        </div>
      </section>
      
      {/* TIMELINE SECTION */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-sm font-semibold text-purple-600 mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Yolculuğumuz
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tecrübe ile Şekillenen Hikaye
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Her dönüm noktası, bir sonraki başarının temelini oluşturdu
            </p>
          </div>
          
          <div className="relative">
            <TimelineItem year="2003" title="Kuruluş Yılı" side="left" index={0}>
              Emek Yapı, kalite ve güven ilkesiyle sektöre adım attı. İlk projelerimizde bile müşteri memnuniyetini esas aldık.
            </TimelineItem>
            
            <TimelineItem year="2010" title="Büyük Atılım" side="right" index={1}>
              200+ konutluk ilk büyük ölçekli projemizi başarıyla teslim ettik ve sektördeki güvenilirliğimizi pekiştirdik.
            </TimelineItem>
            
            <TimelineItem year="2018" title="Teknolojik Yatırım" side="left" index={2}>
              3D modelleme, proje yönetim sistemleri ve modern inşaat teknolojilerini iş akışımıza dahil ettik.
            </TimelineItem>
            
            <TimelineItem year="2025" title="Sektör Lideri" side="right" index={3}>
              1000+ tamamlanmış proje ve %100 müşteri memnuniyeti ile sektörde öncü konumumuzu sürdürüyoruz.
            </TimelineItem>
          </div>
        </div>
      </section>

      {/* TEAM & STATS SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border border-white/20">
                <Users className="w-4 h-4 mr-2" />
                Güçlü Ekip
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Uzman Ekibimiz
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                Mimar, mühendis ve ustalardan oluşan deneyimli ekibimiz, her projeye tutku ve özveriyle yaklaşıyor.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatCard 
                  number="22" 
                  label="Yıl Tecrübe" 
                  icon={<Award className="w-8 h-8 text-white" />}
                  delay={0.1}
                />
                <StatCard 
                  number="1000+" 
                  label="Tamamlanan Proje" 
                  icon={<Building className="w-8 h-8 text-white" />}
                  delay={0.2}
                />
                <StatCard 
                  number="50+" 
                  label="Uzman Ekip" 
                  icon={<Users className="w-8 h-8 text-white" />}
                  delay={0.3}
                />
                <StatCard 
                  number="100" 
                  label="Müşteri Memnuniyeti" 
                  icon={<Star className="w-8 h-8 text-white" />}
                  delay={0.4}
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
                  alt="Emek Yapı Ekibi" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Team quote */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl p-6">
                <p className="text-white font-medium mb-2">
                  "Kalite bizim tutkumuz, müşteri memnuniyeti en büyük başarımız."
                </p>
                <p className="text-gray-300 text-sm">
                  Emek Yapı Ekibi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-sm font-semibold text-green-600 mb-8">
              <Briefcase className="w-4 h-4 mr-2" />
              Birlikte Çalışalım
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Hayallerinizi Gerçekleştirelim
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Bir sonraki projenizde kalite, estetik ve güveni bir arada deneyimleyin. 
              Uzman ekibimizle hayalinizdeki yaşam alanını birlikte inşa edelim.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center">
                  İletişime Geçin
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-bold text-lg hover:border-blue-300 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-md">
                Projelerimizi İnceleyin
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hakkimizda;