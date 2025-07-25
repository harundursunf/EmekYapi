import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Building2,
  Award,
  Users,
  Clock
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { to: "/mantolama", text: "Mantolama", description: "Enerji verimliliği çözümleri" },
    { to: "/yapsat", text: "Yap-Sat Projeleri", description: "Modern yaşam alanları" },
    { to: "/tadilat-dekorasyon", text: "Tadilat & Dekorasyon", description: "İç mekan tasarımı" },
    { to: "/mimari-danismanlik", text: "Mimari Danışmanlık", description: "Uzman görüş ve planlama" },
  ];

  const companyLinks = [
    { to: "/hakkimizda", text: "Hakkımızda" },
    { to: "/galeri", text: "Galerimiz" },
    { to: "/sorular", text: "Sıkça Sorulan Sorular" },
    { to: "/iletisim", text: "İletişim" },
  ];

  const stats = [
    { icon: <Building2 size={24} />, number: "500+", label: "Tamamlanan Proje" },
    { icon: <Users size={24} />, number: "1000+", label: "Mutlu Müşteri" },
    { icon: <Award size={24} />, number: "15+", label: "Yıllık Deneyim" },
    { icon: <Clock size={24} />, number: "24/7", label: "Destek Hizmeti" },
  ];

  const socialLinks = [
    { href: "#", icon: <Instagram size={20} />, label: "Instagram", color: "hover:text-pink-400" },
    { href: "#", icon: <Facebook size={20} />, label: "Facebook", color: "hover:text-blue-400" },
    { href: "#", icon: <Youtube size={20} />, label: "Youtube", color: "hover:text-red-400" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-500/10" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Stats Section */}
        <motion.div 
          className="border-b border-slate-700/50 py-16"
          variants={itemVariants}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20 mb-4 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/25">
                    <div className="text-amber-400 group-hover:text-amber-300 transition-colors">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Company Info */}
            <motion.div className="lg:col-span-4" variants={itemVariants}>
              <Link to="/" className="inline-block mb-6 group">
                <motion.img 
                  src="/emeklogo.jpg" 
                  alt="Emek Yapı Logo" 
                  className="h-14 transition-all duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Emek Yapı İnşaat
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Geleceği inşa etme vizyonuyla, kalite ve güvenden ödün vermeden projeler üretiyoruz. 
                  Modern teknoloji ve geleneksel ustalığı birleştiren yaklaşımımızla hayallerinizi gerçeğe dönüştürüyoruz.
                </p>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Bizi Takip Edin
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 transition-all duration-300 ${social.color} hover:border-current hover:shadow-lg hover:shadow-current/25 hover:-translate-y-1`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-2">Haberlerden Haberdar Olun</h4>
                <p className="text-sm text-slate-400 mb-4">Yeni projeler ve özel fırsatlardan ilk siz haberdar olun.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="flex-1 px-4 py-2 bg-slate-900/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/25 transition-all"
                  />
                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-amber-900 font-semibold rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Services */}
              <motion.div variants={itemVariants}>
                <h3 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">
                  Hizmetlerimiz
                </h3>
                <ul className="space-y-4">
                  {servicesLinks.map((link, index) => (
                    <motion.li 
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        to={link.to} 
                        className="group block p-3 rounded-lg transition-all duration-300 hover:bg-slate-800/30 hover:border-l-4 hover:border-amber-500"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300 group-hover:text-white font-medium transition-colors">
                            {link.text}
                          </span>
                          <ArrowRight 
                            size={14} 
                            className="text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" 
                          />
                        </div>
                        <p className="text-xs text-slate-500 mt-1 group-hover:text-slate-400 transition-colors">
                          {link.description}
                        </p>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div variants={itemVariants}>
                <h3 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">
                  Şirketimiz
                </h3>
                <ul className="space-y-4">
                  {companyLinks.map((link, index) => (
                    <motion.li 
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        to={link.to} 
                        className="group flex items-center justify-between p-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/30 transition-all duration-300"
                      >
                        <span>{link.text}</span>
                        <ArrowRight 
                          size={14} 
                          className="text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" 
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div variants={itemVariants}>
                <h3 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">
                  İletişim Bilgileri
                </h3>
                <ul className="space-y-6">
                  <li className="group">
                    <div className="flex items-start p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-center mr-4 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all">
                        <MapPin size={16} className="text-amber-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Adres</p>
                        <span className="text-slate-400 text-sm">İstanbul, Türkiye</span>
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <a href="tel:+905555555555" className="flex items-start p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-center mr-4 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all">
                        <Phone size={16} className="text-amber-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Telefon</p>
                        <span className="text-slate-400 text-sm group-hover:text-amber-400 transition-colors">
                          +90 (555) 555 55 55
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="mailto:info@emekyapi.com" className="flex items-start p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-center mr-4 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all">
                        <Mail size={16} className="text-amber-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">E-posta</p>
                        <span className="text-slate-400 text-sm group-hover:text-amber-400 transition-colors">
                          info@emekyapi.com
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-slate-700/50 py-8 bg-slate-900/50"
          variants={itemVariants}
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>&copy; {currentYear} Emek Yapı İnşaat.</span>
                <span className="hidden md:inline">•</span>
                <span>Tüm hakları saklıdır.</span>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <Link 
                  to="#" 
                  className="text-slate-500 hover:text-amber-400 transition-colors hover:underline"
                >
                  Gizlilik Politikası
                </Link>
                <Link 
                  to="#" 
                  className="text-slate-500 hover:text-amber-400 transition-colors hover:underline"
                >
                  Kullanım Koşulları
                </Link>
                <Link 
                  to="#" 
                  className="text-slate-500 hover:text-amber-400 transition-colors hover:underline"
                >
                  Çerez Politikası
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;