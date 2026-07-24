import type {BookingStatus, Image, Location, PaymentStatus,} from "./common";
import type {User} from "./user";

export interface BookingProperty {
  _id: string;
  name: string;
  propertyType: string;
  pricePerNight: number;
  location: Location;
  images: Image[];
  host: User;
}

export interface Booking {
  _id: string;
  user: User;
  property: BookingProperty;
  checkIn: string;
  checkOut: string;
  guests: number;
  pricePerNight: number;
  totalPrice: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
  updatedAt: string;
}