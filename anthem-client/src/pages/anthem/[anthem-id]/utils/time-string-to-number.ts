export function timeStringToNumber(value: string) {
    const splitted = value.split(":");

    return splitted.reduce((prev, curr, index) => {
        const factorial = 60 ** (splitted.length - (index + 1));
        const seconds = parseInt(curr, 10) * factorial;

        return prev + seconds;
    }, 0);
}