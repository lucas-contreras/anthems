export function getImageNameMapped(name: string) {
    switch (name) {
        case '1-21.jpg': {
            return 'piano'
        }
        case '35-45.jpg': {
            return 'waves'
        }
        default:
            return 'unknown';
    }
}