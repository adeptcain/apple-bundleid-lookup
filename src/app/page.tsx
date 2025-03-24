"use client";

import CardList from "@/components/card-list";
import SearchHeader from "@/components/search-header";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <SearchHeader setSearchTerm={setSearchTerm} />
      <main className="container mx-auto py-6 px-4">
        <CardList />
      </main>
    </div>
  );
}
