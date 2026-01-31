import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Overview from "./pages/Overview.jsx";
import Amendments from "./pages/Amendments.jsx";
import AmendmentDetail from "./pages/AmendmentDetail.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/amendments" element={<Amendments />} />
          <Route path="/amendments/:id" element={<AmendmentDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
