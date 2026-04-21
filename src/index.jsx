import { createRoot } from "react-dom/client";
import App from "./App.jsx";


let root = createRoot(document.querySelector("#output"));
root.render(<App />);