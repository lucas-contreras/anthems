import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./app-layout";
import { globalPrefix } from "../config";
import { Anthems, ErrorPage, NotFoundPage } from "@/pages";
import { AnthemPage } from ".";
import { SeekBar } from "./ui/seek-bar";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      ErrorBoundary: ErrorPage,
      children: [
        {
          path: '/',
          element: <div><SeekBar /></div>,
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
