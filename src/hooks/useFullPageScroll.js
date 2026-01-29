import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const routes = ['/', '/about', '/project'];

const useFullPageScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isScrollingRef = useRef(false);
  const touchStartRef = useRef(0);

  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;

    const handleNavigation = (scrollDirection) => {
      if (isScrollingRef.current) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;
      const isAtTop = scrollTop <= 50;
      const currentIndex = routes.indexOf(location.pathname);

      // Navigate to next section when scrolling down at bottom
      if (isAtBottom && scrollDirection === 'down' && currentIndex < routes.length - 1) {
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
      else if (isAtTop && scrollDirection === 'up' && currentIndex > 0) {
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

    // Handle mouse wheel events (desktop)
    const handleWheel = (e) => {
      const scrollDirection = e.deltaY > 0 ? 'down' : 'up';
      handleNavigation(scrollDirection);
    };

    // Handle touch events (mobile)
    const handleTouchStart = (e) => {
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!ticking && !isScrollingRef.current) {
        window.requestAnimationFrame(() => {
          const touchEnd = e.touches[0].clientY;
          const touchDiff = touchStartRef.current - touchEnd;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          // Determine if we've scrolled significantly (at least 50px)
          if (Math.abs(touchDiff) > 50) {
            const scrollDirection = touchDiff > 0 ? 'down' : 'up';
            
            // Only trigger if we're actually at top or bottom
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;
            const isAtTop = scrollTop <= 50;
            
            if ((isAtBottom && scrollDirection === 'down') || (isAtTop && scrollDirection === 'up')) {
              handleNavigation(scrollDirection);
            }
          }
          
          lastScrollTop = scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [navigate, location.pathname]);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [navigate, location.pathname]);
};

export default useFullPageScroll;

