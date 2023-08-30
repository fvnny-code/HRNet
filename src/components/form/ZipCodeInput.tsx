import { SetStateAction } from "react";
import "./form.css"
export default function zipCodeInput({ name, setFunction }: Props) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input id={name} name={name} type="number" inputMode="numeric"
        onChange={(event) => {setFunction(event.target.value)}} className="number">
      </input>
    </div>
  );
}

interface Props {
  name: string;
  setFunction: React.Dispatch<SetStateAction<string>>;
}
