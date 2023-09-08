import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "../../components/table/Table";


export default function Employees() {

  const employees = useSelector((s: any) => s.employees);
  console.log(employees);

  return (
    <>
      <h2>CURRENT EMPLOYEES</h2>

      <Table />
      <NavLink to="/home">Home</NavLink>
    </>
  );
}
