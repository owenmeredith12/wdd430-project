import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-oswald flex flex-col">

      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-24">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Handcrafted Haven
        </h1>
        <p className="max-w-xl text-lg md:text-xl mb-8">
          Discover unique handcrafted treasures from talented artisans. A
          minimalist marketplace connecting creators with conscious consumers.
        </p>
        <Link href="/marketplace" className="border border-black px-8 py-3 text-lg hover:bg-black hover:text-white transition">
          Explore Marketplace
        </Link>
      </section>

      <section className="bg-black text-white py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center px-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Support Local Artisans</h2>
            <p>Connect with talented creators and promote handmade goods.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Sustainable Consumption</h2>
            <p>Shop consciously and embrace the beauty of handcrafted items.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Community Driven</h2>
            <p>
              Join a thriving community of creators and passionate consumers.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready to discover your next treasure?
        </h2>
        <Link href="/marketplace" className="border border-black px-8 py-3 text-lg hover:bg-black hover:text-white transition">
          Get Started
        </Link>
      </section>

      <footer className="bg-white border-t border-black py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Handcrafted Haven. All rights reserved.</p>
      </footer>
    </main>
  );
}
