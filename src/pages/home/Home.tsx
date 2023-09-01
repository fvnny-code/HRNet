import React, { useState } from "react";

import { useDispatch } from "react-redux";
import DepartmentSelect from "../../components/form/selectPresets/DepartmentSelect";
import FieldSet from "../../components/form/FieldSet";
import TextInput from "../../components/form/TextInput";
import StateSelect from "../../components/form/selectPresets/StateSelect";
import DateInput from "../../components/form/DateInput";
import ZipCodeInput from "../../components/form/ZipCodeInput";
import Modal from "../../components/modal/Modal";

import "./home.css";
import { addEmployee } from "../../store/EmployeesReducer";

export default function Home() {
  // stores every input value
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [dept, setDept] = useState("");
  // modal
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // on sbumit, add new employee to globalState
  const dispatch = useDispatch();
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(
      addEmployee({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: birthDate,
        startDate: startDate,
        street: street,
        city: city,
        zipCode: zipCode,
        state: state,
        department: dept,
      })
    );
    //display a modal with a success message
    setModalMessage("Employee " + firstName + " " + lastName + " created !");
    setModalVisibility(true);

    const target = event.target as HTMLFormElement;

    // reset the form
    target.reset();
  };

  return (
    <>
      <h2>CREATE A NEW EMPLOYEE</h2>
      <Modal
        message={modalMessage}
        visibility={modalVisibility}
        setVisibility={setModalVisibility}
      />
      <form onSubmit={handleSubmit}>
        <TextInput name="First Name" setFunction={setFirstName} required />
        <TextInput name="Last Name" setFunction={setLastName} required />
        <DateInput name=" Date of Birth" setFunction={setBirthDate} />
        <DateInput name=" Start Date" setFunction={setStartDate} />
        <FieldSet name="Address">
          <TextInput name="Street" setFunction={setStreet} required />
          <TextInput name="City" setFunction={setCity} required />
          <StateSelect setFunction={setState} />
          <ZipCodeInput name="Zip Code" setFunction={setZipCode} />
        </FieldSet>
        <DepartmentSelect setFunction={setDept} />
        <button type="submit" value="Submit">
          SAVE
        </button>
      </form>
    </>
  );
}
