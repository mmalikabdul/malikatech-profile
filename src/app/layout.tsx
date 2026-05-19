import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MalikaTech | Solusi Digital Cerdas & Transformasi Layanan Publik",
  description: "MalikaTech membangun aplikasi web skalabel, sistem antrean (QNext), platform tiket (MalikaDesk), dan solusi layanan publik terintegrasi yang dirancang untuk era modern.",
  keywords: ["Software House", "Sistem Antrean", "Aplikasi Web", "Layanan Publik", "Ticketing System", "IT Consultant", "QNext", "MalikaDesk"],
  authors: [{ name: "MalikaTech" }],
  creator: "MalikaTech",
  openGraph: {
    title: "MalikaTech | Solusi Digital Cerdas",
    description: "Merekayasa mesin digital berkinerja tinggi untuk layanan publik modern.",
    url: "https://malikatech.com", // Ganti dengan domain asli nanti
    siteName: "MalikaTech",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MalikaTech | Solusi Digital Cerdas",
    description: "Merekayasa mesin digital berkinerja tinggi untuk layanan publik modern.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0f172a] text-[#e0e3e5] font-body-md overflow-x-hidden antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
