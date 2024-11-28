import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PWAPrompt() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
      // Hanya tampilkan prompt jika di landing page
      if (location.pathname === '/landing') {
        setShowPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, [location]);

  const handleInstall = () => {
    if (!installPrompt) return;

    installPrompt.prompt();
    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      setInstallPrompt(null);
      setShowPrompt(false);
    });
  };

  if (!showPrompt || location.pathname !== '/') return null;

  return (
    <>
      {/* Backdrop blur */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={() => setShowPrompt(false)}
      />

      {/* PWA Prompt */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 mx-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3">
              <svg 
                className="w-6 h-6 text-blue-600 dark:text-blue-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Install Tilik Calon App
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Install aplikasi Tilik Calon untuk pengalaman yang lebih baik dan akses yang lebih cepat
            </p>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => setShowPrompt(false)}
              className="flex-1 px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              Nanti Saja
            </button>
            <button
              onClick={handleInstall}
              className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              Install Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
}