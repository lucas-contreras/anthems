import { Header } from "@/ui/header";
import { SeekBar } from "@/ui/seek-bar";
import { Layout } from "@/ui/layout";
import "./index.scss";

export function LandingPage() {
  return (
    <div className="landing-page">
      <Header title="himnario adventista" />
      <SeekBar />
      <Layout />
    </div>
  );
}
