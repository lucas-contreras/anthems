import { LyricText } from "./lyric-text";

export type Lyric = {
    id: number;
    startTime: string;
    endTime: string;
    caption: string;
    texts: LyricText[]
};