import {Form, InputGroup} from "react-bootstrap"
import {MIN_COEFF} from "./main/MultiBloom";

interface Props
{
    disabled: boolean;
    coefficient: number;
    onChange: (coefficient: number) => void;
}

export const InputCoefficient = (props: Props) =>
{
    const onChangeHandler = (e: any) =>
    {
        props.onChange(e.target.valueAsNumber);
    }

    return (
        <InputGroup className="item-menu">
            <InputGroup.Prepend>
                <InputGroup.Text>
                    Coefficient
                </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
                disabled={props.disabled}
                placeholder="Coefficient"
                type="number"
                step={MIN_COEFF}
                value={props.coefficient}
                onChange={onChangeHandler}>
            </Form.Control>
        </InputGroup>
    );
}
