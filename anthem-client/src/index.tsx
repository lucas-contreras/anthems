import { RouterProvider } from "react-router-dom";
import { routes } from "./app/routes";

export function App() {
  return <RouterProvider router={routes} />;
}
