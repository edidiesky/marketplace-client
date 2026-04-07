import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("./screens/Home"));
import { ProtectRoute } from "./utils/ProtectRoute";
import MainLayout from "./screens/layout";
import {
  DashboardHome,
  Customers,
  Analytics,
  Messages,
  Orders,
  Stores,
  Marketing,
  Product,
  Account,
  Color,
  Categories,
  Size,
} from "./screens/dashboard/index";
import { StoreListing, Payment, Single, Reviews } from "./screens/store/index";
import DashboardLayout from "./screens/dashboard/layout";
import StoreLayout from "./screens/store/layout";
// import { Channel } from "./screens/workspace";
export default function App() {
  // const [height, setHeight] = useState(0);

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <Home />
              </Suspense>
            }
          />
        </Route>
        {/* store layout
         */}
        <Route
          path={"/store/:id/"}
          element={
            <ProtectRoute>
              <StoreLayout />
            </ProtectRoute>
          }
        >
          {/* store listings */}
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <StoreListing />
              </Suspense>
            }
          />
          {/* single product */}
          <Route
            path="product/:productid"
            element={
              <Suspense fallback={<></>}>
                <Single />
              </Suspense>
            }
          />
          {/* store cart/payment */}
          <Route
            path="cart/:productid"
            element={
              <Suspense fallback={<></>}>
                <Payment />
              </Suspense>
            }
          />
          {/* reviews */}
          <Route
            path="reviews/:productid"
            element={
              <Suspense fallback={<></>}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
        {/* Dashboard layout */}
        <Route
          path={"/dashboard/store/:id/"}
          element={
            <ProtectRoute>
              <DashboardLayout />
            </ProtectRoute>
          }
        >
          {/* index */}
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <DashboardHome />
              </Suspense>
            }
          />
          {/* Stores Id route */}
          <Route
            path=":id"
            element={
              <Suspense fallback={<></>}>
                <Stores />
              </Suspense>
            }
          />
          {/* product route */}
          <Route
            path="product"
            element={
              <Suspense fallback={<></>}>
                <Product />
              </Suspense>
            }
          />
          {/* color route */}
          <Route
            path="colors"
            element={
              <Suspense fallback={<></>}>
                <Color />
              </Suspense>
            }
          />

          {/* size route */}
          <Route
            path="sizes"
            element={
              <Suspense fallback={<></>}>
                <Size />
              </Suspense>
            }
          />

          {/* category route */}
          <Route
            path="categories"
            element={
              <Suspense fallback={<></>}>
                <Categories />
              </Suspense>
            }
          />

          {/* Customers route */}
          <Route
            path="Customers"
            element={
              <Suspense fallback={<></>}>
                <Customers />
              </Suspense>
            }
          />
          {/* Analytics route */}
          <Route
            path="analytics"
            element={
              <Suspense fallback={<></>}>
                <Analytics />
              </Suspense>
            }
          />

          {/* Messages route */}
          <Route
            path="messages"
            element={
              <Suspense fallback={<></>}>
                <Messages />
              </Suspense>
            }
          />
          {/* Orders route */}
          <Route
            path="Orders"
            element={
              <Suspense fallback={<></>}>
                <Orders />
              </Suspense>
            }
          />
          {/* Marketing route */}
          <Route
            path="Marketing"
            element={
              <Suspense fallback={<></>}>
                <Marketing />
              </Suspense>
            }
          />

          {/* Account route */}
          <Route
            path="account"
            element={
              <Suspense fallback={<></>}>
                <Account />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
