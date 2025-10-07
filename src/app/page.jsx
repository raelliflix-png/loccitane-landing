"use client";

import { useState, useEffect } from "react";
import { Leaf, Heart, Sparkles, Gift } from "lucide-react";

export default function LoccitaneLanding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5599999999999", "_blank");
  };

  const handleOfficialStoreClick = () => {
    window.open("https://br.loccitane.com", "_blank");
  };

  const handlePromotionsClick = () => {
    window.open("https://br.loccitane.com/ofertas", "_blank");
  };

  const handleCatalogClick = () => {
    window.open("https://wa.me/5599999999999?text=Olá%20Israelli!%20Gostaria%20de%20ver%20o%20catálogo%20L'Occitane", "_blank");
  };

  const products = [
    { icon: <Leaf className="w-5 h-5" />, name: "Cuidados Faciais", desc: "Hidratantes e séruns naturais" },
    { icon: <Heart className="w-5 h-5" />, name: "Corpo & Banho", desc: "Cremes e óleos corporais" },
    { icon: <Sparkles className="w-5 h-5" />, name: "Fragrâncias", desc: "Perfumes e águas de colônia" },
    { icon: <Gift className="w-5 h-5" />, name: "Kits Especiais", desc: "Presentes e edições limitadas" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6F0] via-[#F5F2E8] to-[#F0EBD8] p-5">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#3B3A39]">L’Occitane by Israelli Barros</h1>
        <p className="mt-2 text-gray-600">Sua landing page oficial</p>
      </header>

      <main className="max-w-3xl mx-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {products.map((p, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-5 flex items-start gap-3">
              {p.icon}
              <div>
                <h2 className="font-semibold">{p.name}</h2>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="flex flex-col sm:flex-row justify-center gap-5">
          <button onClick={handleWhatsAppClick} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">WhatsApp</button>
          <button onClick={handleOfficialStoreClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Loja Oficial</button>
          <button onClick={handlePromotionsClick} className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500">Promoções</button>
          <button onClick={handleCatalogClick} className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">Catálogo</button>
        </section>
      </main>

      <footer className="mt-10 text-center text-gray-400 text-sm">
        © 2025 L’Occitane by Israelli Barros
      </footer>
    </div>
  );
}
