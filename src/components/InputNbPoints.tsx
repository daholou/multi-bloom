import {Form, InputGroup} from "react-bootstrap"

interface Props
{
    disabled: boolean;
    nbPoints: number;
    onChange: (nbPoints: number) => void;
}

export const InputNbPoints = (props: Props) =>
{
    const onChangeHandler = (e: any) =>
    {
        props.onChange(e.target.valueAsNumber);
    }

    return (
        <InputGroup className="item-menu">
            <InputGroup.Prepend>
                <InputGroup.Text>
                    Modulo
                </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
                disabled={props.disabled}
                placeholder="Number of points"
                type="number"
                step={1}
                value={props.nbPoints}
                onChange={onChangeHandler}>
            </Form.Control>
        </InputGroup>
    );
}
