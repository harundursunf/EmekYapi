// Gerekli kütüphaneleri projenize eklemeyi unutmayın:
// npm install framer-motion lucide-react

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brush, Layers, Gem, ArrowRight, X, ShieldCheck, Palette, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const textures = [
    { id: 1, src: '/dekoratif1.webp', title: 'Brüt Beton Etkisi', description: 'Modern ve minimalist mekanlar için endüstriyel bir dokunuş.' },
    { id: 2, src: '/dekoratif2.webp', title: 'Doğal Traverten Hissi', description: 'Doğal taşın sıcaklığını ve asaletini duvarlarınıza yansıtır.' },
    { id: 3, src: '/dekoratif3.webp', title: 'İtalyan Mermer Efekti', description: 'Klasik ve lüks mekanlara derinlik ve parlaklık katar.' },
    { id: 4, src: '/dekoratif4.webp', title: 'Metalik Yansımalar', description: 'Işıltılı ve göz alıcı yüzeylerle dinamik bir atmosfer yaratır.' },
    { id: 5, src: '/dekoratif5.webp', title: 'Keten Dokusu', description: 'Sıcak ve samimi bir his için doğal ve yumuşak bir doku.' },
    { id: 6, src: '/dekoratif6.webp', title: 'Sıvı Metal Görünümü', description: 'Cesur ve avangart tasarımlar için akışkan metalik yüzeyler.' },
];

// Lightbox Bileşeni (Aydınlık Tema)
const Lightbox = ({ texture, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div 
                className="relative w-full max-w-4xl max-h-[90vh] bg-slate-50 rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="md:w-2/3 flex-shrink-0">
                    <img src={texture.src} alt={texture.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/3 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-800">{texture.title}</h3>
                    <p className="text-slate-600 mt-2">{texture.description}</p>
                    <Link to="/iletisim" className="mt-6 inline-flex items-center gap-2 px-5 py-2 font-semibold text-sm text-white bg-slate-800 rounded-md hover:bg-slate-900 transition-colors">
                        Bu Doku İçin Teklif Al <ArrowRight size={16} />
                    </Link>
                </div>
            </motion.div>
            <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors">
                <X size={32} />
            </button>
        </motion.div>
    );
};

const DekoratifSiva = () => {
    const [selectedTexture, setSelectedTexture] = useState(null);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 } }
    };

    return (
        <div className="bg-slate-50 text-slate-800 pt-[46px] overflow-x-hidden">
             <AnimatePresence>
                 {selectedTexture && <Lightbox texture={selectedTexture} onClose={() => setSelectedTexture(null)} />}
            </AnimatePresence>

            {/* BÖLÜM 1: GİRİŞ */}
            <header className="container mx-auto px-6 py-16 sm:py-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div variants={fadeIn} initial="hidden" animate="visible">
                        {/* YAZI GÜNCELLENDİ */}
                        <motion.p variants={fadeIn} className="font-semibold text-amber-600 uppercase tracking-wider mb-3">MEKANINIZA ÖZEL DOKUSAL ÇÖZÜMLER</motion.p>
                        <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 !leading-tight">
                            Duvarlarınızı Sanat Eserine Dönüştürün
                        </motion.h1>
                        <motion.p variants={fadeIn} className="mt-5 max-w-lg text-lg text-slate-600">
                            Standart duvar kaplamalarının yerine, el işçiliğiyle uygulanan ve her biri özgün bir karaktere sahip dekoratif sıva çözümleriyle mekanlarınıza kimlik ve derinlik kazandırın.
                        </motion.p>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-2 gap-4"
                        variants={fadeIn} initial="hidden" animate="visible"
                    >
                        <motion.img variants={fadeIn} src="/dekoratif1.webp" alt="Brüt Beton Efekti" className="rounded-xl object-cover aspect-square shadow-lg" />
                        <motion.img variants={fadeIn} src="/dekoratif3.webp" alt="İtalyan Mermer Efekti" className="rounded-xl object-cover aspect-square shadow-lg mt-5" />
                    </motion.div>
                </div>
            </header>

            {/* BÖLÜM 2: DOKU GALERİSİ */}
            <section className="py-16 sm:py-20 bg-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        {/* YAZI GÜNCELLENDİ */}
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">İmza Doku Koleksiyonumuz</h2>
                        <p className="mt-4 text-lg text-slate-600">Farklı zevklere ve mekanlara hitap eden zengin doku koleksiyonumuzu keşfedin. Detayları görmek için görsellerin üzerine tıklayabilirsiniz.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {textures.map((texture) => (
                            <motion.div
                                key={texture.id}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => setSelectedTexture(texture)}
                            >
                                <div className="aspect-video">
                                    <img src={texture.src} alt={texture.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-5 flex-grow flex flex-col">
                                    <h3 className="text-lg font-bold text-slate-800">{texture.title}</h3>
                                    <p className="text-slate-500 text-sm mt-1 flex-grow">{texture.description}</p>
                                    <span className="mt-4 text-sm font-semibold text-amber-700 hover:text-amber-800 self-start">
                                        Detayları Gör →
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* BÖLÜM 3: AVANTAJLAR */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        {/* YAZI GÜNCELLENDİ */}
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Dekoratif Sıvanın Sunduğu Ayrıcalıklar</h2>
                        <p className="mt-4 text-lg text-slate-600">Dekoratif sıva, duvarlarınıza sadece renk değil; doku, derinlik ve kalıcı bir karakter kazandırır.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center p-6">
                            <Gem className="w-12 h-12 text-amber-600 mx-auto" />
                            <h3 className="mt-4 text-xl font-bold">Eşsiz Estetik</h3>
                            <p className="mt-2 text-slate-600">Her uygulama el işçiliği olduğu için duvarlarınız tamamen size özel ve tekrarlanamaz bir sanat eserine dönüşür.</p>
                        </div>
                        <div className="text-center p-6">
                            <ShieldCheck className="w-12 h-12 text-amber-600 mx-auto" />
                            <h3 className="mt-4 text-xl font-bold">Üstün Dayanıklılık</h3>
                            <p className="mt-2 text-slate-600">Darbelere, çizilmelere ve lekelenmelere karşı son derece dayanıklıdır. Yıllarca ilk günkü görünümünü korur.</p>
                        </div>
                         <div className="text-center p-6">
                            <Brush className="w-12 h-12 text-amber-600 mx-auto" />
                            <h3 className="mt-4 text-xl font-bold">Kolay Bakım</h3>
                            <p className="mt-2 text-slate-600">Temizliği kolaydır, silinebilir ve ek yeri olmadığı için zamanla ayrılma veya yırtılma gibi sorunlar yaşanmaz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 4: USTALIK VE SANAT */}
            <section className="py-16 sm:py-20 bg-slate-800 text-white">
                 <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-lg">
                             {/* YAZI GÜNCELLENDİ */}
                             <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ustalık ve Sanatın Birleşimi</h2>
                             <p className="mt-4 text-lg text-slate-300 leading-relaxed">Dekoratif sıva uygulaması, teknik bilgi kadar sanatsal bir vizyon da gerektirir. Sertifikalı uygulayıcılarımız, her mekanı bir tuval olarak değerlendirir ve malzeme bilgisi ile estetik anlayışını birleştirerek özgün yüzeyler oluşturur.</p>
                             <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Award className="w-6 h-6 text-amber-400 flex-shrink-0"/>
                                    <span>Sertifikalı ve Deneyimli Uygulayıcılar</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Palette className="w-6 h-6 text-amber-400 flex-shrink-0"/>
                                    <span>Premium İtalyan ve Yerli Malzemeler</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Layers className="w-6 h-6 text-amber-400 flex-shrink-0"/>
                                    <span>Tozsuz, Temiz ve Titiz Çalışma Prensibi</span>
                                </div>
                             </div>
                        </div>
                        <div>
                            <img src="/usta.webp" alt="Dekoratif sıva ustası" className="rounded-xl object-cover w-full h-full aspect-[4/3] shadow-2xl" />
                        </div>
                    </div>
                 </div>
            </section>
            
            {/* BÖLÜM 5: SON ÇAĞRI */}
            <section className="bg-amber-500 text-white">
                <div className="container mx-auto px-6 py-16 text-center">
                    {/* YAZI GÜNCELLENDİ */}
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        Hayalinizdeki Dokuyu Mekanınıza Taşıyın
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-lg text-amber-100">
                        Mekanınız için en uygun doku ve renk seçeneklerini birlikte belirleyelim. Ücretsiz keşif hizmetimiz kapsamında size özel numune ve tasarım alternatifleri sunmak için bizimle iletişime geçin.
                    </p>
                    <div className="mt-8">
                        <Link 
                            to="/iletisim"
                            className="inline-block px-10 py-4 font-bold text-lg text-amber-700 bg-white rounded-lg shadow-2xl hover:bg-slate-100 hover:scale-105 transform transition-all duration-300"
                        >
                            ÖZEL NUMUNE TALEP ET
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DekoratifSiva;