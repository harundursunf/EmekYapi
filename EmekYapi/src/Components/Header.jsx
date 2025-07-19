import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Building2, Phone, Instagram, Facebook, Youtube, ChevronDown, Building, HelpCircle, LayoutGrid, Wrench, PenSquare } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

// --- VERİ YAPISI ---
const menuItems = [
    { name: "Hizmetlerimiz", icon: <LayoutGrid size={16} />, subItems: [
        { to: "/mantolama", icon: <Shield size={20} className="text-amber-500"/>, title: "Mantolama", description: "Enerji verimliliği ve estetik cepheler." },
        { to: "/yapsat", icon: <Building2 size={20} className="text-amber-500"/>, title: "Yap-Sat Projeleri", description: "Hayallerinizdeki konutları inşa ediyoruz." },
        { to: "/tadilat-dekorasyon", icon: <Wrench size={20} className="text-amber-500"/>, title: "Tadilat & Dekorasyon", description: "Yaşam alanlarınızı modern dokunuşlarla yeniliyoruz." },
        { to: "/mimari-danismanlik", icon: <PenSquare size={20} className="text-amber-500"/>, title: "Mimari Danışmanlık", description: "Projeleriniz için uzman bakış açısı." },
    ],
    featured: { to: "/mantolama", image: "/x1.jpg", title: "Dış Cephe Mantolama", description: "Enerji verimliliğinde lider çözümlerle tanışın.", }},
    { name: "Şirketimiz", icon: <Building size={16} />, subItems: [
        { to: "/sirketimiz", icon: <Building size={20} className="text-amber-500"/>, title: "Hakkımızda", description: "Hikayemiz, vizyonumuz ve değerlerimiz." },
        { to: "/sorular", icon: <HelpCircle size={20} className="text-amber-500"/>, title: "Sıkça Sorulan Sorular", description: "Aklınızdaki soruların cevapları." },
    ]}
];

// --- ALT BİLEŞEN 1: MEGA MENÜ ---
const MegaMenu = ({ item, scrolled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const textColor = scrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white hover:text-amber-400';
    return (
        <div className="relative h-full" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button className={`flex h-full items-center gap-1.5 px-4 text-sm font-medium transition-colors duration-300 ${textColor}`}>
                <span style={!scrolled ? { textShadow: '1px 1px 2px rgba(0,0,0,0.5)' } : {}}>{item.name}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-full left-1 -translate-x-1/2 mt-2 w-max rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="flex">
                            <div className="grid grid-cols-2 gap-2 p-3">
                                {item.subItems.map(sub => (
                                    <Link key={sub.to} to={sub.to} className="group flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-slate-50">
                                        <div className="flex-shrink-0 mt-1">{sub.icon}</div>
                                        <div><p className="font-semibold text-slate-800">{sub.title}</p><p className="text-xs text-slate-500">{sub.description}</p></div>
                                    </Link>
                                ))}
                            </div>
                            {item.featured && (
                                <div className="p-3 border-l">
                                    <div className="bg-slate-100 rounded-lg p-4">
                                        <img src={item.featured.image} className="w-full h-24 object-cover rounded-md mb-2" alt={item.featured.title} />
                                        <p className="font-semibold text-slate-800">{item.featured.title}</p>
                                        <p className="text-xs text-slate-500">{item.featured.description}</p>
                                        <Link to={item.featured.to} className="text-xs font-bold text-amber-600 hover:underline mt-2 inline-block">Daha Fazla Bilgi &rarr;</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- ALT BİLEŞEN 2: ANİMASYONLU NAVİGASYON LİNKİ ---
const AnimatedNavLink = ({ to, scrolled, children }) => {
    const textColor = scrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white hover:text-amber-400';
    return (
        <NavLink to={to} className={`relative h-full flex items-center px-4 text-sm font-medium transition-colors duration-300 ${textColor}`}>
            {({ isActive }) => (<>
                <span style={!scrolled ? { textShadow: '1px 1px 2px rgba(0,0,0,0.5)' } : {}}>{children}</span>
                {isActive && <motion.div className="absolute bottom-0 left-2 right-2 h-0.5 bg-amber-500" layoutId="underline" />}
            </>)}
        </NavLink>
    );
};

// --- ALT BİLEŞEN 3: MOBİL İÇİN AKORDİYON MENÜ ---
const MobileAccordion = ({ item, setIsMenuOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between w-full items-center py-4 text-lg font-semibold text-slate-800">
                <span>{item.name}</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                        <div className="flex flex-col pb-4">
                            {item.subItems.map(sub => (
                                <Link key={sub.to} to={sub.to} onClick={() => setIsMenuOpen(false)} className="flex items-start gap-4 py-3 pl-4 rounded-md hover:bg-slate-100">
                                    <div className="flex-shrink-0 mt-1">{sub.icon}</div>
                                    <div><p className="font-semibold text-slate-700">{sub.title}</p><p className="text-xs text-slate-500">{sub.description}</p></div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


// --- ANA HEADER BİLEŞENİ ---
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const { scrollY } = useScroll();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
    } else {
      setScrolled(scrollY.get() > 10);
    }
  }, [isHomePage, scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (isHomePage) {
      if (latest > 10) {
          setScrolled(true);
      } else {
          setScrolled(false);
      }
    }
  });

  const headerClasses = `
    fixed top-0 z-50 w-full transition-all duration-300 ease-in-out
    ${scrolled 
        ? 'bg-white/80 backdrop-blur-xl '
        : 'bg-transparent backdrop-blur-none shadow-none'
    }
  `;
  
  const topBarClasses = `border-b transition-colors duration-300 ${scrolled ? 'border-slate-200/80' : 'border-white/20'}`;
  const navLinkColor = scrolled ? 'text-slate-800' : 'text-white';
  const logoFilter = scrolled ? '' : 'filter brightness-0 invert';

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden && !isMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={headerClasses}
      >
        
        
        <div className={`border-b transition-colors duration-300 ${scrolled ? 'border-slate-200/80' : 'border-transparent'}`}>
          <nav className="container mx-auto flex h-20 items-center justify-between px-4">
            <Link to="/" className="flex items-center group">
              <img src="/logo.webp" alt="Emek Yapı Logo" className={`h-12 transition-all duration-300 group-hover:scale-105 `} />
            </Link>
            <div className="hidden h-full items-center md:flex">
              <AnimatedNavLink to="/" scrolled={scrolled}>Ana Sayfa</AnimatedNavLink>
              <MegaMenu item={menuItems[0]} scrolled={scrolled}/>
              <MegaMenu item={menuItems[1]} scrolled={scrolled}/>
              <AnimatedNavLink to="/galeri" scrolled={scrolled}>Galerimiz</AnimatedNavLink>
              <Link to="/iletisim" className="ml-6 flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-amber-900 transition-all duration-300 hover:bg-amber-500 hover:shadow-lg hover:-translate-y-0.5"><Phone size={16} /><span>İletişim</span></Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className={`rounded-md p-1 ${navLinkColor}`}><Menu size={28} /></button>
            </div>
          </nav>
        </div>
      </motion.header>
      
      <AnimatePresence>
          {isMenuOpen && (
              <motion.div 
                initial={{ x: "100%" }} 
                animate={{ x: 0 }} 
                exit={{ x: "100%" }} 
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} 
                className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl z-[60] md:hidden"
              >
                  <div className="flex justify-between items-center p-4 border-b">
                      <span className="font-bold text-slate-800">Menü</span>
                      <button onClick={() => setIsMenuOpen(false)} className="text-slate-600"><X size={24} /></button>
                  </div>
                  <div className="p-4">
                      <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-semibold border-b text-slate-800">Ana Sayfa</Link>
                      <Link to="/galeri" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-semibold border-b text-slate-800">Galerimiz</Link>
                      <MobileAccordion item={menuItems[0]} setIsMenuOpen={setIsMenuOpen} />
                      <MobileAccordion item={menuItems[1]} setIsMenuOpen={setIsMenuOpen} />
                  </div>
              </motion.div>
          )}
      </AnimatePresence>
    </>
  );
}

export default Header;