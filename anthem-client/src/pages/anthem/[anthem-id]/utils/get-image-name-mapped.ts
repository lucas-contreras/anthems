export function getImageNameMapped(name: string) {
    switch (name) {
        case '1-21.jpg': {
            return 'piano'
        }
        default:
            return 'unknown';
    }
}