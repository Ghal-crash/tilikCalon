import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Trigger Button - Positioned center left */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-30 fixed top-1/2 -translate-y-1/2 left-0 w-7 h-20 rounded-r-xl bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-800 transition-all duration-300 dark:bg-slate-700 dark:hover:bg-slate-600"
        aria-label="Toggle navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          )}
        </svg>
      </button>

      {/* Navigation Menu */}
      <nav 
        className={`z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-1/2 -translate-y-1/2 left-16 min-h-[auto] min-w-[64px] flex-col rounded-lg border transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        }`}
      >
        {/* Dark Mode Toggle at Top */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
        >
          {darkMode ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <small className="text-center text-xs font-medium">Light</small>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <small className="text-center text-xs font-medium">Dark</small>
            </>
          )}
        </button>

        <hr className="dark:border-gray-700/60" />

        {/* Navigation Links */}
        <Link
          to="/profile"
          className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
            location.pathname === '/profile' 
              ? 'bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50'
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800'
          }`}
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <small className="text-center text-xs font-medium">Profil</small>
        </Link>

        {/* Navigation Links */}
        <Link
            to="/about"
            className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
              location.pathname === '/about' 
                ? 'bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800'
            }`}
            onClick={() => setIsOpen(false)}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round" 
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <small className="text-center text-xs font-medium">Tentang</small>
        </Link>

        {/* ... Other navigation links ... */}

        <Link
          to="/landing"
          className={`flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-md ${
            location.pathname === '/landing'
              ? 'bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50'
              : 'text-fuchsia-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800'
          }`}
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            />
          </svg>
          <small className="text-xs font-medium">Beranda</small>
        </Link>

        <Link
          to="/random"
          className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md ${
            location.pathname === '/random'
              ? 'bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50'
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800'
          }`}
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          <small className="text-center text-xs font-medium">Random</small>
        </Link>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}