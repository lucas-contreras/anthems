import { useMemo, useRef } from "react";
import { Lyric } from "@/entities/lyric";
import "./stanza.scss";

interface StanzaProps {
  lyrics: Lyric[];
  currentLyric?: Lyric;
}

export function Stanza({ lyrics, currentLyric }: StanzaProps) {
  const stanzaContainerRef = useRef<HTMLDivElement | null>(null);

  const result = useMemo(
    () =>
      lyrics.map((lyric, idx, self) => {
        const paragraphs = lyric.text.map((t: string, idx: number) => (
          <p className="stanza-paragraph" key={idx}>
            {t}
          </p>
        ));

        const classNameStanza = ["stanza"];

        if (idx === 0 || self.length - 1 === idx) {
          classNameStanza.push("stanza-title");
        }

        if (currentLyric?.id === lyric.id) {
          classNameStanza.push("stanza--show");
        }

        return (
          <section key={lyric.id} className={classNameStanza.join(" ")}>
            {paragraphs}
            <span className="stanza-caption">{lyric.caption}</span>
          </section>
        );
      }),
    [currentLyric, lyrics]
  );

  return (
    <div ref={stanzaContainerRef} className="stanza-container">
      {result}
    </div>
  );
}
