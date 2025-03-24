"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dispatch,
  SetStateAction,
  useState,
  KeyboardEvent,
  useEffect,
} from "react";
import { useCookies } from "react-cookie";

export default function SearchHeader({
  setSearchTerm,
  setPlatform,
  setCountry,
}: {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  platform: string;
  setPlatform: Dispatch<SetStateAction<string>>;
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
}) {
  const [searchField, setSearchField] = useState("");

  const checkKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchTerm(searchField);
    }
  };

  const [cookies, setCookie] = useCookies(["platform", "country"]);

  useEffect(() => {
    setCountry(cookies.country);
    setPlatform(cookies.platform);
  }, [cookies, setCountry, setPlatform]);

  return (
    <header className="border-b sticky top-0 bg-background z-10">
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <div className="relative flex-1 w-full">
            <Input
              type="text"
              placeholder="Search or Paste App Store URL..."
              className="w-full pr-10"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
              onKeyDown={checkKey}
            />
          </div>

          <Select
            defaultValue={cookies.country}
            onValueChange={(val) => setCookie("country", val)}
          >
            <SelectTrigger className="w-full sm:w-[160px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="gb">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="jp">Japan</SelectItem>
            </SelectContent>
          </Select>

          <Select
            defaultValue={cookies.platform}
            onValueChange={(val) => setCookie("platform", val)}
          >
            <SelectTrigger className="w-full sm:w-[130px]">
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ios">iOS/iPadOS</SelectItem>
              <SelectItem value="macos">MacOS</SelectItem>
            </SelectContent>
          </Select>

          <Button
            className="w-full sm:w-auto"
            onMouseUp={() => setSearchTerm(searchField)}
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </header>
  );
}
