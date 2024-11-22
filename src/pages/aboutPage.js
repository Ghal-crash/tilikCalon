import React from "react";
import { useNavigate } from "react-router-dom";

const parties = [
    { id: 1, name: "Partai Kebangkitan Bangsa (PKB)", color: "bg-green-600", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656538128_Logo PKB.png" },
    { id: 2, name: "Partai Gerakan Indonesia Raya (GERINDRA)", color: "bg-red-600", logo: "berkas-sipol/parpol/profil/gambar_parpol/1657710596_Logo GERINDRA 10x10.png" },
    { id: 3, name: "Partai Demokrasi Indonesia Perjuangan (PDIP)", color: "bg-red-700", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656305039_LOGO PDI PERJUANGAN.png" },
    { id: 4, name: "Partai Golongan Karya (GOLKAR)", color: "bg-yellow-500", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656586681_Logo Golkar.png" },
    { id: 5, name: "Partai Nasional Demokrat (NASDEM)", color: "bg-blue-600", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656224727_Logo NasDem KPU.png" },
    { id: 6, name: "Partai Buruh", color: "bg-red-500", logo: "berkas-sipol/parpol/profil/gambar_parpol/1659959325_LOGO RESMI PB.png" },
    { id: 7, name: "Partai Gelora Indonesia", color: "bg-red-600", logo: "berkas-sipol/parpol/profil/gambar_parpol/1658983159_Logo Gelora Portrait.png" },
    { id: 8, name: "Partai Keadilan Sejahtera (PKS)", color: "bg-gray-800", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656395115_lambang_pks.png" },
    { id: 9, name: "Partai Kebangkitan Nusantara (PKN)", color: "bg-blue-500", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656155242_logo PKN-.png" },
    { id: 10, name: "Partai Hati Nurani Rakyat (HANURA)", color: "bg-amber-600", logo: "berkas-sipol/parpol/profil/gambar_parpol/1659263373_hanura_10x10.png" },
    { id: 11, name: "Partai Garda Perubahan Indonesia (GARUDA)", color: "bg-gray-700", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656406064_Logo Partai Garuda square.png" },
    { id: 12, name: "Partai Amanat Nasional (PAN)", color: "bg-blue-700", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656404797_LOGO PAN.png" },
    { id: 13, name: "Partai Bulan Bintang (PBB)", color: "bg-green-700", logo: "berkas-sipol/parpol/profil/gambar_parpol/1659262742_LOGO PBB.png" },
    { id: 14, name: "Partai Demokrat", color: "bg-blue-800", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656229496_WhatsApp Image 2022-06-26 at 1.53.14 PM.png" },
    { id: 15, name: "Partai Solidaritas Indonesia (PSI)", color: "bg-red-500", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656419883_logo-10x10.png" },
    { id: 16, name: "Partai Persatuan Indonesia (PERINDO)", color: "bg-blue-500", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656144884_LOGO PARTAI PERINDO 10x10 cm (RGB).png" },
    { id: 17, name: "Partai Persatuan Pembangunan (PPP)", color: "bg-green-800", logo: "berkas-sipol/parpol/profil/gambar_parpol/1658455987_Logo PPP.png" },
    { id: 24, name: "Partai Ummat", color: "bg-green-600", logo: "berkas-sipol/parpol/profil/gambar_parpol/1656157120_LOGO PARTAI UMMAT 10X10 CM KPU.png" },
];

export default function AboutPage() {
    const navigate = useNavigate();
    const baseUrl = "https://infopemilu.kpu.go.id/";
    
    const handlePartyClick = (party) => {
        // Format nama partai untuk URL (lowercase dan replace spaces dengan dash)
        const formattedName = party.name
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[()]/g, '')
            .replace(/[^a-z0-9-]/g, ''); // Menghapus karakter khusus
        
        // Navigate ke halaman detail partai
        navigate(`/aboutdetail/${formattedName}/${party.id}`);
    };
    
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Tentang Tilik Calon
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        platform yang dirancang khusus untuk warga Jawa Tengah, membantu masyarakat mengenal lebih dekat calon legislatif (caleg) yang akan berkompetisi dalam Pemilu 2024. 
                        Platform ini menyajikan informasi lengkap tentang caleg dari berbagai partai politik peserta Pemilu 2024, dengan fokus khusus pada dapil-dapil di Jawa Tengah. 
                        Dengan Tilik Calon Jawa Tengah, warga dapat lebih bijak dalam menentukan pilihan untuk masa depan daerah mereka.
                        <p className="text-xl font-bold text-gray-600 dark:text-gray-300">
                            Jateng Wajib Ngerti, Sopo Wakil Rakyate!!!
                        </p>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {parties.map((party) => (
                        <div 
                            key={party.id}
                            onClick={() => handlePartyClick(party)}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform duration-200"
                        >
                            <div className={`h-2 ${party.color}`} />
                            <div className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                                        <img 
                                            src={`${baseUrl}${party.logo}`}
                                            alt={party.name}
                                            className="w-12 h-12 object-contain"
                                            onError={(e) => {
                                                e.target.src = "https://via.placeholder.com/48";
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {party.name}
                                        </h2>
                                        <div className="flex items-center gap-2">
                                            <span className={`w-3 h-3 rounded-full ${party.color}`} />
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                Nomor Urut {party.id}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}