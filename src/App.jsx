import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { Router,Route, Routes } from "react-router-dom";
function App(){
  return(
    <>
        <Navbar/>
    <h1>This App</h1>
  <Routes>
   
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>

    
  </Routes>

    </>
  )
}
export default App;