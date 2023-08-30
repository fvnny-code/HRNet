import React, { createContext, useContext, Dispatch, useReducer } from "react";
import { Employee } from "./types";


// Create React Context
const GLobalStateContext = createContext({
    state: [] as Partial<Array<Employee>>,
    dispatch: {} as Dispatch<Action>,
})
/**
 * A reducer with different actions to change the global state
 */
function reducer(employees: Array<Employee>, action: Action) {
    switch (action.type) {
      case "addEmployee":
        employees.push(action.payload)
        return employees
      default : 
        throw new Error()
    }
  }
  
  type Action = 
  | {type: "addEmployee", payload: Employee}

  /**
   * GlobalStateContext.Provider, used in App.tsx . 
   * Thos global state will carry state & dispatch from the reducer.
   */
  export const GLobalStateProvider = ({children, value= [] }: Props)=> {
    const [state, dispatch] = useReducer(reducer, value)
    return(
        <GLobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GLobalStateContext.Provider>
    )
  }
  interface Props {
    children: React.ReactNode,
    value?: Array<Employee>
  }

  /**
   * Allows to use useGlobalState() instead of useContext(GlobalStateContext)
   */
  export const useGlobalState = () => {
    const context = useContext(GLobalStateContext)
    if(!context) {
        throw new Error ("useGlobalState must be used within a GlobalStateContext")
    }
    return context
  }