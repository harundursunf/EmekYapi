import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Layers3, TrendingUp, Square, BedDouble } from 'lucide-react';

// Proje Kartı için özel bileşen
const ProjectCard = ({ project }) => {
  const statusClass = project.status === 'Satışta' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';

  return (
    <motion.div
      className="group flex flex-col bg-gray-50/50 shadow-sm"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <div className="overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      </div>
      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">{project.location}</p>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusClass}`}>{project.status}</span>
        </div>
        <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
        <p className="mt-2 text-gray-600 flex-grow">{project.description}</p>
        <div className="mt-6 border-t pt-4 flex items-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center"><Square size={16} className="mr-2" /><span>{project.area}</span></div>
          <div className="flex items-center"><BedDouble size={16} className="mr-2" /><span>{project.rooms}</span></div>
        </div>
      </div>
    </motion.div>
  );
};


function YapSat() {
  const projects = [
    { id: 1, image: '/x1.jpg', title: 'Emek Yapı Konakları', location: 'İstanbul, Çekmeköy', status: 'Satışta', area: '180 m²', rooms: '3+1 Dubleks', description: 'Doğayla iç içe, modern ve lüks bir yaşam sunan projemiz, geniş sosyal donatıları ve eşsiz mimarisiyle öne çıkıyor.' },
    { id: 2, image: '/x1.jpg', title: 'Marina Rezidans', location: 'İzmir, Mavişehir', status: 'Tamamlandı', area: '125 m²', rooms: '2+1', description: 'Deniz manzaralı, akıllı ev teknolojileriyle donatılmış, şehrin merkezinde prestijli bir yaşam alanı.' },
    { id: 3, image: '/x1.jpg', title: 'Ankara Loft', location: 'Ankara, Çankaya', status: 'Satışta', area: '95 m²', rooms: '1+1', description: 'Başkentin kalbinde, minimalist tasarımı ve fonksiyonel iç mekanlarıyla modern profesyoneller için tasarlandı.' },
    { id: 4, image: '/x1.jpg', title: 'Çamlıca Villaları', location: 'İstanbul, Üsküdar', status: 'Tamamlandı', area: '320 m²', rooms: '5+2 Tripleks', description: 'Geleneksel mimariyi modern konforla birleştiren, İstanbul manzaralı özel aile villaları.' },
  ];

  const featuredProject = projects[0]; // Öne çıkarılacak proje (ilk proje)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2 // Kartların birbiri ardına gelme gecikmesi
      }
    }
  };

  return (
    <div className="bg-white text-gray-800 pt-[80px]">
      {/* BÖLÜM 1: ÖNE ÇIKAN PROJE VİDEOSU */}
      <section className="relative h-screen flex items-center justify-center text-white text-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" src="/video.mp4" />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <motion.div
          className="relative z-20 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-semibold tracking-widest uppercase">Öne Çıkan Proje</p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mt-4">{featuredProject.title}</h1>
          <p className="mt-6 text-xl text-gray-200">{featuredProject.location}</p>
        </motion.div>
      </section>

      {/* BÖLÜM 2: PROJE GALERİSİ */}
      <section className="bg-white py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Tüm Projelerimiz</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Her biri özenle tasarlanmış, kalite ve güvenle inşa edilmiş projelerimizle tanışın.</p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* BÖLÜM 3: DEĞER VURGULARI (İKONLU KARTLAR) */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Bizi Farklı Kılan Nedir?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Her projemizde üç temel değere odaklanıyoruz.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-8 text-center"><div className="inline-block rounded-full bg-blue-100 p-4"><MapPin size={32} className="text-blue-600" /></div><h3 className="mt-6 text-xl font-semibold">Stratejik Lokasyon</h3><p className="mt-2 text-gray-600">Projelerimizi, değeri her geçen gün artan, ulaşımı kolay ve sosyal yaşamın merkezinde olan bölgelerde inşa ederiz.</p></div>
            <div className="bg-white p-8 text-center"><div className="inline-block rounded-full bg-blue-100 p-4"><Layers3 size={32} className="text-blue-600" /></div><h3 className="mt-6 text-xl font-semibold">Birinci Sınıf Kalite</h3><p className="mt-2 text-gray-600">Temelden çatıya, en kaliteli ve sertifikalı malzemeleri kullanarak uzun ömürlü ve güvenli yapılar sunarız.</p></div>
            <div className="bg-white p-8 text-center"><div className="inline-block rounded-full bg-blue-100 p-4"><TrendingUp size={32} className="text-blue-600" /></div><h3 className="mt-6 text-xl font-semibold">Yüksek Yatırım Değeri</h3><p className="mt-2 text-gray-600">Sunduğumuz konutlar, sadece bir ev değil, aynı zamanda geleceğiniz için kârlı bir yatırım aracıdır.</p></div>
          </div>
        </div>
      </section>

      {/* İsteğe bağlı CTA bölümü buraya eklenebilir */}
    </div>
  );
}

export default YapSat;