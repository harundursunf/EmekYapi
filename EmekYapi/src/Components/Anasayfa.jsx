import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, options]);
    return [ref, isInView];
};

// ANA SAYFA BİLEŞENİ
function Anasayfa() {
    // Her bölüm için ayrı animasyon kontrolü
    const [heroRef, heroInView] = useInView({ threshold: 0.3 });
    const [visionRef, visionInView] = useInView({ threshold: 0.5 });
    const [archRef, archInView] = useInView({ threshold: 0.3 });
    const [detailsRef, detailsInView] = useInView({ threshold: 0.3 });
    const [interiorRef, interiorInView] = useInView({ threshold: 0.3 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
    const [partnersRef, partnersInView] = useInView({ threshold: 0.2 });
    const [ctaRef, ctaInView] = useInView({ threshold: 0.3 });

    // Örnek bir proje adı verelim: "Emek Vadi Konakları"
    const projectName = "Emek Yapı Montalama";
    
    const partners = [
        { name: 'Ortak 1', logo: '/x1.jpg' }, { name: 'Ortak 2', logo: '/x1.jpg' }, { name: 'Ortak 3', logo: '/x1.jpg' },
        { name: 'Ortak 4', logo: '/x1.jpg' }, { name: 'Ortak 5', logo: '/x1.jpg' }, { name: 'Ortak 6', logo: '/x1.jpg' },
        { name: 'Ortak 7', logo: '/x1.jpg' }, { name: 'Ortak 8', logo: '/x1.jpg' }, { name: 'Ortak 9', logo: '/x1.jpg' },
        { name: 'Ortak 10', logo: '/x1.jpg' },
    ];

    // Slider için gerekli tanımlamalar
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { image: '/FotoAnasayfa2.avif', title: 'Modern Mimari Başlangıcı', description: 'Yenilikçi ve estetik tasarım anlayışımız.' },
        { image: '/FotoAnasayfa3.avif', title: 'Doğayla Bütünleşik Yapılar', description: 'Yeşil alanlarla çevrili, huzurlu yaşam alanları.' },
        { image: '/x1.jpg', title: 'Geniş ve Ferah Cepheler', description: 'Güneş ışığını içeri alan, aydınlık mekanlar.' },
        { image: '/FotoAnasayfa4.avif', title: 'Kaliteli Malzeme Seçimi', description: 'Uzun ömürlü ve dayanıklı yapılar için en iyisi.' },
        { image: '/FotoAnasayfa5.jpg', title: 'Detaylarda Gizli Mükemmellik', description: 'Her köşesi özenle düşünülmüş, kusursuz işçilik.' },
        { image: '/FotoAnasayfa6.avif', title: 'Fonksiyonel Çözümler', description: 'Hayatınızı kolaylaştıran, pratik ve modern detaylar.' },
        { image: '/x1.jpg', title: 'Sürdürülebilir Yaklaşım', description: 'Çevreye duyarlı, enerji verimli binalar.' },
        { image: '/x1.jpg', title: 'Prestijli Bir Yaşam', description: 'Konum ve tasarımıyla değer katan projeler.' },
        { image: '/x1.jpg', title: 'Aile Boyu Konfor', description: 'Her yaştan aile üyesinin ihtiyaçlarına cevap verir.' },
        { image: '/x1.jpg', title: 'Hayalinizdeki Ev', description: 'Sadece bir konut değil, bir yaşam tarzı sunuyoruz.' },
    ];

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="bg-white text-black antialiased">
            {/* BÖLÜM 1: GİRİŞ (HERO) - Video */}
            <section ref={heroRef} className="relative flex h-screen items-center justify-center text-center">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                        <source src="/videoAnasayfa.mp4" type="video/mp4" />
                        Tarayıcınız video etiketini desteklemiyor.
                    </video>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className={`relative z-10 p-4 text-white transition-all duration-1000 ease-out ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-5xl font-bold tracking-tight md:text-8xl">{projectName}</h1>
                    <p className="mt-4 text-2xl text-gray-200">Hayatınızın manzarası, evim dediğiniz yerde.</p>
                </div>
            </section>

            {/* BÖLÜM 2: VİZYON */}
            <section ref={visionRef} className="py-28 text-center">
                <div className={`container mx-auto px-6 transition-opacity duration-1000 ease-in ${visionInView ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-bold md:text-5xl">Sadece bir ev değil, <br /> bir yaşam tarzı tasarladık.</h2>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">{projectName}, modern mimariyi doğanın huzuruyla birleştirerek, size ve ailenize her gün keyif alacağınız, prestijli ve konforlu bir yaşam sunuyor.</p>
                </div>
            </section>

            {/* BÖLÜM 3: MİMARİ - Etkileşimli Slider */}
            <section ref={archRef} className="relative h-screen bg-black">
                {slides.map((slide, index) => (
                    <div key={index} className={`absolute top-0 left-0 h-full w-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                ))}
                <div className="absolute top-1/2 left-5 z-20 -translate-y-1/2"><button onClick={goToPrevious} className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/40"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button></div>
                <div className="absolute top-1/2 right-5 z-20 -translate-y-1/2"><button onClick={goToNext} className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/40"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button></div>
                <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
                    <div key={currentIndex} className="animate-custom-fade-in-up p-4"><h2 className="text-5xl font-bold">{slides[currentIndex].title}</h2><p className="mt-4 text-xl">{slides[currentIndex].description}</p></div>
                </div>
            </section>

            {/* BÖLÜM 4: HAKKIMIZDA */}
            <section ref={aboutRef} className="bg-white py-28">
                <div className={`container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 transition-all duration-1000 ease-out ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center md:text-left"><h2 className="text-4xl font-bold text-gray-800 md:text-5xl">Emek Yapı Hakkında</h2><p className="mt-6 text-lg text-gray-600">2003 yılında başlayan yolculuğumuzda bugün Emek Yapı markamızla, tecrübemizi ve yenilikçi vizyonumuzu birleştirerek geleceğin yapılarını inşa ediyoruz.</p><p className="mt-4 text-lg text-gray-600">Sadece yapılar değil, aynı zamanda güvene dayalı ilişkiler kurarak sektörde fark yaratıyoruz. Müşteri memnuniyetini her zaman ön planda tutan anlayışımızla, hayallerinizdeki yaşam alanlarını gerçeğe dönüştürmek için çalışıyoruz.</p><div className="mt-8"><Link to="/hakkimizda" className="font-semibold text-blue-600 transition group">Sayfaya Git<span className="ml-2 transition-transform duration-300 group-hover:ml-3">&rarr;</span></Link></div></div>
                    <div className={`transform transition-all duration-1000 ease-out delay-200 ${aboutInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}><img src="/x1.jpg" alt="Hakkımızda Görseli" className="shadow-xl" /></div>
                </div>
            </section>

            {/* BÖLÜM 5: DETAYLAR */}
            <section ref={detailsRef} className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className={`text-center transition-all duration-1000 ease-out ${detailsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}><h2 className="text-5xl font-bold">Her Detay Sizin İçin Düşünüldü</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Birinci sınıf malzemeler, akıllı ev sistemleri ve sosyal donatılarla konfor standartlarınızı yeniden tanımlayın.</p></div>
                    <div className={`mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 transition-all duration-1000 ease-out delay-300 ${detailsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-white p-8 text-center shadow-sm"><img src="/x1.jpg" alt="Geniş İç Mekan" className="mx-auto mb-6 h-60 w-full object-cover" /><h3 className="text-2xl font-semibold">Geniş ve Ferah Mekanlar</h3><p className="mt-2 text-gray-600">Güneş ışığını içeri davet eden, ferah ve kullanışlı odalar.</p></div>
                        <div className="bg-white p-8 text-center shadow-sm"><img src="/x1.jpg" alt="Sosyal Alanlar" className="mx-auto mb-6 h-60 w-full object-cover" /><h3 className="text-2xl font-semibold">Zengin Sosyal Donatılar</h3><p className="mt-2 text-gray-600">Yüzme havuzu, spor salonu ve çocuk oyun alanları.</p></div>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 6: İÇ MEKAN GALERİSİ */}
            <section ref={interiorRef} className="py-28 text-center">
                <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${interiorInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-5xl font-bold">Evinizin İçine Göz Atın</h2>
                    <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
                        <img src="/x1.jpg" alt="Salon" className="h-96 w-full object-cover shadow-lg" />
                        <img src="/x1.jpg" alt="Mutfak" className="h-96 w-full object-cover shadow-lg md:mt-12" />
                        <img src="/x1.jpg" alt="Yatak Odası" className="h-96 w-full object-cover shadow-lg" />
                    </div>
                </div>
            </section>
            
            {/* BÖLÜM 7: ÇÖZÜM ORTAKLARI (YENİ) */}
            <section ref={partnersRef} className="bg-gray-50 py-28">
                <div className="container mx-auto px-6 text-center">
                    <div className={`transition-all duration-1000 ease-out ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl font-bold">Çözüm Ortaklarımız</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Başarımızın bir parçası olan, sektörün önde gelen markalarıyla çalışıyoruz.</p>
                    </div>
                </div>
                <div className={`mt-16 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] transition-opacity duration-1000 ease-out delay-300 ${partnersInView ? 'opacity-100' : 'opacity-0'}`}>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
                        {partners.map((partner, index) => ( <li key={index}><img src={partner.logo} alt={partner.name} className="h-30   " /></li> ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll" aria-hidden="true">
                        {partners.map((partner, index) => ( <li key={index + partners.length}><img src={partner.logo} alt={partner.name} className="h-30  " /></li> ))}
                    </ul>
                </div>
            </section>

            {/* BÖLÜM 8: SON ÇAĞRI (CTA) */}
            <section ref={ctaRef} className="bg-gray-100 py-28">
                <div className={`container mx-auto px-6 text-center transition-opacity duration-1000 ease-in ${ctaInView ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-5xl font-bold">Hayalinizdeki Yaşama Adım Atın.</h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">{projectName} hakkında daha fazla bilgi almak ve örnek daireyi gezmek için bizimle iletişime geçin.</p>
                    <div className="mt-8"><Link to="/iletisim" className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">İletişime Geç</Link></div>
                </div>
            </section>
        </div>
    );
}

export default Anasayfa;