import { createContext, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

export const WrapperContext = createContext()

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [tableData, setTableData] = useState([])

  // for editing 
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState(null)

  function deleteData(id) {
    const filterData = tableData.filter((item) => item.id !== id)
    setTableData(filterData);
  }

  function addToEditStage(item) {
    const { id, firstName, lastName, city } = item 
    setIsEdit(true)
    setEditId(id)

    setCity(city)
    setFirstName(firstName)
    setLastName(lastName)
  }

  
  function handleEdit(e) {
    e.preventDefault() 
    const editItems = tableData.map((item) => {
      if(item.id === editId) {
        return {...item, firstName, lastName, city}
      } else {
        return item 
      }
    })

    setFirstName("")
    setLastName("")
    setCity("")
    setIsEdit(false)
    setEditId(null)

    setTableData(editItems);
  }

  return (
    <WrapperContext.Provider value={{ firstName, setFirstName, lastName, setLastName, city, setCity, tableData, setTableData, deleteData, addToEditStage, isEdit, handleEdit }}>
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
