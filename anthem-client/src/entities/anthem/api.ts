
export interface Lyric {
    id: string;
    startTime: string;
    endTime: string;
    caption: string;
    text: string[]
}

export interface Anthem {
    id: string;
    name: string;
    backgroundImage: string;
    source: string;
    description: string;
    group?: string;
    lyrics: Lyric[];
}