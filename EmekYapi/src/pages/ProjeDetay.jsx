// Dosya: src/pages/ProjeDetay.jsx (Düzeltilmiş Hali)

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Square, BedDouble, Calendar, Building, CheckCircle, Phone, FileText } from 'lucide-react';

// ✅ GÜNCELLEME: Proje listesi, YapSat sayfasındaki tüm projeleri içerecek şekilde tamamlandı.
const allProjectsData = [
    { 
        id: 1, 
        slug: 'emek-yapi-konaklari',
        title: 'Emek Yapı Konakları', 
        location: 'İstanbul, Çekmeköy', 
        status: 'Satışta', 
        mainImage: '/x1.jpg',
        gallery: ['/gallery/konak1.webp', '/gallery/konak2.webp', '/gallery/konak3.webp', '/gallery/konak4.webp'],
        description_long: 'Çekmeköy ormanlarının yanı başında, modern mimariyi doğal yaşamla birleştiren Emek Yapı Konakları, aileniz için huzurlu ve prestijli bir yaşam vaat ediyor. Geniş peyzaj alanları, sosyal tesisleri ve her detayı düşünülmüş daireleriyle şehir hayatının stresinden uzaklaşın.',
        features: ['Yüzme Havuzu ve Güneşlenme Terası', 'Çocuk Oyun Alanları', '7/24 Kapalı Devre Güvenlik Sistemi', 'Kapalı Otopark', 'Fitness ve Sauna Merkezi', 'Yürüyüş Parkurları'],
        specs: { area: '180 m²', rooms: '3+1 Dubleks', type: 'Konut', delivery_date: 'Aralık 2025' },
        floor_plan_image: '/floor-plan1.webp'
    },
    { 
        id: 2, 
        slug: 'marina-rezidans',
        title: 'Marina Rezidans', 
        location: 'İzmir, Mavişehir', 
        status: 'Tamamlandı', 
        mainImage: '/x1.jpg',
        gallery: ['/gallery/marina1.webp', '/gallery/marina2.webp', '/gallery/marina3.webp', '/gallery/marina4.webp'],
        description_long: 'İzmir\'in en gözde lokasyonlarından Mavişehir\'de, kesintisiz deniz manzarası sunan Marina Rezidans, akıllı ev teknolojileri ve lüks detaylarla donatıldı. Şehir hayatının tam merkezinde, konfor ve teknolojiyi bir arada yaşayın.',
        features: ['Akıllı Ev Otomasyon Sistemi', 'Panoramik Deniz Manzarası', 'Resepsiyon ve Concierge Hizmetleri', 'Çatı Katında Sonsuzluk Havuzu', 'Vale Hizmeti', 'Alışveriş Merkezlerine Yürüme Mesafesi'],
        specs: { area: '125 m²', rooms: '2+1', type: 'Rezidans', delivery_date: 'Teslim Edildi' },
        floor_plan_image: '/floor-plan2.webp'
    },
    { 
        id: 3, 
        slug: 'ankara-loft',
        title: 'Ankara Loft', 
        location: 'Ankara, Çankaya', 
        status: 'Satışta', 
        mainImage: '/x1.jpg',
        gallery: ['/gallery/ankara1.webp', '/gallery/ankara2.webp', '/gallery/ankara3.webp', '/gallery/ankara4.webp'],
        description_long: 'Başkentin kalbinde, minimalist tasarımı ve fonksiyonel iç mekanlarıyla modern profesyoneller için tasarlandı. Şehir manzaralı terası ve sosyal alanları ile fark yaratıyor.',
        features: ['Concierge Hizmeti', 'Kapalı Yüzme Havuzu', 'Akıllı Kilit Sistemleri', 'Toplantı Odaları', 'Spor Salonu', '7/24 Resepsiyon'],
        specs: { area: '95 m²', rooms: '1+1', type: 'Loft Daire', delivery_date: 'Haziran 2026' },
        floor_plan_image: '/floor-plan3.webp'
    },
    { 
        id: 4, 
        slug: 'camlica-villalari',
        title: 'Çamlıca Villaları', 
        location: 'İstanbul, Üsküdar', 
        status: 'Tamamlandı', 
        mainImage: '/x1.jpg',
        gallery: ['/gallery/villa1.webp', '/gallery/villa2.webp', '/gallery/villa3.webp', '/gallery/villa4.webp'],
        description_long: 'Geleneksel mimariyi modern konforla birleştiren, İstanbul manzaralı özel aile villaları. Her villanın kendine ait bahçesi ve özel havuzu bulunmaktadır.',
        features: ['Özel Yüzme Havuzu', 'Geniş Bahçe Alanı', 'Boğaz Manzarası', 'Sauna ve Türk Hamamı', 'Kapalı Garaj', 'Şömine'],
        specs: { area: '320 m²', rooms: '5+2 Tripleks', type: 'Villa', delivery_date: 'Teslim Edildi' },
        floor_plan_image: '/floor-plan4.webp'
    }
];


function ProjeDetay() {
    const { projeSlug } = useParams();
    const project = allProjectsData.find(p => p.slug === projeSlug);

    // ... sayfanın geri kalanı aynı ...

    if (!project) {
        return (
            <div className="pt-[120px] container mx-auto px-6 text-center text-gray-800">
                <h1 className="text-4xl font-bold">Proje Bulunamadı</h1>
                <p className="mt-4 text-xl">Aradığınız proje mevcut değil veya kaldırılmış olabilir.</p>
                <Link to="/yapsat" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg">
                    Tüm Projelere Geri Dön
                </Link>
            </div>
        );
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <div className="bg-white text-gray-800 pt-[80px]">
            {/* BÖLÜM 1: GİRİŞ (HERO) */}
            <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
                <img src={project.mainImage} alt={project.title} className="absolute inset-0 w-full h-full object-cover z-0" />
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <motion.div
                    className="relative z-20 p-6"
                    initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                    <motion.p variants={fadeIn} className="font-semibold tracking-widest uppercase">{project.location}</motion.p>
                    <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mt-4">{project.title}</motion.h1>
                </motion.div>
            </section>
            
            {/* BÖLÜM 2: HIZLI BİLGİ PANELİ */}
            <section className="bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center -mt-12 relative z-20">
                        {Object.entries(project.specs).map(([key, value], index) => {
                            const icons = { area: <Square />, rooms: <BedDouble />, type: <Building />, delivery_date: <Calendar /> };
                            const labels = { area: 'Alan', rooms: 'Oda Sayısı', type: 'Tipi', delivery_date: 'Teslim Tarihi' };
                            return (
                                <motion.div 
                                    key={key} 
                                    className="bg-white p-6 rounded-lg shadow-lg border"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="text-blue-600 w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">{icons[key]}</div>
                                    <p className="text-sm text-gray-500 mt-3">{labels[key]}</p>
                                    <p className="font-bold text-lg">{value}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
            
            {/* BÖLÜM 3: PROJE HAKKINDA VE ÖZELLİKLER */}
            <section className="py-20">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                        <h2 className="text-3xl font-bold text-gray-900">Proje Hakkında</h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">{project.description_long}</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-50 p-8 rounded-lg border"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Proje Özellikleri</h3>
                        <ul className="space-y-3">
                            {project.features.map((feature, index) => (
                                <motion.li key={index} className="flex items-center gap-3" variants={fadeIn}>
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
            
            {/* BÖLÜM 4: GALERİ */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-gray-900">Proje Galerisi</h2>
                         <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Projemizin her köşesini daha yakından keşfedin.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.gallery.map((img, index) => (
                             <motion.div 
                                key={index} 
                                className="overflow-hidden rounded-lg shadow-md aspect-square"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                             >
                                <img src={img} alt={`${project.title} Galeri ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

             {/* BÖLÜM 5: KAT PLANI */}
             <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Örnek Kat Planı</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Fonksiyonel ve ferah yaşam alanları sunan örnek daire planımız.</p>
                    <motion.div 
                        className="mt-8 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <img src={project.floor_plan_image} alt="Kat Planı" className="w-full h-auto object-contain rounded-lg border p-4 shadow-sm"/>
                    </motion.div>
                </div>
            </section>

             {/* BÖLÜM 6: EYLEM ÇAĞRISI (CTA) */}
            <section className="bg-blue-600 text-white">
                <div className="container mx-auto px-6 py-20 text-center">
                     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                        <h2 className="text-4xl font-bold">Bu Projeyle İlgileniyor musunuz?</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">Daha fazla bilgi almak, ödeme seçeneklerini öğrenmek veya satış ofisimizle bir randevu ayarlamak için bizimle iletişime geçin.</p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                             <a href={`tel:${'SATIŞ OFİSİ NUMARASI'}`} className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 font-bold text-lg text-blue-700 bg-white rounded-lg shadow-xl hover:bg-gray-100 hover:scale-105 transform transition-all duration-300">
                               <Phone /> Satış Ofisini Ara
                            </a>
                            <Link to="/iletisim" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 font-bold text-lg text-white bg-blue-500/80 rounded-lg shadow-xl hover:bg-blue-500 hover:scale-105 transform transition-all duration-300">
                               <FileText /> Bilgi Formu Doldur
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

export default ProjeDetay;