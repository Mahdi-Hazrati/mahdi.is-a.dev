import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mahdi Hazrati - Frontend Developer',
  description: 'Portfolio website of Mahdi Hazrati, a frontend developer specializing in React and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <script defer src="https://platform.analytick.ir/script.js" data-website-id="349f3d32-3f13-47d5-a15d-de78f668336f"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
