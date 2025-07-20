// Dosya: src/Components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Bu bileşenin kodu zaten doğruydu, olduğu gibi bırakıyoruz.
// Görevi, her sayfa (route) değişikliğinde pencereyi en üste kaydırmaktır.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Bu bileşen ekranda bir şey göstermez.
}

export default ScrollToTop;
