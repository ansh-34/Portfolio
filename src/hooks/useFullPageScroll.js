import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const routes = ['/', '/about', '/project'];

const useFullPageScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrollingRef.current) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
      const isAtTop = scrollTop <= 10;
      const scrollingDown = e.deltaY > 0;

      const currentIndex = routes.indexOf(location.pathname);

      // Navigate to next section when scrolling down at bottom
      if (isAtBottom && scrollingDown && currentIndex < routes.length - 1) {
        e.preventDefault();
        isScrollingRef.current = true;
        navigate(routes[currentIndex + 1]);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);
        }, 50);
      }
      // Navigate to previous section when scrolling up at top
      else if (isAtTop && !scrollingDown && currentIndex > 0) {
        e.preventDefault();
        isScrollingRef.current = true;
        
        setTimeout(() => {
          navigate(routes[currentIndex - 1]);
          setTimeout(() => {
            const newScrollHeight = document.documentElement.scrollHeight;
            const newClientHeight = document.documentElement.clientHeight;
            window.scrollTo({ top: newScrollHeight - newClientHeight, behavior: 'instant' });
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 800);
          }, 50);
        }, 50);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [navigate, location.pathname]);
};

export default useFullPageScroll;

