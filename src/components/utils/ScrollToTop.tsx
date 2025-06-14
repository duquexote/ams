import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que faz a página rolar para o topo quando há mudança de rota
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
