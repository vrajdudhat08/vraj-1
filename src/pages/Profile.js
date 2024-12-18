import React from 'react'
import { useState } from 'react';

function Profile() {

  const [user,setuser] = useState({
    Firstname: "",
    Lastname: "",
    Username: "",
    Emailaddress: "",
    Gender: "",
    City: "",
})
function handleSumbit(){
    console.log(user);
}

function handlechange(e){
    const {name, value} = e.target
    setuser({...user, [name]: value})
}

console.log(user);

  
  return (
    <div className='container p-5 col-md-6  border border-black'>
      <h1>ProfilePage</h1>

      <div>
      <img src={"/download.jfif"} alt="image" />
    </div>
 
    <input type='text' className='Form-control m-2 p-1' placeholder='Firstname' id='Name'/><br/>
     value = {user.Username}
     onchange={(e) => handlechange(e)}
    <input type='text' className='Form-control m-2 p-1' placeholder='Lastname' id='Name'/><br/>
    <input type='text' className='Form-control m-2 p-1' placeholder='Email' id='Name'/><br/>
    <input type='text' className='Form-control m-2 p-1' placeholder='Contact us' id='Name'/>


<div>
<h2>Gender</h2>
  <div className="form-check">
     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label className="form-check-label" htmlFor="flexRadioDefault1">male</label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
    <label className="form-check-label" htmlFor="flexRadioDefault2">female</label>
  </div>
</div>

   <h2>Exprience</h2>
    <p>1 year in jbs it institute</p>

   <h2>Education</h2>  
     <p>BCA(FY-SEM1)</p>



     <button className="btn btn-primary" onClick={handleSumbit}>
        Submit
      </button>



    </div>
     
    

  )
}

export default Profile