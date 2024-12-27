
import { Link } from 'react-router-dom'
import React, { useState,useEffect } from 'react'



function Mainpage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
  }
  return (
    <div className='header  border border-black'>
    
       <div>

              
            <div className='colors'>
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVmxhJTATFbJ4b-n3C4u4Mbywj0RpKwxLVg&s" alt="" />

            <p ></p>
            </div>

                <div className='nam px-5 mx-5 '>
                  <h3>{user.Firstname} {user.Lastname}</h3>
                  <h6 >{user.Occupation}</h6>
                  <p >{user.City}</p>
                </div>
                <div className='butn px-5 mx-5'>
                  <button type="button" className="btn btn-primary btn-rounded me-3 border-black">Open to</button>
                  <button type="button" className="btn btn-outline-primary border-primary me-3">Add Profile Section</button>
                  <button type="button" className="btn btn-outline-primary  me-3">Enhance Profile</button>
                  <button type="button" className="btn btn-outline-secondary border-black">Resource</button>
                </div> 



                <h5 className='name4'>JBS IT INSTITUTE</h5>
                
                <Link className='nav=link-active' to = "/home">
                <p className='name5'><i class="fa-solid fa-pen-to-square"></i></p> 
               </Link> 



               <div className='name6 '>
                <h4 >Open to work</h4>
                <h6>Full Stack Engineer · Back End Developer · Frontend Developer</h6>
                <button className='btnn text-primary'> Show detail</button>
                <p ><i class="fa-solid fa-pen-to-square"></i></p>


            </div>
    
            <img 
            src="https://yt3.googleusercontent.com/TqLqJrvIUOyeyROP5AVYoE6f9ufJjiWLSFxa6piENwAl7TGaKu-YLdBqJNHCa9I1_yrenLkARkc=s900-c-k-c0x00ffffff-no-rj" // Placeholder image
            alt="Company Logo"
            className="company-logo1"
          />




          </div>





<div className='boxes'>
<div className="box5 mt-2 rounded-3 ">
        <h4 className="vraj1 ms-5 mt-3">Analytics</h4>
            <p className="views ms-4">
                <i class="fa-solid fa-eye mx-2 ms-4"></i>private to you
            </p>
          <div className="main box2 d-flex">
                <div className="viewsprofile">
                    <h6 className="ms-5 text-primary">
                        <i class="fa-solid fa-users"></i> 1000 profile views
                    </h6>
                    <p className="p1 ms-5">
                       Discover who's viewed your <br /> profile.
                    </p>
                  </div>
            
            <div className="viewsprofile">
                  <h6 className="ms-5 text-primary">
                      <i class="fa-solid fa-chart-simple pe-2"></i>526 post
                          impressions
                      </h6>
                      <p className="p2 ms-5">
                        check out who's engaging with <br /> your posts.
                      </p>
              </div>
            </div>
          </div>
   

</div>  
            <button className="my-4 justify-content-center w-100 rounded-2 ">
                show all 5 resources <i class="fa-solid fa-arrow-right"></i>
              </button>


              <div className='laykat border border-black'>
                <h3>Exprience</h3>
                <Link className='nav=link-active' to = "/exprience">
                <p className='editing'><i class="fa-solid fa-plus"></i></p> 
               </Link> 

               
              </div>
              <p className='edit'>
              <i class="add fa-solid fa-pen-to-square"></i></p>

              <div className="experience-item">
          <img 
            src="https://yt3.googleusercontent.com/TqLqJrvIUOyeyROP5AVYoE6f9ufJjiWLSFxa6piENwAl7TGaKu-YLdBqJNHCa9I1_yrenLkARkc=s900-c-k-c0x00ffffff-no-rj" // Placeholder image
            alt="Company Logo"
            className="company-logo"
          />
          <div className="experience-details">
            <h4>Full Stack Developer</h4>
            <p>JBS IT INSTITUTE · Internship</p>
          </div>
        </div>


        <div className='education'>
            <h4>Education</h4>
            <p>show your qulalification and be up to 2X more linkely to recieve a recruive inmail</p>

            <Link className='nav=link-active' to = "/education">
            <button className='btn11 btn btn-primary' type="submit">Add Edudcation</button>
               </Link> 
        </div>


           <div className='skils'>
            <h4 className='skills'>Skills</h4>
            <p className='css'>css,html,javbascript,react.js</p>
            <Link className='nav=link-active' to = "/skills">
            <button className='btn12 btn btn-primary' type="submit"><i class="fa-solid fa-plus"></i>Add Skills</button>
               </Link> 
           </div>

        </div>
        
        
  )
}

export default Mainpage