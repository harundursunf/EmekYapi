// Dosya: src/App.jsx

import React from 'react';
// BrowserRouter buradan kaldırıldı, çünkü main.jsx içinde zaten var.
import { Routes, Route } from 'react-router-dom';

// Bileşenleri ve sayfaları import edelim
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Anasayfa from './Components/Anasayfa';
import Mantolama from './pages/Mantolama';
import YapSat from './pages/YapSat';
import Hakkimizda from './pages/Hakkimizda';
import Galeri from './pages/Galeri';
import Sirketimiz from './pages/Sirketimiz';
import Sorular from './pages/Sorular';
import TadilatDekorasyon from './pages/TadilatDekorasyon';
import MimariDanismanlik from './pages/MimariDanismanlik';
import Iletisim from './pages/Iletisim';

function App() {
  return (
    // BrowserRouter etiketleri buradan kaldırıldı.
    // Uygulama yapısı doğrudan bir div veya Fragment ile başlayabilir.
    <>
      {/* 2. ADIM: ScrollToTop bileşeni, Rotaların dışında ama Router'ın 
        (main.jsx'teki) içinde kalacak şekilde buraya yerleştirilir. 
        Böylece her sayfa değiştiğinde çalışır.
      */}
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-gray-800 text-white">
        <Header />
        <main className="flex-grow">
          {/* 3. ADIM: Rotalarınız burada tanımlanır. */}
          <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="/mantolama" element={<Mantolama />} />
            <Route path="/yapsat" element={<YapSat />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/sirketimiz" element={<Sirketimiz />} />
            <Route path="/sorular" element={<Sorular />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/tadilat-dekorasyon" element={<TadilatDekorasyon />} />
            <Route path="/mimari-danismanlik" element={<MimariDanismanlik />} />
            <Route path="/iletisim" element={<Iletisim />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
