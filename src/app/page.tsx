"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Sparkles, MessageCircle, Heart, Leaf, Star, Gift, User, Phone } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6F0] via-[#F5F2E8] to-[#F0EBD8] relative overflow-hidden">
      {/* Conteúdo da página */}
      {/* ... (todo o restante do código que você já tinha) ... */}
    </div>
  );
}
