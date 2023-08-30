import { SetStateAction } from "react";
import SelectMenu from "../SelectMenu";

export default function DepartmentSelect({ setFunction }: Props) {
  const departments: Array<string> = ["Sales","Marketing", "Engineering", "Human Ressources", "Legal" ];
  return(
    <SelectMenu name="Department" options={departments} setFunction={setFunction}/>
  ) 
}
interface Props {
  setFunction: React.Dispatch<SetStateAction<string>>;
}
