import { Outlet } from "react-router-dom";

export function RootPage() {
  return (
    <main>
      hello there
      <Outlet />
    </main>
  );
}
