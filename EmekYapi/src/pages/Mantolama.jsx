// Dosya: src/pages/Mantolama.jsx (Güncellenmiş Hali)

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// BeforeAfterSlider bileşeni aynı kalabilir...
const BeforeAfterSlider = ({ before, after, title }) => {
    const [sliderPosition, setSliderPosition] = React.useState(50);
    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };
    return (
        <div className="relative w-full max-w-5xl mx-auto h-[80vh] select-none group shadow-2xl rounded-lg overflow-hidden cursor-ew-resize" onMouseMove={handleMove} onTouchMove={handleMove}>
            <img src={after} alt={`Sonrası - ${title}`} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <img src={before} alt={`Öncesi - ${title}`} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
            <div className="absolute top-0 bottom-0 w-1 bg-white/80 backdrop-blur-sm pointer-events-none" style={{ left: `calc(${sliderPosition}% - 1px)` }}>
                <div className="absolute top-1/2 -translate-y-1/2 -left-5 h-12 w-12 rounded-full bg-white/90 shadow-2xl flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                </div>
            </div>
        </div>
    );
};

// slugify fonksiyonu aynı kalabilir...
const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/&/g, 've')
        .replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

// ✅ GÜNCELLENEN BİLEŞEN
const ServiceCard = ({ service, index }) => {
    const linkTo = `/${slugify(service.title)}`;

    return (
        <motion.div
            className="group relative h-96 w-full overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
        >
            <img src={service.image} alt={service.title} className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="mt-1 text-sm text-gray-200">{service.tag}</p>
                </div>
                <div className="mt-4">
                    {/* 👈 DEĞİŞTİRİLEN SATIR: Buton artık mobil uyumlu. */}
                    <Link
                        to={linkTo}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-900 bg-yellow-400 rounded-md transition-all duration-300 opacity-100 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                        Detayları Gör <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};


function Mantolama() {
    const primaryButtonClasses = "inline-flex items-center justify-center gap-3 px-8 py-3 font-semibold text-gray-900 bg-yellow-400 rounded-lg shadow-sm hover:bg-yellow-500 hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2";

    const services = [
        { tag: 'Yalıtım Çözümleri', title: 'Dış Cephe Mantolama', image: '/resim5.webp' },
        { tag: 'Yenileme ve Onarım', title: 'Tadilat & Boya', image: '/resim6.webp' },
        { tag: 'Estetik Yüzeyler', title: 'Dekoratif Sıva', image: '/resim7.webp' },
        { tag: 'Sağlam Altyapı', title: 'Fileli Sıva', image: '/resim4.webp' },
        { tag: 'Yaşam Alanları', title: 'Çevre Düzenleme', image: '/resim11.webp' },
        { tag: 'Yeşil Dokunuş', title: 'Peyzaj İşleri', image: '/resim12.webp' }
    ];

    return (
        <div className="bg-white text-slate-800 pt-[116px]">
            <section className="bg-slate-50 py-24 text-center">
                <motion.div className="container mx-auto px-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">Dönüşümün Gücü</h1>
                    <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">Uygulamalarımızın yarattığı farkı kendi gözlerinizle görün. İnteraktif kaydırıcıyı hareket ettirerek dönüşüme tanıklık edin.</p>
                    <div className="mt-12">
                        <BeforeAfterSlider before="/FotoNormal.jpg" after="/FotoSiyah.jpg" title="Cephe Yenileme" />
                    </div>
                </motion.div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Sunduğumuz Profesyonel Çözümler</h2>
                        <p className="mt-4 text-lg text-slate-600">Yalıtımdan peyzaja, dış cephe projelerinizin her aşamasında uzman kadromuzla yanınızdayız.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold text-white">Projeniz İçin Teklif Alın</h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">Aklınızdaki proje için ücretsiz keşif ve fiyat teklifi almak üzere bizimle iletişime geçin.</p>
                    <div className="mt-8">
                        <Link to="/iletisim" className={primaryButtonClasses}>
                            Ücretsiz Teklif Al
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Mantolama;