import "./form.css"

export default function Fieldset(Props: Props) {
  return (
    <fieldset>
      <legend>{Props.name}</legend>
      {Props.children}
    </fieldset>
  );
}

interface Props {
  name: string;
  children: React.ReactNode;
}
