export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface GalleryImage {
  thumb: string;
  original: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  address: string;
  description: string;
  transmission: "automatic" | "manual";
  engine: "petrol" | "diesel" | "hybrid";
  form: "panelTruck" | "fullyIntegrated" | "alcove";
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  // Характеристики (features) обычно приходят как булевы значения
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GalleryImage[];
  reviews: Review[];
}

export interface CampersResponse {
  items: Camper[];
  total: number;
}