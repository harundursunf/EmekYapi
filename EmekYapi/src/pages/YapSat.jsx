// Gerekli kütüphaneleri projenize eklemeyi unutmayın:
// npm install framer-motion lucide-react clsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Layers3, TrendingUp, Square, BedDouble, ArrowRight, CheckCircle, Building, Users } from 'lucide-react';
import clsx from 'clsx';

// GÜNCELLEME: Proje Kartı Bileşeni Yeniden Tasarlandı
const ProjectCard = ({ project }) => {
    const statusClass = project.status === 'Satışta' ? 'bg-green-100 text-green-800' : 'bg-stone-100 text-stone-800';
    const slug = project.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');

    return (
        <motion.div
            className="group flex flex-col bg-white shadow-md rounded-xl overflow-hidden border border-stone-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            layout
        >
            <div className="overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${statusClass}`}>{project.status}</span>
            </div>
            <div className="flex flex-col flex-grow p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 flex items-center gap-2"><MapPin size={14}/> {project.location}</p>
                <h3 className="mt-2 text-2xl font-bold text-stone-900">{project.title}</h3>
                <p className="mt-2 text-stone-600 flex-grow text-sm">{project.description}</p>
                <div className="mt-6 border-t border-stone-200 pt-4 flex items-center space-x-6 text-sm text-stone-700">
                    <div className="flex items-center" title="Alan"><Square size={16} className="mr-2 text-stone-400" /><span>{project.area}</span></div>
                    <div className="flex items-center" title="Oda Sayısı"><BedDouble size={16} className="mr-2 text-stone-400" /><span>{project.rooms}</span></div>
                </div>
            </div>
             <Link to={`/projeler/${slug}`} className="block bg-stone-100/70 p-4 text-center font-semibold text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                Projeyi İncele
            </Link>
        </motion.div>
    );
};

// GÜNCELLEME: Değer Kartı Bileşeni
const ValueCard = ({ icon, title, children }) => (
     <motion.div 
        className="flex items-start gap-4"
        variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
     >
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">{icon}</div>
        <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-1 text-gray-600">{children}</p>
        </div>
    </motion.div>
);


function YapSat() {
    const projects = [
        { id: 1, image: '/x1.jpg', title: 'Emek Yapı Konakları', location: 'İstanbul, Çekmeköy', status: 'Satışta', area: '180 m²', rooms: '3+1 Dubleks', description: 'Doğayla iç içe, modern ve lüks bir yaşam sunan projemiz, geniş sosyal donatıları ve eşsiz mimarisiyle öne çıkıyor.' },
        { id: 2, image: '/x1.jpg', title: 'Marina Rezidans', location: 'İzmir, Mavişehir', status: 'Tamamlandı', area: '125 m²', rooms: '2+1', description: 'Deniz manzaralı, akıllı ev teknolojileriyle donatılmış, şehrin merkezinde prestijli bir yaşam alanı.' },
        { id: 3, image: '/x1.jpg', title: 'Ankara Loft', location: 'Ankara, Çankaya', status: 'Satışta', area: '95 m²', rooms: '1+1', description: 'Başkentin kalbinde, minimalist tasarımı ve fonksiyonel iç mekanlarıyla modern profesyoneller için tasarlandı.' },
        { id: 4, image: '/x1.jpg', title: 'Çamlıca Villaları', location: 'İstanbul, Üsküdar', status: 'Tamamlandı', area: '320 m²', rooms: '5+2 Tripleks', description: 'Geleneksel mimariyi modern konforla birleştiren, İstanbul manzaralı özel aile villaları.' },
    ];

    const featuredProject = projects[0];
    const [filter, setFilter] = useState('Tümü');

    const filteredProjects = projects.filter(p => filter === 'Tümü' || p.status === filter);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <div className="bg-white text-gray-800 pt-[80px]">
            {/* BÖLÜM 1: GİRİŞ (YENİDEN TASARLANDI) */}
            <section className="bg-gray-50">
                <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p variants={{hidden:{opacity:0, y:20}, visible:{opacity:1,y:0}}} className="font-semibold tracking-widest uppercase text-blue-600">EMEK YAPI | YAP-SAT</motion.p>
                        <motion.h1 variants={{hidden:{opacity:0, y:20}, visible:{opacity:1,y:0}}} className="text-4xl md:text-5xl font-bold tracking-tight mt-4">Yaşam Alanları İnşa Ediyor, Değer Yaratıyoruz</motion.h1>
                        <motion.p variants={{hidden:{opacity:0, y:20}, visible:{opacity:1,y:0}}} className="mt-6 text-lg text-gray-600">Doğru lokasyonda, kaliteli malzemelerle, modern mimari anlayışıyla geliştirdiğimiz projelerle hem konforlu bir yaşam sunuyor hem de geleceğiniz için sağlam bir yatırım fırsatı yaratıyoruz.</motion.p>
                        <motion.div variants={{hidden:{opacity:0, y:20}, visible:{opacity:1,y:0}}} className="mt-8 grid grid-cols-2 gap-6 text-center">
                            <div className="bg-white p-4 rounded-lg border border-stone-200"><p className="text-3xl font-bold text-blue-600">20+</p><p className="text-sm text-gray-500">Yıllık Tecrübe</p></div>
                            <div className="bg-white p-4 rounded-lg border border-stone-200"><p className="text-3xl font-bold text-blue-600">500+</p><p className="text-sm text-gray-500">Teslim Edilen Konut</p></div>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" src="/video.mp4" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                             <h3 className="text-2xl font-bold">{featuredProject.title}</h3>
                             <p>{featuredProject.location}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* BÖLÜM 2: PROJE GALERİSİ (YENİDEN TASARLANDI) */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold">Projelerimiz</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Her biri özenle tasarlanmış, kalite ve güvenle inşa edilmiş projelerimizle tanışın.</p>
                        <div className="mt-6 flex justify-center gap-2">
                            {['Tümü', 'Satışta', 'Tamamlandı'].map(tab => (
                                <button 
                                    key={tab} 
                                    onClick={() => setFilter(tab)}
                                    className={clsx(
                                        'px-5 py-2 text-sm font-semibold rounded-full transition-colors',
                                        {
                                            'bg-blue-600 text-white shadow': filter === tab,
                                            'bg-gray-100 text-gray-700 hover:bg-gray-200': filter !== tab
                                        }
                                    )}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* BÖLÜM 3: DEĞER VURGULARI (YENİDEN TASARLANDI) */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-6">
                     <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            className="space-y-8"
                            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        >
                             <h2 className="text-4xl font-bold mb-8">Bizi Farklı Kılan Nedir?</h2>
                             <ValueCard icon={<MapPin size={28} />} title="Stratejik Lokasyon">Projelerimizi, değeri her geçen gün artan, ulaşımı kolay ve sosyal yaşamın merkezinde olan bölgelerde inşa ederiz.</ValueCard>
                             <ValueCard icon={<Layers3 size={28} />} title="Birinci Sınıf Kalite">Temelden çatıya, en kaliteli ve sertifikalı malzemeleri kullanarak uzun ömürlü ve güvenli yapılar sunarız.</ValueCard>
                             <ValueCard icon={<TrendingUp size={28} />} title="Yüksek Yatırım Değeri">Sunduğumuz konutlar, sadece bir ev değil, aynı zamanda geleceğiniz için kârlı bir yatırım aracıdır.</ValueCard>
                        </motion.div>
                         <motion.div 
                            className="h-[500px] w-full rounded-xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                         >
                            <img src="/x1.jpg" alt="Kaliteli İnşaat Malzemeleri" className="w-full h-full object-cover"/>
                        </motion.div>
                     </div>
                </div>
            </section>

             {/* BÖLÜM 4: SON ÇAĞRI (YENİ BÖLÜM) */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-6 py-20 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl font-bold">Hayalinizdeki Evi veya Yatırımı Bulun</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">Satıştaki projelerimizi incelemek, gelecekteki fırsatlar hakkında bilgi almak veya iş birliği olanaklarını görüşmek için bizimle iletişime geçin.</p>
                        <div className="mt-8">
                             <Link to="/iletisim" className="inline-block px-10 py-4 font-bold text-lg text-blue-700 bg-white rounded-lg shadow-xl hover:bg-gray-100 hover:scale-105 transform transition-all duration-300">
                                Satış Ofisiyle İletişime Geç
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default YapSat;