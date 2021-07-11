import React, {useRef, useState} from "react";
import {Button, Container, Row, Col} from "react-bootstrap";
import {Canvas} from "../Canvas";
import {InputCoefficient} from "../InputCoefficient";
import {clamp, toFloat, toInt} from "../../model/utils";
import {InputStep} from "../InputStep";
import {InputNbPoints} from "../InputNbPoints";
import {InputCanvasSize} from "../InputCanvasSize";

export const MIN_COEFF = 0;
export const MIN_STEP = 0.001;
export const AVG_STEP = 0.005;
export const MIN_NB_POINTS = 1;
export const AVG_NB_POINTS = 666;
export const MAX_NB_POINTS = 10000;

const TXT = {
  btnStart: "▶ Start",
  btnStop: "⏸️ Stop",
  btnReset: "Reset",
};

export const MultiBloom = () =>
{
    const [isRunning, setIsRunning] = useState(false);
    const refCoefficient = useRef(0);
    const refIsRunning = useRef(false);

    const [coefficient, setCoefficient] = useState(MIN_COEFF);
    const [nbPoints, setNbPoints] = useState(AVG_NB_POINTS);
    const [step, setStep] = useState(AVG_STEP);
    const [canvasSize, setCanvasSize] = useState(700);

    const tick = () =>
    {
        //console.log(`ticking.... ${refCoef.current}`);
        if(refIsRunning.current)
        {
            requestAnimationFrame(tick);
            refCoefficient.current += step;
            coefficientChangeHandler(refCoefficient.current);
        }
    };

    const onClickHandler = () =>
    {
        refIsRunning.current = !refIsRunning.current;
        setIsRunning(refIsRunning.current);
        if(refIsRunning.current)
        {
            requestAnimationFrame(tick);
        }
    };

    const onResetHandler = () =>
    {
        console.log('reset')
        refIsRunning.current = false;
        setIsRunning(false);
        setStep(AVG_STEP);
        setNbPoints(AVG_NB_POINTS);
    };

    const btnVariant = isRunning ? 'outline-danger' : 'outline-success';
    const btnText = isRunning ? TXT.btnStop : TXT.btnStart;

    const coefficientChangeHandler = (newCoefficient: number) =>
    {
        const val = toFloat(newCoefficient.toFixed(4));
        const num = isNaN(val) ? MIN_COEFF : Math.max(val, MIN_COEFF);
        refCoefficient.current = num;
        setCoefficient(num);
        //console.log(num);
    }

    const stepChangeHandler = (newStep: number) =>
    {
        const val = toFloat(newStep.toFixed(4));
        const num = isNaN(val) ? MIN_STEP : val;
        setStep(num);
        //console.log(num);
    }

    const nbPointsChangeHandler = (newNbPoints: number) =>
    {
        const val = toInt(newNbPoints);
        const num = isNaN(val)
            ? MIN_NB_POINTS
            : clamp(MIN_NB_POINTS, val, MAX_NB_POINTS);
        setNbPoints(num);
        //console.log(num);
    }

    const canvasSizeChangeHandler = (newCanvasSize: number) =>
    {
        setCanvasSize(newCanvasSize);
    }

    return (
        <Container fluid className="container-app">

            <Row className="justify-content-center">
                <Col className="left-menu">

                    <Row className="justify-content-center">
                        <InputCoefficient
                            disabled={isRunning}
                            coefficient={coefficient}
                            onChange={coefficientChangeHandler}/>
                    </Row>
                    <Row className="justify-content-center">
                        <InputStep
                            disabled={isRunning}
                            step={step}
                            onChange={stepChangeHandler}/>
                    </Row>
                    <Row className="justify-content-center">
                        <InputNbPoints
                            disabled={isRunning}
                            nbPoints={nbPoints}
                            onChange={nbPointsChangeHandler}/>
                    </Row>
                    <Row className="justify-content-center">
                        <InputCanvasSize canvasSize={canvasSize}
                                         onChange={canvasSizeChangeHandler}/>
                    </Row>

                    <Row className="justify-content-center">
                        <Button className="item-menu"
                                size={"lg"}
                                variant={btnVariant}
                                onClick={onClickHandler}>
                            {btnText}
                        </Button>
                    </Row>

                    <Row className="justify-content-center">
                        <Button className="item-menu"
                                size={"lg"}
                                variant={'outline-secondary'}
                                onClick={onResetHandler}>
                            {TXT.btnReset}
                        </Button>
                    </Row>
                </Col>
                <Col>
                    <Canvas coefficient={coefficient}
                            nbPoints={nbPoints}
                            canvasSize={canvasSize}/>
                </Col>
            </Row>

        </Container>
    );
}
