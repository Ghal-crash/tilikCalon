// PartyDetailPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const partiesDetail = [
    {
        id: 1,
        name: "Partai Kebangkitan Bangsa (PKB)",
        color: "bg-green-600",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656538128_Logo PKB.png",
        chairman: "Muhaimin Iskandar",
        established: "23 Juli 1998",
        ideology: "Nasionalisme-Islam",
        headquarters: "Jl. Raden Saleh No. 9, Jakarta Pusat",
        description: "Partai Kebangkitan Bangsa (PKB) adalah partai politik di Indonesia yang didirikan pada tahun 1998. Partai ini memiliki akar kuat dalam organisasi Islam Nahdlatul Ulama (NU). PKB mengusung ideologi yang menggabungkan nilai-nilai nasionalisme dan Islam moderat. Partai ini konsisten memperjuangkan kepentingan masyarakat dengan berlandaskan pada nilai-nilai Pancasila dan kebhinnekaan.",
        achievements: [
            "Berhasil menempatkan kadernya sebagai Ketua MPR RI periode 2019-2024",
            "Konsisten berada dalam jajaran 5 besar partai dengan perolehan suara terbanyak",
            "Sukses membangun basis konstituen yang kuat di kalangan masyarakat Nahdliyin"
        ],
        programs: [
            "Pengembangan ekonomi kerakyatan berbasis pesantren",
            "Penguatan pendidikan karakter berbasis agama dan budaya",
            "Pemberdayaan petani dan nelayan tradisional",
            "Perlindungan hak-hak buruh migran Indonesia"
        ],
        vision: "Mewujudkan Indonesia yang adil, makmur, sejahtera, dan bermartabat berdasarkan Pancasila dan UUD 1945",
        mission: [
            "Memperkuat peran ulama dalam pembangunan nasional",
            "Meningkatkan kesejahteraan rakyat melalui ekonomi kerakyatan",
            "Menjaga kerukunan umat beragama dan kebhinnekaan",
            "Membangun sistem politik yang demokratis dan berkeadilan"
        ],
        socialMedia: {
            website: "www.pkb.id",
            twitter: "@pkb_id_",
            instagram: "@pkb_id",
            facebook: "PKB.Indonesia"
        }
    },
    {
        id: 2,
        name: "Partai Gerakan Indonesia Raya (GERINDRA)",
        color: "bg-red-600",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1657710596_Logo GERINDRA 10x10.png",
        chairman: "Prabowo Subianto",
        established: "6 Februari 2008",
        ideology: "Nasionalisme-Kerakyatan",
        headquarters: "Jl. Harsono RM No. 54, Jakarta Selatan",
        description: "Partai Gerindra adalah partai politik yang didirikan oleh Prabowo Subianto. Partai ini mengusung ideologi nasionalisme dan ekonomi kerakyatan. Gerindra memiliki komitmen kuat untuk memperjuangkan kedaulatan pangan, energi, dan ekonomi Indonesia. Partai ini aktif mengadvokasi kepentingan petani, nelayan, dan pelaku UMKM.",
        achievements: [
            "Menjadi partai oposisi terkuat periode 2014-2019",
            "Berhasil menempatkan kadernya sebagai Menteri Pertahanan 2019-2024",
            "Konsisten memperjuangkan kebijakan pro-rakyat di parlemen"
        ],
        programs: [
            "Pengembangan pertanian modern dan kedaulatan pangan",
            "Penguatan industri nasional dan UMKM",
            "Peningkatan kesejahteraan TNI dan POLRI",
            "Pemerataan pembangunan infrastruktur"
        ],
        vision: "Mewujudkan Indonesia yang berdaulat, adil, dan makmur",
        mission: [
            "Membangun ekonomi nasional yang kuat dan mandiri",
            "Menjaga kedaulatan dan keutuhan NKRI",
            "Meningkatkan kesejahteraan rakyat",
            "Menegakkan pemerintahan yang bebas korupsi"
        ],
        socialMedia: {
            website: "www.gerindra.or.id",
            twitter: "@Gerindra",
            instagram: "@gerindra",
            facebook: "Partai.Gerindra"
        }
    },
    {
        id: 3,
        name: "Partai Demokrasi Indonesia Perjuangan (PDIP)",
        color: "bg-red-700",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656305039_LOGO PDI PERJUANGAN.png",
        chairman: "Megawati Soekarnoputri",
        established: "10 Januari 1973",
        ideology: "Nasionalisme-Marhaenisme",
        headquarters: "Jl. Diponegoro No. 58, Jakarta Pusat",
        description: "PDI Perjuangan adalah partai politik yang mengusung ideologi Pancasila dengan interpretasi Marhaenisme warisan Soekarno. Partai ini memiliki basis massa yang kuat dan konsisten memperjuangkan kepentingan rakyat kecil. PDIP dikenal dengan simbolisme banteng dan warna merahnya yang khas.",
        achievements: [
            "Memenangkan Pemilu Legislatif 2014 dan 2019",
            "Berhasil mengusung Joko Widodo menjadi Presiden dua periode",
            "Memiliki jaringan kader terbesar di Indonesia"
        ],
        programs: [
            "Penguatan ekonomi kerakyatan dan UMKM",
            "Perlindungan hak-hak buruh dan petani",
            "Peningkatan akses pendidikan dan kesehatan",
            "Pembangunan infrastruktur merata"
        ],
        vision: "Mewujudkan masyarakat adil dan makmur dalam NKRI yang berdaulat dan bermartabat",
        mission: [
            "Menegakkan Pancasila sebagai ideologi negara",
            "Mewujudkan kedaulatan rakyat di bidang politik, ekonomi, dan budaya",
            "Membangun kesejahteraan rakyat dan keadilan sosial",
            "Memperkuat karakter bangsa dan identitas nasional"
        ],
        socialMedia: {
            website: "www.pdiperjuangan.id",
            twitter: "@PDI_Perjuangan",
            instagram: "@pdiperjuangan",
            facebook: "DPP.PDI.Perjuangan"
        }
    },
    {
        id: 4,
        name: "Partai Golongan Karya (GOLKAR)",
        color: "bg-yellow-500",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656586681_Logo Golkar.png",
        chairman: "Airlangga Hartarto",
        established: "20 Oktober 1964",
        ideology: "Nasionalisme-Pembangunan",
        headquarters: "Jl. Anggrek Neli Murni, Slipi, Jakarta Barat",
        description: "Partai Golkar merupakan salah satu partai politik terbesar dan tertua di Indonesia. Berawal dari organisasi massa Sekber Golkar di era Orde Baru, partai ini telah bertransformasi menjadi partai modern yang mengusung nilai-nilai pembangunan dan stabilitas nasional.",
        achievements: [
            "Menjadi partai pemenang pemilu selama era Orde Baru",
            "Konsisten menjadi 3 besar dalam perolehan suara nasional",
            "Memiliki kader terbanyak di pemerintahan dan birokrasi"
        ],
        programs: [
            "Pembangunan ekonomi berkelanjutan",
            "Pengembangan industri dan investasi",
            "Peningkatan kualitas SDM Indonesia",
            "Modernisasi pertanian dan maritim"
        ],
        vision: "Terwujudnya masyarakat Indonesia yang bersatu, berdaulat, maju, modern, damai, adil, dan makmur",
        mission: [
            "Mempertahankan dan mengamalkan Pancasila",
            "Mewujudkan cita-cita proklamasi melalui pembangunan nasional",
            "Membentuk karakter bangsa yang tangguh",
            "Membangun kesejahteraan rakyat Indonesia"
        ],
        socialMedia: {
            website: "www.golkar.or.id",
            twitter: "@Golkar_Online",
            instagram: "@golkar_id",
            facebook: "PartaiGolkar"
        }
    },
    {
        id: 5,
        name: "Partai Nasional Demokrat (NASDEM)",
        color: "bg-blue-600",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656224727_Logo NasDem KPU.png",
        chairman: "Surya Paloh",
        established: "26 Juli 2011",
        ideology: "Nasionalisme-Demokrat",
        headquarters: "Jl. RP Soeroso No. 44, Gondangdia, Jakarta Pusat",
        description: "Partai NasDem adalah partai politik yang mengusung semangat perubahan dan restorasi Indonesia. Didirikan oleh tokoh media dan pengusaha Surya Paloh, partai ini fokus pada penguatan demokrasi dan pembangunan ekonomi berbasis kerakyatan.",
        achievements: [
            "Lolos parliamentary threshold sejak pemilu pertama tahun 2014",
            "Berhasil menempatkan kader di berbagai posisi strategis kabinet",
            "Pencapaian signifikan dalam perolehan suara di berbagai daerah"
        ],
        programs: [
            "Restorasi Indonesia melalui gerakan perubahan",
            "Pemberdayaan ekonomi masyarakat",
            "Penguatan sistem politik demokratis",
            "Peningkatan kualitas pendidikan nasional"
        ],
        vision: "Mewujudkan Indonesia yang berdaulat secara politik, mandiri secara ekonomi, dan berkepribadian secara budaya",
        mission: [
            "Membangun politik demokratis berkeadilan",
            "Menciptakan ekonomi kerakyatan yang sejahtera",
            "Mewujudkan Indonesia berkeadilan sosial",
            "Membentuk karakter bangsa yang berbudaya"
        ],
        socialMedia: {
            website: "www.partainasdem.id",
            twitter: "@NasDem",
            instagram: "@officialnasdem",
            facebook: "PartaiNasdem"
        }
    },
    {
        id: 6,
        name: "Partai Buruh",
        color: "bg-red-500",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1659959325_LOGO RESMI PB.png",
        chairman: "Said Iqbal",
        established: "27 Oktober 2020",
        ideology: "Sosialisme Demokratik",
        headquarters: "Jakarta, Indonesia",
        description: "Partai Buruh adalah partai politik yang mewakili kepentingan kaum buruh dan pekerja di Indonesia. Fokus utama partai ini adalah memperjuangkan kesejahteraan buruh, reformasi ketenagakerjaan, dan keadilan sosial bagi seluruh rakyat Indonesia.",
        achievements: [
            "Berhasil mengorganisir gerakan buruh secara nasional",
            "Aktif dalam advokasi kebijakan ketenagakerjaan",
            "Mendorong peningkatan upah minimum pekerja"
        ],
        programs: [
            "Peningkatan kesejahteraan buruh dan pekerja",
            "Reformasi sistem ketenagakerjaan",
            "Perlindungan hak-hak buruh migran",
            "Jaminan sosial universal"
        ],
        vision: "Mewujudkan Indonesia yang berkeadilan sosial dengan kesejahteraan buruh yang terjamin",
        mission: [
            "Memperjuangkan hak-hak dasar buruh",
            "Meningkatkan kesejahteraan pekerja",
            "Membangun sistem ketenagakerjaan yang adil",
            "Menciptakan lapangan kerja berkualitas"
        ],
        socialMedia: {
            website: "www.partaiburuh.or.id",
            twitter: "@PartaiBuruh_ID",
            instagram: "@partaiburuh.id",
            facebook: "PartaiBuruhIndonesia"
        }
    },
    {
        id: 7,
        name: "Partai Gelora Indonesia",
        color: "bg-red-600",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1658983159_Logo Gelora Portrait.png",
        chairman: "Anis Matta",
        established: "28 Oktober 2019",
        ideology: "Nasionalisme-Religius",
        headquarters: "Jakarta, Indonesia",
        description: "Partai Gelora Indonesia adalah partai politik baru yang mengusung semangat pembaruan dalam politik Indonesia. Dipimpin oleh mantan tokoh PKS Anis Matta, partai ini fokus pada pembangunan ekonomi berbasis teknologi dan penguatan nilai-nilai religius dalam kehidupan berbangsa.",
        achievements: [
            "Membangun struktur partai hingga tingkat daerah",
            "Mengembangkan program pemberdayaan ekonomi digital",
            "Aktif dalam gerakan sosial kemasyarakatan"
        ],
        programs: [
            "Pengembangan ekonomi digital dan startup",
            "Pemberdayaan generasi milenial",
            "Penguatan nilai-nilai religius dan kebangsaan",
            "Modernisasi sistem pendidikan"
        ],
        vision: "Mewujudkan Indonesia sebagai negara maju yang berkeadilan dan bermartabat",
        mission: [
            "Membangun ekonomi berbasis teknologi",
            "Mengembangkan SDM unggul dan kompetitif",
            "Memperkuat nilai-nilai religius dan nasionalisme",
            "Menciptakan tata kelola pemerintahan yang bersih"
        ],
        socialMedia: {
            website: "www.partaigelora.id",
            twitter: "@PartaiGelora",
            instagram: "@partaigelora",
            facebook: "PartaiGeloraIndonesia"
        }
    },
    {
        id: 8,
        name: "Partai Keadilan Sejahtera (PKS)",
        color: "bg-gray-800",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656395115_lambang_pks.png",
        chairman: "Ahmad Syaikhu",
        established: "20 April 2002",
        ideology: "Islam",
        headquarters: "Jl. TB. Simatupang No. 18, Jakarta Selatan",
        description: "PKS adalah partai politik berbasis Islam yang tumbuh dari gerakan dakwah kampus. Partai ini mengusung nilai-nilai Islam dan memperjuangkan keadilan sosial serta kesejahteraan masyarakat. PKS dikenal dengan kadernya yang militansi tinggi dan basis massa yang loyal.",
        achievements: [
            "Konsisten lolos parliamentary threshold sejak 2004",
            "Memiliki jaringan kader terkuat di kalangan muda urban",
            "Program sosial kemanusiaan yang tersebar luas"
        ],
        programs: [
            "Penguatan ekonomi syariah",
            "Pemberdayaan pendidikan berbasis karakter",
            "Program kesejahteraan keluarga",
            "Gerakan anti korupsi"
        ],
        vision: "Menjadi partai dakwah yang kokoh dalam berkhidmat untuk bangsa dan negara",
        mission: [
            "Memperjuangkan aspirasi umat Islam",
            "Membangun masyarakat madani yang adil dan sejahtera",
            "Membentuk kepemimpinan yang bersih dan peduli",
            "Mengembangkan ekonomi kerakyatan berbasis syariah"
        ],
        socialMedia: {
            website: "www.pks.id",
            twitter: "@PKSejahtera",
            instagram: "@pksjahtera",
            facebook: "PKSejahtera"
        }
    },
    {
        id: 9,
        name: "Partai Kebangkitan Nusantara (PKN)",
        color: "bg-blue-500",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656155242_logo PKN-.png",
        chairman: "Joko Santoso",
        established: "11 November 2019",
        ideology: "Nasionalisme",
        headquarters: "Jakarta, Indonesia",
        description: "Partai Kebangkitan Nusantara (PKN) adalah partai politik baru yang fokus pada pembangunan dan pelestarian nilai-nilai nusantara. Partai ini mengusung semangat persatuan dalam keberagaman dan pembangunan berkelanjutan.",
        achievements: [
            "Membangun struktur partai di berbagai daerah",
            "Mengembangkan program pemberdayaan masyarakat adat",
            "Mempromosikan kearifan lokal nusantara"
        ],
        programs: [
            "Pelestarian budaya nusantara",
            "Pemberdayaan masyarakat adat",
            "Pengembangan pariwisata berkelanjutan",
            "Perlindungan lingkungan hidup"
        ],
        vision: "Membangun Indonesia yang berdaulat dengan kearifan nusantara",
        mission: [
            "Melestarikan nilai-nilai budaya nusantara",
            "Memberdayakan potensi daerah",
            "Membangun ekonomi berbasis kearifan lokal",
            "Menjaga kelestarian lingkungan"
        ],
        socialMedia: {
            website: "www.pkn.or.id",
            twitter: "@PKNusantara",
            instagram: "@pkn.official",
            facebook: "PartaiKebangkitanNusantara"
        }
    },
    {
        id: 10,
        name: "Partai Hati Nurani Rakyat (HANURA)",
        color: "bg-amber-600",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1659263373_hanura_10x10.png",
        chairman: "Oesman Sapta Odang",
        established: "21 Desember 2006",
        ideology: "Nasionalisme-Kerakyatan",
        headquarters: "Jl. Taman Patra X No. 7, Jakarta Selatan",
        description: "Partai Hanura didirikan dengan semangat reformasi dan pembaruan dalam politik Indonesia. Fokus utama partai ini adalah memperjuangkan kesejahteraan rakyat dan pemerintahan yang bersih.",
        achievements: [
            "Berhasil menempatkan kader di berbagai posisi strategis",
            "Konsisten memperjuangkan kebijakan pro-rakyat",
            "Aktif dalam pengawasan pemerintahan"
        ],
        programs: [
            "Peningkatan kesejahteraan rakyat",
            "Pemberantasan korupsi",
            "Reformasi birokrasi",
            "Pembangunan ekonomi kerakyatan"
        ],
        vision: "Mewujudkan Indonesia yang adil, makmur, sejahtera, dan bermartabat",
        mission: [
            "Memperjuangkan kesejahteraan rakyat",
            "Membangun pemerintahan yang bersih",
            "Menegakkan demokrasi dan HAM",
            "Meningkatkan pertumbuhan ekonomi"
        ],
        socialMedia: {
            website: "www.hanura.or.id",
            twitter: "@HanuraOfficial",
            instagram: "@hanura.official",
            facebook: "PartaiHanura"
        }
    },
    {
        id: 11,
        name: "Partai Garda Perubahan Indonesia (GARUDA)",
        color: "bg-gray-700",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656406064_Logo Partai Garuda square.png",
        chairman: "Ahmad Ridha Sabana",
        established: "11 Maret 2015",
        ideology: "Nasionalisme",
        headquarters: "Jakarta, Indonesia",
        description: "Partai Garuda adalah partai politik yang mengusung semangat perubahan dan pembaruan dalam politik Indonesia. Fokus utama partai ini adalah pembangunan ekonomi dan pemberdayaan generasi muda.",
        achievements: [
            "Pengembangan program kepemimpinan muda",
            "Inisiasi program ekonomi digital",
            "Pemberdayaan UMKM berbasis teknologi"
        ],
        programs: [
            "Pengembangan ekonomi digital",
            "Pemberdayaan generasi milenial",
            "Modernisasi pendidikan",
            "Inovasi teknologi"
        ],
        vision: "Mewujudkan Indonesia maju melalui inovasi dan teknologi",
        mission: [
            "Membangun ekonomi berbasis digital",
            "Memberdayakan generasi muda",
            "Mengembangkan pendidikan modern",
            "Mendorong inovasi teknologi"
        ],
        socialMedia: {
            website: "www.partaigaruda.id",
            twitter: "@PartaiGaruda",
            instagram: "@partaigaruda",
            facebook: "PartaiGaruda"
        }
    },
    {
        id: 12,
        name: "Partai Amanat Nasional (PAN)",
        color: "bg-blue-700",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656404797_LOGO PAN.png",
        chairman: "Zulkifli Hasan",
        established: "23 Agustus 1998",
        ideology: "Islam Modernis",
        headquarters: "Jl. Warung Buncit Raya No. 99, Jakarta Selatan",
        description: "PAN adalah partai politik yang mengusung nilai-nilai Islam moderat dan reformasi. Berakar dari organisasi Muhammadiyah, PAN fokus pada pembangunan demokrasi dan kesejahteraan rakyat.",
        achievements: [
            "Konsisten lolos parliamentary threshold sejak 1999",
            "Berhasil menempatkan kader di posisi strategis pemerintahan",
            "Aktif dalam gerakan reformasi nasional"
        ],
        programs: [
            "Reformasi birokrasi dan tata kelola pemerintahan",
            "Pemberdayaan ekonomi umat",
            "Pengembangan pendidikan berkualitas",
            "Penguatan nilai-nilai kebangsaan"
        ],
        vision: "Mewujudkan Indonesia yang adil, makmur, dan bermartabat",
        mission: [
            "Menegakkan demokrasi dan HAM",
            "Memperjuangkan kesejahteraan rakyat",
            "Membangun good governance",
            "Mengembangkan ekonomi kerakyatan"
        ],
        socialMedia: {
            website: "www.pan.or.id",
            twitter: "@official_PAN",
            instagram: "@pan_indonesia",
            facebook: "PartaiAmanatNasional"
        }
    },
    {
        id: 13,
        name: "Partai Bulan Bintang (PBB)",
        color: "bg-green-700",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1659262742_LOGO PBB.png",
        chairman: "Yusril Ihza Mahendra",
        established: "17 Juli 1998",
        ideology: "Islam",
        headquarters: "Jl. Kramat Raya No. 47, Jakarta Pusat",
        description: "PBB adalah partai politik yang mengusung nilai-nilai Islam dalam kehidupan bernegara. Partai ini merupakan penerus perjuangan Masyumi dan fokus pada penerapan nilai-nilai Islam dalam konteks kenegaraan modern.",
        achievements: [
            "Konsisten memperjuangkan aspirasi umat Islam",
            "Berperan aktif dalam legislasi nasional",
            "Membangun jaringan politik internasional"
        ],
        programs: [
            "Penerapan nilai-nilai Islam dalam bernegara",
            "Pemberdayaan ekonomi umat",
            "Pengembangan pendidikan Islam modern",
            "Penguatan diplomasi internasional"
        ],
        vision: "Mewujudkan Indonesia yang religius, maju, dan bermartabat",
        mission: [
            "Menegakkan syariat Islam dalam konteks kenegaraan",
            "Membangun ekonomi berbasis syariah",
            "Meningkatkan kualitas pendidikan Islam",
            "Memperkuat persatuan umat"
        ],
        socialMedia: {
            website: "www.pbb.id",
            twitter: "@PBB_Official",
            instagram: "@pbb_official",
            facebook: "PartaiBulanBintang"
        }
    },
    {
        id: 14,
        name: "Partai Demokrat",
        color: "bg-blue-800",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656229496_WhatsApp Image 2022-06-26 at 1.53.14 PM.png",
        chairman: "Agus Harimurti Yudhoyono",
        established: "9 September 2001",
        ideology: "Nasionalisme-Religius",
        headquarters: "Jl. Proklamasi No. 41, Jakarta Pusat",
        description: "Partai Demokrat adalah partai politik yang didirikan dengan semangat reformasi dan demokrasi. Dibawah kepemimpinan AHY, partai ini fokus pada pembaruan dan regenerasi kepemimpinan nasional.",
        achievements: [
            "Memenangkan Pemilu 2009 dan mengusung SBY sebagai Presiden",
            "Berhasil melakukan regenerasi kepemimpinan",
            "Memiliki basis massa yang kuat di berbagai daerah"
        ],
        programs: [
            "Penguatan demokrasi dan reformasi",
            "Pengembangan ekonomi digital",
            "Pemberdayaan generasi milenial",
            "Modernisasi pendidikan nasional"
        ],
        vision: "Mewujudkan Indonesia yang demokratis, maju, dan sejahtera",
        mission: [
            "Memperkuat sistem demokrasi",
            "Membangun ekonomi berkeadilan",
            "Meningkatkan kesejahteraan rakyat",
            "Menjaga keutuhan NKRI"
        ],
        socialMedia: {
            website: "www.demokrat.or.id",
            twitter: "@pdemokrat",
            instagram: "@pdemokrat",
            facebook: "PartaiDemokrat"
        }
    },
    {
        id: 15,
        name: "Partai Solidaritas Indonesia (PSI)",
        color: "bg-red-500",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656419883_logo-10x10.png",
        chairman: "Giring Ganesha",
        established: "16 November 2014",
        ideology: "Sosial Demokrat",
        headquarters: "Jakarta, Indonesia",
        description: "PSI adalah partai politik yang menyasar generasi milenial dan progresif. Partai ini dikenal dengan pendekatan politik yang modern dan fokus pada isu-isu kontemporer seperti kesetaraan gender dan antikorupsi.",
        achievements: [
            "Sukses membangun basis pendukung di kalangan milenial",
            "Pionir kampanye politik berbasis digital",
            "Aktif dalam isu-isu sosial progresif"
        ],
        programs: [
            "Politik bersih dan antikorupsi",
            "Kesetaraan gender dan inklusi sosial",
            "Digitalisasi pelayanan publik",
            "Pemberdayaan anak muda"
        ],
        vision: "Membangun Indonesia yang modern, adil, dan demokratis",
        mission: [
            "Memperjuangkan politik bersih",
            "Mendorong partisipasi anak muda",
            "Mewujudkan kesetaraan dan keadilan",
            "Membangun pemerintahan yang transparan"
        ],
        socialMedia: {
            website: "www.psi.id",
            twitter: "@psi_id",
            instagram: "@psi_id",
            facebook: "PSIndonesia"
        }
    },
    {
        id: 16,
        name: "Partai Persatuan Indonesia (PERINDO)",
        color: "bg-blue-500",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656144884_LOGO PARTAI PERINDO 10x10 cm (RGB).png",
        chairman: "Hary Tanoesoedibjo",
        established: "7 Februari 2015",
        ideology: "Nasionalisme",
        headquarters: "Jakarta, Indonesia",
        description: "Perindo adalah partai politik yang fokus pada pembangunan ekonomi dan kesejahteraan rakyat. Didirikan oleh pengusaha media Hary Tanoesoedibjo, partai ini memiliki jaringan media yang kuat dan program pemberdayaan UMKM.",
        achievements: [
            "Membangun jaringan UMKM nasional",
            "Program pemberdayaan ekonomi masyarakat",
            "Pengembangan media dan teknologi informasi"
        ],
        programs: [
            "Pemberdayaan UMKM",
            "Pengembangan ekonomi digital",
            "Peningkatan kesejahteraan rakyat",
            "Modernisasi pertanian"
        ],
        vision: "Mewujudkan Indonesia yang sejahtera dan berkeadilan",
        mission: [
            "Membangun ekonomi kerakyatan",
            "Mengembangkan UMKM nasional",
            "Meningkatkan kesejahteraan rakyat",
            "Memajukan teknologi dan informasi"
        ],
        socialMedia: {
            website: "www.partaiperindo.com",
            twitter: "@PartaiPerindo",
            instagram: "@partaiperindo",
            facebook: "PartaiPerindo"
        }
    },
    {
        id: 17,
        name: "Partai Persatuan Pembangunan (PPP)",
        color: "bg-green-800",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1658455987_Logo PPP.png",
        chairman: "Muhammad Mardiono",
        established: "5 Januari 1973",
        ideology: "Islam",
        headquarters: "Jl. Diponegoro No. 60, Jakarta Pusat",
        description: "PPP adalah partai politik berbasis Islam yang memiliki sejarah panjang dalam perpolitikan Indonesia. Partai ini konsisten memperjuangkan aspirasi umat Islam dan pembangunan nasional berbasis nilai-nilai Islam.",
        achievements: [
            "Konsisten memperjuangkan aspirasi umat Islam",
            "Berperan aktif dalam legislasi nasional",
            "Memiliki basis massa tradisional yang kuat"
        ],
        programs: [
            "Penguatan ekonomi syariah",
            "Pemberdayaan pesantren dan madrasah",
            "Perlindungan hak-hak umat Islam",
            "Pembangunan infrastruktur keumatan"
        ],
        vision: "Mewujudkan masyarakat yang religius dan sejahtera",
        mission: [
            "Memperjuangkan aspirasi umat Islam",
            "Membangun ekonomi berbasis syariah",
            "Meningkatkan kualitas pendidikan Islam",
            "Menjaga persatuan umat dan bangsa"
        ],
        socialMedia: {
            website: "www.ppp.or.id",
            twitter: "@DPP_PPP",
            instagram: "@dpp_ppp",
            facebook: "PartaiPersatuanPembangunan"
        }
    },
    {
        id: 24,
        name: "Partai Ummat",
        color: "bg-green-600",
        logo: "berkas-sipol/parpol/profil/gambar_parpol/1656157120_LOGO PARTAI UMMAT 10X10 CM KPU.png",
        chairman: "Ridho Rahmadi",
        established: "21 April 2021",
        ideology: "Islam",
        headquarters: "Jakarta, Indonesia",
        description: "Partai Ummat adalah partai politik baru yang mengusung nilai-nilai Islam dan persatuan umat. Partai ini fokus pada pemberdayaan ekonomi umat dan penguatan nilai-nilai keislaman dalam kehidupan berbangsa.",
        achievements: [
            "Membangun struktur partai di berbagai daerah",
            "Mengembangkan program pemberdayaan ekonomi umat",
            "Aktif dalam gerakan sosial keagamaan"
        ],
        programs: [
            "Pemberdayaan ekonomi umat",
            "Penguatan pendidikan Islam",
            "Pengembangan dakwah modern",
            "Perlindungan hak-hak umat Islam"
        ],
        vision: "Mewujudkan Indonesia yang religius dan bermartabat",
        mission: [
            "Memperkuat persatuan umat Islam",
            "Membangun ekonomi berbasis syariah",
            "Meningkatkan kualitas pendidikan Islam",
            "Mengembangkan dakwah modern"
        ],
        socialMedia: {
            website: "www.partaiummat.id",
            twitter: "@PartaiUmmat",
            instagram: "@partaiummat.id",
            facebook: "PartaiUmmat"
        }
    }
];

export default function PartyDetailPage() {
    const { partyId } = useParams();
    const navigate = useNavigate();
    
    // Mencari data partai berdasarkan ID
    const party = partiesDetail.find(p => p.id === parseInt(partyId));
    const baseUrl = "https://infopemilu.kpu.go.id/";

    if (!party) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Partai tidak ditemukan
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

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8">
                    <div className={`h-3 ${party.color}`} />
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            {/* Logo and Basic Info */}
                            <div className="w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden">
                                <img 
                                    src={`${baseUrl}${party.logo}`}
                                    alt={party.name}
                                    className="w-24 h-24 object-contain"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/96";
                                    }}
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                        {party.name}
                                    </h1>
                                    <span className={`w-4 h-4 rounded-full ${party.color}`} />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                                    <div>
                                        <p><span className="font-semibold">Ketua Umum:</span> {party.chairman}</p>
                                        <p><span className="font-semibold">Tahun Berdiri:</span> {party.established}</p>
                                        <p><span className="font-semibold">Ideologi:</span> {party.ideology}</p>
                                    </div>
                                    <div>
                                        <p><span className="font-semibold">Kantor Pusat:</span> {party.headquarters}</p>
                                        <div className="flex gap-2">
                                            <span className="font-semibold">No. Urut:</span>
                                            <span className={`px-3 py-1 rounded-full ${party.color} text-white text-sm`}>
                                                {party.id}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="prose dark:prose-invert max-w-none mb-8">
                            <h3 className="text-xl font-semibold mb-3">Tentang Partai</h3>
                            <p className="text-gray-600 dark:text-gray-300">{party.description}</p>
                        </div>

                        {/* Vision & Mission */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Visi</h3>
                                <p className="text-gray-600 dark:text-gray-300">{party.vision}</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Misi</h3>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                    {party.mission.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Programs & Achievements */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Program Unggulan</h3>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                    {party.programs.map((program, index) => (
                                        <li key={index}>{program}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Pencapaian</h3>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                    {party.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Media Sosial</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {Object.entries(party.socialMedia).map(([platform, handle]) => (
                                    <div key={platform} className="text-gray-600 dark:text-gray-300">
                                        <span className="font-semibold capitalize">{platform}:</span> {handle}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Kembali ke Daftar Partai
                    </button>
                </div>
            </div>
        </div>
    );
}