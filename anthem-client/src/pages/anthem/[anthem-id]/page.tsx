import { useCallback, useState } from "react";
import { timeStringToNumber } from "./utils/time-string-to-number";
import { Anthem } from "@/entities/anthem/api";
import { AudioAnthem, Stanza } from "./ui";
import { useAudioControls } from "./hooks/use-audio-controls";
import { getImageNameMapped } from "./utils";
import "./page.scss";

interface AnthemPageProps {
  anthem: Anthem;
}

export function AnthemPage({ anthem }: AnthemPageProps) {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  useAudioControls(audioRef);

  const currentLyric = anthem.lyrics.find((lyric) => {
    const a = timeStringToNumber(lyric.startTime);
    const b = timeStringToNumber(lyric.endTime);

    const isInTheTimeLapse = currentTime >= a && currentTime - 1 < b;
    return isInTheTimeLapse ? lyric : undefined;
  });

  const onEnded = useCallback(() => {
    console.log("ended");
  }, []);

  const css = `anthem-container-page ${getImageNameMapped(
    anthem.backgroundImage
  )}`;

  return (
    <div className={css}>
      <AudioAnthem
        ref={setAudioRef}
        source={anthem.source}
        title={anthem.name}
        updateCurrentTime={(val) => setCurrentTime(val)}
        onEnded={onEnded}
      />
      <Stanza lyrics={anthem.lyrics} currentLyric={currentLyric} />
    </div>
  );
}
