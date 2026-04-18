import { createRoot } from "react-dom/client";
import { App } from "app/App";
import "./src/shared/libs/i18n";
import "shared/styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
