import type {User} from "./user";
import type {Property} from "./index.ts";

export interface ReviewCategories {
  cleanliness: number;
  accuracy: number;
  check_in: number;
  communication: number;
  location: number;
  value: number;
}

export interface Review {
  _id: string;
  overAllRating: number;
  message: string;
  categories: ReviewCategories;
  user: User;
  property: string;
  createdAt: string;
}

export interface UserReview extends Omit<Review, "property"> {
  property: Property;
}