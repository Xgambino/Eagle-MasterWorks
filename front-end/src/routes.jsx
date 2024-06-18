import React from "react";
import Catalogue from "./pages/Catalogue";
import AddToCatalogue from "./pages/AddToCatalogue";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import App from "./App";
import News from "./pages/News";
import MotorcycleOffer from "./pages/MotorcycleOffer";




export  const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/news",
    element: <News/>,
  },
  {
    path: "/catalogue",
    element: <Catalogue/>,
  },

  {
    path: "/offers",
    element: <MotorcycleOffer/>,
  },
  {
    path: "/contact-us",
    element: <ContactUs/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
); 