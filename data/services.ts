type ServicePrice = {
  id: Number;
  title: String;
  price: String;
  benefits: Array<String>;
};

export const servicesPrice: ServicePrice[] = [
  {
    id: 1,
    title: "Pemula 1",
    price: "Rp35.000",
    benefits: [
      "Tersedia dalam bahasa indonesia atau bahasa inggris",
      "Review CV lama anda dan koreksi kesalahan",
      "CV kreatif dan profesional",
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
      "Tersedia dalam bahasa indonesia atau bahasa inggris",
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
      "Tersedia dalam bahasa indonesia atau bahasa inggris",
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
      "Tersedia dalam bahasa indonesia atau bahasa inggris",
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
