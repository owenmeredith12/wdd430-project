import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "A marketplace for artisans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Handcrafted Haven</h1>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/marketplace" className="hover:text-blue-500">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="/artisans" className="hover:text-blue-500">
                  Artisans
                </a>
              </li>
              <li>
                <a href="/account" className="hover:text-blue-500">
                  Account
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-blue-500">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main page content */}
        <main className="container mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
