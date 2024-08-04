import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export function AppRouteProvider() {
  return <RouterProvider router={routes} />;
}
