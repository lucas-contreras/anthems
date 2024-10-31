import { Outlet } from "react-router-dom";
import s from "./app-layout.module.scss";

export function AppLayout() {
  return (
    <main className={s.container}>
      <Outlet />
    </main>
  );
}
