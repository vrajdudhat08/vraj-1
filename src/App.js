// import logo from './logo.svg';
// import './App.css';
import { Route, Routes,Router } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
    

   
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    

  {/* <Profile/> */}
  </>
  );
}

export default App;


