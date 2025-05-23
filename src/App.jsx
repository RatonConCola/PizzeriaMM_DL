import {Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Cart from "./pages/Cart/Cart"
import Pizza from "./pages/Pizza/Pizza";
import Profile from "./pages/Profile/Profile"
import PNotFound from "./pages/PNotFound/PNotFound"
import './App.css'

function App() {


  return (
    <>
    <div className='grid-container'>
     <Navbar className="navbar"></Navbar>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/pizza" element={<Pizza/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/404" element={<PNotFound/>}/>
     </Routes>
     <Footer className="footer"></Footer>
    </div>
    </>
  )
}

export default App
   