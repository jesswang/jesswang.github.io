import { 
  useState,
  useEffect,
  useMemo,
} from 'react';
import { breakpointMdMin } from './stylesUtils';

export const useMobileBreakpoint = () => {
  const mediaQuery = useMemo(() => window.matchMedia(`(min-width: ${breakpointMdMin}px)`), []);
  const [isMobile, setIsMobile] = useState(!mediaQuery.matches);

  useEffect(() => {
    mediaQuery.addEventListener('change', handleMediaQuery);

    return () => mediaQuery.removeEventListener('change', handleMediaQuery);
  }, [mediaQuery]);

  const handleMediaQuery = (e) => {
    e.matches ? setIsMobile(false) : setIsMobile(true);
  };

  return isMobile;
};