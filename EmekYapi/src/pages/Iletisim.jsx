import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

function Iletisim() {

    // İstediğiniz gibi 5 adet rastgele şube bilgisi
    const branches = [
        { name: 'Merkez Ofis', district: 'Ataşehir, İstanbul', address: 'Barbaros Mah. Atatürk Cad. No:123', phone: '+90 (216) 555 10 20', email: 'atasehir@emekyapi.com' },
        { name: 'Avrupa Yakası Şubesi', district: 'Beşiktaş, İstanbul', address: 'Sinanpaşa Mah. Şair Nedim Sk. No:45', phone: '+90 (212) 555 20 30', email: 'besiktas@emekyapi.com' },
        { name: 'Anadolu Yakası Şubesi', district: 'Kadıköy, İstanbul', address: 'Caferağa Mah. Mühürdar Cad. No:67', phone: '+90 (216) 555 30 40', email: 'kadikoy@emekyapi.com' },
        { name: 'Ankara Şubesi', district: 'Çankaya, Ankara', address: 'Kavaklıdere Mah. Tunalı Hilmi Cad. No:89', phone: '+90 (312) 555 40 50', email: 'ankara@emekyapi.com' },
        { name: 'İzmir Şubesi', district: 'Konak, İzmir', address: 'Alsancak Mah. Kıbrıs Şehitleri Cad. No:12', phone: '+90 (232) 555 50 60', email: 'izmir@emekyapi.com' },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };
      
    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
    };

    return (
        <div className="bg-white text-slate-800 pt-[80px]">
            {/* BÖLÜM 1: GİRİŞ (HERO) */}
            <section className="bg-slate-50 py-28 text-center">
                <motion.div 
                    className="container mx-auto px-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">İletişime Geçin</h1>
                    <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
                        Projenizi birlikte hayata geçirelim. Sorularınız, talepleriniz veya iş birliği teklifleriniz için size bir telefon kadar yakınız.
                    </p>
                </motion.div>
            </section>

            {/* BÖLÜM 2: ŞUBELER VE HARİTA */}
            <section className="py-28">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Sol Taraf: Şubeler */}
                    <motion.div 
                        className="lg:col-span-5"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Şubelerimiz</h2>
                        <div className="space-y-6">
                            {branches.map((branch, index) => (
                                <motion.div key={index} variants={fadeInUp} className="border-b pb-6">
                                    <p className="text-xl font-semibold text-slate-900">{branch.name}</p>
                                    <p className="text-amber-600 font-medium">{branch.district}</p>
                                    <div className="mt-4 space-y-3 text-slate-600">
                                        <p className="flex items-start"><MapPin size={16} className="mr-3 mt-1 flex-shrink-0"/><span>{branch.address}</span></p>
                                        <p className="flex items-start"><Phone size={16} className="mr-3 mt-1 flex-shrink-0"/><a href={`tel:${branch.phone}`} className="hover:text-blue-600">{branch.phone}</a></p>
                                        <p className="flex items-start"><Mail size={16} className="mr-3 mt-1 flex-shrink-0"/><a href={`mailto:${branch.email}`} className="hover:text-blue-600">{branch.email}</a></p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sağ Taraf: Harita */}
                    <motion.div 
                        className="lg:col-span-7 h-96 md:h-full min-h-[500px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Google Haritanızı buraya iframe olarak ekleyebilirsiniz */}
                        {/* Örnek: <iframe src="https://www.google.com/maps/embed?..." width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy"></iframe> */}
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500 shadow-lg">
                            Harita Yüklenecek...
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* BÖLÜM 3: İLETİŞİM FORMU */}
            <section className="bg-slate-50 py-28">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div 
                        className="text-center"
                        initial="hidden" whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}
                    >
                        <h2 className="text-4xl font-bold">Bize Mesaj Gönderin</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Aşağıdaki formu doldurarak bize kolayca ulaşabilirsiniz. En kısa sürede size geri dönüş yapacağız.</p>
                    </motion.div>
                    
                    <motion.form 
                        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
                        initial="hidden" whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Adınız Soyadınız</label>
                            <input type="text" id="name" className="mt-1 block w-full border border-slate-300 px-4 py-3 shadow-sm focus:ring-amber-500 focus:border-amber-500" />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-posta Adresiniz</label>
                            <input type="email" id="email" className="mt-1 block w-full border border-slate-300 px-4 py-3 shadow-sm focus:ring-amber-500 focus:border-amber-500" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="md:col-span-2">
                            <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Konu</label>
                            <input type="text" id="subject" className="mt-1 block w-full border border-slate-300 px-4 py-3 shadow-sm focus:ring-amber-500 focus:border-amber-500" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="md:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mesajınız</label>
                            <textarea id="message" rows="5" className="mt-1 block w-full border border-slate-300 px-4 py-3 shadow-sm focus:ring-amber-500 focus:border-amber-500"></textarea>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="md:col-span-2 text-center">
                            <button type="submit" className="rounded-full bg-amber-400 px-10 py-4 font-semibold text-amber-900 transition-all duration-300 hover:bg-amber-500 hover:shadow-lg hover:-translate-y-1">
                                Mesajı Gönder
                            </button>
                        </motion.div>
                    </motion.form>
                </div>
            </section>
        </div>
    );
}

export default Iletisim;