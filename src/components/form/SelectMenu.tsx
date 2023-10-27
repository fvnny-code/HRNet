import { SetStateAction } from "react";
import "./form.css"

export default function SelectMenu({ name, options, setFunction }: Props) {
  return (
    <div className="select">
      <label htmlFor={name}>{name}</label>
      <select
     required
        name={name}
        id={name}
        onChange={(e) => {
          setFunction(e.target.value);
        }}
      >
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

interface Props {
  name: string;
  options: Array<string>;
  setFunction: React.Dispatch<SetStateAction<string>>;
}
