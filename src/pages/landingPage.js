import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "../components/card";
import Modal from "../components/modal";
import SearchBar from "../components/searchBar";
import PWAPrompt from "../components/pwaPrompt";

const dapilList = [
    { id: '3301', name: 'JAWA TENGAH I', description: 'Semarang, Salatiga, Kendal' },
    { id: '3302', name: 'JAWA TENGAH II', description: 'Kudus, Jepara, Demak' },
    { id: '3303', name: 'JAWA TENGAH III', description: 'Grobogan, Blora, Rembang, Pati' },
    { id: '3304', name: 'JAWA TENGAH IV', description: 'Wonogiri, Karanganyar, Sragen' },
    { id: '3305', name: 'JAWA TENGAH V', description: 'Boyolali, Klaten, Sukoharjo, Surakarta' },
    { id: '3306', name: 'JAWA TENGAH VI', description: 'Purworejo, Wonosobo, Magelang, Temanggung' },
    { id: '3307', name: 'JAWA TENGAH VII', description: 'Kebumen, Banjarnegara, Purbalingga' },
    { id: '3308', name: 'JAWA TENGAH VIII', description: 'Cilacap, Banyumas' },
    { id: '3309', name: 'JAWA TENGAH IX', description: 'Tegal, Brebes' },
    { id: '3310', name: 'JAWA TENGAH X', description: 'Batang, Pekalongan, Pemalang' },
];

export default function LandingPage() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    const [selectedDapil, setSelectedDapil] = useState('3301');
    const [searchQuery, setSearchQuery] = useState('');
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://caleg.zakiego.com/api/dpr-ri/dapil/${selectedDapil}`);
                setData(response.data.data);
                setFilteredData(response.data.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedDapil]);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredData(data);
            return;
        }

        const query = searchQuery.toLowerCase();
        const filtered = data.filter(item => {
            // Mencari berdasarkan nama
            const nameMatch = item.nama?.toLowerCase().includes(query);
            // Mencari berdasarkan partai
            const partyMatch = item.namaPartai?.toLowerCase().includes(query);
            // Mencari berdasarkan nomor urut
            const numberMatch = item.nomorUrut?.toString().includes(query);

            return nameMatch || partyMatch || numberMatch;
        });

        setFilteredData(filtered);
    }, [searchQuery, data]);

    const handleClick = (item) => {
        setModalShow(true);
        setModalItem(item);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
            <PWAPrompt />
            {/* Search Bar */}
            <div className="mb-8">
                <SearchBar 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    placeholder="Cari berdasarkan nama, partai, atau nomor urut..."
                />
            </div>

            {/* Dapil Selection */}
            <div className="mb-8 relative">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />

                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto scrollbar-hide gap-4 py-4 px-8"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {dapilList.map((dapil) => (
                        <button
                            key={dapil.id}
                            onClick={() => setSelectedDapil(dapil.id)}
                            className={`flex flex-col items-start flex-shrink-0 w-[280px] p-4 rounded-xl transition-all duration-200 ${
                                selectedDapil === dapil.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
                            }`}
                        >
                            <span className="text-lg font-bold mb-1">{dapil.name}</span>
                            <span className={`text-sm ${
                                selectedDapil === dapil.id ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                            }`}>
                                {dapil.description}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <main>
                {isLoading ? (
                    <div className="flex items-center justify-center min-h-[50vh]">
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                                <div className="w-16 h-16 border-4 border-transparent border-t-blue-300 rounded-full animate-spin absolute top-0 left-0" style={{ animationDelay: '-0.3s' }}></div>
                            </div>
                            <span className="text-gray-500 text-lg font-medium animate-pulse">
                                Memuat Data...
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <Card data={item} key={index} onClick={() => handleClick(item)} />
                            ))
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400 text-center col-span-full">
                                {searchQuery ? 'Tidak ada hasil yang cocok dengan pencarian Anda' : 'Tidak ada data tersedia'}
                            </p>
                        )}
                    </div>
                )}
                <Modal
                    data={modalItem}
                    isShow={modalShow}
                    onCancel={() => setModalShow(false)}
                />
            </main>
        </div>
    );
}