import type {PropertySchema} from "../types";

export type Field = {
  id: string;
  label: string;
  name: keyof PropertySchema;
  type: string;
};

export const PROPERTY_TYPES = [
  "Hotel",
  "Apartment",
  "Villa",
];

export const ADD_PROPERTY_FIELDS: Field[] = [
  {
    name: "name",
    type: "text",
    id: "name",
    label: "Property name",
  },
  {
    name: "stars",
    type: "number",
    id: "stars",
    label: "Property stars (1 to 5)",
  },
  {
    name: "description",
    type: "text",
    id: "description",
    label: "Property description",
  },
  {
    name: "pricePerNight",
    type: "number",
    id: "pricePerNight",
    label: "Price per night",
  },
  {
    name: "discount",
    type: "number",
    id: "discount",
    label: "Discount",
  },
  {
    name: "guests",
    type: "number",
    id: "guests",
    label: "Guests",
  },
  {
    name: "bedrooms",
    type: "number",
    id: "bedrooms",
    label: "Bedrooms",
  },
  {
    name: "beds",
    type: "number",
    id: "beds",
    label: "Beds",
  },
  {
    name: "bathrooms",
    type: "number",
    id: "bathrooms",
    label: "Bathrooms",
  },
  {
    name: "city",
    type: "text",
    id: "city",
    label: "City",
  },
  {
    name: "country",
    type: "text",
    id: "country",
    label: "Country",
  },
];