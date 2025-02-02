import './globals.css';
import type { Metadata } from 'next';
import { newsreader } from './fonts/fonts';
// import {Playwrite_GB_S} from './fonts/fonts';

import Navbar from './ui/navbar';
import Footer from './ui/footer';


export const metadata: Metadata = {
  title: 'GRIMOIRE',
  description: 'Personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex-container">
        <Navbar />
        <main className={`${newsreader.className} content`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

