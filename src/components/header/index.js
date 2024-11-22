import React from "react";
import logo from "../../assets/logo-tc.png";
import logoJateng from "../../assets/Jateng.png";

export default function Header({ darkMode, setDarkMode }) {
    return (
        <header className="bg-blue-600 dark:bg-gray-800 text-white py-4 px-6 transition-colors duration-200 drop-shadow-md md:drop-shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Left side - Tilik Calon logo and text */}
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
                    <span className="text-2xl font-bold">Tilik Calon</span>
                </div>

                {/* Right side - KPU and Jateng logos */}
                <div className="flex items-center gap-4">
                    <img src={logoJateng} alt="Logo Jateng" className="w-10 h-10" />
                    <img 
                        src="https://www.kpu.go.id/img/logo-kpu.png" 
                        alt="Logo KPU" 
                        className="w-10 h-10"
                    />
                </div>
            </div>
        </header>
    );
}