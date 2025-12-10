"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Input from "../components/ui/input";
import { motion } from "framer-motion";
import { Artisan } from "./page";

type ArtisansProps = {
  artisans: Artisan[];
};

export default function ArtisansClient({ artisans }: ArtisansProps) {
  const [search, setSearch] = useState("");

  const filteredArtisans = artisans.filter((artisan) =>
    artisan.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-4xl font-bold">Artisans</h1>
        <Input
          placeholder="Search artisans..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {artisans.length === 0 && (
        <div className="text-center text-gray-500 text-lg mt-20">
          No artisans available yet. Check back soon!
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredArtisans.map((artisan) => (
          <Card key={artisan.id} className="rounded-2xl shadow-sm hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-xl font-semibold truncate">{artisan.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                {artisan.profileImageUrl && (
                  <Image
                    src={artisan.profileImageUrl}
                    alt={artisan.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <p className="text-gray-700 mb-4 line-clamp-3">{artisan.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
