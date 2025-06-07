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
import PizzaDetail from './pages/PizzaDetail/PizzaDetail';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


import './App.css'

function App() {


  return (
    <>
    <div className='grid-container'>
     <Navbar className="navbar"></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/pizza/:id" element={<PizzaDetail />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/404" element={<PNotFound />} />
    </Routes>
     <Footer className="footer"></Footer>
    </div>
    </>
  )
}

export default App
   