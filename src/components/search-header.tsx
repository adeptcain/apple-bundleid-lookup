import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SearchHeader() {
  return (
    <header className="border-b sticky top-0 bg-background z-10">
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Input type="text" placeholder="Search..." className="w-full pr-10" />
          </div>

          {/* Add platform dropdown here */}
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ios">iOS/iPadOS</SelectItem>
              <SelectItem value="macos">MacOS</SelectItem>
            </SelectContent>
          </Select>

          <Button className="w-full sm:w-auto">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="jp">Japan</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
}

