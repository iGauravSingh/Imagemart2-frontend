
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


import { Provider } from "react-redux";
import { store } from "./app/store.ts";

import "./index.css";

import HomePage from "./pages/HomePage.tsx";
import Authentication from "./pages/AuthenticationPage.tsx";
import CategoryItemPage from "./pages/CategoryItemPage.tsx";
import PricingPage from "./pages/PricingPage.tsx";
import ShopingCartPage from "./pages/ShopingCartPage.tsx";
import AiGeneratorPage from "./pages/AiGeneratorPage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import PrivateRoutes from "./utils/PrivateRoutes.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/cart" element={<ShopingCartPage />} />
      <Route path="/plans" element={<PricingPage />} />
      <Route path="/image/:cat/:id" element={<CategoryItemPage />} />

      {/* private route to dashboard  */}
      <Route path="/dashboard" element={<PrivateRoutes />}>
      <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

    {/* private route to aigen  */}
    <Route path="/aigen" element={<PrivateRoutes />}>
    <Route path="/aigen" element={<AiGeneratorPage />} />
      </Route>

      {/* route to admin page  */}
      <Route path="/admin" element={<AdminPage />} />

      
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
  
);
