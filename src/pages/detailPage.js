//detailPage
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailPage() {
    const navigate = useNavigate();
    const { dapil, partai, id } = useParams();
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data for dapil:", dapil);
                // Handle both formats: "jawa-tengah-i" and direct number format "33-01"
                let dapilId;
                
                if (dapil.startsWith('jawa-tengah')) {
                    const dapilMatch = dapil.match(/jawa-tengah-(\w+)/);
                    if (!dapilMatch) throw new Error("Format dapil tidak valid");
                    
                    const dapilNumber = dapilMatch[1];
                    dapilId = `33${dapilNumber.replace('i', '01')
                        .replace('ii', '02')
                        .replace('iii', '03')
                        .replace('iv', '04')
                        .replace('v', '05')
                        .replace('vi', '06')
                        .replace('vii', '07')
                        .replace('viii', '08')
                        .replace('ix', '09')
                        .replace('x', '10')}`;
                } else {
                    // Assume direct format like "33-01"
                    dapilId = dapil.replace('-', '');
                }

                console.log("Dapil ID:", dapilId);
                
                const response = await fetch(`https://caleg.zakiego.com/api/dpr-ri/dapil/${dapilId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                console.log("API Response:", result);

                if (result.data) {
                    const calegData = result.data.find(
                        (caleg) => {
                            const calegPartai = caleg.namaPartai.toLowerCase()
                                .replace(/\s+/g, '-')
                                .replace(/[()]/g, '');
                            return caleg.id === id && calegPartai.includes(partai);
                        }
                    );

                    if (calegData) {
                        setData(calegData);
                    } else {
                        setError("Data caleg tidak ditemukan");
                    }
                } else {
                    setError("Data tidak tersedia");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [dapil, partai, id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {error}
                    </h2>
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Kembali
                    </button>
                </div>
            </div>
        );
    }

    const InfoItem = ({ label, value }) => (
        <div className="mb-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
            <p className="text-gray-900 dark:text-white font-medium mt-1">{value || '-'}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-6">
                    <div className="relative">
                        <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600" />
                        <div className="absolute -bottom-20 w-full flex justify-center">
                            <div className="relative">
                                <div className="w-40 h-40 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-white">
                                    <img 
                                        src={data?.pasFoto || "https://via.placeholder.com/160"} 
                                        alt={data?.nama}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/160";
                                        }}
                                    />
                                </div>
                                <div className="absolute -right-4 -top-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    {data?.nomorUrut}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-24 px-6 pb-8">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                {data?.nama}
                            </h1>
                            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                                <span>{data?.namaPartai}</span>
                                <span>•</span>
                                <span>{data?.namaDapil}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Data Pribadi */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Data Pribadi
                        </h2>
                        <div className="space-y-4">
                            <InfoItem label="Tempat Lahir" value={data?.tempatLahir} />
                            <InfoItem label="Tanggal Lahir" value={data?.tanggalLahir} />
                            <InfoItem label="Jenis Kelamin" value={data?.jenisKelamin} />
                            <InfoItem label="Agama" value={data?.agama} />
                        </div>
                    </div>

                    {/* Info Pendidikan */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Pendidikan
                        </h2>
                        <div className="space-y-4">
                            {data?.riwayatPendidikan?.length > 0 ? (
                                data.riwayatPendidikan.map((pendidikan, index) => (
                                    <div key={index} className="pb-4 border-b dark:border-gray-700 last:border-b-0">
                                        <p className="font-semibold text-gray-900 dark:text-white">
                                            {pendidikan.jenjang}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {pendidikan.nama_sekolah}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {pendidikan.tahun}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 dark:text-gray-400">Tidak ada data pendidikan</p>
                            )}
                        </div>
                    </div>

                    {/* Info Pekerjaan */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Pekerjaan
                        </h2>
                        <div className="space-y-4">
                            {data?.riwayatPekerjaan?.length > 0 ? (
                                data.riwayatPekerjaan.map((pekerjaan, index) => (
                                    <div key={index} className="pb-4 border-b dark:border-gray-700 last:border-b-0">
                                        <p className="font-semibold text-gray-900 dark:text-white">
                                            {pekerjaan.nama_pekerjaan}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {pekerjaan.tahun}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 dark:text-gray-400">Tidak ada data pekerjaan</p>
                            )}
                        </div>
                    </div>

                    {/* Info Organisasi */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Organisasi
                        </h2>
                        <div className="space-y-4">
                            {data?.riwayatOrganisasi?.length > 0 ? (
                                data.riwayatOrganisasi.map((organisasi, index) => (
                                    <div key={index} className="pb-4 border-b dark:border-gray-700 last:border-b-0">
                                        <p className="font-semibold text-gray-900 dark:text-white">
                                            {organisasi.nama_organisasi}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {organisasi.jabatan}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {organisasi.tahun}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 dark:text-gray-400">Tidak ada data organisasi</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                    >
                        Kembali
                    </button>
                </div>
            </div>
        </div>
    );
}