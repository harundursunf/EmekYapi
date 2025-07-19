import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; // Animasyon için daha esnek bir kütüphane kuralım

// Önce terminalde bu komutu çalıştırın: npm install react-intersection-observer

// ANİMASYONLU BAŞLIK BİLEŞENİ
const AnimatedHeading = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <h1
      ref={ref}
      className={`text-5xl md:text-7xl font-bold tracking-tighter transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </h1>
  );
};

// ANİMASYONLU METİN BİLEŞENİ
const AnimatedText = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  
    return (
      <p
        ref={ref}
        className={`mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-1000 delay-300 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {children}
      </p>
    );
};


function Hakkimizda() {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="bg-white text-gray-800 pt-[80px]">
      {/* BÖLÜM 1: GİRİŞ - VİDEO VE ETKİLEYİCİ MESAJ */}
      <section className="relative h-screen flex items-center justify-center text-white text-center">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video.mp4" // Buraya farklı, atmosferik bir video koyabilirsiniz
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 p-6">
          <AnimatedHeading>Biz Sadece Bina Değil, <br/> Geleceğe Miras İnşa Ederiz.</AnimatedHeading>
        </div>
      </section>

      {/* BÖLÜM 2: FELSEFE - TEMİZ VE VURUCU */}
      <section className="py-32 text-center">
          <AnimatedHeading>Güven.</AnimatedHeading>
          <AnimatedText>
            Her tuğlada, her kirişte ve her imzada temel felsefemiz budur. Güven, sağlam yapıların olduğu kadar, sağlam ilişkilerin de harcıdır. Bizim için bir proje, temelden çatıya uzanan bir güven yolculuğudur.
          </AnimatedText>
      </section>

      {/* BÖLÜM 3: ZANAAT - GÖRSEL VE HİS */}
      <section ref={imageRef} className="relative h-screen bg-gray-900 flex items-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
            <div className="text-white">
                <h2 className={`text-5xl md:text-6xl font-bold tracking-tighter transition-all duration-1000 ease-out ${imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  Detaydaki Sanat.
                </h2>
                <p className={`mt-4 text-xl text-gray-300 transition-all duration-1000 delay-300 ease-out ${imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    Kullandığımız her malzeme, birer sanat eseri titizliğiyle seçilir. Çünkü gerçek kalite, dokunduğunuzda hissettiğiniz, gördüğünüzde anladığınız şeydir.
                </p>
            </div>
            <div className="relative h-96">
                <img src="/x7.jpg" alt="Malzeme Detayı" className={`absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl transition-all transform duration-1000 ease-out ${imageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} />
            </div>
        </div>
      </section>

      {/* BÖLÜM 4: İNSAN FAKTÖRÜ - EKİP */}
      <section ref={teamRef} className="bg-gray-50 py-32">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
            <div className={`transition-all transform duration-1000 ease-out ${teamInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              {/* Buraya ekibin ofiste veya şantiyede çekilmiş daha samimi bir fotoğrafı çok yakışır */}
              <img src="/team_group.jpg" alt="Emek Yapı Ekibi" className="rounded-lg shadow-xl" />
            </div>
            <div className={`text-center md:text-left transition-all duration-1000 delay-300 ease-out ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
                  Tutkuyla Çalışan Bir Aile.
                </h2>
                <p className="mt-4 text-xl text-gray-600 leading-relaxed">
                  Bizler mühendisler, mimarlar ve ustalardan oluşan bir aileyiz. Bizi bir araya getiren şey, sadece işimiz değil, daha iyisini yapma tutkumuzdur.
                </p>
            </div>
        </div>
      </section>

      {/* BÖLÜM 5: SÖZÜMÜZ - CTA */}
      <section className="bg-white py-32 text-center">
          <AnimatedHeading>Yarının Standartlarını <br/> Bugün Belirliyoruz.</AnimatedHeading>
          <AnimatedText>
            Bir sonraki projenizde, bu vizyonu ve kaliteyi deneyimlemek için bize katılın.
          </AnimatedText>
          <div className="mt-10">
              <Link to="/iletisim" className="rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 hover:shadow-xl">
                  Birlikte İnşa Edelim
              </Link>
          </div>
      </section>
    </div>
  );
}

export default Hakkimizda;