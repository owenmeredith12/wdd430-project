"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Input from "../components/ui/input";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Listing } from "./page";

type MarketplaceProps = {
  listings: Listing[];
};

export default function MarketplaceClient({ listings }: MarketplaceProps) {
  const [search, setSearch] = useState("");

  const filteredListings = listings.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-4xl font-bold">Marketplace</h1>
        <Input
          placeholder="Search handcrafted items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {listings.length === 0 && (
        <div className="text-center text-gray-500 text-lg mt-20">
          No items available yet. Check back soon!
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredListings.map((item) => (
          <Card key={item.id} className="rounded-2xl shadow-sm hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-xl font-semibold truncate">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <p className="text-lg font-medium mb-4">${item.price}</p>
              <Button className="w-full rounded-xl">View Item</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
