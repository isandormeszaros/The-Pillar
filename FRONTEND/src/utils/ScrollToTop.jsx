import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Use built-in hook for location

function ScrollToTop({ children }) { // Accept children for wrapping
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  }, [pathname]); // Update scroll only when pathname changes

  return children; // Render children for seamless wrapping
}

export default ScrollToTop; // No need for withRouter
