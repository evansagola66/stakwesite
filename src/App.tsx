import React, { Suspense } from "react";
import { Loading } from "./components/ui/loading";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import Layout from "./components/layout/Layout";
import Home from "./components/home";

// Lazy load secondary routes
const ServicesPage = React.lazy(
  () => import("./components/sections/ServicesPage"),
);
const ServiceDetail = React.lazy(
  () => import("./components/sections/ServiceDetail"),
);

function App() {
  return (
    <>
      {/* For the tempo routes */}
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
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
        {/* Add this before the catchall route */}
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </>
  );
}

export default App;
