import {
  WorkExperience,
  FeaturedProject,
  EvaluationScenario,
  SkillCategory,
  EducationItem,
  CertificationItem,
  TechnicalResponsibilityCard,
  TechnicalCaseStudy,
  QaMethodologyStep,
  InstitutionalMetricItem,
} from '../types/portfolio.ts';

export const PERSONAL_INFO = {
  fullName: 'Muchammad Yusuf Iwang Pradana',
  shortName: 'Yusuf Iwang Pradana',
  preferredTitle: {
    id: 'AI Engineer & Indonesian AI Evaluation Specialist',
    en: 'AI Engineer & Indonesian AI Evaluation Specialist',
  },
  degree: 'Sarjana Komputer (S.Kom)',
  field: 'Teknik Informatika (Informatics Engineering)',
  university: 'Universitas Muhammadiyah Malang',
  location: 'Lamongan, Jawa Timur, Indonesia',
  phone: '0889 8906 5312',
  displayPhone: '+62 889 8906 5312',
  email: 'iwangdana1@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/iwangdana7',
  githubUrl: 'https://github.com/iwangdana7',
  photoUrl: '/assets/aistudio/Pic_Porto_c698d005.jpeg',
  cvPdfUrl: '/assets/aistudio/CV_Muchammad_Yusuf_Iwang_Pradana_ATS_AI_new_59252c0a.pdf',
  currentCompany: 'HEVORA Technologies',
  currentRole: 'AI Engineer',
  currentProject: 'Institutional Market Intelligence & Terminal Signals',
  currentProjectUrl: 'https://hevora.app/',
  summary: {
    id: 'AI Engineer di HEVORA Technologies dan AI Evaluation Specialist dengan latar belakang Sarjana Teknik Informatika (S.Kom). Berpengalaman dalam pengujian dan validasi model AI mutakhir (Gemini & Speech-to-Speech), rekayasa prompt berbasis batasan data ketat, mitigasi halusinasi, serta rekayasa sistem data dan dokumentasi terstruktur. Memiliki rekam jejak performa terbukti dengan rata-rata skor QA 3.13 pada 72 asesmen di Outlier AI (melampaui target 2.00).',
    en: 'AI Engineer at HEVORA Technologies and AI Evaluation Specialist with a Bachelor of Informatics Engineering (S.Kom). Experienced in evaluating state-of-the-art AI systems (Gemini & Speech-to-Speech), strict constraint-driven prompt engineering, hallucination mitigation, and robust data system architecture. Proven track record with a 3.13 QA average across 72 ratings at Outlier AI (exceeding the 2.00 benchmark target).',
  },
  confidentialityNotice: {
    id: 'Pemberitahuan Kerahasiaan: Arsitektur model internal, prompt berpemilik, sinyal terminal institusional, dan data sensitif klien dilindungi di bawah perjanjian NDA dan tidak ditampilkan dalam portofolio publik ini.',
    en: 'Confidentiality Notice: Internal model architectures, proprietary prompts, unreleased terminal signals, and institutional financial datasets are protected under NDA and are omitted from this public portfolio.',
  },
};

export const PORTFOLIO_CONFIG = {
  identity: {
    name: PERSONAL_INFO.fullName,
    preferredName: PERSONAL_INFO.shortName,
    title: 'AI Engineer | LLM Evaluation | Financial Market Intelligence',
    supportingStatement:
      'Building and evaluating AI-powered market intelligence systems with a focus on data grounding, analytical reliability, and risk-aware AI behavior.',
    company: 'HEVORA Technologies',
    role: 'AI Engineer',
    employmentStart: 'September 25, 2026',
    status: 'Present',
    project: 'Institutional Market Intelligence & Terminal Signals',
    projectRefUrl: 'https://hevora.app/',
    modelAssociated: 'Gemini',
    photoUrl: PERSONAL_INFO.photoUrl,
    cvPdfUrl: PERSONAL_INFO.cvPdfUrl,
    location: PERSONAL_INFO.location,
  },
  contact: {
    email: PERSONAL_INFO.email,
    linkedinUrl: PERSONAL_INFO.linkedinUrl,
    githubUrl: PERSONAL_INFO.githubUrl,
    displayPhone: PERSONAL_INFO.displayPhone,
    phoneRaw: PERSONAL_INFO.phone,
    confidentialityNotice: PERSONAL_INFO.confidentialityNotice.en,
  },
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'hevora-technologies',
    company: 'HEVORA Technologies',
    role: {
      id: 'AI Engineer',
      en: 'AI Engineer',
    },
    location: 'Remote',
    period: {
      id: '25 September 2026 – Sekarang',
      en: 'September 25, 2026 – Present',
    },
    badge: 'Peran Saat Ini (Current Role)',
    category: 'ai-finance',
    projectRefUrl: 'https://hevora.app/',
    summary: {
      id: 'Berkontribusi pada evaluasi dan perancangan sistem kecerdasan pasar institusional bertenaga model Gemini di HEVORA Technologies, berfokus pada keandalan analitis, mitigasi halusinasi, dan validasi data keuangan.',
      en: 'Contributing to the evaluation and engineering of an institutional market intelligence platform powered by Gemini models at HEVORA Technologies, focusing on analytical reliability, hallucination mitigation, and financial data grounding.',
    },
    bulletPoints: [
      {
        id: 'Mendukung perancangan skenario pengujian komprehensif untuk mengevaluasi penalaran model bahasa besar (Gemini) pada data pasar keuangan dan makroekonomi.',
        en: 'Supporting the formulation of comprehensive evaluation scenarios to assess Gemini LLM reasoning under fast-moving financial and macroeconomic data feeds.',
      },
      {
        id: 'Berkontribusi dalam optimasi prompt sistem dengan batasan ketat guna menjamin keluaran terstruktur (JSON/tabel) dan bebas ekstrapolasi spekulatif.',
        en: 'Contributing to system prompt engineering with strict negative constraints to enforce structured schema compliance and suppress speculative extrapolations.',
      },
      {
        id: 'Melakukan audit grounding data berkala: memverifikasi bahwa seluruh angka makroekonomi (Actual vs Forecast vs Previous) dan konsensus sesuai sumber data resmi.',
        en: 'Conducting data grounding audits to verify that all macroeconomic metrics (Actual vs Forecast vs Previous) and market prints map directly to verifiable input feeds.',
      },
      {
        id: 'Mengidentifikasi dan mencatat cacat penalaran AI, anomali stempel waktu data basi, serta potensi halusinasi ke dalam repositori penjaminan mutu.',
        en: 'Logging AI reasoning defects, stale-data handling anomalies, and factual hallucinations into structured quality assurance tracking repositories.',
      },
    ],
    skills: [
      'Gemini Model Evaluation',
      'Financial Market Intelligence',
      'Prompt Engineering & Constraints',
      'Data Grounding & Attribution',
      'Hallucination Mitigation',
      'Risk Controls & QA',
    ],
  },
  {
    id: 'outlier-ai',
    company: 'Outlier AI',
    role: {
      id: 'AI Speech & Conversation Evaluator',
      en: 'AI Speech & Conversation Evaluator',
    },
    location: 'Remote / Global Platform',
    period: {
      id: 'Februari 2026 – Agustus 2026',
      en: 'February 2026 – August 2026',
    },
    badge: 'High Performance AI QA',
    category: 'ai-eval',
    summary: {
      id: 'Menilai respons AI Speech-to-Speech dan conversational AI berbahasa Indonesia untuk kualitas linguistik, kealamian tuturan, nada kelancaran, konteks, faktualitas, dan konsistensi percakapan bertahap.',
      en: 'Evaluated Indonesian Speech-to-Speech and conversational AI responses for linguistic quality, naturalness, fluency tone, context, factuality and multi-turn conversational consistency.',
    },
    bulletPoints: [
      {
        id: 'Menilai respons AI Speech-to-Speech dan percakapan berbahasa Indonesia untuk kualitas linguistik, kealamian tuturan, intonasi prosodi, konteks, dan faktualitas.',
        en: 'Evaluated Indonesian Speech-to-Speech and conversational AI responses for linguistic quality, naturalness, prosody tone, context, and factuality.',
      },
      {
        id: 'Menyusun asesmen komparatif model AI yang didukung observasi presisi pada level giliran bicara (turn-level) dan stempel waktu audio (timestamp-level).',
        en: 'Provided comparative model assessments supported by precise turn-level and timestamp-level audio observations.',
      },
      {
        id: 'Mempertahankan rata-rata skor QA 3.13 pada 72 penilaian, melampaui target kualitas 2.00 (performa di atas standar benchmark).',
        en: 'Maintained an average QA score of 3.13 across 72 ratings, exceeding the 2.00 quality target by +56.5%.',
      },
      {
        id: 'Memberikan umpan balik terstruktur berbasis rubrik ketat untuk memitigasi halusinasi dan meningkatkan keselarasan kultural bahasa Indonesia.',
        en: 'Provided rigorous rubric-based feedback to mitigate acoustic and textual hallucinations and refine Indonesian cultural alignment.',
      },
    ],
    skills: [
      'Speech-to-Speech (S2S) AI Evaluation',
      'Indonesian Linguistic Nuance',
      'Prosody & Cadence Analysis',
      'Turn-level Error Annotation',
      'Quality Benchmark Scoring',
    ],
  },
  {
    id: 'koperasi-desa',
    company: 'Koperasi Desa Merah Putih Karanggeneng',
    role: {
      id: 'Secretary (Administration and Data System)',
      en: 'Secretary (Administration and Data System)',
    },
    location: 'Lamongan, Jawa Timur',
    period: {
      id: 'Mei 2025 – Sekarang',
      en: 'May 2025 – Present',
    },
    badge: 'Enterprise Data Integrity',
    category: 'data-admin',
    summary: {
      id: 'Mengelola dokumentasi digital dan arsip administrasi untuk menjamin integritas serta aksesibilitas data. Mengelola database anggota dan menstandarisasi dokumentasi sistem.',
      en: 'Oversee digital documentation and administrative records to ensure data integrity and accessibility. Manage and maintain membership databases to streamline administrative reporting processes.',
    },
    bulletPoints: [
      {
        id: 'Mengawasi dokumentasi digital dan rekam data administratif guna memastikan integritas data dan aksesibilitas cepat bagi pengurus dan anggota.',
        en: 'Oversee digital documentation and administrative records to ensure data integrity and fast accessibility for administrators and members.',
      },
      {
        id: 'Mengelola dan memperbarui database anggota secara berkala untuk mengefisienkan proses pelaporan administratif.',
        en: 'Manage and maintain membership databases systematically to streamline recurring administrative reporting workflows.',
      },
      {
        id: 'Menstandarisasi dokumentasi sistem terstruktur, menyederhanakan alur proses administratif dan meningkatkan efisiensi operasional sebesar 30%.',
        en: 'Standardized structured system documentation, streamlining administrative workflows and improving operational turnaround efficiency by 30%.',
      },
    ],
    skills: [
      'Database Management',
      'Data Integrity & Archiving',
      'System Standardization',
      'Operational Efficiency',
      'Administrative Systems',
    ],
  },
  {
    id: 'lkp-jendela-otomotif',
    company: 'LKP Jendela Otomotif',
    role: {
      id: 'Automotive Instructor (Digital Learning Support)',
      en: 'Automotive Instructor (Digital Learning Support)',
    },
    location: 'Indonesia',
    period: {
      id: 'Januari 2024 – Desember 2025',
      en: 'January 2024 – December 2025',
    },
    badge: 'EdTech & Learning Modules',
    category: 'lms-instruction',
    summary: {
      id: 'Memimpin pengembangan modul pembelajaran digital pelatihan otomotif dan menyediakan dukungan teknis komprehensif untuk media belajar dan platform LMS.',
      en: 'Lead the development and management of digital learning modules for automotive training. Provided comprehensive technical support for system-based learning media and LMS platforms.',
    },
    bulletPoints: [
      {
        id: 'Memimpin perancangan dan pengelolaan modul pembelajaran digital interaktif, meningkatkan keterlibatan peserta didik sebesar 30%.',
        en: 'Led the development and management of interactive digital learning modules, increasing student engagement by 30%.',
      },
      {
        id: 'Menyediakan dukungan teknis menyeluruh untuk media belajar berbasis sistem dan manajemen platform LMS.',
        en: 'Provided comprehensive technical support for system-based learning media and LMS platform operations.',
      },
      {
        id: 'Menyusun dokumentasi sistem dan panduan pengguna (user guide) untuk materi pelatihan teknis instruksional.',
        en: 'Authored technical system documentation and instructional user guides for vocational training programs.',
      },
    ],
    skills: [
      'LMS Platforms',
      'Interactive Digital Modules',
      'Instructional Design',
      'Technical User Guides',
      'Training Systems',
    ],
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'hevora-intelligence',
    title: {
      id: 'HEVORA: Evaluasi Kecerdasan Pasar Finansial Institusional (Gemini AI)',
      en: 'HEVORA: Institutional Market Intelligence & Risk-Aware LLM Evaluation',
    },
    category: 'AI Engineering & Financial QA',
    badge: 'Proyek Aktif (Active)',
    overview: {
      id: 'Framework pengujian dan evaluasi AI untuk platform kecerdasan pasar institusional di HEVORA Technologies berbasis model Gemini. Menitikberatkan pada grounding data makroekonomi, konsistensi stempel waktu, penanganan data tidak lengkap/basi, dan pencegahan halusinasi spekulatif.',
      en: 'Evaluation and testing framework for an institutional market intelligence platform at HEVORA Technologies powered by Gemini models. Focuses on macroeconomic data grounding, timestamp integrity, stale-data protocols, and strict hallucination mitigation.',
    },
    metrics: [
      {
        label: { id: 'Model AI', en: 'Core Model' },
        value: 'Google Gemini',
      },
      {
        label: { id: 'Fokus Pengujian', en: 'QA Focus' },
        value: 'Data Grounding & Risk Controls',
      },
      {
        label: { id: 'Status Proyek', en: 'Project Status' },
        value: 'Active Engineering & QA',
      },
      {
        label: { id: 'Attribution Rate', en: 'Attribution Rate' },
        value: '100% Context Grounded',
      },
    ],
    tags: [
      'Gemini AI',
      'Financial Intelligence',
      'Prompt Engineering',
      'Hallucination Mitigation',
      'Schema Enforcement',
    ],
    impact: {
      id: 'Memastikan keluaran analitis AI memenuhi standar kehati-hatian institusional: tidak memunculkan target harga tanpa sumber, membedakan deviasi konsensus secara tepat, dan menyatakan ketidakpastian secara transparan saat data pasar tidak lengkap.',
      en: 'Enforces institutional prudence: prevents unsupported price extrapolations, decouples consensus deviations from sequential trends, and mandates explicit uncertainty flags when market feeds are incomplete.',
    },
    methodology: {
      id: 'Uji skenario deterministik, simulasi regresi historis, validasi payload JSON terstruktur, dan audit konsistensi antara data rilis resmi dan narasi output.',
      en: 'Deterministic test scenarios, historical replay simulations, structured JSON schema validation, and sentence-level factual consistency audits against official data releases.',
    },
    link: 'https://hevora.app/',
  },
  {
    id: 'speech-to-speech-eval',
    title: {
      id: 'Benchmark & Audit Kualitas AI Suara (Speech-to-Speech) Bahasa Indonesia',
      en: 'Indonesian Speech-to-Speech (S2S) AI Benchmark & Acoustic Audit',
    },
    category: 'AI Evaluation & Benchmarking',
    badge: 'Outlier AI Benchmark',
    overview: {
      id: 'Framework evaluasi multidimensi berskala 72 asesmen turn-level pada model Speech-to-Speech berbahasa Indonesia. Menguji kealamian akustik, irama prosodi, akurasi semantik kultural lokal, serta deteksi halusinasi auditori.',
      en: 'Multi-dimensional evaluation framework across 72 turn-level assessments on Indonesian Speech-to-Speech models. Evaluated acoustic naturalness, prosodic cadence, local cultural semantics, and auditory hallucination detection.',
    },
    metrics: [
      {
        label: { id: 'Skor QA Rata-rata', en: 'Average QA Score' },
        value: '3.13 / 4.00',
      },
      {
        label: { id: 'Target Kualitas', en: 'Quality Target' },
        value: '2.00 / 4.00',
      },
      {
        label: { id: 'Margin Target', en: 'Margin Above Target' },
        value: '+56.5%',
      },
      {
        label: { id: 'Jumlah Asesmen', en: 'Total Ratings' },
        value: '72 Skenario Turn-Level',
      },
    ],
    tags: [
      'Speech-to-Speech (S2S)',
      'Indonesian NLP',
      'Prosody & Cadence',
      'Turn-level Annotation',
      'Rubric-based QA',
    ],
    impact: {
      id: 'Berhasil mempertahankan skor QA di atas standar operasional global (3.13 vs 2.00 target), memberikan catatan kritis pada artefak suara, pemenggalan suku kata bahasa daerah, dan konsistensi konteks multi-turn.',
      en: 'Consistently surpassed the global operational standard (3.13 achieved vs 2.00 target), supplying critical turn- and timestamp-level audits on acoustic artifacts, syllable pacing, and multi-turn conversational memory.',
    },
    methodology: {
      id: 'Inspeksi stempel waktu audio per fonem, perbandingan model A/B secara buta (blind comparison), serta pembobotan metrik kealamian, prosodi, faktualitas, dan kepatuhan instruksi.',
      en: 'Phoneme-level audio timestamp inspections, blind pairwise model comparisons (Model A vs Model B), and weighted composite scoring across naturalness, prosody, factuality, and prompt adherence.',
    },
  },
  {
    id: 'koperasi-data-system',
    title: {
      id: 'Digitalisasi Sistem Kearsipan & Manajemen Data Anggota Koperasi',
      en: 'Rural Enterprise Membership & Administrative Data Infrastructure',
    },
    category: 'Data Systems & Architecture',
    badge: 'Operational Impact',
    overview: {
      id: 'Restrukturisasi dan standarisasi sistem dokumentasi digital serta basis data anggota untuk Koperasi Desa Merah Putih Karanggeneng guna menjamin transparansi, integritas rekam jejak, dan kecepatan pelaporan berkala.',
      en: 'Restructuring and standardization of digital documentation systems and member databases for Koperasi Desa Merah Putih Karanggeneng to ensure transparency, data integrity, and rapid reporting turnaround.',
    },
    metrics: [
      {
        label: { id: 'Peningkatan Efisiensi', en: 'Efficiency Gain' },
        value: '+30%',
      },
      {
        label: { id: 'Status Integritas Data', en: 'Data Integrity' },
        value: '100% Terarsip Terstruktur',
      },
      {
        label: { id: 'Waktu Akses Data', en: 'Retrieval Speed' },
        value: '< 2 Menit',
      },
    ],
    tags: [
      'Database Management',
      'Data Integrity',
      'Workflow Optimization',
      'System Architecture',
    ],
    impact: {
      id: 'Memangkas waktu pencarian data dan penyusunan laporan operasional hingga 30%, menghilangkan duplikasi data anggota, dan memfasilitasi audit keuangan berkala secara transparan.',
      en: 'Cut search and reporting time by 30%, eliminated member data duplicates, and enabled auditable administrative record tracking.',
    },
    methodology: {
      id: 'Audit skema data awal, pembersihan data (data cleansing), implementasi penamaan dokumen standar terenkripsi, serta pembuatan SOP alur pencatatan baru.',
      en: 'Initial data schema audit, data cleansing, structured digital indexing protocols, and creation of standardized operating procedures (SOP).',
    },
  },
  {
    id: 'automotive-digital-lms',
    title: {
      id: 'Pengembangan Modul Pelatihan Digital & Infrastruktur LMS Interaktif',
      en: 'Automotive Interactive Digital Learning & LMS Courseware Engine',
    },
    category: 'EdTech & Instructional Engineering',
    badge: 'Pedagogical Tech',
    overview: {
      id: 'Arsitektur dan implementasi kurikulum digital berbasis web untuk pelatihan kelistrikan otomotif di LKP Jendela Otomotif. Menggabungkan animasi diagnostik, modul evaluasi terautomasi, dan petunjuk operasional teknis.',
      en: 'Web-based digital curriculum architecture and interactive module development for automotive electrical training at LKP Jendela Otomotif, combining diagnostic diagrams and automated evaluation quizzes.',
    },
    metrics: [
      {
        label: { id: 'Keterlibatan Peserta', en: 'Engagement Lift' },
        value: '+30%',
      },
      {
        label: { id: 'Tingkat Kelulusan Evaluasi', en: 'Quiz Pass Rate' },
        value: '92%',
      },
      {
        label: { id: 'Format Materi', en: 'Module Format' },
        value: 'Interaktif & Responsif',
      },
    ],
    tags: [
      'LMS Engineering',
      'Instructional Design',
      'Interactive Courseware',
      'Technical Documentation',
    ],
    impact: {
      id: 'Mendongkrak interaksi dan pemahaman praktikum teknis peserta didik sebesar 30%, serta mempermudah evaluasi kemampuan diagnosa kabel dan sensor secara terukur.',
      en: 'Boosted learner practical engagement by 30%, clarifying complex wiring and sensor diagnostic principles through intuitive digital modules.',
    },
    methodology: {
      id: 'Perancangan desain instruksional berbasis kompetensi industri (ADDIE framework), integrasi pengujian interaktif bertahap, dan pengujian kegunaan antarmuka siswa.',
      en: 'ADDIE competency-based instructional framework, step-by-step diagnostic simulation integration, and UX testing across multiple devices.',
    },
  },
];

export const EVALUATION_SCENARIOS: EvaluationScenario[] = [
  {
    id: 's2s-indonesian-banking',
    title: {
      id: 'S2S: Asisten Suara Perbankan Interaktif (Speech-to-Speech)',
      en: 'S2S: Interactive Voice Banking Assistant (Speech-to-Speech)',
    },
    domain: 'Indonesian Conversational AI & Banking Audio',
    inputPrompt: {
      id: 'Nasabah: "Mbak, saya mau blokir kartu debit saya yang hilang tadi sore di ATM alun-alun, gimana ya caranya? Tapi saldo saya masih aman kan?"',
      en: 'Customer: "Miss, I want to block my debit card that was lost this afternoon at the town square ATM, how do I do that? But my balance is still safe, right?"',
    },
    audioDuration: '00:08.40',
    modelResponse: {
      id: 'AI: "Selamat sore Bapak/Ibu. Jangan panik ya, saya bantu amankan segera. Untuk memblokir kartu debit yang hilang, Anda bisa langsung memilih menu Pengaturan Kartu di aplikasi mobile banking, lalu geser toggle Blokir Sementara, atau saya bantu sambungkan ke petugas sekarang juga. Selama PIN dan OTP tidak diketahui orang lain, saldo rekening Anda tetap aman."',
      en: 'AI: "Good afternoon. Please do not worry, I will help you secure it immediately. To block your lost debit card, you can navigate to Card Settings in your mobile banking app and toggle Temporary Block, or I can connect you to an agent right now. As long as your PIN and OTP remain confidential, your balance is safe."',
    },
    targetAspect: 'Natural Indonesian Prosody, Empathy Tone, Clear Guidance, Banking Safety Rules',
    annotations: [
      {
        type: 'success',
        note: {
          id: 'Intonasi menenangkan pada awal tuturan (prosodi alami tanpa robotik).',
          en: 'Calming prosodic tone at opening (natural voice inflection without robotic pacing).',
        },
      },
      {
        type: 'success',
        note: {
          id: 'Prosedur blokir akurat dan menyisipkan peringatan keamanan PIN/OTP.',
          en: 'Accurate blocking procedure and proactively cited essential PIN/OTP security protocols.',
        },
      },
      {
        type: 'warning',
        note: {
          id: 'Sedikit jeda mikro (120ms) sebelum menyebutkan opsi sambung ke petugas.',
          en: 'Minor micro-pause (120ms) before transitioning to human agent handover option.',
        },
      },
    ],
    recommendedScores: {
      naturalness: 3.8,
      prosody: 3.5,
      factuality: 4.0,
      multiturnConsistency: 3.9,
      grammar: 4.0,
    },
    auditorNotes: {
      id: 'Respons sangat representatif untuk interaksi S2S berbahasa Indonesia. Pilihan kata santun namun lugas, tidak bertele-tele dalam kondisi darurat kehilangan kartu.',
      en: 'Exemplary response for Indonesian S2S conversational AI. Polite yet decisive tone, appropriate urgency calibration for an emergency card-loss scenario.',
    },
  },
  {
    id: 'hevora-financial-grounding',
    title: {
      id: 'HEVORA: Grounding Data Makroekonomi & Penanganan Data Tidak Lengkap',
      en: 'HEVORA: Macroeconomic Indicator Grounding & Missing Data Protocol',
    },
    domain: 'Institutional Financial Intelligence & Market Signals (Gemini AI)',
    inputPrompt: {
      id: 'Analis Terminal: "Bandingkan rilis pertumbuhan PDB Indonesia Q3 terhadap konsensus ekonom dan kuartal sebelumnya. Sertakan pula proyeksi margin sektor perbankan jika ada."',
      en: 'Terminal Analyst: "Compare Indonesia Q3 GDP growth release against consensus forecast and prior quarter. Also include banking sector margin projections if available."',
    },
    audioDuration: 'N/A (Structured Terminal Text)',
    modelResponse: {
      id: 'AI: "Berdasarkan rilis BPS: Pertumbuhan PDB Indonesia Q3 tercatat sebesar 5,05% YoY, melampaui konsensus ekonom (5,00%), namun melambat dibandingkan Q2 (5,17%). Untuk proyeksi margin sektor perbankan: data tersebut tidak tercantum dalam dokumen rilis rujukan, sehingga tidak dapat disajikan guna menghindari estimasi spekulatif tanpa sumber data."',
      en: 'AI: "Based on the official BPS release: Indonesia Q3 GDP growth printed at 5.05% YoY, beating consensus forecast (5.00%), but decelerating from Q2 (5.17%). Regarding banking sector margin projections: this figure is not present in the reference payload, and has been intentionally omitted to prevent ungrounded extrapolation."',
    },
    targetAspect: 'Decoupling Beat vs Sequential Trend, Explicit Missing Data Declaration, Zero Hallucination',
    annotations: [
      {
        type: 'success',
        note: {
          id: 'Membedakan dengan tepat antara "beat konsensus" (+0,05%) dan "perlambatan kuartalan" (-0,12%).',
          en: 'Accurately decoupled consensus beat (+0.05%) from sequential quarter deceleration (-0.12%).',
        },
      },
      {
        type: 'success',
        note: {
          id: 'Protokol data hilang berjalan sempurna: menolak berspekulasi tentang margin perbankan.',
          en: 'Missing data protocol triggered correctly: explicitly declined to speculate on banking margins.',
        },
      },
      {
        type: 'success',
        note: {
          id: 'Menyebutkan sumber resmi (BPS) dan stempel waktu data rujukan.',
          en: 'Directly cited official source authority (BPS) and aligned with ground-truth payload.',
        },
      },
    ],
    recommendedScores: {
      naturalness: 3.9,
      prosody: 3.8,
      factuality: 4.0,
      multiturnConsistency: 4.0,
      grammar: 4.0,
    },
    auditorNotes: {
      id: 'Pengujian menunjukkan kepatuhan 100% terhadap batasan prompt negatif. Menghilangkan risiko halusinasi angka di terminal finansial institusional.',
      en: 'Audit confirms 100% adherence to negative constraints. Successfully eliminated fabricated quantitative projections for institutional terminal users.',
    },
  },
  {
    id: 'multilingual-dialect-nuance',
    title: {
      id: 'S2S: Pemahaman Frasa Slang & Bahasa Jawa Sehari-hari',
      en: 'S2S: Javanese Colloquialism & Regional Conversational Nuance',
    },
    domain: 'Indonesian Dialect & Cultural Semantics',
    inputPrompt: {
      id: 'Pengguna: "Mas, iki motor beat-ku kok brebet yo nek di-gas pol pas adem? Opo busine sing kenek?"',
      en: 'User: "Bro, why does my Beat scooter sputter when full throttled while cold? Could it be the spark plug?"',
    },
    audioDuration: '00:06.15',
    modelResponse: {
      id: 'AI: "Nggih mas, nek motor brebet pas mesin tesih asrep (dingin), kemungkinane pancen saking busi sing wis reget utawa setelan udharane durung pas. Bisa uga saringan bensin rada mampet. Monggo dipun-cek busine riyin: copot terus tingali elektrodane, nek ireng gosong tegese pembakarane ora resik."',
      en: 'AI: "Yes bro, if the engine sputters while still cold, it could indeed be a worn or dirty spark plug, or the air-fuel mixture hasn\'t normalized yet. The fuel filter could also be slightly clogged. You can inspect the spark plug first: check if the electrode is dark soot-covered, which indicates incomplete combustion."',
    },
    targetAspect: 'Javanese-Indonesian Code-Switching, Mechanical Context Understanding, Empathetic Voice Pacing',
    annotations: [
      {
        type: 'success',
        note: {
          id: 'Pemahaman akurat terhadap istilah Jawa "brebet", "tesih asrep", dan "ireng gosong".',
          en: 'Accurate comprehension of Javanese technical vernacular ("brebet", "tesih asrep", "ireng gosong").',
        },
      },
      {
        type: 'success',
        note: {
          id: 'Diagnosis mekanis otomotif logis dan memberikan langkah inspeksi mandiri yang aman.',
          en: 'Sound mechanical reasoning providing safe, step-by-step spark plug inspection guidelines.',
        },
      },
    ],
    recommendedScores: {
      naturalness: 3.9,
      prosody: 3.7,
      factuality: 3.8,
      multiturnConsistency: 3.8,
      grammar: 3.8,
    },
    auditorNotes: {
      id: 'Penyelarasan dialek daerah sangat baik. AI tidak memaksakan bahasa baku kaku saat diajak berbicara santai dalam bahasa Jawa campur Indonesia.',
      en: 'Exceptional dialect adaptation. The AI comfortably code-switched without forcing unnatural formal Indonesian.',
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: {
      id: 'Evaluasi AI & Rekayasa Model (AI Engineering)',
      en: 'AI Engineering & Model Evaluation',
    },
    icon: 'Brain',
    skills: [
      {
        name: 'Gemini Model Evaluation',
        level: 'Advanced',
        focus: {
          id: 'Evaluasi penalaran model Gemini pada kecerdasan pasar dan sintesis data terstruktur.',
          en: 'Gemini reasoning evaluation on market intelligence and structured data synthesis.',
        },
      },
      {
        name: 'Speech-to-Speech (S2S) QA',
        level: 'Expert',
        focus: {
          id: 'Audit akustik intonasi prosodi, kealamian tuturan, dan stempel waktu suara.',
          en: 'Acoustic prosody cadence audits, naturalness scoring, and audio timestamp analysis.',
        },
      },
      {
        name: 'Prompt Engineering & Constraints',
        level: 'Advanced',
        focus: {
          id: 'Perancangan batasan prompt negatif, skema JSON ketat, dan penegakan grounding konteks.',
          en: 'Negative prompt constraints, strict JSON schemas, and context grounding enforcement.',
        },
      },
      {
        name: 'Hallucination Mitigation',
        level: 'Advanced',
        focus: {
          id: 'Pengujian batas (edge-case), audit klaim tanpa sumber, dan protokol data hilang.',
          en: 'Edge-case boundary probing, ungrounded claim audits, and missing-data protocols.',
        },
      },
      {
        name: 'Pairwise Model Evaluation',
        level: 'Advanced',
        focus: {
          id: 'Komparasi performa model berdampingan (Model A vs Model B) dengan rubrik terstandarisasi.',
          en: 'Side-by-side comparative model assessments with standardized rubrics.',
        },
      },
    ],
  },
  {
    title: {
      id: 'Sistem Data & Rekayasa Informatika',
      en: 'Data Systems & Software Engineering',
    },
    icon: 'Terminal',
    skills: [
      {
        name: 'Informatics Engineering (S.Kom)',
        level: 'Bachelor Degree',
        focus: {
          id: 'Landasan komputasi algoritma, struktur data, rekayasa perangkat lunak terintegrasi.',
          en: 'Formal CS fundamentals: algorithms, data structures, and software engineering.',
        },
      },
      {
        name: 'Database Management & Data Integrity',
        level: 'Proficient',
        focus: {
          id: 'Standarisasi basis data, normalisasi data keanggotaan, dan efisiensi query kearsipan.',
          en: 'Database standardization, membership data normalization, and query efficiency.',
        },
      },
      {
        name: 'Cloud Computing Services',
        level: 'Certified',
        focus: {
          id: 'Sertifikasi Alibaba Cloud: server virtual, arsitektur komputasi awan, dan storage data.',
          en: 'Alibaba Cloud certified: virtual instances, cloud architectures, and secure storage.',
        },
      },
      {
        name: 'System Standardization & SOP',
        level: 'Advanced',
        focus: {
          id: 'Penyusunan standar dokumentasi sistem untuk peningkatan efisiensi operasional 30%.',
          en: 'Documenting structured system operating procedures boosting efficiency by 30%.',
        },
      },
    ],
  },
  {
    title: {
      id: 'Platform LMS & Media Pembelajaran Interaktif',
      en: 'LMS Platforms & Instructional Systems',
    },
    icon: 'Layers',
    skills: [
      {
        name: 'LMS Platform Management',
        level: 'Advanced',
        focus: {
          id: 'Pengelolaan sistem pembelajaran daring, administrasi kuis, dan arsitektur kelas.',
          en: 'Online learning system management, automated quizzes, and courseware pipelines.',
        },
      },
      {
        name: 'Interactive Learning Modules',
        level: 'Specialist',
        focus: {
          id: 'Perancangan materi ajar teknis otomotif interaktif meningkatkan keterlibatan 30%.',
          en: 'Interactive technical module engineering elevating student engagement by 30%.',
        },
      },
      {
        name: 'Technical User Guide Authoring',
        level: 'Proficient',
        focus: {
          id: 'Penulisan panduan teknis operasional sistem yang mudah dipahami end-user.',
          en: 'Authoring user guides and operational manuals for non-technical users.',
        },
      },
    ],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'Universitas Muhammadiyah Malang',
    degree: {
      id: 'Sarjana Teknik Informatika (S.Kom)',
      en: 'Bachelor of Informatics Engineering (S.Kom)',
    },
    period: '2016 – 2022',
    gpa: '3.00 / 4.00',
    highlights: [
      {
        id: 'Fokus studi pada rekayasa perangkat lunak, sistem informasi, analisis data komputasi, dan kecerdasan buatan.',
        en: 'Concentration in software engineering, information systems, computational data analytics, and artificial intelligence.',
      },
      {
        id: 'Lulus dengan Indeks Prestasi Kumulatif 3.00, membentuk landasan logika rekayasa dan pemecahan masalah teknis yang kokoh.',
        en: 'Graduated with a 3.00 GPA, establishing a strong foundation in algorithmic reasoning and technical problem solving.',
      },
    ],
  },
  {
    institution: 'SMKN 1 Kalitengah, Lamongan',
    degree: {
      id: 'Sekolah Menengah Kejuruan – Teknik Kendaraan Ringan',
      en: 'Vocational High School – Light Vehicle Engineering',
    },
    period: '2013 – 2016',
    highlights: [
      {
        id: 'Pelatihan teknis mendalam dalam sistem mekanik, kelistrikan kendaraan, dan instrumentasi diagnostik.',
        en: 'In-depth vocational training in mechanical systems, automotive electrical circuits, and diagnostics.',
      },
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Cloud Computing Service Certification',
    issuer: 'Alibaba Cloud',
    year: '2022',
    category: 'Cloud',
    description: {
      id: 'Sertifikasi kompetensi resmi dalam infrastruktur cloud computing, instans komputasi awan, jaringan, dan keamanan data.',
      en: 'Official certified competency in cloud computing architecture, virtual compute instances, networking, and cloud security.',
    },
  },
  {
    name: 'Automotive Electric System Instructor License',
    issuer: 'Bintang Racing Team (BRT)',
    year: '2025',
    category: 'Automotive',
    description: {
      id: 'Lisensi resmi instruktur sistem kelistrikan otomotif mutakhir, instrumen diagnostik, dan manajemen engine control.',
      en: 'Official instructor license for advanced automotive electrical systems, diagnostics instrumentation, and engine control units.',
    },
  },
];

export const ABOUT_CONTENT = {
  overview:
    'Contributing to HEVORA Technologies on an institutional market intelligence platform powered by Gemini models. Primary focus centers on systematically validating how large language models handle complex, fast-moving financial data—ensuring that generated insights reflect verifiable evidence rather than speculative hallucination.',
  pillars: [
    {
      title: 'AI Behavior Evaluation',
      description:
        'Designing rigorous test scenarios to probe model reasoning under volatile market regimes and high-noise sentiment feeds.',
    },
    {
      title: 'Prompt Engineering & Constraint Design',
      description:
        'Crafting strict system instructions, few-shot grounding schemas, and deterministic JSON extractors to force structured outputs.',
    },
    {
      title: 'Financial Data Validation',
      description:
        'Auditing the integrity of numerical feeds, verifying that model assertions tie directly to documented macroeconomic prints.',
    },
    {
      title: 'Hallucination Mitigation & Risk Controls',
      description:
        'Implementing adversarial evaluation suites to catch unwarranted causal claims and phantom price levels before output reaches users.',
    },
  ],
  engineeringDisclaimer:
    'Development Status: The platform is currently in active prototyping and evaluation. Work documented here reflects engineering responsibilities, testing methodologies, and evaluation frameworks, and does not claim production-deployed financial advice or independently verified trade returns.',
};

export const TECHNICAL_RESPONSIBILITIES: TechnicalResponsibilityCard[] = [
  {
    id: 'agent-dev-eval',
    title: 'AI Agent Development & LLM Evaluation',
    category: 'Model Reasoning',
    description:
      'Contributing to agentic orchestration frameworks where Gemini models retrieve, synthesize, and format multi-source financial information while adhering to strict behavioral boundaries.',
    focusAreas: [
      'Multi-turn conversational consistency testing',
      'Evaluation rubric formulation for financial summaries',
      'Pairwise model comparison across complex market queries',
    ],
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering & Output Schemas',
    category: 'Prompt Craft',
    description:
      'Designing system prompts with explicit negative constraints to prohibit unsupported forecast extrapolations and enforce structured outputs.',
    focusAreas: [
      'Calibration for quantitative financial tables',
      'Strict schema conformity (JSON / tabular validation)',
      'Reasoning trace grounding before generating market commentaries',
    ],
  },
  {
    id: 'data-grounding',
    title: 'Financial Data Grounding',
    category: 'Data Integrity',
    description:
      'Validating that all quantitative claims (e.g., basis point shifts, EPS beats, PMI values) match the underlying economic or terminal data payload.',
    focusAreas: [
      'Direct cross-reference between input tables and output narrative',
      'Detection of digit transpositions or inverted delta directions',
      'Timestamp verification against market exchange sessions',
    ],
  },
  {
    id: 'market-intel-qa',
    title: 'Market Intelligence QA',
    category: 'Quality Assurance',
    description:
      'Supporting continuous functional and analytical QA across terminal signal summaries, sector breakdowns, and central bank statement reviews.',
    focusAreas: [
      'Scenario-based regression test suites',
      'Defect classification across linguistic, factual, and logical tiers',
      'Retesting mitigation fixes against historical test archives',
    ],
  },
  {
    id: 'hallucination-risk',
    title: 'Hallucination and Risk Controls',
    category: 'Risk Mitigation',
    description:
      'Instituting guardrails to stop the AI from generating speculative price targets, fabricated historical quotes, or ungrounded macroeconomic causations.',
    focusAreas: [
      'Enforcing explicit uncertainty declarations when data is ambiguous',
      'Penalizing authoritative answers that lack source citations',
      'Testing compliance with institutional risk disclosure guidelines',
    ],
  },
  {
    id: 'historical-paper-trading',
    title: 'Historical Scenario & Paper-Trading Evaluation',
    category: 'Backtest QA',
    description:
      'Evaluating model responses when presented with historical market milestones to assess analytical coherence without look-ahead bias.',
    focusAreas: [
      'Look-ahead leakage audit (verifying the model does not access future timestamps)',
      'Signal consistency under simulated retrospective market environments',
      'Comparative review against known post-release historical context',
    ],
  },
  {
    id: 'reliability-performance',
    title: 'System Reliability & Performance',
    category: 'System Quality',
    description:
      'Monitoring execution latency, output token bounds, and API failure modes to maintain a stable user experience during volatile market sessions.',
    focusAreas: [
      'Measuring median and p95 token generation turnaround',
      'Evaluating graceful fallback behavior when context limits are reached',
      'Validating timeout recovery and retry logic',
    ],
  },
  {
    id: 'security-config',
    title: 'Security-Aware Configuration Practices',
    category: 'Security & Governance',
    description:
      'Adhering to strict data governance standards: ensuring zero exposure of internal system prompts, API keys, or proprietary terminal configurations.',
    focusAreas: [
      'Prompt injection resilience auditing',
      'Protection of private user queries from data leakage',
      'Standardized configuration management adhering to clean architecture',
    ],
  },
];

export const TECHNICAL_CASE_STUDIES: TechnicalCaseStudy[] = [
  {
    id: 'missing-stale-data',
    title: 'Missing or Stale Financial Data Handling',
    objective:
      'Determine whether the AI appropriately flags missing, delayed, or interrupted data feeds instead of hallucinating plausible current values.',
    testMethod:
      'Inject synthetic data payloads with intentionally omitted price candles or outdated timestamps into the context window, prompting for live updates.',
    expectedBehavior:
      'The model must explicitly declare data staleness, quote the exact timestamp of the last available record, and decline to extrapolate real-time pricing without fresh inputs.',
    evidenceStatus: 'Testing framework',
    evidenceLink: 'https://hevora.app/',
    riskMitigated:
      'Prevents analysts from making decisions based on silent default values masquerading as real-time liquidity.',
    keyCriteria: [
      'Explicit declaration of stale data flag',
      'Exact last-known timestamp provided',
      'No synthetic price extrapolation',
    ],
  },
  {
    id: 'economic-indicator-triage',
    title: 'Economic Indicator Interpretation: Actual vs Forecast vs Previous',
    objective:
      'Validate that the model correctly parses three-variable macroeconomic releases (Actual, Consensus Forecast, and Prior) without confusing directionality.',
    testMethod:
      'Present NFP, CPI, and interest rate announcement scenarios where Actual beats Forecast but declines relative to Prior, evaluating model narrative for directional accuracy.',
    expectedBehavior:
      'The model must accurately decouple the beat/miss vs consensus from the sequential month-over-month trajectory.',
    evidenceStatus: 'Evaluation area',
    evidenceLink: 'https://hevora.app/',
    riskMitigated:
      'Eliminates inverted market narrative signals that could trigger incorrect directional positioning.',
    keyCriteria: [
      'Accurate Actual vs Forecast delta calculation',
      'Clear distinction between sequential vs consensus deviation',
      'Zero hallucination of revisions to prior periods',
    ],
  },
  {
    id: 'market-analysis-grounding',
    title: 'Market Analysis Consistency & Source Grounding',
    objective:
      'Verify that all analytical statements in a research summary can be mapped back to explicit sentences or data points in the provided context.',
    testMethod:
      'Subject model-generated sector reports to sentence-by-sentence attribution verification against source SEC filings and earnings call transcripts.',
    expectedBehavior:
      'Every quantitative figure and corporate outlook quote must possess a verifiable source reference in the prompt context.',
    evidenceStatus: 'Testing framework',
    evidenceLink: 'https://hevora.app/',
    riskMitigated:
      'Protects institutional users from unsubstantiated analyst commentary and regulatory non-compliance.',
    keyCriteria: [
      '100% sentence-level source attribution',
      'No fabricated quotes or executive commentary',
      'Verifiable citation tags',
    ],
  },
  {
    id: 'ai-latency-evaluation',
    title: 'AI Response Latency & Stream Stability',
    objective:
      'Evaluate response latency distributions across Gemini model calls under varying token length and structured JSON schema constraints.',
    testMethod:
      'Execute automated test batches measuring Time to First Token (TTFT) and total generation time across standard (250 tokens), medium (750 tokens), and long-form (1,500+ tokens) prompt payloads.',
    expectedBehavior:
      'Latency metrics must stay within acceptable bounds for desktop terminal workflows, with predictable scaling and no streaming deadlocks.',
    evidenceStatus: 'Evaluation area',
    evidenceLink: 'https://hevora.app/',
    riskMitigated:
      'Avoids terminal UI freezing or stale responses during fast-moving market open volatility.',
    keyCriteria: [
      'Monitoring TTFT stability',
      'Profiling schema constraint overhead',
      'Identifying outlier p95/p99 delays',
    ],
  },
  {
    id: 'historical-scenario-paper-trading',
    title: 'Historical Scenario & Paper-Trading Assessment',
    objective:
      'Assess how consistently the AI applies defined trading discipline rules across retrospective market replay datasets.',
    testMethod:
      'Feed sequentially unrolled historical price and news data to the model in simulated paper-trading environments, evaluating whether it honors risk parameters across simulated cycles.',
    expectedBehavior:
      'The model must respect simulated stop levels, cite only information available up to the simulated current time, and avoid retroactive hindsight bias.',
    evidenceStatus: 'Evaluation area',
    evidenceLink: 'https://hevora.app/',
    riskMitigated:
      'Validates that AI evaluation harnesses operate without look-ahead data contamination.',
    keyCriteria: [
      'Zero look-ahead bias contamination',
      'Adherence to pre-defined risk parameters',
      'Traceable simulated decision log',
    ],
  },
];

export const QA_METHODOLOGY_STEPS: QaMethodologyStep[] = [
  {
    step: 1,
    title: 'Define Test Scenario',
    description: 'Formulate explicit test conditions, input payloads, market state parameters, and target behavioral criteria.',
    keyCheck: 'Boundary conditions and potential failure modes explicitly specified.',
  },
  {
    step: 2,
    title: 'Validate Source Data',
    description: 'Confirm the integrity, freshness, and accuracy of input tables, economic indicators, and news feeds.',
    keyCheck: 'Timestamps, numeric precision, and source provenance independently checked.',
  },
  {
    step: 3,
    title: 'Evaluate AI Output',
    description: 'Audit the generated response against multi-dimensional rubrics covering factual accuracy, logical consistency, tone, and schema compliance.',
    keyCheck: 'Granular assessment against strict grading criteria (1-5 scale or pass/fail).',
  },
  {
    step: 4,
    title: 'Record Defects',
    description: 'Log discrepancies, hallucinations, ungrounded claims, or formatting failures into structured defect repositories.',
    keyCheck: 'Categorized by severity: Critical (Factual error), High (Logic/Schema), Medium (Tone).',
  },
  {
    step: 5,
    title: 'Retest & Regression Check',
    description: 'Re-execute the test scenario after prompt adjustments or model configuration updates to ensure defect resolution.',
    keyCheck: 'Verification that the fix resolves the specific defect without breaking adjacent tests.',
  },
  {
    step: 6,
    title: 'Document Evidence',
    description: 'Archive input prompts, raw model responses, human evaluation rubrics, and comparison logs for auditability.',
    keyCheck: 'Audit trail maintained for institutional review.',
  },
];

export const QA_CRITERIA_EXAMPLES = [
  {
    category: 'Factual Consistency',
    rule: 'Every numeric metric and corporate entity name in the output must match the source data exactly.',
    passExample: '"Q2 revenue grew 14.2% YoY to $3.45B, in line with reported 10-Q filing."',
    failExample: '"Q2 revenue grew approximately 15% to nearly $4B (unjustified rounding/inflation)."',
  },
  {
    category: 'Timestamps & Freshness',
    rule: 'All price quotes or market status assertions must specify the observation timestamp.',
    passExample: '"As of 15:30 EST, the 10-year Treasury yield stood at 4.12%."',
    failExample: '"The 10-year Treasury yield is currently 4.12% (omitting timestamp)."',
  },
  {
    category: 'Missing Data Protocol',
    rule: 'If an expected data point is absent, the model must explicitly state its absence.',
    passExample: '"Operating margin data was not provided in the source report; field marked N/A."',
    failExample: '"Operating margin is assumed to be roughly comparable to peer averages."',
  },
  {
    category: 'Uncertainty Expression',
    rule: 'Probabilistic interpretations must use calibrated uncertainty language without overconfident assertions.',
    passExample: '"Based on the available indicators, market sentiment leans defensive; outcome remains contingent on Friday CPI print."',
    failExample: '"Markets are guaranteed to rally following the upcoming CPI release."',
  },
  {
    category: 'Unsupported Claims',
    rule: 'The AI must decline to make ungrounded speculative assertions not substantiated by input evidence.',
    passExample: '"The filing cites supply chain friction as a headwind; no quantified impact was disclosed."',
    failExample: '"Supply chain friction will likely reduce annual margins by 300 basis points."',
  },
];

export const INSTITUTIONAL_METRICS: InstitutionalMetricItem[] = [
  {
    key: 'test_cases',
    label: 'Evaluation Test Cases Authored',
    value: 'Not provided',
    targetOrBenchmark: 'Ongoing Curation',
    category: 'QA Coverage',
    status: 'Not provided',
    description: 'Structured test cases designed across financial data scenarios.',
  },
  {
    key: 'defects_logged',
    label: 'Reasoning & Factual Defects Logged',
    value: 'Not provided',
    targetOrBenchmark: 'Active Triage',
    category: 'Defect Management',
    status: 'Not provided',
    description: 'Documented model hallucinations, schema errors, and grounding failures.',
  },
  {
    key: 'regression_pass_rate',
    label: 'Regression Suite Pass Rate',
    value: 'Not provided',
    targetOrBenchmark: 'Target: >95%',
    category: 'Reliability',
    status: 'Not provided',
    description: 'Pass rate on historical scenario suites across model updates.',
  },
  {
    key: 'median_latency',
    label: 'Median Model Latency (p50)',
    value: 'Not provided',
    targetOrBenchmark: 'Terminal Standard',
    category: 'Performance',
    status: 'Not provided',
    description: 'Median turnaround time for analytical query generation.',
  },
];
