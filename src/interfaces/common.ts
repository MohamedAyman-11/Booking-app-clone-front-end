export type UserRole = "user" | "host" | "admin";

export type Provider = "local" | "google";

export type PropertyStatus = "pending" | "accepted" | "rejected";

export type BookingStatus = "pending" | "confirmed" | "completed";

export type PaymentStatus = "unpaid" | "paid" | "refunded";

export interface Image {
  url: string;
  public_id: string;
}

export interface Location {
  city: string;
  country: string;
}