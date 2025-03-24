"use client";

import CardList from "@/components/card-list";
import SearchHeader from "@/components/search-header";
import { useEffect, useState } from "react";
import { CookiesProvider } from "react-cookie";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [country, setCountry] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const [platform, setPlatform] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm || !platform || !country) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams({
          searchTerm,
          platform,
          country,
        });

        const res = await fetch(`/api/itunes-search?${params}`);

        if (!res.ok) {
          throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();
        setCards(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        console.error("Error searching for apps:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, platform, country]);

  return (
    <CookiesProvider>
      <div className="flex-col justify-self-center min-h-screen lg:w-224  bg-background">
        <SearchHeader
          setSearchTerm={setSearchTerm}
          platform={platform}
          setPlatform={setPlatform}
          country={country}
          setCountry={setCountry}
        />
        <main className="container mx-auto py-6 px-4">
          <CardList cardData={cards} />
        </main>
      </div>
    </CookiesProvider>
  );
}
