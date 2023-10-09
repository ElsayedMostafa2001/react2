import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import App from"./App";

import CartPage from "./CartPage/CartPage";
import AboutPage from "./AboutPage/AboutPage";

import Users from "./ProductPage/Users"



const router = createBrowserRouter([
  {
    path: "/",
    element:<App/> ,
  },
  


  {
    path: "About",
    element:<AboutPage/> ,
  },
  
  {
    path: "user",
    element:<Users/> ,
  },
  
  
  {
    path: "Cart",
    element:<CartPage/> ,
  },
  
  
  

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


