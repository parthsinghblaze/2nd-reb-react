import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import CounterPage from "./pages/CounterPage";
import Home from './pages/Home'
import Product from "./pages/Product";
import "./style.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
