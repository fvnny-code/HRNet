import { SetStateAction } from "react";
import "./form.css"

export default function TextInput({ name, setFunction, required }: Props) {

    return(
        <div>
            <label htmlFor={name}>{name}</label>
            <input type="text" id={name} name={name}
            onChange={(event)=>{setFunction(event.target.value)}}
            required={required ? true : false}>
            </input>
        </div>
    )
}

interface Props {
  name: string;
  setFunction: React.Dispatch<SetStateAction<string>>;
  required?: boolean;
}
