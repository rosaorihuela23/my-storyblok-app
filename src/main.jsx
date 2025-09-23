import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./storyblok/Page";
import Teaser from "./storyblok/Teaser";
import Feature from "./storyblok/Feature";
import Grid from "./storyblok/Grid";
import BlogPage from "./storyblok/BlogPage";
import ImageBlock from "./storyblok/ImageBlock";

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  bridge: import.meta.env.VITE_STORYBLOK_IS_PREVIEW === "true",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    feature: Feature,
    grid: Grid,
    image_block: ImageBlock, 
    blog_page: BlogPage, 
  },
});

// routes
const router = createBrowserRouter([
  { path: '/', element: <App slug="home" /> },
  { path: '/blogging', element: <App slug="blogging" /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
