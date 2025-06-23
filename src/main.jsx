import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className=" bg-[#D9D9D9] py-6">
      <div className="urbanist-font mx-4 max-w-7xl md:mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>
);
