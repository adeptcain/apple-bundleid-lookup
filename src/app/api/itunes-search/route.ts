import { ITunesSearchResponse } from "@/app/types/itunes";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const searchTerm = searchParams.get("searchTerm");
  const platform = searchParams.get("platform");
  const country = searchParams.get("country");

  if (!searchTerm) {
    return Response.json({ error: "Search term is required" }, { status: 400 });
  }

  try {
    const baseUrl = searchTerm.startsWith("https://apps.apple.com")
      ? `https://itunes.apple.com/${country}/lookup?id=${
          searchTerm.match(/id\d*/)?.[0].substring(2) || ""
        }`
      : `https://itunes.apple.com/search?country=${country}&media=software&entity=${
          platform === "ios" ? "software,iPadSoftware" : ""
        }&term=${searchTerm}`;

    const response = await fetch(baseUrl);

    if (!response.ok) {
      throw new Error(`iTunes API responded with status: ${response.status}`);
    }

    const data: ITunesSearchResponse = await response.json();
    const mappedData = data.results.map((e, i) => {
      return {
        id: i,
        icon: e.artworkUrl100,
        title: e.trackName,
        subtitle: e.artistName,
        content: e.bundleId,
      };
    });
    return Response.json(mappedData);
  } catch (err) {
    console.error("iTunes API error:", err);
    return Response.json(
      {
        error: err instanceof Error ? err.message : "An unknown error occured",
      },
      { status: 500 }
    );
  }
}
