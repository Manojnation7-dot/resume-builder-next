import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';  // ✅ Global header
import Footer from './components/Footer'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Create Your Perfect Resume — MakeAResumeNow.com',
    template: '%s | MakeAResume',
  },
  description: 'Create your perfect resume online, free PDF export, modern templates, instant download.',
  keywords: [
    'free resume builder',
    'online CV maker',
    'PDF resume download',
    'modern resume templates',
    'instant download',
    'ATS friendly CV',
  ],
  openGraph: {
    title: 'Create Your Perfect Resume — MakeAResumeNow.com',
    description: 'Build your CV instantly and download as PDF. 100% free online resume maker.',
    url: 'https://makearesumenow.com', // ✅ Replace with your domain
    siteName: 'Create Your Perfect Resume — MakeAResumeNow.com',
    images: [
      {
        url: 'https://makearesumenow.com/og-image.png', // ✅ Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: 'Create Your Perfect Resume — MakeAResumnow.com',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create Your Perfect Resume — MakeAResumeNow.com',
    description: 'Build your CV instantly and download as PDF. 100% free online resume maker.',
    images: ['https://makearesumenow.com/og-image.png'], // ✅ Same OG image
  },
  metadataBase: new URL('https://makearesumenow.com'),
  icons: {
    icon: '/favicon.ico',
  },
   alternates: {
    canonical: 'https://makearesumenow.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
         <Footer />
      </body>
    </html>
  );
}
