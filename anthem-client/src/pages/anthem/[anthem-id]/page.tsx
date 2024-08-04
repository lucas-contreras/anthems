import { useState } from "react";
import { timeStringToNumber } from "./utils/time-string-to-number";
import { Anthem } from "@/entities/anthem/api";
import { AudioAnthem, Stanza } from "./ui";
import s from "./page.module.scss";

interface AnthemPageProps {
  anthem: Anthem;
}

export function AnthemPage({ anthem }: AnthemPageProps) {
  const [currentTime, setCurrentTime] = useState<number>(0);

  const currentLyric = anthem.lyrics.find((lyric) => {
    const a = timeStringToNumber(lyric.startTime);
    const b = timeStringToNumber(lyric.endTime);

    const isInTheTimeLapse = currentTime >= a && currentTime - 1 < b;
    return isInTheTimeLapse ? lyric : undefined;
  });

  return (
    <div className={s.container}>
      <Stanza lyrics={anthem.lyrics} currentLyric={currentLyric} />
      <AudioAnthem
        source={anthem.source}
        title={anthem.name}
        updateCurrentTime={(val) => setCurrentTime(val)}
      />
    </div>
  );
}
