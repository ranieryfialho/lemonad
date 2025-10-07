import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Hook que retorna variantes simples para mobile
export const useResponsiveVariants = () => {
  const isMobile = useIsMobile();

  return {
    // Container sem stagger no mobile
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: isMobile ? { duration: 0.2 } : { staggerChildren: 0.15 }
      }
    },
    // Item super leve - só opacity no mobile
    item: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: isMobile ? 0.2 : 0.4 }
      }
    },
    // Item com movimento - desabilitado no mobile
    itemWithMotion: {
      hidden: { opacity: 0, y: isMobile ? 0 : 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: isMobile ? 0.2 : 0.5 }
      }
    }
  };
};