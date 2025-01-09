import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@/pages/error";
import { NotFoundPage } from "@/pages/not-found";
import { AnthemIndexPage } from "@/pages/anthem";
import { globalPrefix } from "@/constants";
import { LandingPage } from "@/pages/landing";
import { AnthemPage } from "@/pages/anthem/anthem-page";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      ErrorBoundary: ErrorPage,
      children: [
        {
          path: "/",
          element: <LandingPage />,
          index: true,
        },
        {
          path: "anthem",
          element: <AnthemIndexPage />,
          children: [
            {
              path: ":anthemId",
              element: <AnthemPage />,
            },
          ],
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
