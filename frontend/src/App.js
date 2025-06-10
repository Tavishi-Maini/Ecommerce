import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import HomeCategory from './Pages/HomeCategory';
import Home from './Pages/Home';
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/LoginSignup";
import Footer from './Components/Footer/Footer';
import holo_banner from './Components/Assets/holo2.jpeg';
import std_banner from './Components/Assets/ice1.jpeg';
import patt_banner from './Components/Assets/flow1.JPG';
import com2_banner from './Components/Assets/two1.jpeg';
import com3_banner from './Components/Assets/three1.jpeg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/holo" element={<HomeCategory banner={holo_banner} category="Holo" />} />
        <Route path="/std" element={<HomeCategory banner={std_banner} category="Std" />} />
        <Route path="/patt" element={<HomeCategory banner={patt_banner} category="Patt" />} />
        <Route path="/com2" element={<HomeCategory banner={com2_banner} category="Com2" />} />
        <Route path="/com3" element={<HomeCategory banner={com3_banner} category="Com3" />} />
        {/*<Route path="/product" element={<Product />} />*/}
        <Route path="/product/:productId" element={<Product />} >
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
