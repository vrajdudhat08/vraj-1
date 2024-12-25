import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Profile() {

    const [user,setuser] = useState({
        Firstname: "",
        Lastname: "",
        Username: "",
        Password: "",
        Emailaddress: "",
        Occupation: "",
        Gender: "",
        City: "",
    })

    function handleSubmit(){
        console.log(user);
    }

    function handlechange(e){
        const {name, value} = e.target
        setuser({...user, [name]: value})
    }

 
    console.log(user);

  return (
    
    <form className="container col-md-6 border border-black p-5 " noValidate>
    <h3 className='container col-md-6 text-primary'>Create Linkedin Profile</h3>
    {/* <img src="https://static.vecteezy.com/system/resources/previews/045/944/199/non_2x/male-default-placeholder-avatar-profile-gray-picture-isolated-on-background-man-silhouette-picture-for-user-profile-in-social-media-forum-chat-greyscale-illustration-vector.jpg" style={{width: '18rem'}} className="card-img-top border border-dark-subtle border-2" alt="..." /> */}
    <div className="col-md-6">
        <label htmlFor="validationCustom01" className="form-label">First name</label>
        <input type="text" name="Firstname"
        value={user.Firstname}
        onChange={(e) => handlechange(e)}
         className="form-control" id="validationCustom01"  required />
        {/* <div className="valid-feedback">Looks good!</div> */}
    </div>

    <div className="col-md-6">
        <label htmlFor="validationCustom02" className="form-label">Last name</label>
        <input type="text" name="Lastname"
        value={user.Lastname}
        onChange={(e) => handlechange(e)}
         className="form-control" id="validationCustom02"  required />
        {/* <div className="valid-feedback">Looks good!</div> */}
    </div>

    <div className="col-md-6">
        <label htmlFor="validationCustomUsername" className="form-label">Username</label>
        <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" name="Username"
            value={user.Username}
            onChange={(e) => handlechange(e)}
             className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
            {/* <div className="invalid-feedback">Please choose a username.</div> */}
        </div>
    </div>

    <div className="col-md-6">
        <label htmlFor="validationCustom02" className="form-label">Password</label>
        <input type="text" name="Lastname"
        value={user.Lastname}
        onChange={(e) => handlechange(e)}
         className="form-control" id="validationCustom02"  required />
        {/* <div className="valid-feedback">Looks good!</div> */}
    </div>

    <div className="col-md-6 mb-3">
         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" name="Emailaddress"
        value={user.Emailaddress}
        onChange={(e) => handlechange(e)}
         className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>

    <div className='col-md-6 mb-3'>
        <label htmlFor="exampleFormControlInput1" className="form-label">Occupation</label>
        <select className="form-select" name='Occupation'
         value={user.Occupation} 
         onChange={(e) => handlechange(e)}>
            <option value="Ui-Ux">Ui-Ux</option>
            <option value="Web-Devloper">Web-Devloper</option>
            <option value="App-Devloper">App-Devloper</option>
        </select>
    </div>

    {/* <div>
        <p>Gender</p>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="Gender"
            onChange={(e) => handlechange(e)}
             id="flexRadioDefault1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="Gender"
            onChange={(e) => handlechange(e)}
             id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
        </div>
    </div> */}


    <div className="col-md-4">
        <label htmlFor="validationCustom03" className="form-label">City</label>
        <input type="text" name="City"
        value={user.City}
        onChange={(e) => handlechange(e)}
         className="form-control" id="validationCustom03" required />
        {/* <div className="invalid-feedback">Please provide a valid city.</div> */}
    </div>

    
    <Link className='nav=link-active' to = "/mainpage">

        <button className="btn btn-primary" onClick={handleSubmit}>Submit form</button>
    </Link> 
</form>

)
}

export default Profile
