import {
  Accessibility,
  Ban,
  BellRing,
  Bus,
  Coffee,
  CoffeeIcon,
  CookingPot,
  Dumbbell,
  ParkingCircle,
  PawPrint,
  Snowflake,
  Trees,
  Tv,
  Umbrella,
  Users,
  UtensilsCrossed,
  WashingMachine,
  Waves,
  Wifi,
} from "lucide-react";

export const AMENITIES_DATA = {
  Wifi: {
    label: "Wi-Fi",
    icon: Wifi,
  },
  Parking: {
    label: "Free Parking",
    icon: ParkingCircle,
  },
  Pool: {
    label: "Swimming Pool",
    icon: Waves,
  },
  AirConditioning: {
    label: "Air Conditioning",
    icon: Snowflake,
  },
  TV: {
    label: "TV",
    icon: Tv,
  },
  Kitchen: {
    label: "Kitchen",
    icon: CookingPot,
  },
  Laundry: {
    label: "Washing Machine",
    icon: WashingMachine,
  },
  Gym: {
    label: "Gym",
    icon: Dumbbell,
  },
  Pets: {
    label: "Pets Allowed",
    icon: PawPrint,
  },
  Breakfast: {
    label: "Breakfast",
    icon: Coffee,
  },
  Restaurant: {
    label: "Restaurant",
    icon: UtensilsCrossed,
  },
  RoomService: {
    label: "Room Service",
    icon: BellRing,
  },
  FamilyRooms: {
    label: "Family Rooms",
    icon: Users,
  },
  NonSmokingRooms: {
    label: "Non-Smoking Rooms",
    icon: Ban,
  },
  AirportShuttle: {
    label: "Airport Shuttle",
    icon: Bus,
  },
  TeaCoffeeMaker: {
    label: "Tea/Coffee Maker",
    icon: CoffeeIcon,
  },
  Garden: {
    label: "Garden",
    icon: Trees,
  },
  Beachfront: {
    label: "Beachfront",
    icon: Umbrella,
  },
  Accessible: {
    label: "Accessible",
    icon: Accessibility,
  },
} as const;

export const AMENITIES = Object.keys(
  AMENITIES_DATA
) as (keyof typeof AMENITIES_DATA)[];