// Gerekli kütüphaneleri projenize eklemeyi unutmayın:
// npm install framer-motion lucide-react

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, ThumbsUp, Check, ArrowRight, Move, ShieldPlus, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

// Bileşen: Avantaj Kartı
const AdvantageCard = ({ icon, title, children }) => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left">
            <div className="flex items-center gap-4 mb-3">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">{children}</p>
        </div>
    );
};


const FileliSiva = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6, ease: 'easeOut' } }
    };

    const applicationSteps = [
        { title: "Yüzeyin Hazırlanması", description: "Uygulama öncesi, mantolama levhalarının yüzeyi tüm toz ve kalıntılardan arındırılır, pürüzsüzlük sağlanır.", image: "/resim5.webp" },
        { title: "İlk Kat Sıva ve File", description: "Özel harç yüzeye çekilir. Henüz kurumadan, sıva filesi yukarıdan aşağıya doğru bastırılarak harcın içine gömülür.", image: "/resim4.webp" },
        { title: "Ek Yerlerinde Hassasiyet", description: "Filelerin ek yerleri, çatlakları önlemek için mutlaka 10 cm üst üste bindirilir. Köşelerde özel profiller kullanılır.", image: "/resim7.webp" },
        { title: "Son Kat ve Pürüzsüzleştirme", description: "İlk kat kuruduktan sonra, ikinci kat sıva uygulanır. Bu katman, boya öncesi son pürüzsüz yüzeyi oluşturur.", image: "/resim12.webp" },
    ];

    return (
        <div className="bg-slate-50 text-slate-800 pt-[116px] overflow-x-hidden">

            {/* BÖLÜM 1: GİRİŞ */}
            <header className="bg-white">
                <div className="container mx-auto px-6 py-16 sm:py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeIn} initial="hidden" animate="visible">
                            <motion.p variants={fadeIn} className="font-semibold text-orange-600 uppercase tracking-wider mb-3">DIŞ CEPHELERİN GİZLİ KAHRAMANI</motion.p>
                            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 !leading-tight">
                                Duvarlarınızın Zırhı: Fileli Sıva
                            </motion.h1>
                            <motion.p variants={fadeIn} className="mt-5 max-w-lg text-lg text-slate-600">
                                Mantolama ve boyanın altındaki en kritik katmanla tanışın. Binanızın yıllara meydan okumasını sağlayan, çatlakları önleyen ve sağlamlığın temelini oluşturan o hayati dokunuş.
                            </motion.p>
                            <motion.div variants={fadeIn} className="mt-8">
                                <Link 
                                    to="/iletisim"
                                    className="inline-flex items-center gap-2 px-8 py-3 font-bold text-base text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transform transition-all duration-300"
                                >
                                    Uzman Danışmanlık Al <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            className="bg-slate-100 p-4 rounded-xl border border-slate-200"
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                        >
                            <div className="relative">
                                <img src="/x1.jpg" alt="Duvar Katmanları Kesiti" className="rounded-lg object-cover w-full h-full" />
                                <div className="absolute top-1/4 left-4 bg-white/80 p-2 rounded-md shadow-md backdrop-blur-sm text-sm font-semibold text-slate-800">
                                    <span className="font-bold">Son Kat Boya</span>
                                </div>
                                 <div className="absolute top-1/2 left-4 bg-orange-500/90 p-2 rounded-md shadow-md backdrop-blur-sm text-sm font-bold text-white">
                                    → Fileli Sıva (Zırh)
                                </div>
                                <div className="absolute top-3/4 left-4 bg-white/80 p-2 rounded-md shadow-md backdrop-blur-sm text-sm font-semibold text-slate-800">
                                    <span className="font-bold">Isı Yalıtım Levhası</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* BÖLÜM 2: NEDEN HAYATİ? */}
            <section className="py-16 sm:py-20 bg-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Sıradan Bir Sıva Neden Yetmez?</h2>
                        <p className="mt-4 text-lg text-slate-600">Fileli sıva, binanızın dış kabuğunu oluşturan sistemin adeta iskeletidir. Bu iskelet olmadan, en kaliteli boya bile zamanla oluşacak kılcal çatlaklara ve darbelere karşı koyamaz.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        <AdvantageCard icon={<ShieldPlus size={32} />} title="Çatlaklara Karşı Tam Koruma">
                            Isı farklılıkları ve bina hareketlerinden kaynaklanan gerilimleri emerek sıvanın kılcal ve yapısal çatlamasını engeller.
                        </AdvantageCard>
                        <AdvantageCard icon={<Layers size={32} />} title="Darbe Direnci ve Dayanıklılık">
                            Yüzeye mekanik bir direnç kazandırır. Dış etkenlere ve darbelere karşı duvarınızın ve altındaki yalıtım levhasının bütünlüğünü korur.
                        </AdvantageCard>
                        <AdvantageCard icon={<CheckSquare size={32} />} title="Pürüzsüz ve Sağlam Zemin">
                           Dekoratif sıva ve boya uygulamaları için kusursuz, stabil ve homojen bir yüzey oluşturur. Son kat uygulamaların estetiğini zirveye taşır.
                        </AdvantageCard>
                    </div>
                </div>
            </section>
            
            {/* BÖLÜM 3: UYGULAMA ANATOMİSİ */}
            <section className="py-16 sm:py-24 bg-white">
                 <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">4 Adımda Kusursuz Uygulama</h2>
                        <p className="mt-4 text-lg text-slate-600">Fileli sıva uygulaması, santim santim ustalık gerektiren kritik bir süreçtir. İşte Emek Yapı'nın kalite standartlarını yansıtan uygulama adımlarımız:</p>
                    </div>
                     <div className="relative">
                        {/* Dikey Çizgi */}
                        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>
                        
                        <div className="space-y-16">
                            {applicationSteps.map((step, index) => (
                                <motion.div 
                                    key={index}
                                    className="md:grid md:grid-cols-2 md:gap-x-12 relative items-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <div className={`text-center md:text-left ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                        <p className="text-sm font-bold text-orange-500 mb-1">ADIM {index + 1}</p>
                                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-slate-600">{step.description}</p>
                                    </div>
                                    <div className={`mt-4 md:mt-0 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                                        <img src={step.image} alt={step.title} className="rounded-xl shadow-xl w-full h-full object-cover aspect-video" />
                                    </div>
                                    {/* Adım Numarası İkonu */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white hidden md:flex">
                                        {index + 1}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                 </div>
            </section>

             {/* BÖLÜM 4: KALİTE FARKI */}
            <section className="py-16 sm:py-20 bg-slate-100">
                <div className="container mx-auto px-6">
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-lg">
                             <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Her File ve Her Harç Aynı Değildir</h2>
                             <p className="mt-4 text-lg text-slate-600 leading-relaxed">Piyasada birçok uygulama görebilirsiniz. Emek Yapı olarak biz, fileli sıvayı binanızın geleceğine yapılmış en temel yatırım olarak görüyoruz. Kullandığımız malzemelerin teknik üstünlüğü, bu anlayışımızın kanıtıdır.</p>
                             <div className="mt-6">
                                 <Link to="/sirketimiz" className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-2">
                                     Kalite Anlayışımızı Keşfedin <ArrowRight size={18}/>
                                 </Link>
                             </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                            <h4 className="text-lg font-bold text-center mb-4">Teknik Özellik Karşılaştırması</h4>
                            <div className="flow-root">
                                <div className="-mx-6 -my-2 overflow-x-auto">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-slate-200">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-0">Özellik</th>
                                                <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-slate-900">Standart Uygulama</th>
                                                <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-orange-600">Emek Yapı Standardı</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200">
                                            <tr>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-0">File Ağırlığı</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 text-center">~145 gr/m²</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-700 text-center font-bold">160 gr/m²</td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-0">Alkali Dayanımı</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 text-center">Orta</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-700 text-center font-bold">Yüksek</td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-0">Polimer Oranı</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 text-center">Düşük</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-700 text-center font-bold">Yüksek (Esneklik +)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* BÖLÜM 5: SON ÇAĞRI */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-20">
                     <div className="bg-slate-800 text-white rounded-2xl p-10 sm:p-16 text-center shadow-2xl">
                         <motion.h2 
                             className="text-3xl sm:text-4xl font-extrabold"
                             variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                         >
                            Binanızın Temellerini Sağlam Atın
                         </motion.h2>
                         <motion.p 
                             className="mt-4 max-w-2xl mx-auto text-lg text-slate-300"
                             variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                         >
                            Dış cephe yenileme projenizde, estetik kadar sağlamlığa da önem verin. Çatlaklarla dolu bir gelecek yerine, yıllara meydan okuyan pürüzsüz duvarlar için ilk adımı bugün atın.
                         </motion.p>
                         <motion.div 
                             className="mt-10"
                             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                         >
                             <Link 
                                 to="/iletisim"
                                 className="inline-block px-10 py-4 font-bold text-lg text-slate-900 bg-orange-500 rounded-lg shadow-2xl hover:bg-orange-600 hover:scale-105 transform transition-all duration-300"
                             >
                                 ÜCRETSİZ KEŞİF ve DANIŞMANLIK
                             </Link>
                         </motion.div>
                     </div>
                 </div>
            </section>

        </div>
    );
};

export default FileliSiva;