import React from "react";
import {Form, InputGroup} from "react-bootstrap";
import {toInt} from "../model/utils";

interface Props
{
    canvasSize: number;
    onChange: (canvasSize: number) => void;
}

export function InputCanvasSize(props: Props)
{
    const onChangeHandler = (e: any) =>
    {
        props.onChange(toInt(e.target.value));
    }

    const options = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    return (
        <InputGroup className="item-menu">
            <InputGroup.Prepend>
                <InputGroup.Text>
                    Canvas size
                </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
                as="select"
                placeholder="Number of points"
                value={props.canvasSize}
                onChange={onChangeHandler}>
                {options.map(opt =>
                    <option key={opt} value={opt}>{opt} px</option>
                )}
            </Form.Control>
        </InputGroup>
    );
}
