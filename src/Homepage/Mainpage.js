import React from 'react'
import { Link } from 'react-router-dom'


function MainProfile() {
  return (
    <div className='header  border border-black'>
    
       <div>

              
            <div className='colors'>
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVmxhJTATFbJ4b-n3C4u4Mbywj0RpKwxLVg&s" alt="" />

            <p ></p>
            </div>

                <div className='nam px-5 mx-5 '>
                  <h3>Dudhat Vraj</h3>
                  <h6 >Full-stack Developer at Info-Tech Research Group</h6>
                  <p >Surat,Gujarat,india</p>
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

        </div>
        
        
  )
}

export default MainProfile