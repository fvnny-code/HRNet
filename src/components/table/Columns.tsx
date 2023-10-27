import { Column } from "react-table";

export const COLUMNS: Array<object> = [
    {
        Header: "First Name",
        accessor: "firstName",
    },
    {
        Header: "Last Name",
        accessor: "lastName",
    },
    {
        Header: "Date of Birth",
        accessor: "dateOfBirth",
    },
    {
        Header: "Sart Date ",
        accessor: "startDate",
    },
    {
        Header: "Street",
        accessor: "street",
    },
    {
        Header: "City",
        accessor: "city",
    },
    {
        Header: "Zip Code",
        accessor: "zipCode",
    },
    {
        Header: "State",
        accessor: "state",
    },
    {
        Header: "Department",
        accessor: "department",
    }


]
interface COLUMNS {
  column: Array<Column>;
  Header: string;
  accessor: string
}