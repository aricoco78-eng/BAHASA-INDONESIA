import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran Bahasa Indonesia
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 40 butir soal Bahasa Indonesia (30 PG, 5 PGK, 5 PGK Kategori)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu menentukan ide pokok dari teks informasi tentang perubahan iklim.',
    indikatorSoal:
      'Disajikan sebuah paragraf deduktif tentang dampak perubahan iklim, peserta didik dapat menentukan ide pokok paragraf dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu membedakan kalimat fakta dan opini dalam teks berita kontekstual.',
    indikatorSoal:
      'Disajikan gambar dampak cuaca ekstrem dan empat kalimat bernomor, peserta didik dapat menentukan kalimat yang berupa fakta.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Menyimak',
    tujuanPembelajaran:
      'Peserta didik mampu memahami informasi tersurat dari teks yang disimak mengenai mitigasi perubahan iklim.',
    indikatorSoal:
      'Disajikan kutipan teks tentang penghematan energi di sekolah, peserta didik dapat mengidentifikasi tindakan pengurangan emisi karbon secara tersurat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu menyimpulkan makna atau isi tersirat dari teks bacaan.',
    indikatorSoal:
      'Disajikan paragraf tentang kebiasaan tokoh mengurangi sampah plastik, peserta didik dapat menyimpulkan isi tersirat teks dengan tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu mengidentifikasi kalimat ide pendukung yang memperkuat gagasan utama paragraf.',
    indikatorSoal:
      'Disajikan paragraf bernomor tentang fungsi hutan bakau, peserta didik dapat menentukan kalimat-kalimat yang berperan sebagai ide pendukung.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu mengidentifikasi tokoh dan penokohan dalam cerita rakyat Nusantara.',
    indikatorSoal:
      'Disajikan ilustrasi dan penggalan cerita rakyat, peserta didik dapat menentukan watak tokoh utama berdasarkan tindakannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu mengidentifikasi latar waktu dan latar tempat dalam teks fiksi.',
    indikatorSoal:
      'Disajikan kutipan teks fiksi singkat, peserta didik dapat menentukan latar waktu dan latar tempat cerita dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu mengenali sudut pandang penceritaan dalam teks fiksi.',
    indikatorSoal:
      'Disajikan penggalan cerita menggunakan kata ganti "aku", peserta didik dapat menentukan sudut pandang orang pertama pelaku utama.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu menyimpulkan amanat atau pesan moral dari cerita fiksi/fabel.',
    indikatorSoal:
      'Disajikan penggalan fabel tentang Kancil dan Kerbau, peserta didik dapat menentukan amanat cerita secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu membandingkan dua cerita rakyat berdasarkan unsur intrinsik dan ringkasan isi.',
    indikatorSoal:
      'Disajikan dua ringkasan cerita rakyat (Malin Kundang dan Si Lancang), peserta didik dapat menganalisis persamaan tema dan amanat kedua cerita.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu membedakan ciri-ciri surat resmi dan surat pribadi.',
    indikatorSoal:
      'Disajikan gambar amplop surat resmi dan formulir, peserta didik dapat mengidentifikasi unsur pembeda utama surat resmi dengan surat pribadi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu mengenali bagian-bagian struktur surat pribadi.',
    indikatorSoal:
      'Disajikan kutipan akhir surat pribadi, peserta didik dapat menentukan bagian kalimat penutup surat pribadi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu memahami maksud dan informasi utama dalam isi surat resmi.',
    indikatorSoal:
      'Disajikan cuplikan surat resmi undangan rapat sekolah, peserta didik dapat menentukan tujuan pengiriman surat tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu mengisi formulir atau dokumen sederhana sesuai data diri secara benar.',
    indikatorSoal:
      'Disajikan data identitas siswa, peserta didik dapat menuliskan isian kolom Tempat, Tanggal Lahir pada formulir pendaftaran secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu menerapkan etika penulisan surat elektronik (surel) resmi kepada guru.',
    indikatorSoal:
      'Disajikan konteks pengiriman tugas melalui surel, peserta didik dapat menentukan penulisan kolom Subjek surel yang tepat dan sopan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu mengidentifikasi bagian struktur teks eksplanasi proses peristiwa alam.',
    indikatorSoal:
      'Disajikan penggalan teks eksplanasi tentang terjadinya pelangi, peserta didik dapat menentukan bagian deretan penjelas.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu menjelaskan karakteristik teks eksplanasi ilmiah.',
    indikatorSoal:
      'Peserta didik dapat menentukan ciri utama teks eksplanasi yang memuat proses fenomena alam atau sosial secara faktual dan objektif.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu menyusun kalimat laporan hasil pengamatan yang objektif berdasarkan fakta.',
    indikatorSoal:
      'Disajikan gambar siswa mengamati taman sekolah, peserta didik dapat memilih kalimat laporan hasil pengamatan yang objektif dan terukur.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu mengenali teks laporan perjalanan atau kunjungan edukasi.',
    indikatorSoal:
      'Disajikan penggalan teks tentang kunjungan siswa ke museum, peserta didik dapat mengidentifikasi jenis teks laporan perjalanan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu melengkapi kalimat sebab-akibat dalam teks eksplanasi sosial.',
    indikatorSoal:
      'Disajikan paragraf rumpang teks eksplanasi kemacetan lalu lintas, peserta didik dapat memilih konjungsi kausalitas yang tepat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu menggunakan kosakata baku sesuai kaidah KBBI.',
    indikatorSoal:
      'Disajikan empat pilihan kelompok kosakata, peserta didik dapat memilih kelompok kata yang seluruhnya merupakan kata baku.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu menentukan sinonim dan antonim kosakata dalam konteks kalimat.',
    indikatorSoal:
      'Disajikan kalimat berisi kata "efektif", peserta didik dapat menentukan pasangan sinonim dan antonim kata tersebut dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu mengidentifikasi jenis majas dalam kalimat sastra.',
    indikatorSoal:
      'Disajikan kalimat bermajas ("Angin malam berbisik lembut membelai dedaunan..."), peserta didik dapat menentukan majas personifikasi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu mengubah kalimat langsung menjadi kalimat tidak langsung sesuai ejaan.',
    indikatorSoal:
      'Disajikan satu kalimat langsung ucapan guru, peserta didik dapat memilih bentuk kalimat tidak langsung yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu menerapkan penggunaan huruf kapital dan tanda baca sesuai EYD V.',
    indikatorSoal:
      'Disajikan empat variasi penulisan kalimat, peserta didik dapat menentukan kalimat dengan penggunaan huruf kapital dan tanda baca yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Berbicara dan Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik mampu menerapkan etika berbicara yang santun dalam kegiatan diskusi dan presentasi kelas.',
    indikatorSoal:
      'Disajikan gambar diskusi kelas, peserta didik dapat menentukan sikap santun saat hendak mengajukan pertanyaan kepada penyaji.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Berbicara dan Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik mampu menyampaikan pendapat atau sanggahan secara santun dan solutif dalam diskusi.',
    indikatorSoal:
      'Disajikan permasalahan diskusi kantin sekolah, peserta didik dapat memilih kalimat sanggahan yang santun disertai alasan logis dan solusi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Berbicara dan Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik mampu menyusun urutan langkah pelaksanaan presentasi sederhana secara sistematis.',
    indikatorSoal:
      'Peserta didik dapat mengurutkan tahapan presentasi kelas dari salam pembuka hingga simpulan dan penutup.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Berbicara dan Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik mampu menggunakan teknik komunikasi lisan dan media visual secara efektif saat presentasi.',
    indikatorSoal:
      'Disajikan konteks presentasi materi efek rumah kaca, peserta didik dapat menentukan sikap dan teknik penyampaian penyaji yang efektif.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Berbicara dan Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik mampu memberikan tanggapan konstruktif terhadap hasil diskusi kelompok lain.',
    indikatorSoal:
      'Disajikan kutipan simpulan hasil diskusi kelompok, peserta didik dapat memilih kalimat tanggapan yang mendukung dan solutif.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu menganalisis fakta ilmiah dan opini dalam teks isu perubahan iklim.',
    indikatorSoal:
      'Disajikan gambar dampak banjir iklim dan tiga opsi pernyataan, peserta didik dapat memilih seluruh pernyataan yang tergolong fakta ilmiah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu mengidentifikasi unsur intrinsik cerita rakyat dan teks fiksi secara menyeluruh.',
    indikatorSoal:
      'Disajikan ilustrasi cerita rakyat dan tiga opsi pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar tentang unsur intrinsik cerita.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu mengevaluasi perbedaan surat resmi, surat pribadi, dan prinsip pengisian formulir.',
    indikatorSoal:
      'Disajikan gambar amplop surat dan formulir beserta tiga opsi pernyataan, peserta didik dapat memilih seluruh pernyataan yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu menganalisis karakteristik teks eksplanasi dan penulisan laporan objektif.',
    indikatorSoal:
      'Disajikan gambar pengamatan siswa dan tiga opsi pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar mengenai laporan dan eksplanasi.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Berbicara dan Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik mampu mengevaluasi kaidah kalimat langsung, majas, dan etika berdiskusi.',
    indikatorSoal:
      'Disajikan tiga opsi pernyataan tentang tanda baca kalimat langsung, majas hiperbola, dan etika diskusi, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Menyimak',
    tujuanPembelajaran:
      'Peserta didik mampu menilai ketepatan konsep ide pokok, fakta/opini, dan makna tersirat dalam teks.',
    indikatorSoal:
      'Disajikan tiga deskripsi pernyataan tentang ide pokok, fakta terukur, dan makna tersirat, peserta didik dapat menentukan nilai Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran:
      'Peserta didik mampu menelaah konsep alur, sudut pandang, dan teknik merangkum teks cerita fiksi.',
    indikatorSoal:
      'Disajikan tiga deskripsi pernyataan tentang alur maju, sudut pandang, dan ringkasan cerita, peserta didik dapat menentukan nilai Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  38: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu memverifikasi kelengkapan unsur surat resmi, surat pribadi, dan formulir pendaftaran.',
    indikatorSoal:
      'Disajikan gambar surat/formulir dan tiga pernyataan deskriptif, peserta didik dapat menentukan nilai Benar atau Salah secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  39: {
    elemen: 'Menulis',
    tujuanPembelajaran:
      'Peserta didik mampu mengevaluasi struktur teks eksplanasi dan sifat objektif laporan pengamatan.',
    indikatorSoal:
      'Disajikan gambar kegiatan pengamatan taman dan tiga pernyataan, peserta didik dapat menentukan nilai Benar atau Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  40: {
    elemen: 'Berbicara dan Mempresentasikan',
    tujuanPembelajaran:
      'Peserta didik mampu menguji ketepatan penerapan ejaan huruf kapital, kata baku, dan sikap presentasi.',
    indikatorSoal:
      'Disajikan gambar presentasi kelas dan tiga pernyataan kebahasaan serta sikap diskusi, peserta didik dapat menentukan nilai Benar atau Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan keterampilan berbahasa pada materi ${q.topic} dalam mata pelajaran Bahasa Indonesia.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('berbicara') || t.includes('presentasi') || t.includes('diskusi')) {
    return 'Berbicara dan Mempresentasikan';
  }
  if (t.includes('surat') || t.includes('formulir') || t.includes('laporan') || t.includes('ejaan') || t.includes('kapital')) {
    return 'Menulis';
  }
  if (t.includes('menyimak')) {
    return 'Menyimak';
  }
  return 'Membaca dan Memirsa';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
