// Gerekli kütüphaneleri projenize eklemeyi unutmayın:
// npm install framer-motion lucide-react

import React from 'react';
import { motion } from 'framer-motion';
import { Trees, Sparkles, HandCoins, HeartHandshake, CheckCircle, ArrowRight, Sun, Droplets, Leaf, HardHat, Shrub, CloudRain, PencilRuler, Search, Brush, Hammer, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';

// GÜNCELLEME: Tekrar eden animasyonlar için standart bir nesne oluşturdum.
const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            staggerChildren: 0.15, // Elemanların birbiri ardına gelme süresi
            duration: 0.5, 
            ease: 'easeOut' 
        } 
    }
};

// Bileşen: Hizmet Özeti Kartı
const ServiceHighlightCard = ({ icon, title }) => {
    return (
        <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white text-center p-4 rounded-lg border border-slate-200 shadow-sm"
        >
            {icon}
            <h4 className="mt-2 font-semibold text-slate-700 text-sm">{title}</h4>
        </motion.div>
    )
}

// Bileşen: Değer Kartı
const ValueCard = ({ icon, title, children }) => {
    return (
        <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white p-6 rounded-xl border border-slate-200"
        >
            <div className="flex items-center gap-4 mb-3">
                <div className="flex-shrink-0 text-green-700 bg-green-100 p-3 rounded-lg">{icon}</div>
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">{children}</p>
        </motion.div>
    );
};

const PeyzajIsleri = () => {

    const processSteps = [
        { icon: <Search size={20} />, title: "Tanışma ve Keşif", description: "Sizi dinliyor, beklentilerinizi anlıyor ve projenin uygulanacağı alanı yerinde analiz ediyoruz. Güneşlenme süreleri, toprak yapısı ve altyapı gibi teknik detayları inceliyoruz." },
        { icon: <Brush size={20} />, title: "3D Modelleme ve Sunum", description: "Fikirlerinizi ve teknik verileri birleştirerek size özel peyzaj projesini 3 boyutlu olarak tasarlıyoruz. Proje bittiğinde bahçenizin nasıl görüneceğini sanal olarak deneyimlemenizi sağlıyoruz." },
        { icon: <Hammer size={20} />, title: "Profesyonel Uygulama", description: "Onaylanan projenizi, uzman ekibimizle hayata geçiriyoruz. Toprak hazırlığı, bitki dikimi, sulama sistemi ve aydınlatma gibi tüm aşamaları titizlikle yönetiyoruz." },
        { icon: <PartyPopper size={20} />, title: "Teslimat ve Bakım Desteği", description: "Projeyi teslim ediyor, kullanım ve bakım hakkında detaylı bilgi veriyoruz. Talep üzerine, bahçenizin canlılığını korumak için periyodik bakım hizmetleri de sunuyoruz." }
    ];

    return (
        <div className="bg-slate-50 text-slate-800 pt-[45px] overflow-x-hidden">

            {/* BÖLÜM 1: GİRİŞ VE HİZMETLER */}
            <header className="pt-16 pb-12 sm:pt-20 sm:pb-16">
                <motion.div 
                    className="container mx-auto px-6"
                    variants={FADE_IN_VARIANTS}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1 
                            variants={FADE_IN_VARIANTS}
                            // GÜNCELLEME: Başlık boyutu bir miktar küçültüldü.
                            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
                        >
                            Profesyonel Peyzaj Tasarım ve Uygulama
                        </motion.h1>
                        <motion.p 
                            variants={FADE_IN_VARIANTS}
                            className="mt-5 max-w-2xl mx-auto text-lg text-slate-600"
                        >
                            Bahçeniz, evinizin bir uzantısıdır. Yaşam tarzınıza uygun, estetik ve fonksiyonel dış mekanlar tasarlayarak bu alanı sizin için değerli bir yaşam alanına dönüştürüyoruz.
                        </motion.p>
                    </div>
                     <div className="mt-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                           <ServiceHighlightCard icon={<PencilRuler size={32} className="mx-auto text-green-600"/>} title="Tasarım & Proje" />
                           <ServiceHighlightCard icon={<Shrub size={32} className="mx-auto text-green-600"/>} title="Bitkilendirme" />
                           <ServiceHighlightCard icon={<HardHat size={32} className="mx-auto text-green-600"/>} title="Sert Zemin" />
                           <ServiceHighlightCard icon={<CloudRain size={32} className="mx-auto text-green-600"/>} title="Otomatik Sulama" />
                        </div>
                        {/* GÜNCELLEME: Eylem çağrısı eklendi. */}
                        <motion.div variants={FADE_IN_VARIANTS} className="mt-8 text-center">
                             <Link to="/projelerimiz" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-green-700 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
                                Projelerimize Göz Atın <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </header>

            {/* BÖLÜM 2: GÖRSEL GALERİ (KOMPAKT) */}
            <section className="py-12 bg-white">
                <motion.div 
                    className="container mx-auto px-6"
                    variants={FADE_IN_VARIANTS}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* GÜNCELLEME: Galeri için başlık eklendi. */}
                    <div className="max-w-3xl mx-auto text-center mb-12">
                         <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">İlham Veren Projelerimiz</h2>
                         <p className="mt-4 text-lg text-slate-600">Tamamladığımız projelerle hayallerinizi nasıl gerçeğe dönüştürdüğümüzü görün.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className="aspect-square rounded-xl overflow-hidden shadow-lg"><img src="/peyzaj1.webp" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Modern Bahçe"/></motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className="aspect-square rounded-xl overflow-hidden shadow-lg"><img src="/peyzaj2.webp" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Peyzaj Planı"/></motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className="aspect-square rounded-xl overflow-hidden shadow-lg"><img src="/peyzaj3.webp" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Bahçe Yolu"/></motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className="aspect-square rounded-xl overflow-hidden shadow-lg"><img src="/peyzaj4.webp" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Bitkilendirme"/></motion.div>
                    </div>
                </motion.div>
            </section>
            
            {/* BÖLÜM 3: DEĞER ÖNERİSİ */}
            <section className="py-16 sm:py-20 bg-slate-100">
                <motion.div 
                    className="container mx-auto px-6"
                    variants={FADE_IN_VARIANTS}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Peyzajın Mülkünüze ve Yaşamınıza Katkıları</h2>
                        <p className="mt-4 text-lg text-slate-600">Profesyonel peyzaj, estetik bir dokunuştan daha fazlasıdır; mülkünüze ve yaşam kalitenize somut faydalar sağlayan bir yatırımdır.</p>
                    </div>
                     {/* GÜNCELLEME: Grid artık 2'li ve 4'lü yapıda daha dengeli. */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <ValueCard icon={<HandCoins size={32} />} title="Mülk Değeri Artışı">Nitelikli bir peyzaj uygulaması, gayrimenkulünüzün piyasa değerini %15'e kadar artırabilir ve potansiyel alıcılar için çekiciliğini yükseltir.</ValueCard>
                        <ValueCard icon={<HeartHandshake size={32} />} title="Yaşam Kalitesi">Doğayla iç içe bir ortam stresi azaltır, aile aktiviteleri için yeni alanlar yaratır ve genel ruh sağlığını olumlu yönde etkiler.</ValueCard>
                        <ValueCard icon={<Sparkles size={32} />} title="Estetik Bütünlük">Binanızın mimarisini tamamlayan, dört mevsim yaşayan bir peyzaj ile mülkünüzün görsel çekiciliğini ve prestijini artırın.</ValueCard>
                        {/* GÜNCELLEME: Yeni bir değer kartı eklendi. */}
                        <ValueCard icon={<Trees size={32} />} title="Ekolojik Faydalar">Doğru bitkilendirme ile yerel yaban hayatını destekler, hava kalitesini artırır ve yaz aylarında doğal bir serinlik sağlarsınız.</ValueCard>
                    </div>
                </motion.div>
            </section>
            
            {/* BÖLÜM 4: TASARIM İLKELERİMİZ */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div 
                            className="order-2 lg:order-1"
                            variants={FADE_IN_VARIANTS} 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">Tasarım ve Uygulama İlkelerimiz</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4"><Leaf className="w-7 h-7 text-green-600 mt-1 flex-shrink-0"/><div><h4 className="text-xl font-bold">İhtiyaç Odaklı Tasarım</h4><p className="text-slate-600">Sizin yaşam tarzınız, tasarımımızın başlangıç noktasıdır. Sizi dinler, ihtiyaçlarınızı anlar ve size özel fonksiyonel alanlar yaratırız.</p></div></div>
                                <div className="flex items-start gap-4"><Droplets className="w-7 h-7 text-green-600 mt-1 flex-shrink-0"/><div><h4 className="text-xl font-bold">Sürdürülebilir Çözümler</h4><p className="text-slate-600">İstanbul iklimine uygun, az su tüketen bitkiler ve su tasarrufu sağlayan akıllı sulama sistemleri ile hem doğayı hem bütçenizi koruruz.</p></div></div>
                                <div className="flex items-start gap-4"><Sun className="w-7 h-7 text-green-600 mt-1 flex-shrink-0"/><div><h4 className="text-xl font-bold">Dört Mevsim Canlı Bahçeler</h4><p className="text-slate-600">Tasarımımız, bahçenizin sadece yazın değil, yılın her mevsimi farklı renk ve dokularla canlı ve çekici kalmasını hedefler.</p></div></div>
                                {/* GÜNCELLEME: Yeni bir ilke eklendi. */}
                                <div className="flex items-start gap-4"><CheckCircle className="w-7 h-7 text-green-600 mt-1 flex-shrink-0"/><div><h4 className="text-xl font-bold">Kaliteli Malzeme ve Ustalık</h4><p className="text-slate-600">Uygulamalarımızda sadece en kaliteli bitki ve malzemeleri kullanır, işçiliğimizin her detayında mükemmelliği hedefleriz.</p></div></div>
                            </div>
                        </motion.div>
                         <motion.div 
                            className="order-1 lg:order-2"
                            initial={{ opacity: 0, scale: 0.9 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            viewport={{ once: true, amount: 0.4 }}
                         >
                            <img src="/peyzaj5.webp" alt="Dört mevsim yaşayan bahçe" className="rounded-2xl shadow-xl w-full h-auto object-cover"/>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 5: PROJE SÜRECİ */}
            <section className="py-16 sm:py-24 bg-slate-100">
                <motion.div 
                    className="container mx-auto px-6 max-w-4xl"
                    variants={FADE_IN_VARIANTS}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">4 Adımda Proje Sürecimiz</h2>
                        <p className="mt-4 text-lg text-slate-600">Şeffaf ve müşteri odaklı sürecimizle, tasarım yolculuğunun her anında bilgilendirilmenizi ve sürece dahil olmanızı sağlıyoruz.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-0.5 bg-slate-300 hidden sm:block" aria-hidden="true"></div>
                        <div className="space-y-12">
                            {processSteps.map((step, index) => (
                                <motion.div 
                                    key={index} 
                                    className="relative pl-12 sm:pl-16" 
                                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x:0 } }}
                                    viewport={{once: true}}
                                >
                                    {/* GÜNCELLEME: Rakamlar yerine ikonlar kullanıldı. */}
                                    <div className="absolute left-0 top-0 w-9 h-9 flex items-center justify-center rounded-full bg-green-600 text-white border-4 border-slate-100">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                                    <p className="text-slate-600">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
            
            {/* BÖLÜM 6: SON ÇAĞRI */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-20">
                    <div className="bg-green-600 text-white rounded-2xl p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
                       <div className="relative z-10">
                             <h2 className="text-3xl sm:text-4xl font-extrabold">Bahçenizin Potansiyelini Keşfedin</h2>
                             <p className="mt-4 max-w-2xl mx-auto text-lg text-green-100">Hayalinizdeki dış mekana kavuşmak için daha fazla beklemeyin. Uzman ekibimizle tanışın, size özel tasarım seçeneklerini ve projenizin potansiyelini birlikte değerlendirelim.</p>
                             <div className="mt-10">
                                 <Link 
                                     to="/iletisim"
                                     className="inline-block px-10 py-4 font-bold text-lg text-green-700 bg-white rounded-lg shadow-2xl hover:bg-slate-100 hover:scale-105 transform transition-all duration-300"
                                 >
                                     ÜCRETSİZ TASARIM DANIŞMANLIĞI
                                 </Link>
                             </div>
                             {/* GÜNCELLEME: Güven artırıcı bir metin eklendi. */}
                             <p className="mt-6 text-sm text-green-200 opacity-80">100% Müşteri Memnuniyeti Odaklı Hizmet</p>
                       </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PeyzajIsleri;