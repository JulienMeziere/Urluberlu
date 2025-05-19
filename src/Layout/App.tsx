import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { TermsOfService } from "../pages/TermsOfService";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function App() {
  return (
    <div
      className="relative"
      style={{
        cursor:
          window.location.pathname !== "/terms-of-service" &&
          window.location.pathname !== "/privacy-policy"
            ? "none"
            : "auto",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Footer />
    </div>
  );
}
