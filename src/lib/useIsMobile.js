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

export const useResponsiveVariants = () => {
  const isMobile = useIsMobile();

  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: isMobile ? { duration: 0.2 } : { staggerChildren: 0.15 }
      }
    },
    item: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: isMobile ? 0.2 : 0.4 }
      }
    },
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