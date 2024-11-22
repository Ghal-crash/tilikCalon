// Modal.js
import React, { useState } from "react";
import {  } from "react-router-dom";

export default function Modal({ isShow, data, onCancel }) {
    const [showDetailModal, setShowDetailModal] = useState(false);
    const baseUrl = "https://infopemilu.kpu.go.id/";
    const namaPartai = data?.namaPartai || "No Partai";
    const namaCaleg = data?.nama || "No Nama"; 
    const noUrut = data?.nomorUrut || "No Urut";
    const pasFoto = data?.pasFoto || "https://via.placeholder.com/150";
    const logoPartai = data?.logoPartai ? `${baseUrl}${data.logoPartai}` : "https://via.placeholder.com/30";
    const programUsulan = data?.programUsulan || "Tidak Dicantumkan";
    
    if (!isShow) return null;

    const handleDetailClick = () => {
        if (data) {
            setShowDetailModal(true);
        }
    };

    const InfoItem = ({ label, value }) => (
        <div className="mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
            <p className="text-gray-900 dark:text-white font-medium">{value || '-'}</p>
        </div>
    );

    // Modal Detail Component
    const DetailModal = () => (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
                onClick={() => setShowDetailModal(false)}
            />
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl mx-4 p-6 transform transition-all overflow-y-auto max-h-[90vh]">
                <div className="space-y-4">
                    {/* Header Section */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Data Lengkap
                        </h2>
                        <div className="flex items-center justify-center gap-2">
                            <img 
                                src={logoPartai}
                                alt={namaPartai}
                                className="h-6 w-auto"
                            />
                            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                {namaPartai}
                            </h3>
                        </div>
                    </div>

                    {/* Data Pribadi Section */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Data Pribadi
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InfoItem label="Tempat Lahir" value={data?.tempatLahir} />
                            <InfoItem label="Tanggal Lahir" value={data?.tanggalLahir} />
                            <InfoItem label="Jenis Kelamin" value={data?.jenisKelamin} />
                            <InfoItem label="Agama" value={data?.agama} />
                        </div>
                    </div>

                    {/* Pendidikan Section */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Pendidikan
                        </h3>
                        <div className="space-y-3">
                            {data?.riwayatPendidikan?.map((pendidikan, index) => (
                                <div key={index} className="pb-3 border-b dark:border-gray-600 last:border-b-0">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        {pendidikan.jenjang}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {pendidikan.nama_sekolah}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {pendidikan.tahun}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pekerjaan Section */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Pekerjaan
                        </h3>
                        <div className="space-y-3">
                            {data?.riwayatPekerjaan?.map((pekerjaan, index) => (
                                <div key={index} className="pb-3 border-b dark:border-gray-600 last:border-b-0">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        {pekerjaan.nama_pekerjaan}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {pekerjaan.tahun}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Organisasi Section */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Program Usulan
                            <p className="font-semibold text-gray-900 dark:text-white">
                                {programUsulan}
                            </p>
                        </h3>
                        <div className="space-y-3">
                            {data?.riwayatOrganisasi?.map((organisasi, index) => (
                                <div key={index} className="pb-3 border-b dark:border-gray-600 last:border-b-0">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        {organisasi.nama_organisasi}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {organisasi.jabatan}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {organisasi.tahun}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                        <button
                            onClick={() => setShowDetailModal(false)}
                            className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
    );

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
                    onClick={onCancel}
                />
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md mx-4 p-6 transform transition-all">
                    {data ? (
                        <div className="space-y-4">
                            <div className="absolute -top-10 left-1/2 text-xl font-bold text-white transform -translate-x-1/2 bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center z-10 drop-shadow-xl">
                                {noUrut}
                            </div>
                            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400">
                                <img
                                    src={pasFoto}
                                    alt={namaPartai}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="text-center space-y-2">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {namaCaleg}
                                </h2>
                                <div className="flex items-center justify-center gap-2">
                                    <img 
                                        src={logoPartai}
                                        alt={namaPartai}
                                        className="h-6 w-auto"
                                    />
                                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                        {namaPartai}
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {data?.namaDapil}
                                </p>
                            </div>
                            
                            <button
                                onClick={handleDetailClick}
                                className="mt-6 w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium mb-2"
                            >
                                Lihat Data Pribadi
                            </button>
                            <button
                                onClick={onCancel}
                                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                            >
                                Tutup
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center p-8">
                            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                    )}
                </div>
            </div>
            {showDetailModal && <DetailModal />}
        </>
    );
}