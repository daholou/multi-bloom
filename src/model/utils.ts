export const toInt = (o: any): number =>
{
    return parseInt(String(o));
}

export const toFloat = (o: any): number =>
{
    return parseFloat(String(o));
}

export function clamp(a: number, x: number, b: number)
{
    return x < a ? a : x > b ? b : x;
}
