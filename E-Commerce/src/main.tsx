import { createRoot } from "react-dom/client";
import { MainLayout } from "@layouts/index";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
);
