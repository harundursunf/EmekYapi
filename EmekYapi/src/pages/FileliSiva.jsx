// Gerekli kütüphaneleri projenize eklemeyi unutmayın:
// npm install framer-motion lucide-react

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Check, ArrowRight, ShieldPlus, CheckSquare, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Bileşen: Avantaj Kartı
const AdvantageCard = ({ icon, title, children }) => {
    return (
        <motion.div 
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="flex items-center gap-4 mb-3">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">{children}</p>
        </motion.div>
    );
};

// YENİ BİLEŞEN: Süreç Adım Kartı
const ProcessStepCard = ({ number, title, description, image }) => {
    return (
        <motion.div 
            className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm transition-shadow hover:shadow-lg h-full flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="p-5 flex-grow flex flex-col">
                <p className="font-bold text-orange-500 text-sm mb-1">ADIM {number}</p>
                <h3 className="font-bold text-slate-800 mb-2 text-lg">{title}</h3>
                <p className="text-slate-600 text-sm flex-grow">{description}</p>
            </div>
        </motion.div>
    )
}

const FileliSiva = () => {

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6, ease: 'easeOut' } }
    };

    const applicationSteps = [
        { title: "Yüzeyin Hazırlanması", description: "Uygulama öncesi, mantolama levhalarının yüzeyi tüm toz ve kalıntılardan arındırılır.", image: "/resim5.webp" },
        { title: "İlk Kat Sıva ve File", description: "Özel harç yüzeye çekilir ve henüz kurumadan sıva filesi içine gömülür.", image: "/resim4.webp" },
        { title: "Ek Yerlerinde Hassasiyet", description: "Filelerin ek yerleri, çatlakları önlemek için 10 cm üst üste bindirilir.", image: "/resim7.webp" },
        { title: "Son Kat ve Pürüzsüzleştirme", description: "İlk kat kuruduktan sonra, ikinci kat sıva ile boya öncesi son pürüzsüz yüzey oluşturulur.", image: "/resim12.webp" },
    ];

    return (
        <div className="bg-slate-50 text-slate-800 pt-[46px] overflow-x-hidden">

            {/* BÖLÜM 1: GİRİŞ (YENİDEN TASARLANDI) */}
            <header className="bg-white">
                <div className="container mx-auto px-6 py-16 sm:py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeIn} initial="hidden" animate="visible">
                            <motion.p variants={fadeIn} className="font-semibold text-orange-600 uppercase tracking-wider mb-3">DIŞ CEPHE SİSTEMİNİN TEMELİ</motion.p>
                            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 !leading-tight">
                                Yüzey Bütünlüğü için Fileli Sıva
                            </motion.h1>
                            <motion.p variants={fadeIn} className="mt-5 max-w-lg text-lg text-slate-600">
                                Mantolama sistemlerinde, boya ve kaplamanın altındaki fileli sıva, yüzeyin dayanıklılığını ve ömrünü doğrudan etkileyen en kritik katmandır.
                            </motion.p>
                             <motion.ul variants={fadeIn} className="mt-6 space-y-3 text-slate-700">
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-orange-500" /> Çatlaklara Karşı Koruma</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-orange-500" /> Artırılmış Darbe Direnci</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-orange-500" /> Pürüzsüz ve Uzun Ömürlü Yüzey</li>
                            </motion.ul>
                        </motion.div>
                        <motion.div 
                            className="bg-slate-100 p-8 rounded-xl border border-slate-200"
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                        >
                           <h3 className='text-center font-bold text-slate-700 mb-4'>Duvar Katmanları</h3>
                           <div className='space-y-2 text-sm font-semibold'>
                                <div className='p-3 bg-white rounded shadow-sm border-l-4 border-slate-400'>1. Son Kat Boya / Kaplama</div>
                                <div className='p-3 bg-white rounded shadow-sm border-l-4 border-orange-500'>2. Fileli Sıva Katmanı</div>
                                <div className='p-3 bg-white rounded shadow-sm border-l-4 border-slate-400'>3. Isı Yalıtım Levhası</div>
                                <div className='p-3 bg-white rounded shadow-sm border-l-4 border-slate-400'>4. Yapı Duvarı</div>
                           </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* BÖLÜM 2: NEDEN ÖNEMLİ? (YENİDEN TASARLANDI) */}
            <section className="py-16 sm:py-20 bg-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Fileli Sıvanın Kritik Rolü ve Faydaları</h2>
                        <p className="mt-4 text-lg text-slate-600">Mantolama levhaları üzerine uygulanan fileli sıva, sistemin yapısal bütünlüğünü sağlar. Bu katman olmadan, en kaliteli kaplamalar bile termal gerilimler karşısında zamanla çatlayabilir.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        <AdvantageCard icon={<ShieldPlus size={32} />} title="Çatlak Oluşumunu Engeller">Isı farklılıkları ve bina hareketlerinden kaynaklanan gerilimleri emerek sıvanın kılcal ve yapısal çatlamasını önler.</AdvantageCard>
                        <AdvantageCard icon={<Layers size={32} />} title="Darbe Direnci Sağlar">Yüzeye mekanik bir direnç kazandırır. Dış etkenlere ve darbelere karşı duvarın ve altındaki yalıtım levhasının bütünlüğünü korur.</AdvantageCard>
                        <AdvantageCard icon={<CheckSquare size={32} />} title="Pürüzsüz Yüzey Oluşturur">Dekoratif sıva ve boya uygulamaları için stabil ve homojen bir zemin oluşturarak son kat uygulamaların estetiğini ve kalıcılığını artırır.</AdvantageCard>
                    </div>
                </div>
            </section>
            
            {/* BÖLÜM 3: UYGULAMA TEKNİĞİ (YENİDEN TASARLANDI) */}
            <section className="py-16 sm:py-24 bg-white">
                 <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Doğru Fileli Sıva Uygulama Tekniği</h2>
                        <p className="mt-4 text-lg text-slate-600">Uygulamanın performansı, doğru teknik ve detaylara gösterilen özen ile doğrudan ilişkilidir. Kalite standartlarımızı yansıtan uygulama adımlarımız:</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {applicationSteps.map((step, index) => (
                           <ProcessStepCard key={index} number={index + 1} title={step.title} description={step.description} image={step.image}/>
                        ))}
                    </div>
                 </div>
            </section>

             {/* BÖLÜM 4: KALİTE FARKI */}
            <section className="py-16 sm:py-20 bg-slate-100">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-200"
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="max-w-lg">
                                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Her File ve Her Harç Aynı Değildir</h2>
                                <p className="mt-4 text-lg text-slate-600 leading-relaxed">Uygulamanın uzun ömürlü olması, kullanılan malzemenin kalitesiyle başlar. Fileli sıvayı binanızın geleceğine yapılmış temel bir yatırım olarak görüyor ve sadece yüksek standartlardaki, sertifikalı ürünleri kullanıyoruz.</p>
                                <div className="mt-6">
                                    <Link to="/sirketimiz" className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-2">
                                        Kalite Anlayışımızı Keşfedin <ArrowRight size={18}/>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-center mb-4 text-slate-700">Teknik Özellik Karşılaştırması</h4>
                                <div className="overflow-x-auto rounded-lg border border-slate-200">
                                    <table className="min-w-full">
                                        <thead className="bg-slate-50">
                                            <tr>
                                                <th scope="col" className="py-3 px-4 text-left text-sm font-semibold text-slate-900">Özellik</th>
                                                <th scope="col" className="py-3 px-4 text-center text-sm font-semibold text-slate-900">Standart Uygulama</th>
                                                <th scope="col" className="py-3 px-4 text-center text-sm font-semibold text-orange-600 bg-orange-50">Emek Yapı Standardı</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200 bg-white">
                                            <tr>
                                                <td className="py-4 px-4 text-sm font-medium text-slate-900">File Ağırlığı</td>
                                                <td className="py-4 px-4 text-sm text-slate-500 text-center">~145 gr/m²</td>
                                                <td className="py-4 px-4 text-sm text-slate-700 text-center font-bold">160 gr/m²</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-4 text-sm font-medium text-slate-900">Alkali Dayanımı</td>
                                                <td className="py-4 px-4 text-sm text-slate-500 text-center">Orta</td>
                                                <td className="py-4 px-4 text-sm text-slate-700 text-center font-bold">Yüksek</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-4 text-sm font-medium text-slate-900">Polimer Oranı</td>
                                                <td className="py-4 px-4 text-sm text-slate-500 text-center">Düşük</td>
                                                <td className="py-4 px-4 text-sm text-slate-700 text-center font-bold">Yüksek (Esneklik +)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* BÖLÜM 5: SON ÇAĞRI */}
            <section className="bg-white py-16 sm:py-20">
                <div className="container mx-auto px-6">
                     <div className="bg-slate-800 text-white rounded-2xl p-10 sm:p-16 text-center">
                          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                              <ShieldCheck className="w-12 h-12 mx-auto text-orange-400 mb-4" />
                              <h2 className="text-3xl sm:text-4xl font-extrabold">Dış Cephe Sağlamlığına Önem Verin</h2>
                              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
                                 Dış cephe projenizin estetiği kadar dayanıklılığı da önemlidir. Yıllar boyu pürüzsüzlüğünü koruyacak, sağlam ve güvenilir bir yüzey için doğru malzeme ve uygulama tekniğini seçin.
                              </p>
                              <div className="mt-10">
                                  <Link 
                                      to="/iletisim"
                                      className="inline-block px-10 py-4 font-bold text-lg text-slate-900 bg-orange-500 rounded-lg shadow-xl hover:bg-orange-600 hover:text-white transition-colors duration-300"
                                  >
                                      ÜCRETSİZ KEŞİF ve DANIŞMANLIK
                                  </Link>
                              </div>
                          </motion.div>
                     </div>
                </div>
            </section>

        </div>
    );
};

export default FileliSiva;