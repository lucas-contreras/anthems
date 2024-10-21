import { Outlet } from "react-router-dom";
import { Header } from "./ui/header";
import s from "./app-layout.module.scss";

export function AppLayout() {
  return (
    <main className={s.container}>
      <Header />
      <Outlet />
    </main>
  );
}
