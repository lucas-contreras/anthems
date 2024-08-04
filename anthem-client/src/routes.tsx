import { createBrowserRouter } from "react-router-dom";
import { globalPrefix } from "./config/config";
import {
  NotFoundPage,
  RootPage,
  ErrorPage,
  Anthems,
  AnthemPage,
} from "./pages";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootPage />,
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
