import { HTTPError } from "./http-error";

export async function fetchJSON<T>(info: RequestInfo, init: RequestInit = {}): Promise<T> {
    const res = await fetch(info, init);
    
    if (!res.ok) {
        throw new HTTPError(res.status, res.statusText);
    }

    const contentType = (res.headers.get('Content-Type') || '').split(';')[0];

    switch (contentType) {
        case 'application/json': {
            try {
                return await res.json();
            } catch {
                throw new Error('Invalid JSON response');
            }
        }
        default: {
            return res.text() as T;
        }
    }
}
