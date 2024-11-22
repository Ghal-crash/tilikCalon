// src/components/PWAPrompt.js
import React, { useState, useEffect } from 'react';

export default function PWAPrompt() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

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

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center justify-between">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Install Tilik Calon App
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Install aplikasi ini untuk akses lebih cepat
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setShowPrompt(false)}
          className="px-4 py-2 text-gray-600 dark:text-gray-300"
        >
          Nanti
        </button>
        <button
          onClick={handleInstall}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Install
        </button>
      </div>
    </div>
  );
}