import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import CounterPage from "./pages/CounterPage";
import Home from './pages/Home'
import Product from "./pages/Product";
import "./style.css"
import AddProduct from "./pages/AddProduct";
import ViewProduct from "./pages/ViewProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-product" element={<ViewProduct />} />
      </Routes>
    </>
  );
}

export default App;