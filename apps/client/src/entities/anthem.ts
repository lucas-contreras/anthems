import { Lyric } from "./lyric";

export interface Anthem {
    id: string;
    name: string;
    backgroundImage: string;
    source: string;
    description: string;
    group?: string;
    lyrics: Lyric[];
}