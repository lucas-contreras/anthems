import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./app-layout";
import { globalPrefix } from "../config";
import { Anthems, ErrorPage, LandingPage, NotFoundPage } from "@/pages";
import { AnthemPage } from ".";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      ErrorBoundary: ErrorPage,
      children: [
        {
          path: '/',
          element: <LandingPage />,
          index: true,
        },
        {
          path: "anthem",
          element: <Anthems />,
        },
        {
          path: "anthem/:anthemId",
          element: <AnthemPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  {
    basename: globalPrefix,
  }
);
