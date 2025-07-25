// Dosya: src/App.jsx (Güncellenmiş Hali)

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Temel Bileşenler
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';
import Footer from './Components/Footer';

// Ana Sayfalar
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

// ✅ YENİ: Tüm hizmet sayfalarını import edin
import DisCepheMantolama from './pages/DisCepheMantolama';
import TadilatBoya from './pages/TadilatBoya';
import DekoratifSiva from './pages/DekoratifSiva';
import FileliSiva from './pages/FileliSiva';
import CevreDuzenleme from './pages/CevreDuzenleme';
import PeyzajIsleri from './pages/PeyzajIsleri';
import ProjeDetay from './pages/ProjeDetay';


function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-800 text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Mevcut Rotalarınız */}
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

            {/* ✅ DEĞİŞİKLİK: Dinamik rota yerine her hizmet için ayrı bir statik rota */}
            <Route path="/dis-cephe-mantolama" element={<DisCepheMantolama />} />
            <Route path="/tadilat-ve-boya" element={<TadilatBoya />} />
            <Route path="/dekoratif-siva" element={<DekoratifSiva />} />
            <Route path="/fileli-siva" element={<FileliSiva />} />
            <Route path="/cevre-duzenleme" element={<CevreDuzenleme />} />
            <Route path="/peyzaj-isleri" element={<PeyzajIsleri />} />
              <Route path="/projeler/:projeSlug" element={<ProjeDetay />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;