export const PROJECT_TRACK = {
  THREE_D: '3d',
  WEB: 'web',
};

export const projects = [
  {
    id: 'guardian-of-earth',
    title: 'Guardian Of Earth',
    subtitle: 'Hack for Humanity 2026 - Devpost',
    discipline: PROJECT_TRACK.THREE_D,
    category: 'Game Unity',
    tags: ['Unity', '3D Modeling', 'Blender', 'Game Design'],
    description:
      'Game simulasi aksi bertema lingkungan yang berfokus pada perlindungan ekosistem di berbagai wilayah Indonesia. Pemain berperan sebagai penjaga alam yang melawan kerusakan lingkungan di pulau-pulau besar Indonesia.',
    highlights: [
      'Public Voting Winner - Hack for Humanity 2026',
      '2 Silver/Plate awards',
      'Contamination system with dynamic environment',
      'Mekanisme reboisasi, patroli, dan perbaikan fasilitas',
    ],
    youtubeId: 'umI85ThiIGA',
    assets: [
      {
        name: 'Player Character',
        base: '/image/Guardian Of Earth (Game Unity)/Player Base Color.png',
        wireframe: '/image/Guardian Of Earth (Game Unity)/Player Wireframe.png',
      },
      {
        name: 'Enemy Character',
        base: '/image/Guardian Of Earth (Game Unity)/Enemy Base Color.png',
        wireframe: '/image/Guardian Of Earth (Game Unity)/Enemy Wireframe.png',
      },
    ],
    videos: [],
  },
  {
    id: 'relic-of-the-abyss',
    title: 'Relic Of The Abyss',
    subtitle: 'Tugas Mata Kuliah Pengembangan Game',
    discipline: PROJECT_TRACK.THREE_D,
    category: 'Game Unity',
    tags: ['Unity', '3D Modeling', 'Blender', 'Dungeon Crawler'],
    description:
      'Game dungeon crawler dengan 5 lantai. Player harus menyelesaikan lantai secara bertahap, menemui NPC, dan memilih ending berdasarkan interaksi. Terdapat mini coding game drag-and-drop, sistem combat, dan NPC shop.',
    highlights: [
      '5-floor dungeon progression',
      'Multiple ending berdasarkan interaksi NPC',
      'Mini coding game drag and drop logic',
      'NPC shop system untuk potion dan stamina',
    ],
    gameplay: '/image/Relic Of The Abyss (Game Unity)/Video Gameplay.mp4',
    assets: [
      {
        name: 'Player',
        base: '/image/Relic Of The Abyss (Game Unity)/Player Base Color.png',
        wireframe: '/image/Relic Of The Abyss (Game Unity)/Player Wireframe.png',
      },
      {
        name: 'Skeleton (Enemy)',
        base: '/image/Relic Of The Abyss (Game Unity)/Skeleton Base Color.png',
        wireframe: '/image/Relic Of The Abyss (Game Unity)/Skeleton Wireframe.png',
      },
      {
        name: 'Jack',
        base: '/image/Relic Of The Abyss (Game Unity)/Jack Base Color.png',
        wireframe: '/image/Relic Of The Abyss (Game Unity)/Jack Wireframe.png',
      },
      {
        name: 'Uncle Shop (NPC)',
        base: '/image/Relic Of The Abyss (Game Unity)/Uncle Shop Base Color.png',
        wireframe: '/image/Relic Of The Abyss (Game Unity)/Uncle Shop Wireframe.png',
      },
      {
        name: 'Altar Spawn',
        base: '/image/Relic Of The Abyss (Game Unity)/Altar Spawn Base Color.png',
        wireframe: '/image/Relic Of The Abyss (Game Unity)/Altar Spawn Wireframe.png',
      },
      {
        name: 'Barrel (Prop)',
        base: '/image/Relic Of The Abyss (Game Unity)/Barrel Base Color.png',
        wireframe: '/image/Relic Of The Abyss (Game Unity)/Barrel Wireframer.png',
      },
      {
        name: 'Map Floor 5',
        base: '/image/Relic Of The Abyss (Game Unity)/Map Floor 5 Base Color.png',
        wireframe: '/image/Relic Of The Abyss (Game Unity)/Map Floor 5 Wireframe.png',
      },
    ],
    videos: [
      {
        name: 'Magic Circle - End',
        src: '/image/Relic Of The Abyss (Game Unity)/Magic Circle End.mp4',
      },
      {
        name: 'Magic Circle - Teleport',
        src: '/image/Relic Of The Abyss (Game Unity)/Magic Circle Teleport.mp4',
      },
    ],
  },
  {
    id: 'kmipn-animation',
    title: 'KMIPN Competition Animation',
    subtitle: 'Lomba Bidang Animasi KMIPN - In Production',
    discipline: PROJECT_TRACK.THREE_D,
    category: 'Animation',
    tags: ['Blender', 'Character Design', 'Animation', 'Rigging'],
    description:
      'Projek animasi yang masih tahap produksi untuk lomba bidang animasi KMIPN. Menampilkan karakter utama Arka dengan desain dan rigging yang detail.',
    highlights: [
      'Status: In Production',
      'Character design and rigging',
      'Kompetisi bidang animasi KMIPN',
    ],
    assets: [
      {
        name: 'Arka (Main Character)',
        base: '/image/KMIPN Competition Animation (Future)/Arka (MC).png',
        wireframe: '/image/KMIPN Competition Animation (Future)/Arka (MC) Wireframe.png',
      },
    ],
    videos: [],
  },
  {
    id: 'himatik-bootcamp',
    title: 'Himatik Bootcamp',
    subtitle: 'Bootcamp materi Front-End dan Back-End',
    discipline: PROJECT_TRACK.WEB,
    category: 'Web Development',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Mentoring'],
    description:
      'Dokumentasi sesi bootcamp HIMATIK untuk materi dasar web development, dari JavaScript dan front-end fundamentals sampai PHP dasar untuk back-end.',
    highlights: [
      'Materi JavaScript dasar untuk pemula',
      'Materi front-end list and conditional rendering',
      'Live coding katalog produk',
      'Materi back-end dasar menggunakan PHP',
    ],
    assets: [
      {
        name: 'Front-End - List and Conditional (1)',
        base: '/image/Himatik Bootcamp/Bootcamp Himatik (Front-End) Materi List & Conditioning (1).png',
      },
      {
        name: 'Front-End - List and Conditional (2)',
        base: '/image/Himatik Bootcamp/Bootcamp Himatik (Front-End) Materi List & Conditioning (2).png',
      },
      {
        name: 'Front-End - Live Coding Katalog Produk',
        base: '/image/Himatik Bootcamp/Bootcamp Himatik (Front-End) Materi Live Coding Katalog Produk.png',
      },
      {
        name: 'Back-End - PHP Basic (1)',
        base: '/image/Himatik Bootcamp/Bootcamp Himatik (Back-End) Materi Dasar PHP (1).png',
      },
      {
        name: 'Back-End - PHP Basic (2)',
        base: '/image/Himatik Bootcamp/Bootcamp Himatik (Back-End) Materi Dasar PHP (2).png',
      },
      {
        name: 'JavaScript Basic (1)',
        base: '/image/Himatik Bootcamp/Bootcamp HIMATIK Materi Dasar JavaScript (1).jpg',
      },
      {
        name: 'JavaScript Basic (2)',
        base: '/image/Himatik Bootcamp/Bootcamp HIMATIK Materi Dasar JavaScript (2).jpg',
      },
      {
        name: 'JavaScript Basic (3)',
        base: '/image/Himatik Bootcamp/Bootcamp HIMATIK Materi Dasar JavaScript (3).jpg',
      },
      {
        name: 'JavaScript Basic (4)',
        base: '/image/Himatik Bootcamp/Bootcamp HIMATIK Materi Dasar JavaScript (4).jpg',
      },
    ],
    videos: [],
  },
  {
    id: 'rukamu',
    title: 'Rukamu',
    subtitle: 'Platform usaha TMJ - Politeknik Negeri Ujung Pandang',
    discipline: PROJECT_TRACK.WEB,
    category: 'Web Development',
    tags: ['Full Stack', 'File Management', 'Payment Gateway', 'API Integration'],
    description:
      'Saya berperan sebagai full stack developer untuk platform usaha prodi TMJ. Fokus pengembangan mencakup alur bisnis, dashboard operasional, dan integrasi layanan eksternal.',
    highlights: [
      'Manajemen file dan manajemen role',
      'Integrasi payment gateway',
      'Integrasi API cek ongkir',
      'Domain produksi: rukamu.com',
    ],
    links: [
      {
        label: 'Visit rukamu.com',
        href: 'https://rukamu.com',
      },
    ],
    assets: [
      {
        name: 'Rukamu Web Preview',
        base: '/image/Rukamu/image.png',
      },
    ],
    videos: [],
  },
  {
    id: 'sikamali',
    title: 'Sikamali',
    subtitle: 'Platform manajemen penduduk lingkar tambang',
    discipline: PROJECT_TRACK.WEB,
    category: 'Web Development',
    tags: ['Back-End', 'Relational Database', 'Role Management', 'Rate Limiting'],
    description:
      'Saya berperan sebagai back-end developer pada platform manajemen penduduk lingkar tambang. Fokus saya pada desain data relasional, keamanan API, dan kontrol akses berbasis role.',
    highlights: [
      'Relasi data kepala keluarga dan anggota',
      'Manajemen user dan role',
      'Proteksi endpoint dengan rate limiting',
      'Digunakan untuk administrasi data penduduk lokal',
    ],
    links: [
      {
        label: 'Visit sikamali.com',
        href: 'https://sikamali.com',
      },
    ],
    assets: [
      {
        name: 'Sikamali Web Preview',
        base: '/image/Sikamali/image.png',
      },
    ],
    videos: [],
  },
];

export const getProjectsByTrack = (track) =>
  projects.filter((project) => project.discipline === track);
