import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';


export const Layout: React.FC = () => {
  const location = useLocation();

  // Scroll to top or to anchor on location change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-lavender-50 selection:bg-brand-violet-500 selection:text-white relative">
      {/* Global subtle radial ambient lights */}
      <div className="fixed top-0 left-1/4 w-[700px] h-[500px] radial-glow-lavender pointer-events-none -z-20 opacity-30" />
      <div className="fixed bottom-1/3 right-10 w-[600px] h-[600px] radial-glow-violet pointer-events-none -z-20 opacity-20" />

      {/* Sticky Liquid Glass Navbar */}
      

      {/* Page Content */}
      <div className="flex-1 w-full pt-20">
        <Outlet />
      </div>

      
    </div>
  );
};
