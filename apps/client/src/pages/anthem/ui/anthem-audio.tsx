import { forwardRef } from "react";
import { calculateByPrecision } from "../utils/calculate-by-precision";

interface AudioAnthemProps {
  title: string;
  source: string;
  updateCurrentTime: (val: number) => void;
  onEnded: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
}

const AnthemAudio = forwardRef<HTMLAudioElement, AudioAnthemProps>(
  ({ source, title, onEnded, updateCurrentTime }, ref) => {
    return (
      <audio
        ref={ref}
        autoPlay={true}
        controls
        onTimeUpdate={({ currentTarget }) => {
          const result = calculateByPrecision(currentTarget.currentTime);
          updateCurrentTime(result);
        }}
        onEnded={onEnded}
        style={{ position: "absolute", zIndex: 10 }}
      >
        <source src={source} type="audio/mp3" />
        {title}
      </audio>
    );
  }
);

export { AnthemAudio };
