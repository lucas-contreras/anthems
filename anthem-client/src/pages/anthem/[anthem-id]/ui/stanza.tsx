import { useMemo } from "react";
import { Lyric } from "@/entities/anthem/api";
import s from "./stanza.module.scss";

interface StanzaProps {
  lyrics: Lyric[];
  currentLyric?: Lyric;
}

export function Stanza({ lyrics, currentLyric }: StanzaProps) {
  const result = useMemo(
    () =>
      lyrics.map((l) => {
        const paragraphs = l.text.map((t: string, index: number) => (
          <p key={index}>{t}</p>
        ));

        const classNameStanza = [s.stanza];

        if (currentLyric?.id === l.id) {
          classNameStanza.push(s["stanza--show"]);
        }

        return (
          <div key={l.caption} className={classNameStanza.join(" ")}>
            {paragraphs}
          </div>
        );
      }),
    [currentLyric, lyrics]
  );

  return <div className={s.stanzaContainer}>{result}</div>;
}
