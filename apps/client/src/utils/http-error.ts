export class HTTPError extends Error {
    static UNAUTHORIZED_HTTP_CODE = 401;

    constructor(public status: number, public message: string) {
        super(message);
    }
}
