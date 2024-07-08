import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="w-full flex flex-col"> 
      
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      
      
    </div>
  )
};

export default App;
