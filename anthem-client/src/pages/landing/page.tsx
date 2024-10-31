import { SeekBar } from "@/widgets/seek-bar/seek-bar";
import { Header } from "@/app/ui/header";
import "./page.scss";

export function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <SeekBar />
    </div>
  );
}
