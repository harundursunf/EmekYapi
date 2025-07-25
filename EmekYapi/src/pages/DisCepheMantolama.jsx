// Gerekli kütüphaneleri projenize eklemeyi unutmayın:
// npm install framer-motion lucide-react react-countup

import React from 'react';
import { motion } from 'framer-motion';
// GÜNCELLEME: Yeni ikonlar eklendi
import { ShieldCheck, Zap, TrendingUp, Home, CheckCircle, ChevronRight, Layers, Hammer, PaintRoller, Users, Award, Clock, Banknote, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

// Bileşen: Akordiyon (SSS) - DEĞİŞTİRİLMEDİ
const FaqItem = ({ question, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="border-b border-slate-200">
            <button
                className="w-full flex justify-between items-center text-left py-4 px-2 text-base md:text-lg font-medium text-slate-800 hover:bg-slate-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronRight className="w-5 h-5 text-indigo-600" />
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden px-2"
            >
                <div className="text-slate-600 leading-relaxed pt-2 pb-4">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

// Bileşen: Önce & Sonra Karşılaştırma Kartı - DEĞİŞTİRİLMEDİ
const BeforeAfterCard = ({ beforeSrc, afterSrc, title }) => (
    <motion.div 
        className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group border-4 border-white"
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
    >
        <img src={beforeSrc} alt={`Önce - ${title}`} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <img src={afterSrc} alt={`Sonra - ${title}`} className="w-[200%] max-w-[200%] h-full object-cover object-left" />
        </div>
        <div className="absolute top-2 left-2 bg-black/50 text-white px-3 py-1 text-sm font-bold rounded-full backdrop-blur-sm">ÖNCE</div>
        <div className="absolute top-2 right-2 bg-indigo-600/80 text-white px-3 py-1 text-sm font-bold rounded-full backdrop-blur-sm">SONRA</div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-indigo-500"></div>
    </motion.div>
);

// YENİ BİLEŞEN: İstatistik Kartı
const StatCard = ({ icon, end, suffix, text }) => (
    <motion.div 
        variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity: 1, y: 0 } }} 
        className="text-center"
    >
        {icon}
        <p className="text-3xl md:text-4xl font-extrabold text-indigo-600">
            <CountUp end={end} duration={3} enableScrollSpy scrollSpyOnce />
            {suffix}
        </p>
        <p className="text-sm text-slate-600 mt-1">{text}</p>
    </motion.div>
);

const DisCepheMantolama = () => {
    
    // Animasyon varyantları
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
        })
    };

    const benefits = [
        { icon: <Zap size={30} className="text-indigo-600" />, title: "Enerji Tasarrufu", description: "Isıtma ve soğutma giderlerinizde %60'a varan oranda tasarruf sağlayarak faturalarınızı hafifletin." },
        { icon: <TrendingUp size={30} className="text-indigo-600" />, title: "Mülk Değeri Artışı", description: "Modern ve yalıtımlı bir cephe, binanızın değerini ortalama %25'e kadar artırır." },
        { icon: <Home size={30} className="text-indigo-600" />, title: "Sağlıklı Yaşam Alanı", description: "Nem, rutubet ve küf oluşumunu engelleyerek aileniz için daha sağlıklı bir ortam yaratın." },
        { icon: <ShieldCheck size={30} className="text-indigo-600" />, title: "Yapı Koruması", description: "Binanızı dış etkenlerden koruyarak ömrünü uzatın ve bakım masraflarını azaltın." }
    ];

    return (
        <div className="bg-slate-50 text-slate-900 pt-[45px] overflow-x-hidden">

            {/* BÖLÜM 1: GİRİŞ - YAZILAR VE İSTATİSTİKLER GÜNCELLENDİ */}
            <header className="relative text-center py-24 sm:py-32 px-6">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('/resim6.webp')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-slate-50"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.p 
                        className="font-semibold text-indigo-600 uppercase tracking-wider mb-4"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: 0.2}}
                    >
                        PROFESYONEL DIŞ CEPHE ÇÖZÜMLERİ
                    </motion.p>
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight !leading-tight"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.4}}
                    >
                        Binanızın Değerini Artırın, Yaşam Konforunuzu Yükseltin
                    </motion.h1>
                    <motion.p 
                        className="mt-6 max-w-2xl mx-auto text-lg text-slate-600"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.6}}
                    >
                        Profesyonel dış cephe mantolama ile estetiği ve performansı birleştirerek kalıcı bir değere sahip olun.
                    </motion.p>
                    
                    {/* YENİ İSTATİSTİK BÖLÜMÜ */}
                    <motion.div 
                        className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
                        variants={fadeIn} initial="hidden" animate="visible"
                    >
                        <StatCard icon={<Banknote size={32} className="mx-auto text-green-500 mb-2" />} end={60} suffix="%'a Varan" text="Enerji Tasarrufu" />
                        <StatCard icon={<TrendingUp size={32} className="mx-auto text-blue-500 mb-2" />} end={25} suffix="%'e Varan" text="Mülk Değeri Artışı" />
                        <StatCard icon={<Thermometer size={32} className="mx-auto text-orange-500 mb-2" />} end={100} suffix="%" text="Isı Konforu" />
                    </motion.div>
                </div>
            </header>

            {/* BÖLÜM 2: FAYDALAR - YAZILAR GÜNCELLENDİ, TASARIM ORİJİNAL */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="max-w-3xl mx-auto text-center mb-12"
                        variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Dış Cephe Mantolamanın Temel Avantajları</h2>
                        <p className="mt-4 text-lg text-slate-600">Bu yatırımın size, ailenize ve mülkünüze somut olarak neler kazandıracağını keşfedin.</p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                        variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div key={index} variants={fadeIn} className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div variants={fadeIn} className="aspect-square rounded-xl overflow-hidden shadow-lg">
                            <img src="/resim11.webp" alt="Mutlu Aile" className="w-full h-full object-cover" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            
            {/* BÖLÜM 3: GALERİ - YAZILAR GÜNCELLENDİ, TASARIM ORİJİNAL */}
            <section className="py-16 sm:py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="max-w-3xl mx-auto text-center mb-12"
                        variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Uygulama Örneklerimiz: Önce & Sonra</h2>
                        <p className="mt-4 text-lg text-slate-600">Tamamladığımız projeler, kalite ve ustalık anlayışımızın en net göstergesidir.</p>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                    >
                        <BeforeAfterCard beforeSrc="/FotoSiyah.jpg" afterSrc="/FotoNormal.jpg" title="Apartman Yenileme" />
                        <BeforeAfterCard beforeSrc="/resim4.webp" afterSrc="/resim5.webp" title="Site Projesi" />
                        <BeforeAfterCard beforeSrc="/resim7.webp" afterSrc="/resim6.webp" title="Müstakil Ev Dönüşümü" />
                    </motion.div>
                </div>
            </section>

            {/* BÖLÜM 4: SÜREÇ - YAZILAR GÜNCELLENDİ, TASARIM ORİJİNAL */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="max-w-3xl mx-auto text-center mb-16"
                        variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Şeffaf ve Planlı Proje Sürecimiz</h2>
                        <p className="mt-4 text-lg text-slate-600">Sürecin her anında şeffaf, planlı ve profesyonel bir hizmetle yanınızdayız.</p>
                    </motion.div>
                    
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" aria-hidden="true"></div>
                        
                        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="md:grid grid-cols-2 gap-12 mb-12">
                            <div className="flex flex-col items-center md:items-end mb-4 md:mb-0">
                                <img src="/resim7.webp" alt="Keşif ve Analiz" className="rounded-lg shadow-xl w-full h-auto aspect-[4/3] object-cover"/>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-indigo-600 font-semibold mb-2">ADIM 1</p>
                                <h3 className="text-2xl font-bold mb-3">Keşif, Analiz ve Planlama</h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />Ücretsiz yerinde ekspertiz ve ihtiyaç analizi.</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />Isı kamerası ile kritik ısı kaçaklarının tespiti.</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />Malzeme ve renk seçeneklerinin sunulması.</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />Her detayı içeren şeffaf ve net tekliflendirme.</li>
                                </ul>
                            </div>
                        </motion.div>
                        
                         <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="md:grid grid-cols-2 gap-12 mb-12">
                            <div className="text-center md:text-left md:order-2">
                                <p className="text-indigo-600 font-semibold mb-2">ADIM 2</p>
                                <h3 className="text-2xl font-bold mb-3">Usta Ellerde Uygulama</h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />İSG standartlarına uygun iskele kurulumu.</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />Yüksek standartlarda yüzey hazırlığı ve yalıtım levhası uygulaması.</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />Fileli sıva ve dekoratif kaplama ile pürüzsüz yüzeyler.</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />UV dayanımlı, uzun ömürlü son kat boya uygulaması.</li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 md:order-1">
                                <img src="/resim4.webp" alt="Uygulama" className="rounded-lg shadow-xl w-full h-auto aspect-[4/3] object-cover"/>
                            </div>
                        </motion.div>

                         <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="md:grid grid-cols-2 gap-12">
                            <div className="flex flex-col items-center md:items-end mb-4 md:mb-0">
                                <img src="/resim11.webp" alt="Teslimat ve Kontrol" className="rounded-lg shadow-xl w-full h-auto aspect-[4/3] object-cover"/>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-indigo-600 font-semibold mb-2">ADIM 3</p>
                                <h3 className="text-2xl font-bold mb-3">Kontrol, Teslimat ve Garanti</h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />Detaylı son kontrol ve temizlik.</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />Projenin zamanında ve eksiksiz teslim edilmesi.</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />Uygulama ve malzeme garantisi belgelerinin sunulması.</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />Müşteri memnuniyeti onayı ile projenin tamamlanması.</li>
                                </ul>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* BÖLÜM 5: KALİTE - YAZILAR GÜNCELLENDİ, TASARIM ORİJİNAL */}
            <section className="py-16 sm:py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="max-w-3xl mx-auto text-center mb-12"
                        variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Kalite ve Güvence Anlayışımız</h2>
                        <p className="mt-4 text-lg text-slate-600">Mükemmel sonuçlar için sadece kendini kanıtlamış, TSE ve CE belgeli lider markaların ürünlerini kullanır ve hizmet kalitemizle fark yaratırız.</p>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
                        variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Users size={32} className="text-indigo-600 mx-auto mb-4" />
                            <h3 className="text-lg font-bold">Uzman Kadro</h3>
                            <p className="text-slate-600 text-sm mt-2">Alanında deneyimli, eğitimli ve sigortalı profesyonel ekipler.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Layers size={32} className="text-indigo-600 mx-auto mb-4" />
                            <h3 className="text-lg font-bold">Sertifikalı Malzeme</h3>
                            <p className="text-slate-600 text-sm mt-2">Yüksek yoğunluklu levhalar, esnek harçlar ve A kalite boyalar.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Clock size={32} className="text-indigo-600 mx-auto mb-4" />
                            <h3 className="text-lg font-bold">Zamanında Teslim</h3>
                            <p className="text-slate-600 text-sm mt-2">Belirlenen iş programına sadık kalarak projeyi zamanında bitiririz.</p>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Award size={32} className="text-indigo-600 mx-auto mb-4" />
                            <h3 className="text-lg font-bold">Kapsamlı Garanti</h3>
                            <p className="text-slate-600 text-sm mt-2">Yaptığımız işin arkasındayız ve bunu yazılı garanti ile belgeleriz.</p>
                        </div>
                    </motion.div>
                    <motion.div className="mt-16 text-center text-slate-500" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <p className="font-semibold text-lg text-slate-800 mb-4">Stratejik İş Ortaklarımız:</p>
                        <div className="flex justify-center items-center gap-x-8 sm:gap-x-12 grayscale opacity-70">
                             <p className="text-2xl font-bold font-sans">Filli Boya</p>
                             <p className="text-2xl font-bold font-sans">Weber</p>
                             <p className="text-2xl font-bold font-sans">BAUMIT</p>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* BÖLÜM 6: SSS - YAZILAR GÜNCELLENDİ, TASARIM ORİJİNAL */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div 
                        className="max-w-3xl mx-auto text-center mb-12"
                        variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Sıkça Sorulan Sorular</h2>
                        <p className="mt-4 text-lg text-slate-600">Karar verme sürecinizi kolaylaştırmak için aklınıza takılabilecek soruları yanıtladık.</p>
                    </motion.div>
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <FaqItem question="Bu yatırım kendini ne kadar sürede amorti eder?">
                            <p>Sağlanan enerji tasarrufu sayesinde mantolama yatırımı, binanın konumuna ve yalıtım ihtiyacına bağlı olarak ortalama 3 ila 5 yıl arasında kendini tamamen geri ödemektedir.</p>
                        </FaqItem>
                        <FaqItem question="Uygulama ne kadar sürer ve bu süreçte evde yaşayabilir miyiz?">
                            <p>Projenin büyüklüğüne bağlı olarak bir uygulama ortalama 3-6 hafta sürer. Tüm çalışmalar binanın dışından yürütüldüğü için günlük yaşamınız etkilenmez ve evinizde konforla yaşamaya devam edebilirsiniz.</p>
                        </FaqItem>
                        <FaqItem question="Sizi diğer firmalardan ayıran nedir?">
                            <p>İki temel farkımız var: Birincisi, işe mühendislik yaklaşımıyla başlayıp ısı kamerası gibi teknik analizler kullanmamız. İkincisi ise uygulama sırasında pencere kenarları, köşe birleşimleri gibi kritik detaylara gösterdiğimiz titizliktir. Bu, uzun ömürlü ve sorunsuz bir yalıtım sağlar.</p>
                        </FaqItem>
                        <FaqItem question="Devlet teşviki veya yalıtım kredisi imkanları var mı?">
                            <p>Evet, Enerji Verimliliği Kanunu kapsamında apartman yönetimleri bankalardan uygun koşullu "Eko Kredi" veya "Yalıtım Kredisi" kullanabilmektedir. Bu süreçte size danışmanlık yaparak en doğru finansman modelini bulmanıza yardımcı oluyoruz.</p>
                        </FaqItem>
                    </motion.div>
                </div>
            </section>
            
            {/* BÖLÜM 7: SON ÇAĞRI - YAZILAR GÜNCELLENDİ, TASARIM ORİJİNAL */}
            <section className="bg-indigo-600 text-white">
                <div className="container mx-auto px-6 py-20 text-center">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold">
                            Binanız İçin Doğru Kararı Verin
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-200">
                            Değeri artan bir mülk, daha düşük faturalar ve konforlu bir yaşam alanı için ilk adımı atın. Uzman ekibimizle tanışın, binanız için en doğru çözümü birlikte planlayalım.
                        </p>
                        <motion.div 
                            className="mt-10"
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        >
                            <Link 
                                to="/iletisim"
                                className="inline-block px-10 py-4 font-bold text-lg text-indigo-600 bg-white rounded-lg shadow-2xl hover:bg-slate-100 hover:scale-105 transform transition-all duration-300"
                            >
                                ÜCRETSİZ KEŞİF ve TEKLİF AL
                            </Link>
                            <p className="mt-4 text-sm text-indigo-300">Talebiniz tamamen ücretsiz ve bağlayıcı değildir.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default DisCepheMantolama;