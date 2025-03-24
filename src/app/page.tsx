"use client";

import CardList from "@/components/card-list";
import SearchHeader from "@/components/search-header";
import { useState } from "react";
import { CookiesProvider } from "react-cookie";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [platform, setPlatform] = useState("");
  const [country, setCountry] = useState("");
  const [cards, setCards] = useState("");

  return (
    <CookiesProvider>
      <div className="min-h-screen bg-background">
        <SearchHeader
          setSearchTerm={setSearchTerm}
          platform={platform}
          setPlatform={setPlatform}
          country={country}
          setCountry={setCountry}
        />
        <main className="container mx-auto py-6 px-4">
          <CardList />
        </main>
      </div>
    </CookiesProvider>
  );
}
