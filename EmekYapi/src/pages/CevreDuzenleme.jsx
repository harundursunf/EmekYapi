// Gerekli kütüphaneleri projenize eklemeyi unutmayın:
// npm install framer-motion lucide-react clsx

import React from 'react';
import { motion } from 'framer-motion';
import { Shovel, HardHat, Droplets, ArrowRight, GitMerge, FileCheck, Construction, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

// Bileşen: Yetkinlik Kartı
const CompetencyCard = ({ icon, title, description, className }) => {
    return (
        <motion.div 
            className={clsx("bg-white p-6 rounded-xl border border-slate-200 shadow-sm", className)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
            <div className="mb-4 text-red-700">{icon}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </motion.div>
    );
};

// Bileşen: Proje Yaklaşımı Adımı
const ApproachStepCard = ({ number, title, description }) => {
    return (
        <motion.div 
            className="bg-slate-100/80 p-6 rounded-lg border border-slate-200 h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-4xl font-bold text-red-700/50 mb-3">{number}</p>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600">{description}</p>
        </motion.div>
    );
};


const CevreDuzenleme = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <div className="bg-slate-50 text-slate-800 pt-[46px] overflow-x-hidden">

            {/* BÖLÜM 1: GİRİŞ */}
            <header className="bg-white">
                <div className="container mx-auto px-6 py-16 sm:py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeIn} initial="hidden" animate="visible">
                            {/* YAZI GÜNCELLENDİ */}
                            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter !leading-tight text-slate-900">
                                Fonksiyonel ve Estetik <span className="text-red-800">Çevre Çözümleri.</span>
                            </motion.h1>
                            <motion.p variants={fadeIn} className="mt-5 max-w-xl text-lg text-slate-600">
                                Çevre düzenlemesi, yaşam kalitesini ve mülk değerini doğrudan etkileyen kapsamlı bir mühendislik ve tasarım disiplinidir. Projelerinize bu bütüncül yaklaşımla değer katıyoruz.
                            </motion.p>
                             <motion.div variants={fadeIn} className="mt-8">
                                <Link 
                                    to="/iletisim"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3 font-bold text-base text-white bg-red-800 rounded-md shadow-lg shadow-red-500/20 hover:bg-red-900 hover:-translate-y-0.5 transform transition-all duration-300"
                                >
                                    Projenizi Başlatın <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            className="w-full h-full"
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                        >
                            <img src="/cevre-duzenleme-hero.webp" alt="Modern çevre düzenlemesi" className="rounded-xl object-cover w-full aspect-square shadow-xl"/>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* BÖLÜM 2: YETKİNLİK ALANLARI */}
            <section className="py-16 sm:py-24 bg-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-12">
                        {/* YAZI GÜNCELLENDİ */}
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Temel Yetkinliklerimiz</h2>
                        <p className="mt-3 text-lg text-slate-600">Yapısal ve bitkisel peyzajın tüm disiplinlerinde, entegre ve anahtar teslim çözümler sunuyoruz.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                        <CompetencyCard 
                            icon={<HardHat size={32} />}
                            title="Yapısal Peyzaj ve Sert Zemin"
                            description="Yüksek trafik ve yüke dayanıklı, estetik ve fonksiyonel otopark, yol ve yürüme alanlarının projelendirilip uygulanması."
                        />
                         <CompetencyCard 
                            icon={<Trees size={32} />}
                            title="Bitkisel Peyzaj ve Yeşil Alan"
                            description="Bölgesel iklime ve mimariye uygun bitki seçimi, rulo çim uygulamaları ve sürdürülebilir yeşil alanların oluşturulması."
                            className="lg:mt-8"
                        />
                         <CompetencyCard 
                            icon={<Droplets size={32} />}
                            title="Altyapı ve Drenaj Sistemleri"
                            description="Yüzey suyu yönetimi, yağmur suyu hasadı ve etkin drenaj çözümleri ile sorunsuz ve uzun ömürlü altyapı kurulumu."
                        />
                    </div>
                </div>
            </section>
            
            {/* BÖLÜM 3: PROJE YAKLAŞIMI */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="container mx-auto px-6">
                     <div className="max-w-3xl mx-auto text-center mb-12">
                        {/* YAZI GÜNCELLENDİ */}
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Proje Yaklaşımımız</h2>
                        <p className="mt-3 text-lg text-slate-600">Başarılı bir projenin temelinde, doğru planlanmış bir süreç yatar. Şeffaflık ve teknik yeterlilik üzerine kurulu 4 adımlı proje sürecimiz:</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        <ApproachStepCard number="01" title="Analiz ve Konsept Geliştirme">
                            Proje sahasının zemin, drenaj ve topografya gibi teknik analizlerini yapar, ihtiyaçlarınızı anlayarak ön konsepti geliştiririz.
                        </ApproachStepCard>
                        <ApproachStepCard number="02" title="Tasarım ve 3D Görselleştirme">
                            Geliştirilen konsepti, detaylı uygulama çizimlerine ve projenin bitmiş halini net olarak görebileceğiniz 3D görsellere dönüştürürüz.
                        </ApproachStepCard>
                        <ApproachStepCard number="03" title="Uygulama ve Proje Yönetimi">
                            Saha organizasyonu, malzeme tedariği ve kalite kontrol süreçlerini titizlikle yöneterek projeyi plana uygun şekilde hayata geçiririz.
                        </ApproachStepCard>
                        <ApproachStepCard number="04" title="Teslimat ve Garanti">
                            Projeyi zamanında teslim eder, yapılan tüm imalatlar için garanti sunar ve uzun vadeli bakım desteği sağlarız.
                        </ApproachStepCard>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 4: REFERANS PROJELER */}
            <section className="py-16 sm:py-24 bg-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-12">
                        {/* YAZI GÜNCELLENDİ */}
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Referans Projelerimiz</h2>
                        <p className="mt-3 text-lg text-slate-600">Yetkinliğimizi ve proje yönetimi anlayışımızı yansıtan tamamlanmış bazı çalışmalarımız.</p>
                    </div>
                    <div className="space-y-16">
                        {/* Proje 1 */}
                        <motion.div 
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                        >
                           <div className="lg:pr-8">
                               <p className="text-red-800 font-semibold mb-2">KONUT PROJESİ</p>
                               <h3 className="text-3xl font-bold text-slate-900 mb-4">Vadi Park Evleri, Çekmeköy</h3>
                               <p className="text-slate-600 mb-6">Modern mimariyle uyumlu, minimalist ve sürdürülebilir bir peyzaj tasarımı talep edilen projede, 7000 m² alan üzerinde sert zemin, yeşil alan ve sosyal donatı uygulamaları tamamlanmıştır.</p>
                               <div className="flex flex-wrap gap-3 text-sm">
                                   <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium">Otopark ve Yollar</span>
                                   <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium">Çocuk Oyun Alanı</span>
                                   <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium">Otomatik Sulama</span>
                               </div>
                           </div>
                           <img src="/referans-proje-1.webp" alt="Vadi Park Evleri Referans Proje" className="rounded-xl shadow-xl w-full h-96 object-cover"/>
                        </motion.div>
                        {/* Proje 2 */}
                         <motion.div 
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                        >
                           <div className="lg:pl-8 lg:order-2">
                               <p className="text-red-800 font-semibold mb-2">TİCARİ PROJE</p>
                               <h3 className="text-3xl font-bold text-slate-900 mb-4">Mesa Plaza, Maslak</h3>
                                {/* YAZI GÜNCELLENDİ */}
                               <p className="text-slate-600 mb-6">Yoğun yaya trafiğine sahip ofis plazası girişinde, hem estetik hem de dayanıklı malzemelerle kurumsal bir karşılama alanı tasarlandı. Projede drenaj ve aydınlatma çözümlerine öncelik verildi.</p>
                               <div className="flex flex-wrap gap-3 text-sm">
                                   <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium">Doğal Taş Zemin</span>
                                   <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium">LED Aydınlatma</span>
                                   <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium">Oturma Grupları</span>
                               </div>
                           </div>
                           <img src="/referans-proje-2.webp" alt="Mesa Plaza Referans Proje" className="rounded-xl shadow-xl w-full h-96 object-cover lg:order-1"/>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* BÖLÜM 5: SON ÇAĞRI */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-20">
                     <div className="bg-slate-800 text-white rounded-2xl p-10 sm:p-16 text-center">
                          <motion.h2 
                              className="text-3xl sm:text-4xl font-bold"
                              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                          >
                               {/* YAZI GÜNCELLENDİ */}
                              Projenizin Potansiyelini Birlikte Değerlendirelim
                          </motion.h2>
                          <motion.p 
                              className="mt-4 max-w-2xl mx-auto text-lg text-slate-300"
                              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}
                          >
                             Projenizin kapsamı ve hedefleri ne olursa olsun, ihtiyaçlarınızı dinlemek ve size en uygun çözümleri sunmak için hazırız.
                          </motion.p>
                          <motion.div 
                              className="mt-10"
                              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                          >
                              <Link 
                                  to="/iletisim"
                                  className="inline-block px-10 py-4 font-bold text-lg text-white bg-red-800 rounded-md shadow-lg shadow-red-500/30 hover:bg-red-900 hover:scale-105 transform transition-all duration-300"
                              >
                                  UZMAN EKİBİMİZLE GÖRÜŞÜN
                              </Link>
                          </motion.div>
                     </div>
                </div>
            </section>
        </div>
    );
};

export default CevreDuzenleme;