import React from "react";
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'קריינות | Batya Harush',
  description: "Welcome to Batya Harush's showcase! Dive into the world of a seasoned radio broadcaster and talented narrator."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white text-gray-800 p-4">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="font-bold text-xl">Batya Harush</div>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-[#166aea]">בתיה הרוש</a></li>
              <li><a href="/about" className="hover:text-[#166aea]">אודות</a></li>
              <li><a href="/voice-clips" className="hover:text-[#166aea]">קטעי קול</a></li>
              <li><a href="/videos" className="hover:text-[#166aea]">וידאו</a></li>
              <li><a href="/contact" className="hover:text-[#166aea]">צור קשר</a></li>
            </ul>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="max-w-7xl mx-auto text-center">
            <p>Contact: 605a7baede844d278b89dc95ae0a9123@sentry-next.wixpress.com</p>
            <p>Additional Contacts: 8c4075d5481d476e945486754f783364@sentry.io, dd0a55ccb8124b9c9d938e3acf41f8aa@sentry.wixpress.com, c183baa23371454f99f417f6616b724d@sentry.wixpress.com</p>
            <p>Social Media: <a href="https://www.wix.com" className="hover:text-[#166aea]">Wix</a>, <a href="https://www.facebook.com/batya" className="hover:text-[#166aea]">Facebook</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
