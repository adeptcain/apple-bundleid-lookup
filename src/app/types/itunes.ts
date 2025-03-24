// Base result interface for iTunes API
interface ITunesResult {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl512?: string;
  screenshotUrls: string[];
  ipadScreenshotUrls: string[];
  appletvScreenshotUrls: string[];
  features: string[];
  supportedDevices: string[];
  advisories: string[];
  isGameCenterEnabled: boolean;
  kind: string;
  trackId: number;
  trackName: string;
  trackCensoredName: string;
  trackViewUrl: string;
  releaseDate: string;
  sellerName: string;
  primaryGenreName: string;
  primaryGenreId: number;
  genreIds: string[];
  genres: string[];
  price: number;
  currency: string;
  description: string;
  bundleId: string;
  version: string;
  averageUserRating?: number;
  userRatingCount?: number;
  contentAdvisoryRating: string;
  formattedPrice: string;
  minimumOsVersion: string;
  releaseNotes?: string;
  fileSizeBytes: string;
}

// Search response
export interface ITunesSearchResponse {
  resultCount: number;
  results: ITunesResult[];
}

// Lookup response (single app)
export interface ITunesLookupResponse {
  resultCount: number;
  results: ITunesResult[];
}

// API request parameters
export interface ITunesSearchParams {
  searchTerm: string;
  platform: string;
  country: string;
}
