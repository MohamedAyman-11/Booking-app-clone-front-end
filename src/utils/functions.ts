import axios from "axios";
import toast from "react-hot-toast";

import type {PropertySchema} from "../types";
import type {BookingStatus, PaymentStatus, PropertyStatus,} from "../interfaces";

// Rating
export const getRatingLabel = (
  rating: number,
  ratingsQuantity: number
) => {
  if (ratingsQuantity === 0) return "No reviews yet";
  if (rating >= 4.8) return "Excellent";
  if (rating >= 4.5) return "Wonderful";
  if (rating >= 4.2) return "Very Good";
  if (rating >= 3.5) return "Good";
  return "Not Recommended";
};

// Price
export const formatPrice = (price: number) => price.toLocaleString();

export const getPriceAfterDiscount = (
  price: number,
  discount = 0
) => {
  const safeDiscount = Math.min(Math.max(discount, 0), 100);

  return Math.round(price * (1 - safeDiscount / 100));
};

// Axios Error
export const handleAxiosError = (error: unknown) => {
  const message =
    axios.isAxiosError(error)
      ? error.response?.data?.message
      : "Something went wrong!";

  toast.error(message ?? "Something went wrong!");
};

// Avatar
export const stringAvatar = (
  name: string,
  fontSize = "17px"
) => ({
  sx: {
    background: "#ffb700",
    p: "16px",
    fontSize,
  },
  children: name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase(),
});

// Property FormData
export const handlePropertyReqBody = ({
                                        name,
                                        description,
                                        propertyType,
                                        pricePerNight,
                                        images,
                                        country,
                                        city,
                                        discount,
                                        bathrooms,
                                        bedrooms,
                                        guests,
                                        stars,
                                        beds,
                                        amenities,
                                      }: PropertySchema) => {
  const formData = new FormData();

  formData.append("name", name);
  formData.append("description", description);
  formData.append("propertyType", propertyType);

  formData.append("pricePerNight", String(pricePerNight));
  formData.append("guests", String(guests));
  formData.append("bedrooms", String(bedrooms));
  formData.append("beds", String(beds));
  formData.append("bathrooms", String(bathrooms));
  formData.append("discount", String(discount));
  formData.append("stars", String(stars));

  formData.append("city", city);
  formData.append("country", country);

  amenities.forEach((amenity) =>
    formData.append("amenities", amenity)
  );

  images.forEach((image) =>
    formData.append("images", image)
  );

  return formData;
};

// Text Slice
export const textSlice = (
  text: string,
  limit = 34
) => (text.length > limit ? `${text.slice(0, limit)}...` : text);

// Property Status Color
const propertyStatusColors: Record<
  PropertyStatus,
  { bg: string; color: string }
> = {
  accepted: {
    bg: "#CDF9D7",
    color: "#2E9B45",
  },
  pending: {
    bg: "#FDE6BD",
    color: "#C97A14",
  },
  rejected: {
    bg: "#FCDDDD",
    color: "#C62828",
  },
};

export const renderColor = (
  status: PropertyStatus
) => propertyStatusColors[status];

// Reject Reason
export const validateRejectReason = (
  rejectReason: string
) => {
  const value = rejectReason.trim();

  if (!value) {
    return "Reject reason is required.";
  }

  if (value.length < 20) {
    return "Reject reason must be at least 20 characters.";
  }

  return "";
};

// Booking Status Color
const bookingStatusColors: Record<
  BookingStatus,
  { color: string; bgcolor: string }
> = {
  confirmed: {
    color: "#16A34A",
    bgcolor: "#DCFCE7",
  },
  pending: {
    color: "#D97706",
    bgcolor: "#FEF3C7",
  },
  completed: {
    color: "#2563EB",
    bgcolor: "#DBEAFE",
  },
};

export const getBookingStatusColor = (
  status: BookingStatus
) => bookingStatusColors[status];

// Payment Status Color
const paymentStatusColors: Record<
  PaymentStatus,
  { color: string; bgcolor: string }
> = {
  paid: {
    color: "#16A34A",
    bgcolor: "#DCFCE7",
  },
  unpaid: {
    color: "#DC2626",
    bgcolor: "#FEE2E2",
  },
  refunded: {
    color: "#6B7280",
    bgcolor: "#F3F4F6",
  },
};

export const getPaymentStatusColor = (
  status: PaymentStatus
) => paymentStatusColors[status];