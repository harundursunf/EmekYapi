// src/pages/Sorular.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

// Tek bir Soru-Cevap bloğu için bileşen
const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
        <div className="text-blue-600">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function Sorular() {
  const faqs = [
    {
      question: "Mantolama işlemi ne kadar sürer?",
      answer: "Bir binanın mantolama süresi, binanın büyüklüğüne, mimari yapısına ve hava koşullarına bağlı olarak değişmekle birlikte, orta büyüklükteki bir apartman için ortalama 3 ila 6 hafta arasında tamamlanmaktadır."
    },
    {
      question: "Yap-sat projelerinizde hangi malzemeleri kullanıyorsunuz?",
      answer: "Tüm projelerimizde, TSE standartlarına uygun, uzun ömürlü ve yüksek kaliteli, A sınıfı malzemeler kullanmayı taahhüt ediyoruz. Detaylı marka ve malzeme listesi için proje özelinde bilgi alabilirsiniz."
    },
    {
      question: "Ücretsiz keşif hizmetiniz var mı?",
      answer: "Evet, mantolama hizmetimiz için tamamen ücretsiz bir keşif ve danışmanlık hizmeti sunuyoruz. Uzman ekibimiz binanızı yerinde inceler ve size en uygun çözümleri içeren bir teklif hazırlar."
    },
    {
        question: "Ödeme seçenekleri nelerdir?",
        answer: "Projelerimize ve hizmetlerimize göre esnek ödeme planları ve anlaşmalı bankalar aracılığıyla kredi imkanları sunmaktayız. Detaylı bilgi için satış ofisimizle iletişime geçebilirsiniz."
    },
  ];

  return (
    <div className="bg-white pt-[80px]">
      {/* GİRİŞ (HERO) */}
      <section className="bg-gray-50 py-28 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Sıkça Sorulan Sorular</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
            Aklınızdaki soruların cevaplarını burada bulabilirsiniz. Daha fazlası için bizimle iletişime geçmekten çekinmeyin.
          </p>
        </div>
      </section>
      
      {/* AKORDİYON MENÜ */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-6">
          {faqs.map((item, index) => (
            <AccordionItem key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Sorular;