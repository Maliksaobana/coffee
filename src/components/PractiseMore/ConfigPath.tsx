import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './global.css'
import FullConfig from "./FullConfig.tsx";

createRoot(document.querySelector('#main')!).render(
    <StrictMode>

        <FullConfig />
    </StrictMode>
)