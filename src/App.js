import { createContext, useState } from "react";
import ComponentA from "./component/ComponentA";
import Header from "./component/Header";

export const UserContext = createContext()

function App() {

  const [userName, setUserName] = useState("Karan")
  const [cart, setCart] = useState(10)

  return (
    <UserContext.Provider value={{userName, cart}}>
      <div className="App">
        <ComponentA />
        <Header />
      </div>
    </UserContext.Provider>
  );
}

export default App;
