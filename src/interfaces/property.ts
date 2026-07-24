import type {TAmenities} from "../types";
import type {Image, Location, PropertyStatus} from "./common";
import type {Review} from "./review";

export interface PropertyHost {
  _id: string;
  name: string;
  email: string;
  photo: {
    url: string;
  };
}

export interface PropertyStats {
  _id: string;
  overAllRating: number;
  cleanliness: number;
  location: number;
  accuracy: number;
  check_in: number;
  communication: number;
  value: number;
  ratingsQuantity: number;
}

export interface Property {
  _id: string;
  name: string;
  stars: number;
  propertyType: string;
  description: string;
  pricePerNight: number;
  discount?: number;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  images: Image[];
  amenities: TAmenities[];
  location: Location;
  averageRating: number;
  ratingsQuantity: number;
  host?: PropertyHost;
  isSaved: boolean;
  stats: PropertyStats[];
  status: PropertyStatus;
  rejectReason?: string;
  createdAt: string;
  reviews: Review[];
}

export interface SavedProperty {
  _id: string;
  user: string;
  property: Property;
}