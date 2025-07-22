// Gerekli kütüphaneleri projenize eklemeyi unutmayın:
// npm install framer-motion lucide-react

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaintRoller, Hammer, ShieldCheck, Check, ArrowRight, Wrench, PanelTopClose, SquareStack, KeyRound, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Bileşen: Hizmet Kartı
const ServiceCard = ({ icon, title, children, delay }) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-xl border border-stone-200 text-left transition-all duration-300 hover:shadow-xl hover:border-teal-500/50 hover:-translate-y-1"
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

// Bileşen: Süreç Adımı
const ProcessStep = ({ number, title, children, imageSrc }) => {
    return (
        <motion.div
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
        >
            <div className="md:order-2">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-600 text-white font-bold text-xl">
                        {number}
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900">{title}</h3>
                </div>
                <p className="text-stone-600 leading-relaxed">{children}</p>
            </div>
            <div className="md:order-1">
                <img src={imageSrc} alt={title} className="rounded-xl shadow-xl w-full h-full object-cover aspect-[4/3]" />
            </div>
        </motion.div>
    )
}

const TadilatBoya = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 1) => ({
            opacity: 1, y: 0,
            transition: { staggerChildren: 0.1, delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
        })
    };

    const galleryTabs = {
        'Salon': [
            { src: '/resim12.webp', title: 'Modern Salon' },
            { src: '/resim11.webp', title: 'Minimalist Oturma Alanı' },
        ],
        'Mutfak': [
            { src: '/resim4.webp', title: 'Ada Mutfak Tasarımı' },
            { src: '/resim5.webp', title: 'Country Mutfak' },
        ],
        'Banyo': [
            { src: '/resim7.webp', title: 'Ferah Banyo' },
            { src: '/resim6.webp', title: 'Şık Duş Alanı' },
        ],
        'Ofis': [
            { src: '/resim10.webp', title: 'Açık Ofis Konsepti' },
            { src: '/resim9.webp', title: 'Yönetici Odası' },
        ],
    };

    const [activeTab, setActiveTab] = useState('Salon');

    return (
        <div className="bg-stone-50 text-stone-900 pt-[116px] overflow-x-hidden">

            {/* BÖLÜM 1: GİRİŞ */}
            <header className="bg-white">
                <div className="container mx-auto px-6 py-16 sm:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeIn} initial="hidden" animate="visible">
                            <motion.p variants={fadeIn} className="font-semibold text-teal-700 uppercase tracking-wider mb-3">EMEK YAPI TADİLAT & DEKORASYON</motion.p>
                            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 !leading-tight">
                                Yaşam Alanlarınızı Yeniden Yaratıyoruz
                            </motion.h1>
                            <motion.p variants={fadeIn} className="mt-5 max-w-lg text-lg text-stone-600">
                                Eskimiş duvarlardan, modası geçmiş mutfaklardan sıkıldınız mı? Profesyonel ekibimizle, evinizi veya ofisinizi hayallerinizdeki gibi modern, fonksiyonel ve ilham veren bir mekana dönüştürelim.
                            </motion.p>
                            <motion.div variants={fadeIn} className="mt-8 flex items-center gap-4">
                                <Link
                                    to="/iletisim"
                                    className="inline-block px-8 py-3 font-bold text-base text-white bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 hover:scale-105 transform transition-all duration-300"
                                >
                                    Ücretsiz Keşif İste
                                </Link>
                                <Link
                                    to="/projeler"
                                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-base text-teal-700 bg-transparent rounded-lg hover:bg-teal-50"
                                >
                                    Projelerimiz <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="h-80 md:h-full w-full rounded-2xl overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/resim12.webp" alt="Modern ve Ferah Bir Salon" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* BÖLÜM 2: HİZMETLERİMİZ */}
            <section className="py-16 sm:py-20 bg-stone-100/70">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold tracking-tight">Tek Çatı Altında Tüm Tadilat İhtiyaçlarınız</motion.h2>
                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-lg text-stone-600">İster küçük bir dokunuş, ister anahtar teslim komple bir yenileme... İhtiyacınız ne olursa olsun, doğru yerdesiniz.</motion.p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard icon={<PaintRoller size={28} />} title="Boya & Badana" delay={1}>
                            Mekanınıza ruh katan renkler, pürüzsüz yüzeyler ve uzun ömürlü, 1. sınıf boya uygulamaları.
                        </ServiceCard>
                        <ServiceCard icon={<PanelTopClose size={28} />} title="Alçıpan & Tavan" delay={2}>
                            Asma tavanlar, duvar bölmeleri, nişler ve dekoratif kartonpiyer uygulamaları ile estetik ve fonksiyonel çözümler.
                        </ServiceCard>
                        <ServiceCard icon={<SquareStack size={28} />} title="Parke & Zemin" delay={3}>
                            Mekanınızın karakterini tamamlayan, sudan etkilenmeyen, dayanıklı ve şık laminat veya lamine parke kaplamaları.
                        </ServiceCard>
                        <ServiceCard icon={<Wrench size={28} />} title="Mutfak & Banyo" delay={4}>
                            Tesisattan dolap montajına, seramik işlerinden modern tasarımlara komple mutfak ve banyo yenileme.
                        </ServiceCard>
                        <ServiceCard icon={<Hammer size={28} />} title="Kırım & Altyapı" delay={5}>
                            Duvar kırımından, şap dökümüne, elektrik ve su tesisatı yenilemelerine kadar tüm altyapı işleri.
                        </ServiceCard>
                        <ServiceCard icon={<KeyRound size={28} />} title="Anahtar Teslim Proje" delay={6}>
                            Tüm süreci bize bırakın. Hayalinizdeki mekanı size sadece keyfini sürmek kalacak şekilde teslim edelim.
                        </ServiceCard>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 3: SÜRECİMİZ - EMEK YAPI FARKI */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold tracking-tight">Stresten Uzak, Güven Dolu Bir Tadilat Deneyimi</motion.h2>
                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-lg text-stone-600">Onlarca usta ile ayrı ayrı uğraşmak yerine, tüm süreci sizin için yöneten tek bir profesyonel muhatabınız olsun.</motion.p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-16">
                        <ProcessStep number="1" title="Keşif & Projelendirme" imageSrc="/resim7.webp">
                            Sizi dinliyor, ihtiyaçlarınızı anlıyor ve mekanınızı yerinde inceliyoruz. Ardından, hayallerinize ve bütçenize uygun, her detayı düşünülmüş bir proje ve şeffaf bir teklif hazırlıyoruz.
                        </ProcessStep>
                        <ProcessStep number="2" title="Usta İşçilik & Kaliteli Malzeme" imageSrc="/resim6.webp">
                            Alanında uzman, sigortalı ekibimiz ve kendini kanıtlamış markaların 1. sınıf malzemeleriyle projenizi hayata geçiriyoruz. Her aşamada temiz ve titiz çalışarak konforunuzu koruyoruz.
                        </ProcessStep>
                        <ProcessStep number="3" title="Kontrol & Zamanında Teslim" imageSrc="/resim11.webp">
                            İşin her aşamasını titizlikle kontrol ediyor, size söz verdiğimiz takvime sadık kalıyoruz. Proje bittiğinde, her şeyin hayal ettiğiniz gibi olduğundan emin olarak size anahtarınızı teslim ediyoruz.
                        </ProcessStep>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 4: İLHAM GALERİSİ */}
            <section className="py-16 sm:py-20 bg-stone-100/70">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold tracking-tight">Dönüşen Mekanlar, Mutlu Anlar</motion.h2>
                        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-lg text-stone-600">Tamamladığımız projeler, bir sonraki projemiz için en büyük ilham kaynağımız. Hayalleri gerçeğe dönüştürdüğümüz anlardan bazıları.</motion.p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8">
                        {Object.keys(galleryTabs).map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${activeTab === tab ? 'bg-teal-600 text-white shadow' : 'bg-white text-stone-700 hover:bg-stone-200'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        <AnimatePresence mode="wait">
                            {galleryTabs[activeTab].map((item, index) => (
                                <motion.div
                                    key={item.src}
                                    className="relative group h-80 rounded-xl overflow-hidden shadow-lg"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-5">
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* BÖLÜM 5: SON ÇAĞRI */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-20 text-center">
                    <div className="max-w-3xl mx-auto">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-extrabold text-stone-900"
                            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        >
                            Hayallerinizi Daha Fazla Ertelemeyin
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-stone-600"
                            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        >
                            Mekanınızın potansiyelini ortaya çıkarmak için ilk adımı bugün atın. Ücretsiz keşif ve projelendirme hizmetimizle tanışın, hayallerinizi birlikte gerçeğe dönüştürelim.
                        </motion.p>
                        <motion.div
                            className="mt-10"
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        >
                            <Link
                                to="/iletisim"
                                className="inline-block px-10 py-4 font-bold text-lg text-white bg-teal-600 rounded-lg shadow-xl hover:bg-teal-700 hover:scale-105 transform transition-all duration-300"
                            >
                                ÜCRETSİZ KEŞİF ve TEKLİF AL
                            </Link>
                            <p className="mt-3 text-sm text-stone-500">Hızlı, kolay ve hiçbir zorunluluk olmadan.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TadilatBoya;