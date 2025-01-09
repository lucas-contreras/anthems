import { useEffect } from "react";
import { calculateByPrecision } from "../utils/calculate-by-precision";

export function useAudioControls(audioEl: HTMLAudioElement | null) {
    useEffect(() => {
        if (!audioEl) {
            return () => { }
        }

        const onkeydown = async (e: globalThis.KeyboardEvent) => {
            if (e.key === "0") {
                audioEl.currentTime = 0;
            }

            if (e.key === " ") {
                const isPlaying =
                    !audioEl.paused && audioEl.duration > 0;

                if (isPlaying) {
                    await audioEl.pause();
                } else {
                    await audioEl.play();
                }
            }

            if (e.key === "ArrowLeft") {
                audioEl.currentTime -= 10;
            }

            if (e.key === "ArrowRight") {
                audioEl.currentTime += 10;
            }

            if (e.key === "ArrowUp") {
                audioEl.volume = calculateByPrecision(audioEl.volume + 0.1);
            }

            if (e.key === "ArrowDown") {
                const result = calculateByPrecision(audioEl.volume - 0.1);

                audioEl.volume = result <= 0 ? 0 : result;
            }
        };

        window.addEventListener("keydown", onkeydown);

        return () => {
            window.removeEventListener("keydown", onkeydown);
        };
    }, [audioEl]);
}