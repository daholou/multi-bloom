import {useEffect, useRef} from "react";
import {Point2DMaker, toCanvasLine2D, TWO_PI} from "../model/Point2D";

interface Props
{
    coefficient: number;
    nbPoints: number;
    canvasSize: number;
}

export const Canvas = (props: Props) =>
{
    const canvasRef = useRef<HTMLCanvasElement>(null);


    const paint = () =>
    {
        const context = canvasRef.current?.getContext('2d');
        if (context)
        {
            const {width, height} = context.canvas;
            const cX = Math.floor(width/2);
            const cY = Math.floor(height/2);
            const rad = cX;

            const initLines = Point2DMaker.createCircleChords(
                props.coefficient,
                props.nbPoints);
            const lines = initLines.map(l =>
                toCanvasLine2D(l, rad, cX, cY));

            // Reset current transformation matrix to the identity matrix
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.translate(0.5, 0.5);

            context.clearRect(0, 0, width, height);

            //context.save();
            context.beginPath();
            context.strokeStyle = '#000';
            context.arc(cX, cY, rad, 0, TWO_PI);
            context.stroke();

            context.beginPath();
            // context.strokeStyle = '#F00';
            lines.forEach(line =>
            {
                context.moveTo(line.start.x, line.start.y);
                context.lineTo(line.end.x, line.end.y);
            });
            context.stroke();
            //context.restore();
        }
    }

    useEffect(() =>
    {
        paint();
    });

    return (
        <>
            <canvas
                width={props.canvasSize+1}
                height={props.canvasSize+1}
                style={{
                    padding: 10,

                    // display: 'block',

                    // width: `${CANVAS_SIZE}px`,
                    // height: `${CANVAS_SIZE}px`
                }}
                ref={canvasRef}
            />
        </>
    );
}
