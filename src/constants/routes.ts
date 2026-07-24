export const ROUTES_PATHS_DATA = {
  // Public
  home: "/",
  propertyDetails: "/property",

  register: "/register",
  login: "/login",

  recoveryEmail: "/recovery-email",
  resetPassword: "/reset-password/:token",

  restoreAccount: "/restore-my-account",
  activateAccount: "/activate-account",

  paymentSuccess: "/payment-success",
  paymentCancel: "/payment-cancel",

  // User Dashboard
  dashboard: "/dashboard/my-account",
  personalDetails: "/dashboard/my-account/personal-details",
  updatePassword: "/dashboard/my-account/update-password",
  myWishlist: "/dashboard/my-account/my-wishlist",
  userReviews: "/dashboard/my-account/reviews",
  reservations: "/dashboard/my-account/reservations",

  // Host Dashboard
  addProperty: "/dashboard/my-account/add-property",
  myProperties: "/dashboard/my-account/my-properties",
  hostReviews: "/dashboard/my-account/host-reviews",

  // Admin Dashboard
  adminStats: "/dashboard/my-account/admin/stats",
  adminProperties: "/dashboard/my-account/admin/properties",
  showProperty: "/dashboard/my-account/admin/properties/show",
  adminUsers: "/dashboard/my-account/admin/users",
  adminPropertyRequests: "/dashboard/my-account/admin/property-request",
  adminReviews: "/dashboard/my-account/admin/reviews",
} as const;