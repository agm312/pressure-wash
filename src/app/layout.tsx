import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PressurePro: Professional Pressure Washing Services in Chicago, IL',
  description: 'Expert pressure washing services in Chicago and surrounding suburbs. Professional cleaning for homes, driveways, decks, and commercial properties. Licensed, insured, and locally owned.',
  keywords: 'pressure washing Chicago, power washing Chicago, driveway cleaning Chicago, house washing Illinois, deck cleaning Chicago, commercial pressure washing Chicago',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-600">Chi Pressure Wash</div>
              <div className="space-x-6">
                <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                <a href="/services" className="text-gray-600 hover:text-blue-600">Services</a>
                <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
                <a href="/gallery" className="text-gray-600 hover:text-blue-600">Gallery</a>
                <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Chi Pressure Wash</h3>
                <p className="text-gray-400">Professional pressure washing services for residential and commercial properties in Chicago and surrounding suburbs.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                <p className="text-gray-400">Chicago • Oak Park • Evanston</p>
                <p className="text-gray-400">Naperville • Schaumburg • Aurora</p>
                <p className="text-gray-400">Available 7 days a week</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="/gallery" className="text-gray-400 hover:text-white">Project Gallery</a></li>
                  <li><a href="/faq" className="text-gray-400 hover:text-white">FAQs</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Chi Pressure Wash. All rights reserved. | Licensed & Insured</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 