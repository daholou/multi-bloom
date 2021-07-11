export const TWO_PI = Math.PI * 2;


export class Point2DMaker
{
    static createOnCircle(values: number[], n: number)
        : Point2D[]
    {
        const r = TWO_PI / n;

        return values.map(val =>
        {
            const arg = r * val;
            return new Point2D(
                Math.sin(arg),
                Math.cos(arg)
            );
        });
    }

    static createCircleChords(coefficient: number, n: number) : Line2D[]
    {
        const r = TWO_PI / n;
        const result: Line2D[] = [];

        for(let i=0.5; i<n; i++)
        {
            const ai = i;
            const bi = (i * coefficient) % n;
            result.push({
                start: new Point2D(Math.sin(r*ai), Math.cos(r*ai)),
                end: new Point2D(Math.sin(r*bi), Math.cos(r*bi)),
            });
        }

        return result;
    }
}

export class Point2D
{
    constructor(public x: number,
                public y: number)
    {
    }

    scale(lambda: number): Point2D
    {
        return new Point2D(lambda * this.x, lambda * this.y);
    }

    toCanvasXY(centerX: number, centerY: number): Point2D
    {
        const newX = Math.max(0, Math.round(centerX + this.x));
        const newY = Math.max(0, Math.round(centerY - this.y));
        return new Point2D(newX, newY);
    }
}

export interface Line2D
{
    start: Point2D;
    end: Point2D;
}

export function toCanvasPoint2D(p: Point2D, radius: number,
                                cX: number, cY: number): Point2D
{
    return p.scale(radius).toCanvasXY(cX, cY);
}

export function toCanvasLine2D(l: Line2D, radius: number,
                               cX: number, cY: number): Line2D
{
    return {
        start: toCanvasPoint2D(l.start, radius, cX, cY),
        end: toCanvasPoint2D(l.end, radius, cX, cY),
    };
}
