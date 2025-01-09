import { Outlet } from "react-router-dom";
// import "./index.scss";

export function Layout() {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
}
