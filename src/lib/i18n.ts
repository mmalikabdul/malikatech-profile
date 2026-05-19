export type Locale = "id" | "en";

export const translations = {
  id: {
    // Header
    nav: {
      products: "Produk",
      services: "Layanan",
      portfolio: "Portofolio",
      contact: "Hubungi Kami",
    },

    // Hero
    hero: {
      badge: "Teknologi Publik Masa Depan",
      h1_1: "Mentransformasi Layanan Publik dengan",
      h1_accent: "Solusi Digital Cerdas",
      description:
        "MalikaTech membangun aplikasi web skalabel, sistem antrean, platform tiket, dan solusi layanan publik terintegrasi yang dirancang untuk era modern.",
      cta_explore: "Jelajahi Produk",
      cta_contact: "Hubungi Kami",
      efficiency: "Tingkat Efisiensi",
    },

    // Stats
    stats: {
      tagline: "Mendukung Infrastruktur Publik Kritis",
      labels: ["Proyek Aktif", "Tiket Dikelola", "Uptime SLA", "Pemantauan Sistem"],
    },

    // Products
    products: {
      heading_1: "Produk",
      heading_accent: "Unggulan",
      heading_2: "Kami",
      subtitle:
        "Platform berkelas enterprise yang dibangun untuk menyelesaikan kompleksitas manajemen sektor publik dan penyampaian layanan.",
      learn_more: "Pelajari Selengkapnya",
      items: [
        {
          title: "QNext Queue",
          desc: "Sistem distribusi antrean cerdas dengan integrasi papan informasi digital real-time dan notifikasi mobile.",
          features: ["Pembuatan Token QR", "Percabangan Multi-layanan", "Dasbor Analitik"],
        },
        {
          title: "MalikaDesk",
          desc: "Solusi tiket canggih untuk dukungan IT internal dan manajemen pertanyaan layanan publik.",
          features: ["Eskalasi SLA Otomatis", "Dukungan Multi-kanal", "Basis Pengetahuan"],
        },
        {
          title: "Smart Visitor",
          desc: "Sistem registrasi tamu yang aman dan efisien dengan pencetakan lencana digital dan pencatatan keamanan.",
          features: ["Buku Tamu Digital", "Notifikasi Instan", "Penandatanganan NDA"],
        },
      ],
    },

    // Services
    services: {
      heading_1: "Keunggulan",
      heading_accent: "Rekayasa",
      subtitle: "Dari analisis bisnis strategis hingga penerapan infrastruktur full-stack.",
      items: [
        { title: "Aplikasi Web", desc: "Aplikasi web enterprise khusus yang skalabel." },
        { title: "Dasbor", desc: "Alat visualisasi data berkinerja tinggi." },
        { title: "Desain API", desc: "Integrasi RESTful yang kuat dan aman." },
        { title: "Otomatisasi", desc: "Optimasi alur kerja dan pipeline CI/CD." },
        { title: "Desain UI/UX", desc: "Bahasa desain minimalis yang berpusat pada pengguna." },
        { title: "Dukungan Teknis", desc: "Bantuan teknis komprehensif 24/7." },
        { title: "Layanan BA", desc: "Analisis proses bisnis berbasis data." },
        { title: "Infrastruktur IT", desc: "Penerapan cloud dan on-premise yang skalabel." },
      ],
    },

    // About
    about: {
      heading_1: "Dibangun oleh",
      heading_accent: "Para Ahli",
      description:
        "Sebagai profesional IT berpengalaman dengan latar belakang kuat di Analisis Bisnis, saya mendirikan MalikaTech untuk menjembatani kesenjangan antara kompleksitas teknis dan layanan publik yang ramah pengguna.",
      expert_label: "WAWASAN AHLI",
      expert_quote:
        "Kami tidak sekadar membangun perangkat lunak; kami merekayasa warisan digital untuk sektor publik.",
      points: [
        {
          title: "Optimasi Proses",
          desc: "Mentransformasi alur kerja lama menjadi proses digital yang efisien melalui analisis mendalam.",
        },
        {
          title: "Kapabilitas Full-Stack",
          desc: "Pengembangan end-to-end dari arsitektur database hingga antarmuka frontend berkualitas tinggi.",
        },
        {
          title: "Kepemimpinan Strategis",
          desc: "Memimpin proyek transformasi digital skala besar untuk entitas pemerintah dan publik.",
        },
      ],
    },

    // Portfolio
    portfolio: {
      heading_1: "Portofolio",
      heading_accent: "Kami",
      subtitle:
        "Proyek terpilih yang menunjukkan komitmen kami terhadap keunggulan teknis dan pengalaman pengguna.",
      items: [
        {
          sector: "SEKTOR PEMERINTAH",
          title: "Pusat Dukungan Omni-Channel",
          desc: "Solusi tiket khusus yang diterapkan untuk layanan publik regional, menangani lebih dari 5.000 pertanyaan per bulan dengan perutean otomatis dan penugasan prioritas berbasis AI.",
        },
        {
          sector: "KESEHATAN",
          title: "QNext Smart Clinic Flow",
          desc: "Sistem alur pasien yang disederhanakan untuk klinik multi-spesialisasi. Terintegrasi dengan aplikasi mobile untuk pengambilan tiket jarak jauh dan estimasi waktu tunggu real-time.",
        },
      ],
    },

    // Contact
    contact: {
      heading_1: "Mari Bangun",
      heading_accent: "Masa Depan",
      description:
        "Siap memodernisasi infrastruktur layanan publik Anda? Kirimkan pesan kepada kami dan kami akan merespons dalam 24 jam.",
      email_label: "Surel Kami",
      wa_label: "WhatsApp",
      label_name: "Nama Lengkap",
      label_email: "Alamat Surel",
      label_project: "Jenis Proyek",
      label_message: "Pesan",
      placeholder_name: "Budi Santoso",
      placeholder_message: "Ceritakan tujuan proyek Anda...",
      project_options: [
        "Integrasi Sistem Antrean",
        "Aplikasi Web Khusus",
        "Konsultasi Strategi IT",
        "Pertanyaan Lainnya",
      ],
      btn_submit: "Kirim Pesan",
      btn_sending: "Mengirim...",
      success: "✓ Pesan berhasil dikirim! Terima kasih telah menghubungi kami.",
      error: "✗ Gagal mengirim pesan. Silakan coba lagi atau hubungi kami langsung.",
    },

    // Footer
    footer: {
      tagline: "Merekayasa mesin digital berkinerja tinggi untuk layanan publik modern.",
      solutions: "Solusi",
      company: "Perusahaan",
      newsletter: "Buletin",
      newsletter_desc: "Dapatkan wawasan teknologi terbaru kami.",
      newsletter_placeholder: "Surel",
      privacy: "Kebijakan Privasi",
      terms: "Syarat Layanan",
      careers: "Karier",
      support: "Dukungan",
      copyright: "© 2024 MalikaTech. Direkayasa untuk performa.",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  en: {
    // Header
    nav: {
      products: "Products",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact Us",
    },

    // Hero
    hero: {
      badge: "Next-Gen Public Tech",
      h1_1: "Transforming Public Services Through",
      h1_accent: "Smart Digital Solutions",
      description:
        "MalikaTech builds scalable web applications, queue systems, ticketing platforms, and integrated public service solutions designed for the modern era.",
      cta_explore: "Explore Products",
      cta_contact: "Contact Us",
      efficiency: "Efficiency Rate",
    },

    // Stats
    stats: {
      tagline: "Powering Critical Public Infrastructure",
      labels: ["Live Projects", "Tickets Managed", "SLA Uptime", "System Monitoring"],
    },

    // Products
    products: {
      heading_1: "Our",
      heading_accent: "Core",
      heading_2: "Products",
      subtitle:
        "Enterprise-grade platforms built to solve the complexities of public sector management and service delivery.",
      learn_more: "Learn More",
      items: [
        {
          title: "QNext Queue",
          desc: "Smart queue distribution system with real-time digital signage integration and mobile notification alerts.",
          features: ["QR Token Generation", "Multi-service Branching", "Analytics Dashboard"],
        },
        {
          title: "MalikaDesk",
          desc: "Advanced ticketing solution for internal IT support and public service inquiry management.",
          features: ["SLA Auto-escalation", "Multi-channel Support", "Knowledge Base"],
        },
        {
          title: "Smart Visitor",
          desc: "Secure and efficient guest registration system with digital badge printing and safety logging.",
          features: ["Digital Logbook", "Instant Alerts", "NDA Signing"],
        },
      ],
    },

    // Services
    services: {
      heading_1: "Engineering",
      heading_accent: "Precision",
      subtitle: "From strategic business analysis to full-stack infrastructure deployment.",
      items: [
        { title: "Web App", desc: "Custom scalable enterprise web applications." },
        { title: "Dashboards", desc: "High-performance data visualization tools." },
        { title: "API Design", desc: "Robust and secure RESTful integrations." },
        { title: "Automation", desc: "Workflow streamlining and CI/CD pipelines." },
        { title: "UI/UX Design", desc: "User-centric minimalist design language." },
        { title: "Tech Support", desc: "Comprehensive 24/7 technical assistance." },
        { title: "BA Services", desc: "Data-driven business process analysis." },
        { title: "IT Infra", desc: "Scalable cloud and on-prem deployments." },
      ],
    },

    // About
    about: {
      heading_1: "Built by",
      heading_accent: "Experts",
      description:
        "As an experienced IT professional with a strong background in Business Analysis, I founded MalikaTech to bridge the gap between technical complexity and user-friendly public service.",
      expert_label: "EXPERT INSIGHT",
      expert_quote:
        "We don't just build software; we engineer digital legacies for public sectors.",
      points: [
        {
          title: "Process Optimization",
          desc: "Transforming legacy workflows into streamlined digital processes through rigorous analysis.",
        },
        {
          title: "Full-Stack Capability",
          desc: "End-to-end development from database architecture to high-fidelity frontend UIs.",
        },
        {
          title: "Strategic Leadership",
          desc: "Guiding large-scale digital transformation projects for government and public entities.",
        },
      ],
    },

    // Portfolio
    portfolio: {
      heading_1: "Our",
      heading_accent: "Portfolio",
      subtitle:
        "Selected projects that demonstrate our commitment to technical excellence and user experience.",
      items: [
        {
          sector: "GOVERNMENT SECTOR",
          title: "Omni-Channel Support Hub",
          desc: "A custom ticketing solution deployed for regional public services, handling over 5,000 inquiries monthly with automated routing and AI-driven priority assignment.",
        },
        {
          sector: "HEALTHCARE",
          title: "QNext Smart Clinic Flow",
          desc: "Streamlined patient flow system for a multi-specialty clinic. Integrated with mobile apps for remote ticket collection and real-time waiting time estimation.",
        },
      ],
    },

    // Contact
    contact: {
      heading_1: "Let's Build the",
      heading_accent: "Future",
      description:
        "Ready to modernize your public service infrastructure? Send us a message and we'll get back to you within 24 hours.",
      email_label: "Email Us",
      wa_label: "WhatsApp",
      label_name: "Full Name",
      label_email: "Email Address",
      label_project: "Project Type",
      label_message: "Message",
      placeholder_name: "John Doe",
      placeholder_message: "Tell us about your project goals...",
      project_options: [
        "Queue System Integration",
        "Custom Web Application",
        "IT Strategy Consulting",
        "Other Inquiry",
      ],
      btn_submit: "Send Message",
      btn_sending: "Sending...",
      success: "✓ Message sent successfully! Thank you for reaching out.",
      error: "✗ Failed to send message. Please try again or contact us directly.",
    },

    // Footer
    footer: {
      tagline: "Engineering high-performance digital engines for modern public services.",
      solutions: "Solutions",
      company: "Company",
      newsletter: "Newsletter",
      newsletter_desc: "Stay updated with our latest tech insights.",
      newsletter_placeholder: "Email",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      careers: "Careers",
      support: "Support",
      copyright: "© 2024 MalikaTech. Engineered for performance.",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
} as const;

export type Translations = typeof translations[Locale];
