import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import './App.css'

function App() {


  return (
    <>
    <div className='grid-container'>
     <Navbar className="navbar"></Navbar>
     {/* <Home className="home"></Home> */}
    {/*  <Register></Register> */}
    <Cart></Cart>
     {/* <Login></Login> */}
     <Footer className="footer"></Footer>
     </div>
    </>
  )
}

export default App
   