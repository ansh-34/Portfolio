import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const routes = ['/', '/about', '/project'];

const useFullPageScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const checkAndNavigate = () => {
      if (isScrollingRef.current) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const currentIndex = routes.indexOf(location.pathname);
      
      // More generous thresholds for mobile
      const threshold = 150;
      const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - threshold);
      const isAtTop = scrollTop <= threshold;
      const scrollDirection = scrollTop > lastScrollYRef.current ? 'down' : 'up';
      
      lastScrollYRef.current = scrollTop;

      // Navigate to next section when at bottom scrolling down
      if (isAtBottom && scrollDirection === 'down' && currentIndex < routes.length - 1) {
        isScrollingRef.current = true;
        navigate(routes[currentIndex + 1]);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => {
            isScrollingRef.current = false;
            lastScrollYRef.current = 0;
          }, 1200);
        }, 150);
      }
      // Navigate to previous section when at top scrolling up
      else if (isAtTop && scrollDirection === 'up' && currentIndex > 0) {
        isScrollingRef.current = true;
        
        setTimeout(() => {
          navigate(routes[currentIndex - 1]);
          setTimeout(() => {
            const newScrollHeight = document.documentElement.scrollHeight;
            const newClientHeight = window.innerHeight;
            window.scrollTo({ top: newScrollHeight - newClientHeight - 50, behavior: 'smooth' });
            setTimeout(() => {
              isScrollingRef.current = false;
              lastScrollYRef.current = newScrollHeight - newClientHeight - 50;
            }, 1200);
          }, 150);
        }, 150);
      }
    };

    // Desktop: wheel event
    const handleWheel = () => {
      checkAndNavigate();
    };

    // Mobile: touch events
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = null;
      // Check navigation after touch ends
      setTimeout(() => {
        checkAndNavigate();
      }, 100);
    };

    // Also check on scroll end
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        checkAndNavigate();
      }, 150);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [navigate, location.pathname]);
};

export default useFullPageScroll;

