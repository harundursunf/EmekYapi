import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Paintbrush, Gem, Layers3, Trees, LandPlot, CheckCircle } from 'lucide-react';

// "Önce & Sonra" Slider Bileşeni
const BeforeAfterSlider = ({ before, after, title }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    return (
        <div className="relative w-full max-w-5xl mx-auto h-[70vh] select-none group shadow-2xl">
            <img src={after} alt={`Sonrası - ${title}`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <img src={before} alt={`Öncesi - ${title}`} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize backdrop-blur-sm" style={{ left: `calc(${sliderPosition}% - 1px)` }}>
                <div className="absolute top-1/2 -translate-y-1/2 -left-5 h-12 w-12 rounded-full bg-white/90 shadow-2xl flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                </div>
            </div>
            <input type="range" min="0" max="100" value={sliderPosition} onChange={(e) => setSliderPosition(e.target.value)} className="absolute inset-0 w-full h-full cursor-ew-resize opacity-0" />
        </div>
    );
};

// Parallax efektli görsel bileşeni
const ParallaxImage = ({ item, className }) => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    return (
        <div ref={ref} className={`overflow-hidden h-full ${className}`}>
            <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-[140%] object-cover -translate-y-[20%]"
                style={{ y }}
            />
        </div>
    );
};

// Hizmet Tanıtım Bölümü Bileşeni
const ServiceSection = ({ item, index }) => {
    const isEven = index % 2 === 0;
    const imageOrder = isEven ? 'md:order-1' : 'md:order-2';
    const textOrder = isEven ? 'md:order-2' : 'md:order-1';

    return (
        <section className={`py-28 overflow-hidden ${isEven ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-6">
                <motion.div
                    className={`h-96 shadow-2xl ${imageOrder}`}
                    initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <ParallaxImage item={item} />
                </motion.div>
                <motion.div
                    className={`text-center md:text-left ${textOrder}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="inline-flex items-center space-x-3 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-6">
                        {React.cloneElement(item.icon, { strokeWidth: 2 })}
                        <span>{item.tag}</span>
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900">{item.title}</h2>
                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">{item.description}</p>
                    <ul className="mt-6 space-y-3">
                        {item.features.map((feature, i) => (<li key={i} className="flex items-start"><CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" /><span>{feature}</span></li>))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};


function Mantolama() {
    const services = [
        { tag: 'Yalıtım Çözümleri', title: 'Dış Cephe Yalıtım & Mantolama', description: 'Binalarınızın enerji verimliliğini en üst seviyeye çıkararak ısıtma ve soğutma maliyetlerinizde önemli ölçüde tasarruf sağlıyoruz.', features: ['%50\'ye varan enerji tasarrufu', 'Isı, su ve ses yalıtımı', 'Bina ömrünü uzatma'], icon: <Shield size={16} />, image: '/x1.jpg' },
        { tag: 'Yenileme ve Onarım', title: 'Dış Cephe Tadilat & Boya', description: 'Zamanla yıpranmış dış cephelerinizi, profesyonel onarım ve boya uygulamalarımızla ilk günkü estetiğine ve sağlamlığına kavuşturuyoruz.', features: ['Yapısal onarım ve çatlak giderme', 'Suya ve neme dayanıklı boyalar', 'Binanızın estetik değerini artırma'], icon: <Paintbrush size={16} />, image: '/x2.jpg' },
        { tag: 'Estetik Yüzeyler', title: 'Dış Cephe Dekoratif Sıva', description: 'Binanıza modern bir kimlik kazandırmak için çeşitli doku ve desenlerde dekoratif sıva uygulamaları yapıyoruz.', features: ['Çeşitli doku ve desen seçenekleri', 'Yüksek mukavemet ve esneklik', 'Dekoratif ve modern görünüm'], icon: <Gem size={16} />, image: '/x1.jpg' },
        { tag: 'Sağlam Altyapı', title: 'Dış Cephe Fileli Sıva', description: 'Bina yüzeyindeki hareketlere karşı maksimum dayanıklılık sağlayan fileli sıva, dış cephenizin uzun yıllar sağlam kalmasını garanti eder.', features: ['Çatlamalara karşı üstün koruma', 'Düzgün ve pürüzsüz yüzey', 'Darbe ve sarsıntılara karşı direnç'], icon: <Layers3 size={16} />, image: '/x4.jpg' },
        { tag: 'Yaşam Alanları', title: 'Çevre Düzenleme', description: 'Bina çevresini, estetik ve fonksiyonel bir bütünlük içinde planlayarak yaşam alanlarınızın kalitesini artırıyoruz.', features: ['Fonksiyonel alan planlaması', 'Sert zemin uygulamaları', 'Site ve bina giriş tasarımları'], icon: <LandPlot size={16} />, image: '/x5.jpg' },
        { tag: 'Yeşil Dokunuş', title: 'Peyzaj İşleri', description: 'Uzman peyzaj mimarlarımızla, bina çevrenize estetik ve sürdürülebilir yeşil alanlar tasarlıyoruz.', features: ['Profesyonel peyzaj tasarımı', 'Bitkilendirme ve çimlendirme', 'Otomatik sulama sistemleri'], icon: <Trees size={16} />, image: '/x6.jpg' }
    ];

    return (
        <div className="bg-white text-slate-800 pt-[80px]">
            {/* BÖLÜM 1: GİRİŞ (HERO) */}
            <section className="bg-slate-50 py-28 text-center">
                <motion.div className="container mx-auto px-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h1 className="text-5xl font-bold tracking-tight md:text-7xl bg-gradient-to-r from-blue-600 to-slate-800 text-transparent bg-clip-text">
                        Dönüşümün Gücü
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
                        Uygulamalarımızın yarattığı farkı kendi gözlerinizle görün. İnteraktif kaydırıcıyı hareket ettirerek dönüşüme tanıklık edin.
                    </p>
                    <div className="mt-12">
                        <BeforeAfterSlider before="/FotoNormal.jpg" after="/FotoSiyah.jpg" title="Cephe Yenileme" />
                    </div>
                </motion.div>
            </section>

            {/* BÖLÜM 2: HİZMETLER LİSTESİ */}
            <div className="text-center pt-28 pb-16">
                <h2 className="text-4xl font-bold">Detaylı Hizmetlerimiz</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Yalıtımdan peyzaja, sunduğumuz tüm profesyonel çözümler.</p>
            </div>
            <div>
                {services.map((service, index) => (<ServiceSection key={index} item={service} index={index} />))}
            </div>


        </div>
    );
}

export default Mantolama;