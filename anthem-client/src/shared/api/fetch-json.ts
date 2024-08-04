import { HTTPError } from "./http-error";

export async function fetchJSON<T>(info: RequestInfo, init: RequestInit = {}): Promise<T> {
    const res = await fetch(info, init);
    if (!res.ok) {
        throw new HTTPError(res.status, res.statusText);
    }
    return res.json();
}
