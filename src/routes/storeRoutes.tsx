import React, { Suspense, lazy } from "react";
import StoreLayout from "@/screens/store/layout";
import { ProtectRoute } from "./guards/ProtectRoute";

const StoreListing = lazy(() => import("@/screens/store/listings"));
const Single = lazy(() => import("@/screens/store/single"));
const Payment = lazy(() => import("@/screens/store/payment"));
const Reviews = lazy(() => import("@/screens/store/reviews"));

export const storeRoutes = [
  {
    path: "/store/:id",
    element: <StoreLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<></>}>
            <StoreListing />
          </Suspense>
        ),
      },
      {
        path: "product/:productId",
        element: (
          <Suspense fallback={<></>}>
            <Single />
          </Suspense>
        ),
      },
      {
        path: "cart/:cartId",
        element: (
          <ProtectRoute allowedRoles={["BUYER"]}>
            <Suspense fallback={<></>}>
              <Payment />
            </Suspense>
          </ProtectRoute>
        ),
      },
      {
        path: "reviews/:productId",
        element: (
          <Suspense fallback={<></>}>
            <Reviews />
          </Suspense>
        ),
      },
    ],
  },
];