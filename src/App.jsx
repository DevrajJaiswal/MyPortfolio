import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

function AosInitializer() {
  const location = useLocation();

  useEffect(() => {
    let attempts = 0;

    const setupAos = () => {
      if (typeof window !== "undefined" && window.AOS) {
        window.AOS.init({
          duration: 900,
          once: true,
        });
        if (typeof window.AOS.refreshHard === "function") {
          window.AOS.refreshHard();
        }
        return;
      }

      if (attempts < 20) {
        attempts += 1;
        setTimeout(setupAos, 100);
      }
    };

    setupAos();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AosInitializer />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<MainLayout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/skills" element={<MainLayout />}>
          <Route index element={<Skills />} />
        </Route>
        <Route path="/projects" element={<MainLayout />}>
          <Route index element={<Projects />} />
        </Route>
        <Route path="/blogs" element={<MainLayout />}>
          <Route index element={<Blog />} />
        </Route>
        <Route path="/contact" element={<MainLayout />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
