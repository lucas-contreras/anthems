import { Lyric } from "./lyric";

export type Anthem = {
    id: string;
    name: string;
    backgroundImage: string;
    source: string;
    description: string;
    group?: string;
    lyrics: Lyric[];
}