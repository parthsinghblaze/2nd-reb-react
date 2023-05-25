import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import CounterPage from "./pages/CounterPage";
import Home from './pages/Home'
import Product from "./pages/Product";
import "./style.css"
import AddProduct from "./pages/AddProduct";
import ViewProduct from "./pages/ViewProduct";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <PrivateRoute>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-product" element={<ViewProduct />} />
        <Route path="/edit-product/:id" element={<AddProduct />} />
      </Routes>
      </PrivateRoute>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;