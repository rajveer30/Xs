import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Sign from "./Components/Sign";
import Login from "./Components/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/sign" element={<Sign/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
