
export function calculateByPrecision(value: number, precision = 2) {
    const factor = 10 ** precision;
    const result = Math.round(value * factor) / factor;

    return result;
}