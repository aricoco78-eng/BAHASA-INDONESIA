import { Question } from '../types';
import perubahanIklimImg from '../assets/images/perubahan_iklim_indonesia_1795511181698.jpg';
import ceritaRakyatImg from '../assets/images/cerita_rakyat_nusantara_1795511182178.jpg';
import suratFormulirImg from '../assets/images/surat_formulir_meja_1795511181610.jpg';
import laporanPengamatanImg from '../assets/images/laporan_pengamatan_siswa_1795511182247.jpg';
import diskusiPresentasiImg from '../assets/images/diskusi_presentasi_kelas_1795511184386.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN A: PILIHAN GANDA (30 SOAL: ID 1 - 30)
  // ============================================================================

  // --- Lingkup 1: Menyimak dan Membaca Teks (5 PG: No. 1 - 5) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Menyimak dan Membaca Teks (Ide Pokok & Ide Pendukung)',
    difficulty: 'Mudah',
    text: 'Bacalah paragraf berikut dengan saksama!\n\n"Perubahan iklim global menyebabkan peningkatan suhu rata-rata permukaan bumi secara signifikan. Kenaikan suhu ini memicu mencairnya es di kutub dan naiknya permukaan air laut. Selain itu, pola curah hujan menjadi tidak menentu sehingga sering terjadi banjir maupun kekeringan panjang."\n\nIde pokok paragraf tersebut adalah...',
    options: [
      { id: 'A', text: 'Perubahan iklim global menyebabkan peningkatan suhu rata-rata permukaan bumi' },
      { id: 'B', text: 'Es di kutub mencair karena permukaan air laut terus naik setiap tahun' },
      { id: 'C', text: 'Kekeringan panjang sering terjadi di daerah pesisir pantai saat musim kemarau' },
      { id: 'D', text: 'Curah hujan yang tidak menentu selalu menguntungkan sektor pertanian' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ide pokok merupakan gagasan utama yang menjadi inti pembahasan seluruh paragraf dan biasanya terletak pada kalimat utama di awal paragraf (kalimat deduktif), sedangkan kalimat kedua dan ketiga berfungsi sebagai ide pendukung.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Menyimak dan Membaca Teks (Fakta dan Opini)',
    difficulty: 'Sedang',
    imageUrl: perubahanIklimImg,
    imageCaption: 'Dampak cuaca ekstrem dan curah hujan tinggi akibat krisis iklim di permukiman warga.',
    text: 'Perhatikan gambar dan cuplikan teks berita berikut!\n\n"(1) Hujan deras yang mengguyur wilayah pesisir sejak dini hari mengakibatkan banjir setinggi lutut orang dewasa. (2) Menurut warga, banjir tahun ini terasa jauh lebih parah dibandingkan tahun sebelumnya. (3) Petugas Badan Penanggulangan Bencana Daerah mencatat sebanyak 120 rumah terdampak genangan air. (4) Pemerintah sebaiknya segera membangun saluran drainase baru yang lebih lebar."\n\nKalimat yang merupakan fakta dalam cuplikan teks tersebut ditunjukkan oleh nomor...',
    options: [
      { id: 'A', text: '(1) dan (3)' },
      { id: 'B', text: '(1) dan (2)' },
      { id: 'C', text: '(2) dan (4)' },
      { id: 'D', text: '(3) dan (4)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kalimat (1) dan (3) memuat peristiwa nyata dan data terukur (banjir setinggi lutut dan 120 rumah terdampak), sehingga merupakan fakta. Kalimat (2) berisi perasaan/penilaian ("terasa jauh lebih parah") dan kalimat (4) berupa saran ("sebaiknya"), yang keduanya merupakan opini.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Menyimak dan Membaca Teks (Isi Tersurat)',
    difficulty: 'Mudah',
    text: 'Bacalah kutipan teks hasil menyimak berikut!\n\n"Salah satu upaya nyata yang dapat dilakukan pelajar untuk mengerem laju perubahan iklim adalah menghemat penggunaan energi listrik dan air di sekolah. Mematikan lampu kelas saat cahaya matahari sudah terang serta mencabut pengisi daya setelah selesai digunakan dapat mengurangi emisi karbon dari pembangkit listrik."\n\nBerdasarkan isi tersurat teks tersebut, tindakan pelajar yang dapat mengurangi emisi karbon adalah...',
    options: [
      { id: 'A', text: 'Mematikan lampu kelas saat terang dan mencabut pengisi daya yang tidak terpakai' },
      { id: 'B', text: 'Menyalakan pendingin ruangan sepanjang hari agar kelas tetap sejuk' },
      { id: 'C', text: 'Membangun pembangkit listrik tenaga uap di sekitar lingkungan sekolah' },
      { id: 'D', text: 'Menggunakan kendaraan bermotor pribadi setiap berangkat ke sekolah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Informasi tersurat adalah informasi yang tertulis secara langsung di dalam teks. Pada kalimat kedua dijelaskan secara gamblang bahwa mematikan lampu saat terang dan mencabut pengisi daya dapat mengurangi emisi karbon.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Menyimak dan Membaca Teks (Isi Tersirat)',
    difficulty: 'Sedang',
    text: 'Bacalah paragraf berikut!\n\n"Setiap sore, Raka selalu membawa tas kain lipat saat menemani ibunya berbelanja di pasar. Ia menolak kantong plastik sekali pakai yang ditawarkan pedagang. Di rumah, botol-botol bekas ia kumpulkan ke bank sampah lingkungan untuk didaur ulang."\n\nMakna tersirat yang menggambarkan kepedulian Raka terhadap lingkungan pada teks di atas adalah...',
    options: [
      { id: 'A', text: 'Raka berupaya mengurangi timbunan sampah plastik dan mendukung pelestarian alam' },
      { id: 'B', text: 'Raka tidak menyukai pedagang pasar yang menjual kantong plastik berwarna hitam' },
      { id: 'C', text: 'Raka mengumpulkan botol bekas hanya karena disuruh oleh petugas kebersihan' },
      { id: 'D', text: 'Ibu Raka melarang pedagang menggunakan timbangan plastik di pasar tradisional' },
    ],
    correctAnswer: 'A',
    explanation:
      'Isi tersirat adalah pesan atau makna tersembunyi yang disimpulkan dari perilaku atau peristiwa dalam bacaan. Membawa tas kain lipat, menolak plastik sekali pakai, dan mendaur ulang botol bekas menunjukkan kepedulian Raka untuk mengurangi sampah dan menjaga lingkungan.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Menyimak dan Membaca Teks (Ide Pendukung)',
    difficulty: 'Sedang',
    text: 'Bacalah paragraf berikut!\n\n"(1) Hutan bakau memiliki peran sangat penting dalam menjaga ekosistem pesisir dari ancaman perubahan iklim. (2) Akar-akar bakau yang rapat mampu menahan gelombang laut agar tidak mengikis daratan. (3) Selain itu, hutan bakau menyerap gas karbon dioksida dalam jumlah besar dari atmosfer. (4) Berbagai jenis ikan kecil dan kepiting juga memanfaatkan hutan bakau sebagai tempat berlindung."\n\nKalimat yang berfungsi sebagai ide pendukung pada paragraf di atas ditunjukkan oleh nomor...',
    options: [
      { id: 'A', text: '(2), (3), dan (4)' },
      { id: 'B', text: '(1), (2), dan (3)' },
      { id: 'C', text: '(1) dan (4) saja' },
      { id: 'D', text: '(1) saja' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kalimat (1) merupakan kalimat utama yang memuat ide pokok tentang pentingnya hutan bakau. Kalimat (2), (3), dan (4) menjelaskan rincian fungsi hutan bakau sehingga berperan sebagai ide pendukung.',
  },

  // --- Lingkup 2: Cerita Rakyat dan Teks Fiksi (5 PG: No. 6 - 10) ---
  {
    id: 6,
    type: 'pg',
    topic: 'Cerita Rakyat dan Teks Fiksi (Tokoh & Penokohan)',
    difficulty: 'Mudah',
    imageUrl: ceritaRakyatImg,
    imageCaption: 'Ilustrasi cerita rakyat Nusantara tentang seorang anak dan tetua bijak di tepi danau.',
    text: 'Bacalah penggalan cerita rakyat berikut sambil memperhatikan gambar!\n\n"Di tepi Danau Maninjau, tinggallah seorang pemuda bernama Bintang bersama Kakek Darma. Setiap pagi sebelum melaut, Bintang selalu mendengarkan nasihat kakeknya dengan penuh hormat. Saat perahu nelayan lain kehabisan bekal di tengah danau, Bintang tanpa ragu membagikan ikan tangkapannya meski hasil yang ia peroleh tidak banyak."\n\nWatak tokoh Bintang dalam penggalan cerita tersebut adalah...',
    options: [
      { id: 'A', text: 'Patuh kepada orang tua dan dermawan kepada sesama' },
      { id: 'B', text: 'Sombong dan suka memamerkan hasil tangkapan ikan' },
      { id: 'C', text: 'Pemalas dan sering membantah nasihat orang yang lebih tua' },
      { id: 'D', text: 'Kikir serta enggan menolong nelayan yang sedang kesulitan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Penokohan Bintang digambarkan melalui tindakannya yang mendengarkan nasihat kakek dengan penuh hormat (patuh) dan membagikan ikan tangkapannya kepada nelayan yang kehabisan bekal (dermawan).',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Cerita Rakyat dan Teks Fiksi (Latar dan Alur)',
    difficulty: 'Mudah',
    text: 'Bacalah kutipan teks fiksi berikut!\n\n"Matahari mulai condong ke barat ketika Rani tiba di balai desa. Angin sore berembus sejuk menggoyangkan daun bambu di halaman. Dengan langkah tergesa-gesa, Rani menyerahkan buku cerita yang sempat ia pinjam kepada penjaga perpustakaan desa agar tidak terlambat."\n\nLatar waktu dan latar tempat yang tepat sesuai kutipan cerita di atas adalah...',
    options: [
      { id: 'A', text: 'Sore hari di balai desa (perpustakaan desa)' },
      { id: 'B', text: 'Pagi hari di ruang kelas sekolah dasar' },
      { id: 'C', text: 'Malam hari di halaman rumah nenek' },
      { id: 'D', text: 'Siang hari di tengah pasar tradisional' },
    ],
    correctAnswer: 'A',
    explanation:
      'Frasa "Matahari mulai condong ke barat" dan "Angin sore" menunjukkan latar waktu sore hari, sedangkan "balai desa" dan "perpustakaan desa" menunjukkan latar tempat.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Cerita Rakyat dan Teks Fiksi (Sudut Pandang)',
    difficulty: 'Sedang',
    text: 'Bacalah penggalan cerita berikut!\n\n"Aku memandang keluar jendela kereta dengan hati berdebar. Ini adalah perjalanan pertamaku mengunjungi rumah paman di Bali. Sepanjang jalan, aku melihat hamparan sawah hijau yang bertingkat-tingkat sangat indah."\n\nSudut pandang yang digunakan pengarang dalam kutipan cerita tersebut adalah...',
    options: [
      { id: 'A', text: 'Sudut pandang orang pertama pelaku utama' },
      { id: 'B', text: 'Sudut pandang orang ketiga serba tahu' },
      { id: 'C', text: 'Sudut pandang orang ketiga pengamat' },
      { id: 'D', text: 'Sudut pandang campuran tanpa tokoh' },
    ],
    correctAnswer: 'A',
    explanation:
      'Penggunaan kata ganti "Aku" dan "-ku" yang menceritakan pengalaman dan perasaan dirinya sendiri menandakan sudut pandang orang pertama pelaku utama.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Cerita Rakyat dan Teks Fiksi (Amanat dan Tema)',
    difficulty: 'Sedang',
    text: 'Bacalah penggalan fabel berikut!\n\n"Kerbau yang bertubuh besar sering mengejek Kancil yang bertubuh mungil. Suatu hari, kaki Kerbau terperosok ke dalam kubangan lumpur yang dalam. Kerbau berteriak meminta tolong, tetapi tidak ada hewan besar yang berani mendekat. Akhirnya, Kancil menggunakan kecerdikannya dengan mengaitkan ranting pohon dan memanggil burung-burung untuk membantu menarik tali rotan hingga Kerbau selamat."\n\nAmanat yang terkandung dalam cerita tersebut adalah...',
    options: [
      { id: 'A', text: 'Jangan meremehkan orang lain yang terlihat lemah karena setiap makhluk memiliki kelebihan masing-masing' },
      { id: 'B', text: 'Hewan bertubuh besar selalu menjadi pemimpin yang paling berkuasa di hutan' },
      { id: 'C', text: 'Kita boleh membalas ejekan teman dengan tidak menolongnya saat kesusahan' },
      { id: 'D', text: 'Kecerdikan hanya dimiliki oleh hewan kecil yang tinggal di pinggir sungai' },
    ],
    correctAnswer: 'A',
    explanation:
      'Amanat merupakan pesan moral cerita. Peristiwa Kancil mungil yang justru menyelamatkan Kerbau besar mengajarkan agar tidak meremehkan orang lain dan selalu menghargai kelebihan setiap makhluk.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Cerita Rakyat dan Teks Fiksi (Membandingkan & Merangkum Cerita)',
    difficulty: 'Sukar',
    text: 'Perhatikan dua ringkasan cerita berikut!\n\nCerita 1: "Malin Kundang menjadi saudagar kaya setelah merantau, tetapi ia mengingkari ibu kandungnya yang miskin hingga akhirnya dikutuk menjadi batu."\nCerita 2: "Si Lancang melupakan ibunya setelah memiliki tujuh kapal dagang megah, lalu kapalnya karam diterjang badai setelah ibunya berdoa kepada Tuhan."\n\nPersamaan unsur intrinsik kedua cerita rakyat tersebut adalah...',
    options: [
      { id: 'A', text: 'Keduanya bertema kedurhakaan anak terhadap orang tua dengan amanat agar selalu berbakti kepada ibu' },
      { id: 'B', text: 'Keduanya berlatar tempat di pegunungan bersalju dengan tokoh utama seorang petani' },
      { id: 'C', text: 'Keduanya menggunakan sudut pandang orang pertama dengan akhir cerita yang bahagia' },
      { id: 'D', text: 'Keduanya menceritakan perjuangan dua sahabat dalam membangun kerajaan baru' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ketika membandingkan dua cerita rakyat (Malin Kundang dan Si Lancang), keduanya memiliki tema dan amanat yang sama, yaitu anak yang durhaka setelah sukses merantau dan pesan moral untuk selalu berbakti kepada orang tua.',
  },

  // --- Lingkup 3: Surat Resmi, Surat Pribadi, dan Formulir (5 PG: No. 11 - 15) ---
  {
    id: 11,
    type: 'pg',
    topic: 'Surat Resmi, Surat Pribadi, dan Formulir',
    difficulty: 'Mudah',
    imageUrl: suratFormulirImg,
    imageCaption: 'Amplop surat resmi dan lembar formulir dokumen pendaftaran kegiatan sekolah.',
    text: 'Perhatikan gambar amplop surat resmi dan formulir di atas! Salah satu ciri utama yang membedakan surat resmi dengan surat pribadi adalah adanya...',
    options: [
      { id: 'A', text: 'Kepala surat (kop surat), nomor surat, dan penggunaan ragam bahasa baku' },
      { id: 'B', text: 'Sapaan akrab berupa panggilan sayang dan cerita pengalaman liburan keluarga' },
      { id: 'C', text: 'Penggunaan bahasa gaul serta stiker lucu di bagian penutup surat' },
      { id: 'D', text: 'Alamat pengirim yang ditulis menggunakan huruf tidak beraturan tanpa tanggal' },
    ],
    correctAnswer: 'A',
    explanation:
      'Surat resmi dikeluarkan oleh lembaga/instansi sehingga wajib memiliki kepala surat (kop), nomor surat, lampiran/perihal, cap instansi, dan menggunakan bahasa Indonesia baku serta efektif.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Surat Resmi, Surat Pribadi, dan Formulir',
    difficulty: 'Mudah',
    text: 'Perhatikan kutipan penutup surat pribadi berikut!\n\n"Sekian dulu surat dariku ya, Nisa. Kapan-kapan kalau liburan sekolah tiba, mainlah ke rumahku di Jembrana. Aku tunggu balasan suratmu. Salam manis untuk kedua orang tuamu."\n\nBagian yang ditunjukkan oleh kutipan tersebut dalam struktur surat pribadi adalah...',
    options: [
      { id: 'A', text: 'Kalimat penutup surat pribadi' },
      { id: 'B', text: 'Kepala surat atau kop lembaga' },
      { id: 'C', text: 'Salam pembuka surat dinas' },
      { id: 'D', text: 'Lampiran dan tembusan surat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ungkapan "Sekian dulu surat dariku...", harapan balasan, dan titip salam di bagian akhir isi surat merupakan ciri khas kalimat penutup pada surat pribadi.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Surat Resmi, Surat Pribadi, dan Formulir',
    difficulty: 'Sedang',
    text: 'Bacalah cuplikan surat resmi berikut!\n\n"Dengan hormat,\nSehubungan dengan akan diadakannya Lomba Kebersihan Kelas dalam rangka Hari Lingkungan Hidup, kami mengundang Bapak/Ibu Wali Kelas VI untuk hadir dalam rapat persiapan pada:\nhari, tanggal : Kamis, 12 November 2026\nwaktu : pukul 09.00 WITA – selesai\ntempat : Ruang Guru SD N 1 Dangintukadaya\n...\nAtas perhatian dan kehadiran Bapak/Ibu, kami ucapkan terima kasih."\n\nKalimat pembuka dan isi surat resmi di atas bertujuan untuk...',
    options: [
      { id: 'A', text: 'Mengundang wali kelas VI menghadiri rapat persiapan Lomba Kebersihan Kelas' },
      { id: 'B', text: 'Memberitahukan pembatalan kegiatan Hari Lingkungan Hidup di sekolah' },
      { id: 'C', text: 'Menanyakan kabar keluarga wali kelas VI selama masa libur semester' },
      { id: 'D', text: 'Meminta siswa membawa peralatan berkebun dari rumah masing-masing' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dalam isi surat resmi tertulis jelas tujuan undangan rapat persiapan Lomba Kebersihan Kelas pada hari Kamis, 12 November 2026 di Ruang Guru.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Surat Resmi, Surat Pribadi, dan Formulir',
    difficulty: 'Sedang',
    text: 'Perhatikan data diri berikut ini!\n\nNama: Ni Putu Lestari\nTempat/Tgl. Lahir: Jembrana, 14 Mei 2014\nAlamat: Jalan Merdeka No. 18, Dangintukadaya\nHobi: Membaca dan Menulis Cerpen\n\nJika data tersebut diisikan ke dalam formulir pendaftaran Anggota Perpustakaan Daerah, penulisan isian pada kolom "Tempat, Tanggal Lahir" yang paling tepat adalah...',
    options: [
      { id: 'A', text: 'Jembrana, 14 Mei 2014' },
      { id: 'B', text: 'Jalan Merdeka No. 18' },
      { id: 'C', text: 'Ni Putu Lestari' },
      { id: 'D', text: 'Membaca dan Menulis' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pengisian formulir harus jujur, lengkap, dan sesuai dengan keterangan setiap kolom. Kolom "Tempat, Tanggal Lahir" diisi dengan kota kelahiran diikuti koma dan tanggal lahir lengkap: Jembrana, 14 Mei 2014.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Surat Resmi, Surat Pribadi, dan Formulir',
    difficulty: 'Sedang',
    text: 'Saat mengirim surat elektronik (surel/e-mail) resmi kepada guru untuk mengumpulkan tugas sekolah, hal penting yang harus diisi pada kolom "Subjek" (Subject) adalah...',
    options: [
      { id: 'A', text: 'Judul singkat dan jelas mengenai tujuan surel, misalnya "Tugas Teks Eksplanasi - Putu Kelas 6"' },
      { id: 'B', text: 'Seluruh isi teks eksplanasi yang panjang agar guru langsung membacanya di kolom subjek' },
      { id: 'C', text: 'Nama kata sandi akun surat elektronik milik pengirim agar mudah dibuka' },
      { id: 'D', text: 'Deretan tanda seru dan emoji tanpa mencantumkan nama pengirim maupun kelas' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kolom subjek pada surat elektronik berfungsi seperti perihal pada surat cetak, yaitu merangkum maksud surel secara singkat, jelas, dan sopan agar penerima mudah mengidentifikasi pengirim dan isi pesan.',
  },

  // --- Lingkup 4: Teks Eksplanasi dan Laporan (5 PG: No. 16 - 20) ---
  {
    id: 16,
    type: 'pg',
    topic: 'Teks Eksplanasi dan Laporan',
    difficulty: 'Mudah',
    text: 'Bacalah penggalan teks eksplanasi berikut!\n\n"Pelangi terjadi karena proses pembiasan cahaya matahari oleh butir-butir air hujan di atmosfer. Ketika cahaya matahari melewati tetesan air hujan, cahaya tersebut dibelokkan sehingga terurai menjadi tujuh spektrum warna yang tampak indah di langit."\n\nStruktur teks eksplanasi yang ditunjukkan oleh paragraf di atas merupakan bagian...',
    options: [
      { id: 'A', text: 'Deretan penjelas (rangkaian proses sebab-akibat terjadinya peristiwa)' },
      { id: 'B', text: 'Orientasi tokoh dan penyelesaian konflik cerita' },
      { id: 'C', text: 'Salam penutup dan tanda tangan penulis laporan' },
      { id: 'D', text: 'Dialog percakapan antara dua tokoh pengamat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Struktur teks eksplanasi terdiri atas pernyataan umum, deretan penjelas, dan interpretasi/penutup. Paragraf di atas menguraikan proses sebab-akibat ("karena", "sehingga") terbentuknya pelangi yang merupakan ciri bagian deretan penjelas.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Teks Eksplanasi dan Laporan',
    difficulty: 'Sedang',
    text: 'Berikut ini yang merupakan ciri utama dari teks eksplanasi ilmiah adalah...',
    options: [
      { id: 'A', text: 'Memuat informasi faktual tentang proses terjadinya fenomena alam atau sosial secara logis dan objektif' },
      { id: 'B', text: 'Berisi kisah khayalan pengarang tentang tokoh hewan yang dapat berbicara' },
      { id: 'C', text: 'Ditulis untuk membujuk pembaca agar membeli suatu produk dagangan tertentu' },
      { id: 'D', text: 'Menggunakan kata ganti aku dan bahasa percakapan sehari-hari yang santai' },
    ],
    correctAnswer: 'A',
    explanation:
      'Teks eksplanasi bertujuan menjelaskan proses "mengapa" dan "bagaimana" suatu fenomena alam, sosial, atau budaya terjadi berdasarkan fakta ilmiah yang objektif.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Teks Eksplanasi dan Laporan (Laporan Pengamatan)',
    difficulty: 'Mudah',
    imageUrl: laporanPengamatanImg,
    imageCaption: 'Siswa kelas 6 mengamati tanaman berbunga dan kupu-kupu di taman sekolah sambil mencatat data.',
    text: 'Perhatikan gambar kegiatan siswa di taman sekolah di atas! Jika mereka menyusun Laporan Hasil Pengamatan yang objektif, kalimat laporan yang paling tepat adalah...',
    options: [
      { id: 'A', text: 'Pada pukul 08.30 WITA, seekor kupu-kupu berwarna jingga hinggap pada bunga soka merah untuk mengisap nektar selama sekitar dua menit.' },
      { id: 'B', text: 'Kupu-kupu itu terlihat sangat bahagia dan tersenyum manis karena suka bermain bersama kami di taman sekolah.' },
      { id: 'C', text: 'Taman sekolah kami adalah taman paling indah di seluruh dunia sehingga semua bunga pasti ingin tumbuh di sana.' },
      { id: 'D', text: 'Seandainya kupu-kupu bisa berbicara, pasti ia akan berterima kasih kepada siswa kelas enam.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Laporan hasil pengamatan harus disusun secara objektif berdasarkan fakta yang benar-benar terlihat dan terukur (waktu, jenis serangga, warna, nama tumbuhan, perilaku), bukan berdasarkan khayalan atau perasaan subjektif.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Teks Eksplanasi dan Laporan (Laporan Perjalanan)',
    difficulty: 'Sedang',
    text: 'Bacalah penggalan teks berikut!\n\n"Pada hari Sabtu, 10 Oktober 2026, siswa kelas VI melakukan kunjungan edukasi ke Museum Manusia Purba Gilimanuk. Kami berangkat dari sekolah pukul 07.30 WITA dan tiba di lokasi satu jam kemudian. Di dalam museum, pemandu menjelaskan berbagai temuan artefak gerabah dan kerangka manusia prasejarah."\n\nBerdasarkan isi dan bahasanya, penggalan teks tersebut termasuk jenis...',
    options: [
      { id: 'A', text: 'Laporan perjalanan atau kunjungan edukasi' },
      { id: 'B', text: 'Surat undangan rapat orang tua siswa' },
      { id: 'C', text: 'Cerita rakyat legenda asal-usul daerah' },
      { id: 'D', text: 'Teks prosedur cara membuat gerabah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Teks tersebut menguraikan waktu keberangkatan, tujuan tempat wisata edukasi, serta kegiatan nyata yang dilakukan di lokasi secara runtut dan objektif, yang merupakan ciri laporan perjalanan/kunjungan.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Teks Eksplanasi dan Laporan',
    difficulty: 'Sukar',
    text: 'Perhatikan kalimat rumpang dalam teks eksplanasi sosial berikut!\n\n"Kemacetan lalu lintas di jalan raya kota besar sering terjadi pada jam berangkat sekolah dan kerja. ... jumlah kendaraan pribadi terus meningkat setiap tahun tanpa diimbangi pelebaran jalan, antrean panjang kendaraan pun tidak dapat dihindari."\n\nKonjungsi (kata hubung) kausalitas yang paling tepat untuk melengkapi bagian rumpang tersebut adalah...',
    options: [
      { id: 'A', text: 'Oleh karena' },
      { id: 'B', text: 'Meskipun demikian' },
      { id: 'C', text: 'Padahal sebenarnya' },
      { id: 'D', text: 'Sedangkan jika' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kalimat kedua menyatakan hubungan sebab-akibat (kausalitas) antara meningkatnya jumlah kendaraan pribadi dan terjadinya antrean panjang kendaraan. Konjungsi kausalitas yang tepat di awal kalimat adalah "Oleh karena".',
  },

  // --- Lingkup 5: Kosakata, Kalimat, dan Ejaan (5 PG: No. 21 - 25) ---
  {
    id: 21,
    type: 'pg',
    topic: 'Kosakata, Kalimat, dan Ejaan (Kata Baku)',
    difficulty: 'Mudah',
    text: 'Dalam menyusun laporan ilmiah maupun surat resmi, penulis wajib menggunakan kata baku sesuai Kamus Besar Bahasa Indonesia (KBBI). Kelompok kata berikut yang seluruhnya merupakan kata baku adalah...',
    options: [
      { id: 'A', text: 'aktif, apotek, nasihat, praktik' },
      { id: 'B', text: 'aktip, apotik, nasehat, praktek' },
      { id: 'C', text: 'aktif, apotik, nasihat, praktek' },
      { id: 'D', text: 'aktip, apotek, nasehat, praktik' },
    ],
    correctAnswer: 'A',
    explanation:
      'Menurut KBBI dan EYD V, bentuk baku dari kata-kata tersebut adalah "aktif" (bukan aktip), "apotek" (bukan apotik), "nasihat" (bukan nasehat), dan "praktik" (bukan praktek).',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Kosakata, Kalimat, dan Ejaan (Sinonim dan Antonim)',
    difficulty: 'Mudah',
    text: 'Bacalah kalimat berikut!\n\n"Para sukarelawan bekerja secara **efektif** membersihkan saluran air sebelum musim hujan tiba."\n\nSinonim (persamaan kata) dan antonim (lawan kata) yang paling tepat untuk kata **efektif** sesuai konteks kalimat di atas adalah...',
    options: [
      { id: 'A', text: 'Sinonim: berhasil guna; Antonim: sia-sia / tidak efisien' },
      { id: 'B', text: 'Sinonim: lambat; Antonim: bersemangat' },
      { id: 'C', text: 'Sinonim: berantakan; Antonim: teratur' },
      { id: 'D', text: 'Sinonim: mahal; Antonim: gratis' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kata "efektif" bermakna dapat membawa hasil atau berhasil guna (manjur/tepat sasaran), sehingga antonimnya adalah sia-sia atau tidak berhasil guna.',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Kosakata, Kalimat, dan Ejaan (Majas)',
    difficulty: 'Sedang',
    text: 'Bacalah kalimat berikut!\n\n"Angin malam berbisik lembut membelai dedaunan kelapa di tepi Pantai Perancak."\n\nMajas (gaya bahasa) yang terkandung dalam kalimat tersebut adalah...',
    options: [
      { id: 'A', text: 'Majas personifikasi' },
      { id: 'B', text: 'Majas hiperbola' },
      { id: 'C', text: 'Majas asosiasi' },
      { id: 'D', text: 'Majas ironi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Majas personifikasi adalah gaya bahasa yang mengumpamakan benda mati atau gejala alam ("angin malam") seolah-olah memiliki sifat atau perilaku manusia ("berbisik lembut membelai").',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Kosakata, Kalimat, dan Ejaan (Kalimat Langsung & Tidak Langsung)',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat langsung berikut!\n\nIbu guru berkata kepada siswa, "Jangan lupa membawa kamus bahasa Indonesia besok pagi!"\n\nPenulisan perubahan kalimat tersebut menjadi kalimat tidak langsung yang benar adalah...',
    options: [
      { id: 'A', text: 'Ibu guru mengingatkan siswa agar tidak lupa membawa kamus bahasa Indonesia keesokan paginya.' },
      { id: 'B', text: 'Ibu guru berkata kepada siswa, "agar tidak lupa membawa kamus besok pagi."' },
      { id: 'C', text: '"Jangan lupa membawa kamus bahasa Indonesia besok pagi," kata ibu guru kepada siswa.' },
      { id: 'D', text: 'Siswa berkata kepada ibu guru bahwa jangan lupa membawa kamus besok pagi.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kalimat tidak langsung tidak menggunakan tanda petik ganda ("..."), mengalami penyesuaian kata hubung ("agar"), dan penyesuaian keterangan waktu ("besok pagi" menjadi "keesokan paginya").',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Kosakata, Kalimat, dan Ejaan (Huruf Kapital & Tanda Baca)',
    difficulty: 'Sedang',
    text: 'Penulisan huruf kapital dan tanda baca yang paling tepat sesuai Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) terdapat pada kalimat...',
    options: [
      { id: 'A', text: 'Pada hari Senin, siswa SD N 1 Dangintukadaya mengunjungi Museum Bali di Denpasar.' },
      { id: 'B', text: 'Pada Hari senin, Siswa sd n 1 dangintukadaya mengunjungi museum Bali di denpasar.' },
      { id: 'C', text: 'Pada hari senin siswa SD N 1 Dangintukadaya mengunjungi Museum bali di Denpasar?' },
      { id: 'D', text: 'Pada hari Senin, siswa SD N 1 Dangintukadaya mengunjungi museum bali di Denpasar!' },
    ],
    correctAnswer: 'A',
    explanation:
      'Huruf kapital dipakai pada awal kalimat, nama hari ("Senin"), nama lembaga resmi ("SD N 1 Dangintukadaya"), dan nama tempat/geografis ("Museum Bali", "Denpasar"), serta diakhiri tanda titik karena merupakan kalimat berita.',
  },

  // --- Lingkup 6: Berbicara dan Mempresentasikan (5 PG: No. 26 - 30) ---
  {
    id: 26,
    type: 'pg',
    topic: 'Berbicara dan Mempresentasikan',
    difficulty: 'Mudah',
    imageUrl: diskusiPresentasiImg,
    imageCaption: 'Siswa kelas 6 sedang mempresentasikan hasil kerja kelompok di depan kelas sambil berdiskusi.',
    text: 'Perhatikan gambar suasana diskusi dan presentasi kelas di atas! Sikap santun yang harus ditunjukkan oleh peserta diskusi ketika ingin mengajukan pertanyaan atau tanggapan kepada penyaji adalah...',
    options: [
      { id: 'A', text: 'Mengacungkan tangan terlebih dahulu, menunggu dipersilakan, dan berbicara dengan bahasa yang sopan' },
      { id: 'B', text: 'Langsung memotong pembicaraan penyaji dengan suara keras agar cepat diperhatikan' },
      { id: 'C', text: 'Menertawakan pendapat penyaji yang berbeda dengan jawaban kelompoknya sendiri' },
      { id: 'D', text: 'Berbicara berbisik-bisik dengan teman sebangku sehingga mengganggu jalannya presentasi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dalam diskusi dan presentasi kelas, etika berbicara yang baik adalah mengacungkan tangan, menunggu giliran dipersilakan oleh moderator/penyaji, dan menyampaikan pertanyaan secara santun serta jelas.',
  },
  {
    id: 27,
    type: 'pg',
    topic: 'Berbicara dan Mempresentasikan',
    difficulty: 'Sedang',
    text: 'Dalam diskusi kelas bertema "Pengurangan Sampah Plastik di Sekolah", seorang teman berpendapat bahwa kantin sebaiknya berhenti memakai gelas plastik. Jika kamu kurang setuju sebagian karena khawatir gelas kaca mudah pecah, cara menyampaikan pendapat yang paling santun dan solutif adalah...',
    options: [
      { id: 'A', text: 'Saya setuju dengan niat mengurangi sampah plastik, tetapi gelas kaca berisiko pecah. Bagaimana jika siswa didorong membawa botol minum sendiri?' },
      { id: 'B', text: 'Pendapatmu tidak masuk akal sama sekali karena kamu tidak memikirkan bahaya pecahan kaca di kantin!' },
      { id: 'C', text: 'Saya menolak usulan itu mentah-mentah karena saya suka membeli minuman kemasan plastik setiap hari.' },
      { id: 'D', text: 'Tidak usah berdiskusi tentang sampah karena itu bukan tanggung jawab siswa di kelas enam.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Menyampaikan pendapat atau sanggahan dalam diskusi harus menghargai gagasan teman terlebih dahulu, menyertakan alasan logis, serta menawarkan jalan keluar (solusi) dengan bahasa santun.',
  },
  {
    id: 28,
    type: 'pg',
    topic: 'Berbicara dan Mempresentasikan',
    difficulty: 'Mudah',
    text: 'Urutan langkah yang paling runtut saat melakukan presentasi sederhana di depan kelas adalah...',
    options: [
      { id: 'A', text: 'Salam pembuka dan perkenalan – penyampaian materi inti – sesi tanya jawab – simpulan dan salam penutup' },
      { id: 'B', text: 'Salam penutup – tanya jawab – membaca teks secara acak – perkenalan diri' },
      { id: 'C', text: 'Sesi tanya jawab langsung – pembagian hadiah – membacakan daftar pustaka saja' },
      { id: 'D', text: 'Diam menatap papan tulis – langsung duduk kembali ke bangku tanpa menyapa pendengar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Presentasi yang baik tersusun sistematis mulai dari pembukaan (salam, perkenalan, tujuan), isi (materi inti disertai contoh/media), diskusi tanya jawab, hingga simpulan dan penutup.',
  },
  {
    id: 29,
    type: 'pg',
    topic: 'Berbicara dan Mempresentasikan',
    difficulty: 'Sedang',
    text: 'Agar audiens (teman sekelas) mudah memahami isi presentasi tentang "Proses Terjadinya Efek Rumah Kaca", sikap dan teknik penyampaian penyaji yang paling efektif adalah...',
    options: [
      { id: 'A', text: 'Menggunakan intonasi suara yang jelas, kontak mata dengan pendengar, serta menunjukkan bagan/gambar pendukung' },
      { id: 'B', text: 'Membaca seluruh isi buku paket halaman demi halaman dengan suara pelan dan menunduk terus' },
      { id: 'C', text: 'Berbicara secepat mungkin agar presentasi selesai dalam waktu kurang dari satu menit' },
      { id: 'D', text: 'Memunggungi teman sekelas sepanjang waktu sambil menunjuk tulisan kecil di papan tulis' },
    ],
    correctAnswer: 'A',
    explanation:
      'Keberhasilan presentasi ditunjang oleh artikulasi dan intonasi yang jelas, kontak mata yang baik dengan audiens, sikap percaya diri, serta pemanfaatan media visual (bagan/gambar) agar konsep mudah dipahami.',
  },
  {
    id: 30,
    type: 'pg',
    topic: 'Berbicara dan Mempresentasikan',
    difficulty: 'Sukar',
    text: 'Bacalah kutipan hasil diskusi kelompok berikut!\n\n"Kelompok Melati menyimpulkan bahwa penanaman tanaman apotek hidup di halaman sekolah dapat memperindah lingkungan sekaligus menjadi sarana belajar siswa mengenal khasiat tumbuhan."\n\nKalimat tanggapan yang tepat dan mendukung simpulan hasil diskusi tersebut adalah...',
    options: [
      { id: 'A', text: 'Kami mendukung gagasan Kelompok Melati. Agar tanaman terawat, sebaiknya disusun jadwal piket penyiraman oleh setiap kelas secara bergilir.' },
      { id: 'B', text: 'Kelompok Melati hanya meniru ide dari internet tanpa memikirkan siapa yang akan menyiram tanaman saat libur.' },
      { id: 'C', text: 'Halaman sekolah sebaiknya diaspal seluruhnya supaya sepatu siswa tidak pernah kotor terkena tanah.' },
      { id: 'D', text: 'Apotek hidup tidak perlu ditanam karena semua obat sudah tersedia di toko modern.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tanggapan yang baik bersifat konstruktif, relevan dengan topik simpulan diskusi, menggunakan kalimat santun, dan memberikan saran tindak lanjut yang realistis (jadwal piket penyiraman).',
  },

  // ============================================================================
  // BAGIAN B: PILIHAN GANDA KOMPLEKS / PGK (5 SOAL: ID 31 - 35, MASING-MASING 3 OPSI)
  // ============================================================================
  {
    id: 31,
    type: 'pgk',
    topic: 'Menyimak dan Membaca Teks (Perubahan Iklim & Fakta-Opini)',
    difficulty: 'Sedang',
    imageUrl: perubahanIklimImg,
    imageCaption: 'Genangan banjir akibat intensitas hujan ekstrem di kawasan permukiman penduduk.',
    text: 'Perhatikan gambar dampak perubahan iklim di atas dan cermati tiga pernyataan berikut! Pilihlah SEMUA pernyataan yang tergolong **FAKTA** dan sesuai dengan pemahaman isi teks informasi perubahan iklim (bisa lebih dari satu jawaban benar):',
    options: [
      { id: 'A', text: 'Pembakaran bahan bakar fosil menghasilkan gas rumah kaca yang meningkatkan suhu rata-rata atmosfer bumi' },
      { id: 'B', text: 'Naiknya suhu bumi mempercepat mencairnya lapisan es di wilayah kutub sehingga permukaan air laut meningkat' },
      { id: 'C', text: 'Menurut pendapat sebagian anak, musim hujan jauh lebih membosankan daripada musim kemarau yang cerah' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A dan B merupakan fakta ilmiah yang dapat dibuktikan secara objektif mengenai penyebab dan dampak perubahan iklim. Pernyataan C merupakan opini subjektif ("menurut pendapat sebagian anak... lebih membosankan").',
  },
  {
    id: 32,
    type: 'pgk',
    topic: 'Cerita Rakyat dan Teks Fiksi (Unsur Intrinsik)',
    difficulty: 'Sedang',
    imageUrl: ceritaRakyatImg,
    imageCaption: 'Ilustrasi latar tempat dan tokoh dalam cerita rakyat Nusantara.',
    text: 'Perhatikan ilustrasi cerita rakyat di atas! Manakah dari ketiga pernyataan berikut yang benar mengenai unsur intrinsik dalam cerita rakyat dan teks fiksi? (Pilih semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Tokoh dan penokohan menggambarkan pelaku cerita beserta watak atau sifatnya, baik protagonis maupun antagonis' },
      { id: 'B', text: 'Latar meliputi keterangan tempat, waktu, dan suasana terjadinya peristiwa di dalam cerita' },
      { id: 'C', text: 'Amanat adalah daftar harga buku cetak serta alamat percetakan yang tertulis pada sampul belakang buku' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Unsur intrinsik cerita meliputi tema, tokoh dan penokohan (A), latar tempat/waktu/suasana (B), alur, sudut pandang, serta amanat (pesan moral). Pernyataan C salah karena amanat adalah pesan moral pengarang kepada pembaca.',
  },
  {
    id: 33,
    type: 'pgk',
    topic: 'Surat Resmi, Surat Pribadi, dan Formulir',
    difficulty: 'Sedang',
    imageUrl: suratFormulirImg,
    imageCaption: 'Kelengkapan dokumen surat resmi dan formulir isian pada meja kerja.',
    text: 'Perhatikan gambar surat dan formulir di atas! Manakah pernyataan yang tepat mengenai aturan penulisan surat resmi, surat pribadi, dan pengisian formulir? (Pilih semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Surat resmi wajib mencantumkan kepala surat (kop instansi), nomor surat, serta menggunakan bahasa Indonesia yang baku' },
      { id: 'B', text: 'Surat pribadi dikirimkan kepada keluarga atau sahabat untuk keperluan pribadi dan tidak memerlukan nomor surat resmi' },
      { id: 'C', text: 'Saat mengisi formulir pendaftaran, setiap kolom boleh diisi dengan nama panggilan palsu dan data yang tidak sesuai identitas asli' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A dan B benar sesuai kaidah surat-menyurat. Pernyataan C salah karena pengisian formulir atau dokumen harus menggunakan data diri yang benar, lengkap, dan dapat dipertanggungjawabkan.',
  },
  {
    id: 34,
    type: 'pgk',
    topic: 'Teks Eksplanasi dan Laporan Pengamatan',
    difficulty: 'Sukar',
    imageUrl: laporanPengamatanImg,
    imageCaption: 'Kegiatan pengamatan langsung objek alam di taman sekolah oleh peserta didik.',
    text: 'Berdasarkan gambar kegiatan pengamatan di atas dan materi Teks Eksplanasi serta Laporan, pilihlah SEMUA pernyataan yang tepat! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Laporan hasil pengamatan harus ditulis secara objektif berdasarkan data nyata yang ditemukan di lokasi pengamatan' },
      { id: 'B', text: 'Teks eksplanasi menjelaskan proses terjadinya peristiwa alam atau sosial menggunakan hubungan sebab-akibat yang logis' },
      { id: 'C', text: 'Laporan perjalanan tidak perlu mencantumkan waktu, tempat tujuan, maupun rincian kegiatan yang telah dilaksanakan' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A dan B benar. Pernyataan C salah karena laporan perjalanan wajib memuat waktu, tempat tujuan, dan uraian kegiatan yang dialami secara sistematis.',
  },
  {
    id: 35,
    type: 'pgk',
    topic: 'Kosakata, Kalimat, Ejaan & Presentasi',
    difficulty: 'Sukar',
    text: 'Cermati ketiga pernyataan berikut terkait kaidah kebahasaan Bahasa Indonesia dan keterampilan presentasi! Pilihlah SEMUA pernyataan yang benar:',
    options: [
      { id: 'A', text: 'Kalimat langsung ditandai dengan penggunaan tanda petik ganda ("...") untuk mengutip ucapan pembicara secara persis' },
      { id: 'B', text: 'Majas hiperbola merupakan gaya bahasa yang menyatakan sesuatu secara berlebihan untuk memberi penekanan makna' },
      { id: 'C', text: 'Dalam diskusi kelompok, peserta berhak memaksakan pendapat pribadinya tanpa mendengarkan alasan teman lain' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A benar (kalimat langsung memakai tanda petik ganda) dan pernyataan B benar (hiperbola bermakna melebih-lebihkan, misalnya "suaranya menggelegar membelah angkasa"). Pernyataan C salah karena bertentangan dengan etika diskusi yang demokratis dan santun.',
  },

  // ============================================================================
  // BAGIAN C: PILIHAN GANDA KOMPLEKS KATEGORI (5 SOAL: ID 36 - 40, BENAR/SALAH 3 DESKRIPSI)
  // ============================================================================
  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Menyimak dan Membaca Teks (Ide Pokok, Fakta/Opini, Perubahan Iklim)',
    difficulty: 'Sedang',
    text: 'Cermati informasi tentang keterampilan menyimak dan membaca teks berikut. Tentukan apakah setiap deskripsi pernyataan di bawah ini bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Ide pokok adalah gagasan utama yang menjiwai seluruh paragraf, sedangkan ide pendukung berfungsi menjelaskan atau merinci ide pokok tersebut.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kalimat yang berisi angka hasil pengukuran nyata seperti "Suhu udara di Denpasar hari ini mencapai 33°C" termasuk kalimat opini.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Memahami isi tersirat berarti mampu menarik kesimpulan makna atau pesan yang tidak tertulis secara langsung dalam teks bacaan.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. BENAR: Ide pokok adalah gagasan inti dan ide pendukung adalah penjelasnya. 2. SALAH: Data suhu 33°C adalah fakta terukur, bukan opini. 3. BENAR: Isi tersirat disimpulkan dari petunjuk makna dalam teks.',
  },
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Cerita Rakyat dan Teks Fiksi (Unsur Intrinsik & Merangkum)',
    difficulty: 'Sedang',
    text: 'Evaluasilah pernyataan-pernyataan mengenai unsur intrinsik cerita rakyat dan teks fiksi berikut dengan memilih BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Alur maju adalah rangkaian peristiwa dalam cerita yang diceritakan secara urut dari awal hingga akhir penyelesaian.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Penggunaan kata ganti "ia", "dia", atau nama tokoh oleh pengarang menandakan cerita menggunakan sudut pandang orang pertama.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Merangkum cerita berarti menuliskan kembali inti sari peristiwa penting cerita secara lebih singkat tanpa mengubah alur dan maknanya.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. BENAR: Alur maju bergerak kronologis dari awal sampai akhir. 2. SALAH: Kata ganti "ia", "dia", atau nama tokoh merupakan ciri sudut pandang orang ketiga, bukan orang pertama ("aku/saya"). 3. BENAR: Ringkasan mempertahankan inti dan urutan cerita dalam bentuk lebih ringkas.',
  },
  {
    id: 38,
    type: 'pgk_kategori',
    topic: 'Surat Resmi, Surat Pribadi, dan Formulir',
    difficulty: 'Sedang',
    imageUrl: suratFormulirImg,
    imageCaption: 'Ilustrasi surat resmi dan lembar formulir dokumen sekolah.',
    text: 'Perhatikan gambar surat dan formulir di atas! Tentukan nilai BENAR atau SALAH untuk setiap deskripsi pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Surat resmi dari sekolah kepada orang tua siswa wajib memiliki kop surat, tanggal surat, perihal, serta tanda tangan kepala sekolah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Surat pribadi yang ditulis untuk sahabat karib boleh menggunakan sapaan akrab seperti "Hai, Sahabatku!" dan tidak wajib mencantumkan nomor surat.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Formulir pendaftaran lomba tidak memerlukan tanda tangan peserta maupun kejelasan identitas karena hanya berfungsi sebagai hiasan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: Surat resmi sekolah memiliki kelengkapan administrasi resmi termasuk kop, nomor, dan pengesahan. 2. BENAR: Surat pribadi bersifat personal dan tidak memakai nomor surat dinas. 3. SALAH: Formulir wajib mencantumkan data identitas akurat dan pengesahan (tanda tangan).',
  },
  {
    id: 39,
    type: 'pgk_kategori',
    topic: 'Teks Eksplanasi dan Laporan',
    difficulty: 'Sedang',
    imageUrl: laporanPengamatanImg,
    imageCaption: 'Siswa melakukan pengamatan lapangan untuk menyusun laporan ilmiah.',
    text: 'Perhatikan gambar kegiatan pengamatan di atas! Tentukan apakah ketiga pernyataan tentang teks eksplanasi dan laporan berikut BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Teks eksplanasi disusun untuk menjelaskan proses terjadinya fenomena alam atau sosial seperti daur air, gempa bumi, dan kemiskinan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Salah satu bagian struktur teks eksplanasi adalah pernyataan umum yang memperkenalkan topik fenomena yang akan dijelaskan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Laporan hasil pengamatan boleh ditambah-tambahi dengan cerita fiksi rekaan agar terlihat lebih dramatis dan menghibur pembaca.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: Teks eksplanasi membahas proses peristiwa alam maupun sosial. 2. BENAR: Struktur teks eksplanasi diawali pernyataan umum. 3. SALAH: Laporan pengamatan wajib bersifat objektif dan faktual tanpa rekayasa fiksi.',
  },
  {
    id: 40,
    type: 'pgk_kategori',
    topic: 'Kosakata, Kalimat, Ejaan & Presentasi',
    difficulty: 'Sukar',
    imageUrl: diskusiPresentasiImg,
    imageCaption: 'Presentasi dan diskusi interaktif peserta didik kelas 6 di dalam kelas.',
    text: 'Perhatikan gambar kegiatan presentasi di atas dan cermati kaidah kebahasaan serta etika berbicara berikut! Pilihlah BENAR atau SALAH untuk masing-masing pernyataan:',
    statements: [
      {
        id: 's1',
        text: 'Penulisan kalimat "Kemarin saya dan Sari pergi ke Pantai Kuta." sudah tepat menggunakan huruf kapital pada awal kalimat, nama orang, dan nama tempat geografis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kata "sistim", "resiko", dan "kwalitas" merupakan bentuk kata baku yang dianjurkan dalam penulisan makalah presentasi resmi.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Ketika melakukan presentasi sederhana, penyaji sebaiknya menyiapkan poin-poin penting materi serta bersedia menerima masukan peserta diskusi dengan lapang dada.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. BENAR: Huruf kapital digunakan pada awal kalimat ("Kemarin"), nama orang ("Sari"), dan nama tempat ("Pantai Kuta"). 2. SALAH: Bentuk bakunya menurut KBBI adalah "sistem", "risiko", dan "kualitas". 3. BENAR: Persiapan poin penting dan sikap terbuka menerima masukan membuat presentasi berjalan efektif dan santun.',
  },
];
