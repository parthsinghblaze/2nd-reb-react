import { createContext, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

export const WrapperContext = createContext()

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [tableData, setTableData] = useState([])

  return (
    <WrapperContext.Provider value={{ firstName, setFirstName, lastName, setLastName, city, setCity, tableData, setTableData }}>
      <Form />
      <Table />
    </WrapperContext.Provider>
  );
}

export default App;


// first name, last name, city 

// [
//   {
//     firstName: "",
//     lastName: "",
//     city: ""
//   },
//   {
//     firstName: "",
//     lastName: "",
//     city: ""
//   }
// ]
