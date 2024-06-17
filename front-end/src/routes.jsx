import React from "react";
import About from "./pages/About";
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




export  const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/catalogue",
    element: <Catalogue/>,
  },

  {
    path: "/add-to-catalogue",
    element: <AddToCatalogue/>,
  },
  {
    path: "/contact-us",
    element: <ContactUs/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
); 