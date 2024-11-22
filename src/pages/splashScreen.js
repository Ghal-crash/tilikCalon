import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo-tc.png";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        navigate('/landing', { replace: true });  // Menggunakan path route, bukan path file
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div 
      className={`flex items-center justify-center min-h-screen bg-white
        ${fadeOut ? 'animate-fadeOut' : 'animate-fadeIn'}`}
    >
      <div className="relative w-64 h-64 animate-scaleUp">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default SplashScreen;