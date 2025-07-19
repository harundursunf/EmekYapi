import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Video, X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';

// ALT BİLEŞEN: Lightbox (Resim/Video Görüntüleyici)
const Lightbox = ({ items, currentIndex, onClose }) => {
    const [index, setIndex] = useState(currentIndex);
    const goToNext = (e) => { e.stopPropagation(); setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1)); };
    const goToPrevious = (e) => { e.stopPropagation(); setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1)); };
    const item = items[index];
    const videoProps = item.type === 'video' ? { autoPlay: true, controls: true } : {};
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') goToNext(e);
            if (e.key === 'ArrowLeft') goToPrevious(e);
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [index]);
    return (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} >
            <button onClick={goToPrevious} className="absolute left-4 z-50 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"><ChevronLeft size={32} /></button>
            <AnimatePresence initial={false} mode="wait">
                <motion.div key={index} className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, ease: 'easeInOut' }} onClick={(e) => e.stopPropagation()} >
                    {item.type === 'video' ? (<video {...videoProps} className="max-w-full max-h-full"><source src={item.src} type="video/mp4" /></video>) : (<img src={item.src} alt={item.title || ''} className="max-w-full max-h-full" />)}
                </motion.div>
            </AnimatePresence>
            <button onClick={goToNext} className="absolute right-4 z-50 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"><ChevronRight size={32} /></button>
            <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white transition-opacity"><X size={32} /></button>
        </motion.div>
    );
};

// ALT BİLEŞEN: Medya (Resim veya Videoyu Oynatır)
const Media = ({ item, autoplay = false }) => ( item.type === 'video' ? (<video autoPlay={autoplay} loop={autoplay} muted={autoplay} playsInline={autoplay} controls={!autoplay} className="w-full h-full object-cover"><source src={item.src} type="video/mp4" /></video>) : ( <img src={item.src} alt={item.title || ''} className="w-full h-full object-cover" /> ) );

// ALT BİLEŞEN: Öne Çıkanlar
const FeaturedItem = ({ item }) => {
    const motionProps = { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.3 } };
    const variants = { scaleIn: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }, fadeInLeft: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }, fadeInRight: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }, };
    const mediaElement = <Media item={item} autoplay={true} />;
    switch (item.layout) {
        case 'overlay': return ( <motion.section {...motionProps} variants={variants.scaleIn} className="relative h-[80vh] flex items-end justify-start text-white"><div className="absolute inset-0">{mediaElement}</div><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div><div className="relative z-10 p-12"><h2 className="text-5xl font-bold">{item.title}</h2><p className="mt-4 max-w-lg text-lg text-gray-200">{item.description}</p></div></motion.section> );
        case 'left-media': return ( <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 py-20"><motion.div {...motionProps} variants={variants.fadeInLeft} className="h-[70vh] rounded-lg overflow-hidden shadow-xl">{mediaElement}</motion.div><motion.div {...motionProps} variants={variants.fadeInRight} className="text-center md:text-left"><h2 className="text-4xl font-bold">{item.title}</h2><p className="mt-4 text-lg text-gray-600">{item.description}</p></motion.div></section> );
        case 'right-media': return ( <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 py-20"><motion.div {...motionProps} variants={variants.fadeInLeft} className="text-center md:text-left md:order-1"><h2 className="text-4xl font-bold">{item.title}</h2><p className="mt-4 text-lg text-gray-600">{item.description}</p></motion.div><motion.div {...motionProps} variants={variants.fadeInRight} className="md:order-2 h-[70vh] rounded-lg overflow-hidden shadow-xl">{mediaElement}</motion.div></section> );
        default: return null;
    }
};

// ANA GALERİ BİLEŞENİ
function Galeri() {
  const [lightboxState, setLightboxState] = useState({ isOpen: false, items: [], startIndex: 0 });
  const [activeFilter, setActiveFilter] = useState('image');
  
  const featuredItems = [
    { id: 'f1', type: 'image', src: '/resim1.webp', layout: 'overlay', title: 'Vizyondan Gerçeğe', description: 'Her harika yapının arkasında sağlam bir vizyon yatar.' },
    { id: 'f2', type: 'video', src: '/video1.mp4', layout: 'right-media', title: 'Yükselen Duvarlar', description: 'Kalite ve tecrübe ile temellerden gökyüzüne uzanan bir yolculuk.' },
    { id: 'f3', type: 'image', src: '/resim2.webp', layout: 'left-media', title: 'İnce İşçilik', description: 'Detaylara verdiğimiz önem, projelerimizin ruhunu oluşturur.' },
  ];
  
  const gridItems = [
    { id: 'p3', type: 'image', src: '/resim3.webp', title: 'Mersin İçköy', description: 'Dış cephe montalama görünümü' }, 
    { id: 'p4', type: 'image', src: '/resim4.webp', title: 'Proje Başlangıcı', description: 'Sağlam temeller, güvenli gelecek' },
    { id: 'p5', type: 'image', src: '/resim5.webp', title: 'Modern Çizgiler', description: 'Estetik ve fonksiyonel tasarım' },
    { id: 'p6', type: 'image', src: '/resim6.webp', title: 'Cephe Detayı', description: 'Kaliteli malzeme ile kusursuz işçilik' },
    { id: 'p7', type: 'image', src: '/resim7.webp', title: 'Geniş Balkonlar', description: 'Hayata açılan ferah alanlar' },
    { id: 'p8', type: 'image', src: '/resim8.webp', title: 'İç Mekan Holü', description: 'Binaya ilk adımda kalite' },
    { id: 'p9', type: 'image', src: '/resim9.webp', title: 'Manzara Görünümü', description: 'Şehir ve doğa ile iç içe yaşam' }, 
    { id: 'p10', type: 'image', src: '/resim10.webp', title: 'Çatı İzolasyonu', description: 'Konfor ve enerji tasarrufu' },
    { id: 'p11', type: 'image', src: '/resim11.webp', title: 'Peyzaj Alanları', description: 'Yeşille çevrili huzurlu bir ortam' },
    { id: 'p12', type: 'image', src: '/resim12.webp', title: 'Otopark Girişi', description: 'Güvenli ve pratik park alanları' },
    { id: 'p13', type: 'image', src: '/resim13.webp', title: 'Örnek Daire Salon', description: 'Modern ve şık yaşam alanı' },
    { id: 'p14', type: 'image', src: '/resim14.webp', title: 'Mutfak Tasarımı', description: 'Fonksiyonel ve estetik mutfaklar' },
    { id: 'p15', type: 'image', src: '/resim15.webp', title: 'Yatak Odası', description: 'Huzurlu ve konforlu dinlenme alanları' },
    { id: 'p16', type: 'image', src: '/resim16.webp', title: 'Banyo Detayı', description: 'Hijyen ve zarafet bir arada' },
    { id: 'p17', type: 'image', src: '/resim17.webp', title: 'Sosyal Tesis', description: 'Komşularla keyifli anlar için' },
    { id: 'p18', type: 'image', src: '/resim18.webp', title: 'Gece Görünümü', description: 'Işıklandırma ile estetik bir silüet' },
    { id: 'p19', type: 'image', src: '/resim19.webp', title: 'Hava Fotoğrafı', description: 'Projenin kuşbakışı görünümü' },
    { id: 'p20', type: 'image', src: '/resim20.webp', title: 'Blok Girişi', description: 'Prestijli bir karşılama' },
    { id: 'p21', type: 'image', src: '/resim21.webp', title: 'Çocuk Parkı', description: 'Minikler için güvenli eğlence' },
    { id: 'p22', type: 'image', src: '/resim22.webp', title: 'Proje Maketi', description: 'Detayların üç boyutlu hali' },
    { id: 'v2', type: 'video', src: '/video2.mp4', title: 'İnşaat Süreci', description: 'Temelden çatıya emeğin yolculuğu.' },
    { id: 'v3', type: 'video', src: '/video3.mp4', title: 'Drone Çekimi', description: 'Projemize gökyüzünden bir bakış.' },
  ];

  const allPhotos = [...featuredItems.filter(i => i.type === 'image'), ...gridItems.filter(i => i.type === 'image')];
  const allVideos = [...featuredItems.filter(i => i.type === 'video'), ...gridItems.filter(i => i.type === 'video')];

  const openLightbox = (itemsList, clickedItemId) => {
    const startIndex = itemsList.findIndex(item => item.id === clickedItemId);
    if (startIndex !== -1) setLightboxState({ isOpen: true, items: itemsList, startIndex: startIndex });
  };
  
  return (
    <div className="bg-white text-gray-800 pt-[116px]">
        <motion.section className="bg-gray-50 py-28 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="container mx-auto px-6"><h1 className="text-5xl font-bold tracking-tight md:text-7xl">Galerimiz</h1><p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">Projelerimizin her aşamasından ve tamamlanmış hallerinden en özel kareler.</p></div>
        </motion.section>

        <div className="bg-white">
            {featuredItems.map((item, index) => (
                <div key={item.id} className={`${item.layout !== 'overlay' && index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                    <FeaturedItem item={item} />
                </div>
            ))}
        </div>

        <section className="bg-white py-28">
            <div className="container mx-auto px-6">
                <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}><h2 className="text-4xl font-bold">İlham Veren Kareler</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Projelerimizden daha fazla detay ve an.</p></motion.div>
                <div className="flex justify-center items-center space-x-4 mb-12">
                    <button onClick={() => setActiveFilter('image')} className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === 'image' ? 'bg-amber-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}><Camera size={16}/><span>Fotoğraflar</span></button>
                    <button onClick={() => setActiveFilter('video')} className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === 'video' ? 'bg-amber-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}><Video size={16}/><span>Videolar</span></button>
                </div>
                
                <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.1 }}>
                    <AnimatePresence>
                        {gridItems.filter(item => item.type === activeFilter).map(item => (
                            <motion.div 
                                key={item.id} 
                                className="group relative aspect-square overflow-hidden rounded-lg shadow-sm"
                                layout 
                                initial={{ opacity: 0, scale: 0.8 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                exit={{ opacity: 0, scale: 0.8 }} 
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                {/* Katman 1: Resim (Hep arkada) */}
                                <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
                                    <Media item={item} />
                                </div>
                                
                                {/* Katman 2: Yazıların okunması için gradient (Hep sabit) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                {/* Katman 3: Yazı Bloğu (Fare üzerine gelince yukarı kaybolur) */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                                    <p className="text-sm text-gray-300">{item.description}</p>
                                </div>

                                {/* Katman 4: "Büyüt" Butonu (Fare üzerine gelince alttan kayarak çıkar) */}
                                <button 
                                    onClick={() => openLightbox(activeFilter === 'image' ? allPhotos : allVideos, item.id)}
                                    className="absolute bottom-0 left-0 right-0 flex h-16 items-center justify-center gap-2 bg-amber-500 text-white font-bold tracking-wider transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"
                                >
                                    <Expand size={20} />
                                    <span>BÜYÜT</span>
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>

        <AnimatePresence>
            {lightboxState.isOpen && (<Lightbox items={lightboxState.items} currentIndex={lightboxState.startIndex} onClose={() => setLightboxState({ isOpen: false, items: [], startIndex: 0 })} />)}
        </AnimatePresence>
    </div>
  );
}

export default Galeri;