import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// import TableWrapper from "../../components/table/TableWrapper";

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
  const employees = useSelector ((s:any)=> s.employees)
  console.log(employees)

  return (
    <>
      <h2>CURRENT EMPLOYEES</h2>
      {/* <TableWrapper id="currentEmployeesTable" cols={cols} items={employees} /> */}
      <NavLink to="/home">Home</NavLink>
    </>
  );
}
