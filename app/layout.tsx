import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import Footer from "./components/Footer";
import AppBar from "./components/Navbar";
import "./globals.css";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "In-Haramain Tour",
  description: "Penyedia paket umroh terbaik dan no 1 di Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <FloatingWhatsapp />
          <AppBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
