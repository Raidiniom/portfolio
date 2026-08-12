import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voltaire Ratilla | IT Student & Network Enthusiast",
  description: "Portfolio of Voltaire Ratilla — IT student from Cebu, Philippines specializing in networking, cybersecurity, digital forensics, and Linux systems.",
  keywords: ["Voltaire Ratilla", "IT student", "portfolio", "networking", "cybersecurity", "digital forensics", "Cebu", "Philippines"],
  openGraph: {
    title: "Voltaire Ratilla | IT Student & Network Enthusiast",
    description: "Portfolio of Voltaire Ratilla — IT student from Cebu, Philippines.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/voltaire_ratilla.jpg",
        width: 800,
        height: 800,
        alt: "Voltaire Ratilla",
      },
    ],
  },
  icons: {
    icon: "/logo.svg"
  },
  twitter: {
    card: "summary",
    title: "Voltaire Ratilla | IT Student & Network Enthusiast",
    description: "Portfolio of Voltaire Ratilla — IT student from Cebu, Philippines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}