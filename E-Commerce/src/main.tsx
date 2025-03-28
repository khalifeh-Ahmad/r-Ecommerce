import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRouter";
//redux
import store from "@store/store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
