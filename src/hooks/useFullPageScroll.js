import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const routes = ['/', '/about', '/project'];

const useFullPageScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isScrollingRef = useRef(false);
  const touchStartRef = useRef(null);
  const lastTouchEndRef = useRef(null);

  useEffect(() => {
    const handleNavigation = (scrollDirection) => {
      if (isScrollingRef.current) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 100;
      const isAtTop = scrollTop <= 100;
      const currentIndex = routes.indexOf(location.pathname);

      // Navigate to next section when scrolling down at bottom
      if (isAtBottom && scrollDirection === 'down' && currentIndex < routes.length - 1) {
        isScrollingRef.current = true;
        navigate(routes[currentIndex + 1]);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'auto' });
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 1000);
        }, 100);
      }
      // Navigate to previous section when scrolling up at top
      else if (isAtTop && scrollDirection === 'up' && currentIndex > 0) {
        isScrollingRef.current = true;
        
        setTimeout(() => {
          navigate(routes[currentIndex - 1]);
          setTimeout(() => {
            const newScrollHeight = document.documentElement.scrollHeight;
            const newClientHeight = document.documentElement.clientHeight;
            window.scrollTo({ top: newScrollHeight - newClientHeight, behavior: 'auto' });
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 1000);
          }, 100);
        }, 100);
      }
    };

    // Handle mouse wheel events (desktop)
    const handleWheel = (e) => {
      const scrollDirection = e.deltaY > 0 ? 'down' : 'up';
      handleNavigation(scrollDirection);
    };

    // Handle touch events (mobile) - using touchend for better reliability
    const handleTouchStart = (e) => {
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (!touchStartRef.current || isScrollingRef.current) return;
      
      const touchEnd = lastTouchEndRef.current || e.changedTouches[0].clientY;
      const touchDiff = touchStartRef.current - touchEnd;
      
      // Check if swipe was significant (at least 30px)
      if (Math.abs(touchDiff) > 30) {
        const scrollDirection = touchDiff > 0 ? 'down' : 'up';
        
        // Small delay to ensure scroll position is accurate
        setTimeout(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight;
          const clientHeight = document.documentElement.clientHeight;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight - 100;
          const isAtTop = scrollTop <= 100;
          
          if ((isAtBottom && scrollDirection === 'down') || (isAtTop && scrollDirection === 'up')) {
            handleNavigation(scrollDirection);
          }
        }, 50);
      }
      
      touchStartRef.current = null;
      lastTouchEndRef.current = touchEnd;
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigate, location.pathname]);
};

export default useFullPageScroll;

