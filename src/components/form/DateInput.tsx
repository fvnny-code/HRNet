import { SetStateAction } from "react";
import "./form.css"

export default function DateInput({name, setFunction}:Props){
    return(
        <div>
            <label htmlFor={name}>{name}</label>
            <input type="date" id={name} name={name} 
            onChange={(event)=> {setFunction(event.target.value)}} >
            </input>
        </div>
    )

}

interface Props {
    name: string,
    setFunction: React.Dispatch<SetStateAction<string>>
}