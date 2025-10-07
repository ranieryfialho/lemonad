import { useEffect, useState } from "react";
import { Particles } from "@/components/ui/particles";

export const ParticlesBackground = () => {
  const [color, setColor] = useState("#ffffff");
  const [quantity, setQuantity] = useState(400);

  useEffect(() => {
    const updateColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setColor(isDark ? "#ffffff" : "#a1a1a1");
    };

    updateColor();

    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateQuantity = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const newQuantity = isMobile ? 50 : 400; // Reduzido de 100 para 50 no mobile
      
      console.log('Largura da tela:', width);
      console.log('É mobile?', isMobile);
      console.log('Quantidade de partículas:', newQuantity);
      
      setQuantity(newQuantity);
    };

    updateQuantity();

    window.addEventListener('resize', updateQuantity);

    return () => window.removeEventListener('resize', updateQuantity);
  }, []);

  return (
    <Particles
      className="absolute inset-0 z-0"
      quantity={quantity}
      ease={15}
      color={color}
      refresh
    />
  );
};