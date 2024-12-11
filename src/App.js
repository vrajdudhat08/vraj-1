import { Route,Routes } from "react-router-dom";

import Login from "./pages/Login";
function App() {
  return (
    <>
     

     <Routes> 
        <Route path="/" element={<></>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
      
     </Routes> 

    </>
  );
}

export default App;
