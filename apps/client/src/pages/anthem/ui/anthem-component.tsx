import { Anthem } from "@/entities/anthem";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAudioControls } from "../hooks";
import { getImageNameMapped } from "../utils/get-image-name-mapped";
import { timeStringToNumber } from "../utils/time-string-to-number";
import { AnthemAudio } from "./anthem-audio";
import { Stanza } from "./stanza";

import "./anthem-component.scss";

interface AnthemPageProps {
  anthem: Anthem;
}

export function AnthemComponent({ anthem }: AnthemPageProps) {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  useAudioControls(audioRef);

  const currentLyric = anthem.lyrics.find((lyric) => {
    const a = timeStringToNumber(lyric.startTime);
    const b = timeStringToNumber(lyric.endTime);

    const isInTheTimeLapse = currentTime >= a && currentTime - 1 < b;
    return isInTheTimeLapse ? lyric : undefined;
  });

  const onEnded = useCallback(() => {
    navigate({
      pathname: "/",
    });
  }, [navigate]);

  const css = `anthem-container-page ${getImageNameMapped(
    anthem.backgroundImage
  )}`;

  return (
    <div className={css}>
      <AnthemAudio
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
