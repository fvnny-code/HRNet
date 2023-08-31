import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../GlobalState";
import TableWrapper from "../../components/table/TableWrapper";

export default function Employees() {
  const cols: Array<string> = [
    "First Name",
    "Last Name",
    "Start Date",
    "Date of Birth",
    "Street",
    "City",
    "State",
    "Zip Code",
    "Department",
  ]
  const {state} = useGlobalState()
  
  const items: Array<Array<string>> = state.map(employee => {
    if(employee !== undefined) {
        return Object.values(employee)
      }else return []
  })

  return (
    <>
      <h2>CURRENT EMPLOYEES</h2>
      <TableWrapper id="currentEmployeesTable" cols={cols} items={items} />
      <NavLink to="/home">Home</NavLink>
    </>
  );
}
