import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, placeholder = "Cari nama calon..." }) => {
    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
                <input
                    type="search"
                    placeholder={placeholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-10 pr-12 rounded-lg text-gray-900 bg-white/90 
                        dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                        focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500
                        border border-gray-300 dark:border-gray-600
                        transition-all duration-200
                        shadow-sm hover:shadow-md"
                />
                {/* Search Icon */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg 
                        className="w-5 h-5 text-gray-500 dark:text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                    </svg>
                </div>

                {/* Clear Button */}
                {searchQuery && (
                    <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                        <svg 
                            className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 
                                dark:hover:text-gray-300 transition-colors duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>
                    </button>
                )}
            </form>

            {/* Search Statistics */}
            {searchQuery && (
                <div className="absolute mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Mencari "{searchQuery}" di nama, partai, dan nomor urut
                </div>
            )}
        </div>
    );
};

export default SearchBar;