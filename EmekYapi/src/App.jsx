import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Bileşenleri ve sayfaları import edelim
import Header from './Components/Header';
import Footer from './Components/Footer';
import Anasayfa from './Components/Anasayfa';
import Mantolama from './pages/Mantolama';
import YapSat from './pages/YapSat';
import Hakkimizda from './pages/Hakkimizda'; // <-- YENİ İMPORT
import Galeri from './pages/Galeri'; // <-- YENİ İMPORT
import Sirketimiz from './pages/Sirketimiz'; // YENİ
import Sorular from './pages/Sorular'; // YENİ
import TadilatDekorasyon from './pages/TadilatDekorasyon'; // YENİ
import MimariDanismanlik from './pages/MimariDanismanlik'; // YENİ
import Iletisim from './pages/Iletisim';
function App() {
  return (
    // min-h-screen: Ekran yüksekliği kadar minimum yükseklik sağlar
    // flex flex-col: İçerikleri dikey olarak dizer (Header, main, Footer)
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Header />

      {/* flex-grow: Bu alanın, Header ve Footer dışındaki tüm boşluğu doldurmasını sağlar */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/mantolama" element={<Mantolama />} />
          <Route path="/yapsat" element={<YapSat />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/sirketimiz" element={<Sirketimiz />} /> {/* YENİ */}
          <Route path="/sorular" element={<Sorular />} /> {/* YENİ */}
          <Route path="/galeri" element={<Galeri />} /> {/* <-- YENİ ROTA */}
          <Route path="/tadilat-dekorasyon" element={<TadilatDekorasyon />} /> {/* YENİ */}
          <Route path="/mimari-danismanlik" element={<MimariDanismanlik />} /> {/* YENİ */}
          <Route path="/iletisim" element={<Iletisim />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;