// import logo from './logo.svg';
import './index.css';
import { Route, Routes,Router } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./Homepage/Profile"
import Profile from "./pages/Home";
import Mainpage from "./Homepage/Mainpage";
import Exprience from './Homepage/Exprience';
import Education from './Homepage/Education';
import Skills from './Homepage/Skills';

function App() {
  return (
    <>
    

   
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/mainpage" element={<Mainpage/>} />
      <Route path="/exprience" element={<Exprience/>} />
      <Route path="/education" element={<Education/>} />
      <Route path="/skills" element={<Skills/>} />
    </Routes>
    

  {/* <Profile/> */}
  </>
  );
}

export default App;


