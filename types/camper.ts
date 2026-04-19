
export interface CamperListItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: "panel_van" | "integrated" | "alcove" | "semi_integrated";
  length: string;
  width: string;
  height: string;
  tank: string;
  description: string;
  consumption: string;
  transmission: "automatic" | "manual";
  engine: "petrol" | "diesel" | "hybrid" | "electric";
  amenities: string[];
  coverImage: string;
  totalReviews: number;
}

export interface DetailedCamper extends CamperListItem {
 gallery: {
    id: string;
    camperId: string;
    thumb: string;
    original: string;
    order: number;
  }[];
}

export interface CamperFilters {
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}

export interface CamperReviews {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  created_at: string;
}

export interface CamperListResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItem[];
}

export interface FiltersResponse {
  forms: string[];
  transmissions: string[];
  engines: string[];
}