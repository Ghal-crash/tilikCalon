import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SplashScreen from "./pages/splashScreen";
import LandingPage from "./pages/landingPage";
import ProfilePage from "./pages/profilePage";
import DetailPage from "./pages/detailPage";
import Header from "./components/header";
import Navbar from "./components/navbar";
import "./App.css";
import AboutPage from "./pages/aboutPage";
import AboutDetail from "./pages/aboutdetailPage";
import PWAPrompt from "./components/pwaPrompt";
import RandomPage from "./pages/randomPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      <div className={`App min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route 
            path="/landing" 
            element={
              <div className="min-h-screen dark:bg-gray-900">
                <PWAPrompt />
                <Header />
                <LandingPage />
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
              </div>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <div className="min-h-screen dark:bg-gray-900">
                <Header />
                <ProfilePage />
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
              </div>
            } 
          />
          <Route
            path="/about"
            element={
              <div className="min-h-screen dark:bg-gray-900">
                <Header />
                <AboutPage />
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
              </div>
            }
          />
          <Route path="/detail/:dapil/:partai/:id" element={<DetailPage />} />
          <Route
            path="/aboutdetail/:partyName/:partyId"
            element={
              <div className="min-h-screen dark:bg-gray-900">
                <Header />
                <AboutDetail />
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
              </div>
            }
          />
          <Route
               path="/random"
              element={
                  <div className="min-h-screen dark:bg-gray-900">
                      <Header />
                      <RandomPage />
                      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
                  </div>
              }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;