import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaia Fisioterapia",
  description: "Fisioterapia y Terapia Ocupacional a Domicilio en Santa Ana y Sonsonate. Especialistas en recuperación física, terapia ocupacional y bienestar integral.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Gaia Fisioterapia',
    description: 'Fisioterapia y Terapia Ocupacional a Domicilio en Santa Ana y Sonsonate. Especialistas en recuperación física, terapia ocupacional y bienestar integral.',
    images: [
      {
        url: '/og-image.jpg', // Asegúrate de tener esta imagen en tu carpeta public
        width: 1200,
        height: 630,
        alt: 'Gaia Fisioterapia',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
