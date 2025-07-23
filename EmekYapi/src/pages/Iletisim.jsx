// Gerekli kütüphaneleri projenize eklemeyi unutmayın:
// npm install framer-motion lucide-react clsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, Building } from 'lucide-react';
import clsx from 'clsx';

// YENİ BİLEŞEN: Giriş bölümü için hızlı iletişim kartı
const ContactInfoCard = ({ icon, title, children, href }) => {
    const MotionComponent = href ? motion.a : motion.div;
    return (
        <MotionComponent
            href={href}
            className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        >
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
                    <div className="text-slate-600">{children}</div>
                </div>
            </div>
        </MotionComponent>
    );
};

// YENİ BİLEŞEN: Modern form alanı
const FormField = ({ id, label, type = 'text', rows }) => (
    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
        <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
        {type === 'textarea' ? (
            <textarea id={id} rows={rows} className="block w-full border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
        ) : (
            <input type={type} id={id} className="block w-full border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
        )}
    </motion.div>
);


function Iletisim() {
    const branches = [
        { name: 'Merkez Ofis', district: 'Ataşehir, İstanbul', address: 'Barbaros Mah. Atatürk Cad. No:123', phone: '+90 (216) 555 10 20', email: 'merkez@emekyapi.com' },
        { name: 'Avrupa Yakası', district: 'Beşiktaş, İstanbul', address: 'Sinanpaşa Mah. Şair Nedim Sk. No:45', phone: '+90 (212) 555 20 30', email: 'avrupa@emekyapi.com' },
        { name: 'Anadolu Yakası', district: 'Kadıköy, İstanbul', address: 'Caferağa Mah. Mühürdar Cad. No:67', phone: '+90 (216) 555 30 40', email: 'anadolu@emekyapi.com' },
        { name: 'Ankara Bölge', district: 'Çankaya, Ankara', address: 'Kavaklıdere Mah. Tunalı Hilmi Cad. No:89', phone: '+90 (312) 555 40 50', email: 'ankara@emekyapi.com' },
        { name: 'İzmir Bölge', district: 'Konak, İzmir', address: 'Alsancak Mah. Kıbrıs Şehitleri Cad. No:12', phone: '+90 (232) 555 50 60', email: 'izmir@emekyapi.com' },
    ];

    // GÜNCELLEME: Seçili şube için state
    const [selectedBranch, setSelectedBranch] = useState(branches[0]);

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <div className="bg-white text-slate-800 pt-[80px]">
            
            {/* BÖLÜM 1: GİRİŞ (YENİDEN TASARLANDI) */}
            <section className="bg-slate-50 py-20">
                <motion.div 
                    className="container mx-auto px-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="max-w-3xl text-center mx-auto">
                        <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">Bize Ulaşın</motion.h1>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mx-auto mt-5 text-lg text-slate-600">
                            Projenizi birlikte hayata geçirelim. Sorularınız, talepleriniz veya iş birliği teklifleriniz için size bir telefon kadar yakınız.
                        </motion.p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <ContactInfoCard icon={<Phone size={24} />} title="Genel Merkez Telefon" href={`tel:${branches[0].phone}`}>
                            <p>{branches[0].phone}</p>
                        </ContactInfoCard>
                        <ContactInfoCard icon={<Mail size={24} />} title="Genel E-posta" href={`mailto:${branches[0].email}`}>
                            <p>{branches[0].email}</p>
                        </ContactInfoCard>
                        <ContactInfoCard icon={<Building size={24} />} title="Merkez Ofis Adres">
                            <p>{branches[0].district}</p>
                        </ContactInfoCard>
                    </div>
                </motion.div>
            </section>

            {/* BÖLÜM 2: ŞUBELER VE HARİTA (YENİDEN TASARLANDI) */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold">Size En Yakın Şubemiz</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Türkiye genelindeki ofislerimizle projelerinize yerinde çözüm sunuyoruz. Harita üzerinden seçili şubemizin konumunu görebilirsiniz.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <motion.div 
                            className="lg:col-span-4 space-y-3"
                            variants={staggerContainer}
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                        >
                            {branches.map((branch) => (
                                <motion.button 
                                    key={branch.name}
                                    variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                                    onClick={() => setSelectedBranch(branch)}
                                    className={clsx(
                                        'w-full p-4 rounded-lg text-left transition-all duration-300 border-l-4',
                                        {
                                            'bg-white shadow-md border-blue-500 scale-105': selectedBranch.name === branch.name,
                                            'bg-slate-100/70 border-transparent hover:bg-white hover:shadow-sm': selectedBranch.name !== branch.name
                                        }
                                    )}
                                >
                                    <p className="font-bold text-slate-900">{branch.name}</p>
                                    <p className="text-sm text-slate-600">{branch.district}</p>
                                </motion.button>
                            ))}
                        </motion.div>

                        <motion.div 
                            className="lg:col-span-8 h-[500px] flex flex-col rounded-lg overflow-hidden shadow-lg"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="p-4 bg-white border-b flex items-center gap-3">
                                <MapPin size={20} className="text-blue-500" />
                                <div>
                                    <h3 className="font-bold">{selectedBranch.name}</h3>
                                    <p className="text-sm text-slate-500">{selectedBranch.address}</p>
                                </div>
                            </div>
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500 text-lg font-semibold">
                                {selectedBranch.name} Harita Görüntüsü
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 3: İLETİŞİM FORMU (YENİDEN TASARLANDI) */}
            <section className="bg-slate-50 py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-4xl font-bold">Bize Mesaj Gönderin</h2>
                            <p className="mt-4 text-lg text-slate-600">Aşağıdaki formu doldurarak bize kolayca ulaşabilirsiniz. Ekibimiz en kısa sürede size geri dönüş yapacaktır.</p>
                            <motion.form 
                                className="mt-8 space-y-5"
                                variants={staggerContainer}
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                            >
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <FormField id="name" label="Adınız Soyadınız" />
                                    <FormField id="email" label="E-posta Adresiniz" type="email" />
                                </div>
                                <FormField id="subject" label="Konu" />
                                <FormField id="message" label="Mesajınız" type="textarea" rows="4" />
                                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                                    <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-md bg-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1">
                                        Mesajı Gönder <ArrowRight size={20} />
                                    </button>
                                </motion.div>
                            </motion.form>
                        </div>
                        <motion.div 
                            className="bg-white p-8 rounded-lg border border-slate-200"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Alternatif İletişim</h3>
                            <div className="space-y-4 text-slate-700">
                                <div className="flex items-start gap-3">
                                    <Phone size={20} className="mt-1 text-blue-500" />
                                    <div>
                                        <p className="font-semibold">Telefonla Ulaşın</p>
                                        <p className="text-slate-500">Form doldurmak yerine doğrudan görüşmek isterseniz, merkez ofisimizle iletişime geçebilirsiniz.</p>
                                        <a href={`tel:${branches[0].phone}`} className="text-blue-600 font-medium mt-1 inline-block">{branches[0].phone}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail size={20} className="mt-1 text-blue-500" />
                                    <div>
                                        <p className="font-semibold">E-posta Gönderin</p>
                                        <p className="text-slate-500">Proje detaylarınızı veya taleplerinizi e-posta ile gönderebilirsiniz.</p>
                                        <a href={`mailto:${branches[0].email}`} className="text-blue-600 font-medium mt-1 inline-block">{branches[0].email}</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Iletisim;