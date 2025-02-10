import React, { Suspense, lazy } from "react";
import { Loading } from "./components/ui/loading";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import routes from "tempo-routes";
import { useRoutes } from "react-router-dom";

// Lazy load all routes
const Home = lazy(() => import("./components/home"));
const ServicesPage = lazy(() => import("./components/sections/ServicesPage"));
const AboutPage = lazy(() => import("./components/sections/AboutPage"));
const ServiceDetail = lazy(() => import("./components/sections/ServiceDetail"));

function App() {
  // Handle Tempo routes first
  if (import.meta.env.VITE_TEMPO) {
    const tempoRoutes = useRoutes(routes);
    if (tempoRoutes) return tempoRoutes;
  }

  // Then handle application routes
  return (
    <Routes>
      {/* Add this before other routes to allow Tempo to capture its routes */}
      {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}

      <Route
        path="/"
        element={
          <Layout>
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/services"
        element={
          <Layout>
            <Suspense fallback={<Loading />}>
              <ServicesPage />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/services/:slug"
        element={
          <Layout>
            <Suspense fallback={<Loading />}>
              <ServiceDetail />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <Suspense fallback={<Loading />}>
              <AboutPage />
            </Suspense>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
