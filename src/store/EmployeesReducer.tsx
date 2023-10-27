import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../types";


const initialState: Employee[] = [];

export const EmployeesReducer = createSlice({
  name: "employees",
  initialState,

  reducers: {
    addEmployee: (state:Employee[], action: Action) => {
      state.push(action.payload);
      return state;
    },
   
  },
});

interface Action {type: string, payload: Employee}

export const { addEmployee } = EmployeesReducer.actions;
export default EmployeesReducer.reducer;