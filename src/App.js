import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServicesDetails from "./components/services/ServicesDetails";
// LAYOUTS
import RootLayout from "./layouts/RootLayout";
import ServicesLayout from "./layouts/ServicesLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServicesLayout />}>
          <Route index element={<Services />} />
          <Route path=":general_key" element={<ServicesDetails />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
