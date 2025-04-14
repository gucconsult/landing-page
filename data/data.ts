import whatsapp from "~/assets/images/whatsapp.svg";
import instagram from "~/assets/images/instagram.svg";
import linkedin from "~/assets/images/linkedin.svg";
import tiktok from "~/assets/images/tiktok.svg";
import chartLine from "~/assets/images/chart-line.svg";
import personTie from "~/assets/images/person-tie.svg";
import money from "~/assets/images/money.svg";

type ServicePrice = {
  id: number;
  title: string;
  price: string;
  benefits: Array<string>;
};

type Testimoni = {
  id: number;
  name: string;
  job: string;
  review: string;
  date: string;
};

export const features = [
  {
    id: 1,
    title: "Bimbingan Karier",
    description: "Bimbingan karier sesuai dengan bidang yang ingin anda pilih",
    icon: chartLine,
  },
  {
    id: 2,
    title: "Tim Berpengalaman",
    description: "Tim yang berpengalaman dan profesional siap membantu anda",
    icon: personTie,
  },
  {
    id: 3,
    title: "Harga Terjangkau",
    description: "Harga yang terjangkau dengan tetap mengutamakan kualitas",
    icon: money,
  },
];

export const servicesPrice: ServicePrice[] = [
  {
    id: 1,
    title: "Pemula 1",
    price: "Rp35.000",
    benefits: [
      "Tersedia dalam pilihan Bahasa Indonesia maupun Bahasa Inggris.",
      "Review CV lama anda dan koreksi kesalahan",
      "CV kreatif atau profesional",
      "Surat lamaran profesional yang terintegrasi dengan isi CV anda",
      "CV dengan format Word yang dapat diedit",
      "Jaminan lolos 100% ATS (Applicant Tracking System)",
      "Revisi 2 kali dan bonus e-book psikotes",
    ],
  },
  {
    id: 2,
    title: "Pemula 2",
    price: "Rp40.000",
    benefits: [
      "Tersedia dalam pilihan Bahasa Indonesia maupun Bahasa Inggris.",
      "Review CV lama anda dan koreksi kesalahan",
      "CV kreatif, ATS, dan profesional",
      "Surat lamaran profesional yang terintegrasi dengan isi CV anda",
      "CV dengan format Word yang dapat diedit",
      "Jaminan lolos 100% ATS (Applicant Tracking System)",
      "Revisi 2 kali dan bonus e-book psikotes",
    ],
  },
  {
    id: 3,
    title: "Siap Kerja",
    price: "Rp120.000",
    benefits: [
      "Tersedia dalam pilihan Bahasa Indonesia maupun Bahasa Inggris.",
      "Review CV lama anda dan koreksi kesalahan",
      "CV kreatif, ATS, dan profesional",
      "Surat lamaran profesional yang terintegrasi dengan isi CV anda",
      "CV dengan format Word yang dapat diedit",
      "Jaminan lolos 100% ATS (Applicant Tracking System)",
      "Revisi 3 kali dan bonus e-book psikotes",
      "Grup loker terupdate setiap hari",
      "Latihan wawancara kerja secara privat",
    ],
  },
  {
    id: 4,
    title: "Langsung Kerja",
    price: "Rp170.000",
    benefits: [
      "Tersedia dalam pilihan Bahasa Indonesia maupun Bahasa Inggris.",
      "Review CV lama anda dan koreksi kesalahan",
      "CV kreatif, ATS, dan profesional",
      "Surat lamaran profesional yang terintegrasi dengan isi CV anda",
      "CV dengan format Word yang dapat diedit",
      "Jaminan lolos 100% ATS (Applicant Tracking System)",
      "Revisi sepuasnya dan bonus e-book psikotes",
      "Upgrade isi LinkedIn menjadi profesional",
      "Berkas lamaran profesional yang lengkap",
      "Grup loker terupdate setiap hari",
      "2x seminggu melakukan wawancara secara privat",
    ],
  },
];

export const servicePriceUnit = [
  {
    id: 1,
    title: "CV Kreatif",
    price: "Rp25.000",
  },
  {
    id: 2,
    title: "CV ATS",
    price: "Rp30.000",
  },
  {
    id: 3,
    title: "Surat Lamaran",
    price: "Rp20.000",
  },
  {
    id: 4,
    title: "Portofolio Digital",
    price: "Rp60.000",
  },
  {
    id: 5,
    title: "Upgrade Linkedin",
    price: "Rp40.000",
  },
  {
    id: 6,
    title: "Pelatihan Interview",
    price: "Rp40.000",
  },
  {
    id: 7,
    title: "Paket Review",
    price: "Rp10.000",
  },
];

export const testimonials: Testimoni[] = [
  {
    id: 1,
    name: "Rizky Ardiansyah",
    job: "Software Engineer",
    review: "Mentor saya sangat membantu dalam membangun CV",
    date: "5 Februari 2025",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    job: "Marketing Specialist",
    review: "Kini CV saya terlihat lebih profesional dan menarik.",
    date: "9 Februari 2025",
  },
  {
    id: 3,
    name: "Andi Prasetyo",
    job: "UI/UX Designer",
    review: "Proses mentoringnya menyenangkan dan hasilnya memuaskan!",
    date: "10 Februari 2025",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    job: "Data Analyst",
    review: "Branding personal saya kini lebih kuat setelah dibantu tim ini.",
    date: "16 Februari 2025",
  },
  {
    id: 5,
    name: "Yusuf Maulana",
    job: "Fresh Graduate",
    review:
      "Sangat membantu saya yang baru lulus untuk tampil lebih percaya diri.",
    date: "20 Februari 2025",
  },
  {
    id: 6,
    name: "Maria Fransisca",
    job: "Content Writer",
    review: "Feedback dari mentor sangat detail dan membangun.",
    date: "25 Februari 2025",
  },
  {
    id: 7,
    name: "Budi Santoso",
    job: "Product Manager",
    review:
      "Peningkatan kualitas CV saya terasa signifikan setelah konsultasi.",
    date: "28 Februari 2025",
  },
  {
    id: 8,
    name: "Anisa Rahmawati",
    job: "HR Specialist",
    review: "Layanannya sangat personalized dan sesuai kebutuhan saya.",
    date: "28 Februari 2025",
  },
];

export const contacts = [
  {
    id: 1,
    icon: whatsapp,
    text: "0859-2028-4085",
  },
  {
    id: 2,
    icon: instagram,
    text: "@glowup_career",
  },
  {
    id: 3,
    icon: tiktok,
    text: "Glowup Career Consultant",
  },
  {
    id: 4,
    icon: linkedin,
    text: "Glowup Career Consultant",
  },
];
