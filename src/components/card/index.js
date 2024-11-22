import React from "react";

export default function Card({ data, onClick }) {
    const baseUrl = "https://infopemilu.kpu.go.id/";
    const namaCaleg = data?.nama || "No Name";
    const namaPartai = data?.namaPartai || "No Partai";
    const namaDapil = data?.namaDapil || "No Dapil";
    const imageUrl = data?.pasFoto || "https://via.placeholder.com/150";
    const logoPartai = data?.logoPartai? `${baseUrl}${data.logoPartai}`: "https://via.placeholder.com/30";

    return (
        <div 
            className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg bg-white dark:bg-gray-800 hover:scale-110 hover:drop-shadow-2xl transition ease-in-out delay-5 hover:shadow-blue-400 cursor-pointer"
            onClick={() => onClick(data)}
        >
            <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" style={{ opacity: 0.1 }}>
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="currentColor" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="currentColor" />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
                </div>
                <img className="relative w-40 rounded-xl" src={imageUrl} alt="Foto" />
            </div>
            <div className="relative px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1 text-black dark:text-gray-300">{namaCaleg}</span>
                <div className="flex justify-between">
                    <span className="block font-semibold text-lg text-black dark:text-white">{namaDapil}</span>
                    <span className="block bg-white dark:bg-gray-700 rounded-xl text-orange-500 dark:text-orange-400 text-xs font-bold px-3 py-2 leading-none flex items-center">
                        <img className="w-8 h-8 ml-2 mr-2" src={logoPartai} alt="Logo Partai"/>
                        <span className="text-black dark:text-white">{namaPartai}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export function Modal({ isShow, data, onCancel }) {
    if (!isShow) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
                <div className="flex flex-col items-center gap-4">
                    <img 
                        src={data?.pasFoto || "https://via.placeholder.com/150"}
                        alt={data?.nama}
                        className="w-40 h-40 rounded-lg object-cover shadow-lg"
                    />
                    
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {data?.nama}
                        </h2>
                        <div className="flex items-center justify-center gap-2">
                            {data?.logoPartai && (
                                <img 
                                    src={`https://infopemilu.kpu.go.id/${data.logoPartai}`}
                                    alt={data?.namaPartai}
                                    className="h-6 w-auto"
                                />
                            )}
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                {data?.namaPartai}
                            </p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            {data?.namaDapil}
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-400">Nomor Urut</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{data?.noUrut || '-'}</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-400">Jenis Kelamin</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{data?.jenisKelamin || '-'}</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={onCancel}
                    className="mt-6 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                    Tutup
                </button>
            </div>
        </div>
    );
}