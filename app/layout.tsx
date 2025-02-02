import './globals.css';
import type { Metadata } from 'next';



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
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

