import {Form, InputGroup} from "react-bootstrap"
import {MIN_STEP} from "./main/MultiBloom";

interface Props
{
    disabled: boolean;
    step: number;
    onChange: (step: number) => void;
}

export const InputStep = (props: Props) =>
{
    const onChangeHandler = (e: any) =>
    {
        props.onChange(e.target.valueAsNumber);
    }

    return (
        <InputGroup className="item-menu">
            <InputGroup.Prepend>
                <InputGroup.Text>
                    Step
                </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
                disabled={props.disabled}
                placeholder="Step"
                type="number"
                step={MIN_STEP}
                value={props.step}
                onChange={onChangeHandler}>
            </Form.Control>
        </InputGroup>
    );
}
