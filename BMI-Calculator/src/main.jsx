import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Tolgee, DevTools } from "@tolgee/web";
import { TolgeeProvider } from "@tolgee/react";
import App from "./App.jsx";
import "./index.css";

const tolgee = Tolgee()
  .use(DevTools())
  .init({
    apiUrl: import.meta.env.VITE_TOLGEE_API_URL || "https://app.tolgee.io",
    apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
    fallbackLanguage: "en",
    defaultLanguage: "en",   // 👈 add this line
  });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TolgeeProvider tolgee={tolgee} fallback="Loading translations...">
      <App />
    </TolgeeProvider>
  </StrictMode>
);
