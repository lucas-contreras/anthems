import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./app-layout";
import { globalPrefix } from "../config";
import { AnthemPage, Anthems, ErrorPage, NotFoundPage } from "@/pages";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      ErrorBoundary: ErrorPage,
      children: [
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
