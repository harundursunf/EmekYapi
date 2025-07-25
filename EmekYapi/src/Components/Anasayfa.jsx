    import React, { useEffect, useRef, useState, useCallback } from 'react';
    import { Link } from 'react-router-dom';
    import { motion, useAnimation } from 'framer-motion';
    // Diğer ikonlarınızın yanına bunları ekleyin
    import {
        ArrowRight,
        ArrowLeft,
        ShieldCheck,
        Wrench,
        Zap,
        CheckCircle,
        Phone,
        Building,
        Download,
        HelpCircle
    } from 'lucide-react';

    // Animasyonları tetiklemek için kullandığımız özel Hook
    const useInView = (options) => {
        const [isInView, setIsInView] = useState(false);
        const ref = useRef(null);
        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            }, options);
            if (ref.current) { observer.observe(ref.current); }
            return () => { if (ref.current) { observer.unobserve(ref.current); } };
        }, [ref, options]);
        return [ref, isInView];
    };

    // ANA SAYFA BİLEŞENİ
    function Anasayfa() {
        // Buton stilleri
        const primaryButtonClasses = "inline-flex items-center justify-center gap-3 px-8 py-3 font-semibold text-gray-900 bg-yellow-400 rounded-lg shadow-sm hover:bg-yellow-500 hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2";
        const cardButtonClasses = "inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-900 bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors";

        const THRESHOLDS = { DEFAULT: 0.3, VISION: 0.4, PARTNERS: 0.2, ABOUT: 0.3 };

        const [heroRef, heroInView] = useInView({ threshold: THRESHOLDS.DEFAULT });
        const [visionRef, visionInView] = useInView({ threshold: THRESHOLDS.VISION });
        const [archRef, archInView] = useInView({ threshold: THRESHOLDS.DEFAULT });
        const [detailsRef, detailsInView] = useInView({ threshold: THRESHOLDS.DEFAULT });
        const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
        const [aboutRef, aboutInView] = useInView({ threshold: THRESHOLDS.ABOUT });
        const [partnersRef, partnersInView] = useInView({ threshold: THRESHOLDS.PARTNERS });
        const [ctaRef, ctaInView] = useInView({ threshold: THRESHOLDS.DEFAULT });

        const projectName = "Emek Yapı Montalama";
        const featuredProjects = [
            { id: 1, image: '/resim1.webp', title: "Empire State Binası'nın Gölgesinde: Midtown Terrace", tags: ['Ticari', 'Dış Cephe', 'Amerika'], link: '/projeler/midtown-terrace' },
            { id: 2, image: '/resim2.webp', title: 'Londra DoubleTree Hilton: Her Hava Koşuluna Uygun Teras Alanı', tags: ['Ticari', 'Isı Yalıtım', 'Birleşik Krallık'], link: '/projeler/london-hilton' },
            { id: 3, image: '/resim4.webp', title: 'İstanbul Konut Projesi: Modern ve Estetik Cepheler', tags: ['Konut', 'Mantolama', 'Türkiye'], link: '/projeler/istanbul-konut' }
        ];

        const services = [
            { image: '/mantolama-min.png', title: 'Dış Cephe Mantolama', subtitle: 'Enerji Verimliliği ve Estetik', link: '/dis-cephe-mantolama' },
            { image: '/tadilatboya-min.png', title: 'Tadilat & Boya', subtitle: 'Yenileme ve Değer Katma', link: '/tadilat-ve-boya' },
            { image: '/Dekoratifsiva-min.png', title: 'Dekoratif Sıva', subtitle: 'Sanatsal ve Eşsiz Yüzeyler', link: '/dekoratif-siva' },
            { image: '/filelisiva-min.png', title: 'Fileli Sıva', subtitle: 'Dayanıklılık ve Sağlam Zemin', link: '/fileli-siva' }
        ];

        const partners = [
            { name: 'Filli Boya', logo: '/filli.png' }, { name: 'Fawori', logo: '/filli.png' },
            { name: 'Polisan', logo: '/filli.png' }, { name: 'Weber', logo: '/filli.png' },
            { name: 'Kalekim', logo: '/filli.png' }, { name: 'Dyo', logo: '/filli.png' },
        ];
        const [currentIndex, setCurrentIndex] = useState(0);
        const slides = [
            { image: '/FotoAnasayfa2.avif', title: 'Modern Mimari Başlangıcı', description: 'Yenilikçi ve estetik tasarım anlayışımız.' },
            { image: '/FotoAnasayfa3.avif', title: 'Doğayla Bütünleşik Yapılar', description: 'Yeşil alanlarla çevrili, huzurlu yaşam alanları.' },
            { image: '/FotoAnasayfa4.avif', title: 'Kaliteli Malzeme Seçimi', description: 'Uzun ömürlü ve dayanıklı yapılar için en iyisi.' },
        ];

        const progressControls = useAnimation();
        const goToNext = useCallback(() => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)), [slides.length]);
        const goToPrevious = useCallback(() => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)), [slides.length]);

        useEffect(() => {
            progressControls.set({ scaleX: 0 });
            progressControls.start({ scaleX: 1, transition: { duration: 7, ease: "linear" } });
            const slideInterval = setInterval(goToNext, 7000);
            return () => clearInterval(slideInterval);
        }, [currentIndex, goToNext, progressControls]);

        return (
            <div className="bg-white text-gray-800 antialiased">
                {/* BÖLÜM 1: GİRİŞ (HERO) */}
                <section ref={heroRef} className="relative flex h-screen items-center justify-center text-center">
                    <div className="absolute inset-0 z-0 overflow-hidden"><video autoPlay loop muted playsInline className="h-full w-full object-cover"><source src="/videoAnasayfa.mp4" type="video/mp4" />Tarayıcınız video etiketini desteklemiyor.</video><div className="absolute inset-0 bg-black/40"></div></div>
                    <div className={`relative z-10 p-4 text-white transition-all duration-1000 ease-out ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}><h1 className="text-5xl font-bold tracking-tight md:text-8xl">{projectName}</h1><p className="mt-4 text-2xl text-gray-200">Hayatınızın manzarası, evim dediğiniz yerde.</p></div>
                </section>

                {/* Diğer bölümler aynı kalabilir... */}
                
                {/* BÖLÜM 2: VİZYON */}
                <section ref={visionRef} className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className={`transition-all duration-1000 ease-out ${visionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}><h2 className="text-4xl font-bold text-gray-900 md:text-5xl leading-tight">Sadece bir dış cephe değil, kalıcı değerler inşa ediyoruz.</h2><p className="mt-6 text-lg text-gray-600">Emek Yapı, modern teknolojiyi ve usta işçiliği birleştirerek yapılarınıza estetik, dayanıklılık ve enerji verimliliği katıyor.</p></div>
                        <div className={`transition-all duration-1000 ease-out delay-200 ${visionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}><ul className="space-y-8"><li className="flex items-start gap-4"><div className="flex-shrink-0 p-3 bg-yellow-400/20 rounded-full"><ShieldCheck className="h-6 w-6 text-yellow-500" /></div><div><h3 className="text-xl font-semibold">Kaliteli Malzeme</h3><p className="mt-1 text-gray-600">Projelerimizde sadece endüstri standardı, uzun ömürlü ve sertifikalı malzemeler kullanıyoruz.</p></div></li><li className="flex items-start gap-4"><div className="flex-shrink-0 p-3 bg-yellow-400/20 rounded-full"><Wrench className="h-6 w-6 text-yellow-500" /></div><div><h3 className="text-xl font-semibold">Uzman İşçilik</h3><p className="mt-1 text-gray-600">Alanında 20 yılı aşkın tecrübeye sahip ustalarımızla kusursuz uygulamalar gerçekleştiriyoruz.</p></div></li><li className="flex items-start gap-4"><div className="flex-shrink-0 p-3 bg-yellow-400/20 rounded-full"><Zap className="h-6 w-6 text-yellow-500" /></div><div><h3 className="text-xl font-semibold">Enerji Verimliliği</h3><p className="mt-1 text-gray-600">Uyguladığımız mantolama ve yalıtım çözümleriyle %60'a varan enerji tasarrufu sağlıyoruz.</p></div></li></ul></div>
                    </div>
                </section>

                {/* BÖLÜM 3: MİMARİ SLIDER */}
                <section ref={archRef} className=" py-24 relative h-[75vh] bg-black text-white overflow-hidden">
                    {slides.map((slide, index) => (<motion.div key={index} className="absolute top-0 left-0 h-full w-full" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: index === currentIndex ? 1 : 0, scale: index === currentIndex ? 1 : 1.05 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} ><img src={slide.image} alt={slide.title} className="h-full w-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div></motion.div>))}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-black/30 backdrop-blur-md"><div className="container mx-auto flex justify-between items-end"><motion.div key={currentIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }} className="w-full md:w-1/2"><h2 className="text-3xl md:text-4xl font-bold">{slides[currentIndex].title}</h2><p className="mt-2 text-base md:text-lg text-gray-300">{slides[currentIndex].description}</p></motion.div><div className="hidden md:flex items-center gap-6"><div className="font-mono text-xl"><span className="font-bold">{String(currentIndex + 1).padStart(2, '0')}</span><span className="text-gray-400 mx-2">/</span><span className="text-gray-400">{String(slides.length).padStart(2, '0')}</span></div><div className="flex items-center gap-2"><button onClick={goToPrevious} aria-label="Önceki Slayt" className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors"><ArrowLeft size={20} /></button><button onClick={goToNext} aria-label="Sonraki Slayt" className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors"><ArrowRight size={20} /></button></div></div></div></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"><motion.div className="h-full bg-white" style={{ transformOrigin: 'left' }} initial={{ scaleX: 0 }} animate={progressControls} /></div>
                </section>
                
                {/* BÖLÜM 4: HAKKIMIZDA */}
                <section ref={aboutRef} className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={aboutInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }} >
                            <p className="font-semibold text-yellow-500 tracking-wider">BİZ KİMİZ?</p>
                            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">Tecrübe ve Yenilikçilikle Geleceği İnşa Ediyoruz</h2>
                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">2003 yılında başlayan yolculuğumuzda, her projeye ilk günkü heyecanla yaklaşıyor, tecrübemizi en güncel teknolojilerle birleştirerek beklentilerin ötesinde sonuçlar sunuyoruz.</p>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-center"><CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" /><span className="ml-3 text-lg text-gray-700">20+ Yıl Sektör Tecrübesi</span></li>
                                <li className="flex items-center"><CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" /><span className="ml-3 text-lg text-gray-700">%100 Müşteri Memnuniyeti</span></li>
                                <li className="flex items-center"><CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" /><span className="ml-3 text-lg text-gray-700">Ücretsiz Keşif ve Danışmanlık</span></li>
                            </ul>
                            <div className="mt-10">
                                <Link to="/hakkimizda" className={primaryButtonClasses}>Hikayemizi Keşfedin<ArrowRight size={20} /></Link>
                            </div>
                        </motion.div>
                        <motion.div className="w-full h-full" initial={{ opacity: 0, scale: 0.9 }} animate={aboutInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} >
                            <img src="/emek-min.png" alt="Tecrübeli Ekip" className="w-full h-full object-cover rounded-xl shadow-2xl aspect-square" loading="lazy" />
                        </motion.div>
                    </div>
                </section>

                {/* BÖLÜM 5: HİZMETLER VE ÇÖZÜMLER */}
                <section ref={detailsRef} className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className={`text-center transition-all duration-1000 ease-out ${detailsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h2 className="text-5xl font-bold text-gray-900 tracking-tighter">Hizmetlerimiz ve Çözümlerimiz</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Yapılarınıza değer katan, estetik ve fonksiyonel dış cephe çözümleri sunuyoruz.</p>
                        </div>

                        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 ease-out ${detailsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="group relative h-96 w-full overflow-hidden rounded-xl shadow-lg">
                                        <img src={service.image} alt={service.title} className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                                                <p className="mt-1 text-sm text-gray-200">{service.subtitle}</p>
                                            </div>
                                            <div className="mt-4">
                                                {/* GÜNCELLEME: Mobil uyumluluk için className değiştirildi. */}
                                                <Link
                                                    to={service.link}
                                                    // 👈 DEĞİŞTİRİLEN SATIR
                                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-900 bg-yellow-400 rounded-md transform transition-all duration-300 opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 group-hover:translate-y-0 group-hover:opacity-100"
                                                >
                                                    Keşfet <ArrowRight size={16} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Diğer bölümler aynı kalabilir... */}
                
                {/* BÖLÜM 6: ÖNE ÇIKAN PROJELER */}
                <section ref={projectsRef} className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className={`flex flex-col md:flex-row justify-between md:items-center gap-4 mb-12 transition-all duration-1000 ease-out ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h2 className="text-4xl font-bold text-gray-900 text-center md:text-left">Öne çıkan projeler</h2>
                            <Link to="/projeler" className={primaryButtonClasses}>Tümünü Gör<ArrowRight size={20} /></Link>
                        </div>
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-200 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            {featuredProjects.map((project) => (
                                <div key={project.id} className="group flex flex-col">
                                    <div className="overflow-hidden rounded-lg shadow-md mb-4"><Link to={project.link}><img src={project.image} alt={project.title} className="w-full h-64 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105" loading="lazy" /></Link></div>
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-lg font-semibold text-gray-800 flex-1 mb-2"><Link to={project.link} className="hover:text-yellow-500 transition-colors">{project.title}</Link></h3>
                                        <div className="flex flex-wrap items-center text-xs text-gray-500">
                                            {project.tags.map((tag, index) => (<React.Fragment key={tag}><span>{tag}</span>{index < project.tags.length - 1 && <span className="mx-2">&ndash;</span>}</React.Fragment>))}
                                        </div>
                                        <div className="mt-4">
                                            <Link to={project.link} className={cardButtonClasses}>Keşfet<ArrowRight size={16} /></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BÖLÜM 7: ÇÖZÜM ORTAKLARI */}
                <section ref={partnersRef} className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 text-center">
                        <div className={`transition-all duration-1000 ease-out ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h2 className="text-4xl font-bold text-gray-900">Güvendiğimiz Markalar</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Başarımızın bir parçası olan, sektörün önde gelen markalarıyla çalışıyoruz.</p>
                        </div>
                    </div>

                    <div className={`mt-16 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] transition-opacity duration-1000 ease-out delay-300 ${partnersInView ? 'opacity-100' : 'opacity-0'}`}>
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-scroll">
                            {partners.map((partner, index) => (
                                <li key={`partner-${index}`}>
                                    <img src={partner.logo} alt={partner.name} className="h-20" loading="lazy" />
                                </li>
                            ))}
                        </ul>
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-scroll" aria-hidden="true">
                            {partners.map((partner, index) => (
                                <li key={`partner-clone-${index}`}>
                                    <img src={partner.logo} alt={partner.name} className="h-20" loading="lazy" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* BÖLÜM 8: SON ÇAĞRI (CTA) */}
                <section ref={ctaRef} className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 tracking-tighter"
                        >
                            İletişime Geçin
                        </motion.h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col"
                            >
                                <p className="font-semibold text-yellow-500">Bize ulaşın</p>
                                <h3 className="mt-4 text-3xl font-bold text-gray-900 leading-tight">
                                    Bir sorunuz veya projeniz mi var? Size yardım etmek için buradayız.
                                </h3>
                                <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-4">
                                    <Link to="/iletisim" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-900 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors">
                                        <Phone size={18} />
                                        <span>Bize Ulaşın</span>
                                    </Link>
                                    <Link to="/temsilcilikler" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors border border-gray-200">
                                        <Building size={18} />
                                        <span>Temsilciliklerimiz</span>
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                className="bg-gray-900 text-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col"
                            >
                                <p className="font-semibold text-gray-400">Kaynaklar</p>
                                <h3 className="mt-4 text-3xl font-bold leading-tight">
                                    Daha fazla bilgiye mi ihtiyacınız var? Kataloglarımızı indirmek mi istiyorsunuz?
                                </h3>
                                <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-4">
                                    <Link to="/kutuphane" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/20">
                                        <Download size={18} />
                                        <span>Kütüphane</span>
                                    </Link>
                                    <Link to="/sss" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/20">
                                        <HelpCircle size={18} />
                                        <span>SSS</span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    export default Anasayfa;