import s from "./audio-anthem.module.scss";

interface AudioAnthemProps {
  title: string;
  source: string;
  updateCurrentTime: (val: number) => void;
}

export function AudioAnthem({
  title,
  source,
  updateCurrentTime,
}: AudioAnthemProps) {
  return (
    <audio
      className={s.audio}
      controls
      onTimeUpdate={({ currentTarget }) => {
        const rounded = Math.round(currentTarget.currentTime * 100) / 100;
        updateCurrentTime(rounded);
      }}
    >
      <source src={source} type="audio/mp3" />
      {title}
    </audio>
  );
}
