import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { to: "/mantolama", text: "Mantolama" },
    { to: "/yapsat", text: "Yap-Sat Projeleri" },
    { to: "/tadilat-dekorasyon", text: "Tadilat & Dekorasyon" },
    { to: "/mimari-danismanlik", text: "Mimari Danışmanlık" },
  ];

  const companyLinks = [
    { to: "/sirketimiz", text: "Hakkımızda" },
    { to: "/galeri", text: "Galerimiz" },
    { to: "/sorular", text: "Sıkça Sorulan Sorular" },
  ];

  return (
    <motion.footer
      className="bg-slate-900 text-slate-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Sol Taraf: Logo ve Slogan */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img src="/emeklogo.jpg" alt="Emek Yapı Logo" className="h-12" />
            </Link>
            <p className="text-slate-400 max-w-xs">
              Geleceği inşa etme vizyonuyla, kalite ve güvenden ödün vermeden projeler üretiyoruz.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Sağ Taraf: Link Sütunları */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Sütun 1: Hizmetler */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white uppercase tracking-wider">Hizmetler</h3>
              <ul className="space-y-3">
                {servicesLinks.map(link => (
                  <li key={link.to}><Link to={link.to} className="text-slate-400 hover:text-amber-400 hover:underline transition-colors">{link.text}</Link></li>
                ))}
              </ul>
            </div>

            {/* Sütun 2: Şirket */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white uppercase tracking-wider">Şirket</h3>
              <ul className="space-y-3">
                {companyLinks.map(link => (
                  <li key={link.to}><Link to={link.to} className="text-slate-400 hover:text-amber-400 hover:underline transition-colors">{link.text}</Link></li>
                ))}
              </ul>
            </div>

            {/* Sütun 3: İletişim */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white uppercase tracking-wider">Bize Ulaşın</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start">
                  <MapPin size={16} className="mr-3 mt-1 flex-shrink-0" />
                  <span>İstanbul, Türkiye</span>
                </li>
                <li className="flex items-start">
                  <Phone size={16} className="mr-3 mt-1 flex-shrink-0" />
                  <a href="tel:+905555555555" className="hover:text-amber-400 hover:underline transition-colors">+90 (555) 555 55 55</a>
                </li>
                <li className="flex items-start">
                  <Mail size={16} className="mr-3 mt-1 flex-shrink-0" />
                  <a href="mailto:info@emekyapi.com" className="hover:text-amber-400 hover:underline transition-colors">info@emekyapi.com</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Alt Kısım - Telif Hakkı */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-xs text-slate-500">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {currentYear} Emek Yapı İnşaat. Tüm hakları saklıdır.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="#" className="hover:text-slate-300 transition-colors">Gizlilik Politikası</Link>
              <Link to="#" className="hover:text-slate-300 transition-colors">Kullanım Koşulları</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;