import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gem, Scale, Lightbulb, Users, Linkedin } from 'lucide-react';

// Animasyon varyantları (her yerde tutarlı olması için)
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

function Sirketimiz() {
  const timeline = [
    { year: '2003', title: 'Kuruluş', description: 'Emek Yapı, kalite ve güven ilkesiyle sektöre ilk adımını attı.' },
    { year: '2010', title: 'İlk Büyük Proje', description: 'Şehrin siluetini değiştiren ilk büyük konut projemizi tamamladık.' },
    { year: '2018', title: 'Teknolojik Yatırım', description: 'Modern inşaat teknolojilerine yatırım yaparak verimliliğimizi artırdık.' },
    { year: '2025', title: 'Geleceğe Bakış', description: 'Sürdürülebilir ve yenilikçi projelerle sektöre yön vermeye devam ediyoruz.' },
  ];

  const teamMembers = [
    { name: 'Harun Emek', title: 'Kurucu & CEO', image: '/team1.jpg', social: '#' },
    { name: 'Ayşe Yılmaz', title: 'Baş Mimar', image: '/team2.jpg', social: '#' },
    { name: 'Ahmet Çelik', title: 'Proje Müdürü', image: '/team3.jpg', social: '#' },
  ];

  return (
    <div className="bg-white text-slate-800 pt-[80px]">
      {/* BÖLÜM 1: GİRİŞ (HERO) */}
      <section className="bg-slate-50">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
              20 Yıllık Güvenle, Geleceği İnşa Ediyoruz.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Kurulduğumuz günden bu yana, yenilikçi vizyonumuz ve kaliteye olan bağlılığımızla, sadece yapılar değil, aynı zamanda kalıcı değerler ve güvene dayalı ilişkiler inşa ediyoruz.
            </p>
          </motion.div>
          <motion.div 
            className="h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Buraya ofis veya profesyonel bir proje fotoğrafı */}
            <img src="/x1.jpg" alt="Emek Yapı Ofis" className="h-full w-full object-cover shadow-xl" />
          </motion.div>
        </div>
      </section>

      {/* BÖLÜM 2: ZAMAN TÜNELİ */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl font-bold">Tarihçemiz</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Geçmişten aldığımız ilhamla, bugünün teknolojisini birleştiriyoruz.</p>
          </motion.div>
          <motion.div 
            className="relative mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Dikey Çizgi */}
            <div className="absolute left-4 top-2 h-full w-0.5 bg-slate-200 md:left-1/2 md:-ml-px"></div>
            {timeline.map((item, index) => (
              <motion.div key={index} className={`relative mb-12 flex items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`} variants={fadeInUp}>
                <div className="absolute left-4 top-2 -ml-2.5 h-5 w-5 rounded-full border-4 border-white bg-blue-500 md:left-1/2 md:-ml-2.5"></div>
                <div className={`w-full px-10 md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <p className="text-lg font-semibold text-blue-600">{item.year}</p>
                  <h3 className="mt-1 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BÖLÜM 3: DEĞERLERİMİZ */}
      <section className="bg-slate-50 py-28">
        <div className="container mx-auto px-6">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl font-bold">Temel Değerlerimiz</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">İşimizi yaparken bize yol gösteren prensiplerimiz.</p>
          </motion.div>
          <motion.div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center"><div className="inline-block rounded-lg bg-white p-5 border"><Gem size={28} className="text-blue-500" /></div><h3 className="mt-5 text-xl font-semibold">Kalite</h3><p className="mt-2 text-slate-600">Her projede en yüksek kalite standartlarını hedefleriz.</p></motion.div>
            <motion.div variants={fadeInUp} className="text-center"><div className="inline-block rounded-lg bg-white p-5 border"><Scale size={28} className="text-blue-500" /></div><h3 className="mt-5 text-xl font-semibold">Dürüstlük</h3><p className="mt-2 text-slate-600">Tüm süreçlerimizde şeffaf ve güvene dayalı ilişkiler kurarız.</p></motion.div>
            <motion.div variants={fadeInUp} className="text-center"><div className="inline-block rounded-lg bg-white p-5 border"><Lightbulb size={28} className="text-blue-500" /></div><h3 className="mt-5 text-xl font-semibold">Yenilikçilik</h3><p className="mt-2 text-slate-600">Sektördeki en son trendleri ve teknolojileri projelerimize entegre ederiz.</p></motion.div>
            <motion.div variants={fadeInUp} className="text-center"><div className="inline-block rounded-lg bg-white p-5 border"><Users size={28} className="text-blue-500" /></div><h3 className="mt-5 text-xl font-semibold">İnsan Odaklılık</h3><p className="mt-2 text-slate-600">Müşterilerimizin ve çalışanlarımızın mutluluğunu merkeze alırız.</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* BÖLÜM 4: EKİBİMİZ */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl font-bold">Yönetim Ekibimiz</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Projelerimize hayat veren deneyimli liderlerimiz.</p>
          </motion.div>
          <motion.div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative overflow-hidden text-center">
                <img src={member.image} alt={member.name} className="h-96 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-300">{member.title}</p>
                  <a href={member.social} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Linkedin size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Sirketimiz;