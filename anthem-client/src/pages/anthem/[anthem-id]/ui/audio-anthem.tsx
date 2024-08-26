import { forwardRef } from "react";
import { calculateByPrecision } from "../utils";

interface AudioAnthemProps {
  title: string;
  source: string;
  updateCurrentTime: (val: number) => void;
  onEnded: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
}

const AudioAnthem = forwardRef<HTMLAudioElement, AudioAnthemProps>(
  ({ source, title, onEnded, updateCurrentTime }, ref) => {
    return (
      <audio
        ref={ref}
        // controls
        onTimeUpdate={({ currentTarget }) => {
          const result = calculateByPrecision(currentTarget.currentTime);
          updateCurrentTime(result);
        }}
        onEnded={onEnded}
        // style={{ display: "none" }}
      >
        <source src={source} type="audio/mp3" />
        {title}
      </audio>
    );
  }
);

export { AudioAnthem };
