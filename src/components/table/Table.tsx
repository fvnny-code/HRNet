import "./table.css"

export default function Table({ cols, items }: Props) {
    
  return (
    <table>
      <thead>
        <tr>
          {cols.map((col, index) => {
            return <th key={index}>{col}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {
            items.map((item, index)=>{
                return <tr key={index}>
                    {
                        item.map((value, index)=>{
                            return<td key={index}>{value}</td>
                        })
                    }
                
              </tr>
            })
        }
       
      </tbody>
    </table>
  );
}

interface Props {
  cols: Array<string>;
  items: Array<Array<string>>;
}
