import React from 'react';
import { useParams } from 'react-router-dom';

const HizmetDetaySayfasi = () => {
  // React Router'ın useParams hook'u ile URL'deki :hizmetSlug kısmını yakalıyoruz
  const { hizmetSlug } = useParams();

  // URL'deki "tadilat-boya" gibi bir ifadeyi "Tadilat Boya" gibi bir başlığa çevirelim
  const baslik = hizmetSlug
    .split('-')
    .map(kelime => kelime.charAt(0).toUpperCase() + kelime.slice(1))
    .join(' ');

  return (
    <div className="container mx-auto px-6 py-12 pt-[140px]">
      <h1 className="text-4xl font-bold text-white">{baslik}</h1>
      <p className="mt-4 text-lg text-gray-300">
        <strong>{baslik}</strong> hizmetimiz hakkında detaylı bilgileri burada bulabilirsiniz.
        {/* İleri seviye: Burada `hizmetSlug` değerine göre bir veritabanından veya 
          bir obje dizisinden ilgili hizmetin tüm bilgilerini çekip gösterebilirsiniz.
        */}
      </p>
    </div>
  );
};

export default HizmetDetaySayfasi;