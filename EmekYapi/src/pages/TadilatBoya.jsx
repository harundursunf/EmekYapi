// Gerekli kütüphaneleri projenize eklemeyi unutmayın:
// npm install framer-motion lucide-react

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaintRoller, Hammer, Check, ArrowRight, Wrench, PanelTopClose, SquareStack, KeyRound, Award, Users, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Bileşen: Hizmet Kartı (Tasarım Korundu)
const ServiceCard = ({ icon, title, children, delay }) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-xl border border-stone-200 text-left transition-all duration-300 hover:shadow-xl hover:border-teal-500/50 hover:-translate-y-1 h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: delay * 0.05 }}
        >
            <div className="flex items-center gap-4 mb-3">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-teal-100/70 text-teal-700">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800">{title}</h3>
            </div>
            <p className="text-stone-600 leading-relaxed text-sm">{children}</p>
        </motion.div>
    );
};

// Bileşen: Prensip Kartı (Yeni)
const PrincipleCard = ({ icon, title, children }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-teal-600 text-white mt-1">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-bold text-stone-800">{title}</h4>
            <p className="text-stone-600">{children}</p>
        </div>
    </div>
);


const TadilatBoya = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, y: 0,
            transition: { staggerChildren: 0.1, duration: 0.6, ease: 'easeOut' }
        }
    };
    
    // GÜNCELLEME: Her kategoriye daha fazla fotoğraf eklendi
    const galleryTabs = {
        'Salon': [{ src: '/resim12.webp', title: 'Modern Salon' }, { src: '/resim11.webp', title: 'Minimalist Oturma Alanı' }, { src: '/gallery/salon3.webp', title: 'Klasik Dokunuş' }, { src: '/gallery/salon4.webp', title: 'Aydınlık Mekan' }],
        'Mutfak': [{ src: '/resim4.webp', title: 'Ada Mutfak' }, { src: '/resim5.webp', title: 'Country Mutfak' }, { src: '/gallery/mutfak3.webp', title: 'Fonksiyonel Tasarım' }, { src: '/gallery/mutfak4.webp', title: 'Lake Kapaklar' }],
        'Banyo': [{ src: '/resim7.webp', title: 'Ferah Banyo' }, { src: '/resim6.webp', title: 'Şık Duş Alanı' }, { src: '/gallery/banyo3.webp', title: 'Mermer Detaylar' }, { src: '/gallery/banyo4.webp', title: 'Modern Bataryalar' }],
        'Ofis': [{ src: '/resim10.webp', title: 'Açık Ofis' }, { src: '/resim9.webp', title: 'Yönetici Odası' }, { src: '/gallery/ofis3.webp', title: 'Toplantı Alanı' }, { src: '/gallery/ofis4.webp', title: 'Resepsiyon' }],
    };

    const [activeTab, setActiveTab] = useState('Salon');

    return (
        <div className="bg-stone-50 text-stone-900 pt-[46px] overflow-x-hidden">

            {/* BÖLÜM 1: GİRİŞ (YENİDEN TASARLANDI) */}
            <header className="bg-white">
                <div className="container mx-auto px-6 py-16 sm:py-20">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <motion.div variants={fadeIn} initial="hidden" animate="visible">
                            <motion.p variants={fadeIn} className="font-semibold text-teal-700 uppercase tracking-wider mb-3">TADİLAT & DEKORASYON HİZMETLERİ</motion.p>
                            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900 !leading-tight">
                                Yaşam Alanlarınızı Yeniden Tasarlıyoruz
                            </motion.h1>
                            <motion.p variants={fadeIn} className="mt-5 max-w-lg text-lg text-stone-600">
                                Profesyonel ekibimizle, evinizi veya ofisinizi hayallerinizdeki gibi modern, fonksiyonel ve ilham veren bir mekana dönüştürüyoruz.
                            </motion.p>
                            <motion.ul variants={fadeIn} className="mt-6 space-y-3 text-stone-700">
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-teal-600" /> Anahtar Teslim Proje Yönetimi</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-teal-600" /> Ücretsiz Keşif ve 3D Modelleme</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-teal-600" /> Zamanında Teslimat Garantisi</li>
                            </motion.ul>
                            <motion.div variants={fadeIn} className="mt-8 flex items-center gap-4">
                                <Link to="/iletisim" className="inline-block px-8 py-3 font-bold text-base text-white bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 hover:scale-105 transform transition-all duration-300">
                                    Ücretsiz Keşif İste
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            className="grid grid-cols-2 gap-4"
                            variants={fadeIn} initial="hidden" animate="visible"
                        >
                            <motion.img variants={fadeIn} src="/resim12.webp" alt="Tadilat sonrası salon" className="rounded-xl object-cover aspect-[3/4] shadow-lg w-full h-full" />
                            <motion.img variants={fadeIn} src="/resim4.webp" alt="Tadilat sonrası mutfak" className="rounded-xl object-cover aspect-[3/4] shadow-lg w-full h-full mt-10" />
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* BÖLÜM 2: HİZMETLERİMİZ (YENİDEN TASARLANDI) */}
            <section className="py-16 sm:py-20 bg-stone-100/70">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        <motion.div 
                            className="lg:col-span-1"
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Kapsamlı Tadilat Çözümleri</h2>
                            <p className="mt-4 text-lg text-stone-600">İster küçük bir dokunuş, ister anahtar teslim komple bir yenileme... İhtiyacınız ne olursa olsun, tek bir noktadan profesyonel çözümler sunuyoruz.</p>
                            <img src="/tools.webp" alt="Tadilat araçları" className="rounded-lg mt-6 hidden lg:block" />
                        </motion.div>
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ServiceCard icon={<PaintRoller size={28} />} title="Boya & Badana" delay={1}>Mekanınıza ruh katan renkler, pürüzsüz yüzeyler ve 1. sınıf boya uygulamaları.</ServiceCard>
                            <ServiceCard icon={<PanelTopClose size={28} />} title="Alçıpan & Tavan" delay={2}>Asma tavanlar, duvar bölmeleri, nişler ve dekoratif tavan çözümleri.</ServiceCard>
                            <ServiceCard icon={<SquareStack size={28} />} title="Parke & Zemin" delay={3}>Dayanıklı ve şık laminat veya lamine parke kaplamaları.</ServiceCard>
                            <ServiceCard icon={<Wrench size={28} />} title="Mutfak & Banyo" delay={4}>Tesisattan dolap montajına, komple mutfak ve banyo yenileme.</ServiceCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 3: SÜRECİMİZ (YENİDEN TASARLANDI) */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Stresten Uzak, Güven Odaklı Süreç</h2>
                        <p className="mt-4 text-lg text-stone-600">Onlarca usta ile ayrı ayrı uğraşmak yerine, tüm süreci sizin için yöneten tek bir profesyonel muhatap ile çalışmanın konforunu yaşayın.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h3 className="text-2xl font-bold mb-6">Temel Prensiplerimiz</h3>
                            <div className="space-y-6">
                                <PrincipleCard icon={<Users size={20}/>} title="Tek Muhatap">Tüm süreç boyunca yalnızca proje yöneticimizle iletişim kurarak karmaşayı ortadan kaldırıyoruz.</PrincipleCard>
                                <PrincipleCard icon={<Clock size={20}/>} title="Zamanında Teslim">Belirlediğimiz iş programına sadık kalarak projenizi zamanında tamamlıyoruz.</PrincipleCard>
                                <PrincipleCard icon={<ShieldCheck size={20}/>} title="Şeffaf Fiyatlandırma">Sürpriz maliyetler olmadan, anlaştığımız bütçe dahilinde çalışıyoruz.</PrincipleCard>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                             <img src="/resim7.webp" alt="Proje planlama" className="rounded-xl shadow-xl w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 4: İLHAM GALERİSİ (GELİŞTİRİLDİ) */}
            <section className="py-16 sm:py-20 bg-stone-100/70">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">İlham Veren Projelerimiz</h2>
                        <p className="mt-4 text-lg text-stone-600">Hayalleri gerçeğe dönüştürdüğümüz, tamamlanmış projelerimizden bazıları.</p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8">
                        {Object.keys(galleryTabs).map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${activeTab === tab ? 'bg-teal-600 text-white shadow' : 'bg-white text-stone-700 hover:bg-stone-200'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <AnimatePresence mode="wait">
                            {galleryTabs[activeTab].map((item, index) => (
                                <motion.div
                                    key={item.src}
                                    className="relative group h-72 rounded-xl overflow-hidden shadow-lg"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 5: NEDEN BİZ? & SON ÇAĞRI (YENİDEN TASARLANDI) */}
            <section className="bg-white py-16 sm:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center bg-teal-600 text-white rounded-2xl p-10 sm:p-16">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl sm:text-4xl font-extrabold">Neden Emek Yapı?</h2>
                            <p className="mt-4 text-lg text-teal-100 leading-relaxed">Çünkü biz, bir işi sadece bitirmekle kalmaz, her detayıyla mükemmelleştiririz. Sizin için en iyisini hedefler, beklentilerinizin ötesine geçeriz.</p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-3"><Award className="w-6 h-6 text-yellow-300" /> 20+ Yıllık Sektör Tecrübesi</li>
                                <li className="flex items-center gap-3"><Users className="w-6 h-6 text-yellow-300" /> Sigortalı ve Profesyonel Ekipler</li>
                                <li className="flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-yellow-300" /> 1. Sınıf Malzeme ve İşçilik Garantisi</li>
                            </ul>
                        </motion.div>
                        <motion.div 
                            className="bg-white/10 p-8 rounded-lg text-center"
                             initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold">Hayallerinizi Daha Fazla Ertelemeyin</h3>
                            <p className="mt-2 text-teal-100">Mekanınızın potansiyelini ortaya çıkarmak için ilk adımı bugün atın.</p>
                            <Link
                                to="/iletisim"
                                className="mt-6 inline-block w-full px-8 py-4 font-bold text-lg text-teal-700 bg-white rounded-lg shadow-xl hover:bg-stone-100 hover:scale-105 transform transition-all duration-300"
                            >
                                ÜCRETSİZ KEŞİF ve TEKLİF AL
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TadilatBoya;