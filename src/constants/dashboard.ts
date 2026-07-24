import type {DASHBOARD_ITEMS} from "../interfaces";
import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  Handbag,
  Heart,
  House,
  Lock,
  Plus,
  UserRound,
  Users,
  UserStar,
} from "lucide-react";
import StarIcon from "@mui/icons-material/Star";

import {ROUTES_PATHS_DATA} from "./routes";

const PERSONAL_DETAILS_ITEM: DASHBOARD_ITEMS = {
  text: "Personal Details",
  icon: UserRound,
  path: ROUTES_PATHS_DATA.personalDetails,
};

const SECURITY_SETTINGS_ITEM: DASHBOARD_ITEMS = {
  text: "Security Settings",
  icon: Lock,
  path: ROUTES_PATHS_DATA.updatePassword,
};

export const USER_DASHBOARD_ITEMS: DASHBOARD_ITEMS[] = [
  PERSONAL_DETAILS_ITEM,
  SECURITY_SETTINGS_ITEM,
  {
    text: "Saved",
    icon: Heart,
    path: ROUTES_PATHS_DATA.myWishlist,
  },
  {
    text: "Reviews",
    icon: UserStar,
    path: ROUTES_PATHS_DATA.userReviews,
  },
  {
    text: "Bookings & Trips",
    icon: Handbag,
    path: ROUTES_PATHS_DATA.reservations,
  },
];

export const HOST_DASHBOARD_ITEMS: DASHBOARD_ITEMS[] = [
  PERSONAL_DETAILS_ITEM,
  SECURITY_SETTINGS_ITEM,
  {
    text: "My Properties",
    icon: House,
    path: ROUTES_PATHS_DATA.myProperties,
  },
  {
    text: "Add Property",
    icon: Plus,
    path: ROUTES_PATHS_DATA.addProperty,
  },
  {
    text: "Reviews",
    icon: UserStar,
    path: ROUTES_PATHS_DATA.hostReviews,
  },
  {
    text: "Reservations",
    icon: CalendarDays,
    path: ROUTES_PATHS_DATA.reservations,
  },
  {
    text: "Saved",
    icon: Heart,
    path: ROUTES_PATHS_DATA.myWishlist,
  },
];

export const ADMIN_DASHBOARD_ITEMS: DASHBOARD_ITEMS[] = [
  {
    text: "Stats",
    icon: BarChart3,
    path: ROUTES_PATHS_DATA.adminStats,
  },
  PERSONAL_DETAILS_ITEM,
  SECURITY_SETTINGS_ITEM,
  {
    text: "Properties",
    icon: House,
    path: ROUTES_PATHS_DATA.adminProperties,
  },
  {
    text: "Users",
    icon: Users,
    path: ROUTES_PATHS_DATA.adminUsers,
  },
  {
    text: "Reviews",
    icon: StarIcon,
    path: ROUTES_PATHS_DATA.adminReviews,
  },
  {
    text: "Reservations",
    icon: CalendarDays,
    path: ROUTES_PATHS_DATA.reservations,
  },
  {
    text: "Property Requests",
    icon: ClipboardList,
    path: ROUTES_PATHS_DATA.adminPropertyRequests,
  },
];