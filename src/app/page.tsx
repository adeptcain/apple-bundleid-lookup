import CardList from "@/components/card-list";
import SearchHeader from "@/components/search-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SearchHeader />
      <main className="container mx-auto py-6 px-4">
        <CardList />
      </main>
    </div>
  );
}
