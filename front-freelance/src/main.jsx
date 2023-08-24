import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./router";
import { ContextProvider } from "./Context/contextHome";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     
        <RouterProvider router={router} />

  </React.StrictMode>
);