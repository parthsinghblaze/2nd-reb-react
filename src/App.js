import { createContext, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

export const WrapperContext = createContext();

function getLocalStorageData() {
  const tableData = localStorage.getItem('tableData')
  if(tableData) {
    return JSON.parse(tableData)
  } else {
    return []
  }
}

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [tableData, setTableData] = useState(getLocalStorageData())

  // for editing 
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState(null)

  function deleteData(id) {
    const filterData = tableData.filter((item) => item.id !== id)
    localStorage.setItem('tableData', JSON.stringify(filterData));
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
    localStorage.setItem('tableData', JSON.stringify(editItems));
  }

  return (
    <WrapperContext.Provider value={{ firstName, setFirstName, lastName, setLastName, city, setCity, tableData, setTableData, deleteData, addToEditStage, isEdit, handleEdit }}>
      <Form />
      <Table />
    </WrapperContext.Provider>
  );
}

export default App;