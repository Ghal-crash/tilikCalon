import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";
import Modal from "../components/modal";

export default function RandomCalegPage() {
    const [randomCaleg, setRandomCaleg] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    const fetchRandomCaleg = async () => {
        setIsLoading(true);
        try {
            const dapilIds = ['3301', '3302', '3303', '3304', '3305', '3306', '3307', '3308', '3309', '3310'];
            const allCalegData = [];

            for (const dapilId of dapilIds) {
                const response = await axios.get(`https://caleg.zakiego.com/api/dpr-ri/dapil/${dapilId}`);
                allCalegData.push(...response.data.data);
            }

            const shuffledCaleg = allCalegData.sort(() => Math.random() - 0.5);
            const selectedRandomCaleg = shuffledCaleg.slice(0, 8);
            setRandomCaleg(selectedRandomCaleg);
        } catch (err) {
            console.error("Error fetching data:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomCaleg();
    }, []);

    const handleClick = (item) => {
        setModalShow(true);
        setModalItem(item);
    };

    const handleRefresh = () => {
        fetchRandomCaleg();
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Caleg Random
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Caleg Random dari berbagai Dapil Jawa Tengah, <p className="font-bold">Bismillah Yakin!!!</p>
                    </p>
                    <button
                        onClick={handleRefresh}
                        className="flex items-center gap-2 mx-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                        disabled={isLoading}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                            />
                        </svg>
                        {isLoading ? 'Mengacak...' : 'Acak Ulang'}
                    </button>
                </div>

                {/* Main Content */}
                <main>
                    {isLoading ? (
                        <div className="flex items-center justify-center min-h-[50vh]">
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative">
                                    <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                                    <div className="w-16 h-16 border-4 border-transparent border-t-blue-300 rounded-full animate-spin absolute top-0 left-0" style={{ animationDelay: '-0.3s' }}></div>
                                </div>
                                <span className="text-gray-500 text-lg font-medium animate-pulse">
                                    Memuat Data Caleg Random...
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {randomCaleg.map((item, index) => (
                                <Card data={item} key={index} onClick={() => handleClick(item)} />
                            ))}
                        </div>
                    )}
                </main>

                {/* Modal */}
                <Modal
                    data={modalItem}
                    isShow={modalShow}
                    onCancel={() => setModalShow(false)}
                />
            </div>
        </div>
    );
}