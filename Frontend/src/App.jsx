import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hotels from "./components/Hotels";
import Footer from "./components/Footer";

// Import pages
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignuPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Hotels />
              <Footer />
            </>
          }
        />

        {/* Other Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </>
  );
}

export default App;
